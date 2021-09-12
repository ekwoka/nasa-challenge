import * as Kwoka from '../kwoka.js'

export default function(Alpine){
    Alpine.data('nasaMain',()=>({
        collection: [],
        async init(){
            this.collection = await Kwoka.fetchAPOD()
        }
    }))
}