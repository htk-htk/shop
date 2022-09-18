<template>
    <div>
        <PageNavBar :pages="pages"/>
        <router-view ></router-view>
    </div>
</template>

<script>
    import PageNavBar from "@/page/PageNavBar";

    export default {
        name: 'App',
        components: { PageNavBar},
        data() {
            return {
                pages: [
                    {path: '/index', title: '主页'},
                    {path: '/cart', title: '购物车',exact:true},
                    {path: '/order', title: '订单详情',exact:true}
                ]
            }
        },

        methods: {

        }
    }
</script>

<style scoped>

</style>
