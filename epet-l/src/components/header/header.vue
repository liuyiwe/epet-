<template>
  <div class="header-wraper">
    <div class="h-main">
      <div class="h-inner">
        <div class="h-location">
          <a href="https://wap.epet.com/place.html?pet_type=dog&fw=0">
            <span>{{location.loc_name}}</span>
            <span>|</span>
            <span  class="s3">{{location.city}}</span>
            <i></i>
          </a>
        </div>
        <p class="h-search">
          <a href="javascript:;">
            <input type="search" placeholder="搜索商品和品牌" disabled="disabled">
            <span class="serach-ico"></span>
          </a>
        </p>
        <a :href="'/#/login'" class="h-msg"><img src="./img/mydope.png"></a>
      </div>
    </div>
    <div class="nav-wrap" ref="navWrap">
      <ul class="nav-list">
        <li class="nav-item" :class="{on: m.menu_type == 1}" v-for="m in menu">
          <a href="javascript:;">
            <span class="rela">
              <span>{{m.menu_name}}</span>
              <i></i>
            </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default{
    props: {
      location: Object,
      menu: Array
    },
    methods: {
      _initialMenu () {
        this.$nextTick(() => {
          let width = document.documentElement.clientWidth
          let navItem = document.querySelectorAll('.header-wraper .nav-wrap .nav-list .nav-item')
          console.log(navItem.length, width)
          if (width === 414) {
            for (let i = 0; i < navItem.length; i++) {
              navItem[i].style.width = width / 5 - 0.46 + 'px'
            }
          } else {
            for (let i = 0; i < navItem.length; i++) {
              navItem[i].style.width = width / 5 - 0.5 + 'px'
            }
          }
          /* eslint-disable no-new */
          new BScroll(this.$refs.navWrap, {
            scrollX: true
          })
        })
      }
    },
    watch: {
      menu (newValue, oldValue) {
        this._initialMenu()
      }
    }
  }
</script>

<style lang="stylus" ref="stylesheet/stylus">
  .header-wraper
    position absolute
    left 0
    top 0
    width 100%
    background: #FFF
    z-index 2
    .h-main
      height: 51px
      padding: 5px 10px
      .h-inner
        height: 41px
        padding: 8px 0;
        background: #fff;
        font-size 13px
        text-align: center;
        display: -webkit-box;
        -webkit-box-align: center;
        display: -moz-box;
        -moz-box-align: center;
        width: 100%;
        .h-location
          margin-right: 20px;
          position: relative;
          font-size: 14px;
          line-height 1.6
          a
            color: #898989;
            text-decoration: none;
            -webkit-tap-highlight-color: rgba(0,0,0,0);
            .s3
              font-size: 13px
          i
            position: absolute;
            top: 10px;
            right: -11px;
            border-width: 4px;
            font-size: 0;
            line-height: 0;
            border-style: solid dotted dotted;
            border-color: #898989 transparent transparent;
        .h-search
          position: relative;
          -webkit-box-flex: 1;
          margin 0
          a
            input
              width: 100%;
              border: 0;
              height: 25px;
              background: #e9e9e9;
              border-radius: 4px;
              color: #bcbcbc;
              text-indent: 10px;
              font-size: 13px;
              outline: 0;
            .serach-ico
              width: 11px;
              height: 11px;
              position: absolute;
              right: 5px;
              top: 0;
              bottom: 0;
              margin: auto 0;
              background: url("./img/search.png") no-repeat
              background-size 100% auto
        .h-msg
          display: block;
          color: #333;
          text-decoration: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          img
            width: 25px;
            margin-left: 10px;
            border: 0;
            vertical-align: middle;
    .nav-wrap
      width 100%
      overflow hidden
      .nav-list
        float left
        white-space nowrap
        font-size 0
        .nav-item
          height: 36px
          display inline-block
          &.on
            span
              display inline-block
              color #459d36
            i
              background: #459d36
          a
            display: block
            height: 100%
            width: 100%
            line-height: 36px
            text-align center
            font-size 14px
            color: #666
            .rela
              position relative
              i
                position: absolute
                left -10%
                bottom 1px
                width 120%
                height: 2px
</style>
