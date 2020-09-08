import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import Paginate from 'vuejs-paginate'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import curencyFilter from '@/filters/currency.filter'
import tooltipDirectives from '../directives/tooltip.directive'
import messagePlugin from '@/utils/message.plugin'
import Loader from '@/components/app/Loader'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false


Vue.use (messagePlugin)
Vue.use (Vuelidate)
Vue.filter('date', dateFilter)
Vue.filter('currency', curencyFilter)
Vue.directive('tooltip', tooltipDirectives)
Vue.component('Loader', Loader)
Vue.component('paginate', Paginate)


firebase.initializeApp({ 
  apiKey: "AIzaSyBog2ilLPj2PDK6qJPpxEdd_Gw1DJKO5zA",
  authDomain: "vue-crm-f93f4.firebaseapp.com",
  databaseURL: "https://vue-crm-f93f4.firebaseio.com",
  projectId: "vue-crm-f93f4",
  storageBucket: "vue-crm-f93f4.appspot.com",
  messagingSenderId: "735661374997",
  appId: "1:735661374997:web:bcd19786f5e5458c3a181c",
  measurementId: "G-S537NPNGJ8"
})

let app

firebase.auth().onAuthStateChanged(()=> {
  if (!app) {
  app=new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')}
})



