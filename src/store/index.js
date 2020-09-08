import Vue from 'vue'
import Vuex from 'vuex'
import auth from '../store/auth'
import info from '../store/info'
import category from './category'
import record from './record'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
    e: null
    
  },
  mutations: {
    setError (state, e){
      state.e = e
    },
    clearError (state){
      state.e = null
    }
  },
  getters: {
    e: s=>s.e
  },
  actions: {
    async fetchCurrency(){
      const key = process.env.VUE_APP_FIXER
     const res = await fetch(`http://data.fixer.io/api/latest?access_key=${key}&symbols=USD,EUR,RUB`)
     return await res.json()
    }
  },
  modules: {
    auth, info, category, record
  }
})
