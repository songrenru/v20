(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4325bfde"],{"5f69":function(o,t,r){"use strict";r.r(t);var e=function(){var o=this,t=o.$createElement,r=o._self._c||t;return r("a-modal",{attrs:{title:o.title,width:840,visible:o.visible,confirmLoading:o.confirmLoading},on:{ok:o.handleSubmit,cancel:o.handleCancel}},[r("a-spin",{attrs:{spinning:o.confirmLoading}},[r("a-form",{attrs:{form:o.form}},[r("a-form-item",{attrs:{label:"名称",labelCol:o.labelCol,wrapperCol:o.wrapperCol}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{initialValue:o.detail.name,rules:[{required:!0,message:"请输入热搜词名称"}]}],expression:"['name', {initialValue:detail.name,rules: [{required: true, message: '请输入热搜词名称'}]}]"}]})],1),r("a-form-item",{attrs:{label:"排序",labelCol:o.labelCol,wrapperCol:o.wrapperCol,help:"值越大越靠前"}},[r("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:o.detail.sort}],expression:"['sort',{initialValue:detail.sort}]"}],attrs:{min:0}})],1)],1)],1)],1)},a=[],i=r("53ca"),p=r("8a11"),g={data:function(){return{title:"新建热搜词",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),detail:{id:0,name:"",sort:""},cat_id:"",id:0}},mounted:function(){},methods:{add:function(o){this.visible=!0,this.cat_id=o,this.id=0,this.detail={id:0,name:"",sort:""}},edit:function(o,t){this.visible=!0,this.id=o,this.cat_id=t,this.getEditInfo(),this.title="编辑热搜词"},handleSubmit:function(){var o=this,t=this.form.validateFields;this.confirmLoading=!0,t((function(t,r){console.log(r),t?o.confirmLoading=!1:(r.cat_id=o.cat_id,r.id=o.id,o.request(p["a"].addGroupSearchHot,r).then((function(t){o.id>0?o.$message.success("编辑成功"):o.$message.success("添加成功"),setTimeout((function(){o.form=o.$form.createForm(o),o.visible=!1,o.confirmLoading=!1,o.$emit("loaddata",o.cat_id)}),1500)})).catch((function(t){o.confirmLoading=!1})))}))},handleCancel:function(){var o=this;this.visible=!1,setTimeout((function(){o.id="0",o.form=o.$form.createForm(o)}),500)},getEditInfo:function(){var o=this;this.request(p["a"].getGroupSearchHotInfo,{id:this.id}).then((function(t){o.showMethod=t.showMethod,o.detail={id:0,name:"",sort:""},"object"==Object(i["a"])(t.detail)&&(o.detail=t.detail),console.log("detail",o.detail)}))}}},u=g,n=r("2877"),d=Object(n["a"])(u,e,a,!1,null,null,null);t["default"]=d.exports},"8a11":function(o,t,r){"use strict";var e={groupCombineList:"/group/platform.groupCombine/groupCombinelist",getGroupCombineDetail:"/group/platform.groupCombine/getGroupCombineDetail",editGroupCombine:"/group/platform.groupCombine/editGroupCombine",getGroupCombineGoodsList:"/group/platform.group/getGroupCombineGoodsList",getGroupCombineOrderList:"/group/platform.groupOrder/getGroupCombineOrderList",exportCombineOrder:"/group/platform.groupOrder/exportCombineOrder",getRobotList:"/group/platform.groupCombine/getRobotList",addRobot:"/group/platform.groupCombine/addRobot",delRobot:"/group/platform.groupCombine/delRobot",editSpreadNum:"/group/platform.groupCombine/editSpreadNum",getGroupGoodsList:"/group/platform.group/getGroupGoodsList",getGroupFirstCategorylist:"/group/platform.groupCategory/getGroupFirstCategorylist",getCategoryTree:"/group/platform.groupCategory/getCategoryTree",getPayMethodList:"/group/platform.groupOrder/getPayMethodList",getOrderDetail:"/group/platform.groupOrder/getOrderDetail",editOrderNote:"/group/platform.groupOrder/editOrderNote",getCfgInfo:"/group/platform.groupRenovation/getInfo",editCfgInfo:"/group/platform.groupRenovation/editCfgInfo",editCfgSort:"/group/platform.groupRenovation/editCfgSort",getRenovationGoodsList:"/group/platform.groupRenovation/getRenovationGoodsList",editCombineCfgInfo:"/group/platform.groupRenovation/editCombineCfgInfo",editCombineCfgSort:"/group/platform.groupRenovation/editCombineCfgSort",getRenovationCombineGoodsList:"/group/platform.groupRenovation/getRenovationCombineGoodsList",getRenovationCustomList:"/group/platform.groupRenovation/getRenovationCustomList",addRenovationCustom:"/group/platform.groupRenovation/addRenovationCustom",getRenovationCustomInfo:"/group/platform.groupRenovation/getRenovationCustomInfo",delRenovationCustom:"/group/platform.groupRenovation/delRenovationCustom",getGroupCategoryList:"/group/platform.group/getGroupCategoryList",getRenovationCustomStoreSortList:"/group/platform.groupRenovation/getRenovationCustomStoreSortList",editRenovationCustomStoreSort:"/group/platform.groupRenovation/editRenovationCustomStoreSort",getRenovationCustomGroupSortList:"/group/platform.groupRenovation/getRenovationCustomGroupSortList",editRenovationCustomGroupSort:"/group/platform.groupRenovation/editRenovationCustomGroupSort",getGroupCategorylist:"/group/platform.groupCategory/getGroupCategorylist",delGroupCategory:"/group/platform.groupCategory/delGroupCategory",addGroupCategory:"/group/platform.groupCategory/addGroupCategory",configGroupCategory:"/common/platform.index/config",uploadPictures:"/common/common.UploadFile/uploadPictures",getGroupCategoryInfo:"/group/platform.groupCategory/getGroupCategoryInfo",groupCategorySaveSort:"/group/platform.groupCategory/saveSort",getGroupCategoryCueList:"/group/platform.groupCategory/getGroupCategoryCueList",getGroupCategoryCatFieldList:"/group/platform.groupCategory/getCatFieldList",getGroupCategoryWriteFieldList:"/group/platform.groupCategory/getWriteFieldList",delGroupCategoryCue:"/group/platform.groupCategory/delGroupCategoryCue",delGroupCategoryWriteField:"/group/platform.groupCategory/delWriteField",groupCategoryCatFieldShow:"/group/platform.groupCategory/catFieldShow",editGroupCategoryCue:"/group/platform.groupCategory/editGroupCategoryCue",groupCategoryAddWriteField:"/group/platform.groupCategory/addWriteField",groupCategoryAddCatField:"/group/platform.groupCategory/addCatField",getAdverList:"/group/platform.groupAdver/getAdverList",getAllArea:"/common/common.area/getAllArea",addGroupAdver:"/group/platform.groupAdver/addGroupAdver",delGroupAdver:"/group/platform.groupAdver/delGroupAdver",getEditAdver:"/group/platform.groupAdver/getEditAdver",updateGroupCategoryBgColor:"/group/platform.groupCategory/updateGroupCategoryBgColor",getGroupSearchHotList:"/group/platform.groupSearchHot/getGroupSearchHotList",addGroupSearchHot:"/group/platform.groupSearchHot/addGroupSearchHot",getGroupSearchHotInfo:"/group/platform.groupSearchHot/getGroupSearchHotInfo",saveSearchHotSort:"/group/platform.groupSearchHot/saveSearchHotSort",delSearchHot:"/group/platform.groupSearchHot/delSearchHot",getUrl:"/group/platform.group/getUrl",changeShow:"/group/platform.groupHomeMenu/changeShow",getShow:"/group/platform.groupHomeMenu/getShow",groupOrderShareList:"/villageGroup/platform.GroupOrder/groupOrderShareList"};t["a"]=e}}]);