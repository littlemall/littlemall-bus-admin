<template>
  <div style="margin-top:10px;">
    <h2>考拉导入</h2>
     <Divider />
     <div class='form-wrap'>
        <Form>
        <Row>
          <Col span="12">
            <FormItem label="地址" :label-width="80">
              <Input v-model="url" style="width: 500px" placeholder="地址" />
            </FormItem>
          </Col>
        </Row>
         <Row>
          <Col span="12">
            <FormItem label="商品分类" :label-width="80">
              <Cascader style="width: 500px" :data="category" v-model="category2"></Cascader>
            </FormItem>
          </Col>
         </Row>
          <Button @click="onStart" type="primary">
          开始
        </Button>
        </Form>
     </div>
  </div>
</template>

<script>
import config from '@/config/config'
import api from '@/config/api'
export default {
  name: 'product-import',
  data () {
    return {
      url: '',
      category: [],
      category2: []
    }
  },
  created () {
    this.getGoodsCategoryTree()
  },
  methods: {
    onStart () {
      let _this = this
      const kaolaUrl = config.host + api.kaolaimport
      this.$Loading.start()
      _this.$http.post(
        kaolaUrl,
        {
          url: _this.url,
          categoryId: _this.category2.join(',')
        },
        res => {
          if (res.data) {
            this.$Loading.finish()
            setTimeout(() => {
              _this.$router.push('/products/products-list/products-list-index')
            }, 1000)
            console.log(res.data)
          }
        },
        e => {
          console.log(e)
        }
      )
    },
    getGoodsCategoryTree () {
      let _this = this
      const url = config.host + api.query_category_tree
      return _this.$http.get(
        url,
        {},
        res => {
          if (res.data) {
            _this.category = res.data
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
