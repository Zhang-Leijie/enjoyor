import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
        path: "/sign-in",
        name: "sign-in",
        component(resolve) {
            require(['./pages/sign-in.vue'],resolve)
        }
    }, {
        path: "/home",
        name: "home",
        component(resolve) {
            require(['./pages/home.vue'],resolve)
        },
        children: [{
            path: "/main",
            name: 'main',
            component(resolve) {
                require(['./pages/main.vue'],resolve)
            }
        },{
            path: "/fund-detail",
            name: 'fund-detail',
            component(resolve) {
                require(['./pages/fund/fund-detail.vue'],resolve)
            }
        },{
            path: "/fund-list",
            name: 'fund-list',
            component(resolve) {
                require(['./pages/fund/fund-list.vue'],resolve)
            }
        },{
            path: "/fund-inlist",
            name: 'fund-inlist',
            component(resolve) {
                require(['./pages/fund/fund-inlist.vue'],resolve)
            }
        },{
            path: "/myitem-drafts",
            name: 'my-drafts',
            component(resolve) {
                require(['./pages/myitem/drafts.vue'],resolve)
            }
        },{
            path: "/myitem-creat",
            name: 'my-creat',
            component(resolve) {
                require(['./pages/myitem/creat-fund.vue'],resolve)
            }
        },{
            path: "/myitem-draftsfund",
            name: 'my-draftsfund',
            component(resolve) {
                require(['./pages/myitem/drafts-fund.vue'],resolve)
            }
        },{
            path: "/person",
            name: 'personal',
            component(resolve) {
                require(['./pages/person/person.vue'],resolve)
            }
        },{
	        path: "/home",
	        redirect: '/main'
    	}]
    }, {
        path: "/",
        redirect: '/sign-in'
    }
]

export default new VueRouter({
	routes
})

export const routerState = {
  previous: null
}