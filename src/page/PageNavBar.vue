<template>
    <div>
        <div class="center">
            <ul>
                <li v-for="(page,index) in pages" :key="index">
                    <router-link :to="page.path"
                                 class="link"
                                 active-class="active"
                                 exact-active-class="exact">{{page.title}}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PageNavBar",
        props: {
            pages: {
                type: Array,
                require: true
            },

        },
        data() {
            return {
                active: false
            }
        },
        created() {
        },
        computed: {},
        methods:{

        }
    }
</script>

<style scoped>
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    .center {
        text-align: center;
        background-color: #f1f1f1;
    }

    ul {
        list-style-type: none;
        overflow: auto;
        display: inline-block;
    }

    li {
        float: left;
    }

    li .link {
        display: block;
        padding: 5px;
        text-decoration: none;
        border-right: 1px black solid;
        color: black;
    }

    li:last-child .link {
        border-right: none;
    }


    .active {
        background-color:yellowgreen;

    }
    .exact{
        background-color:cornflowerblue ;
    }
    li .link:hover:not(.active) {
        background-color: gray;
        color: white;
    }

</style>
