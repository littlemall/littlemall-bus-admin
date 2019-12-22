<template>
  <div>
    <router-view v-show="true" keep-alive></router-view>
  </div>
</template>

<script>
export default {
  name: 'session-list-wrap'
}
</script>
<style lang="less">
</style>
