(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33458049"],{"13a0":function(e,t,s){"use strict";s("32e6")},"2db2":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{},[s("a-row",{staticClass:"mb-20",attrs:{type:"flex"}},[s("a-button",{attrs:{type:"primary"},on:{click:e.addGoods}},[e._v(e._s(e.L("添加")))]),s("a-popconfirm",{attrs:{title:"是否确定批量删除?","ok-text":"是","cancel-text":"否"},on:{confirm:function(t){return e.deleltItem("batch")}}},[s("a-button",{staticClass:"ml-20",attrs:{type:"danger"}},[e._v(e._s(e.L("批量删除")))])],1),s("div",{staticClass:"ml-20"},[s("span",[e._v("业务类型：")]),s("a-select",{staticStyle:{width:"130px"},model:{value:e.queryParams.business,callback:function(t){e.$set(e.queryParams,"business",t)},expression:"queryParams.business"}},e._l(e.goodstabList,(function(t){return s("a-select-option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label))])})),1)],1),s("a-input",{staticStyle:{width:"300px"},attrs:{allowClear:"",placeholder:"请输入商品名称/文章标题"},model:{value:e.queryParams.keyword,callback:function(t){e.$set(e.queryParams,"keyword",t)},expression:"queryParams.keyword"}}),s("a-button",{attrs:{type:"primary"},on:{click:e.searchQueryParams}},[e._v(e._s(e.L("搜索")))])],1),s("a-table",{attrs:{columns:e.columns,rowKey:"id","data-source":e.dataList,pagination:e.pagination,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onParkingChange}},scopedSlots:e._u([{key:"goods_name",fn:function(t,a){return s("span",{},[s("div",{staticStyle:{display:"flex","align-items":"center"}},[a.img?s("beautiful-image",{attrs:{src:a.img,width:"60px",height:"60px",visible:"",hover:"",radius:"6px",modalWidth:"56%"}}):e._e(),s("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(a.goods_name))])],1)])}},{key:"status",fn:function(t,a){return s("span",{},[s("a-switch",{attrs:{"checked-children":"开","un-checked-children":"关",checked:0!=a.status},on:{change:function(t){return e.onStatusChange(t,a)}}})],1)}},{key:"goodsManage",fn:function(t,a){return s("span",{},[s("a-button",[e._v(e._s(e.L("管理")))])],1)}},{key:"business_str",fn:function(t,a){return s("span",{},["shop"==a.business?s("a-tag",{attrs:{color:"blue"}},[e._v(" "+e._s(a.business_str)+" ")]):"mall"==a.business?s("a-tag",{attrs:{color:"cyan"}},[e._v(" "+e._s(a.business_str)+" ")]):"group"==a.business?s("a-tag",{attrs:{color:"red"}},[e._v(" "+e._s(a.business_str)+" ")]):"grow_grass"==a.business?s("a-tag",{attrs:{color:"green"}},[e._v(" "+e._s(a.business_str)+" ")]):e._e()],1)}},{key:"sort",fn:function(t,a){return s("span",{},[s("a-input-number",{attrs:{min:0},on:{blur:function(t){return e.sortChange(t,a)}},model:{value:a.sort,callback:function(t){e.$set(a,"sort",t)},expression:"record.sort"}})],1)}},{key:"warn",fn:function(t,a){return s("span",{},[s("span",{staticStyle:{"margin-right":"6px"},style:"color:"+(a.warn?"red":"green")},[e._v(e._s(a.warn?"异常":"正常"))]),a.warn?s("a-popover",{attrs:{placement:"leftTop"}},[s("template",{slot:"content"},[s("p",[e._v(e._s(a.warn))])]),s("a-icon",{attrs:{type:"question-circle"}})],2):e._e()],1)}},{key:"action",fn:function(t,a){return s("span",{},[s("a-popconfirm",{attrs:{title:"是否确定删除吗?","ok-text":"是","cancel-text":"否"},on:{confirm:function(t){return e.deleltItem("single",a)}}},[s("a",{staticClass:"inline-block",staticStyle:{color:"red","margin-right":"10px"}},[e._v(e._s(e.L("删除")))])])],1)}}])}),s("a-modal",{attrs:{title:"推荐商品",destroyOnClose:"",width:"60%",centered:!0},on:{ok:e.handleOk},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[s("a-tabs",{on:{change:e.callback},model:{value:e.goodsQueryParams.business,callback:function(t){e.$set(e.goodsQueryParams,"business",t)},expression:"goodsQueryParams.business"}},e._l(e.tabList,(function(e){return s("a-tab-pane",{key:e.value,attrs:{tab:e.label}})})),1),s("a-row",{staticStyle:{"margin-bottom":"15px"},attrs:{type:"flex"}},[s("a-select",{staticStyle:{width:"130px"},model:{value:e.goodsQueryParams.serch_type,callback:function(t){e.$set(e.goodsQueryParams,"serch_type",t)},expression:"goodsQueryParams.serch_type"}},e._l(e.serchTypeList,(function(t){return s("a-select-option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label))])})),1),s("a-input",{staticStyle:{width:"300px"},attrs:{allowClear:"",placeholder:"请输入"},model:{value:e.goodsQueryParams.keyword,callback:function(t){e.$set(e.goodsQueryParams,"keyword",t)},expression:"goodsQueryParams.keyword"}}),s("a-button",{staticStyle:{margin:"0 20px"},attrs:{type:"primary"},on:{click:e.search}},[e._v(e._s(e.L("搜索")))])],1),s("a-table",{attrs:{columns:e.goodsColumns,rowKey:"goods_id","data-source":e.goodsList,pagination:e.goodsPagination,rowSelection:e.rowSelection},scopedSlots:e._u([{key:"goods_name",fn:function(t,a){return s("span",{},[s("div",{staticStyle:{display:"flex","align-items":"center"}},[a.img?s("beautiful-image",{attrs:{src:a.img,width:"60px",height:"60px",visible:"",hover:"",radius:"6px"}}):e._e(),s("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(a.goods_name))])],1)])}},{key:"is_sku",fn:function(t,a){return s("span",{},[0==a.is_sku?s("span",[e._v(e._s(a.price))]):s("a-popover",{attrs:{placement:"rightTop",title:a.goods_name+" —— 多规格"}},[s("template",{slot:"content"},[s("div",{staticClass:"sku-box"},e._l(a.sku,(function(t){return s("div",{key:t.id,staticClass:"sku-item"},[s("span",[e._v(e._s(t.sku_name))]),s("span",{staticStyle:{"margin-left":"30px"}},[e._v(e._s(t.sku_price))])])})),0)]),s("a",[e._v("多规格")])],2)],1)}}])})],1)],1)},o=[],i=(s("a15b"),s("a600c")),n=s("bc11"),r={data:function(){return{visible:!1,columns:[{title:this.L("商品名称/文字标题"),dataIndex:"goods_name",scopedSlots:{customRender:"goods_name"}},{title:this.L("类别"),dataIndex:"business_str",scopedSlots:{customRender:"business_str"}},{title:this.L("商家名称/文章作者"),dataIndex:"mer_name"},{title:this.L("排序值"),dataIndex:"sort",scopedSlots:{customRender:"sort"}},{title:this.L("状态"),dataIndex:"status",scopedSlots:{customRender:"status"}},{title:this.L("商品状态"),dataIndex:"warn",scopedSlots:{customRender:"warn"}},{title:this.L("操作"),scopedSlots:{customRender:"action"}}],goodsColumns:[{title:this.L("商品名称"),dataIndex:"goods_name",scopedSlots:{customRender:"goods_name"}},{title:this.L("商家名称"),dataIndex:"mer_name"},{title:this.L("店铺名称"),dataIndex:"store_name"},{title:this.L("售价"),dataIndex:"is_sku",scopedSlots:{customRender:"is_sku"}}],dataList:[],goodsList:[],itemDetail:null,selectedRowKeys:[],goodsSelectedRowKeys:[],queryParams:{page:0,pageSize:0,business:"",keyword:"",serch_type:1},goodsQueryParams:{page:0,pageSize:0,keyword:"",business:"shop",serch_type:1},goodsPagination:{current:1,total:0,pageSize:10,onChange:this.onGoodsPageChange},pagination:{current:1,total:0,pageSize:10,onChange:this.onPageChange},modelType:"add",id:"",tabList:[{value:"shop",label:"外卖"},{value:"mall",label:"商城"},{value:"group",label:"团购"},{value:"grow_grass",label:"种草"}],goodstabList:[],serchTypeList:[{value:1,label:"商品名称"},{value:2,label:"商家名称"},{value:5,label:"店铺名称"}]}},beforeRouteLeave:function(e,t,s){this.$destroy(),s()},components:{BeautifulImage:n["a"]},created:function(){this.tabList.length&&(this.goodstabList=JSON.parse(JSON.stringify(this.tabList))),this.goodstabList.unshift({value:"",label:"全部"})},computed:{rowSelection:function(){return{selectedRowKeys:this.goodsSelectedRowKeys,onChange:this.onGoodsChange,getCheckboxProps:function(e){return{props:{disabled:1==e.is_check}}}}}},methods:{getDataList:function(e){var t=this;e&&(this.id=e),this.queryParams.page=this.pagination.current,this.queryParams.id=this.id,this.queryParams.pageSize=this.pagination.pageSize,this.request(i["a"].getRecommendGoodsList,this.queryParams).then((function(e){t.dataList=e.data,t.$set(t.pagination,"total",e.total)}))},getGoodsList:function(){var e=this;this.goodsQueryParams.page=this.goodsPagination.current,this.goodsQueryParams.pageSize=this.goodsPagination.pageSize,this.request(i["a"].getGoodsList,this.goodsQueryParams).then((function(t){e.goodsList=t.data,e.$set(e.goodsPagination,"total",t.total)}))},onStatusChange:function(e,t){this.itemDetail=t,this.editRecommend(e,1)},sortChange:function(e,t){this.itemDetail=t,this.editRecommend(e.target._value,2)},editRecommend:function(e){var t=this,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a={};1==s?a={id:this.itemDetail.id,status:e?1:0,update_type:s}:2==s&&(a={id:this.itemDetail.id,update_type:s,sort:e}),this.request(i["a"].editRecommendGoods,a).then((function(e){t.$message.success("操作成功"),t.getDataList()}))},addGoods:function(){this.modelType="add",this.visible=!0,this.goodsPagination.current=1,this.goodsQueryParams.keyword="",this.goodsSelectedRowKeys=[],this.goodsQueryParams.id=this.id,this.getGoodsList()},editItem:function(e){this.modelType="edit",this.itemDetail=e},deleltItem:function(e,t){var s=this,a={};"single"==e&&(a={ids:t.id}),0!=this.selectedRowKeys.length||"batch"!=e?("batch"==e&&(a={ids:this.selectedRowKeys.join(",")}),this.request(i["a"].delRecommendGoods,a).then((function(e){setTimeout((function(){s.$message.success("删除成功"),s.goodsPagination.current=1,s.pagination.current=1,s.selectedRowKeys=[],s.getDataList()}),300)}))):this.$message.warning("请至少选中一项再进行删除操作")},handleOk:function(){var e=this;if(0!=this.goodsSelectedRowKeys.length){var t={id:this.id,goods_ids:this.goodsSelectedRowKeys.join(","),business:this.goodsQueryParams.business};this.request(i["a"].addRecommendGoods,t).then((function(t){e.goodsSelectedRowKeys=[],e.$message.success("添加成功"),e.visible=!1,e.getDataList()}))}else this.$message.warning("请至少选中一项")},onParkingChange:function(e){this.selectedRowKeys=e},onGoodsChange:function(e){this.goodsSelectedRowKeys=e},onPageChange:function(e,t){this.$set(this.pagination,"current",e),this.getDataList()},onGoodsPageChange:function(e,t){this.$set(this.goodsPagination,"current",e),this.getGoodsList()},callback:function(e){this.goodsSelectedRowKeys=[],"group"==this.goodsQueryParams.business?(this.goodsQueryParams.serch_type=1,this.serchTypeList=[{value:1,label:"商品名称"},{value:2,label:"商家名称"}],this.goodsColumns=[{title:this.L("商品名称"),dataIndex:"goods_name",scopedSlots:{customRender:"goods_name"}},{title:this.L("商家名称"),dataIndex:"mer_name"},{title:this.L("售价"),dataIndex:"is_sku",scopedSlots:{customRender:"is_sku"}}]):"mall"==this.goodsQueryParams.business||"shop"==this.goodsQueryParams.business?(this.serchTypeList=[{value:5,label:"店铺名称"},{value:1,label:"商品名称"},{value:2,label:"商家名称"}],this.goodsColumns=[{title:this.L("商品名称"),dataIndex:"goods_name",scopedSlots:{customRender:"goods_name"}},{title:this.L("商家名称"),dataIndex:"mer_name"},{title:this.L("店铺名称"),dataIndex:"store_name"},{title:this.L("售价"),dataIndex:"is_sku",scopedSlots:{customRender:"is_sku"}}]):(this.goodsQueryParams.serch_type=3,this.serchTypeList=[{value:3,label:"文字标题"},{value:4,label:"文章作者"}],this.goodsColumns=[{title:this.L("文字标题"),dataIndex:"goods_name",scopedSlots:{customRender:"goods_name"}},{title:this.L("文章作者"),dataIndex:"mer_name"}]),this.goodsPagination.current=1,this.getGoodsList()},search:function(){this.getGoodsList()},searchQueryParams:function(){this.getDataList()}}},d=r,l=(s("9809"),s("2877")),c=Object(l["a"])(d,a,o,!1,null,"58ce8b2a",null);t["default"]=c.exports},"32e6":function(e,t,s){},"5ada":function(e,t,s){},9809:function(e,t,s){"use strict";s("5ada")},a600c:function(e,t,s){"use strict";var a={getRecommendList:"shop/platform.Recommend/getRecommendList",editRecommend:"shop/platform.Recommend/editRecommend",delRecommend:"shop/platform.Recommend/delRecommend",getCategory:"shop/platform.Recommend/getCategory",addRecommend:"shop/platform.Recommend/addRecommend",getRecommendDetail:"shop/platform.Recommend/getRecommendDetail",getRecommendGoodsList:"shop/platform.Recommend/getRecommendGoodsList",getGoodsList:"shop/platform.Recommend/getGoodsList",addRecommendGoods:"shop/platform.Recommend/addRecommendGoods",editRecommendGoods:"shop/platform.Recommend/editRecommendGoods",delRecommendGoods:"shop/platform.Recommend/delRecommendGoods"};t["a"]=a},bc11:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content",style:[{width:e.width,height:e.height,borderRadius:e.radius}]},[e.is_Loading?s("div",{staticClass:"status-1",class:[e.shape?"img-border-radius":""],style:[{width:"100%",height:"100%"}]},[e.is_error?s("a-icon",{attrs:{type:"exclamation-circle"}}):e.is_Loading?s("a-icon",{attrs:{type:"loading"}}):e._e(),e.is_error?s("div",{staticClass:"trip"},[e._v("加载失败")]):e._e()],1):e._e(),e.is_error?e._e():s("img",{staticClass:"imgs",class:[e.shape?"img-border-radius":"",e.mode,e.hover?"is-hover":""],style:[{width:"100%",height:"100%"}],attrs:{src:e.src,alt:"暂无图片",title:e.visible?"点击查看图片":""},on:{click:e.viewImg,error:e.imgOnRrror,load:e.imgOnLoad}}),s("a-modal",{attrs:{title:"查看图片",footer:null,width:e.modalWidth,centered:""},model:{value:e.visibleImg,callback:function(t){e.visibleImg=t},expression:"visibleImg"}},[s("img",{style:[{width:"100%",height:"100%"}],attrs:{src:e.src,alt:"暂无图片"},on:{error:e.imgOnRrror}})])],1)},o=[],i={name:"BeautifulImage",props:{src:{type:String,default:function(){return""}},width:{type:String,default:function(){return"100%"}},height:{type:String,default:function(){return"100%"}},shape:{type:Boolean,default:function(){return!1}},radius:{type:String,default:function(){return"0px"}},mode:{type:String,default:function(){return""}},visible:{type:Boolean,default:function(){return!1}},hover:{type:Boolean,default:function(){return!1}},modalWidth:{type:String,default:function(){return"50%"}}},data:function(){return{visibleImg:!1,defaultImg:"",is_error:!1,is_Loading:!0}},created:function(){},methods:{viewImg:function(){this.visible&&(this.visibleImg=!0)},imgOnLoad:function(e){this.is_error=!1,this.is_Loading=!1},imgOnRrror:function(e){this.is_error=!0}}},n=i,r=(s("13a0"),s("2877")),d=Object(r["a"])(n,a,o,!1,null,"7135f060",null);t["a"]=d.exports}}]);