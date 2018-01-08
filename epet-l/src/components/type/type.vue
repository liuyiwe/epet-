<template>
  <div id="sorts">
    <div class="title">
      <div class="sort ">
        <router-link to="detail">分类</router-link>
      </div>
      <div class="brand">
        <router-link to="brand">品牌</router-link>
      </div>
    </div>
    <router-view :sortsData="sortsData" :brandData="brandData"></router-view>
  </div>
</template>

<script>
  import detail from '../detail/detail.vue'
  import brand from  '../brand/brand.vue'
  import axios from 'axios'
  export default{
    data () {
      return {
        sortsData:[],
        brandData:[]


    }
    },
    created(){
      axios.get('/api2/sortsData')//获取数据
        .then((res) => {
          this.sortsData = res.data.sortsData.categorys
//          console.log(555,this.sortsData)测试数据是否获取到

 //         console.log(typeof this.sortsData)
        })
      axios.get('/api2/brandData')
        .then((res) =>{
        this.brandData = res.data.brandData.brand
         console.log(121212,this.brandData)
          //console.log(typeof this.brandData)
        })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
  @import "../../common/stylus/mixin.styl"
  r = 375rem/16
  #sorts
    .title
      position fixed
      background white
      top 0
      right 0
      font-size (16/r)
      box-sizing border-box
      padding 0 (15/r)
      height (40/r)
      width 100%
      border-bottom (1/r) solid #cbcbcb
      z-index 11
      &>div
        float left
        height 100%
        padding-top (10/r)
        width 50%
        box-sizing border-box
        .active
          footer-run(red)
        a
          display inline-block
          height 100%
      .sort
        padding-left 30%
      .brand
        padding-right 30%

</style>
