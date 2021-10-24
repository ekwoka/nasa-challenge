import persistedStore from './plugins/persistedStore.js'
import intersect from '@alpinejs/intersect'
import rias from './plugins/rias.js'
import router from '@ekwoka/x-router'

export default plugins = [persistedStore, intersect, rias, router]