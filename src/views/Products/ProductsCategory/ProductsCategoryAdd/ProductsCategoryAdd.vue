<template>
  <div>
    <h2>添加商品分类数据</h2>
    <Divider />
    <div class="form-warp">
      <Form>
        <Row>
          <Col span="12">
            <FormItem label="分类名称" :label-width="80">
              <Input v-model="caform.name" style="width: 380px" placeholder="商品名称" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="分类简称" :label-width="80">
              <Input v-model="caform.name_simple" style="width: 380px" placeholder="分类简称" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="父分类ID" :label-width="80">
              <Input v-model="caform.pid" style="width: 380px" placeholder="父分类ID" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="是否可见" :label-width="80">
              <RadioGroup v-model="caform.is_show">
                <Radio label="0">
                  <span>可见</span>
                </Radio>
                <Radio label="1">
                  <span>不可见</span>
                </Radio>
              </RadioGroup>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="商品排序" :label-width="80">
              <Input v-model="caform.sort" style="width: 380px" placeholder="商品排序" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="关键词" :label-width="80">
              <Input v-model="caform.keyword" style="width: 380px" placeholder="关键词" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="商品描述" :label-width="80">
              <Input v-model="caform.desc" style="width: 380px" placeholder="商品描述" />
            </FormItem>
          </Col>
        </Row>
        <Row>
            <Col span="12">
              <Upload
              ref="uploadPic"
              :on-success="handlePic"
              :action="uploadCategory"
              >
                  <Button icon="ios-cloud-upload-outline">上传专场图片(200*200)</Button>
              </Upload>
              <div>
                <img width="100px" :src="caform.photo"/>
              </div>
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
      uploadCategory: config.host + api.upload_category_pic,
      caform: {
        name: null,
        name_simple: null,
        pid: null,
        is_show: '0',
        sort: null,
        photo: null,
        keyword: null,
        desc: null
      }
    }
  },
  created () {},
  methods: {
    handlePic (res, file) {
      this.caform.photo = 'http://10.18.120.228:7001' + res.data.path
    },
    onNext () {
      const url = config.host + api.add_good_category
      let caform = this.caform
      ajax.post(
        url,
        {
          name: caform.name, // 必须
          name_simple: caform.name_simple,
          pid: caform.pid,
          is_show: caform.is_show,
          sort: caform.sort,
          photo: caform.photo,
          keyword: caform.keyword,
          desc: caform.desc
        },
        res => {
          if (res.data) {
            this.$router.push('/products/products-category/products-category-index')
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
