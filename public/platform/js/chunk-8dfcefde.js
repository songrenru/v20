(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8dfcefde"],{"07ee":function(t,e,i){"use strict";i.r(e);var n,o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-modal",{attrs:{title:"富文本编辑",visible:t.visible,width:900},on:{ok:t.handleOk,cancel:t.handleCancel}},[i("div",{staticClass:"form_item"},[i("div",{staticClass:"title"},[t._v("是否启用：")]),i("a-radio-group",{attrs:{name:"radioGroup"},model:{value:t.richDetail.status,callback:function(e){t.$set(t.richDetail,"status",e)},expression:"richDetail.status"}},[i("a-radio",{attrs:{value:1}},[t._v("启用")]),i("a-radio",{attrs:{value:2}},[t._v("关闭")])],1)],1),i("div",{staticClass:"form_item"},[i("div",{staticClass:"title"},[t._v("标题：")]),i("a-input",{staticStyle:{width:"270px"},attrs:{placeholder:"请输入"},model:{value:t.richDetail.title,callback:function(e){t.$set(t.richDetail,"title",e)},expression:"richDetail.title"}})],1),i("div",{staticClass:"form_item"},[i("div",{staticClass:"title"},[t._v("内容：")]),i("quill-editor",{ref:"myQuillEditor",attrs:{options:t.editorOption},on:{blur:function(e){return t.onEditorBlur(e)},focus:function(e){return t.onEditorFocus(e)},change:function(e){return t.onEditorChange(e)},ready:function(e){return t.onEditorReady(e)}},model:{value:t.richDetail.content,callback:function(e){t.$set(t.richDetail,"content",e)},expression:"richDetail.content"}})],1)])},l=[],a=i("ade3"),r=(i("a9e3"),i("953d")),c=(i("a7539"),i("8096"),i("14e1"),{components:{quillEditor:r["quillEditor"]},props:{visible:{type:Boolean,default:!1},device_id:{type:[String,Number],default:0}},data:function(){return{labelCol:{span:6},wrapperCol:{span:14},deviceForm:{},rules:{},richText:"",editorOption:{modules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["12","14","16","18","20","22","24","28","32","36"]}],[{header:[1,2,3,4,5,6]}],[{color:[]},{background:[]}],[{align:[]}],["clean"],["image"]]},placeholder:"请输入正文"},richDetail:{title:"",content:"",type:1}}},methods:(n={handleOk:function(){this.$emit("close")},handleCancel:function(){this.$emit("close")},onEditorBlur:function(t){console.log("editor blur!",t)},onEditorFocus:function(t){console.log("editor focus!",t)},onEditorReady:function(t){console.log("editor ready!",t)},onEditorChange:function(t){var e=t.quill,i=t.html,n=t.text;console.log("editor change!",e,i,n),this.richText=i}},Object(a["a"])(n,"handleOk",(function(){var t=this;t.richDetail.title?t.richDetail.content?t.request("/community/village_api.Pile/editNews",t.richDetail).then((function(e){t.$message.success("编辑成功！"),t.$emit("close")})):t.$message.warn("请编辑内容"):t.$message.warn("请填写标题")})),Object(a["a"])(n,"handleCancel",(function(){this.$emit("close")})),Object(a["a"])(n,"getDetail",(function(){var t=this;t.request("/community/village_api.Pile/getNews",{type:1}).then((function(e){t.richDetail=e}))})),n)}),s=c,u=(i("27ea"),i("2877")),d=Object(u["a"])(s,o,l,!1,null,"5f5ef7ab",null);e["default"]=d.exports},"23f5":function(t,e,i){},"27ea":function(t,e,i){"use strict";i("23f5")}}]);