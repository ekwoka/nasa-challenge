import * as Kwoka from '../kwoka.js'

export default function(Alpine){
    Alpine.data('nasaMain',()=>({
        collection: [],
        async init(){
            this.loading = true
            this.collection = await Kwoka.fetchAPOD()
            setTimeout(()=>this.loading=false,500)
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
        page: 'main',
        loading: false,
        isLiked(photo){
            return this.$store.favourites.collection.some(i=>i.title==photo.title)
        }
    }))
}