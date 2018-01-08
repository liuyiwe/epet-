<template>
  <div class="crazy" v-if="crazyData.crazy">
    <div class="crazy-tit">
      <div class="tit-img"><img src="./img/suprice.png" alt=""></div>
      <div class="tit-text">{{crazyData.crazy.title}}</div>
      <!--实现倒计时-->
      <div class="time">
        <span>00</span><i>:</i>
        <span ref="min">30</span><i>:</i>
        <span ref="sec">13</span>
      </div>
      <div class="more"><a href="#"><img src="./img/gengduo.jpg" alt=""></a></div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import crazyData from '../../mock/acInfo.json'

  export default{
    components: {
      BScroll
    },
    data () {
      return {
        crazyData: {}
      }
    },
    created(){
      this.crazyData = crazyData.data

    },
    mounted(){
      this.$nextTick(()=>{
        let min = this.$refs.min.innerHTML
        let sec = this.$refs.sec.innerHTML
        setInterval(()=>{
          sec--

          if(this.$refs.sec){
            if(sec<0){
              sec = 59
              this.$refs.sec.innerHTML = sec
              min--
              this.$refs.min.innerHTML = min
            }else if(sec<10){
              this.$refs.sec.innerHTML = '0'+sec
            }else {
              this.$refs.sec.innerHTML = sec
            }
          }
        },1000)
      })
    },
    watch: {
      crazyData(){
        this._initScroll()
      }
    }
  }
</script>
<style lang="less" rel="stylesheet/less">
  @import "../../common/common";
  .crazy{
    .crazy-tit{
      width: 100%;
      height: 60/@rem;
      padding: 10/@rem;
      .tit-img{
        float: left;
        margin-left: -20/@rem;
        img{
          width: 219/@rem;
        }
      }
      .tit-text{
        float: left;
        margin-right: 10/@rem;
      }
      .time{
        float: left;
        span{
          display: inline-block;
          width: 20px;
          height: 20px;
          line-height: 20px;
          border: 1px solid lightgray;
          text-align: center;
        }
      }
      .more{
        float: right;
        margin-top: -30/@rem;
        img{
          width: 135/@rem;
        }
      }

    }
    .crazy-pro{
      ul{
        width: 800/@rem;
        overflow: hidden;
        li{
          float: left;
          width: 85/@rem;
          height: 130/@rem;
          margin: 0 10/@rem 15/@rem 5/@rem;
          a{
            width: 100%;
            height: 100%;
            text-align: center;
            img{
              width: 100%;
            }
            span{
              color: red;
            }
            p{
              color: #999;
            }
          }
        }
      }
    }
  }
</style>
