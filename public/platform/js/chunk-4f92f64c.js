(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f92f64c"],{"6e09":function(t,e,i){},a389:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[!1===t.empty?i("div",{ref:"trackInformation",staticClass:"track-information",attrs:{id:"trackInformation"}},[i("keep-alive",[i("a-steps",{attrs:{"progress-dot":"",size:"small",current:0,direction:"vertical"}},t._l(t.log_list,(function(e,s){return i("a-step",{key:s,attrs:{status:"finish",title:e.create_day+" "+e.create_time}},[i("span",{attrs:{slot:"description"},slot:"description"},[t._v(" "+t._s(e.content)+" ")])])})),1)],1)],1):t._e(),t.empty?i("a-empty",{staticClass:"empty",attrs:{image:t.simpleImage}},[i("span",{attrs:{slot:"description"},slot:"description"},[t._v("暂无数据")])]):t._e()],1)},n=[],a=(i("06f4"),i("fc25")),r=(i("a9e3"),i("99af"),i("a0e0")),o=i("8bbf"),l=i.n(o);l.a.use(a["a"]);var c={name:"trackInformation",props:{villageId:{type:Number,default:0},uid:{type:Number,default:0},pigcmsId:{type:Number,default:0}},data:function(){return{visible:!1,confirmLoading:!1,flag:!0,inner:"",search_most:"search_most",log_list:[],simpleImage:"",empty:!1,page:0}},created:function(){this.simpleImage=a["a"].PRESENTED_IMAGE_SIMPLE,this.searchMostLog()},methods:{searchMostLog:function(){var t=this;if("un_search_most"===this.search_most)return!1;this.page++;var e={village_id:this.villageId,pigcms_id:this.pigcmsId,uid:this.uid,page:this.page};this.request(r["a"].getActionTrail,e).then((function(e){0!==e.list.lenght&&(t.log_list=t.log_list.concat(e.list),0===t.log_list.length&&(t.empty=!0),!0===e.next_page&&(t.flag=!0))}))},onScroll:function(t){t.bubbles||(this.inner=this.$refs.trackInformation,this.inner.clientHeight+this.inner.scrollTop>=this.inner.scrollHeight&&this.flag&&(this.flag=!1,this.searchMostLog()))}},mounted:function(){this.inner=this.$refs.trackInformation,this.inner.addEventListener("scroll",this.onScroll,!0)},destroyed:function(){this.inner.removeEventListener("scroll",this.onScroll,!0)}},h=c,u=(i("b028"),i("2877")),f=Object(u["a"])(h,s,n,!1,null,null,null);e["default"]=f.exports},b028:function(t,e,i){"use strict";i("6e09")}}]);