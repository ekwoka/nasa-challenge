import Alpine from 'alpinejs'
import Plugins from './plugins.js'
import Data from './data.js'
import Stores from './stores.js'
import * as Kwoka from './kwoka.js'

window.Alpine = Alpine
window.Kwoka = Kwoka

let items = [...Plugins,...Data,...Stores]
items.forEach(i=>Alpine.plugin(i))

Alpine.start()