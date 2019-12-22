<template>
  <div>
    <Button class="spec-btn" type="primary">添加规格</Button>
    <Button class="spec-btn" type="primary">批量删除</Button>
    <Button class="spec-btn" @click="handleSelectAll(true)">全选</Button>
    <Button class="spec-btn" @click="handleSelectAll(false)">取消全选</Button>
    <Divider/>
    <Table ref="selection" :columns="columns4" :data="data1"></Table>
     <Page class-name="spec-page"  :total="100" :current="2" show-total />
  </div>
</template>

<script>
export default {
  name: 'product-spec',
  data () {
    return {
      columns4: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        }
      ],
      data1: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ]
    }
  },
  created () {},
  methods: {
    handleSelectAll (status) {
      this.$refs.selection.selectAll(status)
    }
  }
}
</script>
<style lang="less">
</style>
