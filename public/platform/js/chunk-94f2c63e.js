(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-94f2c63e","chunk-295180e0","chunk-2d0b3786"],{"048c":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADqUlEQVRoQ+2ZXWwMURTH/2dnW0RKI213+yFKGh+JiGhEREgrCBERIR3xxDOpmX3wqhIvou2uhgdvHq0IEaEhghDxGV9BqiEIa6etSIOmZLtzZKYj6d5u25nuzCyy93XuPef3v+dj791L+McH/eP8+D8FVB/n+ekUqtyKTjqFrr4DpLllb6SdUREIx/gGgAYPnJ3SFNrj1G7oGO8ixnowDmkqvRfXZwgoj/JSifDEqRPb8xlzs0FkXd/CgfBMxEHYYX1/ryk0d1wB4Sg3gGBEwIvxXVNohi3DLRwMl+I0gO0Z8xmNmko3x0whDwV0povQ3LeX3kwkoP4kF30aRJyAbQJ8t6bSAscR0BTyrVPVdfCUgTTiTNgqgDICaNKa6exfK6CmnacNkZnzWwTINAXQlGymc9mil7G72VLIjwiEjvJ0KkYcjM0CZIp0yMkInR8r9fIuoOwIlwSnIA5gkwD5i3XIPRG6MF7d5FXArA6eUczmzm8UIAct+IsTFX3eBNRGuXQwgDgxNgiQA2DImkqXJoI3vudFQE07z0pLiDNjnQD5A4wmTaVOO/B5EVDVymV60Mz5tQLkNwKakgpdsQvvu4DQUa6gIhM+46zFQL+kQ/4coatO4H0VUBHjUAA4A2CNAPmVGXKPStecwvsmoCzKlcGA2W1WC5BfLPjrk4H3RUBNO1enjG4DrBIge61uk3E4cyrE0y5U1cazdcnM+ZUCWI9VsLfsAoejXDvhfcDNo0RlK8/h4W6zQoBMWseD23bgy09wnZTCYwAlAEZdijyJgLFbILNgl4+EZCAhMeTPKt2xA2/MCcf48shjRlBHzacIJf6sd11AKMrzaBi+XoD8qDPkXpXu2oW3BHDGfOFS46qA8nauk4xuAyzLcEr4YHYbhe47gfdVQHUbzzcKloGlAvw7s9so9NApvG8Cqlp5oXU8WCLAv6U0diYj9Ggy8L4IqIzyIh7O+cVCrr4hQE6qZHSQSY9wjL2tgXCMH4jdBoxuCZATKj2dNLm10FMBFTFeEgCeCZBdOiD3KvQ8V3jPU6i2haf+LEWv9SNj+HvFBLlnP71wA95zAaaDKO8G4SCAe9BxWIvQS7fgfRHgJmw2W57WgNfwhQgYO+DHH1vjRbKQQoUI5FjphRTKcQPdX+70QuM+QY4WxxNgPq8O4XWOLjxdLgWxILGPuv848fOZ1Q1hNzWFGkcayvr+ZT63AqVueHTLRhro78tyv/DtAc8tIaKdggCvdtau3d+cjBBPKZkkcgAAAABJRU5ErkJggg=="},"08ca":function(e,t,a){},"19bb":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",["text"==e.type?a("a-form-item",{attrs:{label:e.title,labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:e.tips}},[a("a-row",{attrs:{gutter:8}},[a("a-col",{attrs:{span:12}},[e.number?a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:e.value,rules:[{required:e.required,message:e.requiredMessage}]}],expression:"[name, { initialValue: value, rules: [{ required: required, message: requiredMessage }] }]"}],key:e.name,staticStyle:{width:"100%"},attrs:{precision:e.digits?0:e.precision,min:e.min,max:e.max,name:e.name,disabled:e.disabled,placeholder:e.placeholder}}):e.url?a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:e.value,rules:[{type:"url",message:"请输入正确的url地址"},{required:e.required,message:e.requiredMessage}]}],expression:"[\n            name,\n            {\n              initialValue: value,\n              rules: [\n                {\n                  type: 'url',\n                  message: '请输入正确的url地址',\n                },\n                { required: required, message: requiredMessage },\n              ],\n            },\n          ]"}],key:e.name,attrs:{disabled:e.disabled,name:e.name,placeholder:e.placeholder}}):a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:e.value,rules:[{required:e.required,message:e.requiredMessage}]}],expression:"[name, { initialValue: value, rules: [{ required: required, message: requiredMessage }] }]"}],key:e.name,attrs:{disabled:e.disabled,"max-length":e.maxlength,name:e.name,placeholder:e.placeholder}})],1)],1)],1):e._e(),"textarea"===e.type?a("a-form-item",{attrs:{label:e.title,labelCol:e.labelCol,disabled:e.disabled,wrapperCol:e.wrapperCol,extra:e.tips}},[a("a-row",{attrs:{gutter:8}},[a("a-col",{attrs:{span:12}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:e.value,rules:[{required:e.required,message:e.requiredMessage}]}],expression:"[name, { initialValue: value, rules: [{ required: required, message: requiredMessage }] }]"}],key:e.name,attrs:{rows:e.rows,name:e.name,placeholder:e.placeholder}})],1)],1)],1):e._e(),"switch"===e.type?a("a-form-item",{attrs:{label:e.title,disabled:e.disabled,labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:e.tips}},[a("a-row",{attrs:{gutter:8}},[a("a-col",{attrs:{span:22}},[a("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:"1"==e.value,valuePropName:"checked"}],expression:"[name, { initialValue: value == '1' ? true : false, valuePropName: 'checked' }]"}],key:e.name,attrs:{"checked-children":e.switchCheckedText,"un-checked-children":e.switchUncheckedText}})],1)],1)],1):e._e(),"radio"===e.type?a("a-form-item",{attrs:{label:e.title,disabled:e.disabled,labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:e.tips}},[a("a-row",{attrs:{gutter:8}},[a("a-col",{attrs:{span:12}},[a("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:e.value,rules:[{required:e.required,message:e.requiredMessage}]}],expression:"[name, { initialValue: value, rules: [{ required: required, message: requiredMessage }] }]"}],key:e.name,attrs:{name:e.name,options:e.selectArray}})],1)],1)],1):e._e(),"select"===e.type?a("a-form-item",{attrs:{disabled:e.disabled,label:e.title,labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:e.tips}},[a("a-row",{attrs:{gutter:8}},[a("a-col",{attrs:{span:12}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:e.value,rules:[{required:e.required,message:e.requiredMessage}]}],expression:"[name, { initialValue: value, rules: [{ required: required, message: requiredMessage }] }]"}],key:e.name,attrs:{name:e.name,placeholder:e.placeholder}},e._l(e.selectArray,(function(t){return a("a-select-option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label))])})),1)],1)],1)],1):e._e(),"selectAll"===e.type?a("a-form-item",{attrs:{disabled:e.disabled,label:e.title,labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:e.tips}},[a("a-row",{attrs:{gutter:8}},[a("a-col",{attrs:{span:12}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:e.value,rules:[{required:e.required,message:e.requiredMessage}]}],expression:"[name, { initialValue: value, rules: [{ required: required, message: requiredMessage }] }]"}],key:e.name,attrs:{mode:"multiple",name:e.name,placeholder:e.placeholder}},e._l(e.selectArray,(function(t){return a("a-select-option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label))])})),1)],1)],1)],1):e._e(),"time"===e.type?a("a-form-item",{attrs:{label:e.title,labelCol:e.labelCol,disabled:e.disabled,wrapperCol:e.wrapperCol,extra:e.tips}},[a("a-row",{attrs:{gutter:8}},[a("a-col",{attrs:{span:12}},[a("a-time-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:""==e.value?null:e.moment(e.value,e.timeFormat),rules:[{required:e.required,message:e.requiredMessage}]}],expression:"[\n            name,\n            {\n              initialValue: value == '' ? null : moment(value, timeFormat),\n              rules: [{ required: required, message: requiredMessage }],\n            },\n          ]"}],key:e.name,staticStyle:{width:"100%"},attrs:{name:e.name,format:e.timeFormat}})],1)],1)],1):e._e(),"date"===e.type?a("a-form-item",{attrs:{format:e.dateFormat,label:e.title,disabled:e.disabled,labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:e.tips}},[a("a-row",{attrs:{gutter:8}},[a("a-col",{attrs:{span:12}},[a("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:""==e.value?null:e.moment(e.value,e.dateFormat),rules:[{required:e.required,message:e.requiredMessage}]}],expression:"[\n            name,\n            {\n              initialValue: value == '' ? null : moment(value, dateFormat),\n              rules: [{ required: required, message: requiredMessage }],\n            },\n          ]"}],key:e.name,staticStyle:{width:"100%"},attrs:{name:e.name}})],1)],1)],1):e._e(),"file"===e.type?a("a-form-item",{attrs:{label:e.title,disabled:e.disabled,labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:e.tips}},[a("a-row",{attrs:{gutter:8}},[a("a-col",{attrs:{span:12}},[a("a-upload",{staticClass:"file-upload",attrs:{name:"file",action:"/v20/public/index.php/common/common.UploadFile/uploadFile?upload_dir=file&fieldname="+e.name,"file-list":e.fileList,multiple:!1,"before-upload":e.beforeUploadFile},on:{change:e.handleChange,preview:e.handlePreview}},[a("a-button",[a("a-icon",{attrs:{type:"upload"}}),e._v("上传文件 ")],1)],1)],1)],1)],1):e._e(),"image"===e.type?a("a-form-item",{attrs:{label:e.title,labelCol:e.labelCol,disabled:e.disabled,wrapperCol:e.wrapperCol,extra:e.tips}},[a("a-row",{attrs:{gutter:8}},[a("a-col",{attrs:{span:12}},[a("a-upload",{attrs:{name:"img",action:"/v20/public/index.php/common/platform.system.config/upload?fieldname="+e.name,"file-list":e.fileList,multiple:!1,"before-upload":e.beforeUploadFile},on:{change:e.handleChange}},[a("a-button",[a("a-icon",{attrs:{type:"upload"}}),e._v("上传图片 ")],1)],1)],1)],1)],1):e._e()],1)},s=[],n=a("2909"),r=(a("a9e3"),a("b0c0"),a("fb6a"),a("d81d"),a("ac1f"),a("1276"),a("caad"),a("2532"),a("c1df")),l=a.n(r),o=a("7a6b");function d(e,t){var a=new FileReader;a.addEventListener("load",(function(){return t(a.result)})),a.readAsDataURL(e)}var c={name:"FormItem",components:{CustomTooltip:o["a"]},props:{labelCol:{type:Object,default:function(){return{lg:{span:6},sm:{span:7}}}},wrapperCol:{type:Object,default:function(){return{lg:{span:14},sm:{span:17}}}},title:{type:String,default:"标题"},name:{type:String,default:"name"},required:{type:Boolean,default:!1},requiredMessage:{type:String,default:"此项必填"},tips:{type:String,default:""},type:{type:String,default:"text"},number:{type:Boolean,default:!1},digits:{type:Boolean,default:!1},precision:{type:Number,default:2},url:{type:Boolean,default:!1},max:{type:[Number,String]},min:{type:[Number,String]},maxlength:{type:[Number,String],default:21e3},selectArray:{type:Array,default:function(){return[]}},rows:{type:Number,default:4},placeholder:{type:String,default:""},value:{type:[Object,String,Array,Boolean,Number],default:null},tipsSize:{type:String,default:"18px"},tipsColor:{type:String,default:"#c5c5c5"},disabled:{type:Boolean,default:!1},fileUploadUrl:{type:String,default:""},imgUploadUrl:{type:String,default:""},switchCheckedText:{type:String,default:"开启"},switchUncheckedText:{type:String,default:"关闭"},filetype:{type:String,default:""},fsize:{type:[Number,String],default:0}},data:function(){return{timeFormat:"HH:mm",dateFormat:"YYYY-MM-DD",headers:{authorization:"authorization-text"},loading:!1,imageUrl:"",fileList:[],uploadFileRet:!0}},mounted:function(){this.uploadFileRet=!0,"image"!=this.type&&"file"!=this.type||this.value&&(this.fileList=[{uid:"1",name:this.value,status:"done",url:this.value}],this.$emit("getFileValue",this.type,this.name,this.value))},watch:{fileList:function(e){this.$emit("uploadChange",{name:this.name,type:this.type,value:e})}},methods:{moment:l.a,handleChange:function(e){var t=this,a=Object(n["a"])(e.fileList);a=a.slice(-1);a=a.map((function(e){return e.response&&(t.uploadFileRet=!0,1e3==e.response.status?(e.url=e.response.data,!0):(e.name=t.value,e.url=t.value,t.$message.error(e.response.msg))),e})),this.uploadFileRet?this.fileList=a:this.fileList=[]},handlePreview:function(e){return!1},beforeUploadFile:function(e){var t=e.type.toLowerCase(),a=t.split("/");this.uploadFileRet=!0;var i=["mpeg","x-mpeg","mp3","x-mpeg-3","mpg","x-mp3","mpeg3","x-mpeg3","x-mpg","x-mpegaudio"];if(this.filetype&&this.filetype.length>0){if("mp3"==this.filetype&&!i.includes(a["1"]))return this.uploadFileRet=!1,this.$message.error("上传的文件只支持"+this.filetype+"格式"),!1;if("mp3"!=this.filetype&&!this.filetype.includes(a["1"]))return this.uploadFileRet=!1,this.$message.error("上传的文件只支持"+this.filetype+"格式"),!1}var s=e.size/1024/1024,n=0;return this.fsize&&(n=1*this.fsize),!(n>0&&s>n)||(this.uploadFileRet=!1,this.$message.error("上传图片最大支持"+n+"MB!"),!1)},normFile:function(e){return Array.isArray(e)?e:"done"!=e.file.status?e.fileList:"1000"==e.file.response.status?e.file.response.data:void this.$message.error("上传失败！")},imgFile:function(e){var t=this;return d(e.file.originFileObj,(function(e){t.imageUrl=e})),"done"!=e.file.status?e.fileList:"1000"==e.file.response.status?(this.fileList=[e.file.response.data],this.fileList):void this.$message.error("上传失败！")}}},u=c,h=(a("d03d"),a("2877")),p=Object(h["a"])(u,i,s,!1,null,"5afeb148",null);t["a"]=p.exports},"1ac2":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",[a("section",{staticClass:"header"},[a("div",{staticClass:"order-no"},[e._v(e._s(e.content.order_no))])])])},s=[],n={name:"OrderCardFoodshop",props:{content:{type:Object,default:function(){return{}}}}},r=n,l=(a("5df1b"),a("2877")),o=Object(l["a"])(r,i,s,!1,null,"05da5393",null);t["default"]=o.exports},2909:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var i=a("6b75");function s(e){if(Array.isArray(e))return Object(i["a"])(e)}a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("a630");function n(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var r=a("06c5");function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e){return s(e)||n(e)||Object(r["a"])(e)||l()}},3037:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACp0lEQVRoQ+2ZPWgUQRTH/+/iV6GFkOP2Uln4hUnjBwhWRggoIliJ2ggWgoLJrh6k9CwVZTdbaGGhlaKFYGNAEK0EQW00CkGwEW9yHiIoiBr3yZx7cW+zl93LHLc7sNPuzO7/N/95M2/eEjRvpLl+5ABpO9gTBwyXt+EPjmAA98Q4vY2DMmzeKyx6GtcvyfPeADj8BsAwgBlh0kinDxsuF+Gh3nouTFL+vvIL5GyC8GRBNGO00+yG+xLjQc2iw0lmulOfVAGaoggnxQTdXC5E+gBSeQHDSWInCjIbAEBdfEUZVfK6dSIrAPJAulEz6ZReAIxZEDYHNoAzwqLr3UCk6wBjtG0H+xfU+8QE/d/VYmiyALATwJWAzpl5xljDoloSJ1IHkGdG2eHbDBwLCL4rTDqqDcDgJV63YhVehOLhorCoGgeRCQekyEUnOvBQmHRQG4AmhMPnF+KBMSksuqwVQBNCJnxAMenJnJklFDfT2UzmlshckwLlDqjcB5A7IDMPxZY7oHi5zx3Il1C/ltCQw1sKHj5/PEdfgnGvhQOGzS4IZ33hFWHS1RaEHgAOfwCwIap4pQeAzVUQLgQAZud/YVdjkr5pAeDn6tMA9rcgCLhTM+m4NgBDLm/3PDwGsD4QxBUwXi63Ntr3XMiw+TQI19qyj3BppIvibt8B/LvrLRBOBOMhdBlPXJ1OBcCPh3cAtkbmgVl3QIouTfEIMV5rC7CoghAk0cGBlt6Sw48IGAsHddI/NKnFQFsu5PAPAGuiTunwEuvmzEh6z1K+DxSneNOALJP7zQOMuklzUQI2urz6u4dnAHYAeLW2gD3vx+lnUrFR/ZQB5EsHbS6vLOAQ/cb9TxVqLCWo5PBuYhxgwvScSc9VxMuxPQFQFaEyPgdQmb1ejNXegb8pjylP7QRfzgAAAABJRU5ErkJggg=="},4432:function(e,t,a){},"4bfa":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACO0lEQVRoQ+2WT2sTURTFz0mk+A1mih/AzyFuhLppUgVFcKHgwrSdgbootFAKulB0JojoQsGNiwp1Y2k3Ilm46KKbLrpQEKRgM2kLuijoouFKJJmGcULy/gxSeFnm3XPvPef3Xghxyj885fvDGfjfBB0BR8AwAXeFDAM0ljsCxhEaNnAEDAM0ljsCxhEaNnAEDAM0lmsR8CK51gYahyGbxht0G3ixXKbgKAnZUOmpbMCLJSIQANgpAdW9gJ9VBubV+nVZhGC5c1Y+g/Pfa/wyak9lA34s9wA87AygYLtdRnV/hl9HHZit8yKZJ/Gg933hBjqD/FjeArjSHbrVJbGrasKvyxwEj3o6EgvNWd5X6aNMoNc8Y2LzuIzq4TT3Rh0+HkkgRNRXP5cEfDyqPjWtKuivz5j4hBIqyQwPhvX0Y6kBeJrWCWpJyGfDdHnn2gQGkGiM/UJld54/Bi0zHssdAV70zgW43Qr4Smf5v+9QVziIBAUfjscweXCXR/882FhuEXiZ4hfcaIZ8Y7KDFQM5D3vj7E9Uvi3xd0rqidxECa/77u5UM+CqyfLWCOReJ8H75BwmcZVtry7XKThJmphIZrluurx1Azkk3oFYgWAlvfOCi62QH20sX4iBHBMnuwouqP5VGGbU2hvIDsr8xAIFLF8Ygb438RzAJQGmWwHXhqWpc14YAZ1ldDTOgE5qNjWOgM00dXo5Ajqp2dQ4AjbT1OnlCOikZlPjCNhMU6eXI6CTmk2NI2AzTZ1efwBNIpsx5fSC1QAAAABJRU5ErkJggg=="},"547d":function(e,t,a){"use strict";a("7a3c")},"563e":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"color-picker"},[a("colorPicker",{staticClass:"color-box",on:{change:e.headleChangeColor},model:{value:e.colorInfo,callback:function(t){e.colorInfo=t},expression:"colorInfo"}}),a("p",{staticClass:"color-name"},[e._v(e._s(e.colorInfo))])],1)},s=[],n={name:"CustomColorPicker",components:{},data:function(){return{colorInfo:""}},props:{color:{type:String,default:"#ffffff"},disabled:{type:Boolean,default:!1}},watch:{color:{handler:function(e){console.log(e),e&&this.$nextTick((function(){this.colorInfo=e}))},immediate:!0}},mounted:function(){this.colorInfo=this.color},methods:{headleChangeColor:function(e){this.$emit("update:color",e)}}},r=n,l=(a("7d1f0"),a("2877")),o=Object(l["a"])(r,i,s,!1,null,"0f1938e4",null);t["a"]=o.exports},"5df1b":function(e,t,a){"use strict";a("ffdf")},6659:function(e,t,a){"use strict";var i={goodsDetail:"/shop/merchant.goods/goodsDetail",goodsList:"/shop/merchant.goods/goodsLibraryList",sortList:"/shop/merchant.sort/sortList"};t["a"]=i},"6a7f":function(e,t,a){"use strict";a("08ca")},"6f15":function(e,t,a){},"7a3c":function(e,t,a){},"7c9a":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"drag-box"},[a("draggable",{staticClass:"list-group",attrs:{list:e.dataList,handle:".handle"},on:{end:function(t){return e.getNewData("drag")}}},e._l(e.dataList,(function(t){return a("div",{key:t.id,staticClass:"box"},[a("drag-item",{attrs:{content:t,draggable:e.draggable,editable:e.editable,show:!0,type:"1"},on:{handleItemClick:e.handleItemClick}}),t.children&&t.children.length?[a("draggable",{staticClass:"list-group",attrs:{list:t.children,handle:".handle"},on:{end:function(t){return e.getNewData("drag")}}},e._l(t.children,(function(i){return a("div",{key:i.id,staticClass:"box"},[a("drag-item",{attrs:{content:i,draggable:e.draggable,editable:e.editable,show:t.open,type:"2"},on:{handleItemClick:e.handleItemClick}}),i.children&&i.children.length?[a("draggable",{staticClass:"list-group",attrs:{list:i.children,handle:".handle"},on:{end:function(t){return e.getNewData("drag")}}},e._l(i.children,(function(s){return a("div",{key:s.id,staticClass:"box"},[a("drag-item",{attrs:{content:s,draggable:e.draggable,editable:e.editable,show:i.open&&t.open,type:"3"},on:{handleItemClick:e.handleItemClick}})],1)})),0)]:e._e()],2)})),0)]:e._e()],2)})),0)],1)},s=[],n=a("b85c"),r=(a("a9e3"),a("d3b7"),a("159b"),a("b76a")),l=a.n(r),o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.show?i("div",{staticClass:"handle",class:[e.currentSelected,e.currentClass],on:{click:function(t){return t.stopPropagation(),e.handleClick("click")},mouseenter:e.onMouseOver,mouseleave:e.onMouseOut}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.draggable,expression:"draggable"}],staticClass:"img-container"},[e.showIcon?i("a-tooltip",[i("template",{slot:"title"},[e._v("拖动整行排序")]),i("img",{staticClass:"drag-img",attrs:{src:a("3037")}})],2):e._e()],1),i("div",{staticClass:"title-con"},[i("span",{staticClass:"title"},[e._v(e._s(e.content.title))]),void 0!=e.content.goods_count?i("span",[e._v("（"+e._s(e.content.goods_count)+"）")]):e._e()]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.editable,expression:"editable"}],staticClass:"img-container",on:{click:function(t){return t.stopPropagation(),e.handleClick("edit")}}},[e.showIcon?i("img",{staticClass:"edit-img",attrs:{src:a("048c")}}):e._e()]),e.content.children&&e.content.children.length&&e.showIcon?i("div",{staticClass:"img-container"},[e.content.open?i("img",{attrs:{src:a("bcea")}}):i("img",{attrs:{src:a("4bfa")}})]):e._e(),e.content.children&&e.content.children.length&&!e.showIcon?i("div",{staticClass:"img-container"},[e.content.open?i("img",{attrs:{src:a("eb9e")}}):i("img",{attrs:{src:a("8b11")}})]):e._e()]):e._e()},d=[],c={name:"DragItem",props:{content:{type:Object,default:function(){return{}}},type:{type:[Number,String],default:1},draggable:{type:Boolean,default:!0},editable:{type:Boolean,default:!0},show:{type:Boolean,default:!1}},computed:{currentClass:function(){return 1==this.type?"first-box":2==this.type?"second-box":"third-box"},currentSelected:function(){return 1==this.content.selected?"parentactive":2==this.content.selected?"active":""}},data:function(){return{showIcon:!1}},mounted:function(){},methods:{handleClick:function(e){this.$emit("handleItemClick",{type:e,data:this.content})},onMouseOver:function(){this.showIcon=!0},onMouseOut:function(){this.showIcon=!1}}},u=c,h=(a("547d"),a("2877")),p=Object(h["a"])(u,o,d,!1,null,"786f264e",null),m=p.exports,g={name:"DragBox",components:{draggable:l.a,DragItem:m},props:{list:{type:Array,default:function(){return[]}},draggable:{type:Boolean,default:!0},editable:{type:Boolean,default:!0},defaultSelect:{type:Boolean,default:!0},select:{type:[Number,String],default:0}},data:function(){return{dataList:[],selectedId:0,selectedItem:{}}},watch:{defaultSelect:function(e){this.select&&(e?this.defaultSelectFirst():this.initList(this.dataList))},select:function(e){e&&(this.selectedId=e,this.setListSelected(this.dataList,this.selectedId),this.setFather(this.dataList))}},mounted:function(){this.initData()},methods:{initData:function(){this.dataList=JSON.parse(JSON.stringify(this.list)),console.log(this.dataList),this.dataList.length&&(this.initList(this.dataList),console.log(this.dataList),this.select?(this.selectedId=this.select,this.setListSelected(this.dataList,this.selectedId),this.setFather(this.dataList)):this.defaultSelect&&this.defaultSelectFirst())},defaultSelectFirst:function(){var e=this.dataList[0];this.getSelectedId(e),this.selectedItem=e,e.children&&e.children.length&&(e.open=!0,e.children[0].open=!0),this.$set(this.dataList,0,e),this.setListSelected(this.dataList,this.selectedId),this.setFather(this.dataList)},initList:function(e){var t=this;e.forEach((function(e){e.selected=0,e.children&&e.children.length&&(e.open=!1,t.initList(e.children))})),this.dataList=JSON.parse(JSON.stringify(e))},getSelectedId:function(e){e.children&&e.children.length?this.getSelectedId(e.children[0]):this.selectedId=e.id},setListSelected:function(e,t){var a=this;e.forEach((function(e,i){e.id==t?(e.selected=2,a.selectedItem=e):e.selected=0,e.children&&e.children.length&&a.setListSelected(e.children,t)})),this.dataList=JSON.parse(JSON.stringify(e))},setFather:function(e){var t=this.selectedItem.fid;if(0!=t){var a,i=Object(n["a"])(e);try{for(i.s();!(a=i.n()).done;){var s=a.value;if(s.id==t)return this.selectedItem=s,void(s.selected=1);if(s.children&&s.children.length){var r=this.getParentId(s.children,t);r&&(this.selectedItem=r,this.setFather(this.dataList))}}}catch(l){i.e(l)}finally{i.f()}}},getParentId:function(e,t){var a,i=Object(n["a"])(e);try{for(i.s();!(a=i.n()).done;){var s=a.value;if(s.id==t)return s.selected=1,s}}catch(r){i.e(r)}finally{i.f()}},setMenuOpen:function(e){var t=0,a={};0==e.fid?this.dataList.forEach((function(i,s){e.id==i.id&&(e.open=!e.open,t=s,a=i)})):this.dataList.forEach((function(i,s){if(e.fid==i.id){var r,l=Object(n["a"])(i.children);try{for(l.s();!(r=l.n()).done;){var o=r.value;o.id==e.id&&(o.open=!o.open)}}catch(d){l.e(d)}finally{l.f()}t=s,a=i}})),this.$set(this.dataList,t,a)},handleItemClick:function(e){var t=e.type,a=e.data;"click"==t&&(a.children&&a.children.length?this.setMenuOpen(a):(this.setListSelected(this.dataList,a.id),this.setFather(this.dataList))),this.getNewData(t,JSON.parse(JSON.stringify(a)))},getNewData:function(e,t){var a=JSON.parse(JSON.stringify(this.dataList));if(a.length){var i,s=Object(n["a"])(a);try{for(s.s();!(i=s.n()).done;){var r=i.value;delete r.selected,delete r.open}}catch(l){s.e(l)}finally{s.f()}"drag"==e?this.$emit("handleChange",{type:e,data:a}):(delete t.selected,delete t.open,"edit"==e&&this.$emit("handleChange",{type:e,data:t}),"click"!=e||t.children&&0!=t.children.length||this.$emit("handleChange",{type:e,data:t}))}else console.log("数据出错了")}}},f=g,v=(a("f431"),Object(h["a"])(f,i,s,!1,null,"6774c60e",null));t["a"]=v.exports},"7d1f0":function(e,t,a){"use strict";a("6f15")},"8b11":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACQklEQVRoQ+2Wv2uTQRjHnyfZ8z9kcr+7f0BcBF2a1EERHBRcKnSog6CL0A6KdCiig4KLQw26KLqIvINDCc/diwQDFlwc6tDBpUMI9B55pSnHS0JyP4IULlPI3fd7z/f7uTcJwhl/4RmfH3KA/00wE8gEIhvIVyiywGh5JhBdYaRBJhBZYLQ8E4iuMNIgE4gsMFoeREApdZWZC6317+gJTgyEEJcbjcYRERU+nt4BlFLbzLwOAN8RsUtEP3wOnLZXSvkAAB5Wa81m81y/399f1NM7gBDiLiI+OjngGwB0tdY/Fz2wvk9KeQ8AtiafLz1AdZCU8g0AXKneIyIxcxXil28IKeUGADye6BDxPhFt+vh4E5iYuyEAYM9a2y3L8mDRw4UQ64i47ezf0Fo/WVR/GtpX4O6vhfhqre2UZXk4z1MptcbMO5N9zLxmjHk6TzdtPZjADBLFeDzuDAaDP7OGUUrdZubnzrW5RUQvQ4b/d4VDhbNIMPPn0Wi0MhwOj+reSqmbzPzCaf66MeZ1zAxJAtQfbGb+1Gq1OkVRjBxSNwDgldP8KhG9jRk+GYFp1wkR37fb7ZVer3cspbwGAKdNI+IlIvoYO3zyAHUSiPjOWruLiLvOtblgjPmSYvilBKiHcAdFxPO+fxXmBU32DNQPqn3FVj94yYdfGgHnmXgGABeZ+Y4x5sO8NkPWl0YgZJgQTQ4Q0lpKTSaQss0Qr0wgpLWUmkwgZZshXplASGspNZlAyjZDvDKBkNZSajKBlG2GeP0F2Ou2MQxMJhwAAAAASUVORK5CYII="},"8c58":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{staticClass:"dialog",attrs:{title:"选择商品",width:"800",centered:"",visible:e.dialogVisible,destroyOnClose:!0},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("div",{staticClass:"select-goods"},[a("div",{staticClass:"left scrollbar"},[a("a-menu",{attrs:{mode:"inline","open-keys":e.openKeys,selectedKeys:e.selectedSort},on:{openChange:e.onOpenChange,select:e.onSelect}},[e._l(e.sortList,(function(t){return[t.son_list&&t.son_list.length?a("a-sub-menu",{key:t.sort_id},[a("span",{attrs:{slot:"title"},slot:"title"},[a("span",[e._v(e._s(t.sort_name))])]),t.son_list&&t.son_list.length?[e._l(t.son_list,(function(t){return[t.son_list&&t.son_list.length?[a("a-sub-menu",{key:t.sort_id,attrs:{title:t.sort_name}},e._l(t.son_list,(function(t){return a("a-menu-item",{key:t.sort_id},[e._v(e._s(t.sort_name))])})),1)]:[a("a-menu-item",{key:t.sort_id},[e._v(e._s(t.sort_name))])]]}))]:e._e()],2):a("a-menu-item",{key:t.sort_id},[e._v(e._s(t.sort_name))])]}))],2)],1),a("div",{staticClass:"right"},[a("div",{staticClass:"top"},[a("a-input-search",{staticClass:"search",attrs:{placeholder:e.L("商品名称")},on:{change:e.onSearchChange,search:e.onSearch},model:{value:e.keywords,callback:function(t){e.keywords=t},expression:"keywords"}})],1),a("div",{staticClass:"bottom"},[a("a-table",{attrs:{"row-selection":e.rowSelection,columns:e.columns,"data-source":e.tableList,rowKey:"goods_id",scroll:{y:500},pagination:!!e.tableList.length},scopedSlots:e._u([{key:"name",fn:function(t,i){return a("span",{},[a("div",{staticClass:"product-info"},[a("div",[a("img",{attrs:{src:i.image_url}})]),a("div",[e._v(e._s(t))])])])}},{key:"price",fn:function(t,i){return a("span",{},[a("span",[e._v(e._s(t))]),a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s("1"==i.has_spec?"（"+e.L("多规格")+"）":""))])])}},{key:"selected",fn:function(t){return a("span",{},["1"==t?a("span",{staticClass:"cr-blue"},[e._v(e._s(e.L("已添加过")))]):e._e()])}}])})],1)])])])},s=[],n=(a("a9e3"),a("d3b7"),a("159b"),a("4de4"),a("99af"),a("25f0"),a("7db0"),a("6659")),r={name:"SelectShopGoods",props:{visible:{type:Boolean,default:!1},storeId:{type:[String,Number],default:"0"},source:{type:String,default:"foodshop_goods_library"},type:{type:String,default:"checkbox"}},data:function(){return{dialogVisible:!1,rootSubmenuKeys:[],openKeys:[],columns:[{title:"商品",dataIndex:"name",scopedSlots:{customRender:"name"}},{title:"价格",dataIndex:"price",scopedSlots:{customRender:"price"}},{title:"",dataIndex:"selected",width:100,scopedSlots:{customRender:"selected"}}],menuId:0,hasSelected:[],selectedRowKeys:[],selectedSort:[],sortList:[],keywords:"",tableList:[],oldMenuId:""}},computed:{rowSelection:function(){return{selectedRowKeys:this.selectedRowKeys,type:this.type,onChange:this.onChange,getCheckboxProps:function(e){return{props:{disabled:"1"==e.selected}}}}}},watch:{visible:function(e,t){this.dialogVisible=e,e&&(this.init(),this.getSortList())}},mounted:function(){this.dialogVisible=this.visible},methods:{init:function(){this.rootSubmenuKeys=[],this.openKeys=[],this.selectedSort=[],this.tableList=[],this.keywords="",this.currentPage=1},getSortList:function(){var e=this;this.request(n["a"].sortList,{store_id:this.storeId}).then((function(t){e.sortList=t,e.sortList.length&&e.handleDefaultSelect()}))},handleDefaultSelect:function(){var e=this;this.init(),this.sortList.forEach((function(t,a){if(e.rootSubmenuKeys.push(t.sort_id),t.son_list&&t.son_list.length){0==a&&e.openKeys.push(t.sort_id);var i=t.son_list;i.forEach((function(t,i){if(t.son_list&&t.son_list.length){0==i&&e.openKeys.push(t.sort_id);var s=t.son_list;s.forEach((function(t,s){0==a&&0==i&&0==s&&(e.menuId=t.sort_id)}))}else 0==a&&0==i&&(e.menuId=t.sort_id)}))}else 0==a&&(e.menuId=t.sort_id)})),this.selectedSort.push(this.menuId),this.getGoodsList()},onSelect:function(e){var t=e.key;this.selectedSort=[t],this.menuId=t,this.currentPage=1,this.getGoodsList()},getGoodsList:function(){var e=this;this.tableList=[];var t={store_id:this.storeId,name:this.keywords,source:this.source};this.menuId&&(t.sort_id=this.menuId),this.request(n["a"].goodsList,t).then((function(t){e.tableList=t.list,e.tableList.length&&e.handleList()}))},handleList:function(){var e=this;this.hasSelected=[],"checkbox"==this.type&&(this.tableList.forEach((function(t){t.selected&&e.hasSelected.push(t.goods_id)})),this.selectedRowKeys=this.hasSelected)},handleOk:function(){var e=this.selectedRowKeys,t=this.hasSelected,a=[];e.length&&(a=e.concat(t).filter((function(e,t,a){return a.indexOf(e)===a.lastIndexOf(e)}))),a.length?(this.$emit("onSubmit",{ids:a.toString()}),this.init()):this.$message.warning(this.L("请先选择商品哦~"))},handleCancel:function(){this.init(),this.dialogVisible=!1,this.$emit("update:visible",this.dialogVisible)},onOpenChange:function(e){var t=this,a=e.find((function(e){return-1===t.openKeys.indexOf(e)}));-1===this.rootSubmenuKeys.indexOf(a)?this.openKeys=e:this.openKeys.push(a)},onSearch:function(e){this.menuId&&(this.oldMenuId=this.menuId),this.menuId="",this.openKeys=[],this.selectedSort=[],this.getGoodsList()},onSearchChange:function(e){this.keywords||!this.oldMenuId?this.onSearch(this.keywords):(this.menuId=this.oldMenuId,this.selectedSort=[this.menuId])},onChange:function(e){this.selectedRowKeys=e}}},l=r,o=(a("6a7f"),a("2877")),d=Object(o["a"])(l,i,s,!1,null,"31f19d46",null);t["a"]=d.exports},bcea:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACBUlEQVRoQ+2Vvy8EQRzF3/coSBQk2KW4CIVCo5DQSCgUFAqFaxQSUShk90QUJH6ERCGySxARjUIi5K7T+0PUbvwHQuIrzi0XjjE3MxHJXHO5/c68eZ/3dvcI//xD/9w/HMBfN+gacA1oJuBuIc0Atbe7BrQj1BRwDWgGqL3dNaAdoaaAa0AzQO3t1hrwYu4nQh7AiQhoQ9vpNwJWAPw9HgPjuuzMKxHSpA0I4wBezBkCLiqYtQJhFMCLeYaA03fzhAwYGQATpWvGIYwBeHscECNOzBNjqpClc1xyjX9XfBbGbUAYAWiLeIUJW2XJT4uAzpLfHetc99BYhBg1DaEN4Ee8DsJaYpYZs/dZ+riNSoOWQ25IPSFPwIhJCC2Az+aJMFcI6Pi7t016m5se65EDMGwKomqAz+YBzIuQDmSvSn+fW8DIgTFoAqIqgC/JAwuFkCKZ+WTeHHFb7duf3IAuhDJAheSXREg7vzWfrGuPOf2M4u3UpwOhBNC6z12pZ9yWPbDL91naVjWfrPci7kwRcgz0lq7tipAWVfSqByCsioA2VQ6rtLY95u5SEz0AFkVIuyqaSgCvwn7EQ6/fIks3Kgf9tNaPuAOEMRHSkaqmMoDqAbbXOwDbCcv0XQOyhGzPXQO2E5bpuwZkCdmeuwZsJyzTdw3IErI9dw3YTlim7xqQJWR7/gIoJ4sxUA2kRAAAAABJRU5ErkJggg=="},d03d:function(e,t,a){"use strict";a("4432")},e415:function(e,t,a){},eb9e:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACD0lEQVRoQ+2Vv0pcQRTGz7kLiws2FhZpQohFYGVh984sSSOshUUsUgjrNhaCpLAQQSRFAvlDBIsgWoiEkCZFIBDcLn0eYM48gfsS+wB75II3XGR1Mp4ZRJjbLHf+fPP9vm+4i/DAH3zg/iEB3HeDqYHUgDCBdIWEAYq3pwbEEQoFUgPCAMXbUwPiCIUCqQFhgOLt0RpQSj0HgCEzf7PWfhI7vUEgCoDWepWZ/1TO/E1E6zEgggPkeT5AxF9TzEaBCAqgtd5i5u+leWYeZFk2YOa1q7HgEMEAlFK7AHBSMb9hrf3Z7/dro9FoiIivYkAEAdBav2Pmg8q12SSiH+V7r9ebGY/HBcTL0BBigDzPPyLih4r510T07xqV481mc7bRaAwBYCUkhAhgivltIvp609em1WrN1ev1cwBYDgVxZ4Dr5hFxxxhz6vpUdjqd+SzLCoilEBB3Aphifs8Yc+wyX84rpR4Vf3IA8EIK4Q1w3Twzv7HWfvlf8xWIx4h4zsxaAuEFoJRaAICLitm3RHToa75c3+12n04mk+I6ta/Gjoho30dPAvCeiD77HDZtrdb6GTMXEIsAsE9ERz6aXgCFsNa6V/waY/76HHTb2na7/aRWq60S0ZmvpjeA7wGx1yeA2Am79FMDroRiz6cGYifs0k8NuBKKPZ8aiJ2wSz814Eoo9nxqIHbCLv3UgCuh2POXPbCeMfyLhFcAAAAASUVORK5CYII="},f14a:function(e,t,a){"use strict";a.r(t);for(var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{"body-style":{padding:"24px 32px"},bordered:!1}},[a("a-button",{attrs:{type:"primary"},on:{click:e.showModal}},[e._v("选择商品")]),a("select-shop-goods",{attrs:{visible:e.visible,menuList:e.menuList,list:e.productList},on:{"update:visible":function(t){e.visible=t},onSearch:e.onSearch,onMenuSelect:e.onMenuSelect,submit:e.goodsSubmit}})],1)},s=[],n=a("5530"),r=(a("7db0"),a("d3b7"),a("b0c0"),a("19bb")),l=a("563e"),o=a("6ec16"),d=a("7c9a"),c=a("ca00"),u=a("1ac2"),h=a("8c58"),p=[],m=0;m<46;m++)p.push({id:m,name:"product ".concat(m),code:"P122541312315",pic:"https://picsum.photos/id/".concat(m,"/60/60"),price:"$56",remark:"多规格",selected:m%3==0});var g={name:"BaseForm",components:{FormItem:r["a"],ColorPicker:l["a"],RichText:o["a"],DragBox:d["a"],OrderCard:u["default"],SelectShopGoods:h["a"]},data:function(){return{visible:!1,description:"表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。",labelCol:{lg:{span:6},sm:{span:7}},wrapperCol:{lg:{span:14},sm:{span:17}},formDataHandle:{},value:1,data:[],form:this.$form.createForm(this),selectArray:[{title:"testtitle",value:"testvalue"},{title:"testtitle2",value:"testvalue2"},{title:"testtitle3",value:"testvalue3"}],radioOptions:[{label:"Apple",value:"1"},{label:"Pear",value:"2"},{label:"Orange",value:"3",disabled:!0}],defaultFileList:[{uid:"1",name:"xxx.png",status:"done",response:"Server Error 500",url:"http://www.baidu.com/xxx.png"},{uid:"2",name:"yyy.png",status:"done",url:"http://www.baidu.com/yyy.png"},{uid:"3",name:"zzz.png",status:"error",response:"Server Error 500",url:"http://www.baidu.com/zzz.png"}],fileList:[{uid:"-1",name:"image.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-2",name:"image.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-3",name:"image.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-4",name:"image.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-5",name:"image.png",status:"error"}],richTextInfo:"<p>test</p><h1>22</h2>",list:[{title:"一级菜单",id:3,fid:0,children:[]},{title:"试试拖我吧",id:1,fid:0,children:[{title:"111",id:8,fid:1}]},{title:"是不是很酷",id:2,fid:0},{title:"test",id:12,fid:0,children:[{title:"test1",id:121,fid:12},{title:"test2",id:1212,fid:12},{title:"test3",id:123,fid:12}]}],orderList:[{order_no:"1001",order_time:"今日17:50"}],menuList:[{id:1,title:"一级菜单",children:[{id:2,title:"二级菜单",children:[{id:3,title:"三级菜单"},{id:7,title:"test"}]}]},{id:4,title:"只有二级菜单",children:[{id:5,title:"2222",children:null}]},{id:6,title:"只有一级菜单",children:null}],productList:p}},computed:{draggingInfo:function(){return this.dragging?"under drag":""}},mounted:function(){this.getData()},methods:{showModal:function(){this.visible=!0},onSearch:function(e){console.log("onSearch",e)},onMenuSelect:function(e){console.log("onMenuSelect",e)},goodsSubmit:function(e){console.log("submit",e)},getData:function(){this.data=[{title:"input标题",name:"input_text",type:"text",required:!0,value:"zhengyali",disabled:!1},{title:"只能输入url地址",name:"input_url",type:"text",required:!1,value:"",url:!0,tips:"只能输入url哦"},{title:"select选择框",name:"select",type:"select",required:!1,value:"testkey",selectArray:this.selectArray},{title:"时间选择",name:"time_pick",type:"time",required:!1,value:"11:11"},{title:"时间选择，默认没选时间",name:"time_pick_2",type:"time",required:!1,value:""},{title:"日期选择",name:"date_pick",type:"date",required:!1,value:"2020-01-01"},{title:"日期选择，默认没选日期",name:"date_pick_2",type:"date",required:!1,value:""},{title:"开关",name:"switch111",type:"switch",required:!1,value:1},{title:"开关2",name:"switch22",type:"switch",required:!1,value:0},{title:"radio单选",name:"radio",type:"radio",required:!1,value:"1",selectArray:this.radioOptions},{title:"数字输入框",name:"input_number",type:"text",required:!1,value:"100",digits:!0,number:!0,tips:"这个是提示呢。这个只能输入数字而且是整数哦！"},{title:"上传文件",name:"file_upload",type:"file",required:!1,value:this.defaultFileList},{title:"上传图片",name:"image_upload",type:"image",required:!1,value:"",tips:"据说图片只能上传一张"},{title:"富文本",name:"rich_text",type:"richtext",required:!1,value:"<p>test</p>"},{title:"颜色选择器",name:"color_picker",type:"color",required:!1,value:"#ff0000"}]},handleFormData:function(e){},handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields((function(e,a){if(!e){var i=Object(n["a"])({},a),s=t.data.find((function(e){return"rich_text"==e["name"]}));s&&(i.rich_text=s.value);var r=t.data.find((function(e){return"color_picker"==e["name"]}));r&&(i.color_picker=r.value);var l={date_pick:"date",date_pick_2:"date",time_pick:"time",time_pick_2:"time"};Object(c["c"])(i,l),console.log("Received values of form2: ",i)}}))},handleDragDataChange:function(e){console.log(e)}}},f=g,v=a("2877"),A=Object(v["a"])(f,i,s,!1,null,null,null);t["default"]=A.exports},f431:function(e,t,a){"use strict";a("e415")},ffdf:function(e,t,a){}}]);