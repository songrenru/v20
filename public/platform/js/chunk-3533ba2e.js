(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3533ba2e"],{2975:function(t,e,a){"use strict";var s={getList:"/real_estate/platform.Process/getList",payNameList:"/real_estate/platform.Process/payNameList",add:"/real_estate/platform.Process/add",edit:"/real_estate/platform.Process/edit",show:"/real_estate/platform.Process/show",delete:"/real_estate/platform.Process/delete",changeSort:"/real_estate/platform.Process/changeSort",getProjectList:"real_estate/platform.Project/getList",addProjectList:"real_estate/platform.Project/add",editProjectList:"real_estate/platform.Project/edit",showProjectList:"real_estate/platform.Project/show",deleteProjectList:"real_estate/platform.Project/delete",getPropertyTypeList:"real_estate/platform.PropertyType/getList",addPropertyTypeList:"real_estate/platform.PropertyType/add",editPropertyTypeList:"real_estate/platform.PropertyType/edit",showPropertyTypeList:"real_estate/platform.PropertyType/show",deletePropertyTypeList:"real_estate/platform.PropertyType/delete",getOtherList:"real_estate/platform.Wish/getOtherList",getWishList:"real_estate/platform.Wish/getList",changeProcess:"real_estate/platform.Wish/changeProcess",changeStatus:"real_estate/platform.Wish/changeStatus",addWish:"real_estate/platform.Wish/add",editWish:"real_estate/platform.Wish/edit",showWish:"real_estate/platform.Wish/show",exportData:"real_estate/platform.Wish/exportData",deleteWish:"real_estate/platform.Wish/delete",getUserList:"real_estate/platform.Wish/getUserList"};e["a"]=s},"842a":function(t,e,a){},"98c8":function(t,e,a){"use strict";a("842a")},d83e:function(t,e,a){"use strict";a.r(e);a("54f8");var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-10 mb-20 pt-20 pl-20 pr-20 pb-20 bg-ff br-10"},[e("a-tabs",{on:{change:t.tabsChange},model:{value:t.tabKey,callback:function(e){t.tabKey=e},expression:"tabKey"}},[e("a-tab-pane",{key:1,attrs:{tab:"项目列表"}}),e("a-tab-pane",{key:2,attrs:{tab:"房产类型"}})],1),e("a-row",{staticClass:"center",attrs:{type:"flex",align:"middle"}},[e("div",{staticClass:"btn_list"},[e("a-button",{staticStyle:{margin:"10px 20px"},attrs:{type:"primary"},on:{click:t.addClick}},[t._v(t._s(t.L("新建")))])],1)]),e("a-table",{staticStyle:{background:"#ffffff"},attrs:{columns:1==t.tabKey?t.columns1:t.columns2,rowKey:"id","data-source":t.dataList,pagination:t.pagination},scopedSlots:t._u([{key:"place",fn:function(a){return[e("span",{attrs:{title:a}},[t._v(t._s(a))])]}},{key:"action",fn:function(a,s){return e("span",{},[e("a",{staticClass:"inline-block",staticStyle:{"margin-right":"10px"},on:{click:function(e){return t.editTicket(s)}}},[t._v(t._s(t.L("编辑")))]),e("a",{staticClass:"inline-block",staticStyle:{color:"red"},on:{click:function(e){return t.delPackage(s)}}},[t._v(t._s(t.L("删除")))])])}}])}),e("a-modal",{attrs:{maskClosable:!1,centered:!0,destroyOnClose:"",width:"30%",title:t.titles},on:{ok:t.handleOk},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[e("div",{staticClass:"newBox"},[e("a-form-model",{ref:"ruleForm",attrs:{rules:t.rules,model:t.formData,"label-col":t.labelCol,"wrapper-col":t.wrapperCol}},[1==t.tabKey?e("a-form-model-item",{attrs:{label:"项目名称",prop:"name"}},[e("a-input",{attrs:{placeholder:"请输入项目名称"},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1):t._e(),2==t.tabKey?e("a-form-model-item",{attrs:{label:"房产类型",prop:"name"}},[e("a-input",{attrs:{placeholder:"请输入房产类型"},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1):t._e(),1==t.tabKey?e("a-form-model-item",{attrs:{label:"位置",prop:"place"}},[e("a-input",{attrs:{placeholder:"请输入位置"},model:{value:t.formData.place,callback:function(e){t.$set(t.formData,"place",e)},expression:"formData.place"}})],1):t._e()],1)],1)])],1)},i=[],r=a("2975"),o={data:function(){return{labelCol:{span:5},wrapperCol:{span:15},rules:{name:[{required:!0,message:"请输入名称",trigger:"blur"}],place:[{required:!0,message:"请输入步骤顺序",trigger:"blur"}]},visible:!1,paymentTypeList:[],formData:{name:"",place:""},tabKey:1,titles:"新建",columns1:[{title:this.L("项目名称"),dataIndex:"name",ellipsis:!0},{title:this.L("位置"),dataIndex:"place",scopedSlots:{customRender:"place"}},{title:this.L("更改时间"),dataIndex:"update_time",ellipsis:!0,scopedSlots:{customRender:"update_time"}},{title:this.L("操作"),width:150,scopedSlots:{customRender:"action"}}],columns2:[{title:this.L("房产类型"),dataIndex:"name",ellipsis:!0},{title:this.L("更改时间"),dataIndex:"update_time",ellipsis:!0,scopedSlots:{customRender:"update_time"}},{title:this.L("操作"),width:150,scopedSlots:{customRender:"action"}}],dataList:[],pagination:{current:1,total:0,pageSize:10,onChange:this.onPageChange},dataListId:"",types:1}},created:function(){this.getDataList()},methods:{tabsChange:function(t){this.getDataList()},getDataList:function(){var t=this,e={page:this.pagination.current,page_size:this.pagination.pageSize,keywords:this.keywords},a=1==this.tabKey?r["a"].getProjectList:r["a"].getPropertyTypeList;this.request(a,e).then((function(e){t.dataList=e.data,t.$set(t.pagination,"total",e.total)}))},onPageChange:function(t,e){this.$set(this.pagination,"current",t),this.getDataList()},addClick:function(){this.titles="新建",this.visible=!0,this.types=1,this.formData={name:"",place:""},2==this.tabKey&&delete this.formData.place},editTicket:function(t){var e=this;this.titles="编辑",this.types=2,this.visible=!0,this.dataListId=t.id;var a=1==this.tabKey?r["a"].showProjectList:r["a"].showPropertyTypeList;this.request(a,{id:t.id}).then((function(t){e.formData.name=t.name,e.formData.place=t.place}))},toSetPage:function(t){var e=Math.ceil((this.pagination.total-(1==t?1:this.dataList.length))/this.pagination.pageSize);this.pagination.current=this.pagination.current>e?e:this.pagination.current,this.pagination.current=this.pagination.current<1?1:this.pagination.current},delPackage:function(t){var e=this;this.$confirm({title:"是否删除该数据?",centered:!0,onOk:function(){var a=1==e.tabKey?r["a"].deleteProjectList:r["a"].deletePropertyTypeList;e.request(a,{id:t.id}).then((function(t){e.toSetPage(1),e.$message.success("删除成功"),e.getDataList()}))},onCancel:function(){}})},handleOk:function(){var t=this;this.$refs.ruleForm.validate((function(e){if(!e)return console.log("error submit!!"),!1;console.log(t.formData),t.addAndEdlt(t.formData)}))},addAndEdlt:function(t){var e=this,a=t,s=null;2==this.types?(s=1==this.tabKey?r["a"].editProjectList:r["a"].editPropertyTypeList,a.id=this.dataListId):s=1==this.tabKey?r["a"].addProjectList:r["a"].addPropertyTypeList,this.request(s,a).then((function(t){e.$message.success("操作成功"),e.visible=!1,e.getDataList()}))}}},l=o,n=(a("98c8"),a("0b56")),c=Object(n["a"])(l,s,i,!1,null,"4bd29b61",null);e["default"]=c.exports}}]);