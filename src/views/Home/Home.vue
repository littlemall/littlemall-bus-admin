<template>
  <div class="home">
      <cheader selected="index"></cheader>
      <div class="home-content">I am Home</div>
  </div>
</template>

<script>
import Cheader from '@/components/cheader/cheader'
export default {
  components: {
    Cheader
  },
}
</script>
<style lang="less">
  @import './Home.less';
</style>