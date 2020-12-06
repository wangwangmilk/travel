<template>
  <div class="search">
    <div class="search-left"><span class="iconfont backicon">&#xe624;</span></div>
    <div class="search-center"><span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题</div>
    <div class="search-right">城市<span class="iconfont">&#xe62d;</span></div>
  </div>
</template>
<script>
export default {
  name: 'search'
}
</script>
<style  scoped>
 .search {
    height: .86rem;
    display:flex;
line-height: .86rem;
background: #00bcd4;
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
  width:1.24rem;
color:#fff;
    text-align: center;
}
</style>
