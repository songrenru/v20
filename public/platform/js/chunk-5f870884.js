(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f870884","chunk-5f870884"],{"968a":function(t,e,s){},"9ace":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAClklEQVRIS6WUTUhUURTH//87M37HiPM+9E2CIQoR1KZdXwRtLAtaRBAYFfmCVkEtMqOsUSqC2kctI2iVlC6DkFoFKi0CDWmTOX5MRmXF9N6Jp2njzJt5r+muLpf///zOOffcS4RcYqNmoX+2R0Qk6zg3LctaCmNlGJGnceymu59S4+e8PcE7CVM/H8YbCiCnDVNUdCqTGqvxgorIkgPZ1NjYOBsECQVwujfeVpQLC6nR3Hi3NNO4+N8AOZ5MSBXeE6jLA3yJVVW2xOPxTClIYAViJ/sB9HpB8gAQSEo3zStlA+RES71UZL3s434AAIsqFm1paGj4XAyyXIEc2VKBeKYVdNuASDsobRDVLpTNBM1Vc34Ff84/AvJWBJOgmoA4k4hEJjRNmyKZpXQne4S4SqAy6MKKAHxtAvwgcY2ubS0RrA4KXqRFQbbvdO3kMIGOIGU5ABEMU05pGxCNDQNqZxDkX1oEkVeMRTtWLvmsXie/YkMEd5eChAWQGHGA/YZhfF17BzNdZq1ZHXkKcG8xSCiA4IWr0OkFX/m3cpb3YwLWIMB9fpBgAJ8nnOxB5vy0BS9ZusxaVEcWAUbzIaUAJB0HUr+a+aq3EGA3twLuu3IqcIl2wzAmc72FgG7zEBgdLAcAqMOaqT0pCXDs5CUFDJQFIC5rhrHO69Mi6yHAY+UACD5KmPo6bwHAtZNjBLb5AGT++uiz5dEjOvMncEUvbzTT3Fq0RdIHJdPWN4JV6wAiI3DRwwfTL73zdDq9Q4E3COzKS+RnwtBrvYnynSIBKLY1Q9BYzgcYJ9DLex+G/FqWmZs7IK4MyN+KZxOG3kTSLT6mZ5q3u65zUgEjSE4/Zh/WxH4QEVHz6fmjitjjKtzXdf11ru43JDfxTY592YUAAAAASUVORK5CYII="},a8c7:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap"},[t.content&&t.content.list&&t.content.list.length?[a("div",{staticClass:"nav-wrap flex align-center bg-ff"},t._l(t.content.list,(function(e,s){return a("div",{key:s,staticClass:"nav-item",class:{active:0===s,"flex-1":t.content.list.length<5,"nav-item-swiper":t.content.list.length>4}},[t._v(" "+t._s(e.title)+" "),a("span",{directives:[{name:"show",rawName:"v-show",value:0===s,expression:"index === 0"}],staticClass:"line",style:{background:t.pageMainColor}})])})),0)]:t.catInfo&&0!=t.catInfo.cat_fid?[a("div",{staticClass:"nav-wrap flex align-center bg-ff"},t._l(t.filterList,(function(e,s){return a("div",{key:s,staticClass:"nav-item flex-1 fliter-title",style:{color:0===s?"rgba(255, 106, 72, 1)":"rgba(102, 102, 102, 1)"}},[t._v(" "+t._s(e.title?e.title:0===s?t.catInfo.cat_name:"")),a("a-icon",{staticStyle:{"font-size":"10px","margin-left":"4px"},attrs:{type:0==s?"up":"down"}})],1)})),0)]:t._e(),t.content&&t.content.list&&t.content.list.length||t.catInfo&&0!=t.catInfo.cat_fid?[t.storeList&&t.storeList.length?a("div",{class:{"flex flex-wrap plr-6 bg-f4":"3"==t.showType}},[t._l(t.storeList,(function(e,i){return["1"==t.showType?a("div",{key:i,staticClass:"store-wrap bg-ff"},[a("div",{staticClass:"flex"},[a("div",{staticClass:"img-wrap"},[a("img",{attrs:{src:e.image?e.image:t.defaultImg,alt:""}})]),a("div",{staticClass:"content flex-1 text-nowrap text-els"},[a("div",{staticClass:"name-wrap flex justify-between align-center text-nowrap text-els"},[a("div",{staticClass:"name flex text-nowrap text-els"},[t._v(t._s(e.name))]),a("div",{staticClass:"bus-label-wrap"},t._l(e.bus_label,(function(e,s){return a("span",{key:s,staticClass:"bus-tag text-nowrap",style:{backgroundColor:e.bg_color,color:e.font_color}},[t._v(" "+t._s(e.name)+" ")])})),0)]),a("div",{staticClass:"score-wrap flex justify-between align-center mt-5"},[a("div",{staticClass:"flex-1 flex align-center"},[t._l(e.score_mean_arr,(function(e,i){return a("div",{key:i,staticClass:"flex justify-center align-center"},["2"==e?a("img",{staticClass:"start-icon",attrs:{src:s("b5fd")}}):t._e(),"1"==e?a("img",{staticClass:"start-icon",attrs:{src:s("9ace")}}):t._e(),"0"==e?a("img",{staticClass:"start-icon",attrs:{src:s("dd0a")}}):t._e()])})),a("span",[t._v(t._s(e.score_mean))])],2),a("div",{staticClass:"range"},[t._v(t._s(e.range))])]),a("div",{staticClass:"address text-nowrap text-els mt-5"},[t._v(" "+t._s(e.address)+" ")]),a("div",{staticClass:"cat-name text-nowrap text-els mt-5"},[t._v("#"+t._s(e.cat_name))])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.groupGoodsList&&e.groupGoodsList.length,expression:"item.groupGoodsList && item.groupGoodsList.length"}],staticClass:"content-group text-nowrap text-els"},[t._l(e.groupGoodsList,(function(e,s){return[s<3?a("div",{key:s,staticClass:"flex justify-between align-center text-nowrap text-els mt-5"},[a("div",{staticClass:"flex-1 flex align-center text-nowrap text-els"},[a("span",{staticClass:"group-tag cr-white text-nowrap",style:{background:e.bg_color}},[t._v(t._s(e.tag))]),a("span",{staticClass:"price"},[t._v("￥"+t._s(e.price))]),a("span",{staticClass:"flex-1 text-nowrap text-els group-content"},[t._v(t._s(e.name))])]),a("div",{staticClass:"sale-count"},[t._v(" "+t._s(t.L("销量X1",{X1:e.sale_count}))+" ")])]):t._e()]})),a("div",{directives:[{name:"show",rawName:"v-show",value:e.groupGoodsList.length>3,expression:"item.groupGoodsList.length > 3"}],staticClass:"more"},[t._v(" "+t._s(t.L("查看全部10个商品"))),a("a-icon",{attrs:{type:"right"}})],1)],2)]):t._e(),"2"==t.showType?a("div",{key:i,staticClass:"store-wrap bg-ff flex"},[a("div",{staticClass:"img-wrap"},[a("img",{attrs:{src:e.image?e.image:t.defaultImg,alt:""}})]),a("div",{staticClass:"content flex-1 text-nowrap text-els"},[a("div",{staticClass:"name-wrap flex justify-between align-center text-nowrap text-els"},[a("div",{staticClass:"name flex text-nowrap text-els"},[t._v(t._s(e.name))]),a("div",{staticClass:"bus-label-wrap"},t._l(e.bus_label,(function(e,s){return a("span",{key:s,staticClass:"bus-tag",style:{backgroundColor:e.bg_color,color:e.font_color}},[t._v(" "+t._s(e.name)+" ")])})),0)]),a("div",{staticClass:"score-wrap flex justify-between align-center mt-5"},[a("div",{staticClass:"flex-1 flex align-center"},[t._l(e.score_mean_arr,(function(e,i){return a("div",{key:i,staticClass:"flex justify-center align-center"},["2"==e?a("img",{staticClass:"start-icon",attrs:{src:s("b5fd")}}):t._e(),"1"==e?a("img",{staticClass:"start-icon",attrs:{src:s("9ace")}}):t._e(),"0"==e?a("img",{staticClass:"start-icon",attrs:{src:s("dd0a")}}):t._e()])})),a("span",[t._v(t._s(e.score_mean))])],2),a("div",{staticClass:"range"},[t._v(t._s(e.range))])]),a("div",{staticClass:"address text-nowrap text-els mt-5"},[t._v(" "+t._s(e.address)+" ")]),a("div",{staticClass:"cat-name text-nowrap text-els mt-5"},[t._v("#"+t._s(e.cat_name))]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.groupGoodsList&&e.groupGoodsList.length,expression:"item.groupGoodsList && item.groupGoodsList.length"}],staticClass:"content-group text-nowrap text-els"},[t._l(e.groupGoodsList,(function(e,s){return[s<3?a("div",{key:s,staticClass:"flex justify-between align-center text-nowrap text-els mt-5"},[a("div",{staticClass:"flex-1 flex align-center text-nowrap text-els"},[a("span",{staticClass:"group-tag cr-white text-nowrap",style:{background:e.bg_color}},[t._v(t._s(e.tag))]),a("span",{staticClass:"flex-1 text-nowrap text-els group-content"},[t._v(t._s(e.name))])])]):t._e()]}))],2)])]):t._e(),"3"==t.showType?a("div",{key:i,staticClass:"store-wrap-other"},[a("div",{staticClass:"store-content"},[a("div",{staticClass:"img-wrap"},[a("img",{attrs:{src:e.image?e.image:t.defaultImg,alt:""}})]),a("div",{staticClass:"content text-nowrap text-els bg-ff"},[a("div",{staticClass:"name-wrap flex justify-between align-center text-nowrap text-els"},[a("div",{staticClass:"name flex flex-1 text-nowrap text-els",staticStyle:{display:"inline-block"}},[t._v(" "+t._s(e.name)+" ")]),e.bus_label&&e.bus_label.length?a("div",{staticClass:"bus-label-wrap"},[t._l(e.bus_label,(function(e,s){return[0==s?a("span",{key:s,staticClass:"bus-tag text-nowrap",style:{backgroundColor:e.bg_color,color:e.font_color}},[t._v(" "+t._s(e.name)+" ")]):t._e()]}))],2):t._e()]),a("div",{staticClass:"score-wrap flex justify-between align-center mt-5"},[a("div",{staticClass:"flex-1 flex align-center"},[t._l(e.score_mean_arr,(function(e,i){return a("div",{key:i,staticClass:"flex justify-center align-center"},["2"==e?a("img",{staticClass:"start-icon",attrs:{src:s("b5fd")}}):t._e(),"1"==e?a("img",{staticClass:"start-icon",attrs:{src:s("9ace")}}):t._e(),"0"==e?a("img",{staticClass:"start-icon",attrs:{src:s("dd0a")}}):t._e()])})),a("span",[t._v(t._s(e.score_mean))])],2)]),a("div",{staticClass:"cat-name text-nowrap text-els mt-5"},[t._v("#"+t._s(e.cat_name))]),a("div",{staticClass:"address flex justify-between align-center text-nowrap text-els mt-5"},[a("span",{staticClass:"flex-1 text-nowrap text-els"},[t._v(t._s(e.address))]),a("span",{staticClass:"range"},[t._v(t._s(e.range))])])])])]):t._e()]}))],2):t._e()]:[a("div",{staticClass:"feed-wrap-empty flex align-center justify-center"},[a("span",[t._v(t._s(t.L("feed流区域")))])])]],2)},i=[],n=(s("d81d"),s("4de4"),s("b0c0"),s("a15b"),{props:{content:{type:[String,Object],default:""}},data:function(){return{defaultImg:s("62b5"),storeList:[{name:this.L("此处显示店铺名称"),image:"",score_mean:"5.0",range:"3.56 km",address:this.L("此处显示店铺地址"),cat_name:this.L("此处显示店铺子分类名称"),bus_label:[{type:"book",name:this.L("订")},{type:"queue",name:this.L("排")}],group_goods:{count:"10",list:[{group_id:"2",name:this.L("此处显示团购名称"),price:"10",sale_count:"99",tag:this.L("团"),group_cate:"normal"},{group_id:"2",name:this.L("此处显示团购名称"),price:"10",sale_count:"99",tag:this.L("券"),group_cate:"cashing"},{group_id:"2",name:this.L("此处显示团购名称"),price:"10",sale_count:"99",tag:this.L("订"),group_cate:"booking_appoint"}]},discount_list:[{type:"group",list:[{group_id:"2",name:this.L("此处显示团购名称"),sale_count:""}]},{type:"shop",list:[{name:this.L("满$2.00减$1")}]},{type:"store",list:[{name:this.L("满$2.00减$1")}]}]},{name:this.L("此处显示店铺名称"),image:"",score_mean:"5.0",range:"3.56 km",address:this.L("此处显示店铺地址"),cat_name:this.L("此处显示店铺子分类名称"),bus_label:[{type:"book",name:this.L("订")},{type:"queue",name:this.L("排")}],group_goods:{count:"10",list:[{group_id:"2",name:this.L("此处显示团购名称"),price:"10",sale_count:"99",tag:this.L("团"),group_cate:"normal"},{group_id:"2",name:this.L("此处显示团购名称"),price:"10",sale_count:"99",tag:this.L("券"),group_cate:"cashing"},{group_id:"2",name:this.L("此处显示团购名称"),price:"10",sale_count:"99",tag:this.L("订"),group_cate:"booking_appoint"}]},discount_list:[{type:"group",list:[{group_id:"2",name:this.L("此处显示团购名称"),sale_count:""}]},{type:"shop",list:[{name:this.L("满$2.00减$1")}]},{type:"store",list:[{name:this.L("满$2.00减$1")}]}]},{name:this.L("此处显示店铺名称"),image:"",score_mean:"5.0",range:"3.56 km",address:this.L("此处显示店铺地址"),cat_name:this.L("此处显示店铺子分类名称"),bus_label:[{type:"book",name:this.L("订")},{type:"queue",name:this.L("排")}],group_goods:{count:"10",list:[{group_id:"2",name:this.L("此处显示团购名称"),price:"10",sale_count:"99",tag:this.L("团"),group_cate:"normal"},{group_id:"2",name:this.L("此处显示团购名称"),price:"10",sale_count:"99",tag:this.L("券"),group_cate:"cashing"},{group_id:"2",name:this.L("此处显示团购名称"),price:"10",sale_count:"99",tag:this.L("订"),group_cate:"booking_appoint"}]},discount_list:[{type:"group",list:[{group_id:"2",name:this.L("此处显示团购名称"),sale_count:""}]},{type:"shop",list:[{name:this.L("满$2.00减$1")}]},{type:"store",list:[{name:this.L("满$2.00减$1")}]}]},{name:this.L("此处显示店铺名称"),image:"",score_mean:"5.0",range:"3.56 km",address:this.L("此处显示店铺地址"),cat_name:this.L("此处显示店铺子分类名称"),bus_label:[{type:"book",name:this.L("订")},{type:"queue",name:this.L("排")}],group_goods:{count:"10",list:[{group_id:"2",name:this.L("此处显示团购名称"),price:"10",sale_count:"99",tag:this.L("团"),group_cate:"normal"},{group_id:"2",name:this.L("此处显示团购名称"),price:"10",sale_count:"99",tag:this.L("券"),group_cate:"cashing"},{group_id:"2",name:this.L("此处显示团购名称"),price:"10",sale_count:"99",tag:this.L("订"),group_cate:"booking_appoint"}]},discount_list:[{type:"group",list:[{group_id:"2",name:this.L("此处显示团购名称"),sale_count:""}]},{type:"shop",list:[{name:this.L("满$2.00减$1")}]},{type:"store",list:[{name:this.L("满$2.00减$1")}]}]}],filterList:[{title:""},{title:this.L("附近")},{title:this.L("智能排序")}]}},computed:{showType:function(){return this.content&&this.content.list&&this.content.list.length?this.content.list[0].show_type:this.catInfo&&0!=this.catInfo.cat_fid?"1":""},catInfo:function(){var t=this.$store.state.customPage.pageInfo,e={cat_id:t.source_id||"",cat_name:t.cat_name||"",cat_fid:t.cat_fid||"0"};return e},pageMainColor:function(){return this.$store.state.customPage.pageMainColor||"#ffffff"}},created:function(){var t=this;this.storeList=this.storeList.map((function(e){return e.bus_label&&e.bus_label.length&&(e.bus_label=e.bus_label.filter((function(t){return"queue"===t.type?(t.bg_color="rgba(235, 245, 255, 1)",t.font_color="rgba(127, 185, 246, 1)"):"shop"===t.type?(t.bg_color="rgba(254, 244, 237, 1)",t.font_color="rgba(235, 133, 46, 1)"):"book"===t.type?(t.bg_color="rgba(238, 252, 217, 1)",t.font_color="rgba(78, 149, 27, 1)"):"check"===t.type&&(t.bg_color="rgba(254, 237, 235, 1)",t.font_color="rgba(249, 77, 42, 1)"),t}))),e.groupGoodsList=[],"1"==t.showType&&e.group_goods&&e.group_goods.list&&e.group_goods.list.length&&(e.groupGoodsList=e.group_goods.list.filter((function(t){return"normal"==t.group_cate?t.bg_color="RGBA(255, 74, 16, 1)":"booking_appoint"==t.group_cate?t.bg_color="RGBA(245, 106, 113, 1)":"cashing"==t.group_cate&&(t.bg_color="RGBA(255, 136, 34, 1)"),t}))),"2"==t.showType&&e.discount_list&&e.discount_list.length&&(e.groupGoodsList=e.discount_list.map((function(e){return e.list&&e.list.length?e.name=e.list.map((function(t){return t.name})).join(","):e.name="","group"==e.type?(e.tag=t.L("惠"),e.bg_color="RGBA(255, 74, 16, 1)"):"shop"==e.type?(e.tag=t.L("外"),e.bg_color="RGBA(255, 136, 34, 1)"):"store"==e.type&&(e.tag=t.L("买"),e.bg_color="RGBA(255, 185, 34, 1)"),e}))),e.score_mean_arr=t.scoreHandle(e.score_mean-0),e}))},methods:{scoreHandle:function(t){for(var e=t||0,s=[],a=Math.floor(e),i=Math.ceil(e),n=0;n<5;n++)a>n?s.push(2):i-1===n?s.push(1):s.push(0);return s}}}),o=n,r=(s("b0c6"),s("2877")),l=Object(r["a"])(o,a,i,!1,null,"cc3ecb44",null);e["default"]=l.exports},b0c6:function(t,e,s){"use strict";s("968a")},b5fd:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACgUlEQVRIS62UTUgUcRjGn+e/67emhLk4k2CIQgR16dYXQRfLgg4RBEJfTtAtImgtygjp4+AxakzoEkFektJjEFKngqJDoGFB7qxoqJVaus3/jZ2t2M1xd3Ztjv95nuc37/vO+ycCPmKhXEt9VJECONdpYyGIlUFESY1Y9T2AOuPpRfewN342iDcQQE7WRUSFxwiWe/mQBSpnA29jMhckGMBafxOQcxlh4t5g78T5VQO+WlW1lVjzgUBlephAf6MbamTf+HQ2SM4KXMvsVkCnX4iGXA3ZzqWCAXK0sUaKEx8JVPuFiGCWjDXSxpeVIF4FcmhTMaqnm0DdDIRaQGmGqBahbCQYyd5niUPwDuAooEegOQopGUF47RjtVwlKhxkV4jKBklwDy+e9QH4Q7hVqy1ggWJaPOahWIN+pLXOIQGtQU146wRDleG0VwkVDgNqelzmHWKBfcH6xNTXk0+sq5WfRIMGd/wUiMoyixF7empr7uwcT7ZGKSFnoMcDdq4EI8OzzzFJbXf/UXDInY9GSNyZgDADcUxBE5Cno7E+/aZdtsrRHKlAWmgUYzg8iLsKJmmRb0n3LAVZDE6Df5xeeUi8uLbWU3psazQ7oiBwAwwOFAAB1kPanR1kBrmV2KqC7MAAu0o5leH1aZNwHeKQggOgH7I1neJcBtGW+JrDFByCA+yR1Hmr79w/09gl4q+zY5hVbJF1Q4hjzBEszAMnF0Yiyz3nuBZ0wtkHhGsgd6ToBFjkTq2A/3D/nmXsAUCxjgmDd7y96Q+AC7digX8vEMvchNS+vYoFM0nDq2QXtC/BEpxq2au0eU8AwTOdhutgX0gWFceMwFHeB+i7vxF+m634BgqLkL12k2ksAAAAASUVORK5CYII="},dd0a:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAYFBMVEUAAADs6erq6ur////s6ers6evs6ers6ers6ers6ert6evt5ubs6urr6ers6eru6uzs6enu7u7r6err6Ort6ers6urs6erp6enr6eny8vLu6urr6Ovu6+v06fTo6Ojs6eo44/MiAAAAH3RSTlMA9wsEw77y6NGYJgqCenROSw+2sqaNiDszEoRZWBcW6/2QmAAAAKdJREFUKM9t0FkWxBAQBdBCEDLPSU+1/122kK4+xPvhvMtHFfxT1XUFuSyIS65/M0T1ycCKLuu9P9QJ6rjBA33qtB9UADVQJWzXGqnxipam7a0AaBhmwlqgPhEY8zACL3J9MUBWCg7gRKa95NdaE5G0ZB4DpxltDJagi6EjaGJoCOYYZoIyFNMUzpL2y/xQG8Dmh2XiJ9q96sO1d781wW5edBdPs5/nF9aAI1o7FpqfAAAAAElFTkSuQmCC"}}]);