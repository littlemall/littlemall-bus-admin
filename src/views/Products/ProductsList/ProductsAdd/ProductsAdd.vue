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
          </Col>-->
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
              <DatePicker
                type="date"
                v-model="userform.starttime"
                placeholder="选择日期"
                style="width: 380px"
              ></DatePicker>
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
              <Input v-model="userform.place" style="width: 380px" placeholder="商品所在地"></Input>
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
        <Divider />
        <Row>
          <Col span="12">
            <FormItem label="规格" :label-width="80">
              <Input v-model="userform.sku_attr" style="width: 380px" placeholder="商品规格"></Input>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="SKU名称" :label-width="80">
              <Input v-model="userform.sku_name" style="width: 380px" placeholder="SKU名称"></Input>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="商品代码" :label-width="80">
              <Input v-model="userform.sku_code" style="width: 380px" placeholder="商品代码"></Input>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="市场价格" :label-width="80">
              <Input v-model="userform.sku_market_price" style="width: 380px" placeholder="价格">
                <span slot="append">元</span>
              </Input>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="商品价格" :label-width="80">
              <Input v-model="userform.sku_price" style="width: 380px" placeholder="价格">
                <span slot="append">元</span>
              </Input>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="商品库存" :label-width="80">
              <Input v-model="userform.sku_stock" style="width: 380px" placeholder="库存"></Input>
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
import tagMock from '@/mock/mtags'
import ajax from '@/util/ajax'
import config from '@/config/config'
import api from '@/config/api'
const uuidv4 = require('uuid/v4')

