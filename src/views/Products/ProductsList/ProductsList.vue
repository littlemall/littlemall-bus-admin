<template>
  <div>
    <Button class="spec-btn" type="primary" @click="onAdd()">添加商品</Button>
    <Divider/>
  </div>
</template>

<script>
export default {
  name: "product-list",
  data() {
    return {};
  },
  created() {},
  methods: {
    onAdd(){
       this.$router.push('/products/products-add');
    }
  }
};
</script>
<style lang="less">
</style>