<template>
    <div>
        <table cellspacing="10" v-if="cartGoods.length">
            <thead>
            <tr>
                <th>商品信息</th>
                <th>单价</th>
                <th>数量</th>
                <th>金额</th>
                <th>操作</th>
                <th>购买</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item,index) in cartGoods" :key="index">
                <td>
                    <div class="clearfix">
                        <img :src="item.src" class="left" alt="加载中">
                        <div class="left">
                            <span class="description">  {{item.description}}</span>
                        </div>
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
                    <span class="absolute">{{item.price}}</span>
                </td>
                <td class="relative">
                    <div class="absolute">
                        <label>
                            <button @click="reduce(item)">-</button>
                            <input type="number"
                                   :value="item.count"
                                   @input="changeCount(item,$event)">
                            <button @click="add(item)">+</button>
                        </label>
                    </div>
                </td>
                <td class="relative">
                    <span class="absolute">{{item.price*item.count}}</span>
                </td>
                <td class="relative">
                    <button class="absolute" @click="deleteItem(item)">删除</button>
                </td>
                <td class="relative">
                    <button class="absolute" @click="buy(item)">购买</button>
                </td>
            </tr>
            </tbody>
        </table>
        <div v-else class="tip">
            <span>购物车空空如也，快去添加商品到购物车</span>
        </div>
    </div>
</template>

<script>

    import {mapState, mapMutations} from 'vuex'
    import {GoodsRecorder} from "@/store/goodsRecoder";

    export default {
        name: "CartPage",
        data() {
            return {
                timeoutId: 0
            }
        },
        computed: {
            ...mapState(['cartGoods']),
        },
        methods: {
            ...mapMutations(['deleteGoods', 'addRecord']),
            deleteItem(goods) {
                this.deleteGoods(goods)
            },
            reduce(goods) {
                goods.reduceCount()
            },
            add(goods) {
                goods.addCount(1)
            },
            buy(goods) {
                let record = new GoodsRecorder(
                    goods.src,
                    goods.price,
                    goods.count,
                    goods.size,
                    goods.color,
                    new Date().toLocaleString()
                )
                this.addRecord(record)
            },
            changeCount(goods, e) {

                goods.count = Number(e.target.value)
                console.log(goods.count)
                clearTimeout(this.timeoutId)
                this.timeoutId = setTimeout(() => {
                    if (goods.count > goods.max) {
                        goods.count = goods.max
                    }
                }, 500)
            }
        }
    }
</script>

<style scoped>
    table {
        text-align: center;
    }

    img {
        width: 100px;
        height: 100px;
    }

    .inline-box {
        display: inline-block;
        margin: 10px;
    }

    .description {
        display: inline-block;
        width: 200px;
        margin: 0 10px;
        text-align: left;

    }

    .clearfix::after {
        content: "";
        clear: both;
        display: table;
    }

    .left {
        float: left;
    }

    td {
        min-width: 100px;
    }

    input {
        width: 50px;
    }

    .relative {
        position: relative;
    }

    .absolute {
        position: absolute;
        top: 0;
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
