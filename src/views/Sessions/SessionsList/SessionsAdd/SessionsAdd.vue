<template>
  <div>
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
        </Row>
        <Row>
          <Col span="8">
              <Upload action="//jsonplaceholder.typicode.com/posts/">
                  <Button icon="ios-cloud-upload-outline">上传专场图片</Button>
              </Upload>
          </Col>
          <Col span="8">
              <Upload action="//jsonplaceholder.typicode.com/posts/">
                  <Button icon="ios-cloud-upload-outline">上传PC专场Banner图</Button>
              </Upload>
          </Col>
          <Col span="8">
              <Upload action="//jsonplaceholder.typicode.com/posts/">
                  <Button icon="ios-cloud-upload-outline">上传Mobile专场Banner图</Button>
              </Upload>
          </Col>
        </Row>
        </Form>
         <Divider />
        <div style="margin-top:50px">
          <Button type="primary" @click="onSubmit">提交</Button>
        </div>
       </div>
  </div>
</template>

<script>
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
        bgcolor: ''
      }
    }
  }
}
</script>

<style>

</style>
