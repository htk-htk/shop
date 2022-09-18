<template>
    <div>
        <div class="flex">
            <div v-for="img in imgs" class="relative" :key="img.id">
                <router-link :to="`/goodsView/${encodeUrl(img.src)}`">
                    <img :src="img.src" class="left">
                </router-link>
                <div class="left marin-left">
                    <p>{{img.description}}</p>
                    <span> &yen; {{img.price}}</span>  <!--人民币编码 &yen; 或 &#65509; -->
                </div>

            </div>
        </div>


    </div>
</template>

<script>
    import {encodeUrl} from "@/utils/fixUrl";

    export default {
        name: "ImageContent",
        props: {
            imgs: {
                type: Array,
                required: true
            }
        },
        data(){
            return {
                encodeUrl:encodeUrl
            }
        }


    }
</script>

<style scoped>

    div.flex {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-between;
        align-items: stretch;
        align-content: space-around;


    }

    .flex > div {
        max-width: 33%;
        overflow: hidden;
        margin: 20px;
    }

    .flex img {
        max-width: 50%;
        width: 300px;
        height: 300px;
        float: left;
        object-fit: fill;
    }

    img:hover {
        cursor: pointer;
    }

    .relative {
        position: relative;
    }

    span {
        position: absolute;
        bottom: 0;
    }

    p {
        width: 100px;
        overflow: hidden;
        text-overflow: ellipsis;
        word-wrap: break-word;
        word-break: keep-all;
    }

    .left {
        float: left;
    }

    .marin-left {
        margin-left: 20px;
    }
</style>
