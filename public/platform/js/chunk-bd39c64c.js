(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bd39c64c","chunk-6c83e588","chunk-b295c9a8","chunk-2b8026a6","chunk-c424fdc0","chunk-02f2e628","chunk-65f13be0","chunk-2e37e496"],{"04ad":function(t,e,n){"use strict";n("b811")},"0827":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap flex"},t._l(t.list,(function(e,s){return n("div",{key:s,staticClass:"flex-1 item-wrap text-nowrap text-els",class:{"item-box-shadow":"1"==t.content.style_type,"item-border":"2"==t.content.style_type},style:{height:"70px"}},[n("div",{staticClass:"title-wrap flex-1 text-nowrap text-els"},[n("div",{staticClass:"title text-nowrap text-els"},[t._v(" "+t._s(e.title.trim()||t.L("主标题"))+" ")]),n("div",{staticClass:"sub-title text-nowrap text-els"},[t._v(" "+t._s(e.sub_title.trim()||t.L("副标题"))+" ")])]),n("div",{staticClass:"img-wrap"},[n("img",{style:{width:t.imageSize.width,height:t.imageSize.height},attrs:{src:e.image?e.image:t.defaultImage,alt:""}})]),n("div",{directives:[{name:"show",rawName:"v-show",value:"1"==e.show_badge&&""!=e.badge_val.trim(),expression:"item.show_badge == '1' && item.badge_val.trim() != ''"}],staticClass:"badge text-nowrap text-els"},[t._v(" "+t._s(e.badge_val.trim())+" ")])])})),0)},i=[],a={props:{content:{type:[String,Object],default:""}},data:function(){return{defaultImage:n("708c"),demoList:[{title:this.L("主标题"),sub_title:this.L("副标题"),link_url:"",image:"",show_badge:"2",badge_val:""},{title:this.L("主标题"),sub_title:this.L("副标题"),link_url:"",image:"",show_badge:"2",badge_val:""}]}},computed:{list:function(){return this.content&&this.content.list&&this.content.list.length?this.content.list:this.demoList},imageSize:function(){var t={width:"35px",height:"35px"};return 3==this.list.length?(t.width="30px",t.height="30px"):4==this.list.length?(t.width="25px",t.height="25px"):5==this.list.length&&(t.width="20px",t.height="20px"),t}}},c=a,o=(n("5d97"),n("2877")),l=Object(o["a"])(c,s,i,!1,null,"255b1506",null);e["default"]=l.exports},"364d":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap flex justify-between align-center"},[n("span",{directives:[{name:"show",rawName:"v-show",value:"1"==t.content.is_show_title,expression:"content.is_show_title == '1'"}],staticClass:"title"},[t._v(t._s(t.L("热搜"))+"：")]),t.content&&t.content.list&&t.content.list.length?n("div",{staticClass:"flex align-center flex-1 sx-hidden"},t._l(t.content.list,(function(e,s){return n("div",{key:s,staticClass:"text-nowrap item"},[n("span",[t._v(t._s(e.name))])])})),0):t._e()])},i=[],a={props:{content:{type:[String,Object],default:""}},data:function(){return{}}},c=a,o=(n("bfc5"),n("2877")),l=Object(o["a"])(c,s,i,!1,null,"a8c995f4",null);e["default"]=l.exports},4229:function(t,e,n){},5281:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAwCAYAAAC4wJK5AAAFRUlEQVRoQ9VaPWxbVRT+zn127Lw/OxFNq6hShUhhAHWABAhqRflrJSh0gaW0HWAD0QITFQMMCMb+SDB2oGVpF0BlKEPDEBASZkFdqgCRUEHQSLXfr//y3kH3pU6T2Infsx3XuaN9fr7v3nPPvfecR+hiMLPwPG9PSDTJIT8CogcA7ARjjBkmEVQAAkDIDJ8INoBbINwE8x/MdJ0DLuTz2m9EFHYKhZIqMvNQyS0fEsBrzOFBIhpJamOtPDMXiXA1BF/O6/oVIqolsRmbxO3bnFPS/kkAbwHYnsRJQtn/AHwR1KtnR0dHrTi6bUkwM1mO/wYRPgOwLY7RHskskMAHpqadb2dvQxKlUmmEUukvwTjUztCm/U+4wov14/l8vriej3VJFIvFXSKVuQrwQ5sGMK5h5htBShwYVdW/Wqm0JLHgeeNDAWZBuD+un82Xoz9rgvdt07R/1vpqIsHMGdvzZ8GY3HxgCT0QfjE1dR8RVVdqNpGwXP80mN9NaL5/4sync6b+/rokSp43SSF+BqD0D1ViTwELPJHXtF8bmqtWwnb8awx+JrHZPisQ6JppqM81kbBtf5qJf+ozns7dhTSdy6kyarC8EpbtXwDx0c6t9lmT+ULO1I8vk2Bm1fbKt8Cs9RlKF+7I9ZzS9vHxcT9aCdvzXuEQ33Rh8Z6ohozDI6b2bUTCcvxzAL8TF0mlWkW5XIkrnkhuOJtFNpuJqcPncoZ+MiJRcrwCAY/F1ESxFOtyGddck9xIPhdLlxmFvKlNETMrtut7AOLSHxgSRFQxtGGdLKsyARHMxaJ+R2i9lZChIBQRhVoYdvxQQ9yVkHA4UCbIccpPhwh/6JZEKpWCoS8lt2qtBt8vJzG5SjYRCeLnybLcIxD0VRKPrVZCCIJpGCAi+OUyqtWNX5iplIIgCMHMHe+JSJH4qHy1nQD4bLckIntEEEIgCIINzTUyUKVSRbnSnOWSrATC8ASVHO9DAj7pBYk4NrKZDIaHs0thV61Fq7Z2JCFBRKfIcryPAHwcB0BDptMUmxkagqoOL7vqBQmJfVNIpFOpKLRq9foy4KF0Gpomy1B3R89I9Dqc5J4wDX2JRK0ehUtKUSIC8rdek7gTTr3b2BKgTLMy3TaGPC8k+LUEerUnoo1tue4RcPcpVoKSdx6ZeeKOnoSTTLFFx9kvIGbiOpZyrTa2DBld11rO+Hq2e0GCo8OuUplAvftrh9y4mcxQS7zN59nSAVevL0anezcpltPKBM3MzKQenXzc3dIXQDkLW/UqDkYhJ6/iksRAPYqGs5Cneryx4lFUtL3DgvB1PMXBkSLGYbPxPN2KhQJmeL5rjS0XCqK06bgXBej1wZnnNkiYL+ZM/ZiUWr4H2Lb9FJPy45YhodB0Tl1TPFvKUu4MgfYPOhECzZiG+mwD56obmWV5UxBRQVl2PAd1BBzgyXxeK7QksZRu3TMAyQbjgA4+kzP091aCa+pPzM/PZ0fvG5tFgjpU39gyCqah7m3bZJGAonYX0yyYB6bdxYz5uoK9sdpdjVktlsu7xGLwPUAP9m2m13VEN9IKDqhJGo8NWyXmEXL8iyC8eM+IEL7jxfqxjlrADdB3mvFvEuHTvjfjGacMQz1PRM3FqRWz2vaLghVkcrYbfRbxNoCxzVsZvgXQ56auniWiWJXr2CQaoOfm5jLbdux4maC8CoQHAcr3gFAJ4KsMcXnh37+v7N69e1WLt539xCRWGrx0iZUXXvL3UIgpAj0MDieIaCdH34CQAbB+V55cgB0GLxDjJgi/k6DrClBQVVV+KrRx2XADJv8DfeROxydiDcQAAAAASUVORK5CYII="},5655:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"freeModule-wrap bg-ff",class:{"box-shadow-style":"1"==t.content.style_type},style:{"background-color":"1"==t.content.bg_type?t.content.bg_val:"#ffffff","background-image":"2"==t.content.bg_type?"url("+t.content.bg_val+")":"","border-radius":"1"==t.content.border_radius?"10px":"0",padding:"1"==t.content.show_distance?"10px":"10px 0","min-height":t.content.list&&t.content.list.length?"auto":"200px"}},[s("draggable",t._b({attrs:{tag:"div"},on:{change:t.draggableChange},model:{value:t.content.list,callback:function(e){t.$set(t.content,"list",e)},expression:"content.list"}},"draggable",t.dragOptions,!1),[t._l(t.content.list,(function(e,i){return[s("div",{key:i,staticClass:"freeModule-component",class:{active:t.customIndex==t.parentCustomIndex&&t.subCustomIndex==i},attrs:{draggable:"true"},on:{click:function(n){return n.stopPropagation(),t.compontentClickOpt(e,i)}}},[s(e.type,{tag:"component",attrs:{content:e.content}}),t.customIndex==t.parentCustomIndex&&t.subCustomIndex==i?s("div",{staticClass:"components-del-wrap"},[s("div",{staticClass:"flex align-center justify-between components-del-content"},[s("span",[t._v(t._s(e.label))]),s("div",{staticClass:"components-del-icon pointer",on:{click:function(n){return n.stopPropagation(),t.delOpt(e,i)}}},[s("img",{attrs:{src:n("c459"),alt:""}})])])]):t._e()],1)]}))],2)],1)},i=[],a=(n("a9e3"),n("d81d"),n("a434"),n("b76a")),c=n.n(a),o=n("8def"),l=n("836f"),r=n("364d"),u=n("d28d"),d=n("0827"),g=n("c32b"),f={draggable:c.a,magicSquare:o["default"],titleText:l["default"],hotWords:r["default"],swiperNav:u["default"],porcelainArea:d["default"],swiperPic:g["default"]},h={props:{content:{type:[String,Object],default:""},parentCustomIndex:{type:[String,Number],default:""}},components:f,data:function(){return{}},computed:{dragOptions:function(){return{group:"freeModule",ghostClass:"ghost",animation:150,fallbackOnBody:!0,swapThreshold:.65}},componentId:function(){return this.$store.state.customPage.componentId},subCustomIndex:function(){return this.$store.state.customPage.subCustomIndex},customIndex:function(){return this.$store.state.customPage.customIndex}},methods:{draggableChange:function(t){t&&t.moved&&this.$store.dispatch("updateSubCustomIndex",t.moved.newIndex)},compontentClickOpt:function(t,e){this.$store.dispatch("updateSubCustomIndex",e),this.$store.dispatch("updateComponentId",t.type),this.$store.dispatch("updateCustomIndex",this.parentCustomIndex)},delOpt:function(t,e){var n=this,s=this.$store.state.customPage.pageInfo.custom||[],i=this.$store.state.customPage.pageInfo;s.length&&(s=s.map((function(t,a){"freeModule"==t.type&&a==n.parentCustomIndex&&(t.content&&t.content.list&&t.content.list.length&&t.content.list.splice(e,1),n.$set(i,"custom",s),n.$store.dispatch("updatePageInfo",i),n.$store.dispatch("updateComponentId",""),n.$store.dispatch("updateCustomIndex",-1),n.$store.dispatch("updateSubCustomIndex",-1))})))}}},p=h,v=(n("7e66"),n("2877")),A=Object(v["a"])(p,s,i,!1,null,"6cada98d",null);e["default"]=A.exports},"5d97":function(t,e,n){"use strict";n("fdce")},"708c":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAfCAYAAACPvW/2AAAB+klEQVRYR9WXa1KDMBSFzyUB2vraj3two+7Bv25GHUdqKY8k17kp1Cq0thCxZpgpP6D5cs59Qc+vywdW+pbwt4sBkDWP9JIVNTPrv8XZ7E5Ehp7e1gUB6TkAMVB2gJgZIt8US8KE6DNYOkACs0g1lIqm4IG1DnlptlAdIOcYN5cJEq0mAaqMxdt7hSjaqPTrQNYxjHVIdPTFmva0wYHE4t0Y+C5rlldwDpinCmncVT0oUFlbWMtYzPZXjHVpUBmHy1l/XAYDcsxY5rUX5GKmoZskEMWaerIVyxe8PREZDGhV1DBWUnaz09Vce+skY2RJph6zggDVxkGAfGawXIxYK6iIUFR2A7iIEe3Ul31wo4Faq2QvcccL1Nw3tx4wiRXmyc8qjQZaFQbGWlATFb3xIYCOcX2RHMxAOcAoIKkneWFAbRFvaba/1EjmffQq9aX6rn2jgI4J0lOf+Z9A4n2sp2mukrHZ6kAv8w1uqtmj8Xe3OvTOQ6fGQcjn/wdQ249CnvzQfx2cGKUSX80TpPE0QV3WDst1tW0zXcuYoaIISk/zUWQNw8rA1ER28CFfWsoRPXWvg71D/ixRiIcM+QTkhYXYPnT1Akn/GQQEIK/MqDoW3jJq54BhGp1nHXrO1jUYP09Tww590lv+2/4lK+4ZfHfSm7/yMIFc9fgBTT3FU9w6iKEAAAAASUVORK5CYII="},"70b2":function(t,e,n){"use strict";n("a249")},"71ce":function(t,e,n){},"7e66":function(t,e,n){"use strict";n("71ce")},"819f":function(t,e,n){},"836f":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[!t.content||t.content.desc_txt||t.content.title_txt?n("div",{staticClass:"flex justify-center align-start bg-ff flex-column title-text-wrap",style:{"text-align":t.content.text_align?t.content.text_align:"left","background-color":t.content.bg_color?t.content.bg_color:"transparent"}},[t.content&&t.content.title_txt?n("div",{staticClass:"main-title-con text-wrap",class:{title_text_large:"16"==t.content.title_font_size,title_text_middle:"14"==t.content.title_font_size,title_text_small:"12"==t.content.title_font_size,title_thickness_normal:"normal"==t.content.title_font_weight,title_thickness_bold:"bold"==t.content.title_font_weight},style:{color:t.content.title_color,"margin-bottom":t.content.desc_txt?"6px":""}},[n("span",[t._v(t._s(t.content.title_txt))])]):t._e(),t.content&&t.content.desc_txt?n("div",{staticClass:"describe-txt text-wrap",class:{title_text_large:"16"==t.content.desc_font_size,title_text_middle:"14"==t.content.desc_font_size,title_text_small:"12"==t.content.desc_font_size,title_thickness_normal:"normal"==t.content.desc_font_weight,title_thickness_bold:"bold"==t.content.desc_font_weight},style:{color:t.content.desc_color}},[n("span",[t._v(t._s(t.content.desc_txt))])]):t._e()]):n("div",{style:{"text-align":t.content.text_align?t.content.text_align:"left","background-color":t.content.bg_color?t.content.bg_color:"transparent"}},[n("div",{staticClass:"def-title"},[n("strong",[t._v(t._s(t.L("主标题")))])]),n("div",{staticClass:"def-subtitle"},[t._v(t._s(t.L("我是副标题")))])]),t.content&&t.content.show_bottom_line&&1==t.content.show_bottom_line?n("div",{staticClass:"line-bottom"}):t._e()])},i=[],a={props:{content:{type:[String,Object],default:""}},data:function(){return{}}},c=a,o=(n("70b2"),n("2877")),l=Object(o["a"])(c,s,i,!1,null,"585d8666",null);e["default"]=l.exports},"8def":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"wrap"},[t.cudeSelectedShow?s("div",{staticClass:"decorate-cube flex",style:{width:t.cubeWidth+"px",height:t.contentHeight+"px"}},[s("div",{staticClass:"cube-row-wrap",style:{width:t.cubeWidth-2*Number(t.content.page_distance)+"px",height:t.contentHeight+"px",left:t.content.page_distance+"px"}},t._l(t.content.list,(function(e,n){return s("div",{key:n+"_"+n,staticClass:"cube-selected",style:{width:t.getCubeSelectedWidth(e)+"px",height:t.getCubeSelectedHeight(e)+"px",overflow:"hidden",top:t.getCubeSelectedTop(e)+"px",left:t.getCubeSelectedLeft(e)+"px"}},[e.image?s("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:e.image,alt:""}}):t._e()])})),0)]):s("div",{staticClass:"magic-square-wrap flex align-center justify-center flex-column"},[s("img",{attrs:{src:n("9471"),alt:""}}),s("span",{staticClass:"tips-text"},[t._v(t._s(t.L("点击编辑魔方")))])])])},i=[],a=(n("a9e3"),n("4de4"),n("d3b7"),n("d81d"),n("4e82"),{props:{content:{type:[String,Object],default:""}},data:function(){return{cubeWidth:375,cubeHeight:375}},updated:function(){this.cubeWidth=this.$refs.wrap.clientWidth,this.cubeHeight=this.$refs.wrap.clientWidth},computed:{densityNum:function(){var t=this.content.density||2;return parseInt(t)},cubeItemHeight:function(){return this.cubeHeight/this.densityNum},cubeItemWidth:function(){return(this.cubeWidth-2*Number(this.content.page_distance))/this.densityNum},cudeSelectedShow:function(){var t=this.content&&this.content.list&&this.content.list.length?this.content.list:[];return t.length&&(t=t.filter((function(t){return t.image}))||[]),!!t.length},contentHeight:function(){var t=this.content&&this.content.list&&this.content.list.length?this.content.list:[],e=[];t.length&&(e=t.map((function(t){return t.image?Math.max(t.start.x,t.end.x):""}))||[]);var n=0;return e.length&&(n=e.sort((function(t,e){return t-e}))[e.length-1]-0),this.cudeSelectedShow?n*this.cubeItemHeight:this.cubeHeight}},methods:{getCubeSelectedWidth:function(t){return(parseInt(t.end.y)-parseInt(t.start.y)+1)*this.cubeItemWidth-Number(this.content.img_distance)},getCubeSelectedHeight:function(t){return(parseInt(t.end.x)-parseInt(t.start.x)+1)*this.cubeItemHeight-Number(this.content.img_distance)},getCubeSelectedTop:function(t){return(t.start.x-1)*this.cubeItemHeight+Number(this.content.img_distance)/2},getCubeSelectedLeft:function(t){return(t.start.y-1)*this.cubeItemWidth+Number(this.content.img_distance)/2}}}),c=a,o=(n("04ad"),n("2877")),l=Object(o["a"])(c,s,i,!1,null,"32e92d5e",null);e["default"]=l.exports},9471:function(t,e){t.exports="data:image/png;base64,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"},a032:function(t,e,n){},a249:function(t,e,n){},b811:function(t,e,n){},b95a:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAYAAACbU/80AAAB7klEQVRIS8WWv2sTYRzGn+fNWaV/QS/XyyXWoZhFC4oQB6mC4Og/UOqmiy5OTi5ODuLiVhVdBHHRwbEq6CBO4g9Ia+Jdcg4ZCiUgYu995MTWEk2bNMflOx0v9+X5PM+9931ffomi40aFeyBmARD5lAiswGqRjaj9iWAqPobSCptRbHN03mtSKYDGYH1LchCAx5KekKYG6FLWae0CoNdl36tt4jZb7SWIi1kmtjMAeac87aauf1cjii8TuJUbAIHWhMM513U79Xp9v3NgcpngiUEASHQlPQJ5BkLQr2fXPSCgQ+AlhKMgDg4iDqCTIDk94/vvwzg+axM83zPAgIJ/XxPWKcwHQfFdurj6tX2yYPgqL4DvQnKu4vvLm4J5AmzQmPOBN/V0u9uMAfgGwA9Ap3oitQQWAr/4sDfqzAAI1Lvra3PVarUbtr5dtNJNAJMAJOBKxS/e/t93zgRAws8CWCuV3LdbM6ERzxoHDwA+C3z3er9NlgkAhGvlUvHGPyeJ5JDc2OlPyQCAL4LpqXmS6ak5dI0KsJYYHZnxvHBo5T8NIwHI8ELFc+/uVXz0QSQtWanvGN0OZoyZIGHSNWvpwGhf+kzpEMCreU3CocMa65WMhGUzjD+AODw0ehYNwkeuhuGxApz7eV/LIXw24MIvxbz6+o4+aTAAAAAASUVORK5CYII="},bd28:function(t,e){t.exports="data:image/png;base64,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"},be45:function(t,e,n){"use strict";n("a032")},bfc5:function(t,e,n){"use strict";n("819f")},c32b:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrap",style:{padding:"1"==t.content.show_distance?Number(t.content.page_distance)/2+"px":0}},[s("div",{staticClass:"swiper-wrap",class:{"swiper-wrap-border-radius":"1"==t.content.show_distance}},[t.content&&t.content.list&&t.content.list.length&&!t.content.list[0]["image"]?s("img",{staticClass:"defImg",attrs:{src:n("bd28"),alt:""}}):s("img",{staticClass:"list-img",attrs:{src:t.content&&t.content.list&&t.content.list.length&&t.content.list[0]["image"],alt:""}}),s("div",{staticClass:"swiper-dots-wrap"},[s("span",{staticClass:"swiper-dots active",style:{background:t.pageMainColor}}),s("span",{staticClass:"swiper-dots"})])])])},i=[],a={props:{content:{type:[String,Object],default:""}},computed:{pageMainColor:function(){return this.$store.state.customPage.pageMainColor||"#ffffff"}}},c=a,o=(n("be45"),n("2877")),l=Object(o["a"])(c,s,i,!1,null,"33ecc008",null);e["default"]=l.exports},c459:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAABf0lEQVQ4T7WTPUucQRSFz5mPSNIFLNzdgBAr8ydiRAKSKmWCKeJ29vkV1oq7764pFC2tQiBIkv8hSALurkUgXcTMx5F5VViIC0vAaWa4cx/OuXPvEDdre3v3qXX5GMCT29gd+1mKZmVjY/203PE2od/vN2PUPoi5ibBw7hzX2u32sIZ7vd68JBNCoPf+cc7WTYKNSTGE8Nt7L5KZnW7vBICVIEJ/QWqysijwAVk7TgX+IalV2zAcQYgTYcIpq1HnkgN2u93nWWavBJzFG0nDGF2t7lzk+JlkMyYcljvD/I6dTmcBsF+u1dKL0Wg0bLVaczFGhRB+ee9nnXMcDAbnjUajCdhvN7kvWVXVYhY/lUBOdjnnP8n5mQMJl8r4QINNEjMxXL415pE1Nn29Vtarf+BiNYvfIVxIfE/qI4iHhloqJdwf/H+2BU39YCxdHatZgpu2VSRiDe/s7D4j02cBzWmHhMBQsqvcqqpFl3kEYr50YPyz3DFpZXgyhJ/R6PUVFYETLrpqeewAAAAASUVORK5CYII="},d28d:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"swiperNavWrap",staticClass:"wrap"},t._l(t.list,(function(e,s){return n("div",{key:s,staticClass:"swiper-nav-wrap"},[n("div",{directives:[{name:"show",rawName:"v-show",value:0==s,expression:"index == 0"}],staticClass:"flex flex-wrap"},t._l(e,(function(e,s){return n("div",{key:s,staticClass:"swiper-nav-item flex flex-column align-center",class:"2"==t.content.style_type?"small-swiper-nav-item":""},[n("div",{staticClass:"subItem-image-wrap flex align-center justify-center",style:{height:"2"==t.content.style_type?"auto":t.swiperItemHeight+"px",width:"2"==t.content.style_type?"24px":"100%"}},[e.image?n("img",{class:"2"==t.content.style_type?"subItem-small-image":"subItem-image",attrs:{src:e.image,alt:""}}):n("img",{class:"2"==t.content.style_type?"subItem-small-image":"subItem-image",attrs:{src:"2"==t.content.style_type?t.defaultSmallImage:t.defaultImage,alt:""}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.show_badge&&"1"==e.show_badge&&""!=e.badge_val.trim(),expression:"subItem.show_badge && subItem.show_badge == '1' && subItem.badge_val.trim() != ''"}],staticClass:"badge"},[n("span",[t._v(t._s(e.badge_val.trim()))])])]),n("span",{staticClass:"swiper-nav-title text-nowrap text-els"},[t._v(t._s(e.title))])])})),0)])})),0)},i=[],a=(n("a9e3"),n("fb6a"),{props:{content:{type:[String,Object],default:""}},data:function(){return{defaultImage:n("5281"),defaultSmallImage:n("b95a"),demoList:[[{title:this.L("标题X1",{X1:1}),link_url:"",image:"",show_badge:"2",badge_val:""},{title:this.L("标题X1",{X1:2}),link_url:"",image:"",show_badge:"2",badge_val:""},{title:this.L("标题X1",{X1:3}),link_url:"",image:"",show_badge:"2",badge_val:""},{title:this.L("标题X1",{X1:4}),link_url:"",image:"",show_badge:"2",badge_val:""},{title:this.L("标题X1",{X1:5}),link_url:"",image:"",show_badge:"2",badge_val:""}]],swiperItemHeight:0}},computed:{list:function(){var t=[];return t=!this.content||this.content&&this.content.list&&!this.content.list.length?this.demoList:this.getSlider(this.content.list,this.content.show_column),t}},mounted:function(){var t=375;this.$refs.swiperNavWrap.clientWidth&&(t=this.$refs.swiperNavWrap.clientWidth),this.swiperItemHeight=t/5-24},methods:{getSlider:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=5*Number(e),s=t.length/n,i=[];if(s)for(var a=0;a<s;a++)i[a]=t.slice(a*n,(a+1)*n),a+1==s&&s*n<t.length&&(i[s]=t.slice(s*n));return i}}}),c=a,o=(n("f6a6"),n("2877")),l=Object(o["a"])(c,s,i,!1,null,"19e76838",null);e["default"]=l.exports},f6a6:function(t,e,n){"use strict";n("4229")},fdce:function(t,e,n){}}]);