<template>
  <div class="detail-header">
  <div class="header-abs" @click="toHome" v-show="show">
    <span class="iconfont backicon">&#xe624;</span>
  </div>
   <div class="city-title" v-show="!show" :style="opacityObj">
    城市详情
    <router-link to="/">
<span class="iconfont back">&#xe624;</span>
    </router-link>

    </div>
  </div>
</template>
<script>
export default {
  name: 'detailHeader',
  data () {
    return {
      show: true,
      opacityObj: {
        opacity: 0
      }
    }
  },
  methods: {
    toHome () {
      this.$router.push('/')
    },
    handleScroll () {
      const top = document.documentElement.scrollTop
      console.log('888', document.documentElement.scrollTop)
      if (top > 50) {
        let opacity = top / 100
        opacity = opacity > 1 ? 1 : opacity
        this.opacityObj = {opacity}
        this.show = false
      } else {
        this.show = true
      }
    }
  },
  activated () {
    console.log('666')
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style scoped>
.header-abs {
  position: absolute;
  width:.8rem;
  height:.8rem;
      line-height: .8rem;
  left:.2rem;
  top:.2rem;
  background: rgba(0,0,0,.8);
  border-radius:50%;
  color:#fff;
   text-align: center;
}
 .backicon {
font-size:.3rem;
}
.city-title {
  position: fixed;
  left:0;
  top:0;
  right:0;
  bottom:0;
  height:.86rem;
  line-height: .86rem;
  background:#00bcd4;
  text-align:center;
  font-size:.32rem;
  color: #fff;
}
.back {
  position: absolute;
  left:  20px;
  color:#fff;
}
</style>
