<template>
  <div class="main-wraper">
    <!--引入头部组件，以标签形式传入首页头部-->
    <main-header :location="location" :menu="menu"></main-header>
    <!--包裹器 包裹整个首页内容区，以ref形式定义一个名便于找到该标签定义整个内容区的滑动效果
    使用的是better-scroll-->
    <div class="double_wraper" ref="doubleWraper">
      <div class="all-double">
        <!--用MintUI中的swipe来实现轮播图-->
        <div class="db-banner" :class="{'hei-banner': double11.banner}">
          <!--:auto="2000"定义轮播图自动轮播时间-->
          <!--v-if="double11.banner"是因为嵌套问题，否则获取不到-->
          <mt-swipe :auto="1500" v-if="double11.banner">
            <mt-swipe-item :key="index" v-for="(item, index) in double11.banner">
              <a :class="'blo'" :href="item.param"><img :src="item.image"></a>
            </mt-swipe-item>
          </mt-swipe>
        </div>
        <div class="db-column-nav">
          <!--商品分类列表-->
          <!--根据mock数据可以遍历出两个ul列表menu_column数据有两个数组-->
          <!--根据每个数组中的对象个数遍历出每个列表中的li-- 每个数组中有五个对象>
          <!--再把列表的点击链接和图片分别传入进来-->
          <ul class="nav-list" v-for="row in double11.menu_column">
            <li class="fl" v-for="col in row">
              <a :href="col.param"><img :src="col.image" alt=""></a>
            </li>
          </ul>
        </div>
        <!--新人专享栏，数据和图片直接从mock里拿到-->
        <!--使用v-if是因为下面使用数据时结构层次多-->
        <div class="db-discount db-swiper" v-if="double11.double11_2">
          <a :href="double11.double11_2.param" class="swiper-slide">
            <img :src="double11.double11_2.image" alt="">
          </a>
        </div>
        <!--每日疯抢区域-->
        <div class="db-daily-crazy">
          <div class="surprise">
            <!--倒计时组件引入-->
            <crazy></crazy>
            <!--引入倒计时组件后下面的左右滑动代码布局会异常需加宽度100%-->
            <div class="surprise-pro" ref="surpriseWrap">
              <!--实现每日疯抢商品列表左右滑动-->
              <ul class="swiper-container" v-if="double11.daily_crazy">
                <li class="swiper-slide" v-for="pro in double11.daily_crazy.surprise_pro">
                  <div class="pro-block">
                    <a href="javascript:;">
                      <div class="pro-img"><img :src="pro.proimg"></div>
                      <div class="price">
                        <span class="f12">￥</span>
                        <span class="f14">{{pro.price}}</span>
                      </div>
                      <p class="save">{{pro.save}}</p>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!--E宠团和其他-->
        <div class="db-column-wrap">

          <prevent :pregoods="double11.prevent_goods"></prevent>
          <!--视频-->
          <div class="video-wraper">
            <div class="video-img">
              <div class="play" @click.once="play" ref="play" v-if="double11.video"><img :src="double11.video.first_img"></div>
              <div class="video-bt" v-if="double11.video_bottom"><img :src="double11.video_bottom.image"></div>
            </div>
          </div>
        </div>
        <div class="footer">
          <div class="ft-about">
            <span><a href="javascript:;" class="on">触屏版</a></span>
            <span><a href="javascript:;">手机客户端</a></span>
            <span><a href="javascript:;">关于我们</a></span>
            <span><a href="javascript:;">联系我们</a></span>
          </div>
          <div class="ft-copy">© wap.epet.com 版权：重庆易宠科技有限公司</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import BScroll from 'better-scroll'
  import crazy from '../crazy/crazy.vue'
  import header from '../header/header.vue'
  import prevent from '../column/cl-prevent.vue'
  import brand from '../column/cl-brand.vue'
  import special from '../column/cl-special.vue'
  export default{
    data () {
      return {
        location: {},
        menu: [],
        double11: {}
      }
    },
    mounted () {
      axios.get('/api/main')  //获取数据
        .then(response => {
          const result = response.data
          if (result.code === 0) {
            const mainData = result.data
            this.location = mainData.location
            this.menu = mainData.menu
            this.double11 = mainData.data
            this.$nextTick(() => {
              this._initialScroll()
            })
          }
        })
    },
    methods: {
      _initialScroll () {
        /* eslint-disable no-new */
        new BScroll(this.$refs.doubleWraper, {
          bounce: true,
          click: true,
          momentum: true
        })
        new BScroll(this.$refs.surpriseWrap, {
          scrollX: true,
          click: true
        })
      },
      play () {
        let video = document.createElement('video')
        video.controls = 'controls'
        video.innerHTML = '<source src="http://player.epetbar.com/0eadfd59bff741f6b7e6a34750b65aef/a0b00d725ef843ce8288e60779de6e66-5287d2089db37e62345123a1be272f8b.mp4" type="video/ogg">' +
          '<source src="http://player.epetbar.com/0eadfd59bff741f6b7e6a34750b65aef/a0b00d725ef843ce8288e60779de6e66-5287d2089db37e62345123a1be272f8b.mp4" type="video/mp4">'
        this.$refs.play.appendChild(video)
      }
    },
    components: {
      'main-header': header,
      prevent,
      brand,
      special,
      crazy
    }
  }
