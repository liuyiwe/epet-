<template>
  <div id="brand"  ref="brands">
    <div class="brand-list" >
      <div class="recom wrapper bgfff" v-if="brandData" v-for="(item, index) in brandData">
        <div class="titl">
          <span class="c999">{{item.title}}</span>
        </div>
        <div class="list">
          <ul >
            <li class="fl" v-if="item.list" v-for="(list, index) in item.list" >
              <img class="image" :src="list.logo" alt="">
              <p class="name">{{list.name}}</p>
              <p class="address">{{list.address}}</p>
            </li>
          </ul>
        </div>
      </div>
      <!--<ul>-->
        <!--<li v-if="brandData" v-for="(item, index) in brandData">{{item.title}}</li>-->
      <!--</ul>-->

    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import axios from 'axios'
  export default{
    props: {
//      把数据以数组传进来
      brandData: Array
    },
    data (){
      return {
        sortBrand: {},
        sortArr:[]

      }
    },
    mounted(){
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.brands, {click: true})
      })
    },
    methods:{


    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  #brand
    padding-top 40px
    height 620px
    width 100%
    .brand-list
      width 100%
      background #f3f4f5
      overflow hidden
      .recom
        padding-bottom 15px
        margin-bottom 10px
        .titl
          text-align center
          .c999
            font-size 13px
            color darkgray
            display inline-block
            margin-top 20px
      .list
        ul
          overflow hidden
          li
            margin-top 20px
            width 33%
            padding 0 5px
            float left
            .image
              width 111px
              height 62px
              display block
            .name
              height 20px
              overflow hidden
              text-overflow ellipsis
              white-space nowrap
              font-size 13px
              margin-top 5px
              text-align center
            .address
              text-align center

      .bgfff
        background #fff



</style>
