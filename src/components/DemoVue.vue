<template>
    <div>
        <div v-if="flag">
            <button @click="reverseMessage">reverseMessage</button>
            <p>{{message}}</p>
            <label for="firstName">firstName</label>
            <input v-model="firstName" id="firstName">
            <br>
            <label for="lastName">lastName</label>
            <input v-model="lastName" id="lastName">
            <label for="fullName">fullName</label>
            <input v-model="fullName" id="fullName">
            <p>{{fullName}}</p>
        </div>


        <label>
            question:<input v-model="question">
        </label>
        <p>{{answer}}</p>
    </div>
</template>

<script>
    import _ from 'lodash'
    import axios from 'axios'
    export default {
        name: "DemoVue",
        props:{

        },
        data(){
            return {
                message:'hello world',
                firstName:'job',
                lastName:'alias',
                question:'',
                answer:'please input a question',
                flag:true
            }
        },
        computed:{
            fullName:{
                get(){
                    return this.firstName+" "+this.lastName
                },
                set(v){
                    let names=v.split(" ")
                    let firstName=names[0]
                    let lastName=names[1]
                    this.firstName=firstName
                    this.lastName=lastName
                }
            }
        },

        watch:{
            question:function (newValue) {
                this.answer = 'Waiting for you to stop typing...'
                this.debounceGetAnswer(newValue)
            }
        },

        methods:{
            reverseMessage(){
                this.message= this.message.split("").reverse().join("")


            },
            getAnswer(question){
                if(question.charAt(question.length-1)!=="?"){
                    this.answer= 'Questions usually contain a question mark. ;-)'
                    return
                }
                this.answer = 'Thinking...'
                axios.get("'https://yesno.wtf/api'").then(response => {
                    this.answer=response.data.answer
                }).catch(err=>{
                    console.log(err)
                })
            }
        },
        beforeCreate() {
            //不能访问this
        },
        created() {
            //开始可以访问this
            this.debounceGetAnswer=_.debounce(this.getAnswer,500)
        },
        beforeMount() {
        },
        mounted() {
        },
        beforeUpdate() {
        },
        updated() {
        },
        beforeDestroy() {
        },
        destroyed() {
        }
    }
</script>

<style scoped>

</style>
