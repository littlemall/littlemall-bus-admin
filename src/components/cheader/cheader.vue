<template>
  <div class="cheader">
    <div class="wrapper-header">
      <ul class="ivu-menu ivu-menu-light ivu-menu-horizontal">
        <div class="wrapper-header-nav">
          <a href="/" class="wrapper-header-nav-logo router-link-active">
            <img src="/img/icons/box-logo.png">
          </a>
          <div class="wrapper-header-nav-list">
            <Menu mode="horizontal" active-name="1">
              <MenuItem name="1">
               <Icon type="md-home" />首页
              </MenuItem>
              <MenuItem name="2">
                <Icon type="md-cube" />商品
              </MenuItem>
              <MenuItem name="5">
                <span class="ivu-avatar ivu-avatar-circle ivu-avatar-default ivu-avatar-icon">
                  <i class="ivu-icon ivu-icon-ios-person"></i>
                </span>
                <button type="button" class="ivu-btn ivu-btn-text ivu-btn-large">
                  <!---->
                  <!---->
                  <span>登录</span>
                </button>
              </MenuItem>
            </Menu>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="less">
@import "./cheader.less";
</style>