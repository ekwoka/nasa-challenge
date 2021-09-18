export default function(Alpine){
    Alpine.persistedStore('favourites',{
        collection:[],
        add(image){
            if (this.collection.some(i=>i.title==image.title)) return
            image = {...image}
            image.expanded=false
            this.collection.push(image)
        },
        remove(image){
            this.collection.splice(this.collection.findIndex(i=>i.title==image.title),1)
        },
        toggle(image){
            if (this.collection.some(i=>i.title==image.title)) return this.remove(image)
            return this.add(image)

        },
        init(){
            this.collection.forEach(i=>i.expanded=false)
        }
    })
}