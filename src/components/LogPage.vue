<template>
    <div>
        <fieldset>
            <router-link to="/">关闭</router-link>
            <div class="flex-container">
                <div>
                    <span class="text">用户名</span>
                    <label>
                        <input>
                    </label>
                </div>
                <div>
                    <span class="text">密码</span>
                    <label>
                        <input>
                    </label>
                </div>
                <div class="sub-flex">

                    <button style="flex-grow: 3">登录</button>
                    <button style="flex-grow: 1">忘记密码</button>

                </div>

            </div>

            <legend>用户登录页面</legend>
        </fieldset>

    </div>


</template>

<script>
    export default {
        name: "LogPage",
        props:['flag'],
        beforeRouteEnter(to,from,next){
            //不能访问this
            next(vm=>{
                console.log(vm)
            })
        },

    }
</script>

<style scoped>
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    fieldset{
        width: 400px;
        margin: auto;
        padding: 20px;
    }
    .flex-container {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        height:500px;
        background-color: DodgerBlue;
        justify-content:center;
        align-content: center;
        align-items: stretch;
    }
    #regText a{
        position: absolute;
        top: 0;
        right: 50px;
        text-decoration: none
    }

    a{
        text-decoration: none;
    }
    .flex-container>div {
        background-color: red;
        margin: 10px;
        text-align: right;
    }
    .text{
        display: inline-block;
        width: 50px;
        text-align: center;
    }
    .sub-flex{
        display: flex;
        justify-content: center;

    }

    .sub-flex button{
        margin-left: 10px;
        margin-right: 10px;
        text-align: center;
    }
</style>
