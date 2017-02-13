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
            path: "/fund-unlist",
            name: 'fund-unlist',
            component(resolve) {
                require(['./pages/fund/fund-unlist.vue'],resolve)
            }
        },{
            path: "/myitem-drafts",
            name: 'my-drafts',
            component(resolve) {
                require(['./pages/myitem/drafts.vue'],resolve)
            }
        },{
            path: "/myitem-pop",
            name: 'my-pop',
            component(resolve) {
                require(['./pages/myitem/pop.vue'],resolve)
            }
        },{
            path: "/myitem-creat",
            name: 'my-creat',
            component(resolve) {
                require(['./pages/myitem/creat-fund.vue'],resolve)
            }
        },{
            path: "/myitem-edit",
            name: 'my-edit',
            component(resolve) {
                require(['./pages/myitem/drafts-fund.vue'],resolve)
            }
        },{
            path: "/myitem-popedit",
            name: 'my-popedit',
            component(resolve) {
                require(['./pages/myitem/pop-fund.vue'],resolve)
            }
        },{
            path: "/person",
            name: 'personal',
            component(resolve) {
                require(['./pages/person/person.vue'],resolve)
            }
        },{
            path: "/user-add",
            name: 'add-user',
            component(resolve) {
                require(['./pages/user/adduser.vue'],resolve)
            }
        },{
            path: "/user-list",
            name: 'list-user',
            component(resolve) {
                require(['./pages/user/userlist.vue'],resolve)
            }
        },{
            path: "/user-edit",
            name: 'edit-user',
            component(resolve) {
                require(['./pages/user/edituser.vue'],resolve)
            }
        },{
            path: "/notice-list",
            name: 'notice-list',
            component(resolve) {
                require(['./pages/notice/notice-list.vue'],resolve)
            }
        },{
            path: "/notice-detail",
            name: 'notice-detail',
            component(resolve) {
                require(['./pages/notice/notice-detail.vue'],resolve)
            }
        },{
            path: "/notice-create",
            name: 'notice-create',
            component(resolve) {
                require(['./pages/notice/notice-create.vue'],resolve)
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