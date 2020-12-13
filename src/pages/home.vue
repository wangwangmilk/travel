<template>
  <div>
    <home-search></home-search>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>

</template>
<script>
import homeSearch from '@/components/search'
import homeSwiper from '@/components/swiper'
import homeIcons from '@/components/icons'
import homeRecommend from '@/components/recommend'
import homeWeekend from '@/components/weekend'
import axios from 'axios'
import {mapState} from 'vuex'
export default {
  name: 'home',
  components: {
    homeSearch,
    homeSwiper,
    homeIcons,
    homeRecommend,
    homeWeekend
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
      lastCity: ''
    }
  },
  mounted () {
    this.getHomeInfo()
    this.lastCity = this.city
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json/?city=' + this.city).then(res => {
        if (res.status === 200 && res.data.ret) {
          console.log('执行')
          let data = res.data.data
          this.swiperList = data.swiperList
          this.iconList = data.iconList
          this.recommendList = data.recommendList
          this.weekendList = data.weekendList
        }
      })
    }

  },
  activated () {
    console.log('lastCity', this.lastCity)
    console.log('city', this.city)
    if (this.lastCity !== this.city) {
      console.log('不一样了')
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>
<style>

</style>
