import Vue from 'vue'
import Router from 'vue-router'
import home from '../page/home/home'
import login from '../components/login/login'
import pizzaMenu from '../components/menu/menu'
import manage from '../components/manage/manage'
import aboutUs from '../components/aboutUs/aboutUs'
import history from '../components/historicalOrder/history'
import orderDocument from '../components/orderDocument/orderDocument'
import expressInfo from '../components/expressInfo/expressInfo'
import contactUs from '../components/contactUs/contactUs'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'home',
        component: home
    },
    {
	    path: '/login',
        name: 'login',
        component: login    	
    },
    {
    	path: '/pizzaMenu',
    	name: 'pizzaMenu',
    	component: pizzaMenu
    },
    {
    	path: '/manage',
    	name: 'manage',
    	component: manage
    },
    {
    	path: '/aboutUs',
    	name: 'aboutUs',
    	component: aboutUs,
        redirect:'/aboutUs/history',
        children:[
            {
                path: 'history',
                name: 'history',
                component: history        
            },
            {
                path: '/orderDocument',
                name: 'orderDocument',
                component: orderDocument        
            },
            {
                path: '/expressInfo',
                name: 'expressInfo',
                component: expressInfo        
            },
            {
                path: '/contactUs',
                name: 'contactUs',
                component: contactUs        
            }            
        ]
    }
  ]
})
