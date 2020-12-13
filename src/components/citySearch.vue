<template>
  <div class="city-search">
   <input type="text" v-model="content" placeholder="输入城市名或拼音">
   <div class="search-result" ref="wrapper" v-show="content" >
    <ul>
      <li v-for="item in arr" :key="item.id+item.spell+item.name" class="border-bottom" @click="handleCityClick(item.name)">{{item.name}}</li>
      <li class="border-bottom" v-show="!arr.length">没有找到匹配数据</li>
    </ul>
   </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  name: 'citySearch',
  props: {
    cities: {
      type: Object,
      default () {
        return {
          bs: ''
        }
      }
    }
  },
  data () {
    return {
      content: '',
      allCities: [],
      bs: '',
      timer: null,
      arr: []
    }
  },
  computed: {
  },
  watch: {
    content () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.content) {
        this.arr = []
        return
      }
      this.timer = setTimeout(() => {
        this.arr = []
        this.allCities.forEach((item) => {
          if (item.name.indexOf(this.content) > -1 || item.spell.indexOf(this.content) > -1) {
            this.arr.push(item)
          }
        })
        this.$nextTick(() => {
          this.bs = new Bscroll(this.$refs.wrapper, {})
        })
      }, 100)
      console.log(this.arr)
    }
  },
  mounted () {
    setTimeout(() => {
      for (let key in this.cities) {
        let arr = this.cities[key]
        arr.map(item => {
          this.allCities.push(item)
        })
      }
    }, 100)
  },
  methods: {
    handleCityClick (value) {
      // this.$store.dispatch('changeCity', value)
      this.$store.commit('changeCity', value)
      this.$router.push('/')
    }
  }
}
</script>
<style scoped>
.city-search {
  height:.68rem;
  background: #00bcd4;
  width:100%;
}
.city-search input {
  width: 90%;
  height: .56rem;
  text-align:center;
  margin-left:5%;
  font-size: .24rem;
  color:#000;
}
.search-result {
  position: absolute;
  top:1.54rem;
  left:0;
  right:0;
  bottom:0;
  background: #fff;
  z-index:99;
  overflow:hidden;
}
li {
   padding-left:.2rem;
  height:.5rem;
  line-height: .5rem;
}
</style>
