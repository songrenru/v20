(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02aedb7e"],{"4d17":function(e,t,a){"use strict";a.r(t);a("aa48"),a("3446"),a("54f8");var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"mt-10 mb-20 pt-20 pl-20 pr-20 pb-20 bg-ff br-10"},[t("a-row",{staticClass:"mb-20",attrs:{type:"flex"}},[t("a-button",{attrs:{type:"primary"},on:{click:e.addGoods}},[e._v(e._s(e.L("添加推荐商品组")))]),t("a-popconfirm",{attrs:{title:"是否确定批量删除?","ok-text":"是","cancel-text":"否"},on:{confirm:function(t){return e.deleltItem("batch")}}},[t("a-button",{staticClass:"ml-20",attrs:{type:"danger"}},[e._v(e._s(e.L("批量删除")))])],1)],1),t("a-table",{attrs:{columns:e.columns,rowKey:"id","data-source":e.dataList,pagination:e.pagination,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onParkingChange}},scopedSlots:e._u([{key:"status",fn:function(a,n){return t("span",{},[t("a-switch",{attrs:{"checked-children":"开","un-checked-children":"关",checked:0!=n.status},on:{change:function(t){return e.onStatusChange(t,n)}}})],1)}},{key:"goodsManage",fn:function(a,n){return t("span",{},[t("a-button",{on:{click:function(t){return e.showRecommendGoods(n)}}},[e._v(e._s(e.L("管理")))])],1)}},{key:"scale",fn:function(a,n){return t("span",{},[t("a-input-number",{attrs:{min:0,max:100,formatter:function(e){return"".concat(e,"%")},parser:function(e){return e.replace("%","")}},on:{blur:function(t){return e.scaleChange(t,n)}},model:{value:n.scale,callback:function(t){e.$set(n,"scale",t)},expression:"record.scale"}})],1)}},{key:"action",fn:function(a,n){return t("span",{},[t("a",{staticClass:"inline-block",staticStyle:{"margin-right":"10px"},on:{click:function(t){return e.editItem(n)}}},[e._v(e._s(e.L("编辑")))]),t("a-popconfirm",{attrs:{title:"是否确定删除吗?","ok-text":"是","cancel-text":"否"},on:{confirm:function(t){return e.deleltItem("single",n)}}},[t("a",{staticClass:"inline-block",staticStyle:{color:"red","margin-right":"10px"}},[e._v(e._s(e.L("删除")))])])],1)}}])}),t("a-modal",{attrs:{title:e.titles,destroyOnClose:"",width:"50%",centered:!0},on:{ok:e.handleOk},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[t("a-form-model",{ref:"ruleForm",attrs:{model:e.form,rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[t("a-form-model-item",{attrs:{label:"推荐组标题",prop:"name"}},[t("a-row",[t("a-input",{staticStyle:{width:"80%","margin-right":"10px"},attrs:{placeholder:"请输入推荐组标题"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),t("a-popover",{attrs:{placement:"rightTop"}},[t("template",{slot:"content"},[t("img",{attrs:{src:a("80e3"),alt:""}})]),t("a-icon",{attrs:{type:"question-circle"}})],2)],1)],1),t("a-form-model-item",{attrs:{label:"管理分类",prop:"cat_id_ary"}},[t("a-tree",{attrs:{checkable:"","tree-data":e.categoryList,"expanded-keys":e.expandedKeys,"auto-expand-parent":e.autoExpandParent,replaceFields:{children:"children",title:"cat_name",key:"key"}},on:{expand:e.onExpand,select:e.onSelect,check:e.onCheck},model:{value:e.checkedKeys,callback:function(t){e.checkedKeys=t},expression:"checkedKeys"}})],1),t("a-form-model-item",{attrs:{label:"推荐占比"}},[t("a-input-number",{attrs:{min:0,max:100,formatter:function(e){return"".concat(e,"%")},parser:function(e){return e.replace("%","")}},model:{value:e.form.scale,callback:function(t){e.$set(e.form,"scale",t)},expression:"form.scale"}})],1),t("a-form-model-item",{attrs:{label:"状态"}},[t("a-switch",{attrs:{"checked-children":"开","un-checked-children":"关",defaultChecked:""},on:{change:e.onModelStatusChange}})],1)],1)],1),t("a-modal",{attrs:{title:"管理推荐商品",destroyOnClose:"",width:"70%",centered:!0,footer:null},model:{value:e.recommendGoodsVisible,callback:function(t){e.recommendGoodsVisible=t},expression:"recommendGoodsVisible"}},[t("recommendGoods",{ref:"recommendGoodsRef"})],1)],1)},s=[],i=a("bcc3"),o=a("8ee2"),c=(a("c5cb"),a("08c7"),a("f597"),a("cd5d"),a("3d40")),r=a("2db2"),d={data:function(){return{titles:"新建推荐组",visible:!1,recommendGoodsVisible:!1,columns:[{title:this.L("编号"),dataIndex:"id"},{title:this.L("活动名称"),dataIndex:"name"},{title:this.L("更新时间"),dataIndex:"update_time"},{title:this.L("推荐商品管理"),dataIndex:"goodsManage",scopedSlots:{customRender:"goodsManage"}},{title:this.L("推荐比例"),dataIndex:"scale",scopedSlots:{customRender:"scale"}},{title:this.L("状态"),dataIndex:"status",scopedSlots:{customRender:"status"}},{title:this.L("操作"),scopedSlots:{customRender:"action"}}],dataList:[],itemDetail:null,selectedRowKeys:[],queryParams:{page:0,pageSize:0},pagination:{current:1,total:0,pageSize:10,onChange:this.onPageChange},labelCol:{span:4},wrapperCol:{span:14},rules:{name:[{required:!0,message:"请输入推荐组标题",trigger:"blur"}],cat_id_ary:[{required:!0,message:"请选择分类",trigger:"blur"}]},form:{name:"",scale:"0%",status:1,cat_id_ary:[]},expandedKeys:[],autoExpandParent:!0,checkedKeys:[],selectedKeys:[],categoryList:[],modelType:"add"}},beforeRouteLeave:function(e,t,a){this.$destroy(),a()},components:{recommendGoods:r["default"]},created:function(){this.getDataList(),this.getCategory()},methods:Object(i["a"])({getDataList:function(){var e=this;this.queryParams.page=this.pagination.current,this.queryParams.pageSize=this.pagination.pageSize,this.request(c["a"].getRecommendList,this.queryParams).then((function(t){e.dataList=t.data,e.$set(e.pagination,"total",t.total)}))},getCategory:function(){var e=this;this.request(c["a"].getCategory,this.queryParams).then((function(t){e.categoryList=t}))},onStatusChange:function(e,t){this.itemDetail=t,this.editRecommend(e,1)},scaleChange:function(e,t){this.itemDetail=t,this.editRecommend(e.target._value,2)},onModelStatusChange:function(e){this.form.status=e?1:0},editRecommend:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n={};if(0==a)n=Object(o["a"])({id:this.itemDetail.id,update_type:a},e);else if(1==a)n={id:this.itemDetail.id,status:e?1:0,update_type:a};else if(2==a){var s=parseInt(e.replace("%",""));n={id:this.itemDetail.id,update_type:a,scale:s}}this.request(c["a"].editRecommend,n).then((function(e){t.$message.success("操作成功"),0==a&&(t.visible=!1),t.getDataList()}))},addGoods:function(){this.visible=!0,this.modelType="add",this.titles="新建推荐组",this.form={name:"",scale:"0%",status:1,cat_id_ary:[]},this.expandedKeys=[],this.checkedKeys=[]},editItem:function(e){var t=this;this.modelType="edit",this.titles="编辑推荐组",this.itemDetail=e,this.request(c["a"].getRecommendDetail,{id:e.id}).then((function(e){if(t.form=e,t.checkedKeys=e.cat_id_ary,t.visible=!0,e.cat_fid_ary)t.expandedKeys=e.cat_fid_ary;else if(e.cat_id_ary){var a="",n="";t.expandedKeys=[],e.cat_id_ary.forEach((function(e){-1!=e.indexOf("_")&&(a=e.split("_")[0],-1==t.expandedKeys.indexOf(a)&&(t.expandedKeys.push(parseInt(a)),e.split("_").length>=2&&(n=e.split("_")[0]+"_"+e.split("_")[1],t.expandedKeys.push(parseInt(n)))))}))}}))},deleltItem:function(e,t){var a=this,n={};"single"==e&&(n={ids:t.id}),0!=this.selectedRowKeys.length||"batch"!=e?("batch"==e&&(n={ids:this.selectedRowKeys.join(",")}),this.request(c["a"].delRecommend,n).then((function(e){setTimeout((function(){a.$message.success("删除成功"),a.getDataList()}),300)}))):this.$message.warning("请至少选中一项再进行删除操作")},handleOk:function(){var e=this;this.checkedKeys=this.checkedKeys.filter((function(e){return"string"===typeof e})),this.form.cat_id_ary=this.checkedKeys,this.$refs.ruleForm.validate((function(t){if(!t)return!1;"add"==e.modelType?e.request(c["a"].addRecommend,e.form).then((function(t){e.$message.success("添加成功"),e.visible=!1,e.getDataList()})):e.editRecommend(e.form,0)}))},showRecommendGoods:function(e){var t=this;this.itemDetail=e,this.recommendGoodsVisible=!0,this.$nextTick((function(){t.$refs.recommendGoodsRef.getDataList(t.itemDetail.id)}))},onParkingChange:function(e){this.selectedRowKeys=e},onPageChange:function(e,t){this.$set(this.pagination,"current",e),this.getDataList()},onExpand:function(e){this.expandedKeys=e,this.autoExpandParent=!1},onCheck:function(e){this.checkedKeys=e},onSelect:function(e,t){this.selectedKeys=e}},"onCheck",(function(e,t){}))},l=d,u=(a("cf76"),a("0b56")),m=Object(u["a"])(l,n,s,!1,null,"8bdfa978",null);t["default"]=m.exports},"80e3":function(e,t,a){e.exports=a.p+"img/shop_new_tuijian.3a7dd05f.png"},"9a8b":function(e,t,a){},cf76:function(e,t,a){"use strict";a("9a8b")}}]);