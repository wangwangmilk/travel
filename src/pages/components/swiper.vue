<template>
<div class="wraper">
 <swiper ref="mySwiper" :options="swiperOptions"  >
    <swiper-slide v-for="item of swiperList" :key="item.id">
      <img class="swiper-width"  :src="item.imgUrl" alt="">
      </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  </div>
</template>
<script>
import Swiper2, {Navigation, Pagination} from 'swiper'

Swiper2.use([Navigation, Pagination])
export default {
  name: 'homeSwiper',
  data () {
    return {
      swiperOptions: {
        loop: true,

        pagination: {
          el: '.swiper-pagination',
          clickable: true

        },
        autoplay: {
          delay: 1000,
          // stopOnLastSlide: false,
          disableOnInteraction: false
        }
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1802/e3/62ce7362ca051d02.jpg_640x200_6db551b7.jpg'
      },
      {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1801/93/ce59d182aca07102.jpg_640x200_ba03d44c.jpg'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1802/e3/62ce7362ca051d02.jpg_640x200_6db551b7.jpg'
      },
      {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1801/93/ce59d182aca07102.jpg_640x200_ba03d44c.jpg'
      }, {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1802/e3/62ce7362ca051d02.jpg_640x200_6db551b7.jpg'
      }]
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted () {
    // this.initSwiper()
  },
  methods: {
    // initSwiper () {
    //   let mySwiper = new Swiper2('wraper', {
    //     pagination: {
    //       el: '.swiper-pagination',
    //       clickable: true

    //     }
    //   })
    // }
  }
}
</script>
<style scoped>
.wraper >>> .swiper-pagination-bullet-active {
  background: #fff;
}
.wraper {
   width:100%;
  height:0;
  overflow:hidden;
  padding-bottom:31.25%;
  background: #eee;
  /* height:31.25vw; */
}

.swiper-width {
  width:100%;
}
</style>
