import Vue from "vue";
import Vuex from "vuex";
import  createPersistedState  from  'vuex-persistedstate'
import authService from './services/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    processing:false,
    loaded:false,
    alert:{
      type:'success',
      show:false,
      message:''
    }
  },
  mutations: {
    setLoaded:(state,loaded)=>{
      state.loaded = loaded;
    },
    setAlertMessage:(state,data)=>{
      state.alert = data;

      setTimeout(()=>{
        state.alert.show = false; 
      },data.timeout);
      
    }
  },
  actions: {},
  modules:{
    authService
  },
  plugins: [createPersistedState()]
});
