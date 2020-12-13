<template>
<div class="wraper" >
 <swiper ref="mySwiper" :options="swiperOptions" v-if="isList"  >
    <swiper-slide v-for="item of list" :key="item.id" >
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
      }

    }
  },
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    },
    isList () {
      return this.list.length
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
  margin-top:.62rem;
}

.swiper-width {
  width:100%;
}
</style>
