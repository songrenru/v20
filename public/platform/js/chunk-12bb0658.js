(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12bb0658"],{"23fa":function(e,t,a){"use strict";a("5c5f")},"5c5f":function(e,t,a){},"7c51":function(e,t,a){"use strict";a("a0e5")},a0e5:function(e,t,a){},b59a:function(e,t,a){"use strict";var r={getSelectProvince:"/common/platform.area.area/getSelectProvince",getSelectCity:"/common/platform.area.area/getSelectCity",getSelectArea:"/common/platform.area.area/getSelectArea",getSelectPropertyProvince:"/merchant/merchant.system.area/getProvinceList",getSelectPropertyCity:"/merchant/merchant.system.area/getCityList",getSelectPropertyArea:"/merchant/merchant.system.area/getAreaList",getSelectStreet:"/common/platform.area.area/getSelectStreet",getSelectProvinceAndCity:"/common/platform.area.area/getSelectProvinceAndCity"};t["a"]=r},f94a:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main user-layout-register",staticStyle:{width:"428px"}},[e._m(0),a("a-form",{ref:"formRegister",attrs:{form:e.form,id:"formRegister"}},[a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["villageName",{initialValue:e.register_data.villageName,rules:[{required:!0,message:"请输入小区名称"}]}],expression:"['villageName', {initialValue:register_data.villageName,rules: [{ required: true, message: '请输入小区名称' }]}]"}],attrs:{size:"large",type:"text",placeholder:"小区名称",autocomplete:"off"},on:{click:function(t){e.hide=!1}}})],1),a("a-form-item",{staticStyle:{position:"relative"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["villageAddress",{initialValue:e.register_data.villageAddress,rules:[{required:!0,message:"请选择小区地址"}]}],expression:"['villageAddress', {initialValue:register_data.villageAddress,rules: [{ required: true, message: '请选择小区地址' }]}]"}],attrs:{size:"large",type:"text",placeholder:"小区地址",autocomplete:"off",readOnly:""},on:{click:function(t){e.hide?e.hide=!1:e.hide=!0}}})],1),e.hide?a("a-form-item",{staticClass:"wrap",staticStyle:{"margin-top":"-25px"}},[e.showProvince?a("a-select",{staticStyle:{width:"115px"},attrs:{"default-value":e.search.provinceId},on:{change:e.handleProvinceChange},model:{value:e.search.provinceId,callback:function(t){e.$set(e.search,"provinceId",t)},expression:"search.provinceId"}},e._l(e.provinceData,(function(t){return a("a-select-option",{key:t.id,attrs:{value:t.id}},[e._v(" "+e._s(t.name)+" ")])})),1):e._e(),e.showCity?a("a-select",{staticStyle:{width:"115px"},on:{change:e.handleCityChange},model:{value:e.search.cityId,callback:function(t){e.$set(e.search,"cityId",t)},expression:"search.cityId"}},e._l(e.cityData,(function(t){return a("a-select-option",{key:t.name,attrs:{value:t.id}},[e._v(" "+e._s(t.name)+" ")])})),1):e._e(),e.showArea?a("a-select",{staticStyle:{width:"115px"},on:{change:e.handleAreaChange},model:{value:e.search.areaId,callback:function(t){e.$set(e.search,"areaId",t)},expression:"search.areaId"}},e._l(e.areaData,(function(t){return a("a-select-option",{key:t.name,attrs:{value:t.id}},[e._v(" "+e._s(t.name)+" ")])})),1):e._e()],1):e._e(),a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["propertyName",{initialValue:e.register_data.propertyName,rules:[{required:!0,message:"请输入物业公司名称"}]}],expression:"['propertyName', {initialValue:register_data.propertyName,rules: [{ required: true, message: '请输入物业公司名称' }]}]"}],attrs:{size:"large",type:"text",autocomplete:"off",placeholder:"物业公司名称"},on:{click:function(t){e.hide=!1}}})],1),a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["propertyAdder",{initialValue:e.register_data.propertyAdder,rules:[{required:!0,message:"请输入物业公司名称"}]}],expression:"['propertyAdder', {initialValue:register_data.propertyAdder,rules: [{ required: true, message: '请输入物业公司名称' }]}]"}],attrs:{size:"large",type:"text",autocomplete:"off",placeholder:"物业联系地址"},on:{click:function(t){e.hide=!1}}})],1),a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["propertyTel",{initialValue:e.register_data.propertyTel,rules:[{required:!0,message:"请输入物业公司电话"}]}],expression:"['propertyTel', {initialValue:register_data.propertyTel,rules: [{ required: true, message: '请输入物业公司电话' }]}]"}],attrs:{size:"large",type:"text",placeholder:"物业联系电话",autocomplete:"off"},on:{click:function(t){e.hide=!1}}})],1),a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["account",{initialValue:e.register_data.account,rules:[{required:!0,message:"请输入物业后台帐号"}]}],expression:"['account', {initialValue:register_data.account,rules: [{ required: true, message: '请输入物业后台帐号' }]}]"}],attrs:{size:"large",type:"text",placeholder:"物业后台帐号",autocomplete:"off"},on:{click:function(t){e.hide=!1}}})],1),a("a-popover",{attrs:{placement:"rightTop",trigger:["focus"],getPopupContainer:function(e){return e.parentElement}},on:{click:function(t){e.hide=!1}},model:{value:e.state.passwordLevelChecked,callback:function(t){e.$set(e.state,"passwordLevelChecked",t)},expression:"state.passwordLevelChecked"}},[a("template",{slot:"content"},[a("div",{style:{width:"240px"}},[a("div",{class:["user-register",e.passwordLevelClass]},[e._v("强度："),a("span",[e._v(e._s(e.passwordLevelName))])]),a("a-progress",{attrs:{percent:e.state.percent,showInfo:!1,strokeColor:e.passwordLevelColor}}),a("div",{staticStyle:{"margin-top":"10px"}},[a("span",[e._v("请至少输入 6 个字符。请不要使用容易被猜到的密码。")])])],1)]),a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:"至少6位密码，区分大小写"},{validator:this.handlePasswordLevel}],validateTrigger:["change","blur"]}],expression:"['password', {rules: [{ required: true, message: '至少6位密码，区分大小写'}, { validator: this.handlePasswordLevel }], validateTrigger: ['change', 'blur']}]"}],attrs:{size:"large",type:"password",autocomplete:"off",placeholder:"至少6位密码，区分大小写"},on:{click:e.handlePasswordInputClick}})],1),a("a",{staticStyle:{color:"#b61d1d"},on:{click:e.likeClick}},[a("div",{staticClass:"but-t"},[a("div",{staticClass:"but-pack"},[e._v("选择套餐")]),e.package_title?a("div",{staticClass:"but-x"},[e._v("已选："+e._s(e.package_price)+" "+e._s(e.package_title)+" >")]):e._e()])])],2),a("a-form-item",[a("a-button",{staticClass:"register-button",staticStyle:{width:"100%"},attrs:{size:"large",type:"primary",htmlType:"submit",loading:e.registerBtn,disabled:e.registerBtn},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit(t)}}},[e._v("注册 ")])],1),a("div",{staticClass:"user",staticStyle:{"text-align":"center","margin-bottom":"15px"}},[a("label",{staticStyle:{color:"#ccc"}},[e._v("注册即表示同意"),a("router-link",{staticStyle:{color:"#ccc"},attrs:{to:{name:"communityLogin"}}},[e._v("《小区注册协议》")])],1)]),a("div",{staticClass:"user-login-others",staticStyle:{"text-align":"center"}},[a("router-link",{staticStyle:{color:"#b61d1d"},attrs:{to:{name:"communityLogin",query:e.queryParam}}},[e._v("使用已有账户登录")])],1)],1)],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h3",{staticStyle:{"text-align":"center",color:"#1890ff"}},[a("span",[e._v("账户注册")]),a("div",{staticClass:"lines"})])}],s=a("5530"),o=(a("ac1f"),a("841c"),a("7db0"),a("b0c0"),a("99af"),a("498a"),a("ac0d")),c=a("64e6"),n=a("b59a"),l=(a("e37c"),{0:"低",1:"低",2:"中",3:"强"}),d={0:"error",1:"error",2:"warning",3:"success"},h={0:"#ff0000",1:"#ff0000",2:"#ff7e05",3:"#52c41a"},p=[{id:"0",name:"请选择省份"}],u=[{id:"0",name:"请选择城市"}],m=[{id:"0",name:"请选择区域"}],v={name:"Register",components:{},mixins:[o["c"]],data:function(){return{form:this.$form.createForm(this),hide:!1,provinceData:p,showProvince:0,cityData:u,showCity:0,areaData:m,showArea:0,search:{provinceId:"0",cityId:"0",areaId:"0"},adderss:{province:"",city:"",area:"",infos:""},state:{time:60,smsSendBtn:!1,passwordLevel:0,passwordLevelChecked:!1,percent:10,progressColor:"#FF0000"},registerBtn:!1,package_id:"",package_price:"",package_title:"",register_data:{villageName:"",villageAddress:"",propertyName:"",propertyAdder:"",propertyTel:"",account:""},queryParam:{}}},computed:{passwordLevelClass:function(){return d[this.state.passwordLevel]},passwordLevelName:function(){return l[this.state.passwordLevel]},passwordLevelColor:function(){return h[this.state.passwordLevel]}},activated:function(){this.queryParam=this.$route.query,this.package_id=this.$route.params.id,this.package_price=this.$route.params.title,this.package_title=this.$route.params.price,console.log(this.$route.params.id),console.log(this.$route.params.title),console.log(this.$route.params.price);var e=sessionStorage.getItem("register_data"),t=JSON.parse(e);t&&t.time+1800<Math.round(new Date/1e3)?sessionStorage.removeItem("register_data"):t&&(this.register_data=t,this.search.provinceId=t.provinceId,this.search.cityId=t.cityId,this.search.areaId=t.areaId,this.adderss.province=t.province,this.adderss.city=t.city,this.adderss.area=t.area,this.register_data.villageAddress=t.province+t.city+t.area),this.getProvince(),this.getCity(),this.getArea()},mounted:function(){this.queryParam=this.$route.query},methods:{likeClick:function(){var e=this,t=this.form.validateFields;t({force:!0},(function(t,a){var r={};r.provinceId=e.search.provinceId,r.cityId=e.search.cityId,r.areaId=e.search.areaId,r.province=e.adderss.province,r.city=e.adderss.city,r.area=e.adderss.area,r.package_id=e.package_id,r.propertyAdder=a.propertyAdder,r.propertyName=a.propertyName,r.propertyTel=a.propertyTel,r.villageName=a.villageName,r.account=a.account,r.time=Math.round(new Date/1e3),sessionStorage.setItem("register_data",JSON.stringify(r))})),this.$router.push({name:"communityPackages",query:this.queryParam})},handlePasswordLevel:function(e,t,a){var r=0;/[0-9]/.test(t)&&r++,/[a-zA-Z]/.test(t)&&r++,/[^0-9a-zA-Z_]/.test(t)&&r++,this.state.passwordLevel=r,this.state.percent=30*r,r>=2?(r>=3&&(this.state.percent=100),a()):(0===r&&(this.state.percent=10),a(new Error("密码强度不够")))},handleProvinceChange:function(e){this.search.provinceId=e;var t={};t=this.provinceData.find((function(t){return t.id===e})),this.adderss.province=t.name,this.getCity(),this.$emit("handleSelect",this.search)},handleCityChange:function(e){this.search.cityId=e;var t={};t=this.cityData.find((function(t){return t.id===e})),this.adderss.city=t.name,this.getArea(),this.$emit("handleSelect",this.search)},handleAreaChange:function(e){var t={};t=this.areaData.find((function(t){return t.id===e})),this.adderss.area=t.name,0==this.search.provinceId||0==this.search.cityId||0==this.search.areaId?this.adderss.infos="":this.adderss.infos=this.adderss.province+this.adderss.city+this.adderss.area,this.hide=!1,this.search.areaId=e,this.$emit("handleSelect",this.search),this.form.setFieldsValue({villageAddress:this.adderss.province+this.adderss.city+this.adderss.area})},getProvince:function(){var e=this;this.request(n["a"].getSelectPropertyProvince).then((function(t){console.log(t.list),e.provinceData=[{id:"0",name:"请选择省份"}],0==t.error&&(e.provinceData=e.provinceData.concat(t.list)),e.showProvince=1}))},getCity:function(){var e=this;this.search.provinceId>0?this.request(n["a"].getSelectPropertyCity,{id:this.search.provinceId,type:2}).then((function(t){console.log(t),e.cityData=[{id:"0",name:"请选择城市"}],0==t.error&&(e.cityData=e.cityData.concat(t.list))})):this.cityData=[{id:"0",name:"请选择城市"}],this.showCity=1},getArea:function(){var e=this,t={id:this.search.cityId,type:3};this.search.cityId>0?this.request(n["a"].getSelectPropertyArea,t).then((function(t){e.areaData=[{id:"0",name:"请选择区域"}],0==t.error&&(e.areaData=e.areaData.concat(t.list)),e.showArea=1})):this.areaData=[{id:"0",name:"请选择区域"}],this.showArea=1},handlePasswordCheck:function(e,t,a){var r=this.form.getFieldValue("password");console.log("value",t),void 0===t&&a(new Error("请输入密码")),t&&r&&t.trim()!==r.trim()&&a(new Error("两次密码不一致")),a()},handlePhoneCheck:function(e,t,a){console.log("handlePhoneCheck, rule:",e),console.log("handlePhoneCheck, value",t),console.log("handlePhoneCheck, callback",a),a()},handlePasswordInputClick:function(){this.isMobile()?this.state.passwordLevelChecked=!1:this.state.passwordLevelChecked=!0},handleSubmit:function(){var e=this,t=this.form.validateFields,a=this.state,r=this.$router;t({force:!0},(function(t,i){i.provinceId=e.search.provinceId,i.cityId=e.search.cityId,i.areaId=e.search.areaId,i.villageAddress=e.adderss.province+e.adderss.city+e.adderss.area,i.package_id=e.package_id,console.log(t),console.log(i),t||(a.passwordLevelChecked=!1,e.request(c["a"].regCheck,i).then((function(t){t&&(sessionStorage.removeItem("register_data"),e.$notification.success({message:"恭喜您注册成功"}),r.push({name:"communityLogin",params:Object(s["a"])({},i)}))})))}))},requestFailed:function(e){this.$notification["error"]({message:"错误",description:((e.response||{}).data||{}).message||"请求出现错误，请稍后再试",duration:4}),this.registerBtn=!1}},watch:{"state.passwordLevel":function(e){console.log(e)},hide:function(e){}}},g=v,f=(a("7c51"),a("23fa"),a("2877")),y=Object(f["a"])(g,r,i,!1,null,"13112572",null);t["default"]=y.exports}}]);