<template>
  <div>
     hello category
  </div>
</template>

<script>
import config from "@/config/config";
import api from "@/config/api";
export default {
  name: "product-category-index",
  data() {
    return {
      dataTotal: 0, //页总数
      currentPage: 1,
      numsPerPage: 10,
      columns: [
      ],
      list: []
    };
  },
  created() {
  },
  methods: {
    // getData() {
    //   let _this = this;
    //   const url = config.host + api.query_good_list;
    //   return _this.$http.get(
    //     url,
    //     {
    //       page: _this.currentPage,
    //       size: _this.numsPerPage
    //     },
    //     res => {
    //       console.log(res.data);
    //       if (res.data) {
    //         _this.list = res.data.rows;
    //         _this.dataTotal = res.data.count;
    //       }
    //     },
    //     e => {
    //       console.log(e);
    //     }
    //   );
    // },
    // onAdd() {
    //   this.$router.push("/products/products-list/products-add");
    // },
    // show(index) {},
    // remove(index) {
    //   let _this = this;
    //   const obj = this.list[index];
    //   let id = obj.id;
    //   const url = config.host + api.del_good;
    //   return _this.$http.post(
    //     url,
    //     {
    //       id,
    //     },
    //     res => {
    //       if(res.code == 200){
    //          this.$Message.info('删除成功!');
    //         _this.getData()
    //       }
    //     },
    //     e => {
    //       console.log(e);
    //     }
    //   );
    // },
    // onChange(page) {
    //   this.currentPage = page;
    //   this.getData();
    // }
  }
};
</script>
<style lang="less">
.goods-table {
  margin-top: 20px;
}
</style>