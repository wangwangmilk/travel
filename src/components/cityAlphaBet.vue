<template>
  <div class="alpha-bet">
    <ul >
      <li v-for="item in betList"
      :key="item"
       @click="handleClick(item)"
         :ref="item"
         @touchstart="handleTouchStart"
         @touchmove="handleTouchMove"
         @touchend="handleTouchEnd"
       >{{item}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'cityAlphaBet',
  props: {
    cities: {
      type: Object,
      default () {
        return {
          touchStatus: false,
          startY: '',
          timer: null
        }
      }
    }
  },
  computed: {
    betList () {
      let arr = []
      for (let key in this.cities) {
        arr.push(key)
      }
      console.log(arr)
      return arr
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
    this.count = '1'
    console.log('41startY', this.startY)
  },
  methods: {
    handleClick (key) {
      this.$emit('handleClick', key)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const moveY = e.touches[0].clientY - 77
          const index = Math.floor((moveY - this.startY) / 20)
          if (index >= 0 && index < this.betList.length) {
            this.$emit('handleClick', this.betList[index])
            console.log(this.startY, moveY, index)
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  },
  mounted () {
    //  获取不到
    // this.$nextTick(() => {
    //   this.startY = this.$refs['A'][0].offsetTop
    // })

    console.log('69startY', this.startY)
    console.log(this.betList)
  }
}
</script>
<style scoped>
ul {
  position: absolute;
  right:0;
  bottom:0;
  top:1.54rem;
  /* background: red; */
  display:flex;
  flex-direction:column;
  justify-content:center;
}
li {
  text-align:center;
  height:.4rem;
  line-height: .4rem;
  color:#00bcd4;
}
.current {
    background: red;
    border-radius: 5px;

}
</style>
