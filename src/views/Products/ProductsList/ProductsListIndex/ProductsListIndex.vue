<template>
  <div>
    <Button class="spec-btn" type="primary" @click="onAdd()">添加商品</Button>
    <Divider />
    <div class="goods-table">
      <Table border :columns="columns" :data="list">
        <template slot-scope="{ row }" slot="name">
          <div alt="row.name" src="javascript:void(0)" class="t-title">{{ row.name }}</div>
        </template>
        <template slot-scope="{ row }" slot="category">
          <div> {{formatCategory(row.category_id)}}</div>
        </template>
        <template slot-scope="{ row }" slot="brand">
          <div>{{row.good_goodsbrand.name}}</div>
        </template>
        <template slot-scope="{ row }" slot="supplier">
          <div>{{row.good_goodssupplier.name}}</div>
        </template>
        <template slot-scope="{ row }" slot="photo">
          <div>
            <img :src="row.pimg" width="100px" style="margin:10px 0 0 0" />
          </div>
        </template>
        <template slot-scope="{ row, index }" slot="action">
          <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">查看</Button>
          <Button type="primary" size="small" style="margin-right: 5px" @click="edit(index)">编辑</Button>
          <Button type="error" size="small" @click="remove(index)">删除</Button>
        </template>
      </Table>
      <Page
        :total="dataTotal"
        :current="currentPage"
        :page-size="numsPerPage"
        size="small"
        show-elevator
        show-sizer
        @on-change="onChange"
        class-name="goodpage"
      />
    </div>
    <div class="goods-detail">
      <Modal v-model="detailModal" title="商品详情" @on-ok="ok">
        <swiper ref="awesomeSwiperA" :options="swiperOptionA" @set-translate="onSetTranslate">
          <!-- slides -->
          <swiper-slide :key="item.name" v-for="item of currentDetail.imgs">
            <div style="width:280px;height:280px">
              <img width="100%" height="100%" :src="item.url" />
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <div class="good-name-title">{{currentDetail.name}}</div>
        <div class="good-subname">{{currentDetail.keyword}}</div>
        <div class="good-inventory">
          <strong>库存：</strong>
          {{currentDetail.inventory}}
        </div>
        <div v-if="currentDetail.good_goodsskus != null" class="good-market-price">
          <strong>市场价:</strong>
          {{currentDetail.good_goodsskus[0].market_price}}
        </div>
        <div v-if="currentDetail.good_goodsskus != null" class="good-price">
          <strong>商品价:</strong>
          {{currentDetail.good_goodsskus[0].price}}
        </div>
        <div v-if="currentDetail.good_goodsskus != null" class="good-code">
          <strong>商品SKU:</strong>
          {{currentDetail.good_goodsskus[0].code}}
        </div>
        <div v-if="currentDetail.good_goodsskus != null" class="good-attr">
          <strong>商品规格:</strong>
          {{currentDetail.good_goodsskus[0].attr_values_items}}
        </div>
        <div
          v-if="currentDetail.detail != null"
          v-html="currentDetail.detail"
          class="good-detail"
        >{{currentDetail.detail}}</div>
      </Modal>
    </div>
  </div>
</template>

