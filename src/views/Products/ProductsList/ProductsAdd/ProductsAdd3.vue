<template>
  <div>
    <m-quill-editor
      :ref="qillObj"
      :width="quill.width"
      :has-border="quill.border"
      v-model="quill.content"
      :sync-output="quill.syncOutput"
      :theme="quill.theme"
      :disabled="quill.disabled"
      :fullscreen="quill.full"
      :toolbar="quill.toolbar"
      @init="onInit"
      @upload="upload"
      @change ="onchange"

    ></m-quill-editor>
    <Button type="primary" @click="onSubmit">提交</Button>
  </div>
</template>

<script>
import MQuillEditor from "vue-m-quill-editor";

export default {
  name: "product-add3",
  data() {
    return {
      userform: {
        media: null, // 商品媒体数据地址（视频）
        detail: null // 商品详情信息
      },
      qillObj:null,
      quill: {
        border: false,
        content: "wellcome ~",
        syncOutput: false,
        theme: "snow", //bubble snow
        disabled: false,
        full: false,
        toolbar: [
          [{ header: 1 }, { header: 2 }],
          [
            "bold",
            "italic",
            "underline",
            "strike",
            "link",
            { header: [1, 2, 3, 4, 5, 6, false] }
          ],
          ["blockquote", "code-block"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ script: "sub" }, { script: "super" }],
          [{ indent: "-1" }, { indent: "+1" }],
          [{ direction: "rtl" }],
          [{ color: [] }, { background: [] }],
          [
            { align: "" },
            { align: "right" },
            { align: "center" },
            { align: "justify" }
          ],
          ["image", "video"],
          ["clean"]
        ]
      }
    };
  },
  components: {
    MQuillEditor
  },
  created() {},
  methods: {
      onInit(quill, MQuillEditor){
          this.qillObj = MQuillEditor;
          //console.log(MQuillEditor)
      },
      onchange(val){
          console.log(val)
      },
    upload(file, insert) {
      console.log(file);
      insert(
        "https://avatars0.githubusercontent.com/u/11366654?s=460&v=4",
        "center"
      );
    },
    onSubmit(){
        console.log(this.qillObj.getContent());
        //console.log(MQuillEditor.getContent())
    }
  }
};
</script>
<style lang="less">
.form-warp {
  padding: 20px;
}
</style>