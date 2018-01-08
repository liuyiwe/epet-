<template>
  <!--包裹器-->
    <div id="detail">
      <!--菜单列表-->
      <div class="menuWrapper" ref="menuWrapper">
        <ul>
          <!--遍历出所有菜单选项 绑定点击事件，实现点击变色-->
          <li :class="{'selected':selIndex === index}"  v-if="sortsData" v-for="(item, index) in sortsData" @click="selecteItem(index)" >
            {{item.name}}
          </li>
        </ul>
      </div>
      <!---->
      <div class="rightWrapper" ref="rightWrapper">
        <div class="scrollErea">
          <div class="scrollItem" v-show="sortDetail.cate_list" v-if="sortDetail.cate_list"  v-for="(item,index) in sortDetail.cate_list">
            <div class="hot-recom">
              <div class="theme"><a href="">{{item.title}}</a></div>
              <div class="all-goods"><a href="">全部商品</a></div>
            </div>
            <ul>

              <!--
  每个使用v-for使用的DOM节点，都有一个index值与自己绑定在一起，可以直接从dom身上拿来使用。-->
              <li class="fl mt10" v-for="detail in item.list">
                <a :href="detail.param" class="db">
                  <div class="rela loadimg-nofixed">
                    <img class="w100 image" :src="''+detail.photo" lazy="loaded">
                  </div>
                  <p class="ftc ft12 mt10 c333">{{detail.name}}</p>
                </a>
              </li>
            </ul>
          </div>

        </div>

      </div>



    </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import axios from 'axios'
  export default{
    props: {
      sortsData: Array
    },
    data () {
      return {
        selIndex: 0,
        sortArr: ['recommend',
          'mainFoods',
          'snacks',
          'dailyUse',
          'toy',
          'care',
          'medical',
          'traction',
          'hairdressing',
          'clean',
          'shampoo',
          'rim',
          'customization'
        ],
        sortDetail:{}
      }
    },
    created () {
      axios.get(`/api2/recommend`)
        .then((res) => {
        this.sortDetail = res.data.recommend
        })
      this.$nextTick(() => {
        this._initScroll()
      })
    },
    methods: {
      _initScroll () {
        this.menuScroll = new BScroll(this.$refs.menuWrapper, {click:true})
        this.menuScroll = new BScroll(this.$refs.rightWrapper, {click:true})

      },
      selecteItem (index) {
        console.log(index)
        this.sortDetail = {}
        this.selIndex = index //此时的selIndex是对应列表的索引值
        console.log(this.selIndex)
        const sel = this.sortArr[index]
        axios.get(`/api2/${this.sortArr[index]}`)
          .then((res) => {
            this.sortDetail = res.data[sel]
            console.log(index,this.sortDetail)
          })
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  r = 375rem/16
  #detail
    padding-top (40/r)
    padding-bottom (55/r)
    box-sizing border-box
    overflow hidden
    font-size (14/r)
    width 100%
    height 100%
  .menuWrapper
    height (573/r)
    width (70/r)
    float left
    ul
      display inline-block
      &>.selected
        color red
        background-color rgb(243,244,245)
        font-weight bold
      li
        font-size (14/r)
        padding (15/r) 0
        box-sizing border-box
        text-align center
        width (70/r)
        height (50/r)
        border-bottom (1/r) solid rgb(243,244,245)
        font-family STKaiti
  .rightWrapper
    box-sizing border-box
    display inline-block
    height (667/r)
    width (305/r)
    padding-left (5/r)
    padding-bottom (55/r)
    .scrollErea
      width 100%
      display inline-block
      .scrollItem
        width 100%
        display inline-block
        margin-bottom (20/r)
        .hot-recom
          overflow hidden
          display inline-block
          width (100%)
          padding (15/r)(5/r)(15/r)(5/r)
          .theme
            float left
            box-sizing border-box
            padding (2/r) 0
            width 30%
            height (30/r)
          .all-goods
            float right
            box-sizing border-box
            padding (2/r) 0
            width 30%
            height (30/r)
            &>a
              display inline-block

        ul
          overflow hidden
          width 100%
          display inline-block
          li
            float left
            box-sizing border-box
            padding (10/r)(5/r) 0 (5/r)
            width 33.3%
            a
              text-align center
              width 100%
              display inline-block
              .loadimg-nofixed
                margin-bottom (5/r)
              img
                width 100%
                height  100%





</style>
