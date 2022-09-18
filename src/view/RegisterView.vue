<template>
    <div>
        <form @submit.prevent style="width: 40%">
            <fieldset>
                <legend>用户注册</legend>
            <div class="flex">
                <div class="relative">
                    <label for="username">用户名</label>
                    <input id="username"
                           v-model="name"
                           :placeholder='nameTip'
                           autocomplete="off"
                           :style="{'--nameColor':nameColor}">
                </div>
                <div class="relative">
                    <label for="pd">密码</label>
                    <input id="pd"
                           type="password"
                           v-model="password"
                           :placeholder="passwordTip"
                           autocomplete="off"
                           :style="{'--passwordColor':passwordColor}">

                </div>
                <div class="relative">
                    <label for="rePassword">确认密码</label>
                    <input id="rePassword"
                           type="password"
                           v-model="rePassword"
                           :placeholder="rePasswordTip"
                           autocomplete="off"
                           :style="{'--rePasswordColor':rePasswordColor}">
                </div>
                <div class="center">
                    <button type="submit" @click="register">注册</button>
                </div>
            </div>

            </fieldset>
        </form>

    </div>
</template>

<script>


    export default {
        name: "RegisterView",
        data() {
            return {
                name: '',
                password: '',
                rePassword: '',
                nameColor: 'blue',
                passwordColor: 'blue',
                rePasswordColor: 'blue',
                nameTip:"请输入用户名",
                passwordTip:"请输入密码",
                rePasswordTip:"请输入重复密码"
            }
        },
        methods: {
            register() {
                if (this.name.length < 3) {
                    this.nameTip = "用户名长度至少3位"
                    this.nameColor="red"
                    this.name=''
                    return
                }
                if (this.password.length < 6) {
                    this.passwordTip= "密码长度最少6位"
                    this.passwordColor="red"
                    this.password=''
                    return
                }
                if (this.password !== this.rePassword) {
                    this.rePasswordTip = "两次输入的密码不一致"
                    this.rePasswordColor='red'
                    this.rePassword=''

                }
            }
        }
    }
</script>

<style scoped>

    .flex {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        align-content: center;
    }

    .flex div {
        text-align: right;
        margin: 10px;
    }

    .flex .center {
        text-align: center;
    }
    label{
        margin-right: 10px;
    }
    button {
        padding: 5px 20px;
        border-radius: 10px;
    }

    #username::placeholder {
        color: var(--nameColor);
    }

    #pd::placeholder {
        color: var(--passwordColor);
    }

    #rePassword::placeholder {
        color: var(--rePasswordColor);
    }

    .relative {
        position: relative;
    }
    legend{
        text-align: center;
    }
</style>
