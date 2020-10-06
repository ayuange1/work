import Vue from "vue";
import VueRouter from "vue-router";
import Router from "vue-router";
Vue.use(Router);
export default new VueRouter({
    mode:'history',
    routers:[
        {
            path:'/',
            redirect:'goods'
        },
        {
            path:'/goods',
            name:'Goods',
            component: () => import("../views/goods/index.vue"),
        },
        {
            path:'/comment',
            name:'Comment',
            component: () => import("../views/comment/index.vue"),
        },
        {
            path:'/merchant',
            name:'Merchant',
            component: () => import("../views/merchant/index.vue"),
        },
        
    ]
})