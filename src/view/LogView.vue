<template>
    <div>
        <form>
            <div class="grid">
                <div class="item1 right">
                    <button class="exit-button" @click="exit">x</button>
                </div>
                <div class="item2 center">
                    <h4>用户登陆</h4>
                </div>
                <div class="item3 right">
                    <label for="name">用户名</label>
                </div>
                <div class="item4 ">
                    <input id="name"

                           @input="$emit('input',$event.target.value)"
                           autocomplete="off"
                           placeholder="请输入用户名"
                           v-model="username"
                           required>
                </div>
                <div class="item5 right">
                    <label for="password">密码</label>
                </div>
                <div class="item6">
                    <input id="password"
                           type="password"
                           @input="$emit('input',$event.target.value)"
                           autocomplete="off"
                           placeholder="请输入密码"
                           v-model="password"
                           required>
                </div>
                <div class="item7 center">
                    <button @click="validationLog" class="log-button">登陆</button>
                    <button @click="register" class="register-button">注册</button>
                </div>
            </div>
        </form>

    </div>
</template>

<script>

    export default {
        name: "LogView",
        data(){
            return {
                username:'',
                password:''
            }
        },
        methods: {
            validationLog() {

            },
            register() {

            },
            exit() {

            }
        }
    }
</script>

<style scoped>
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    .grid {
        display: grid;
        grid-template-columns: auto auto;
        gap: 20px;
        width: 40%;
        background-color: burlywood;
    }

    .item1 {
        grid-row: 1/span 1;
        grid-column: 1/span 2;
        text-align: right;
    }

    .item2 {
        grid-row: 2/span 2;
        grid-column: 1/span 2;
    }

    .item3 {
        grid-row: 4/span 2;
        grid-column: 1/span 1;
    }

    .item4 {
        grid-row: 4/ span 2;
        grid-column: 2/span 1;
    }

    .item5 {
        grid-row: 6/ span 2;
        grid-column: 1/span 1;
    }

    .item6 {
        grid-row: 6/ span 2;
        grid-column: 2/span 1;
    }

    .item7 {
        grid-row: 8/span 2;
        grid-column: 1/span 2;
    }

    .center {
        text-align: center;
    }

    .right {
        text-align: right;
    }

    button {
        border-radius: 5px;
    }

    button:hover {
        cursor: pointer;
    }

    .log-button {
        background-color: orangered;
        border: none;
        padding: 5px 30px;
        margin-right: 50px;
        color: white;
    }

    .register-button {
        background-color: orange;
        border: none;
        padding: 5px 10px;
        color: white;
    }

    .exit-button {
        background-color: burlywood;
        border: none;
        font-weight: bold;
        font-size: 30px;
        color: red;
    }

</style>
