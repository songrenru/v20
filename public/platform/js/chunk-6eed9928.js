(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6eed9928"],{"06db":function(t,n,e){},efc0:function(t,n,e){"use strict";e("06db")},f80e:function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"charts_container_10"}},[e("div",{staticClass:"banner"},[e("div",{staticClass:"item"},[e("img",{attrs:{src:t.dataList[t.currentIndex].url}})]),e("div",{staticClass:"desc"},[t._v(" "+t._s(t.dataList[t.currentIndex].desc)+" ")]),t.dataList.length>1?e("div",{staticClass:"page"},[e("ul",t._l(t.dataList,(function(n,i){return e("li",{class:{current:t.currentIndex==i},on:{click:function(n){return t.gotoPage(i)}}})})),0)]):t._e()])])},r=[],s={data:function(){return{dataList:[{url:"https://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg",desc:"床前明月光，疑是地上霜"},{url:"https://i1.mifile.cn/a4/xmad_15532384207972_iJXSx.jpg",desc:"举头望明月，低头思故乡"},{url:"https://i1.mifile.cn/a4/xmad_15517939170939_oiXCK.jpg",desc:"鹅鹅鹅，曲项向天歌"}],currentIndex:0,timer:null}},computed:{prevIndex:function(){return 0==this.currentIndex?this.dataList.length-1:this.currentIndex-1},nextIndex:function(){return this.currentIndex==this.dataList.length-1?0:this.currentIndex+1}},mounted:function(){this.runInv()},methods:{gotoPage:function(t){this.currentIndex=t},runInv:function(){var t=this;this.timer=setInterval((function(){t.gotoPage(t.nextIndex)}),3e3)}}},c=s,a=(e("efc0"),e("0c7c")),u=Object(a["a"])(c,i,r,!1,null,"de06786c",null);n["default"]=u.exports}}]);