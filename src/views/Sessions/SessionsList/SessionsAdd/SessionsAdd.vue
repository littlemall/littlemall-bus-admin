<template>
  <div style="height:800px">
     <h2>添加专场</h2>
      <Divider />
       <div class="form-warp">
        <Form>
          <Row>
          <Col span="12">
            <FormItem label="专场名称" :label-width="80">
              <Input v-model="session.name" style="width: 380px" placeholder="专场名称" />
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="关键词" :label-width="80">
              <Input v-model="session.keyword" style="width: 380px" placeholder="关键词" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="描述" :label-width="80">
              <Input v-model="session.desc" style="width: 380px" placeholder="描述" />
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="背景色" :label-width="80">
               <ColorPicker v-model="session.bgcolor" alpha editable @change="changeColor"/>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="开始时间" :label-width="80">
              <DatePicker v-model="session.start_at"   placeholder="Select date" style="width: 200px"></DatePicker>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="结束时间" :label-width="80">
              <DatePicker v-model="session.end_at"  placeholder="Select date" style="width: 200px"></DatePicker>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="8">
              <Upload
              ref="uploadPic"
              :on-success="handlePic"
              action="http://10.18.120.228:7001/goods/admin/upload_pic"
              >
                  <Button icon="ios-cloud-upload-outline">上传专场图片(750*254)</Button>
              </Upload>
              <div>
                <img width="100px" :src="session.photos"/>
              </div>
          </Col>
          <Col span="8">
              <Upload
              ref="uploadPc"
              :on-success="handlePC"
              action="http://10.18.120.228:7001/goods/admin/upload_pic"
              >
                  <Button icon="ios-cloud-upload-outline">上传PC专场Banner图(1920*506)</Button>
              </Upload>
               <div>
                <img width="100px" :src="session.banner_pc"/>
              </div>
          </Col>
          <Col span="8">
              <Upload
              ref="uploadMobile"
              :on-success="handleMobile"
              action="http://10.18.120.228:7001/goods/admin/upload_pic"
              >
                  <Button icon="ios-cloud-upload-outline">上传Mobile专场Banner图(750*254)</Button>
              </Upload>
               <div>
                <img width="100px" :src="session.banner_mobile"/>
              </div>
          </Col>
        </Row>
        </Form>
         <Divider />
        <h3 style="margin-bottom:10px">添加关联商品</h3>
        <Form>
      <Row>
          <Col span="6">
            <FormItem label="商品名称" :label-width="80">
              <Input v-model="userform.name" style="width: 240px" placeholder="商品名称" />
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="商品分类" :label-width="80">
               <Cascader style="width: 240px" :data="category" v-model="userform.category"></Cascader>
            </FormItem>
          </Col>
          <Col span="6">
            <Button class="spec-btn" type="primary" @click="onSearch()">查询</Button>
          </Col>
      </Row>
     </Form>
          <Table
          ref="goodselect"
          border
          :columns="columns"
          :data="list"
          className="goodTabel"
          @on-selection-change="onSelectProduct"
          >
              <template slot-scope="{ row }" slot="name">
                <div alt="row.name" src="javascript:void(0)" class="t-title">{{ row.name }}</div>
              </template>
              <template slot-scope="{ row }" slot="category">
                <div> {{formatCategory(row.category_id)}}</div>
              </template>
              <template slot-scope="{ row }" slot="photo">
                <div>
                  <img :src="row.pimg" width="100px" style="margin:10px 0 0 0" />
                </div>
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
          @on-change="onChange"
          class-name="goodpage"
        />
        <div style="margin-top:50px">
          <Button type="primary" @click="onSubmit">提交</Button>
        </div>
       </div>
  </div>
</template>

<script>
import ajax from '@/util/ajax'
import config from '@/config/config'
import api from '@/config/api'

