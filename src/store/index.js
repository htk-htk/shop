import Vue from 'vue'
import Vuex from 'vuex'
import {imgsDress, imgsPhone} from "@/store/goods";

Vue.use(Vuex)
const state = {
    imgsDress,
    imgsPhone,
    cartGoods:[],
    recordsBuy:[]
}

const getters = {}

const mutations = {
    addGoods(state,payload){
        state.cartGoods.push(payload)
    },
    deleteGoods(state,payload){
        state.cartGoods.splice(state.cartGoods.indexOf(payload),1)
    },
    addRecord(state,payload){
        state.recordsBuy.push(payload)
    },
    deleteRecord(state,payload){
        state.recordsBuy.splice(state.recordsBuy.indexOf(payload),1)
    }
}
const store = new Vuex.Store({
    state,
    getters,
    mutations
})

export default store


