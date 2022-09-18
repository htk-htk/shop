<template>
    <div>
        <ul>
            <li>
                <router-link to="/index/goods/dress" class="link" active-class="active">女装</router-link>
            </li>
            <li>
                <router-link to="/index/goods/phone" class="link" exact-active-class="active">手机</router-link>
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        name: "SortNavBar"
    }
</script>

<style scoped>

    ul{
        list-style-type: none;
        margin: 20px;
    }
    li{

    }
    .link{
        text-decoration: none;
    }
    .active{
        background-color: cornflowerblue;
    }
</style>
