<template>
  <div>
    <Button class="spec-btn" type="primary" @click="onAdd()">添加商品</Button>
    <Divider />
    <div class="goods-table">
      <Table border :columns="columns" :data="list">
        <template slot-scope="{ row }" slot="name">
          <strong>{{ row.name }}</strong>
        </template>
        <template slot-scope="{ row, index }" slot="action">
          <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">查看</Button>
          <Button type="error" size="small" @click="remove(index)">删除</Button>
        </template>
      </Table>
      <Page
        :total="dataTotal"
        :current="currentPage"
        size="small"
        show-elevator
        show-sizer
        @on-change="onChange"
      />
    </div>
  </div>
</template>

<script>
import config from "@/config/config";
import api from "@/config/api";
export default {
  name: "product-list-index",
  data() {
    return {
      dataTotal: 0, //页总数
      currentPage: 1,
      numsPerPage: 10,
      columns: [
        {
          title: "商品名称",
          key: "name"
        },
        {
          title: "商品分类",
          key: "category_id"
        },
        {
          title: "商品推荐语",
          key: "promotion"
        },
        {
          title: "商品关键词",
          key: "keyword"
        },
        {
          title: "商品标签",
          key: "tags"
        },
        {
          title: "商品品牌",
          key: "brand_id"
        },
        {
          title: "商品供应商",
          key: "supplier_id"
        },
        {
          title: "商品库存",
          key: "inventory"
        },
        {
          title: "商品状态",
          key: "status"
        },
        {
          title: "操作",
          slot: "action",
          width: 150,
          align: "center"
        }
      ],
      list: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      let _this = this;
      const url = config.host + api.query_good_list;
      return _this.$http.get(
        url,
        {
          page: _this.currentPage,
          size: _this.numsPerPage
        },
        res => {
          console.log(res.data);
          if (res.data) {
            _this.list = res.data.rows;
            _this.dataTotal = res.data.count;
          }
        },
        e => {
          console.log(e);
        }
      );
    },
    onAdd() {
      this.$router.push("/products/products-list/products-add");
    },
    show(index) {},
    remove(index) {},
    onChange(page) {
      this.currentPage = page;
      this.getData();
    }
  }
};
</script>
<style lang="less">
.goods-table {
  margin-top: 20px;
}
</style>