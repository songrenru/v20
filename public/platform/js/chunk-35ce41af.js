(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35ce41af"],{"0c98":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABFUlEQVQ4T6XTvyvFURjH8dcNfwEGE2WyWFn8iEFKShkNZPIH6I4yyh9gEoNRKSkZyI+F1WJSTAbXX4DSczsn324395SzPufz7jzP8z41/zy1NvkhbGAE86l+jifs4aWaaQWsYh/LuMVHutyLSRxjHYcZUgVMYAbbHbrawhXu4l4G9OENPYUj+cQAGhmwixucFQIWMIXNDLjACt4LAf04wlwGfKE7hacRfbY7MZ/rVGhmMiB6yv2XApqZDDjFWmVtnTqJtR5gMQN2cI+TTslUX8I46hkQ9j2jqxDwjeGwsipSWDhYKNJrtrFV5bAxLIsnPlTWGmsbSy2GrU0LqyZWXx5W1jGK2VS4xCNiVo2/PlPhCH6v/QDddDIRAGtWtQAAAABJRU5ErkJggg=="},"0cca":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("a-modal",{attrs:{title:"选择企业成员",width:850,height:588,visible:t.visible,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[e("div",{staticClass:"container"},[e("div",{staticClass:"box_left"},[t.isSearch?e("a-input-search",{staticStyle:{"margin-bottom":"8px"},attrs:{placeholder:"搜索成员"},on:{search:t.onSearch}}):t._e(),e("a-tree",{attrs:{blockNode:t.blockNode,multiple:"","tree-data":t.treeData,"show-icon":"","default-expand-all":"",selectedKeys:t.enterprise_staff_arr},on:{select:t.onSelect}},[e("a-icon",{attrs:{slot:"switcherIcon",type:"down"},slot:"switcherIcon"}),e("a-icon",{attrs:{slot:"cluster",type:"cluster"},slot:"cluster"}),e("a-icon",{attrs:{slot:"user",type:"user"},slot:"user"})],1)],1),e("div",{staticClass:"box_right"},[e("span",[t._v("已选择的成员")]),""==t.enterprise_staff_arr?e("a-empty",{staticClass:"a-empty",attrs:{image:t.simpleImage}}):e("a-list",{attrs:{"item-layout":"horizontal","data-source":t.enterprise_staff_arr},scopedSlots:t._u([{key:"renderItem",fn:function(a,i){return e("a-list-item",{},[e("div",{staticClass:"list_box",staticStyle:{width:"7%"}},[e("img",{attrs:{src:s("694d")}})]),e("div",{staticClass:"list_box",staticStyle:{width:"83%"}},[t._v(t._s(a.split("-")[1]))]),e("div",{staticClass:"list_box",staticStyle:{width:"10%"},on:{click:function(e){return t.delStaff(i)}}},[e("img",{staticStyle:{"margin-right":"5px"},attrs:{src:s("0c98")}})])])}}])})],1)])])},i=[],r=(s("74a0"),s("0ca7")),n=(s("cd5d"),s("c5cb"),s("a0e0")),c=s("ca00"),o=[{}],l={data:function(){return{visible:!1,confirmLoading:!1,enterprise_staff_arr:[],simpleImage:r["a"].PRESENTED_IMAGE_SIMPLE,blockNode:!0,treeData:o,tokenName:"",sysName:"",isSearch:!1,isSearchStaff:0}},methods:{onSearch:function(t){var e=this;console.log(t);var s={};this.tokenName&&(s["tokenName"]=this.tokenName),s["name"]=t,this.request(n["a"].getWorker,s).then((function(t){if(""!=t){var s=e.enterprise_staff_arr.indexOf(t);s<0&&e.enterprise_staff_arr.push(t),console.log("0416",e.enterprise_staff_arr)}}))},choose:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.isSearch=!1;var e=Object(c["i"])(location.hash);e?(this.tokenName=e+"_access_token",this.sysName=e):this.sysName="village",this.isSearchStaff=t,this.visible=!0,this.getTissueNav(),this.enterprise_staff_arr=[]},chooseSearch:function(){this.isSearch=!0,this.isSearchStaff=0;var t=Object(c["i"])(location.hash);t?(this.tokenName=t+"_access_token",this.sysName=t):this.sysName="village",this.visible=!0,this.getTissueNav(),this.enterprise_staff_arr=[]},getTissueNav:function(){var t=this,e={};this.tokenName&&(e["tokenName"]=this.tokenName),e["type_"]=1,this.request(n["a"].getTissueNav,e).then((function(e){t.treeData=e}))},onSelect:function(t,e){if(console.log(t),1==this.isSearchStaff&&t.length>1)return this.$message.warning("仅可选择一位成员"),!1;this.enterprise_staff_arr=t},delStaff:function(t){var e=this;console.log("enterprise_staff_arr",this.enterprise_staff_arr),e.enterprise_staff_arr=e.removeByIndex(e.enterprise_staff_arr,t)},removeByIndex:function(t,e){return t.filter((function(t,s){return e!==s}))},handleSubmit:function(){var t=this;t.visible=!1,t.$emit("change",this.enterprise_staff_arr)},handleCancel:function(){this.visible=!1}}},h=l,f=(s("649c"),s("0b56")),A=Object(f["a"])(h,a,i,!1,null,"729f65e3",null);e["default"]=A.exports},"649c":function(t,e,s){"use strict";s("eb01")},"694d":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+klEQVQ4T6XTvS5FQRTF8d+Ngl4ioRIK74DiKohaUHkBnwUPcKmFSHyVSgWNRnw0CpR6BVHxChqJTMxJjsk5ZyR2OXuv/6xZmd3yz2o16HswFPuv+KyarQNM4wDDUfSCFVylkCrACO5xjp0o2MAsxvFchlQBttGF9eS2XXRjOQe4xAnOEsAcDtGXAwTxE/YTwCpmMJEDdLCJAXzE4X68x/OtHCD0C8hdHG5XiUOvKsRC/IYyYPAvDgrxMZaSDI6wmELKDkbxgCnc1vzQSdxgDI/pE/ZicPOZ9TjFFxZSwAWuEaw21VoMuTcFhKRDFcHVQX7NNW1jxshP+xt2tSwRr0CjWQAAAABJRU5ErkJggg=="},eb01:function(t,e,s){}}]);