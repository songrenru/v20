(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b0dd49f"],{"442c":function(e,t,o){},7147:function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"mt-10 mb-20 mh-full"},[o("a-form-model",e._b({ref:"form"},"a-form-model",{labelCol:{span:2},wrapperCol:{span:10}},!1),[o("a-card",{attrs:{bordered:!1}},[o("a-form-model-item",{attrs:{label:"是否展示"}},[o("a-switch",{attrs:{"checked-children":"展示","un-checked-children":"不展示",checked:1==e.recommend.is_show},on:{change:function(t){return e.setStatus(e.recommend.id,t)}}})],1),o("a-form-model-item",{attrs:{label:"主标题"}},[o("a-input",{on:{blur:function(t){return e.updateStatus(e.recommend.id)}},model:{value:e.recommend.title,callback:function(t){e.$set(e.recommend,"title",t)},expression:"recommend.title"}})],1),o("a-form-model-item",{attrs:{label:"排序"}},[o("a-input",{on:{blur:function(t){return e.updateStatus(e.recommend.id)}},model:{value:e.recommend.sort,callback:function(t){e.$set(e.recommend,"sort",t)},expression:"recommend.sort"}})],1)],1),o("a-card",{staticStyle:{"margin-top":"10px"},attrs:{title:"体育信息",bordered:!1}},[o("a-form-model-item",{attrs:{label:"体育","wrapper-col":{span:23},labelCol:{span:1}}},[o("a-row",[o("a-col",{staticClass:"text-left",attrs:{span:12}},[o("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.addProduct("sport")}}},[e._v(" 添加体育 ")])],1),o("a-col",{staticClass:"text-right",attrs:{span:12}},[o("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.delAll()}}},[e._v(" 删除 ")])],1)],1)],1),o("a-table",{attrs:{columns:e.columns,"data-source":e.data,"row-selection":e.rowSelection,rowKey:"id"},scopedSlots:e._u([{key:"sort",fn:function(t,s){return o("span",{},[o("a-input",{staticStyle:{width:"80px"},on:{blur:function(t){return e.saveSort(s.id,s.sort)}},model:{value:s.sort,callback:function(t){e.$set(s,"sort",t)},expression:"record.sort"}})],1)}},{key:"action",fn:function(t,s){return o("span",{},[o("a",{staticClass:"ml-10 inline-block",on:{click:function(t){return e.delAct(s.id)}}},[e._v("删除")])])}}])})],1)],1),o("select-rec-goods",{ref:"selectGoods",on:{getTable:e.getTable}})],1)},n=[],c=(o("4e82"),o("f9e9")),r=o("14aa"),a=[{title:"名称",dataIndex:"goods_name",scopedSlots:{customRender:"goods_name"}},{title:"商家名称",dataIndex:"name",scopedSlots:{customRender:"name"}},{title:"价格",dataIndex:"goods_price",slots:{customRender:"goods_price"}},{title:"排序",dataIndex:"sort",scopedSlots:{customRender:"sort"},align:"center"},{title:"操作",dataIndex:"goods_id",key:"goods_id",scopedSlots:{customRender:"action"},align:"center"}],i={name:"sportGoods",components:{SelectRecGoods:r["default"]},data:function(){return{columns:a,data:[],selectedRowKeys:[],recommend:{id:0,is_show:0,title:"",sort:0,goods_type:"sport"}}},computed:{rowSelection:function(){return{selectedRowKeys:this.selectedRowKeys,onChange:this.handleRowSelectChange}}},methods:{handleRowSelectChange:function(e){console.log(e),this.selectedRowKeys=e},delAll:function(){var e=this;this.selectedRowKeys.length>0?this.$confirm({title:"确定删除吗？",centered:!0,onOk:function(){e.request(c["a"].delRecGoods,{id:e.selectedRowKeys}).then((function(t){e.selectedRowKeys=[],e.$message.success(e.L("操作成功！")),e.getOpen()}))},onCancel:function(){}}):this.$message.error(this.L("请勾选列表！"))},getOpen:function(){var e=this;this.request(c["a"].getRecGoodsList,{goods_type:"sport"}).then((function(t){e.recommend=t.recommend,e.$set(e,"recommend",t.recommend),e.data=t.recommend_goods}))},getTable:function(){var e=this;this.request(c["a"].getRecGoodsList,{goods_type:"sport"}).then((function(t){e.$set(e,"recommend",t.recommend),e.data=t.recommend_goods}))},addProduct:function(e){this.$refs.selectGoods.openDialog(e,this.recommend.id)},delAct:function(e){var t=this;this.$confirm({title:"确定删除吗？",centered:!0,onOk:function(){t.request(c["a"].delRecGoods,{id:e}).then((function(e){t.selectedRowKeys=[],t.$message.success(t.L("操作成功！")),t.getOpen()}))},onCancel:function(){}})},setStatus:function(e,t){t?(this.recommend.is_show=1,this.$set(this.recommend,"is_show",1)):(this.recommend.is_show=0,this.$set(this.recommend,"is_show",0)),this.request(c["a"].updateRec,{id:e,is_show:this.recommend.is_show,title:this.recommend.title,sort:this.recommend.sort,goods_type:this.recommend.goods_type}).then((function(e){}))},saveSort:function(e,t){var o=this;this.request(c["a"].updateRecGoods,{id:e,sort:t}).then((function(e){o.getOpen()}))},updateStatus:function(e){this.request(c["a"].updateRec,{id:e,is_show:this.recommend.is_show,title:this.recommend.title,sort:this.recommend.sort,goods_type:this.recommend.goods_type}).then((function(e){}))}}},d=i,l=(o("d267"),o("2877")),m=Object(l["a"])(d,s,n,!1,null,"37cc7eba",null);t["default"]=m.exports},"8cdb2":function(e,t,o){},"95e5":function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"mt-10 mb-20 mh-full"},[o("a-form-model",e._b({ref:"form"},"a-form-model",{labelCol:{span:2},wrapperCol:{span:10}},!1),[o("a-card",{attrs:{bordered:!1}},[o("a-form-model-item",{attrs:{label:"是否展示"}},[o("a-switch",{attrs:{"checked-children":"展示","un-checked-children":"不展示",checked:1==e.recommend.is_show},on:{change:function(t){return e.setStatus(e.recommend.id,t)}}})],1),o("a-form-model-item",{attrs:{label:"主标题"}},[o("a-input",{on:{blur:function(t){return e.updateStatus(e.recommend.id)}},model:{value:e.recommend.title,callback:function(t){e.$set(e.recommend,"title",t)},expression:"recommend.title"}})],1),o("a-form-model-item",{attrs:{label:"排序"}},[o("a-input",{on:{blur:function(t){return e.updateStatus(e.recommend.id)}},model:{value:e.recommend.sort,callback:function(t){e.$set(e.recommend,"sort",t)},expression:"recommend.sort"}})],1)],1),o("a-card",{staticStyle:{"margin-top":"10px"},attrs:{title:"文旅信息",bordered:!1}},[o("a-form-model-item",{attrs:{label:"文旅","wrapper-col":{span:23},labelCol:{span:1}}},[o("a-row",[o("a-col",{staticClass:"text-left",attrs:{span:12}},[o("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.addProduct("ticket")}}},[e._v(" 添加文旅 ")])],1),o("a-col",{staticClass:"text-right",attrs:{span:12}},[o("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.delAll()}}},[e._v(" 删除 ")])],1)],1)],1),o("a-table",{attrs:{columns:e.columns,"data-source":e.data,"row-selection":e.rowSelection,rowKey:"id"},scopedSlots:e._u([{key:"sort",fn:function(t,s){return o("span",{},[o("a-input",{staticStyle:{width:"80px"},on:{blur:function(t){return e.saveSort(s.id,s.sort)}},model:{value:s.sort,callback:function(t){e.$set(s,"sort",t)},expression:"record.sort"}})],1)}},{key:"action",fn:function(t,s){return o("span",{},[o("a",{staticClass:"ml-10 inline-block",on:{click:function(t){return e.delAct(s.id)}}},[e._v("删除")])])}}])})],1)],1),o("select-rec-goods",{ref:"selectGoods",on:{getTable:e.getTable}})],1)},n=[],c=(o("4e82"),o("f9e9")),r=o("14aa"),a=o("290c"),i=o("da05"),d=[{title:"景区名称",dataIndex:"goods_name",scopedSlots:{customRender:"goods_name"},width:200,align:"center"},{title:"商家名称",dataIndex:"name",scopedSlots:{customRender:"name"}},{title:"票价",dataIndex:"goods_price",slots:{customRender:"goods_price"}},{title:"排序",dataIndex:"sort",scopedSlots:{customRender:"sort"},align:"center"},{title:"操作",dataIndex:"goods_id",key:"goods_id",scopedSlots:{customRender:"action"},align:"center"}],l={name:"ticketGoods",components:{ACol:i["b"],ARow:a["a"],SelectRecGoods:r["default"]},data:function(){return{columns:d,data:[],selectedRowKeys:[],recommend:{id:0,is_show:0,title:"",sort:0,goods_type:"ticket"}}},computed:{rowSelection:function(){return{selectedRowKeys:this.selectedRowKeys,onChange:this.handleRowSelectChange}}},methods:{handleRowSelectChange:function(e){console.log(e),this.selectedRowKeys=e},delAll:function(){var e=this;this.selectedRowKeys.length>0?this.$confirm({title:"确定删除吗？",centered:!0,onOk:function(){e.request(c["a"].delRecGoods,{id:e.selectedRowKeys}).then((function(t){e.selectedRowKeys=[],e.$message.success(e.L("操作成功！")),e.getOpen()}))},onCancel:function(){}}):this.$message.error(this.L("请勾选列表！"))},getOpen:function(){var e=this;this.request(c["a"].getRecGoodsList,{goods_type:"ticket"}).then((function(t){e.recommend=t.recommend,e.$set(e,"recommend",t.recommend),e.data=t.recommend_goods}))},getTable:function(){var e=this;this.request(c["a"].getRecGoodsList,{goods_type:"ticket"}).then((function(t){e.$set(e,"recommend",t.recommend),e.data=t.recommend_goods}))},addProduct:function(e){this.$refs.selectGoods.openDialog(e,this.recommend.id)},delAct:function(e){var t=this;this.$confirm({title:"确定删除吗？",centered:!0,onOk:function(){t.request(c["a"].delRecGoods,{id:e}).then((function(e){t.selectedRowKeys=[],t.$message.success(t.L("操作成功！")),t.getOpen()}))},onCancel:function(){}})},setStatus:function(e,t){t?(this.recommend.is_show=1,this.$set(this.recommend,"is_show",1)):(this.recommend.is_show=0,this.$set(this.recommend,"is_show",0)),this.request(c["a"].updateRec,{id:e,is_show:this.recommend.is_show,title:this.recommend.title,sort:this.recommend.sort,goods_type:this.recommend.goods_type}).then((function(e){}))},saveSort:function(e,t){var o=this;this.request(c["a"].updateRecGoods,{id:e,sort:t}).then((function(e){o.getOpen()}))},updateStatus:function(e){this.request(c["a"].updateRec,{id:e,is_show:this.recommend.is_show,title:this.recommend.title,sort:this.recommend.sort,goods_type:this.recommend.goods_type}).then((function(e){}))}}},m=l,u=(o("b24c"),o("2877")),h=Object(u["a"])(m,s,n,!1,null,"363d3e46",null);t["default"]=h.exports},a066:function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("a-tabs",{attrs:{type:"card"},on:{change:e.callback}},[o("a-tab-pane",{key:"1",attrs:{tab:"文旅"}},[o("ticket-goods",{ref:"ticketGoods"})],1),o("a-tab-pane",{key:"2",attrs:{tab:"体育"}},[o("sport-goods",{ref:"sportGoods"})],1),o("a-tab-pane",{key:"3",attrs:{tab:"快店"}},[o("shop-goods",{ref:"shopGoods"})],1),o("a-tab-pane",{key:"4",attrs:{tab:"商城"}},[o("mall-goods",{ref:"mallGoods"})],1)],1)},n=[],c=(o("b0c0"),o("95e5")),r=o("7147"),a=o("ca4c"),i=o("ddb9"),d={name:"PlatformRecommendHot",components:{MallGoods:i["default"],ShopGoods:a["default"],SportGoods:r["default"],TicketGoods:c["default"]},data:function(){return{}},mounted:function(){this.callback(1)},created:function(){this.callback(1)},methods:{callback:function(e){var t=this;1*e==1?this.$nextTick((function(){t.$refs.ticketGoods.getOpen()})):1*e==2?this.$nextTick((function(){t.$refs.sportGoods.getOpen()})):1*e==3?this.$nextTick((function(){t.$refs.shopGoods.getOpen()})):this.$nextTick((function(){t.$refs.mallGoods.getOpen()}))},getData:function(e){var t=this;this.request(configPlatformApi.configData,{gid:e},"get").then((function(e){t.groupList=e.group_list,t.configTab=e.config_list}))},uploadChange:function(e){var t=e.name,o="";if(e.value.length){var s=e.value[0];o=s.response&&s.response.data}this.form.getFieldDecorator(t,{initialValue:o})}}};window.dialogConfirm=function(){console.log("Received values of form:1313213213 ")},window.dialogCancel=function(){};var l=d,m=o("2877"),u=Object(m["a"])(l,s,n,!1,null,"3feee883",null);t["default"]=u.exports},a9ae:function(e,t,o){"use strict";o("c159")},b24c:function(e,t,o){"use strict";o("442c")},c159:function(e,t,o){},ca4c:function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"mt-10 mb-20 mh-full"},[o("a-form-model",e._b({ref:"form"},"a-form-model",{labelCol:{span:2},wrapperCol:{span:10}},!1),[o("a-card",{attrs:{bordered:!1}},[o("a-form-model-item",{attrs:{label:"是否展示"}},[o("a-switch",{attrs:{"checked-children":"展示","un-checked-children":"不展示",checked:1==e.recommend.is_show},on:{change:function(t){return e.setStatus(e.recommend.id,t)}}})],1),o("a-form-model-item",{attrs:{label:"主标题"}},[o("a-input",{on:{blur:function(t){return e.updateStatus(e.recommend.id)}},model:{value:e.recommend.title,callback:function(t){e.$set(e.recommend,"title",t)},expression:"recommend.title"}})],1),o("a-form-model-item",{attrs:{label:"排序"}},[o("a-input",{on:{blur:function(t){return e.updateStatus(e.recommend.id)}},model:{value:e.recommend.sort,callback:function(t){e.$set(e.recommend,"sort",t)},expression:"recommend.sort"}})],1)],1),o("a-card",{staticStyle:{"margin-top":"10px"},attrs:{title:"快店商品信息",bordered:!1}},[o("a-form-model-item",{attrs:{label:"商品","wrapper-col":{span:23},labelCol:{span:1}}},[o("a-row",[o("a-col",{staticClass:"text-left",attrs:{span:12}},[o("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.addProduct("shop")}}},[e._v(" 添加商品 ")])],1),o("a-col",{staticClass:"text-right",attrs:{span:12}},[o("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.delAll()}}},[e._v(" 删除 ")])],1)],1)],1),o("a-table",{attrs:{columns:e.columns,"data-source":e.data,"row-selection":e.rowSelection,rowKey:"id"},scopedSlots:e._u([{key:"sort",fn:function(t,s){return o("span",{},[o("a-input",{staticStyle:{width:"80px"},on:{blur:function(t){return e.saveSort(s.id,s.sort)}},model:{value:s.sort,callback:function(t){e.$set(s,"sort",t)},expression:"record.sort"}})],1)}},{key:"action",fn:function(t,s){return o("span",{},[o("a",{staticClass:"ml-10 inline-block",on:{click:function(t){return e.delAct(s.id)}}},[e._v("删除")])])}}])})],1)],1),o("select-rec-goods",{ref:"selectGoods",on:{getTable:e.getTable}})],1)},n=[],c=(o("4e82"),o("f9e9")),r=o("14aa"),a=[{title:"名称",dataIndex:"goods_name",scopedSlots:{customRender:"goods_name"}},{title:"商家名称",dataIndex:"name",scopedSlots:{customRender:"name"}},{title:"价格",dataIndex:"goods_price",slots:{customRender:"goods_price"}},{title:"排序",dataIndex:"sort",scopedSlots:{customRender:"sort"},align:"center"},{title:"操作",dataIndex:"goods_id",key:"goods_id",scopedSlots:{customRender:"action"},align:"center"}],i={name:"ShopGoods",components:{SelectRecGoods:r["default"]},data:function(){return{columns:a,data:[],selectedRowKeys:[],recommend:{id:0,is_show:0,title:"",sort:0,goods_type:"shop"}}},computed:{rowSelection:function(){return{selectedRowKeys:this.selectedRowKeys,onChange:this.handleRowSelectChange}}},methods:{handleRowSelectChange:function(e){console.log(e),this.selectedRowKeys=e},delAll:function(){var e=this;this.selectedRowKeys.length>0?this.$confirm({title:"确定删除吗？",centered:!0,onOk:function(){e.request(c["a"].delRecGoods,{id:e.selectedRowKeys}).then((function(t){e.selectedRowKeys=[],e.$message.success(e.L("操作成功！")),e.getOpen()}))},onCancel:function(){}}):this.$message.error(this.L("请勾选列表！"))},getOpen:function(){var e=this;this.request(c["a"].getRecGoodsList,{goods_type:"shop"}).then((function(t){e.recommend=t.recommend,e.$set(e,"recommend",t.recommend),e.data=t.recommend_goods}))},getTable:function(){var e=this;this.request(c["a"].getRecGoodsList,{goods_type:"shop"}).then((function(t){e.$set(e,"recommend",t.recommend),e.data=t.recommend_goods}))},addProduct:function(e){this.$refs.selectGoods.openDialog(e,this.recommend.id)},delAct:function(e){var t=this;this.$confirm({title:"确定删除吗？",centered:!0,onOk:function(){t.request(c["a"].delRecGoods,{id:e}).then((function(e){t.selectedRowKeys=[],t.$message.success(t.L("操作成功！")),t.getOpen()}))},onCancel:function(){}})},setStatus:function(e,t){t?(this.recommend.is_show=1,this.$set(this.recommend,"is_show",1)):(this.recommend.is_show=0,this.$set(this.recommend,"is_show",0)),this.request(c["a"].updateRec,{id:e,is_show:this.recommend.is_show,title:this.recommend.title,sort:this.recommend.sort,goods_type:this.recommend.goods_type}).then((function(e){}))},saveSort:function(e,t){var o=this;this.request(c["a"].updateRecGoods,{id:e,sort:t}).then((function(e){o.getOpen()}))},updateStatus:function(e){this.request(c["a"].updateRec,{id:e,is_show:this.recommend.is_show,title:this.recommend.title,sort:this.recommend.sort,goods_type:this.recommend.goods_type}).then((function(e){}))}}},d=i,l=(o("a9ae"),o("2877")),m=Object(l["a"])(d,s,n,!1,null,"20c2370b",null);t["default"]=m.exports},d267:function(e,t,o){"use strict";o("8cdb2")}}]);