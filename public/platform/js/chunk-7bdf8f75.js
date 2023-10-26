(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7bdf8f75","chunk-7477f697","chunk-7477f697"],{49420:function(t,e){var i={getrem:function(){var t=1/window.devicePixelRatio;document.write('<meta name="viewport" content="width=device-width,initial-scale='+t+",minimum-scale="+t+",maximum-scale="+t+'" />');var e=document.getElementsByTagName("html")[0],i=e.getBoundingClientRect().width;e.style.fontSize=i/10+"px"}};t.exports=i},"6ac6":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"equipPoint"},[t._m(0),i("div",{staticClass:"btn_list"},[i("div",{staticClass:"draw_point",class:t.canDraw?"gray":null,on:{click:t.drawPoint}},[t._v("绘制设备点位")]),i("div",{staticClass:"edit_point",class:t.canDraw?"gray":null,on:{click:t.editPoint}},[t._v("编辑设备点位")]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.canDraw&&t.pointArr.length>0,expression:"canDraw && pointArr.length>0"}],staticClass:"clear_point",on:{click:t.delCur}},[t._v("清除")]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.canDraw&&t.pointArr.length>0,expression:"canDraw && pointArr.length>0"}],staticClass:"confirm_point",on:{click:t.savePoint}},[t._v("确定")]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showEditbtn,expression:"showEditbtn"}],staticClass:"delete_point",on:{click:t.delPoint}},[t._v("删除")]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showEditbtn,expression:"showEditbtn"}],staticClass:"confirm_point",class:t.choosePointStatus?"gray":null,on:{click:t.choosePoint}},[t._v(" "+t._s(t.choosePointStatus?"取消选点":"选替换点"))]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.choosePointStatus&&t.editArr.length>0,expression:"choosePointStatus && editArr.length>0"}],staticClass:"confirm_point",on:{click:t.editThis}},[t._v("确定替换")]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.canEdit,expression:"canEdit"}],staticClass:"cancel_edit",on:{click:t.cancelEdit}},[t._v("退出编辑")])]),i("div",{ref:"canvas_con",staticClass:"draw_canvas",on:{click:t.selectPoint}},[i("img",{staticClass:"back_image",style:{width:t.canvasProp.width,height:t.canvasProp.height},attrs:{src:t.coverImg}}),i("canvas",{staticClass:"my_canvas",attrs:{id:"myCanvas",width:t.canvasProp.width,height:t.canvasProp.height}})]),i("a-modal",{attrs:{title:t.dialogTitle,visible:t.visible},on:{cancel:t.handleCancel}},[i("a-form-model",{attrs:{model:t.equipPointForm,"label-col":t.labelCol,"wrapper-col":t.wrapperCol}},[i("a-form-model-item",{attrs:{label:"选择设备"}},[i("a-select",{staticStyle:{width:"200px"},attrs:{"show-search":"",placeholder:"请选择一个设备","option-filter-prop":"children","filter-option":t.filterOption},on:{change:t.selectChange},model:{value:t.equipPointForm.device_name,callback:function(e){t.$set(t.equipPointForm,"device_name",e)},expression:"equipPointForm.device_name"}},t._l(t.deviceList,(function(e,n){return i("a-select-option",{key:n,attrs:{value:e.id}},[t._v(" "+t._s(e.device_name)+" ")])})),1),i("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",disabled:t.buttonLoading,loading:t.buttonLoading},on:{click:t.synchronization}},[t._v(" "+t._s(t.buttonLoading?"同步中":"一键同步"))])],1),t.equipPointForm.new_id?i("a-form-model-item",{attrs:{label:"设备Id"}},[i("a-input",{attrs:{disabled:""},model:{value:t.equipPointForm.new_id,callback:function(e){t.$set(t.equipPointForm,"new_id",e)},expression:"equipPointForm.new_id"}})],1):i("a-form-model-item",{attrs:{label:"设备Id"}},[i("a-input",{attrs:{disabled:""},model:{value:t.equipPointForm.device_id,callback:function(e){t.$set(t.equipPointForm,"device_id",e)},expression:"equipPointForm.device_id"}})],1),i("a-form-model-item",{attrs:{label:"设备类型"}},[i("a-input",{attrs:{disabled:""},model:{value:t.equipPointForm.device_type,callback:function(e){t.$set(t.equipPointForm,"device_type",e)},expression:"equipPointForm.device_type"}})],1),i("a-form-model-item",{attrs:{label:"横坐标"}},[i("a-input",{attrs:{disabled:""},model:{value:t.equipPointForm.coordinateX,callback:function(e){t.$set(t.equipPointForm,"coordinateX",e)},expression:"equipPointForm.coordinateX"}})],1),i("a-form-model-item",{attrs:{label:"纵坐标"}},[i("a-input",{attrs:{disabled:""},model:{value:t.equipPointForm.coordinateY,callback:function(e){t.$set(t.equipPointForm,"coordinateY",e)},expression:"equipPointForm.coordinateY"}})],1),i("a-form-model-item",{attrs:{label:"选择图标方式"}},[i("a-radio-group",{attrs:{name:"radioGroup"},on:{change:t.chooseUploadType},model:{value:t.iconType,callback:function(e){t.iconType=e},expression:"iconType"}},[i("a-radio",{attrs:{value:1}},[t._v("手动上传")]),i("a-radio",{attrs:{value:2}},[t._v("使用默认图标")])],1)],1),1==t.iconType?i("a-form-model-item",{attrs:{label:"设备图标",extra:"建议使用20x20的图标"}},[i("a-upload",{staticClass:"avatar-uploader",attrs:{name:"avatar","list-type":"picture-card","show-upload-list":!1,action:t.uploadUrl,"before-upload":t.beforeUpload},on:{change:t.handleChange}},[t.imageUrl?i("img",{staticStyle:{width:"20px",height:"20px"},attrs:{src:t.imageUrl,alt:"avatar"}}):i("div",[i("a-icon",{attrs:{type:t.loading?"loading":"plus"}}),i("div",{staticClass:"ant-upload-text"},[t._v(" Upload ")])],1)])],1):t._e(),2==t.iconType?i("a-form-model-item",{attrs:{label:"默认图标"}},[i("div",{staticClass:"icon_con"},t._l(t.defaultIcon,(function(e,n){return i("div",{staticClass:"icon_item",on:{click:function(i){return t.chooseDefaultIcon(e,n)}}},[i("div",{staticClass:"icon_item_con"},[i("img",{class:t.currentIndex==n?"active":"",attrs:{src:e.url}}),i("span",{staticClass:"icon_title",style:{color:t.currentIndex==n?"#409EFF":""}},[t._v(t._s(e.name))])])])})),0)]):t._e()],1),i("template",{slot:"footer"},[i("a-button",{attrs:{type:"default"},on:{click:t.handleCancel}},[t._v("取消")]),i("a-button",{attrs:{type:"primary"},on:{click:t.handleOk}},[t._v("确定")])],1)],2)],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tip"},[i("div",{staticClass:"tip_one"},[t._v(" 1、点击“绘制设备定位”按钮 前，状态为查看绘制，查看所有的绘制成功的设备点位数据，在查看页面支持绑定设备信息 ")]),i("div",{staticClass:"tip_two"},[t._v(" 2、点击“编辑设备定位”按钮，进入编辑设备点位页面，支持对设备的位置调整、调整后绑定设备数据不变；支持在编辑设备定位页面，删除定位数据，删除定位后，绑定的设备信息也删除。添加绘制设备定位页面，不显示删除按钮，只在编辑设备定位页面，显示删除按钮。一个设备点位只能绑定一个设备信息。 ")])])}],o=(i("b0c0"),i("d81d"),i("a0e0"));i("49420"),i("8bbf");function s(t,e){var i=new FileReader;i.addEventListener("load",(function(){return e(i.result)})),i.readAsDataURL(t)}var r={name:"equipPoint",data:function(){return{uploadUrl:"/v20/public/index.php/common/common.UploadFile/uploadPictures",pointArr:[],canvasProp:{width:0,height:0,top:0,left:0},canDraw:!1,canEdit:!1,visible:!1,labelCol:{span:6},wrapperCol:{span:16},equipPointForm:{id:"",new_id:"",device_id:"",device_name:"",device_type:"",coordinateX:"",coordinateY:"",img:""},pointType:3,deviceList:[],coverImg:"",coordinate_list:[],loading:!1,imageUrl:"",dialogTitle:"",equipimgUrl:"",delPointarr:[],showEditbtn:!1,choosePointStatus:!1,editArr:[],device_id:null,has_device_id:null,buttonLoading:!1,iconType:1,currentIndex:-1,defaultIcon:[{url:"https://hf.pigcms.com/static/village_icon/car.png",name:"停车"},{url:"https://hf.pigcms.com/static/village_icon/jiankong.png",name:"监控"},{url:"https://hf.pigcms.com/static/village_icon/renlian.png",name:"人脸"},{url:"https://hf.pigcms.com/static/village_icon/wuxian.png",name:"无线"}]}},created:function(){var t=this;t.$route.query.type&&(t.pointType=t.$route.query.type),this.$nextTick((function(){var e=t.$refs.canvas_con.clientWidth,i=t.$refs.canvas_con.clientHeight,n=t.$refs.canvas_con.getBoundingClientRect().left,a=t.$refs.canvas_con.getBoundingClientRect().top;t.canvasProp.width=e-10+"px",t.canvasProp.height=i-10+"px",t.canvasProp.top=a,t.canvasProp.left=n})),this.getVillageAreaPic(),this.getDeviceList()},methods:{synchronization:function(){var t=this;this.buttonLoading=!0,this.request(o["a"].getAockpit,{},"post").then((function(e){t.buttonLoading=!1,t.$message.success("同步成功！")})).catch((function(e){t.$message.success("同步成功！")}))},filterOption:function(t,e){return e.componentOptions.children[0].text.toLowerCase().indexOf(t.toLowerCase())>=0},chooseDefaultIcon:function(t,e){this.currentIndex==e?console.log("重复"):(this.currentIndex=e,this.imageUrl=t.url,this.equipPointForm.img=t.url)},chooseUploadType:function(){},getVillageAreaPic:function(){var t=this;this.request(o["a"].getAngeleyeImg,{type:this.pointType},"post").then((function(e){t.equipimgUrl=e.village_info.url,t.coordinate_list=e.coordinate_list,1==t.pointType?t.coverImg=e.village_info.village_photo1:2==t.pointType?t.coverImg=e.village_info.village_photo2:3==t.pointType?t.coverImg=e.village_info.village_photo3:4==t.pointType&&(t.coverImg=e.village_info.village_photo4),t.initDevicePoint()}))},uploadImg:function(t){t.file.status,"done"===t.file.status?this.$message.success("".concat(t.file.name," file uploaded successfully")):"error"===t.file.status&&this.$message.error("".concat(t.file.name," file upload failed."))},choosePoint:function(){if(this.choosePointStatus=!this.choosePointStatus,!this.choosePointStatus&&this.editArr.length>0){var t=document.getElementById("myCanvas").getContext("2d");t.clearRect(this.editArr[0].x-11,this.editArr[0].y-11,22,22),this.editArr=[]}},initDevicePoint:function(){var t=document.getElementById("myCanvas"),e=t.getContext("2d");this.coordinate_list.map((function(t){if(t.coordinate){var i=new Image;t.img?i.src=t.img:i.src="https://hf.pigcms.com/static/wxapp/equipPoint/equip_point1.png",1*t.img==0&&(i.src="https://hf.pigcms.com/static/wxapp/equipPoint/equip_point2.png"),i.onload=function(){var n=e.createPattern(i,"no-repeat");e.fillStyle=n,console.log(t.coordinate[0]-10,t.coordinate[1]-10),e.drawImage(i,t.coordinate[0]-10,t.coordinate[1]-10,20,20)}}}))},judgeDistance:function(t){var e=!1;return this.coordinate_list.map((function(i){if(i.coordinate){var n=t.x-10,a=t.x+10,o=t.y-10,s=t.y+10;n>i.coordinate[0]-11&&n<i.coordinate[0]+11&&o>i.coordinate[1]-11&&o<i.coordinate[1]+11?(e=!0,console.log("覆盖=============>1")):n>i.coordinate[0]-11&&n<i.coordinate[0]+11&&s>i.coordinate[1]-11&&s<i.coordinate[1]+11?(e=!0,console.log("覆盖=============>2")):a>i.coordinate[0]-11&&a<i.coordinate[0]+11&&o>i.coordinate[1]-11&&o<i.coordinate[1]+11?(e=!0,console.log("覆盖=============>3")):a>i.coordinate[0]-11&&a<i.coordinate[0]+11&&s>i.coordinate[1]-11&&s<i.coordinate[1]+11?(e=!0,console.log("覆盖=============>4")):console.log("未覆盖=======>")}})),e},selectPoint:function(t){var e=this;if(this.canDraw&&!this.canEdit&&!this.choosePointStatus){var i={};i.x=t.clientX-this.canvasProp.left-5,i.y=t.clientY-this.canvasProp.top-5;var n=this.judgeDistance(i);if(n&&0==this.pointArr.length)return void this.$message.warning("设备点位不可相互覆盖!");this.pointArr.push(i),this.pointArr.length<=1&&this.startDraw(i)}if(!this.canDraw&&!this.canEdit&&!this.choosePointStatus){var a=t.x-this.canvasProp.left-5,o=t.y-this.canvasProp.top-5;this.coordinate_list.map((function(t){if(t.coordinate){var i=t.coordinate[0],n=t.coordinate[1];i-10<a&&a<i+10&&n-10<o&&o<n+10&&(console.log("this.equipPointForm===>",t),e.equipPointForm.coordinateX=t.coordinate[0],e.equipPointForm.coordinateY=t.coordinate[1],e.equipPointForm.id=t.id,t.device_id&&(e.equipPointForm.device_id=t.device_id),e.equipPointForm.device_name=t.device_name,e.equipPointForm.device_type=t.device_type,e.equipPointForm.img=t.img,e.imageUrl=t.img,e.dialogTitle="编辑设备点位",e.visible=!0)}}))}if(this.canEdit&&!this.choosePointStatus){var s=t.x-this.canvasProp.left-5,r=t.y-this.canvasProp.top-5,c=!1;this.coordinate_list.map((function(t){if(t.coordinate){var i=t.coordinate[0],n=t.coordinate[1];if(i-10<s&&s<i+10&&n-10<r&&r<n+10){c=!0,e.delPointarr=[i,n],e.device_id=t.id,e.has_device_id=t.device_id,e.clearCanvas(),e.getVillageAreaPic();var a=setTimeout((function(){var t=document.getElementById("myCanvas"),o=t.getContext("2d"),s=new Image;s.src="https://hf.pigcms.com/static/wxapp/equipPoint/select_point.png",s.onload=function(){var t=o.createPattern(s,"no-repeat");o.fillStyle=t,o.drawImage(s,i-8,n-8,16,16)},e.showEditbtn=!0,clearTimeout(a)}),500)}}})),c||0!=this.delPointarr.length||this.$message.warning("请先点击选中一个设备点位！")}if(this.choosePointStatus){var l={};l.x=t.clientX-this.canvasProp.left-5,l.y=t.clientY-this.canvasProp.top-5;var d=this.judgeDistance(l);if(d&&0==this.editArr.length)return void this.$message.warning("所选点位不可与已选点位相互覆盖!");this.editArr.push(l),this.editArr.length<=1&&this.editDraw(l)}},cancelEdit:function(){if(this.clearCanvas(),this.getVillageAreaPic(),this.canDraw=!1,this.canEdit=!1,this.showEditbtn=!1,this.choosePointStatus=!1,this.delPointarr=[],this.device_id=null,this.has_device_id=null,this.editArr.length>0){var t=document.getElementById("myCanvas").getContext("2d");t.clearRect(this.editArr[0].x-11,this.editArr[0].y-11,22,22),this.editArr=[]}},startDraw:function(t){var e=document.getElementById("myCanvas"),i=e.getContext("2d"),n=new Image;n.src="https://hf.pigcms.com/static/wxapp/equipPoint/equip_point1.png",n.crossOrigin="Anonymous",n.onload=function(){var e=i.createPattern(n,"no-repeat");i.fillStyle=e,i.drawImage(n,t.x-10,t.y-10,20,20)}},editDraw:function(t){var e=document.getElementById("myCanvas"),i=e.getContext("2d"),n=new Image;n.src="https://hf.pigcms.com/static/wxapp/equipPoint/equip_point2.png",n.crossOrigin="Anonymous",n.onload=function(){var e=i.createPattern(n,"no-repeat");i.fillStyle=e,i.drawImage(n,t.x-10,t.y-10,20,20)}},clearForm:function(){this.equipPointForm={id:"",new_id:"",device_id:"",device_name:"",device_type:"",coordinateX:"",coordinateY:"",img:""},this.loading=!1,this.imageUrl="",this.iconType=1,this.currentIndex=-1},getDeviceList:function(){var t=this;this.request(o["a"].getDeviceList,{type:this.pointType},"post").then((function(e){t.deviceList=e.list}))},savePoint:function(){var t=this;if(this.pointArr.length>0){var e={coordinate:[this.pointArr[0].x,this.pointArr[0].y],type:this.pointType};this.request(o["a"].addCoordinate,e,"post").then((function(e){t.clearCanvas(),t.getVillageAreaPic(),t.$message.success("添加成功！"),t.canDraw=!1,t.pointArr=[]}))}else this.$message.warning("请先选择点位!")},delPoint:function(){if(this.choosePointStatus)this.$message.warning("请先取消选点！");else{var t=this;t.$confirm({title:"提示",content:"确定要删除此设备点吗？",onOk:function(){var e={coordinate:t.delPointarr,type:t.pointType};t.request(o["a"].delCoordinate,e,"post").then((function(e){t.clearCanvas(),t.getVillageAreaPic();var i=document.getElementById("myCanvas").getContext("2d");i.clearRect(t.delPointarr[0]-11,t.delPointarr[1]-11,22,22),t.canDraw=!1,t.canEdit=!1,t.showEditbtn=!1,t.device_id=null,t.delPointarr=[],t.$message.success("删除成功！")}))},onCancel:function(){}})}},drawPoint:function(){this.canDraw||(this.canDraw=!0)},editPoint:function(){this.canDraw||(this.canDraw=!0,this.canEdit=!0)},editThis:function(){var t=this;if(this.has_device_id&&this.device_id){var e={device_id:this.device_id,coordinate:[this.editArr[0].x,this.editArr[0].y],type:this.pointType};this.request(o["a"].editCoordinate,e,"post").then((function(e){t.clearCanvas(),t.cancelEdit(),t.$message.success("替换成功！"),t.canDraw=!1,t.editArr=[],t.device_id=null,t.has_device_id=null}))}else this.$message.warning("当前选中点未绑定设备！")},resetCanvas:function(){if(0!=this.pointArr.length){var t=document.getElementById("myCanvas").getContext("2d");t.clearRect(this.pointArr[0].x-11,this.pointArr[0].y-11,22,22),this.pointArr=[]}},delCur:function(){this.canDraw=!1,this.canEdit=!1,this.resetCanvas()},showModal:function(){this.visible=!0},handleOk:function(t){this.equipPointForm.device_id||this.equipPointForm.new_id?(this.visible=!1,console.log("submit!",this.equipPointForm),this.bindDevice()):this.$message.warning("请先选择一个设备!")},clearCanvas:function(){var t=document.getElementById("myCanvas"),e=t.getContext("2d");e.clearRect(0,0,1e3,1e3)},bindDevice:function(){var t=this;this.equipPointForm.type=this.pointType,this.request(o["a"].addDeviceCoordinate,this.equipPointForm,"post").then((function(e){t.clearForm(),t.clearCanvas(),t.getVillageAreaPic(),t.$message.success("绑定成功!")}))},handleCancel:function(t){this.clearForm(),this.visible=!1},selectChange:function(t){var e=this;this.deviceList.map((function(i){i.id==t&&(e.equipPointForm.device_name=i.device_name,e.equipPointForm.device_type=i.device_type,e.equipPointForm.new_id=i.id)}))},handleChange:function(t){var e=this;if("uploading"!==t.file.status)return"error"===t.file.status?(this.$message.error("上传失败!"),void(this.loading=!1)):void("done"===t.file.status&&s(t.file.originFileObj,(function(t){e.imageUrl=t,e.equipPointForm.img=t,e.loading=!1})));this.loading=!0},beforeUpload:function(t){var e="image/jpeg"===t.type||"image/png"===t.type;e||this.$message.error("You can only upload JPG file!");var i=t.size/1024/1024<2;return i||this.$message.error("Image must smaller than 2MB!"),e&&i}}},c=r,l=(i("a8ef"),i("0c7c")),d=Object(l["a"])(c,n,a,!1,null,"0d7b90ef",null);e["default"]=d.exports},a8ef:function(t,e,i){"use strict";i("fa4f9")},fa4f9:function(t,e,i){}}]);