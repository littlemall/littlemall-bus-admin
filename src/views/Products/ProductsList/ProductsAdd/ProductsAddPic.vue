<template>
  <div>
    <div class="demo-upload-list" v-for="item in uploadList">
      <template v-if="item.status === 'finished'">
        <img :src="item.url" />
        <div class="demo-upload-list-cover">
          <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>
          <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
        </div>
      </template>
      <template v-else>
        <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
      </template>
    </div>
    <!-- <Upload
        multiple
        type="drag"
        action="http://10.18.120.228:7001/goods/admin/upload_pic">
        <div style="padding: 20px 0">
            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
            <p>Click or drag files here to upload</p>
        </div>
    </Upload>-->
    <Upload
      ref="upload"
      :show-upload-list="false"
      :default-file-list="defaultList"
      :on-success="handleSuccess"
      :format="['jpg','jpeg','png']"
      :max-size="2048"
      :on-format-error="handleFormatError"
      :on-exceeded-size="handleMaxSize"
      :before-upload="handleBeforeUpload"
      multiple
      type="drag"
      action="http://10.18.120.228:7001/goods/admin/upload_pic"
      style="display: inline-block;width:120px;"
    >
      <div style="width: 120px;height:120px;line-height: 120px;">
        <Icon type="ios-camera" size="120"></Icon>
      </div>
    </Upload>
    <Modal title="View Image" v-model="visible">
      <img
        :src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'"
        v-if="visible"
        style="width: 100%"
      />
    </Modal>
    <div>
      <Button type="primary" @click="onNext">下一步</Button>
    </div>
  </div>
</template>

<script>
import VueNeditorWrap from "vue-neditor-wrap-wx";
import ajax from "@/util/ajax";
import config from "@/config/config";
import api from "@/config/api";

export default {
  name: "product-add-pic",
  data() {
    return {
      defaultList: [],
      imgName: "",
      visible: false,
      uploadList: [],
      goodId: ""
    };
  },
  components: {},
  created() {
    this.goodId = this.$route.query.id;
  },
  methods: {
    handleView(name) {
      this.imgName = name;
      this.visible = true;
    },
    handleRemove(file) {
      const fileList = this.$refs.upload.fileList;
      this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
    },
    handleSuccess(res, file) {
      file.url = "http://10.18.120.228:7001" + res.data.path;
      //   file.url =
      //     "https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar";
      //   file.name = "7eb99afb9d5f317c912f08b5212fd69a";
    },
    handleFormatError(file) {
      this.$Notice.warning({
        title: "The file format is incorrect",
        desc:
          "File format of " +
          file.name +
          " is incorrect, please select jpg or png."
      });
    },
    handleMaxSize(file) {
      this.$Notice.warning({
        title: "Exceeding file size limit",
        desc: "File  " + file.name + " is too large, no more than 2M."
      });
    },
    handleBeforeUpload() {
      const check = this.uploadList.length < 5;
      if (!check) {
        this.$Notice.warning({
          title: "Up to five pictures can be uploaded."
        });
      }
      return check;
    },
    onNext() {
      let pushArr = [];
      let _this = this;
      for (let item of this.uploadList) {
        pushArr.push({
          name: item.name,
          size: item.size,
          url: item.url
        });
      }
      let pushStr = JSON.stringify(pushArr);
      const url = config.host + api.update_goods_pic;
      ajax.post(
        url,
        {
          id: this.goodId,
          photos:pushStr
        },
        res => {
          if (res.data) {
           this.$router.push('/products/products-list/products-add2?id=' + this.goodId);
          }
        },
        e => {
          console.log(e);
        }
      );
    }
  },
  mounted() {
    this.uploadList = this.$refs.upload.fileList;
  }
};
</script>
<style lang="less">
.form-warp {
  padding: 20px;
}
.demo-upload-list {
  display: inline-block;
  width: 120px;
  height: 120px;
  text-align: center;
  line-height: 120px;
  border: 1px solid transparent;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  position: relative;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  margin-right: 4px;
}
.demo-upload-list img {
  width: 100%;
  height: 100%;
}
.demo-upload-list-cover {
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
}
.demo-upload-list:hover .demo-upload-list-cover {
  display: block;
}
.demo-upload-list-cover i {
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  margin: 0 2px;
}
</style>