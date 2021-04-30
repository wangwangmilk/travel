<template>
  <div class="detail">
   <detail-banner></detail-banner>
   <detail-header></detail-header>
   <div class="change-height"></div>
      </div>
</template>
<script>
import detailBanner from '@/components/detailBanner'
import detailHeader from '@/components/detailHeader'
export default {
  name: 'detail',
  components: {
    detailBanner,
    detailHeader
  }
}
</script>
<style scoped>
.change-height {
  height:50rem;
}
</style>
