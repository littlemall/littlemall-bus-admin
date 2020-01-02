<template>
  <div>
    <vue-neditor-wrap v-model="content" :config="myConfig" :destroy="false" ></vue-neditor-wrap>
    <Button type="primary" @click="onUpdate">提交</Button>
  </div>
</template>

<script>
import VueNeditorWrap from 'vue-neditor-wrap-wx'
import ajax from '@/util/ajax'
import config from '@/config/config'
import api from '@/config/api'

export default {
  name: 'product-add2',
  data () {
    return {
      userform: {
        media: null, // 商品媒体数据地址（视频）
        detail: null // 商品详情信息
      },
      myConfig: {
        // 如果需要上传功能,找后端小伙伴要服务器接口地址
        serverUrl: '/api/web/upload/ueditor',
        // 你的UEditor资源存放的路径,相对于打包后的index.html
        UEDITOR_HOME_URL: '/NEditor/',
        // 编辑器不自动被内容撑高
        autoHeightEnabled: false,
        // 初始容器高度
        initialFrameHeight: 240,
        // 初始容器宽度
        initialFrameWidth: '100%',
        // 关闭自动保存
        enableAutoSave: false
      },
      content: '',
      goodId: ''
    }
  },
  components: {
    VueNeditorWrap
  },
  created () {
    this.goodId = this.$route.query.id
  },
  methods: {
    onUpdate () {
      const url = config.host + api.update_good
      ajax.post(
        url,
        {
          id: this.goodId,
          detail: this.content
        },
        res => {
          if (res.data) {
          //  this.$router.push('/products/products-list/products-add2?id=' + this.goodId);
            this.$router.push('/products/products-list/products-list-index')
          }
        },
        e => {
          console.log(e)
        }
      )
    }
  }
}
</script>
<style lang="less">
.form-warp {
  padding: 20px;
}
</style>
