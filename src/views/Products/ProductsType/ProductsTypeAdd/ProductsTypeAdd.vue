<template>
  <div>
    <h2>添加商品类型</h2>
    <Divider />
    <div class="form-warp">
      <Form>
        <Row>
          <Col span="12">
            <FormItem label="类型名称" :label-width="80">
              <Input v-model="caform.name" style="width: 380px" placeholder="类型名称" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="属性排序" :label-width="80">
              <Input v-model="caform.sort" style="width: 380px" placeholder="属性排序" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="是否启用" :label-width="80">
              <i-switch  v-model="switchDefault" size="large" @on-change="change">
                <span slot="open">开启</span>
                <span slot="close">关闭</span>
              </i-switch>
            </FormItem>
          </Col>
        </Row>

        <Button style="position:fixed; bottom:10px" @click="onNext" type="primary">保存</Button>
      </Form>
    </div>
  </div>
</template>

<script>
import categoryMock from '@/mock/mcategory'
import tagMock from '@/mock/mtags'
import ajax from '@/util/ajax'
import config from '@/config/config'
import api from '@/config/api'
export default {
  name: 'product-add',
  data () {
    return {
      category: categoryMock.data,
      tag: tagMock.data,
      switchDefault: false,
      caform: {
        name: null,
        sort: null,
        is_used: 0
      }
    }
  },
  created () {},
  methods: {
    change (status) {
      this.switchDefault === true ? this.caform.is_used = 1 : this.caform.is_used = 0
    },
    onNext () {
      const url = config.host + api.add_type
      let caform = this.caform
      console.log(caform)
      ajax.post(
        url,
        {
          name: caform.name,
          sort: caform.sort,
          is_used: caform.is_used
        },
        res => {
          if (res.data) {
            this.$router.push('/products/products-type/products-type-index')
          }
        },
        e => {
          console.log(e)
        }
      )
      //  console.log(url);
    }
  }
}
</script>
<style lang="less">
.form-warp {
  padding: 20px;
}
</style>
