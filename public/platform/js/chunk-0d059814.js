(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d059814"],{"1e42":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"components-layout-demo-basic"}},[a("a-spin",{attrs:{spinning:t.spinning,size:"large"}},[a("a-layout",[a("a-layout-content",{style:{margin:"24px 16px",padding:"24px",background:"#fff",minHeight:"100px"}},[a("a-table",{attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination},on:{change:t.handleTableChange},scopedSlots:t._u([{key:"use_limit",fn:function(e){return a("span",{},[a("span",{staticClass:"height-30"},0==e?[t._v(" 仅外卖 ")]:1==e?[t._v(" 仅餐饮 ")]:2==e?[t._v(" 全部 ")]:[t._v(" 商城 ")])])}},{key:"type",fn:function(e){return a("span",{},[0==e?a("span",{staticClass:"height-30"},[t._v(" 新单 ")]):1==e?a("span",{staticClass:"height-30"},[t._v(" 满减 ")]):2==e?a("span",{staticClass:"height-30"},[t._v(" 配送 ")]):t._e()])}},{key:"full_money",fn:function(e){return a("span",{},[t._v(" "+t._s(e)+" ")])}},{key:"reduce_money",fn:function(e){return a("span",{},[t._v(" "+t._s(e)+" ")])}},{key:"is_share",fn:function(e){return a("span",{},[a("span",{staticClass:"height-30"},0==e?[t._v(" 不同享 ")]:[t._v(" 同享 ")])])}},{key:"status",fn:function(e){return a("span",{},[a("span",{staticClass:"height-30"},0==e?[t._v(" 停用 ")]:[t._v(" 启用 ")])])}},{key:"action",fn:function(e,r){return a("span",{},[a("a",{staticClass:"label-sm blue",on:{click:function(e){return t.discountEdit(r.id)}}},[t._v(" 修改")]),a("a",{staticClass:"btn label-sm blue",staticStyle:{"margin-left":"10px"},on:{click:function(e){return t.discountDel(r.id)}}},[t._v("删除")])])}},{key:"title",fn:function(e){return[a("a-row",{attrs:{type:"flex",justify:"left",align:"top"}},[a("a-col",{staticStyle:{"font-size":"1.5rem"},attrs:{span:8}},[t._v(" 店铺优惠 "),a("span",{staticStyle:{"font-size":"1rem"}},[t._v("(有效活跃整场活动气氛,吸引顾客下单购买)")])]),a("a-col",{staticClass:"text-right",staticStyle:{"text-align":"right"},attrs:{span:15}},[a("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.discountAdd()}}},[t._v(" 新增活动 ")])],1)],1)]}}])})],1)],1)],1),a("a-modal",{attrs:{title:"活动信息维护",footer:null},model:{value:t.visible_staff,callback:function(e){t.visible_staff=e},expression:"visible_staff"}},[a("a-form",t._b({on:{submit:t.handleSubmit}},"a-form",{labelCol:{span:7},wrapperCol:{span:14}},!1),[a("a-form-item",{attrs:{label:"适用业务"}},[a("a-select",{model:{value:t.formData.use_limit,callback:function(e){t.$set(t.formData,"use_limit",e)},expression:"formData.use_limit"}},[a("a-select-option",{attrs:{value:0}},[t._v(" 仅外卖 ")]),a("a-select-option",{attrs:{value:1}},[t._v(" 仅餐饮 ")]),a("a-select-option",{attrs:{value:2}},[t._v(" 全部 ")]),a("a-select-option",{attrs:{value:3}},[t._v(" 商城 ")])],1)],1),a("a-form-item",{attrs:{label:"优惠类型"}},[a("a-select",{model:{value:t.formData.type,callback:function(e){t.$set(t.formData,"type",e)},expression:"formData.type"}},[a("a-select-option",{attrs:{value:0}},[t._v(" 新单 ")]),a("a-select-option",{attrs:{value:1}},[t._v(" 满减 ")]),a("a-select-option",{attrs:{value:2}},[t._v(" 配送 ")])],1)],1),a("a-form-item",{attrs:{label:"优惠条件"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请输入满足条件的金额"}]}],expression:"[\n                      'name',\n                      { rules: [{ required: true, message: '请输入满足条件的金额' }] },\n                    ]"}],attrs:{placeholder:"请输入满足条件的金额"},model:{value:t.formData.full_money,callback:function(e){t.$set(t.formData,"full_money",e)},expression:"formData.full_money"}})],1),a("a-form-item",{attrs:{label:"优惠金额"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请输入可优惠金额"}]}],expression:"[\n                      'name',\n                      { rules: [{ required: true, message: '请输入可优惠金额' }] },\n                    ]"}],attrs:{placeholder:"请输入可优惠金额"},model:{value:t.formData.reduce_money,callback:function(e){t.$set(t.formData,"reduce_money",e)},expression:"formData.reduce_money"}})],1),a("a-form-item",{attrs:{label:"同享规则"}},[a("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["radio-group"],expression:"['radio-group']"}],model:{value:t.formData.is_share,callback:function(e){t.$set(t.formData,"is_share",e)},expression:"formData.is_share"}},[a("a-row",[a("a-radio",{attrs:{value:1}},[t._v(" 与限时优惠、店铺/分类折扣、会员优惠同享 ")])],1),a("a-row",{style:{color:"red"}},[t._v(" 同享，则所有店铺优惠用户均可享用 ")]),a("a-row",[a("a-radio",{attrs:{value:0}},[t._v(" 与限时优惠、店铺/分类折扣、会员优惠不同享 ")])],1),a("a-row",{style:{color:"red"}},[t._v(" 不同享，则满减优惠（含新单，满减）用户不能享用， 其他店铺优惠（含限时优惠、店铺/分类折扣、会员优惠）正常享用 ")])],1)],1),a("a-form-item",{attrs:{label:"使用状态"}},[a("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["radio-group"],expression:"['radio-group']"}],model:{value:t.formData.status,callback:function(e){t.$set(t.formData,"status",e)},expression:"formData.status"}},[a("a-radio",{attrs:{value:0}},[t._v(" 停用 ")]),a("a-radio",{attrs:{value:1}},[t._v(" 启用 ")])],1)],1),a("a-form-item",{attrs:{"wrapper-col":{span:20,offset:6}}},[a("a-row",{attrs:{type:"flex",justify:"center",align:"top"}},[a("a-col",{staticClass:"text-left",attrs:{span:4}},[a("a-button",{attrs:{type:"default"},on:{click:function(e){return t.hidelModel()}}},[t._v(" 取消 ")])],1),a("a-col",{staticClass:"text-center",attrs:{span:6}},[a("a-button",{attrs:{type:"primary","html-type":"submit"}},[t._v(" 保存 ")])],1),a("a-col",{attrs:{span:6}})],1)],1)],1)],1)],1)},n=[],s=a("8e4c"),o=a("290c"),i=[{title:"序号",dataIndex:"id"},{title:"适用业务",dataIndex:"use_limit",scopedSlots:{customRender:"use_limit"}},{title:"类别",dataIndex:"type",scopedSlots:{customRender:"type"}},{title:"满足金额",dataIndex:"full_money",scopedSlots:{customRender:"full_money"}},{title:"优惠金额",dataIndex:"reduce_money",scopedSlots:{customRender:"reduce_money"}},{title:"是否与限时优惠、店铺/分类折扣、会员优惠同享",dataIndex:"is_share",scopedSlots:{customRender:"is_share"}},{title:"使用状态",dataIndex:"status",scopedSlots:{customRender:"status"}},{title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"}}],c={components:{ARow:o["a"]},data:function(){return{spinning:!1,data:[],visible_staff:!1,store_id:"",site_url:"",pagination:{},queryParam:{page:1,store_id:""},formData:{id:"",use_limit:0,type:0,full_money:0,reduce_money:0,is_share:0,status:0,store_id:""},columns:i}},watch:{$route:function(t){"/merchant/store.merchant/StoreDiscount"==t.path&&(this.store_id=t.query.store_id,this.formData.store_id=t.query.store_id,this.getLists())}},mounted:function(){this.store_id=this.$route.query.store_id,this.formData.store_id=this.$route.query.store_id,this.getLists()},methods:{getLists:function(){var t=this;this.queryParam["page"]=1,this.queryParam["store_id"]=this.store_id,this.data=[],this.request(s["a"].storeDiscount,this.queryParam).then((function(e){t.site_url=e.site_url,t.data=e.list,t.pagination.total=e.count,t.queryParam["page"]+=1}))},handleTableChange:function(t){t.current&&t.current>0&&(this.queryParam["page"]=t.current,this.getLists())},handleSubmit:function(t){var e=this;t.preventDefault(),this.request(s["a"].discountAdd,this.formData).then((function(t){e.getLists(),e.visible_staff=!1,e.formData.id=""}))},hidelModel:function(){this.visible_staff=!1},discountEdit:function(t){var e=this,a={id:t,store_id:this.store_id};this.request(s["a"].discountMsg,a).then((function(t){e.formData.id=t.list.id,e.formData.use_limit=t.list.use_limit,e.formData.type=t.list.type,e.formData.full_money=t.list.full_money,e.formData.reduce_money=t.list.reduce_money,e.formData.is_share=t.list.is_share,e.formData.status=t.list.status,e.formData.store_id=t.list.store_id,e.visible_staff=!0}))},discountDel:function(t){var e=this;this.$confirm({title:"是否确定删除该店员?",centered:!0,onOk:function(){var a={id:t,store_id:e.store_id};e.request(s["a"].discountDel,a).then((function(t){e.getLists(),e.$message.success("操作成功！")}))},onCancel:function(){}})},discountAdd:function(){this.formData.id="",this.formData.use_limit=0,this.formData.type=0,this.formData.full_money=0,this.formData.reduce_money=0,this.formData.is_share=0,this.formData.status=0,this.visible_staff=!0}}},l=c,m=(a("1fbc"),a("2877")),u=Object(m["a"])(l,r,n,!1,null,"69389422",null);e["default"]=u.exports},"1fbc":function(t,e,a){"use strict";a("e66e")},"8e4c":function(t,e,a){"use strict";var r={getLists:"/merchant/merchant.MerchantShopManagement/storeList",getStoreMsg:"/merchant/merchant.MerchantShopManagement/storeMsg",getStaffList:"/merchant/merchant.MerchantShopManagement/staffManagement",staffEdit:"/merchant/merchant.MerchantShopManagement/staffEdit",staffSet:"/merchant/merchant.MerchantShopManagement/staffSet",staffDel:"/merchant/merchant.MerchantShopManagement/staffDelete",storeDiscount:"/merchant/merchant.MerchantShopManagement/discount",discountMsg:"/merchant/merchant.MerchantShopManagement/discountMsg",discountDel:"/merchant/merchant.MerchantShopManagement/discountDelete",discountAdd:"/merchant/merchant.MerchantShopManagement/discountAdd",storeSliderList:"/merchant/merchant.MerchantShopManagement/storeSlider",storeSliderEdit:"/merchant/merchant.MerchantShopManagement/storeSliderAdd",storeSliderDel:"/merchant/merchant.MerchantShopManagement/sliderDel",storeSliderMsg:"/merchant/merchant.MerchantShopManagement/storeSliderMsg",storeAuthEdit:"/merchant/merchant.MerchantShopManagement/authEdit",storeAuthMsg:"/merchant/merchant.MerchantShopManagement/authMsg",storeEdit:"/merchant/merchant.MerchantShopManagement/storeEdit",storeEditSave:"/merchant/merchant.MerchantShopManagement/saveStoreEdit",storeAddSave:"/merchant/merchant.MerchantShopManagement/addStoreEdit",getUrlencode:"/merchant/merchant.MerchantShopManagement/getUrlencode",storeDel:"/merchant/merchant.MerchantShopManagement/storeDel",getStreet:"/merchant/merchant.MerchantShopManagement/getStreet",jobList:"/merchant/merchant.JobPerson/jobList",delJob:"/merchant/merchant.JobPerson/delJob",selJob:"/merchant/merchant.JobPerson/selJob",resJob:"/merchant/merchant.JobPerson/resJob",addJob:"/merchant/merchant.JobPerson/addJob",authentica:"/merchant/merchant.JobPerson/authentica",editJob:"/merchant/merchant.JobPerson/editJob",updateJob:"/merchant/merchant.JobPerson/updateJob",getPersonList:"/merchant/merchant.StoreMarketingPerson/getPersonList",regPhone:"/merchant/merchant.StoreMarketingPerson/regPhone",editPerson:"/merchant/merchant.StoreMarketingPerson/editPerson",addPerson:"/merchant/merchant.StoreMarketingPerson/addPerson",savePerson:"/merchant/merchant.StoreMarketingPerson/savePerson",delPerson:"/merchant/merchant.StoreMarketingPerson/delPerson",storeMarketingRecord:"/store_marketing/merchant.StoreMarketingPerson/storeMarketingRecord",getCircleList:"/merchant/merchant.MerchantShopManagement/getCircleList"};e["a"]=r},e66e:function(t,e,a){}}]);