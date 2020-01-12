<template>
  <div>
    <Button class="spec-btn" type="primary" @click="onAdd()">添加分类</Button>
    <Divider />
      <Form>
      <Row>
          <Col span="6">
            <FormItem label="分类名称" :label-width="80">
              <Input v-model="form.name" style="width: 240px" placeholder="分类名称" />
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="分类层级" :label-width="80">
              <Input v-model="form.level" style="width: 240px" placeholder="分类层级" />
            </FormItem>
          </Col>
          <Col span="6">
            <Button class="spec-btn" type="primary" @click="onSearch()">查询</Button>
          </Col>
      </Row>
     </Form>
    <Divider />
    <div class="goods-table">
      <Table border :columns="columns" :data="list">
        <template slot-scope="{ row }" slot="name">
          <strong>{{ row.name }}</strong>
        </template>
             <template slot-scope="{ row }" slot="photo">
          <div>
            <img :src="row.photo" style="width:50px;height:50px"/>
          </div>
        </template>
        <template slot-scope="{ row, index }" slot="action">
          <Button type="error" size="small" style="margin-right: 5px" @click="remove(index)">删除</Button>
        </template>
      </Table>
      <Page
        :total="dataTotal"
        :current="currentPage"
        size="small"
        show-elevator
        show-sizer
        show-total
        @on-change="onChange"
      />
    </div>
  </div>
</template>

<script>
import config from '@/config/config'
import api from '@/config/api'
export default {
  name: 'product-category-index',
  data () {
    return {
      dataTotal: 0, // 页总数
      currentPage: 1,
      numsPerPage: 10,
      form: {
        name: null,
        level: null
      },
      columns: [
        {
          title: '分类ID',
          key: 'id'
        },
        {
          title: '分类名称',
          key: 'name'
        },
        {
          title: '分类层级',
          key: 'level'
        },
        {
          title: '分类图片',
          slot: 'photo'
        },
        {
          title: '父分类ID',
          key: 'pid'
        },
        {
          title: '操作',
          slot: 'action',
          width: 150,
          align: 'center'
        }
      ],
      list: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    onSearch () {
      this.getData()
    },
    getData () {
      let _this = this
      const url = config.host + api.query_good_category_list
      return _this.$http.get(
        url,
        {
          page: _this.currentPage,
          size: _this.numsPerPage,
          name: _this.form.name,
          level: _this.form.level
        },
        res => {
          console.log(res.data)
          if (res.data) {
            _this.list = res.data.rows
            _this.dataTotal = res.data.count
          }
        },
        e => {
          console.log(e)
        }
      )
    },
    onAdd () {
      this.$router.push('/products/products-category/products-add-category')
    },
    show (index) {},
    remove (index) {
      let _this = this
      const obj = this.list[index]
      let id = obj.id
      const url = config.host + api.delete_category
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
</style>
