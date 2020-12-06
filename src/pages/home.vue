<template>
  <div>
    <home-search></home-search>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>

</template>
<script>
import homeSearch from './components/search'
import homeSwiper from './components/swiper'
import homeIcons from './components/icons'
export default {
  name: 'home',
  components: {
    homeSearch,
    homeSwiper,
    homeIcons
  }
}
</script>
<style>

</style>
