(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f0493710","chunk-2d0aaba6","chunk-2d21d833"],{"11f6":function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAECAYAAACDQW/RAAAAAXNSR0IArs4c6QAAAEFJREFUKFNjZNUNSWf6z9Dyn/E/y/9/DAW/r65dyAAFpMgxsukGv2dkYBQA6/3P8ObnlTWiMINIkaOeQaQ4H5+3AV+sVK3HF5AUAAAAAElFTkSuQmCC"},"5b29":function(t,i,s){"use strict";s("d7aa")},"6ca1f":function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"view_component"},[e("div",{staticClass:"single_desc"},[e("a-button",{staticClass:"margin_top_20",staticStyle:{transform:"translateX(20px)"},attrs:{type:"default"},on:{click:function(i){return t.goBack(0)}}},[t._v(" 返回 ")]),t._l(t.descList,(function(i,s){return e("div",{key:s,staticClass:"single_item"},[t._v(" "+t._s(i.key)+"："+t._s(i.value?i.value:"暂无")+" ")])}))],2),e("div",{staticClass:"unit_tab"},t._l(t.unitList,(function(i,s){return e("div",{key:s,staticClass:"tab_item",class:t.currentIndex==s?"active":"",on:{click:function(e){return t.changeTabs(i,s)}}},[t._v(" "+t._s(i.floor_name)+"单元 ")])})),0),e("div",{staticClass:"single_level"},t._l(t.singleArr,(function(i,a){return e("div",{key:a,staticClass:"level_item"},[e("div",{staticClass:"level_name"},[t._v(t._s(i.level))]),t._l(i.roomList,(function(i,a){return e("div",{key:a,staticClass:"room_item",on:{click:function(s){return t.goDetail(i)}}},[e("div",{staticClass:"left_status"},[t._m(0,!0),e("div",{staticClass:"home_name"},[t._v(t._s(i.status_txt))])]),e("div",{staticClass:"right_content"},[e("div",{staticClass:"room_title"},[t._v(t._s(i.title))]),i.pay_status_txt?e("div",{staticClass:"room_status"}):t._e(),e("div",{staticClass:"room_edit"},[e("a-popover",{attrs:{title:"",placement:"right"}},[e("template",{slot:"content"},[e("a-icon",{attrs:{type:"edit"},on:{click:function(s){return t.showModel(i)}}})],1),e("img",{attrs:{src:s("11f6")}})],2)],1),e("div",{staticClass:"props_con"},t._l(i.roomProps,(function(i,s){return e("div",{key:s,staticClass:"props_item",style:{width:"欠费金额"==i.key?"75%":"45%"}},["欠费金额"!=i.key||i.value?e("span",{staticStyle:{"font-size":"12rpx"},style:{color:"欠费金额"==i.key?"red":""}},["户主"!=i.key&&"面积"!=i.key?e("block",[t._v(t._s(i.key)+"：")]):t._e(),t._v(" "+t._s(i.value?i.value:"暂无"))],1):t._e()])})),0)])])}))],2)})),0),e("a-modal",{attrs:{title:"修改欠费状态",visible:t.visible,"confirm-loading":t.confirmLoading},on:{ok:t.handleOk,cancel:t.handleCancel}},[e("span",[t._v("欠费状态")]),e("a-radio-group",{staticStyle:{"margin-left":"20px"},attrs:{name:"radioGroup"},model:{value:t.pay_status,callback:function(i){t.pay_status=i},expression:"pay_status"}},[e("a-radio",{attrs:{value:1}},[t._v("欠费")]),e("a-radio",{attrs:{value:2}},[t._v("未欠费")])],1)],1)],1)},a=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"home_icon"},[e("img",{attrs:{src:s("d22a")}})])}],n=(s("a9e3"),{props:{single_id:{type:Number,default:0}},data:function(){return{currentIndex:0,descList:[],unitList:[],singleArr:[],visible:!1,confirmLoading:!1,pay_status:1}},mounted:function(){this.getUnitList(),this.getBuildingInfo()},methods:{changeTabs:function(t,i){this.currentIndex==i?console.log("重复"):(this.currentIndex=i,this.getRoomList(t.floor_id,t.single_id))},goBack:function(){this.$emit("goBack")},getUnitList:function(){var t=this;t.request("/community/village_api.cashier/getfloorList",{single_id:t.single_id},"post").then((function(i){i.length>0&&(t.unitList=i,t.getRoomList(i[0].floor_id,i[0].single_id),t.currentIndex)}))},getRoomList:function(t,i){var s=this;s.request("/community/village_api.cashier/getVacancyList",{single_id:i,floor_id:t},"post").then((function(t){s.singleArr=t}))},goDetail:function(t){var i={};t.pigcms_id&&(i.pigcms_id=t.pigcms_id),t.key[3]&&(i.room_id=[t.key[3]+"|"+t.title+"|room"]),t.key.length>0&&(i.room_key=t.key),this.$emit("roomInfo",i)},getBuildingInfo:function(){var t=this;t.request("/community/village_api.Aockpit/getBuildingInfo",{single_id:t.single_id},"post").then((function(i){t.descList=i.list}))},handleOk:function(t){this.confirmLoading=!0;var i=this;i.request("/community/village_api.Cashier/setVacancyPayStatus",{room_id:i.room_id,pay_status:i.pay_status},"post").then((function(t){i.$message.success("修改成功！"),i.getRoomList(i.unitList[i.currentIndex].floor_id,i.unitList[i.currentIndex].single_id),i.confirmLoading=!1,i.visible=!1}))},handleCancel:function(t){this.visible=!1},showModel:function(t){t.pay_status_txt?this.pay_status=1:this.pay_status=2,this.room_id=t.key[3],this.visible=!0}}}),o=n,r=(s("5b29"),s("2877")),c=Object(r["a"])(o,e,a,!1,null,"80be41a6",null);i["default"]=c.exports},d22a:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAhCAYAAABa+rIoAAAAAXNSR0IArs4c6QAABPdJREFUWEe9mFeIXVUUhr9lr6hRFOwd24NdxN5FLKAo9hgriCIS20N8EpTYQMVEE2wxiBpLjDX6IAZRNHbRYI3mQbEkMcYaY7Z8wzrDmZt77tx7M7hf5t6ZOed8e61//WvtE/S5SikB7ACcBZwEbAusASwE3gMeBp6PiEV9PgIf0PMqpawE7AOMBY4BVgV+Af4C1gPWAb4DHgDujYgfen4I9A6XYPsC1wBHAN8DjwIvA78C2wGnJfQfCTihH8CeItcCdjjwBXAX8EJGrgCrAFsD5wOjgb+Bh4C7ewXsGi7B9gOuAgT7ErhDXQkWEYINrFLKysA2wAXAeQk4pVfAruA6gBmxhXWwGqARFLAeQYuk6wgOC1dL5dXAYRmxO4EXgQXtwFoAreIxmWILRsCuNNgRrgZmKgX7GhDMiHUEqwFayQKaXjXYNWAjXA1Mu1BjFZgRm98pYq22UUoR0CoW8Fzgz4zgxE5F0hau5mOV+AWrqtKILevVtxoALZJ7mgCXg2sxWH1sboJZlX2BtaTYCKrBczKC2oyAP7ZueAhcgu2dzn9UptKIrTBYC+D2NUCN+sHsJEMAB+ESbK8EO7oWsedWNGINGhRQmzkbqDrJpHoEB+ASbM8EO7YG9myv4u9WizUNXpiAvwP3AZMj4ifvEwm2ezr/cQk2OXvmPGBORLiztiunk7Wz4VuV/u+iiLBtNV3j4LAR4HPXAg4BzgQEnCSkgMJVETu+FrEPgeuyX44HvmpXoaWUNYHdgAOyG6wmGPAR8AYwr8N1hwJXAm8CT6UGK8CJwP3CTQVOBL5Jg30SUA+Pp2FaWbMj4t96GEopghwEnAJsADgW6V+jgPUBN+g93Nhg300ZOVadAdwKvASY2k2ASzOCvwG3CfdpNuYJwLTcuRXrZ1OjcQq3tAVuR+DyTOfTOWAKtzFgQe0PvApMiQgfNrhKKcI5pFZwdg7loM14T4P1mnB++TntYrG7LKU4SDbCpc5MwcnAdNMSEerF4rLItgIuBjYFxkfEnOHgImJxbZpxsp4rielZVo9MF3AKX03aMzXQt9qk/HRAHVt9r3QDV9uc4/7SpvY1XORWT7gtE252GzinYdNj5c3sFq7+f/3CeZ06MTJPADMqu8m0bgZclBV8S0R8/L/BZfh3Ba5QZqlPC8txyMp1irH9mW7T6tmiY0GouVZT7CtyCacutBGF/0/62gLAKlYWnwG3A+83WMmQah0xuGw96u3IrFg/e15dktbiGeJd4DHgndYW2M5KRgQuy32X7Ie2H09gs/Knad0Q2AM4MA/Z9udntKsqgiMJZ4d4u7KaUsoW2XZMn17oyD744Ey5h5vqbYDt0QhOqxWNJuw8d3N2iNG9RM7RydZjg/Z493pELMl0OuackH+f3ir2StRZtfqgVetGboqIAcsppdj0/f24NP8xlYl3YyW2EXvuTsD1wCOpKaPmIOB07GuGb5smj4RQewcDlwAf2C8Be/TOwA15aHLQHNtuQGiqVivRvmdFfZI30hbsl5fl6wd1ZC8dbm2ejd2iMVJajwZ9rUOsrzUiwnsttzqdvjzdawWK+/Mca5wc/K7x+iZpyLTRQLluvjdxmJiRzV1ZGFXfsYyLCF8C9QSn3hw+3aFARtPNePIyYkNGqGHCZy+uXz8/K/jGTtLo5lCtmE9NfThlOCj0s9yUk4vm7HA5MyL0xsb1H5iuZKpzFJzyAAAAAElFTkSuQmCC"},d7aa:function(t,i,s){}}]);