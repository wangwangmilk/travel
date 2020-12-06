<template>
  <div class="recommend">
    <div class="title">周末去哪儿</div>
    <!-- 全局引入1pxbordercss后，直接加样式即可 -->
    <div class="item border-bottom" v-for="item of list" :key="item.id">
      <div class="item-img-wrapper">
<img class="item-img" :src="item.imgUrl" alt="">
      </div>

      <div class="item-info">
        <p class="item-title">{{item.title}}</p>
        <p  class="item-desc">{{item.desc}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'recommend',
  data () {
    return {

    }
  },
  props: {
    list: {
      type: Array,
      default () {
        return {}
      }
    }
  }
}
</script>
<style scoped>
.title {
   text-indent:1em;
   height:.66rem;
   line-height: .66rem;
   background: #eee;
}
.item {
  /* display:flex; */
}
.item-img-wrapper{
  height:0;
  overflow:hidden;
  padding-bottom:37.09%;
}
.item-img {
  width:100%;
  /* width:1.4rem;
  height:1.4rem;
  padding: .1rem; */
}
.item-info {
padding: .1rem 0;
min-width:0;
flex:1;
}
.item-title {
  font-size:.32rem;
  line-height: .44rem;
  text-overflow:ellipsis;
  overflow:hidden;
  white-space:nowrap;
}
.item-desc {
  color:#ccc;
  line-height: .44rem;
}
.item-button {
 background: orange;
 border-radius: .1rem;

}
</style>
