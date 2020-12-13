<template>
  <div class="search">
    <div class="search-left"><span class="iconfont backicon">&#xe624;</span></div>
    <div class="search-center"><span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题</div>
    <router-link to="/city">
 <div class="search-right">{{city}}<span class="iconfont">&#xe62d;</span></div>
    </router-link>

  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: 'search',
  data () {
    return {

    }
  },
  props: {

  },
  watch: {

  },
  mounted () {

  },
  computed: {
    ...mapState(['city'])
  }

}
</script>
<style  scoped>
 .search {
    height: .86rem;
    display:flex;
line-height: .86rem;
background: #00bcd4;
position: fixed;
    left: 0;
    top: 0;
    z-index: 99;
    width: 100%;
 }
.search .search-left {
   float:left;
   width:.64rem;
   color:#fff;
   text-align: center;

}
.search .search-left .backicon {
font-size:.3rem;
}
.search .search-center {
  padding-left:.2rem;
  flex:1;
   background: #fff;
    height:.62rem;
   margin-top:.12rem;
   margin-left:.2rem;
   border-radius:.1rem;
   line-height:.62rem;
   color:#ccc;
}
.search .search-right {
  float:right;
  min-width:1.04rem;
color:#fff;
    text-align: center;
}
</style>
