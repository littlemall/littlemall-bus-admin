<template>
  <div>
    <h2>添加供应商</h2>
    <Divider />
    <div class="form-warp">
      <Form>
        <Row>
          <Col span="12">
            <FormItem label="供应商名称" :label-width="80">
              <Input v-model="caform.name" style="width: 380px" placeholder="商品名称" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="供应商描述" :label-width="80">
              <Input v-model="caform.desc" style="width: 380px" placeholder="分类简称" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="供应商手机" :label-width="80">
              <Input v-model="caform.phone" style="width: 380px" placeholder="分类简称" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="供应商地址" :label-width="80">
              <Input v-model="caform.address" style="width: 380px" placeholder="分类简称" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="联系方式" :label-width="80">
              <Input v-model="caform.contact" style="width: 380px" placeholder="分类简称" />
            </FormItem>
          </Col>
        </Row>

        <Button style="position:fixed; bottom:10px" @click="onNext" type="primary">保存</Button>
      </Form>
    </div>
  </div>
</template>

<script>
import categoryMock from "@/mock/mcategory";
import tagMock from "@/mock/mtags";
import ajax from "@/util/ajax";
import config from "@/config/config";
import api from "@/config/api";
export default {
  name: "product-add",
  data() {
    return {
      category: categoryMock.data,
      tag: tagMock.data,
      caform: {
        name: null,
        desc: null,
        contact: null,
        phone: null,
        address: null
      }
    };
  },
  created() {},
  methods: {
    onNext() {
      const url = config.host + api.add_good_supplier;
      let caform = this.caform;
      ajax.post(
        url,
        {
          name: caform.name,
          desc: caform.desc,
          contact: caform.contact,
          phone: caform.phone,
          address: caform.address,
        },
        res => {
          if (res.data) {
            const { id } = res.data;
            this.$router.push("/products/products-supplier/products-supplier-index");
          }
        },
        e => {
          console.log(e);
        }
      );
      //  console.log(url);
    }
  }
};
</script>
<style lang="less">
.form-warp {
  padding: 20px;
}
</style>