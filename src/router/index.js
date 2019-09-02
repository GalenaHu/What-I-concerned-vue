import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/main'
import Search from '../components/search'
import Drama from '../components/drama'
import Collection from '../components/collection'

Vue.use(Router);

export default new Router({
    routes: [{
        name: 'RootPage',
        path: '/',
        components: {
            main: Main
        },
        meta: {
            keepAlive: true
        }
    },
        {
            name: 'SearchPage',
            path: '/search',
            components: {
                main: Search
            },
            meta: {
                keepAlive: true
            }
        },{
            name: 'DramaPage',
            path: '/drama/:dramaId',
            components: {
                main: Drama
            }
        },{
            name: 'Collection',
            path: '/collection',
            components: {
                main: Collection
            }
        }
    ]
})
