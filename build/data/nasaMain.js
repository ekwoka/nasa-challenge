import * as Kwoka from '../kwoka.js'

export default function(Alpine){
    Alpine.data('nasaMain',()=>({
        collection: [],
        favouritesCollection: [],
        async init(){

            if(window.location.pathname.length>=2) this.page=window.location.pathname.substring(1)
            if(this.page=='main') this.loadMain()
        },
        async loadMain(){
            this.loading=true
            this.collection=[]
            this.collection = await Kwoka.fetchAPOD()
            this.favouritesCollection=[...this.$store.favourites.collection]
            setTimeout(()=>this.loading=false,400)
        },
        async loadMore(){
            if (this.collection.length==0 && !this.loading) return
            try {
                this.loading = true
                this.collection.push(...(await Kwoka.fetchAPOD()))
                setTimeout(()=>this.loading=false,500)
            } catch(e) {
                console.log(e)
                return this.init()
            }
        },
        changePage(title){
            this.loading=true
            if(title=='favourites') this.favouritesCollection=[...this.$store.favourites.collection]
            if(title=='main') this.favouritesCollection=[...this.$store.favourites.collection]
            this.page=title
            history.pushState(null,title,`${window.location.origin}/${title}`)
            setTimeout(()=>this.loading=false,400)
        },
        page: 'main',
        loading: false,
        isLiked(photo){
            return this.$store.favourites.collection.some(i=>i.title==photo.title)
        }
    }))
}