export default {
  name: 'product-add',
  data () {
    return {
      session: {
        name: '',
        keyword: '',
        desc: '',
        photos: '',
        banner_pc: '',
        banner_mobile: '',
        bgcolor: '#fff',
        start_at: '',
        end_at: ''
      },
      userform: {
        name: '',
        category: []
      },
      goodname: null,
      categoryStr: null,
      dataTotal: 1, // 页总数
      currentPage: 1,
      numsPerPage: 100,
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
          title: '商品库存',
          key: 'inventory'
        }
      ],
      list: [],
      categorys: [],
      selectList: [],
      category: []
    }
  },
  created () {
    this.sessionId = this.$route.query.id
    this.getCategoryList()
    // 获取商品树形分类接口
    this.getGoodsCategoryTree()
    if (this.sessionId) {
    // 编辑页面
      // 获取专场所属商品列表
      const url = config.host + api.session_good_list
      this.$http.get(
        url,
        {
          session_id: this.sessionId,
          page: 1,
          size: 500
        },
        res => {
          if (res.data) {
            console.log(res.data)
            if (res.data && res.data.rows && res.data.rows.length > 0) {
              this.formatEditSession(res.data.rows[0].session_session)
              this.formatEditGoods(res.data.rows)
            }
          }
        },
        e => {
          console.log(e)
        }
      )
    } else {
      this.columns.unshift({
        type: 'selection',
        width: 60,
        align: 'center'
      })
      this.getData()
    }
  },
  methods: {
    onSearch () {
      this.currentPage = 1
      this.goodname = this.userform.name
      if (this.userform.category.length > 0) {
        this.categoryStr = this.userform.category.join(',')
      }
      this.getData()
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
    formatEditGoods (rows) {
      this.dataTotal = rows.length
      let temparr = []
      for (const item of rows) {
        const good = item.good_good
        temparr.push(good)
      }
      this.list = this.formateList(temparr)
    },
    formatEditSession (session) {
      this.session.name = session.name
      this.session.keyword = session.keyword
      this.session.desc = session.desc
      this.session.photos = session.photos
      this.session.banner_pc = session.banner_pc
      this.session.banner_mobile = session.banner_pc
      this.session.bgcolor = session.bgcolor
      this.session.start_at = session.start_at
      this.session.end_at = session.end_at
    },
    onSelectProduct (selection) {
      this.selectList = selection
    },
    handlePic (res, file) {
      this.session.photos = 'http://10.18.120.228:7001' + res.data.path
    },
    handlePC (res, file) {
      this.session.banner_pc = 'http://10.18.120.228:7001' + res.data.path
    },
    handleMobile (res, file) {
      this.session.banner_mobile = 'http://10.18.120.228:7001' + res.data.path
    },
    onSubmit () {
      if (this.sessionId) {
        const url = config.host + api.update_session
        ajax.post(
          url,
          {
            id: this.sessionId,
            name: this.session.name,
            keyword: this.session.keyword,
            desc: this.session.desc,
            photos: this.session.photos,
            banner_pc: this.session.banner_pc,
            banner_mobile: this.session.banner_mobile,
            bgcolor: this.session.bgcolor,
            start_at: this.session.start_at,
            end_at: this.session.end_at
          },
          res => {
            if (res.data) {
              this.$Message.success('更新专场成功')
              setTimeout(() => {
                this.$router.push('/sessions/sessions-list/sessions-list-index')
              }, 1000)
            }
          },
          e => {
            console.log(e)
          }
        )
      } else {
        const url = config.host + api.add_session
        let selectList = []
        for (let i = 0; i < this.selectList.length; i++) {
          selectList.push(this.selectList[i].id)
        }
        ajax.post(
          url,
          {
            name: this.session.name,
            keyword: this.session.keyword,
            desc: this.session.desc,
            photos: this.session.photos,
            banner_pc: this.session.banner_pc,
            banner_mobile: this.session.banner_mobile,
            bgcolor: this.session.bgcolor,
            start_at: this.session.start_at,
            end_at: this.session.end_at,
            selecStr: selectList.join(',')
          },
          res => {
            if (res.data) {
              this.$Message.success('添加专场成功')
              setTimeout(() => {
                this.$router.push('/sessions/sessions-list/sessions-list-index')
              }, 1000)
            }
          },
          e => {
            console.log(e)
          }
        )
      }
    },
    changeColor (color) {
      this.session.bgcolor = color
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
      let result
      for (let i = 0; i < this.categorys.length; i++) {
        if (id === this.categorys[i].id) {
          result = this.categorys[i]
        }
      }
      return result
    },
    formateList (arr) {
      for (let item of arr) {
        if (item.photo && item.photo !== '') {
          item['pimg'] = JSON.parse(item.photo)[0].url
        }
      }
      return arr
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
          size: _this.numsPerPage,
          name: _this.goodname,
          category: _this.categoryStr
        },
        res => {
          if (res.data) {
            _this.list = _this.formateList(res.data.rows)
            _this.dataTotal = res.data.count
          }
        },
        e => {
        }
      )
    },
    onChange (page) {
      this.currentPage = page
      this.getData()
      console.log(this.$refs.goodselect)
    }
  }
}
</script>
<style>
.t-title {
  width: 200;
  display: -webkit-box; /*必须结合的属性,将对象作为弹性伸缩盒子模型显示*/
  -webkit-line-clamp: 2; /*设置多少行*/
  -webkit-box-orient: vertical; /*必须结合的属性,设置或检索伸缩盒对象的子元素的排列方式*/
  overflow: hidden; /*文本会被修剪，并且剩余的部分不可见*/
  text-overflow: ellipsis; /*显示省略号来代表被修剪的文本*/
}
.goodpage{
  margin-top: 10px;
}
.goodTabel{
   margin-top: 10px;
}
</style>
