(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1bb0003a","chunk-2d0b6a79","chunk-4d20ac42","chunk-2d0b6a79","chunk-2d0b3786"],{"1da1":function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));a("d3b7");function i(t,e,a,i,o,r,s){try{var n=t[r](s),d=n.value}catch(c){return void a(c)}n.done?e(d):Promise.resolve(d).then(i,o)}function o(t){return function(){var e=this,a=arguments;return new Promise((function(o,r){var s=t.apply(e,a);function n(t){i(s,o,r,n,d,"next",t)}function d(t){i(s,o,r,n,d,"throw",t)}n(void 0)}))}}},"23b9":function(t,e,a){"use strict";a("4448")},2909:function(t,e,a){"use strict";a.d(e,"a",(function(){return d}));var i=a("6b75");function o(t){if(Array.isArray(t))return Object(i["a"])(t)}a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("a630");function r(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var s=a("06c5");function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(t){return o(t)||r(t)||Object(s["a"])(t)||n()}},4448:function(t,e,a){},"6c54":function(t,e,a){"use strict";var i,o=a("ade3"),r=(i={getGoodsSortList:"/merchant/merchant.deposit.DepositGoodsSort/getGoodsSortList",getGoodsSortEdit:"/merchant/merchant.deposit.DepositGoodsSort/handleGoodsSort",getGoodsSortInfo:"/merchant/merchant.deposit.DepositGoodsSort/getGoodsSortInfo",delGoodsSort:"/merchant/merchant.deposit.DepositGoodsSort/delGoodsSort",goodsEdit:"/merchant/merchant.deposit.DepositGoods/goodsEdit",getGoodsSortSelect:"/merchant/merchant.deposit.DepositGoodsSort/getGoodsSortSelect",getGoodsList:"/merchant/merchant.deposit.DepositGoods/getGoodsList",getGoodsDetail:"/merchant/merchant.deposit.DepositGoods/getGoodsDetail",delGoods:"/merchant/merchant.deposit.DepositGoods/delGoods",getVerificationList:"/merchant/merchant.deposit.DepositGoodsVerification/getVerificationList",getCashBackList:"/merchant/merchant.Store/getCashBackList",exportCashBackList:"/merchant/merchant.Store/exportCashBackList",goodsTypeList:"/merchant/merchant.CardGoods/goodsTypeList",goodsTypeAdd:"/merchant/merchant.CardGoods/goodsTypeAdd",goodsTypeEdit:"/merchant/merchant.CardGoods/goodsTypeEdit",goodsTypeDel:"/merchant/merchant.CardGoods/goodsTypeDel",goodsList:"/merchant/merchant.CardGoods/goodsList",goodsAdd:"/merchant/merchant.CardGoods/goodsAdd"},Object(o["a"])(i,"goodsEdit","/merchant/merchant.CardGoods/goodsEdit"),Object(o["a"])(i,"goodsDel","/merchant/merchant.CardGoods/goodsDel"),Object(o["a"])(i,"goodsDetail","/merchant/merchant.CardGoods/goodsDetail"),Object(o["a"])(i,"couponList","/merchant/merchant.CardGoods/couponList"),Object(o["a"])(i,"goodsExchangeList","/merchant/merchant.CardGoods/goodsExchangeList"),i);e["a"]=r},7309:function(t,e,a){"use strict";a.r(e);a("b0c0");var i=function(){var t=this,e=t._self._c;return e("a-modal",{attrs:{title:t.title,width:900,height:640,visible:t.visible,footer:null},on:{cancel:t.closeWindow}},[e("a-form",{attrs:{form:t.form,"label-col":{span:3},"wrapper-col":{span:12}},on:{submit:t.handleSubmit}},[e("div",{staticStyle:{"margin-top":"30px"}}),e("a-form-item",{attrs:{label:"商品名称"}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{initialValue:t.detail.name,rules:[{required:!0,message:"请输入商品名称!"}]}],expression:"['name', { initialValue: detail.name,rules: [{ required: true, message: '请输入商品名称!' }] }]"}],attrs:{placeholder:"请输入商品名称"}})],1),e("a-form-item",{attrs:{label:"有效日期"}},[e("a-range-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["expiry_date",{initialValue:[t.moment(t.detail.start_time,this.dateFormat),t.moment(t.detail.end_time,this.dateFormat)],rules:[{required:!0,message:"请选择开始和截止日期!"}]}],expression:"['expiry_date', { initialValue: [moment(detail.start_time, this.dateFormat), moment(detail.end_time, this.dateFormat)],rules: [{ required: true, message: '请选择开始和截止日期!' }] }]"}],staticStyle:{width:"260px"},attrs:{format:t.dateFormat},on:{change:t.rangePickerChange}})],1),e("a-form-item",{attrs:{label:"商品分类"}},[e("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort_id",{initialValue:t.detail.sort_id,rules:[{required:!0,message:t.environ.type.message}]}],expression:"['sort_id', { initialValue: detail.sort_id,rules: [{ required: true, message: environ.type.message }] }]"}],staticStyle:{width:"200px"},attrs:{placeholder:t.environ.type.message},on:{change:t.selectHandleChange}},t._l(t.sortList,(function(a){return e("a-select-option",{key:a.sort_id},[t._v(" "+t._s(a.name)+" ")])})),1)],1),e("a-form-item",{attrs:{label:"库存"}},[e("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["stock_num",{initialValue:t.detail.stock_num,rules:[{required:!0,message:"请输入商品库存!"}]}],expression:"['stock_num' , { initialValue: detail.stock_num,rules: [{ required: true, message: '请输入商品库存!' }] }]"}],staticStyle:{width:"200px"},attrs:{min:0,placeholder:"请输入商品库存"}})],1),e("a-form-item",{attrs:{label:"商品图片"}},[e("a-upload",{directives:[{name:"decorator",rawName:"v-decorator",value:["reply_pic",{rules:[{required:t.environ.image.isrequired,message:"请上传图片!"}]}],expression:"['reply_pic' , { rules: [{ required: environ.image.isrequired, message: '请上传图片!' }] }]"}],attrs:{action:"/v20/public/index.php/common/common.UploadFile/uploadPictures",name:"reply_pic",data:t.updateData,"list-type":"picture-card","file-list":t.fileList},on:{preview:t.handlePreview,change:function(e){return t.upLoadChange(e)}}},[t.fileList.length<1?e("div",[e("a-icon",{attrs:{type:"plus"}}),e("div",{staticClass:"ant-upload-text"},[t._v(" 上传图片 ")])],1):t._e()]),e("a-modal",{attrs:{visible:t.previewVisible,footer:null},on:{cancel:t.handleCancel}},[e("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:t.previewImage}})])],1),e("a-form-item",{attrs:{"wrapper-col":{span:12,offset:5}}},[e("a-button",{attrs:{type:"primary","html-type":"submit"}},[t._v(" 保存 ")])],1)],1)],1)},o=[],r=a("2909"),s=a("1da1"),n=(a("96cf"),a("d3b7"),a("fb6a"),a("d81d"),a("c1df")),d=a.n(n),c=a("6c54");function l(t){return new Promise((function(e,a){var i=new FileReader;i.readAsDataURL(t),i.onload=function(){return e(i.result)},i.onerror=function(t){return a(t)}}))}var m={data:function(){return{title:"添加商品",visible:!1,environ:{image:{isrequired:!0},type:{message:"请选择商品类型"}},formLayout:"horizontal",form:this.$form.createForm(this,{name:"coordinated"}),previewVisible:!1,previewImage:"",fileList:[],updateData:{upload_dir:"merchant/card/goods"},sortList:[],image:"",defaultTime:[],dateFormat:"YYYY-MM-DD",start_time:"",end_time:"",goods_id:0,saveData:{goods_id:0},detail:{name:"",sort_id:"",stock_num:0,start_time:"",end_time:""},edit:!1}},created:function(){},mounted:function(){this.$route.query.goods_id?(this.goods_id=this.$route.query.goods_id,this.getDetail(),this.edit=!0):(this.resetForm(),this.edit=!1)},methods:{moment:d.a,closeWindow:function(){this.visible=!1},getSortList:function(){var t=this;this.request(c["a"].getGoodsSortSelect,{}).then((function(e){0==e.length?t.environ.type.message="请先新建商品类型":t.environ.type.message="请选择商品类型",t.sortList=e}))},selectHandleChange:function(t){},selecthandleBlur:function(){console.log("blur")},selecthandleFocus:function(){console.log("focus")},handleSubmit:function(t){var e=this;t.preventDefault(),this.form.validateFields((function(t,a){if(!t){if(!e.start_time||!e.end_time)return e.$message.error("请选择开始和截止日期！"),!1;if(!e.image)return e.$message.error("请上传商品图片！"),!1;e.saveData.goods_id=e.goods_id,e.saveData.name=a.name,e.saveData.sort_id=a.sort_id,e.saveData.stock_num=a.stock_num,e.saveData.start_time=e.start_time,e.saveData.end_time=e.end_time,e.saveData.image=e.image,e.request(c["a"].goodsEdit,e.saveData).then((function(t){e.$message.success("提交成功"),e.visible=!1,e.$emit("loadRefresh")}))}}))},handleCancel:function(){this.previewVisible=!1},handlePreview:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t.url||t.preview){a.next=4;break}return a.next=3,l(t.originFileObj);case 3:t.preview=a.sent;case 4:e.previewImage=t.url||t.preview,e.previewVisible=!0;case 6:case"end":return a.stop()}}),a)})))()},upLoadChange:function(t){var e=this,a=Object(r["a"])(t.fileList);a.length?(a=a.slice(-1),a=a.map((function(t){return t.response&&(e.image=t.response.data),t})),this.fileList=a):this.fileList=[]},rangePickerChange:function(t,e){this.start_time=e[0],this.end_time=e[1]},getDetail:function(){var t=this;this.request(c["a"].getGoodsDetail,{goods_id:this.goods_id}).then((function(e){t.form.resetFields(),t.detail.name=e.name,t.detail.sort_id=0==e.sort_id?"":e.sort_id,t.detail.stock_num=e.stock_num,t.start_time=e.start_time,t.end_time=e.end_time,t.detail.start_time=d()(e.start_time,t.dateFormat),t.detail.end_time=d()(e.end_time,t.dateFormat),t.image=e.image_text,t.fileList[0]={uid:e.goods_id,name:e.name,status:"done",url:e.image},t.visible=!0}))},resetForm:function(){this.detail.name="",this.detail.sort_id="",this.detail.stock_num=0,this.form.resetFields();var t=new Date;t.setTime(t.getTime());var e=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate();this.start_time=e,this.end_time=e,this.detail.start_time=d()(this.start_time,this.dateFormat),this.detail.end_time=d()(this.end_time,this.dateFormat),this.image="",this.fileList=[],this.goods_id=0,this.saveData={}},showEdit:function(t){this.getSortList(),0==t?(this.resetForm(),this.title="添加商品",this.environ.image.isrequired=!0,this.visible=!0):(this.goods_id=t,this.title="编辑商品",this.environ.image.isrequired=!1,this.getDetail())}},watch:{$route:function(t,e){var a=t.path,i=e.path;if("/merchant/merchant.card/goodsEdit"==a){var o=t.query;o.goods_id?(this.goods_id=o.goods_id,this.edit=!0,"/merchant/merchant.card/goodsList"!=i&&"/merchant/merchant.card/goodsEdit"!=i&&e||this.getDetail()):(this.resetForm(),this.edit=!1)}}}},u=m,h=(a("a441"),a("2877")),g=Object(h["a"])(u,i,o,!1,null,null,null);e["default"]=g.exports},a441:function(t,e,a){"use strict";a("e79f")},a810:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-10 mb-20 pt-20 pl-20 pr-20 pb-20 bg-ff br-10"},[e("router-link",{attrs:{to:{path:"/merchant/merchant.card/goodsList"}}},[e("a-button",{staticStyle:{margin:"10px 10px"},attrs:{type:"primary"}},[t._v(t._s(t.L("会员商品列表")))])],1),e("router-link",{attrs:{to:{path:"/merchant/merchant.card/goodsSort"}}},[e("a-button",{staticStyle:{margin:"10px 10px"},attrs:{type:"default"}},[t._v(t._s(t.L("类型管理")))])],1),e("a-button",{attrs:{type:"default"},on:{click:function(e){return t.$refs.goodsModel.showEdit(0)}}},[t._v(" 添加商品 ")]),e("router-link",{attrs:{to:{path:"/merchant/merchant.card/verificationList"}}},[e("a-button",{staticStyle:{margin:"10px 10px"},attrs:{type:"default"}},[t._v(t._s(t.L("核销列表")))])],1),e("a-table",{staticStyle:{background:"#ffffff"},attrs:{columns:t.columns,rowKey:"id","data-source":t.goodsList,pagination:t.pagination},on:{change:t.changePage},scopedSlots:t._u([{key:"image",fn:function(t){return e("span",{},[e("img",{staticClass:"goods-image",staticStyle:{width:"80px",height:"80px","object-fit":"cover"},attrs:{src:t}})])}},{key:"action",fn:function(a){return e("span",{},[e("a",{staticClass:"inline-block",staticStyle:{"margin-right":"10px"},on:{click:function(e){return t.$refs.goodsModel.showEdit(a)}}},[t._v(t._s(t.L("编辑")))]),e("a",{staticClass:"inline-block",on:{click:function(e){return t.delGoods(a)}}},[t._v(t._s(t.L("删除")))])])}}])}),e("goods-edit",{ref:"goodsModel",on:{loadRefresh:t.getData}})],1)},o=[],r=a("6c54"),s=a("7309"),n={components:{goodsEdit:s["default"]},data:function(){return{store_id:0,goodsList:[],isAllCheck:!1,pagination:{pageSize:10,total:0,current:1,page:1},queryParam:{page:1},columns:[{title:this.L("商品名称"),dataIndex:"name"},{title:this.L("商品图片"),dataIndex:"image",scopedSlots:{customRender:"image"}},{title:this.L("有效期"),dataIndex:"expiry_date"},{title:this.L("分类"),dataIndex:"sort.name"},{title:this.L("库存"),dataIndex:"stock_num"},{title:this.L("操作"),dataIndex:"goods_id",key:"goods_id",scopedSlots:{customRender:"action"}}]}},watch:{},created:function(){},mounted:function(){this.getData()},methods:{getData:function(){var t=this;this.queryParam.pageSize=this.pagination.pageSize,this.queryParam.page=this.pagination.current,this.request(r["a"].getGoodsList,this.queryParam).then((function(e){t.pagination.total=e.total,t.goodsList=e.data}))},handleTableChange:function(t){t.current&&t.current>0&&(this.queryParam["page"]=t.current)},changePage:function(t,e){this.pagination.current=t.current,this.getData()},editGoods:function(t){this.$router.push({path:"/merchant/merchant.card/goodsEdit",query:{goods_id:t}})},delGoods:function(t){var e=this;this.$confirm({title:"是否确定删除该商品?",centered:!0,onOk:function(){e.request(r["a"].delGoods,{goods_id:t}).then((function(t){e.$message.success("操作成功！"),e.getData()}))},onCancel:function(){}})},addGoodsBtn:function(){console.log("添加商品"),$refs.goodsModel.getDetail()}}},d=n,c=(a("23b9"),a("2877")),l=Object(c["a"])(d,i,o,!1,null,null,null);e["default"]=l.exports},e79f:function(t,e,a){}}]);