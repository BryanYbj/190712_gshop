<template>
  <div id="app">
    
   <router-view></router-view>
   <FooterGuide v-show="$route.meta.showFoot"></FooterGuide>
  </div>
</template>

<script>

import {mapActions} from 'vuex'
import FooterGuide from './components/FoodterGuide/FooterGuide.vue'
//import {reqFoodTypes} from './api'
export default { 
  cmounted(){
    this.$store.dispatch('getAddress')
  },
  components:{
    FooterGuide
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .app
    width 100%
    height 100%
    background #f5f5f5
 

</style>
