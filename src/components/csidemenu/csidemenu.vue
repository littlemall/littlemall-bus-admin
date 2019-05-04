<template>
        <Menu :active-name="selected" theme="light" width="auto" :open-names="opens"  @on-select="itemclick">
          <Submenu :name="name">
            <template slot="title">
              <Icon type="ios-keypad"></Icon>{{title}}
            </template>
            <MenuItem :name="item.key" :key="item.key"  v-for="item in horizontalMnueData">{{item.name}}</MenuItem>
          </Submenu>
        </Menu>
</template>

<script>
export default {
  name: "cheader",
  props: ["selected","opens","name","title","sidemenu"],
  data() {
    return {
      username: "",
      defaultMenu: "home",
      dropdata: [{ content: "登出" }]
    };
  },
  created() {
    this.horizontalMnueData = this.sidemenu.getMenu(this.selected);
  },
  methods: {
    itemclick(name) {
      console.log(name);
      let currentmenu = this.sidemenu.searchMenuByKey(name);
      this.$router.push(currentmenu.target);
    }
  }
};
</script>
<style lang="less">
</style>