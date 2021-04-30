<template>
<div>
 <div class="detail-banner" @click="showGallary">
    <div class="banner-img" >
<img src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg" alt="">
    </div>
      <div class="banner-info">
        <div class="banner-title">
          <p>大连圣亚海洋世界（AAAA景区） </p>
        </div>
        <div class="banner-icon">
          <span class="iconfont icon-size">&#xe62d;</span>20
        </div>
      </div>
      </div>
      <detail-gallary v-if="show" :gallaryArray=gallaryArray  @hiddenGallary="hiddenGallary" ></detail-gallary>

</div>

</template>
<script>
import detailGallary from '@/components/detailGallary'
export default {
  name: 'detailBanner',
  components: {
    detailGallary
  },
  data () {
    return {
      show: false,
      gallaryArray: ['http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg',
        'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg']
    }
  },
  methods: {
    showGallary () {
      this.show = true
      console.log('woyezhixing')
    },
    hiddenGallary () {
      console.log('传来了')
      this.show = false
      console.log('show', this.show)
    }
  }
}
</script>
<style scoped>
.detail-banner {
  position: relative;
  background-image: line-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8)) ;
}
.banner-img {
  overflow:hidden;
  height:0;
  padding-bottom:55%;
}
.banner-img img {
  width:100%;

}
.banner-info {
 display:flex;
 position: absolute;
 bottom: .05rem;
 left:0;
 right:0;
 justify-content: space-between;
/* padding: 0 .1rem; */

}
.banner-title {
  color:#fff;
  padding: 0 .1rem;
}
.banner-icon {
  padding: 0 .2rem;
  background: rgba(0,0,0,.8);
  border-radius:.2rem;
   color:#fff;
   line-height:.24rem;
    font-size:.24rem;
}
.icon-size {
  font-size:.24rem;
  padding-right:.1rem;
}
</style>
