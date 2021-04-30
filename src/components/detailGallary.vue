<template>
  <div class="container" @click="handle">
    <div class="wrapper">
       <swiper :options="swiperOptions">
    <swiper-slide v-for="(item,index) in gallaryArray" :key="index" >
      <img class="swiper-width"  :src="item" alt="">
      </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: 'detailGallary',
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        }

      }

    }
  },
  props: {
    gallaryArray: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    handle () {
      console.log('55')
      this.$emit('hiddenGallary')
    }
  }

}
</script>
<style scoped>
.container >>> .swiper-container {
  overflow:inherit;
}
.container {
  position: fixed;
  left:0;
  right:0;
  bottom:0;
  top:0;
  background: #000;
  z-index:99;
  display:flex;
  flex-direction:column;
  justify-content: center;
}
.wrapper {
  width:100%;
  height:0;
  padding-bottom:55%;
  background: #fff;
}
.swiper-width {
  width:100%;
}
.swiper-pagination {
  position: absolute;
  bottom: -1rem;
  color:#fff;
}
</style>
