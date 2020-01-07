<template>
  <div>
    <Button class="spec-btn" type="primary" @click="onAdd()">添加专场</Button>
    <Divider />
    <div class="sessions-table">
      <Table border :columns="columns" :data="list">
         <template slot-scope="{ row }" slot="bgcolor">
          <div alt="row.name" src="javascript:void(0)" class="bgcolor" :style="'background-color: '+row.bgcolor"></div>
        </template>
         <template slot-scope="{ row }" slot="photos">
          <div>
            <img :src="row.photos" width="100px" style="margin:10px 0 0 0" />
          </div>
        </template>
        <template slot-scope="{ row }" slot="banner_pc">
          <div>
            <img :src="row.banner_pc" width="100px" style="margin:10px 0 0 0" />
          </div>
        </template>
        <template slot-scope="{ row, index }" slot="action">
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
        show-total
        class-name="sessionpage"
        @on-change="onChange"
      />
    </div>
  </div>
</template>

<script>
import config from '@/config/config'
import api from '@/config/api'
import moment from 'moment'
export default {
  name: 'session-list-index',
  data () {
    return {
      detailModal: false,
      dataTotal: 0, // 页总数
      currentPage: 1,
      numsPerPage: 10,
      columns: [
        {
          title: '专场名称',
          key: 'name'
        },
        {
          title: '专场图片',
          slot: 'photos'
        },
        {
          title: 'PC Banner',
          slot: 'banner_pc'
        },
        {
          title: '背景色',
          slot: 'bgcolor'
        },
        {
          title: '开始时间',
          key: 'start_at'
        },
        {
          title: '结束时间',
          key: 'end_at'
        },
        {
          title: '操作',
          slot: 'action',
          width: 200,
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
    remove (index) {
      const obj = this.list[index]
      let id = obj.id
      const url = config.host + api.delete_session
      return this.$http.post(
        url,
        {
          id
        },
        res => {
          if (parseInt(res.code) === 200) {
            this.$Message.info('删除成功!')
            this.getData()
          }
        },
        e => {
          console.log(e)
        }
      )
    },
    onAdd () {
      this.$router.push('/sessions/sessions-list/sessions-add')
    },
    show () {

    },
    edit (index) {
      const itemId = this.list[index].id
      this.$router.push('/sessions/sessions-list/sessions-add?id=' + itemId)
    },
    getData () {
      let _this = this
      const url = config.host + api.session_list
      return _this.$http.get(
        url,
        {
          page: _this.currentPage,
          size: _this.numsPerPage
        },
        res => {
          if (res.data) {
            _this.list = res.data.rows
            for (let item of _this.list) {
              if (item.start_at && item.end_at) {
                item.start_at = moment(item.start_at).format('YYYY-MM-DD hh:mm:ss')
                item.end_at = moment(item.end_at).format('YYYY-MM-DD hh:mm:ss')
              }
            }
            _this.dataTotal = res.data.count
          }
        },
        e => {
          console.log(e)
        }
      )
    },
    onChange () {

    }
  }
}
</script>
<style lang="less">.sessions-table {
  margin-top: 20px;
}
.bgcolor{
  width: 10px;
  height: 10px;
  border: 1px solid #000;
}
.sessionpage{
  margin-top: 10px
}
</style>
