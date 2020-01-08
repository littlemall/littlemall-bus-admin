<template>
  <div style="margin-top:10px">
    <h2>考拉导入</h2>
     <Divider />
     <div class='form-wrap'>
        <Form>
        <Row>
          <Col span="12">
            <FormItem label="地址" :label-width="80">
              <Input v-model="url" style="width: 380px" placeholder="地址" />
            </FormItem>
          </Col>
        </Row>
        </Form>
     </div>
  </div>
</template>

<script>
// import ajax from '@/util/ajax'
// import config from '@/config/config'
// import api from '@/config/api'

export default {
  name: 'product-import',
  data () {
    return {
      url: ''
    }
  },
  created () {
  },
  methods: {

  }
}
</script>
<style lang="less">
.form-warp {
  padding: 20px;
}
</style>
