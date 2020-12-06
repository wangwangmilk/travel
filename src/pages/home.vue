<template>
  <div>
    <home-search></home-search>
    <home-swiper></home-swiper>

  </div>

</template>
<script>
import homeSearch from './components/search'
import homeSwiper from './components/swiper'
export default {
  name: 'home',
  components: {
    homeSearch,
    homeSwiper
  }
}
</script>
<style>

</style>
