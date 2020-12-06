<template>
  <div class="icons">
    <swiper   >
      <swiper-slide v-for="(item,index) of page" :key="index" >
    <div class="icon" v-for="(item1,index1) in item"  :key="index1" >
    <div class="icon-img">
<img class="icon-img-content" :src="item1.iconUrl" alt="">
    </div>
  <p class="desc">{{item1.desc}}</p>
  </div>
  </swiper-slide >
  </swiper>
  </div>
</template>
<script>
export default {
  name: 'homeIcons',
  data () {
    return {
      iconList: [{
        id: '0001',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
        desc: '热门景点热门景点热门景点热门景点热门景点热门景点热门景点热门景点热门景点'
      },
      {
        id: '0002',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png',
        desc: '滑雪季'
      },
      {
        id: '0003',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png',
        desc: '泡温泉'
      },
      {
        id: '0004',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png',
        desc: '动植园'
      },
      {
        id: '0005',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
        desc: '热门景点'
      },
      {
        id: '0006',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png',
        desc: '滑雪季'
      },
      {
        id: '0007',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png',
        desc: '泡温泉'
      },
      {
        id: '0008',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png',
        desc: '动植园'
      },
      {
        id: '0008',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
        desc: '热门景点'
      }]
    }
  },
  computed: {
    page () {
      let page = []
      this.iconList.forEach((item, index) => {
        let a = Math.floor(index / 8)
        if (!page[a]) {
          page[a] = []
        }
        page[a].push(item)
      })
      return page
    }

  },
  mounted () {
    console.log('page', this.page)
  }
}
</script>
<style scoped>
.icons >>> .swiper-container {
  overflow:hidden;
  height:0;
  padding-bottom:50%;
}
.icons {
  height:0;
  width:100%;
  overflow:hidden;
  padding-bottom:50%;

}
.icon {
  height:0;
  width:25%;
  padding-bottom:25%;
  overflow:hidden;

  float:left;
  position: relative;
}
.icon-img {
 position: absolute;
 top:0;
 right:0;
 left:0;
 bottom:.44rem;
 padding: .1rem;
}
.icon-img-content {
  display:block;
  height:100%;
  margin:0 auto;
}
.desc {
  position: absolute;
  height:.44rem;
  line-height: .44rem;
  bottom:0;
  left:0;
  right:0;
  text-align:center;
  color:#333;

  white-space:nowrap;
  text-overflow:ellipsis;
  overflow:hidden;
}
</style>