export default {
  name: 'product-add',
  data () {
    return {
      goodId: '',
      userform: {
        id: '',
        name: '', // 商品名称
        promotion: '性价比', // 商品推荐语
        category: [],
        category_id: null, // 商品分类id
        keyword: '性价比', // 商品关键词
        unit: '件', // 商品单元
        tags: null, // 商品标签
        brand_id: null, // 商品品牌
        supplier_id: null, // 商品供应商
        base_sale: 1000, // 商品基础销量
        base_click: 1000, // 商品基础点击
        base_share: 1000, // 商品基础分享
        product_code: null, // 商品串码
        starttime: null, // 商品生产日期
        validity_period: 90, // 商品保质期
        inventory: 10000, // 商品库存
        inventory_warn: 100, // 商品库存预警
        place: '广州', // 商品产地
        sku_ids: null, // 商品skuid 关联
        type_id: null, // 商品类型
        media: null, // 商品媒体数据地址（视频）
        detail: null, // 商品详情信息
        sku_code: null,
        sku_name: null,
        sku_attr: '统一',
        sku_market_price: null,
        sku_price: null,
        sku_stock: 1000
      },
      category: [],
      tag: tagMock.data,
      brand: [],
      supplyer: []
    }
  },
  created () {
    // 获取商品ID
    this.goodId = this.$route.query.id
    this.userform.sku_code = uuidv4()
    // 获取商品标签接口
    this.getGoodsType()
    // 获取商品树形分类接口
    this.getGoodsCategoryTree()
    // 获取商品品牌接口
    this.getGoodsBrand()
    // 获取供货商接口
    this.getGoodsSupplyer()
    if (this.goodId) {
      // 编辑页面
      // 获取商品数据
      let _this = this
      const url = config.host + api.query_good
      _this.$http.get(
        url,
        {
          id: this.goodId
        },
        res => {
          if (res.data) {
            let goodDetail = res.data[0]
            let categoryItem = []
            if (goodDetail.category_id) {
              categoryItem = goodDetail.category_id.split(',')
            }
            for (let i = 0; i < categoryItem.length; i++) {
              categoryItem[i] = parseInt(categoryItem[i])
            }
            _this.userform.name = goodDetail.name
            _this.userform.id = goodDetail.id
            _this.userform.promotion = goodDetail.promotion
            _this.userform.category = categoryItem
            _this.userform.keyword = goodDetail.keyword
            _this.userform.unit = goodDetail.unit
            _this.userform.tags = goodDetail.tags
            _this.userform.brand_id = goodDetail.brand_id
            _this.userform.supplier_id = goodDetail.supplier_id
            _this.userform.base_sale = goodDetail.base_sale
            _this.userform.base_click = goodDetail.base_click
            _this.userform.base_share = goodDetail.base_share
            _this.userform.product_code = goodDetail.product_code
            _this.userform.starttime = goodDetail.starttime
            _this.userform.validity_period = goodDetail.validity_period
            _this.userform.inventory = goodDetail.inventory
            _this.userform.inventory_warn = goodDetail.inventory_warn
            _this.userform.place = goodDetail.place
            _this.userform.sku_ids = goodDetail.sku_ids
            _this.userform.type_id = goodDetail.type_id
            _this.userform.media = goodDetail.media
            _this.userform.detail = goodDetail.detail
            _this.userform.sku_code = goodDetail.good_goodsskus[0].code
            _this.userform.sku_name = goodDetail.good_goodsskus[0].name
            _this.userform.sku_attr =
              goodDetail.good_goodsskus[0].attr_values_items
            _this.userform.sku_market_price =
              goodDetail.good_goodsskus[0].market_price
            _this.userform.sku_price = goodDetail.good_goodsskus[0].price
            _this.userform.sku_stock = goodDetail.good_goodsskus[0].stock
            // _this.supplyer = res.data.rows;
          }
        },
        e => {
          console.log(e)
        }
      )
    } else {
      // 新增商品页面
    }
  },
  methods: {
    getGoodsSupplyer () {
      let _this = this
      const url = config.host + api.query_supplier_list
      return _this.$http.get(
        url,
        {
          page: 1,
          size: 20
        },
        res => {
          if (res.data) {
            _this.supplyer = res.data.rows
          }
        },
        e => {
          console.log(e)
        }
      )
    },
    getGoodsBrand () {
      let _this = this
      const url = config.host + api.query_brand_list
      return _this.$http.get(
        url,
        {
          page: 1,
          size: 20
        },
        res => {
          if (res.data) {
            _this.brand = res.data.rows
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
    },
    getGoodsType () {
      let _this = this
      const url = config.host + api.query_type_list
      return _this.$http.get(
        url,
        {
          page: 1,
          size: 20
        },
        res => {
          if (res.data) {
            _this.tag = res.data.rows
          }
        },
        e => {
          console.log(e)
        }
      )
    },
    onNext () {
      if (this.goodId) {
        // 编辑页面
        const url = config.host + api.update_good
        let userform = this.userform
        this.userform.category_id = this.userform.category.join(',')
        ajax.post(
          url,
          {
            id: userform.id,
            name: userform.name, // 必须
            category_id: userform.category_id,
            promotion: userform.promotion,
            keyword: userform.keyword,
            unit: userform.unit,
            tags: userform.tags,
            brand_id: userform.brand_id,
            supplier_id: userform.supplier_id,
            base_sale: userform.base_sale,
            base_click: userform.base_click,
            base_share: userform.base_share,
            product_code: userform.product_code,
            starttime: userform.starttime,
            validity_period: userform.validity_period,
            inventory: userform.inventory,
            inventory_warn: userform.inventory_warn,
            place: userform.place,
            sku_ids: userform.sku_ids,
            photo: userform.photo,
            type_id: userform.type_id,

            status: 0
          },
          res => {
            if (res.data) {
              const { id } = res.data
              this.$router.push(
                '/products/products-list/products-addpic?id=' + id
              )
            }
          },
          e => {
            console.log(e)
          }
        )
      } else {
        // 新增页面
        const url = config.host + api.addGood
        let userform = this.userform
        this.userform.category_id = this.userform.category.join(',')
        ajax.post(
          url,
          {
            name: userform.name, // 必须
            category_id: userform.category_id,
            promotion: userform.promotion,
            keyword: userform.keyword,
            unit: userform.unit,
            tags: userform.tags,
            brand_id: userform.brand_id,
            supplier_id: userform.supplier_id,
            base_sale: userform.base_sale,
            base_click: userform.base_click,
            base_share: userform.base_share,
            product_code: userform.product_code,
            starttime: userform.starttime,
            validity_period: userform.validity_period,
            inventory: userform.inventory,
            inventory_warn: userform.inventory_warn,
            place: userform.place,
            sku_ids: userform.sku_ids,
            photo: userform.photo,
            type_id: userform.type_id,
            sku_code: userform.sku_code,
            sku_name: userform.sku_name,
            sku_attr: userform.sku_attr,
            sku_market_price: userform.sku_market_price,
            sku_price: userform.sku_price,
            sku_stock: userform.sku_stock,
            status: 0
          },
          res => {
            if (res.data) {
              const { id } = res.data
              this.$router.push(
                '/products/products-list/products-addpic?id=' + id
              )
            }
          },
          e => {
            console.log(e)
          }
        )
      }
    }
  }
}
</script>
<style lang="less">
.form-warp {
  padding: 20px;
}
</style>
