<template>
  <div class="city-list" ref="wrapper" >
    <div >
 <div class="area">
      <div class="title border-bottom">当前城市</div>
      <div class="button-list">
        <div class="button-wraper" >
<div class="button">{{this.$store.state.city}}</div>
        </div>
         </div>
    </div>
    <div class="area">
      <div class="title">热门城市</div>
            <div class="button-list">
        <div class="button-wraper" v-for="item in hotCities" :key="item.id" @click="handleCityClick(item.name)">
<div class="button">{{item.name}}</div>
        </div>
         </div>
    </div>

      <div class="area" v-for="(value,key) in cities" :key="key" :ref="key">
  <div class="title"  >{{key}}</div>
      <div class="select-list border-bottom" v-for="item in value" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</div>
      </div>

    </div>

  </div>

</template>
<script>
import Bscroll from 'better-scroll'
import {mapMutations} from 'vuex'
export default {
  name: 'cityList',
  props: {
    hotCities: {
      type: Array,
      default () {
        return {}
      }
    },
    cities: {
      type: Object,
      default () {
        return {}
      }
    },
    currentKey: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      bs: ''
    }
  },
  watch: {
    currentKey (newValue) {
      console.log(newValue)
      // 通过遍历时取得ref是数组！
      const element = this.$refs[this.currentKey]
      console.log(element)
      this.bs.scrollToElement(element[0], 0, 0)
    }
  },
  mounted () {
    setTimeout(() => {
      console.log(Object.keys(this.cities).length)
      this.bs = new Bscroll(this.$refs.wrapper, {

      })
    }, 100)
  },
  methods: {
    ...mapMutations(['changeCity']),
    handleCityClick (value) {
      // this.$store.dispatch('changeCity', value)
      // this.$store.commit('changeCity', value)
      this.changeCity(value)
      this.$router.push('/')
    }
  }
}
</script>
<style scoped>
.city-list {
  position: absolute;
  left:0;
  top:1.54rem;
  right:0;
  bottom:0;
  /* background: red; */
  overflow:hidden;
}
.title {
  background: #eee;
  padding-left:.2rem;
  height:.6rem;
  line-height:.6rem;
}
.button-list {
  overflow:hidden;
  padding:.1rem;
  padding-right:.8rem;
}
.button-wraper {
 width:33.33%;
  float:left;
}
.button {

  border:.01rem solid #00bcd4;
  text-align:center;
  height:.4rem;
  line-height:.4rem;
  margin:.1rem;

}
.select-list {
  padding-left:.2rem;
  height:.5rem;
  line-height: .5rem;
}
</style>
