//直接更新state的多个方法的对象

//写法很固定

import{
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS
} from './mutation-types'

export default{
//传包含数据的对象
    [RECEIVE_ADDRESS](state,{address}){
        state.address = address
    },
    [RECEIVE_CATEGORYS](state,{categorys}){
        state.categorys = categorys
    },
    [RECEIVE_SHOPS](state,{shops}){
        state.shops = shops
    },
}