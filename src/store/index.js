//Vue最核心的管理对象Store

//Vue和Vuex

import Vue from 'vue'
import Vuex from 'vuex'

//引入store里面的对象
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

//Vuex 是插件 要声明使用

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
})