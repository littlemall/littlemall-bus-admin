<template>
  <div>
    <h2>添加s商品品牌</h2>
    <Divider />
    <div class="form-warp">
      <Form>
        <Row>
          <Col span="12">
            <FormItem label="品牌名称" :label-width="80">
              <Input v-model="caform.name" style="width: 380px" placeholder="商品名称" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="品牌描述" :label-width="80">
              <Input v-model="caform.desc" style="width: 380px" placeholder="分类简称" />
            </FormItem>
          </Col>
        </Row>
          <Col span="12">
            <FormItem label="是否推荐" :label-width="80">
              <RadioGroup v-model="caform.is_recommend">
                <Radio label="0">
                  <span>推荐</span>
                </Radio>
                <Radio label="1">
                  <span>不推荐</span>
                </Radio>
              </RadioGroup>
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
      caform: {
        name: null,
        desc: null,
        is_recommend: '0',
        photo: null,
        brand_photo: null
      }
    }
  },
  created () {},
  methods: {
    onNext () {
      const url = config.host + api.add_good_brand
      let caform = this.caform
      ajax.post(
        url,
        {
          name: caform.name,
          desc: caform.desc,
          is_recommend: caform.is_recommend,
          photo: caform.photo,
          brand_photo: caform.brand_photo
        },
        res => {
          if (res.data) {
            this.$router.push('/products/products-brand/products-brand-index')
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
