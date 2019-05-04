<template>
  <div class="products">
    <cheader selected="products"></cheader>
    <Layout style="margin-top:65px">
        <Sider hide-trigger :style="{background: '#fff',width:'300px;'}">
            <csidemenu selected="products-list" :opens="['products']" name="products" title="商品模块" :sidemenu="sidemenu"></csidemenu>
        </Sider>
      <Layout :style="{padding: '10px 24px 24px',background:'#fff'}">
            <router-view v-show="true" keep-alive></router-view>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import Cheader from "@/components/cheader/cheader";
import Csidemenu from '@/components/csidemenu/csidemenu'
import menu from "./menu/menu";
export default {
  name: "products",
  props: ["selected"],
  data() {
    return {
      horizontalMnueData: [],
      sidemenu:menu
    };
  },
  created() {
    this.horizontalMnueData = menu.getMenu(this.selected);
  },
  components: {
    Cheader,
    Csidemenu
  },
  methods: {
    itemclick(name) {
      console.log(name);
      let currentmenu = menu.searchMenuByKey(name);
      this.$router.push(currentmenu.target);
    }
  }
};
</script>
<style lang="less">
@import "./Products.less";
</style>