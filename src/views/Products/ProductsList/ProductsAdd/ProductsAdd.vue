<template>
  <div>
    <h2>添加商品数据(SPU)</h2>
    <Divider />
    <div class="form-warp">
      <Form>
        <Row>
          <Col span="12">
            <FormItem label="商品名称" :label-width="80">
              <Input v-model="userform.name" style="width: 380px" placeholder="商品名称" />
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="推荐语" :label-width="80">
              <Input v-model="userform.promotion" style="width: 380px" placeholder="推荐语" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="商品分类" :label-width="80">
              <Cascader style="width: 380px" :data="category" v-model="userform.category"></Cascader>
            </FormItem>
          </Col>
          <!-- <Col span="12">
            <FormItem label="商品标签" :label-width="80">
              <Select v-model="userform.tag" multiple style="width:380px">
                <Option v-for="item in tag" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
            </FormItem>
          </Col> -->
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="关键词" :label-width="80">
              <Input v-model="userform.keyword" style="width: 380px" placeholder="商品关键词" />
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="商品单位" :label-width="80">
              <Input v-model="userform.unit" style="width: 380px" placeholder="商品单位" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="商品品牌" :label-width="80">
              <Select v-model="userform.brand_id" multiple style="width:380px">
                <Option v-for="item in brand" :value="item.id" :key="item.id">{{ item.name }}</Option>
              </Select>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="供货商" :label-width="80">
              <Select v-model="userform.supplier_id" multiple style="width:380px">
                <Option v-for="item in supplyer" :value="item.id" :key="item.id">{{ item.name }}</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
          <Row>
          <Col span="12">
            <FormItem label="基础销量" :label-width="80">
               <Input v-model="userform.base_sale" style="width: 380px" placeholder="基础销量">
                  <span slot="append">件</span>
               </Input>
            </FormItem>
          </Col>
          <Col span="12">
           <FormItem label="点击数" :label-width="80">
               <Input v-model="userform.base_click" style="width: 380px" placeholder="基础点击数">
                  <span slot="append">次</span>
               </Input>
            </FormItem>
          </Col>
        </Row>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="分享数" :label-width="80">
               <Input v-model="userform.base_share" style="width: 380px" placeholder="基础分享数">
                  <span slot="append">次</span>
               </Input>
            </FormItem>
          </Col>
          <Col span="12">
           <FormItem label="商品编码" :label-width="80">
               <Input v-model="userform.product_code" style="width: 380px" placeholder="商品编码"></Input>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="生产日期" :label-width="80">
                <DatePicker type="date"  v-model="userform.starttime" placeholder="选择日期" style="width: 380px"></DatePicker>
            </FormItem>
          </Col>
          <Col span="12">
           <FormItem label="保质期" :label-width="80">
               <Input v-model="userform.validity_period" style="width: 380px" placeholder="保质期天数">
                  <span slot="append">天</span>
               </Input>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="总库存" :label-width="80">
               <Input v-model="userform.inventory" style="width: 380px" placeholder="总库存">
                  <span slot="append">件</span>
               </Input>
            </FormItem>
          </Col>
          <Col span="12">
             <FormItem label="库存预警" :label-width="80">
               <Input v-model="userform.inventory_warn" style="width: 380px" placeholder="库存预警">
                  <span slot="append">件</span>
               </Input>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="所在地" :label-width="80">
               <Input v-model="userform.place" style="width: 380px" placeholder="商品所在地">
               </Input>
            </FormItem>
          </Col>
          <Col span="12">
             <FormItem label="商品类型" :label-width="80">
              <Select v-model="userform.tag" style="width:380px">
                <Option v-for="item in tag" :value="item.id" :key="item.id">{{ item.name }}</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
        <Button style="position:fixed; bottom:10px" @click="onNext" type="primary">
                下一步
                <Icon type="ios-arrow-forward" />
            </Button>
      </Form>
    </div>
  </div>
</template>

<script>
import categoryMock from "@/mock/mcategory";
import tagMock from "@/mock/mtags";
import ajax from "@/util/ajax"
import config from  "@/config/config"
import api from "@/config/api"
export default {
  name: "product-add",
  data() {
    return {
      userform: {
        name: "", // 商品名称
        promotion: "", //商品推荐语
        category_id: null, // 商品分类id
        keyword: null, // 商品关键词
        unit: null, // 商品单元
        tags: null, // 商品标签
        brand_id: null, // 商品品牌
        supplier_id: null, // 商品供应商
        base_sale: null, // 商品基础销量
        base_click: null, // 商品基础点击
        base_share: null, // 商品基础分享
        product_code: null, // 商品串码
        starttime: null, // 商品生产日期
        validity_period: null, // 商品保质期
        inventory: null, // 商品库存
        inventory_warn: null, // 商品库存预警
        place: null, // 商品产地
        sku_ids: null, // 商品skuid 关联
        type_id: null, // 商品类型
        media: null, // 商品媒体数据地址（视频）
        detail: null // 商品详情信息
      },
      category: categoryMock.data,
      tag: tagMock.data,
      brand:[],
      supplyer:[],
    };
  },
  created() {
    //console.log(categoryMock);

    //获取商品标签接口
    this.getGoodsType()
    // 获取商品树形分类接口
    this.getGoodsCategoryTree()
    // 获取商品品牌接口
    this.getGoodsBrand()
    // 获取供货商接口
    this.getGoodsSupplyer()


  },
  methods: {
    getGoodsSupplyer(){
      let _this = this;
      const url = config.host + api.query_supplier_list;
         return _this.$http.get(
        url,
        {
          page: 1,
          size: 20
        },
        res => {
          if (res.data) {
            _this.supplyer = res.data.rows;
          }
        },
        e => {
          console.log(e);
        }
      );
    },
    getGoodsBrand(){
      let _this = this;
      const url = config.host + api.query_brand_list;
         return _this.$http.get(
        url,
        {
          page: 1,
          size: 20
        },
        res => {
          if (res.data) {
            _this.brand = res.data.rows;
          }
        },
        e => {
          console.log(e);
        }
      );
    },
    getGoodsCategoryTree(){
      let _this = this;
      const url = config.host + api.query_category_tree;
         return _this.$http.get(
        url,
        {},
        res => {
          if (res.data) {
            _this.category = res.data;
          }
        },
        e => {
          console.log(e);
        }
      );
    },
    getGoodsType(){
      let _this = this;
      const url = config.host + api.query_type_list;
         return _this.$http.get(
        url,
        {
          page: 1,
          size: 20
        },
        res => {
          if (res.data) {
            _this.tag = res.data.rows;
          }
        },
        e => {
          console.log(e);
        }
      );
    },
    onNext(){
      const url = config.host + api.addGood;
      let userform = this.userform;
      ajax.post(url,{
          name: userform.name,     // 必须
          category_id:userform.category_id, 
          promotion:userform.promotion,
          keyword: userform.keyword,
          unit : userform.unit,
          tags: userform.tags,
          brand_id: userform.brand_id,
          supplier_id: userform.supplier_id,
          base_sale: userform.base_sale,
          base_click: userform.base_click,
          base_share: userform.base_share,
          product_code: userform.product_code,
          starttime: userform.starttime,
          validity_period : userform.validity_period,
          inventory: userform.inventory,
          inventory_warn: userform.inventory_warn,
          place: userform.place,
          sku_ids: userform.sku_ids,
          photo: userform.photo,
          type_id: userform.type_id,
          status:0,
      },(res)=>{
        if(res.data){
          const {id} = res.data
          this.$router.push('/products/products-list/products-add2?id=' + id);
        }
      },(e)=>{
        console.log(e);
      })
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