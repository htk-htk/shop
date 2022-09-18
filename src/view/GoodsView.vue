<template>
    <div>
        <div class="grid">
            <div class="itemImage">
                <img :src="src" alt="加载中">
            </div>
            <div class="itemDescription">
                <div>
                    <span>颜色：</span>
                    <BaseRadioBox :radios="colors" @change="colors.selected=$event"/>
                </div>
                <div>
                    <span>大小：</span>
                    <BaseRadioBox :radios="sizes" @change="sizes.selected=$event"/>
                </div>
                <div>
                    <span>数量：</span>
                    <div>
                        <button :disabled="isMin"  @click="reduce">-</button>
                        <label>
                            <input type="number"
                                    :value="sum"
                                    @input="changeSum"
                                    class="input">
                        </label>
                        <button :disabled="isMax" @click="add">+</button>
                    </div>
                </div>

            </div>
            <div class="itemButtons relative">
                <p style="color: red;font-size: 20px">{{tip}}</p>
                <div class="absolute">
                    <button @click="pushCart">加入购物车</button>
                    <button @click="pay">购买</button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import BaseRadioBox from "@/view/BaseRadioBox";
    import {decodeUrl} from "@/utils/fixUrl";
    import {GoodsMessage}  from "@/store/goodsMessage"
    import {mapState,mapMutations} from 'vuex'
    import {imgsPhone,imgsDress} from "@/store/goods";
    import {GoodsRecorder} from "@/store/goodsRecoder";
    let goodsArr= [...imgsDress,...imgsPhone]
    export default {
        name: "GoodsView",
        components: {BaseRadioBox},
        props:{
            imgSrc:String
        },

        data(){
          return {
              colors:{
                  selected:'红',
                  items:['红','绿','蓝']
              },
              sizes:{
                  selected: 'M',
                  items:['XS','S','M',"L","XL","XLL"]
              },
              sum:1,
              total:200,
              placeholder:'',
              timeoutId:0,
              tip:'',
              findGoods:null
          }
        },
        computed:{
            isMin(){
                return this.sum <=1;
            },
            isMax(){
                return this.sum>=this.total
            },
            src(){
              return decodeUrl(this.imgSrc)
            },
            ...mapState(['cartGoods','recordsBuy'])

        },
        watch:{

        },
        methods:{
            ...mapMutations(['addGoods','addRecord']),
            add(){
                this.sum++
                if(this.sum>this.total) this.sum=this.total
            },
            reduce(){
                this.sum--
                if(this.sum<1) this.sum=1
            },
            changeSum(e){
                this.sum=Number(e.target.value)
                clearTimeout(this.timeoutId)
                this.timeoutId=setTimeout(()=> {
                    if(this.sum>this.total){
                        this.sum=this.total
                    }
                },500)
            },
            pushCart(){
                clearTimeout(this.timeoutId)
                if(!this.findGoods){          //是否缓存了该商品
                    for(let i=0;i<goodsArr.length;i++){     //找到对应的商品
                        if(goodsArr[i].src===this.src){
                        this.findGoods=goodsArr[i]
                            break
                        }
                    }
                }
                for(let i=0;i<this.cartGoods.length;i++){      //判断购物车里是否存在该商品并且属性也相同
                    if(
                        this.cartGoods[i].src===this.src &&
                        this.cartGoods[i].size===this.sizes.selected &&
                        this.cartGoods[i].color===this.colors.selected
                    ){
                        this.cartGoods[i].addCount(this.sum)   //如果存在直接加数量
                        this.tip="添加成功"
                        this.timeoutId=setTimeout(()=>{
                            this.tip=""
                        },2000)
                        return
                    }
                }
                let goods=new GoodsMessage(         //如果不存在该商品,新建商品信息对象
                    this.findGoods.src,
                    this.findGoods.description,
                    this.findGoods.price,
                    this.sum,
                    this.sizes.selected,
                    this.colors.selected
                )
                this.addGoods(goods)
                this.tip="添加成功"
                this.timeoutId=setTimeout(()=>{
                    this.tip=""
                },2000)
            },
            pay(){
                clearTimeout(this.timeoutId)
                if(!this.findGoods){          //是否缓存了该商品
                    for(let i=0;i<goodsArr.length;i++){     //找到对应的商品
                        if(goodsArr[i].src===this.src){
                            this.findGoods=goodsArr[i]
                            break
                        }
                    }
                }
                let record=new GoodsRecorder(
                    this.findGoods.src,
                    this.findGoods.price,
                    this.sum,
                    this.sizes.selected,
                    this.colors.selected,
                    new Date().toLocaleString()
                )
                this.tip="购买成功"
                this.addRecord(record)
                this.timeoutId=setTimeout(()=>{
                    this.tip=""
                },2000)

            }
        },
        created() {

        }
    }
</script>

<style scoped>
    .grid{
        display: grid;
        width: 50%;
        height: 400px;
        margin: 30px auto;

        grid-template-columns: 60% 40%;
        grid-template-rows: 20% 20% 20% 20% 20%;
        /*word-break: break-all;*/
    }
    .itemImage{
       grid-area: 1/1/span 4/span 1;
        margin-right: 30px;
    }
    .itemDescription{
        grid-area: 1/2/span 4/span 1;
    }
    .itemButtons {
        grid-area: 5/1/span 1/span 2;
        text-align: center;
    }
    img{
        width: 100%;
        height: 100%;
    }
    input{
        width: 50px;
    }
    .relative{
        position: relative;
    }
    .absolute{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }

</style>
