(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8c070860"],{"7f0f":function(i,t,n){"use strict";n.r(t);var e=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"computer_model"},[e("div",{staticClass:"title_content"},[e("div",{staticClass:"border_box"},[e("div",{staticClass:"leftemptyybox"}),e("div",{staticClass:"titletext"},[i._v(i._s(i.L("开台")))]),e("div",{staticClass:"closeicon",on:{click:function(t){return i.closemodel()}}},[e("img",{attrs:{src:n("c588"),alt:""}})])])]),e("div",{staticClass:"tableinfo"},[e("div",{staticClass:"table_name"},[i._v(i._s(i.L("台号"))+"："+i._s(i.tableinfos.name))]),e("div",{staticClass:"table_size"},[i._v(" "+i._s(i.L("餐位数"))+"："+i._s(i.tableinfos.min_people)+"-"+i._s(i.tableinfos.max_people)+i._s(i.L("人"))+" ")])]),e("div",{staticClass:"numberinput_container"},[e("div",{staticClass:"numberinput"},[i._v(i._s(i.diningPeople))])]),e("div",{staticClass:"computer_wrapper"},[e("div",{staticClass:"computer_container"},[i._l(i.numbervalueList,(function(t,n){return e("div",{key:n,staticClass:"btn_items",on:{click:function(n){return i.addnum(t)}}},[i._v(" "+i._s(t)+" ")])})),e("div",{staticClass:"btn_items",on:{click:function(t){return i.del()}}},[e("img",{attrs:{src:n("a350"),alt:""}})])],2)]),e("div",{staticClass:"confirm_btn",class:Number(i.diningPeople)>0?"":"noclick",on:{click:function(t){return i.confirmOpen()}}},[i._v(" "+i._s(i.L("开台并点菜"))+" ")])])},c=[],l=(n("fb6a"),n("d3b7"),n("25f0"),n("8bbf"),{props:{tableinfos:Object},data:function(){return{tableinfo:{},diningPeople:"",numbervalueList:["1","2","3","4","5","6","7","8","9","","0"]}},created:function(){console.log(this.tableinfos)},methods:{confirmOpen:function(){var i=this;this.request("/foodshop/storestaff.order/createOrder",{table_id:this.tableinfos.id,book_num:this.diningPeople}).then((function(t){console.log(t,"-----------------------开台点击--------------------"),t.order_id&&(i.$store.commit("changeOrder",t.order_id),i.closemodel(),i.$router.push({name:"menu",query:{orderId:t.order_id}}))}))},del:function(){this.diningPeople.length>1?this.diningPeople=this.diningPeople.slice(0,this.diningPeople.length-1):1==this.diningPeople.length&&(this.diningPeople="")},closemodel:function(){this.$emit("closemodel")},addnum:function(i){""==this.diningPeople?this.diningPeople=i:(this.diningPeople=this.diningPeople+i.toString(),this.diningPeople>255&&(this.diningPeople="255"))}}}),s=l,o=(n("a484"),n("2877")),d=Object(o["a"])(s,e,c,!1,null,"1d56a53b",null);t["default"]=d.exports},a350:function(i,t){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAiCAYAAADPuYByAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNDQkQ1RDg5RTgwOTExRUE5QUFDQjE3NzA4MjRCN0U4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjNDQkQ1RDhBRTgwOTExRUE5QUFDQjE3NzA4MjRCN0U4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6M0NCRDVEODdFODA5MTFFQTlBQUNCMTc3MDgyNEI3RTgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6M0NCRDVEODhFODA5MTFFQTlBQUNCMTc3MDgyNEI3RTgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5CltaDAAAC/klEQVR42syYS2xNQRjHT3tRrqQ39NpSFsKuuqDRqHqmJaVIPBdIuDRlQTy3iAgLEmki4pV4S3pLpK02NN6xEGIrIWUhEolocT2q+E/yTTL5MueemTOce77kt+h3eib/b+73mDlFmUzGs7TdYC9IeYWz12DtEMuX1oNDXuFtAjhdbPFCJWjx4mMTTcWnQRaMiJF4zyRtEuASGMf8J0BrhFqngQO24sUL85jvNtgCBiMUX8IdQWmzjLqLar1gdcTCtZZP/GRwBhQpvhxYCj7EIef9xJdSgZYyvxgKzw3WXQw6QdJQRw24B0a5ihc7fRZMYv6j4KLBmkvANVAH2g0CmEmB1lAtjXYRv4dSQ7UesNNQ+BUwjP6uDQhAPO9QnldSAGVhxM8H+5nvDVhpWKA5zf/V0s6OZP7ZPoGJNQZsxZdTWiQcCrQLNNJ7PKfVAITwmxrhj0A96LcRn6SBk2bPN4Nnlk2gm9KHBzCDAmj0Ef6QhH+2zfkWyjfVjoHzIbtYN3UcXQBtGuEPbIVL8RvBOua/C3Y4tmFReIs0AXg+wr+E6fMHme8tWP6PJugd0JAngPsk/GvYITXg/V8bmmcYJliDsBa/lfnGgqsuiyomBtV1MNzneTUVcSqs+FaanqrNAkcchdcHCJc2HdwKE4D8OXdR/qm2DaxxEN6mOcb20K/Bc7wqTABS/C+wArxjz0+CKZbCF9KOl2i6TwMNMl13qaIWm7IVL+w9dZmfii9JOzjGQnhWOdv49X2/vj6VgkzZipfjmfd3cf277FDAfhNXTNQFmgB+u5wqj4MLzDcHHDZYr53G/4+Asw4/EsizzBM6HPa5XEY2gRfMtx2sMlizk3b6Bgn/FvD/8jDWRcXc57Lz8jQp7q+fmP8UqDAMQAj/bqjjsa3woDvsK2qVfzQFnI7zHVZah+ZyUu5YwJF+dNpHLaxO8c2lws5GqLUijPhBSp+nYLzibyJimzbSPlIB57wYmc1XYvG9pjlG2l8WW75wjj6N9BdYeC/Y8FeAAQAybKI4jo7bcwAAAABJRU5ErkJggg=="},a484:function(i,t,n){"use strict";n("b4c1")},b4c1:function(i,t,n){},c588:function(i,t){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkFEQUQ2MEJCRTc5NDExRUFCMUVDQUMyQjY4MTkxNzFBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFEQUQ2MEJDRTc5NDExRUFCMUVDQUMyQjY4MTkxNzFBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QURBRDYwQjlFNzk0MTFFQUIxRUNBQzJCNjgxOTE3MUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QURBRDYwQkFFNzk0MTFFQUIxRUNBQzJCNjgxOTE3MUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4ZNxy+AAABD0lEQVR42qzVSwrCMBAG4DoEFTyeS72EC99YsVFQN27di3iZXsW9SyclhRDymGln4BctOF8nbdpBXdfPoihmmDPmVshWiVliPgo/5pgJ5ooZYrQQYk58b79PwR5oq8IchJHmN9hJjoKYj2wwD3CaS2AhpLnu4DX3sZKBXGKID4WwExEzyC6GhKDQJDnMR9ahbQKRP2siFkLuoYaQONMcRkZMqczaa2c5W8zUiINQoBRGRnJLl1pGFsKBTI2Jx3pB/oXn7jMSFLq7Si6mOiB3b3O7N0jVZaIcojmTQUeEjUGfxwoHg54IGQMBhISBEJLFlH1lSyCpZ+MPbGMpJDbZ1kBvzBezEEJcbGV7v/4CDACcQVyt8CQU0QAAAABJRU5ErkJggg=="}}]);