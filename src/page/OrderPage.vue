<template>
    <div>
        <table v-if="recordsBuy.length">
            <thead>
            <tr>

                <th>
                    商品信息
                </th>
                <th>
                    数量
                </th>
                <th>
                    总金额
                </th>
                <th>
                    时间
                </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item,index) in recordsBuy" :key="index">

                <td>
                    <div class="clearfix">
                        <img :src="item.src" class="left" alt="加载中" >
                        <div class="left">
                            <div class="inline-box">
                                <span>大小：</span>
                                <span class="size">{{item.size}}</span>
                            </div>
                            <div class="inline-box">
                                <span>颜色：</span>
                                <span class="color">{{item.color}}</span>
                            </div>
                        </div>
                    </div>
                </td>
                <td class="relative">
                    <span class="absolute">{{item.count}}</span>
                </td>
                <td class="relative">
                    <span class="absolute">{{item.price*item.count}}</span>
                </td>
                <td class="relative">
                   <span class="absolute">{{item.time}}</span>
                </td>
            </tr>
            </tbody>
        </table>
        <div v-else class="tip">
            <span>现在还没有订单哟</span>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "OrderPage",
        computed:{
            ...mapState(['recordsBuy'])
        }

    }
</script>

<style scoped>
    table{
        text-align: center;
    }

    img{
        width: 100px;
        height: 100px;
    }
    .inline-box{
        display: inline-block;
        margin: 10px;
    }
    .description{
        display: inline-block;
        width: 200px;
        margin:0 10px ;
        text-align: left;

    }
    .clearfix::after{
        content: "";
        clear: both;
        display: table;
    }
    .left{
        float: left;
    }
    td{
        min-width: 100px;
    }
    input{
        width: 30px;
    }
    .relative{
        position: relative;
    }
    .absolute{
        position: absolute;
        top:0;
        left: 50%;
        transform: translate(-50%);
        width: 100%;
    }
    .tip{
        text-align: center;
        font-size: 30px;
        font-weight: bold;
        color: red;
    }
</style>
