(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ab0266ca"],{"40f5":function(t,e,o){},"563e":function(t,e,o){"use strict";var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"color-picker"},[e("colorPicker",{staticClass:"color-box",on:{change:t.headleChangeColor},model:{value:t.colorInfo,callback:function(e){t.colorInfo=e},expression:"colorInfo"}}),e("p",{staticClass:"color-name"},[t._v(t._s(t.colorInfo))])],1)},i=[],r={name:"CustomColorPicker",components:{},data:function(){return{colorInfo:""}},props:{color:{type:String,default:"#ffffff"},disabled:{type:Boolean,default:!1}},watch:{color:{handler:function(t){console.log(t),t&&this.$nextTick((function(){this.colorInfo=t}))},immediate:!0}},mounted:function(){this.colorInfo=this.color},methods:{headleChangeColor:function(t){this.$emit("update:color",t)}}},c=r,n=(o("7d1f0"),o("2877")),s=Object(n["a"])(c,a,i,!1,null,"0f1938e4",null);e["a"]=s.exports},"6c65":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t._self._c;return t.refresh?e("div",{staticClass:"page mt-20 ml-10 mr-10 mb-20"},[0==t.$route.query.cat_id?e("groupCategoryEditForm",{attrs:{cat_id:t.$route.query.cat_id||0,cat_fid:t.$route.query.cat_fid||0,group_content_switch:t.group_content_switch}}):t._e(),0!=t.$route.query.cat_id?e("a-tabs",{attrs:{"default-active-key":t.key},on:{change:t.tabsChange}},[e("a-tab-pane",{key:"1",attrs:{tab:"分类信息"}},[e("groupCategoryEditForm",{attrs:{cat_id:t.$route.query.cat_id||0,cat_fid:t.$route.query.cat_fid||0,group_content_switch:t.group_content_switch}})],1),e("a-tab-pane",{key:"2",attrs:{tab:"分类页装修"}},[e("a-row",{staticStyle:{background:"white",padding:"20px"}},[e("a-col",{attrs:{span:10}},[e("a-list",{attrs:{"item-layout":"horizontal","data-source":t.data},scopedSlots:t._u([{key:"renderItem",fn:function(o){return e("a-list-item",{},[e("a-list-item-meta",{attrs:{description:o.desc}},[e("a",{attrs:{slot:"title",id:"title"},slot:"title"},[t._v(t._s(o.title))])]),"头部背景色"==o.title?e("a-form",[e("a-form-item",[e("color-picker",{attrs:{color:t.main_color},on:{"update:color":function(e){t.main_color=e}}})],1)],1):t._e(),o.show_switch?e("a-switch",{on:{change:t.changeRec},model:{value:t.is_display,callback:function(e){t.is_display=e},expression:"is_display"}}):t._e(),o.button?e("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.getClick(o.click,o.title)}}},[t._v(" "+t._s(o.button)+" ")]):t._e()],1)}}],null,!1,2911478796)}),e("a-divider")],1),e("a-col",{attrs:{span:2}}),e("a-col",{staticStyle:{position:"relative",display:"flex","flex-direction":"column"},attrs:{span:12}},[e("iframe",{staticStyle:{width:"400px",height:"800px"},attrs:{id:"myframe",frameborder:"0",src:t.url}}),e("a-button",{staticStyle:{width:"65px","margin-top":"10px"},attrs:{type:"primary"},on:{click:t.refreshFrame}},[t._v("刷新 ")])],1)],1)],1)],1):t._e(),e("decorate-adver",{ref:"bannerModel"})],1):t._e()},i=[],r=(o("d3b7"),o("25f0"),o("a9e3"),o("8a11")),c=o("2c92c"),n=o("563e"),s=o("3adc"),u=[{title:"头部背景色",desc:"",button:"",show_switch:!1,change:"",click:""},{title:"热搜词",desc:"设置推荐热搜关键词后，对应热搜词即可展示在频道页头部",button:"装修",show_switch:!1,change:"",click:"getHotSearch"},{title:"导航栏导航列表",desc:"按照团购分类子分类读取数据，默认一行展示5个，可展示两行，更多可轮播展示",button:"",show_switch:!1,change:"",click:""},{title:"广告位",desc:"尺寸为 702*142，仅显示一张广告图",button:"装修",show_switch:!1,change:"",click:"getAdver"},{title:"优选好店",desc:"按照分类下店铺评分以及销量展示店铺，默认展示9个",button:"",show_switch:!1,change:"",click:""},{title:"特价拼团",desc:"在该分类下，按照销量，展示正在拼团的前3款商品",button:"",show_switch:!1,change:"",click:""},{title:"精选热卖",desc:"推荐分类下热门商品，提高曝光率",button:"装修",show_switch:!1,change:"",click:"getSelect"},{title:"超值联盟",desc:"推荐该分类类型的优惠组合，提高曝光率",button:"装修",show_switch:!1,change:"",click:"getCombination"},{title:"店铺列表",desc:"在该频道分类下，默认按评分高低展示店铺",button:"",show_switch:!1,change:"",click:""}],l={components:{groupCategoryEditForm:c["default"],ColorPicker:n["a"],DecorateAdver:s["default"]},data:function(){return{cat_id:this.$route.query.cat_id||0,cat_fid:this.$route.query.cat_fid||0,group_content_switch:0,refresh:!0,data:u,main_color:"",queryParam:{now_cat_id:0,cat_id:0,location:0,size:"",cat_name:"",cat_key:""},key:"1",url:""}},watch:{main_color:function(t){this.updateGroupCategoryBgColor(t)},"$route.query.key":function(t){t&&(this.key=t.toString())}},mounted:function(){},activated:function(){this.refresh=!0,this.configGroupCategoryOpt(),this.getGroupCategory(),this.getUrl()},deactivated:function(){this.refresh=!1},methods:{configGroupCategoryOpt:function(){var t=this;this.request(r["a"].configGroupCategory,null).then((function(e){t.group_content_switch=e&&e.group_content_switch?e.group_content_switch:0}))},tabsChange:function(t){console.log(t,"tabsChange")},getGroupCategory:function(){var t=this;Number(this.$route.query.cat_id)&&this.request(r["a"].getGroupCategoryInfo,{cat_id:this.$route.query.cat_id}).then((function(e){t.main_color=e.detail.bg_color}))},updateGroupCategoryBgColor:function(t){this.request(r["a"].updateGroupCategoryBgColor,{cat_id:this.$route.query.cat_id,bg_color:t}).then((function(t){}))},getClick:function(t,e){this[t](e)},getHotSearch:function(){this.$router.push({path:"/group/platform.groupRenovationSearchHot/index",query:{cat_id:this.$route.query.cat_id}})},getBanner:function(t){this.queryParam["cat_id"]=this.$route.query.cat_id,this.queryParam["location"]=2,this.queryParam["size"]="640*240",this.queryParam["cat_name"]=t,this.queryParam["cat_key"]="wap_group_channel_top",this.queryParam["title"]=t,this.$refs.bannerModel.getList(this.queryParam)},getAdver:function(t){this.queryParam["cat_id"]=this.$route.query.cat_id,this.queryParam["location"]=2,this.queryParam["size"]="702*142",this.queryParam["cat_key"]="wap_group_channel_adver",this.queryParam["cat_name"]=t,this.queryParam["title"]=t,this.$refs.bannerModel.getList(this.queryParam)},getSelect:function(t){this.$router.push({path:"/group/platform.groupSelect/edit",query:{cat_id:this.$route.query.cat_id,type:1}})},getCombination:function(t){this.$router.push({path:"/group/platform.groupRenovationCombine/edit",query:{cat_id:this.$route.query.cat_id,type:2}})},getUrl:function(){var t=this;this.request(r["a"].getUrl,{type:"channel",cat_id:this.$route.query.cat_id}).then((function(e){t.url=e.url}))},refreshFrame:function(){document.getElementById("myframe").contentWindow.location.reload(!0)}}},h=l,d=(o("cd2e"),o("2877")),_=Object(d["a"])(h,a,i,!1,null,"9ce9bb30",null);e["default"]=_.exports},"7d1f0":function(t,e,o){"use strict";o("d4c7")},cd2e:function(t,e,o){"use strict";o("40f5")},d4c7:function(t,e,o){}}]);