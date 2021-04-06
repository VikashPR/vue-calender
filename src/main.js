import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextAreaAutoSize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextAreaAutoSize);

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyCOzEL6JYYvcWHyciGEwt3-EiaYj-pn0jc",
    authDomain: "calander-a201d.firebaseapp.com",
    projectId: "calander-a201d",
    storageBucket: "calander-a201d.appspot.com",
    messagingSenderId: "243501604103",
    appId: "1:243501604103:web:2ab6bef2cfa38e306879a2"
});
export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
