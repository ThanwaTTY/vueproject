import Vue from 'vue'
import Vuex from 'vuex'
// import collect from  'collect.js'

Vue.use(Vuex)

const state = {
    loggedIn: true,
    // loggedIn: false,
    // keeplevel:'A',
    // auth : {},
    // guideLine : {},
    // // news : '',
    // memberSet : {
    //     soccer : {
    //         keeppt_0 : ""
    //     }
    // }
}

const getters = {  
    // leveltest:state => state.keeplevel
    level:state => state.keeplevel
}

const mutations = {
    setlevel(state,data){
        state.keeplevel = data
    },

}

const actions = {
    getLevel({commit},data){
        commit('setlevel',data)
    }
}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules :{
        // auth,
        // guideLine,       
        // news,
        // language,
        // setpt,

    }
})

export default store;