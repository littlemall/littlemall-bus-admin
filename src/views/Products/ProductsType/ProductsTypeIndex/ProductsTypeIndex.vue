<template>
  <div>
    <Button class="spec-btn" type="primary" @click="onAdd()">添加商品类型</Button>
    <Divider />
    <div class="goods-table">
      <Table border :columns="columns" :data="list">
        <template slot-scope="{ row }" slot="name">
          <strong>{{ row.name }}</strong>
        </template>
        <template slot-scope="{ row, index }" slot="action">
          <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">查看</Button>
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
  name: "product-type-index",
  data() {
    return {
      dataTotal: 0, //页总数
      currentPage: 1,
      numsPerPage: 10,
      columns: [
        {
          title: "品牌ID",
          key: "id"
        },
        {
          title: "商品类型名称",
          key: "name"
        },
        {
          title: "排序值",
          key: "sort"
        },
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
      const url = config.host + api.query_type_list;
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
      this.$router.push("/products/products-type/products-add-type");
    },
    show(index) {},
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