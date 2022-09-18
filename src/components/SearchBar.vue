<template>
    <div>
        <div class="dropdown">
            <input @input="input">
            <div class="dropdown-content">
                <p v-for="(item,index) in result" :key="index"
                    :class="selectClass"
                >{{item}}</p>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "SearchBar",
        data(){
            return {
                message:'',
                data:[
                    "楚乔传",
                    "楚汉传奇",
                    "诛仙",
                    "吞噬星空",
                    "神印王座",
                    "斗罗大陆",
                    "凡人修仙传"
                ],
                result:['斗罗大陆','凡人修仙传'],
                selectClass:{
                    a:true
                }
            }
        },
        methods:{
            input(e){
                console.log(e.target.value)
                this.selectClass.a=false
            }
        }

    }
</script>

<style scoped>
    .dropdown{
        position: relative;
        display: inline-block;
    }
    .dropdown-content{
        position: absolute;
        z-index: 10;
        border: 1px black solid;
        background-color: white;
    }
    .a{
        display: none;
    }
</style>
