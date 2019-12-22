<template>
  <div class="cheader">
    <div class="wrapper-header">
      <ul class="ivu-menu ivu-menu-light ivu-menu-horizontal">
        <div class="wrapper-header-nav">
          <a href="/" class="wrapper-header-nav-logo router-link-active">
            <img src="/img/icons/box-logo.png">
          </a>
          <div class="wrapper-header-nav-list">
            <Menu mode="horizontal" :active-name="selected"  @on-select="itemclick">
              <MenuItem :name="item.key" :key="item.key"  v-for="item in horizontalMnueData">
                <Icon type="md-home"/>{{item.name}}
              </MenuItem>
                <span class="ivu-avatar ivu-avatar-circle ivu-avatar-default ivu-avatar-icon">
                  <i class="ivu-icon ivu-icon-ios-person"></i>
                </span>
                <button type="button" class="ivu-btn ivu-btn-text ivu-btn-large">
                  <!---->
                  <!---->
                  <span>登录</span>
                </button>
            </Menu>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import menus from '@/data/topmenus'
export default {
  name: 'cheader',
  props: ['selected'],
  data () {
    return {
      username: '',
      defaultMenu: 'home',
      horizontalMnueData: [],
      dropdata: [{ content: '登出' }]
    }
  },
  created () {
    this.horizontalMnueData = menus.getMenu(this.selected)
  },
  methods: {
    itemclick (name) {
      console.log(name)
      let currentmenu = menus.searchMenuByKey(name)
      this.$router.push(currentmenu.target)
    }
  }
}
</script>
<style lang="less">
@import "./cheader.less";
</style>