</script>

<style lang="stylus" ref="stylesheet/stylus">
  px2rem($num)
    $num/ (750 / 16) rem
  .main-wraper
    position relative
    overflow hidden
    height 100%
    .double_wraper
      height 100%
      overflow hidden
      .all-double
        padding-top 86px
        padding-bottom 45px
        /*background: purple*/
        .db-schedule
          font-size 0
          img
            width 100%
        .db-banner
          width: 100%
          &.hei-banner
            height: px2rem(320)
          .blo
            display block
            img
              width 100%
        .db-wallpaper
          font-size 0
          a
            display: block
            width 100%
            img
              width: 100%
        .db-column-nav
          width 100%
          .nav-list
            width 100%
            font-size 0
            display -webkit-box
            .fl
              width 20%
              a
                display block
                width 100%
                img
                  width 100%
        .db-swiper
          width 100%
          font-size 0
          .swiper-slide
            display block
            width 100%
            img
              width 100%
        .db-daily-crazy
          width 100%
          .surprise
            width 100%
            .surprise-tit
              position relative
              width 100%
              height 60px
              padding 10px
              .titimg
                img
                  height 24px
                  margin-left -20px
              .prompt
                font-size 13px
                margin-top 4px
                margin-left 10px
              .time
                margin-left 5px
                font-size: 12px
                text-align: center
                margin-top 4px
                .time1-1
                  border 1px solid #ddd
                  padding 1px 2px
                  font-size 13px
                .time-zi
                  font-weight 700
              .more
                position absolute
                top 2px
                right -68.5px
                a
                  display block
                  img
                    width 50%
              .fl
                float: left
            .surprise-pro
              padding-left 5px
              margin-bottom 10px
              overflow hidden
              width 100%
              .swiper-container
                white-space nowrap
                float left
                font-size 0
                .swiper-slide
                  display inline-block
                  width: 4.64rem
                  .pro-block
                    padding: 0 7px
                    a
                      display block
                      width 100%
                      text-align center
                      line-height 1.6
                      padding 0 4px
                      .pro-img
                        width 100%
                        line-height 1
                        img
                          width 100%
                      .price
                        margin-top 5px
                        color red
                        font-size 14px
                        .f12
                          font-size 12px
                        .f14
                          font-size 14px
                      .save
                        font-size 12px
        .db-column-wrap
          width 100%
          .cl-title
            width 100%
            font-size 0
            img
              width 100%
        .footer
          margin-top 14px
          width 100%
          height 86px
          line-height 1.6
          .ft-about
            font-size 14px
            padding 15px 0 5px
            text-align center
            span
              padding-right 10px
              a
                color #333
                display inline-block
                &.on
                  color red
          .ft-copy
            font-size 12px
            text-align center
            padding-bottom 25px
        .video-wraper
          width 100%
          .video-img
            width 100%
            .play
              position relative
              width 100%
              img
                display block
                width 100%
              video
                position absolute
                top 0
                left 0
                width 100%
                height: 100%
            .video-bt
              img
                width 100%
</style>
