import Alpine from 'alpinejs'
import Plugins from './plugins.js'
import Data from './data.js'
import Stores from './stores.js'
import * as Kwoka from './kwoka.js'

window.Alpine = Alpine
window.Kwoka = Kwoka

Plugins.forEach(plugin=>Alpine.plugin(plugin))
Data.forEach(data=>Alpine.plugin(data))
Stores.forEach(store=>Alpine.plugin(store))

Alpine.start()