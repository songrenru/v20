(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f69153e8"],{1688:function(t,e,o){"use strict";o("a873")},"6c54":function(t,e,o){"use strict";var s,i=o("ade3"),a=(s={getGoodsSortList:"/merchant/merchant.deposit.DepositGoodsSort/getGoodsSortList",getGoodsSortEdit:"/merchant/merchant.deposit.DepositGoodsSort/handleGoodsSort",getGoodsSortInfo:"/merchant/merchant.deposit.DepositGoodsSort/getGoodsSortInfo",delGoodsSort:"/merchant/merchant.deposit.DepositGoodsSort/delGoodsSort",goodsEdit:"/merchant/merchant.deposit.DepositGoods/goodsEdit",getGoodsSortSelect:"/merchant/merchant.deposit.DepositGoodsSort/getGoodsSortSelect",getGoodsList:"/merchant/merchant.deposit.DepositGoods/getGoodsList",getGoodsDetail:"/merchant/merchant.deposit.DepositGoods/getGoodsDetail",delGoods:"/merchant/merchant.deposit.DepositGoods/delGoods",getVerificationList:"/merchant/merchant.deposit.DepositGoodsVerification/getVerificationList",getCashBackList:"/merchant/merchant.Store/getCashBackList",exportCashBackList:"/merchant/merchant.Store/exportCashBackList",goodsTypeList:"/merchant/merchant.CardGoods/goodsTypeList",goodsTypeAdd:"/merchant/merchant.CardGoods/goodsTypeAdd",goodsTypeEdit:"/merchant/merchant.CardGoods/goodsTypeEdit",goodsTypeDel:"/merchant/merchant.CardGoods/goodsTypeDel",goodsList:"/merchant/merchant.CardGoods/goodsList",goodsAdd:"/merchant/merchant.CardGoods/goodsAdd"},Object(i["a"])(s,"goodsEdit","/merchant/merchant.CardGoods/goodsEdit"),Object(i["a"])(s,"goodsDel","/merchant/merchant.CardGoods/goodsDel"),Object(i["a"])(s,"goodsDetail","/merchant/merchant.CardGoods/goodsDetail"),Object(i["a"])(s,"couponList","/merchant/merchant.CardGoods/couponList"),Object(i["a"])(s,"goodsExchangeList","/merchant/merchant.CardGoods/goodsExchangeList"),s);e["a"]=a},a873:function(t,e,o){},bcb5:function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"mt-10 mb-20 pt-20 pl-20 pr-20 pb-20 bg-ff br-10"},[o("a-row",{staticStyle:{margin:"5px 0",display:"flex","align-items":"center"}},[o("div",{staticClass:"flag",staticStyle:{"margin-left":"20px"}},[o("a-input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入分类名称"},model:{value:t.keywords,callback:function(e){t.keywords=e},expression:"keywords"}})],1),o("a-button",{staticStyle:{margin:"10px 10px 10px 10px"},attrs:{type:"primary"},on:{click:t.search}},[t._v("搜索")])],1),o("a-row",{staticClass:"center",attrs:{type:"flex",align:"middle"}},[o("div",{staticClass:"btn_list"},[o("a-button",{staticStyle:{margin:"10px 20px"},attrs:{type:"primary"},on:{click:t.addClick}},[t._v(t._s(t.L("新增")))])],1)]),o("a-table",{staticStyle:{background:"#ffffff"},attrs:{columns:t.columns,rowKey:"id","data-source":t.dataList,pagination:t.pagination},scopedSlots:t._u([{key:"sort",fn:function(e,s){return o("span",{},[o("a-input-number",{attrs:{min:0,id:"inputNumber",value:s.sort},on:{blur:function(e){return t.setListSort(e,s)}}})],1)}},{key:"operation",fn:function(e,s){return o("span",{},[o("a",{staticClass:"inline-block",on:{click:function(e){return t.editList(s)}}},[t._v(t._s(t.L("编辑")))]),o("a",{staticClass:"inline-block",staticStyle:{color:"red","margin-left":"10px"},on:{click:function(e){return t.delList(s)}}},[t._v(t._s(t.L("删除")))])])}}])}),o("a-modal",{attrs:{centered:!0,maskClosable:!1,destroyOnClose:"",width:"35%",title:t.titles},on:{ok:t.addOk},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[o("div",{staticClass:"newBox"},[o("a-form-model",{ref:"ruleForm",attrs:{model:t.form,rules:t.rules,"label-col":t.labelCol,"wrapper-col":t.wrapperCol}},[o("a-form-model-item",{attrs:{label:"分类名称",prop:"name"}},[o("a-input",{attrs:{placeholder:"请输入分类名称"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),o("a-form-model-item",{attrs:{label:"排序"}},[o("a-input-number",{attrs:{min:0,id:"inputNumber"},model:{value:t.form.sort,callback:function(e){t.$set(t.form,"sort",e)},expression:"form.sort"}})],1)],1)],1)])],1)},i=[],a=o("5530"),n=(o("4e82"),o("b0c0"),o("6c54")),r={data:function(){return{labelCol:{span:6},wrapperCol:{span:14},rules:{name:[{required:!0,message:"请输入分类名称",trigger:"blur"}]},visible:!1,titles:"新建",columns:[{title:this.L("分类名称"),dataIndex:"name",ellipsis:!0,width:300},{title:this.L("排序"),dataIndex:"sort",scopedSlots:{customRender:"sort"}},{title:this.L("添加时间"),dataIndex:"create_time",ellipsis:!0,scopedSlots:{customRender:"create_time"}},{title:this.L("操作"),width:150,scopedSlots:{customRender:"operation"}}],dataList:[],dataAddList:[],pagination:{current:1,total:0,pageSize:10,onChange:this.onPageChange,onShowSizeChange:this.onPageSizeChange},lsitType:"add",form:{name:"",sort:0},keywords:"",listId:""}},created:function(){this.getDataList()},beforeRouteLeave:function(t,e,o){this.$destroy(),o()},methods:{search:function(){this.pagination.current=1,this.getDataList()},getDataList:function(){var t=this,e={page:this.pagination.current,page_size:this.pagination.pageSize,key:this.keywords};this.request(n["a"].goodsTypeList,e).then((function(e){t.dataList=e.data,t.$set(t.pagination,"total",e.total)}))},onPageChange:function(t,e){this.$set(this.pagination,"current",t),this.getDataList()},onPageSizeChange:function(t,e){this.$set(this.pagination,"current",1),this.$set(this.pagination,"pageSize",e),this.getDataList()},toSetPage:function(t){var e=Math.ceil((this.pagination.total-(1==t?1:this.dataList.length))/this.pagination.pageSize);this.pagination.current=this.pagination.current>e?e:this.pagination.current,this.pagination.current=this.pagination.current<1?1:this.pagination.current},setListSort:function(t,e){var o=this;if(t.target._value!=e.sort){var s={id:e.id,name:e.name,sort:t.target._value};this.request(n["a"].goodsTypeEdit,s).then((function(t){o.$message.success("修改成功"),o.getDataList()}))}},addOk:function(){var t=this;this.$refs.ruleForm.validate((function(e){if(!e)return console.log("error submit!!"),!1;if("add"==t.lsitType)console.log(e),t.request(n["a"].goodsTypeAdd,t.form).then((function(e){t.$message.success("添加成功"),t.visible=!1,t.getDataList()}));else{var o=Object(a["a"])({id:t.listId},t.form);t.request(n["a"].goodsTypeEdit,o).then((function(e){t.$message.success("编辑成功"),t.visible=!1,t.getDataList()}))}}))},addClick:function(){this.titles="新增",this.lsitType="add",this.visible=!0,this.listId="",this.form.name="",this.form.sort=0},editList:function(t){this.titles="编辑",this.lsitType="edit",this.visible=!0,this.listId=t.id,this.form.name=t.name,this.form.sort=t.sort},delList:function(t){var e=this;this.$confirm({title:"是否删除该条数据?",centered:!0,onOk:function(){e.request(n["a"].goodsTypeDel,{id:[t.id]}).then((function(t){e.toSetPage(1),e.$message.success("删除成功"),e.getDataList()}))}})}}},d=r,c=(o("1688"),o("0c7c")),l=Object(c["a"])(d,s,i,!1,null,"60169a58",null);e["default"]=l.exports}}]);