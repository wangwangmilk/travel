<template>
  <div class="city-title">
    城市选择
    <router-link to="/">
<span class="iconfont back">&#xe624;</span>
    </router-link>

    </div>
</template>
<script>
export default {
  name: 'cityTitle'
}
</script>
<style scoped>
.city-title {
  height:.86rem;
  line-height: .86rem;
  background:#00bcd4;
  text-align:center;
  font-size:.32rem;
  color: #fff;
  position: relative;
}
.back {
  position: absolute;
  left:  20px;
  color:#fff;
}
</style>
