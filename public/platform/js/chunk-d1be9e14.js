(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d1be9e14"],{"474a":function(e,t,a){"use strict";var i={getShopSeckillIndex:"/common/platform.viewpage.ShopSeckill/getDefaultInfo",getCategoryDetail:"/common/platform.viewpage.ShopSeckill/getCategoryDetail",editCategory:"/common/platform.viewpage.ShopSeckill/editCategory",getCategoryList:"/common/platform.viewpage.ShopSeckill/getCategoryList",delCategory:"/common/platform.viewpage.ShopSeckill/delCategory",getCategoryGoodsList:"/common/platform.viewpage.ShopSeckill/getCategoryGoodsList",editCategoryGoodsSort:"/common/platform.viewpage.ShopSeckill/editCategoryGoodsSort",delCategoryGoods:"/common/platform.viewpage.ShopSeckill/delCategoryGoods",addCategoryGoods:"/common/platform.viewpage.ShopSeckill/addCategoryGoods"};t["a"]=i},5067:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:640,visible:e.visible,confirmLoading:e.confirmLoading},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[a("div",[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{label:"分类名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{initialValue:e.detail.name,rules:[{required:!0,message:"请输入分类名称！"}]}],expression:"[\n              'name',\n              { initialValue: detail.name, rules: [{ required: true, message: '请输入分类名称！' }] },\n            ]"}],attrs:{disabled:1==e.detail.cat_id}})],1),a("a-form-item",{attrs:{label:"覆盖城市",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[1!=e.detail.cat_id?a("a-tree-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["city",{initialValue:e.selectCityList,rules:[{required:!0,message:"请选择覆盖城市！"}]}],expression:"[\n              'city',\n              { initialValue: selectCityList, rules: [{ required: true, message: '请选择覆盖城市！' }] },\n            ]"}],staticStyle:{width:"100%"},attrs:{"tree-data":e.areaList,treeCheckStrictly:!0,"tree-checkable":"","show-checked-strategy":e.SHOW_PARENT,"search-placeholder":"请选择城市",dropdownStyle:{maxHeight:"200px"}},model:{value:e.selectCityList,callback:function(t){e.selectCityList=t},expression:"selectCityList"}}):e._e(),1==e.detail.cat_id?a("label",[e._v("全国")]):e._e()],1),a("a-form-item",{attrs:{label:"排序值",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[1!=e.detail.cat_id?a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:e.detail.sort,rules:[{required:!0,message:"请输入排序值！"}]}],expression:"[\n              'sort',\n              { initialValue: detail.sort, rules: [{ required: true, message: '请输入排序值！' }] },\n            ]"}],staticStyle:{width:"200px"}}):e._e(),1==e.detail.cat_id?a("label",[e._v("默认展示第一排")]):e._e()],1),a("a-form-item",{attrs:{label:"状态",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{initialValue:1==e.detail.status,valuePropName:"checked"}],expression:"['status', { initialValue: detail.status == 1 ? true : false, valuePropName: 'checked' }]"}],attrs:{"checked-children":"开启","un-checked-children":"关闭"}})],1)],1)],1)],1)])},o=[],r=(a("98a7"),a("7bec")),l=(a("99af"),a("474a")),s=a("b59a"),c=a("7a6b"),n=a("7b3f"),d=r["a"].SHOW_PARENT,m={components:{CustomTooltip:c["a"]},data:function(){return{title:"新建分类",visible:!1,labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},confirmLoading:!1,uploadImg:"/v20/public/index.php"+n["a"].uploadImg+"?upload_dir=/group/group_combine",form:this.$form.createForm(this),shareImageFileList:[],headers:{authorization:"authorization-text"},detail:{cat_id:0,name:""},areaList:[],selectCityList:[],SHOW_PARENT:d}},mounted:function(){},methods:{add:function(){this.visible=!0,this.id="0",this.detail={cat_id:0,name:"",sort:0},this.title="新建分类",this.selectCityList=[],this.getSelectProvinceAndCity()},edit:function(e){this.visible=!0,this.cat_id=e,this.selectCityList=[],this.getSelectProvinceAndCity(),this.getEditInfo(),this.cat_id>0?this.title="编辑分类":this.title="新建分类"},getEditInfo:function(){var e=this;this.request(l["a"].getCategoryDetail,{cat_id:this.cat_id}).then((function(t){e.detail=t,e.selectCityList=t.city_list}))},getSelectProvinceAndCity:function(){var e=this;this.request(s["a"].getSelectProvinceAndCity,{cat_id:this.cat_id}).then((function(t){e.areaList=[{title:"全部",value:"all",key:"all"}],e.areaList=e.areaList.concat(t)}))},handleSubmit:function(){var e=this,t=this.form.validateFields;this.confirmLoading=!0,t((function(t,a){if(t)e.confirmLoading=!1;else{if(a.cat_id=e.cat_id,a.city_list=e.selectCityList,0==e.selectCityList.length&&1!=e.detail.cat_id)return e.$message.error("请选择覆盖城市"),void(e.confirmLoading=!1);e.request(l["a"].editCategory,a).then((function(t){e.cat_id>0?e.$message.success("编辑成功"):e.$message.success("添加成功"),setTimeout((function(){e.form=e.$form.createForm(e),e.visible=!1,e.confirmLoading=!1,e.$emit("handleUpdate",a)}),1500)})).catch((function(t){e.confirmLoading=!1}))}}))},handleCancel:function(){this.visible=!1,this.cat_id="0",this.form=this.$form.createForm(this)}}},u=m,p=a("2877"),g=Object(p["a"])(u,i,o,!1,null,null,null);t["default"]=g.exports},"7b3f":function(e,t,a){"use strict";var i={uploadImg:"/common/common.UploadFile/uploadImg"};t["a"]=i},b59a:function(e,t,a){"use strict";var i={getSelectProvince:"/common/platform.area.area/getSelectProvince",getSelectCity:"/common/platform.area.area/getSelectCity",getSelectArea:"/common/platform.area.area/getSelectArea",getSelectPropertyProvince:"/merchant/merchant.system.area/getProvinceList",getSelectPropertyCity:"/merchant/merchant.system.area/getCityList",getSelectPropertyArea:"/merchant/merchant.system.area/getAreaList",getSelectStreet:"/common/platform.area.area/getSelectStreet",getSelectProvinceAndCity:"/common/platform.area.area/getSelectProvinceAndCity"};t["a"]=i}}]);