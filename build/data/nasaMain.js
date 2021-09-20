import * as Kwoka from '../kwoka.js'

export default function(Alpine){
    Alpine.data('nasaMain',()=>({
        collection: [],
        favouritesCollection: [],
        page: 'main',
        loading: false,
        initialized: false,
        menuExpanded: false,
        effects: [],
        async init(){
            if(window.location.pathname.length>=2) this.changePage(window.location.pathname.substring(1))
            this.effects.push(Alpine.effect(()=>this.menuExpanded?document.body.classList.add('scroll-lock'):document.body.classList.remove('scroll-lock')))
            if(this.page=='main') await this.loadMain()
            this.initialized=true
        },
        async loadMain(){
            
            this.loading=true
            this.collection=[]
            this.collection = await Kwoka.fetchAPOD()
            this.favouritesCollection=[...this.$store.favourites.collection]
            setTimeout(()=>this.loading=false,400)
        },
        async loadMore(){
            if (!this.initialized || this.loading) return
            try {
                this.loading = true
                this.collection.push(...(await Kwoka.fetchAPOD()))
                setTimeout(()=>this.loading=false,500)
            } catch(e) {
                console.log(e)
                return this.loadMain()
            }
        },
        changePage(title){
            if(title==this.page) return
            this.loading=true
            if(title=='favourites') this.favouritesCollection=[...this.$store.favourites.collection]
            if(title=='main') this.loadMain()
            this.page=title
            history.pushState(null,title,`${window.location.origin}/${title}`)
            window.scrollTo(0,0)
        },
        isLiked(photo){
            return this.$store.favourites.collection.some(i=>i.title==photo.title)
        }
    }))
}