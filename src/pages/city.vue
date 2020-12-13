<template>
  <div>
    <city-title></city-title>
    <city-search :cities=cities></city-search>
    <city-list :cities=cities :hotCities=hotCities :currentKey="currentKey"></city-list>
    <city-alpha-bet :cities=cities @handleClick="handleClick"></city-alpha-bet>
  </div>
</template>
<script>
import cityTitle from '@/components/cityTitle'
import citySearch from '@/components/citySearch'
import cityList from '@/components/cityList'
import cityAlphaBet from '@/components/cityAlphaBet'
import axios from 'axios'

export default {
  name: 'city',
  components: {
    cityTitle,
    citySearch,
    cityList,
    cityAlphaBet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      currentKey: ''
    }
  },
  mounted () {
    axios.get('/api/city.json').then(res => {
      console.log('city.json', res)
      if (res.status === 200 && res.data) {
        const data = res.data.data
        console.log(data)
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    })
  },
  methods: {
    handleClick (key) {
      this.currentKey = key
      console.log(key)
    }
  }
}
</script>
<style scoped>

</style>
