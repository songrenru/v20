(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21b4ba"],{bebc:function(r,e,t){"use strict";t.r(e);var a=t("b85c"),i=(t("d3b7"),t("159b"),t("b0c0"),t("498a"),t("25f0"),void 0),n={getRules:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=[];return r.length&&r.forEach((function(r){r.type==e&&r.rules&&(t=r.rules)})),t},validateCheck:function(r,e){var t={isOk:!0,errmsg:""};if(!e||!e.length)return t;var s,l=Object(a["a"])(e);try{for(l.s();!(s=l.n()).done;){var g=s.value;if(g&&g.name&&g.type)if("requiredArray"!==g.type)if("requiredArrayEle"===g.type&&r&&r.list&&Array.isArray(r.list)&&r.list.length){for(var m=0;m<r.list.length;m++)if(!r.list[m][g.name]||!r.list[m][g.name].trim())return t={isOk:!1,errmsg:g.errmsg},t.errmsg||(t.errmsg=i.L("请正确输入所有数据")),t}else{if("callBack"===g.type&&r)return t.isOk=n[g.callBack](r),t.errmsg=g.errmsg,t.errmsg||(t.errmsg=i.L("请正确输入所有数据")),t;if(!r[g.name]||r[g.name]&&"string"==typeof r[g.name]&&!r[g.name].trim()){if("required"===g.type||g.required)return t={isOk:!1,errmsg:g.errmsg},t.errmsg||(t.errmsg=i.L("请正确输入所有数据")),t}else if(!t.isOk)return t.errmsg||(t.errmsg=i.L("请正确输入所有数据")),t}else if(r[g.name]&&!r[g.name].length)return t={isOk:!1,errmsg:g.errmsg},t.errmsg||(t.errmsg=i.L("请正确输入所有数据")),t}}catch(u){l.e(u)}finally{l.f()}return t},badgeValValidate:function(r){var e=!0;if(r&&r.list&&r.list.length)for(var t=r.list,a=0;a<t.length;a++)if(1==t[a].show_badge&&""==t[a].badge_val.toString().trim()){e=!1;break}return e},titleTextValidate:function(r){var e=!0;return r.title_txt.trim()||r.desc_txt.trim()||(e=!1),e},goodsBadgeStyleValValidate:function(r){var e=!0;return"5"!=r.goodsBadge_style||r.goodsBadge_style_val||(e=!1),e},bgValValidate:function(r){var e=!0;return"2"==r.bg_type&&""==r.bg_val&&(e=!1),e}};e["default"]=n}}]);