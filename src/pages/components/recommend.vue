<template>
  <div class="recommend">
    <div class="title">热门推荐</div>
    <!-- 全局引入1pxbordercss后，直接加样式即可 -->
    <div class="item border-bottom" v-for="item of recommendList" :key="item.id">
      <img class="item-img" :src="item.imgUrl" alt="">
      <div class="item-info">
        <p class="item-title">{{item.title}}</p>
        <p  class="item-desc">{{item.desc}}</p>
        <button class="item-button">查看详情</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'recommend',
  data () {
    return {
      recommendList: [{id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_140x140_73fda71d.jpg',
        title: '天津南开水上公园',
        desc: '浪漫的天津首站，浪漫的海洋主题乐园'}, {id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_140x140_73fda71d.jpg',
        title: '天津南开水上公园',
        desc: '浪漫的天津首站，浪漫的海洋主题乐园'}, {id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_140x140_73fda71d.jpg',
        title: '天津南开水上公园',
        desc: '浪漫的天津首站，浪漫的海洋主题乐园'}]
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
  display:flex;
}
.item-img {
  width:1.4rem;
  height:1.4rem;
  padding: .1rem;
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