<script>
import config from '@/config/config'
import api from '@/config/api'
export default {
  name: 'product-list-index',
  data () {
    return {
      message: 'Hi from Vue',
      swiperOptionA: {
        pagination: {
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      currentDetail: {
        photos: [],
        name: '',
        keyword: '',
        inventory: 0
      },
      detailModal: false,
      dataTotal: 0, // 页总数
      currentPage: 1,
      numsPerPage: 10,
      columns: [
        {
          title: '商品名称',
          slot: 'name'
        },
        {
          title: '商品分类',
          slot: 'category'
        },
        {
          title: '商品图片',
          slot: 'photo'
        },
        {
          title: '商品关键词',
          key: 'keyword'
        },
        {
          title: '商品品牌',
          slot: 'brand'
        },
        {
          title: '商品供应商',
          // key: "supplier_id"
          slot: 'supplier'
        },
        {
          title: '商品库存',
          key: 'inventory'
        },
        {
          title: '商品状态',
          key: 'status'
        },
        {
          title: '操作',
          slot: 'action',
          width: 200,
          align: 'center'
        }
      ],
      list: [],
      categorys: []
    }
  },
  created () {
    this.getCategoryList()
    this.getData()
  },
  methods: {
    onSetTranslate () {
    //  console.log("onSetTranslate");
    },
    ok () {
      // this.$Message.info("Clicked ok");
    },
    formateList (arr) {
      for (let item of arr) {
        if (item.photo && item.photo !== '') {
          item['pimg'] = JSON.parse(item.photo)[0].url
        }
      }
      return arr
    },
    formatCategory (categoryIds) {
      let arr = categoryIds.split(',')
      let narr = []
      for (let item of arr) {
        let res = this.getCategoryById(parseInt(item))
        narr.push(res.name)
      }
      return narr.join(',')
    },
    getCategoryById (id) {
      console.log(id)
      let result
      for (let i = 0; i < this.categorys.length; i++) {
        if (id === this.categorys[i].id) {
          result = this.categorys[i]
        }
      }
      return result
    },
    getCategoryList () {
      let _this = this
      const url = config.host + api.query_good_category_list
      return _this.$http.get(
        url,
        {
          page: 1,
          size: 500
        },
        res => {
          console.log(res.data)
          if (res.data) {
            _this.categorys = res.data.rows
          }
        },
        e => {
          console.log(e)
        }
      )
    },
    getData () {
      let _this = this
      const url = config.host + api.query_good_list
      return _this.$http.get(
        url,
        {
          page: _this.currentPage,
          size: _this.numsPerPage
        },
        res => {
          if (res.data) {
            _this.list = _this.formateList(res.data.rows)
            console.log(_this.list)
            _this.dataTotal = res.data.count
          }
        },
        e => {
          console.log(e)
        }
      )
    },
    onAdd () {
      this.$router.push('/products/products-list/products-add')
    },
    edit (index) {
      const itemId = this.list[index].id
      this.$router.push('/products/products-list/products-add?id=' + itemId)
    },
    show (index) {
      this.currentDetail = this.list[index]
      this.currentDetail['imgs'] = JSON.parse(this.currentDetail.photo)
      this.detailModal = true
    },
    remove (index) {
      let _this = this
      const obj = this.list[index]
      let id = obj.id
      const url = config.host + api.del_good
      return _this.$http.post(
        url,
        {
          id
        },
        res => {
          if (parseInt(res.code) === 200) {
            this.$Message.info('删除成功!')
            _this.getData()
          }
        },
        e => {
          console.log(e)
        }
      )
    },
    onChange (page) {
      this.currentPage = page
      this.getData()
    }
  }
}
</script>
<style lang="less">
.goods-table {
  margin-top: 20px;
}
.t-title {
  width: 200;
  display: -webkit-box; /*必须结合的属性,将对象作为弹性伸缩盒子模型显示*/
  -webkit-line-clamp: 2; /*设置多少行*/
  -webkit-box-orient: vertical; /*必须结合的属性,设置或检索伸缩盒对象的子元素的排列方式*/
  overflow: hidden; /*文本会被修剪，并且剩余的部分不可见*/
  text-overflow: ellipsis; /*显示省略号来代表被修剪的文本*/
}
.swiper-container {
  height: 300px;
  width: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 38px;
  font-weight: 700;
  background-color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.good-name-title,
.good-inventory {
  font-size: 14px;
  color: #333;
  margin-top: 11px;
}

.good-subname {
  font-size: 12px;
  color: #999;
  margin-top: 6px;
}

.good-detail {
  width: 100%;
}
.good-detail img {
  width: 100% !important;
}
.goodpage{
  margin-top: 10px;
}
</style>
