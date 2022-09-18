import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexPage from "@/page/IndexPage";
import CartPage from "@/page/CartPage";
import OrderPage from "@/page/OrderPage";
import GoodsView from "@/view/GoodsView";


Vue.use(VueRouter)

const routes=[
    {
        path: '/',
        redirect:'/index'
    },
    {
        path: "/index",
        component:IndexPage,
    },
    {
        path: '/index/goods/:id',
        component: IndexPage,
        props: true
    },
    {
        path: "/cart",
        component: CartPage
    },
    {
        path: "/order",
        component: OrderPage
    },

    {
        path:'/goodsView/:imgSrc',
        component:GoodsView,
        props: true,
        // children:[
        //     {
        //         path:'*',
        //         component:GoodsView
        //     }
        // ]

    }
]

const router=new VueRouter({
    routes,
    mode:'history'
})

export default router
