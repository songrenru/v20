(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0da08c62","chunk-0ae2f0b7"],{"14c0":function(t,e,a){"use strict";a.r(e);a("b0c0");var s=function(){var t=this,e=t._self._c;return e("a-list",{attrs:{bordered:!1,grid:{gutter:[24,12],xs:2,sm:2,md:3,lg:3,xl:4,xxl:4},"data-source":t.list},scopedSlots:t._u([{key:"renderItem",fn:function(a){return e("a-list-item",{},[e("a-card",{staticClass:"item",attrs:{bordered:!1}},[e("div",{class:"title-wrap ".concat("classify"==t.type?"pd10-0":""),attrs:{slot:"title"},slot:"title"},[e("a-row",{attrs:{type:"flex",align:"middle"}},[e("a-col",[e("a-avatar",{staticClass:"img",attrs:{src:a.cat_img?a.cat_img:t.icon}})],1),e("a-col",{staticClass:"title"},[t._v(t._s(a.name))])],1),e("div",{directives:[{name:"show",rawName:"v-show",value:"meal"==t.type,expression:"type == 'meal'"}],staticClass:"meal"},[e("div",[t._v("套餐内容：")]),e("div",{staticClass:"detail"},t._l(a.store_detail,(function(a,s){return e("span",{key:s,staticClass:"type-name"},[e("span",{staticClass:"cr-primary"},[t._v(t._s(a.num))]),e("span",[t._v("个"+t._s(a.type_name)+"店铺")]),e("span",{staticClass:"plus"},[t._v("+")])])})),0)]),e("div",{directives:[{name:"show",rawName:"v-show",value:3!=a.discount_type,expression:"item.discount_type != 3"}],staticClass:"cr-primary discount-icon"},[e("span",{staticClass:"txt"},[t._v("有优惠")])])],1),e("a-row",{attrs:{type:"flex",justify:"space-between",align:"middle"}},[e("a-col",{staticClass:"cr-primary txt"},[t._v(t._s(t.currency+(a.year_price||0))+"/年")]),e("a-col",[e("a-button",{staticClass:"cr-primary btn",attrs:{size:"large"},on:{click:function(e){return t.goBuy(a.id)}}},[t._v("立即购买")])],1)],1)],1)],1)}}])})},i=[],r={props:["icon","list","currency","type"],data:function(){return{}},methods:{goBuy:function(t){this.$router.push({path:"/new_marketing/merchant/PurchaseDetail",query:{type:this.type,id:t}})}}},n=r,c=(a("9ce7"),a("2877")),l=Object(c["a"])(n,s,i,!1,null,"0fa90114",null);e["default"]=l.exports},"1e94":function(t,e,a){"use strict";a("8757")},5051:function(t,e,a){"use strict";var s={getCatList:"/new_marketing/merchant.MarketingPackage/getCatList",getCatStoreList:"/new_marketing/merchant.MarketingPackage/getCatSearchList",getMealList:"/new_marketing/merchant.MarketingPackage/getSearchList",getClassifyDetail:"/new_marketing/merchant.MarketingPackage/getCatDetail",getMealDetail:"/new_marketing/merchant.MarketingPackage/getpackageDetail",getPrice:"/new_marketing/merchant.MarketingPackage/getDiscountPayPrice",getPayType:"/new_marketing/merchant.Order/pay_check",checkOrder:"/new_marketing/merchant.Order/pay",checkOrderPayOk:"/new_marketing/merchant.Order/searchPayStatus",getOrderList:"/new_marketing/merchant.order/getOrderList",getStoreUserdDetail:"/new_marketing/merchant.store/getStoreUserdDetail",getOrderDetail:"/new_marketing/merchant.order/getOrderDetail",getCategoryStoreDetail:"/new_marketing/merchant.store/getCategoryStoreDetail",getCategoryStoreList:"/new_marketing/merchant.store/getCategoryStoreList",getRenewPayInfo:"/new_marketing/merchant.order/getPayInfo",savePayInfo:"/new_marketing/merchant.order/savePayInfo",goPay:"/merchant/merchant.pay/goPay"};e["a"]=s},8757:function(t,e,a){},"9ce7":function(t,e,a){"use strict";a("ad25")},ad25:function(t,e,a){},adb3:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-20 ml-10 mr-10 mb-20"},[e("a-card",{staticClass:"wrap",attrs:{headStyle:{border:"none"},bodyStyle:{background:"#F7F7F7"},bordered:!1,"tab-list":t.tabList,"active-tab-key":t.tabKey},on:{tabChange:t.onTabChange}},["classify"===t.tabKey&&t.classifyCatList.length>0?e("div",[e("a-tabs",{staticClass:"classify-list",attrs:{tabBarStyle:{background:"#fff"},"default-active-key":t.classifyCatList[0].value,"tab-position":"top"},on:{tabClick:t.selectClassify}},t._l(t.classifyCatList,(function(t){return e("a-tab-pane",{key:t.value,attrs:{tab:t.label}})})),1),e("storeItem",{attrs:{icon:t.classifyIcon,list:t.classifyList,currency:t.currency,type:"classify"}})],1):e("div",[e("storeItem",{attrs:{icon:t.mealIcon,list:t.mealList,currency:t.currency,type:"meal"}})],1)])],1)},i=[],r=a("14c0"),n=a("5051"),c=a("c2a0"),l=a("bef3"),g={components:{storeItem:r["default"]},data:function(){return{tabList:[{key:"classify",tab:"分类店铺"},{key:"meal",tab:"套餐"}],tabKey:"classify",classifyIcon:l,mealIcon:c,mealList:[],classifyList:[],currency:"¥",classifyCatList:[]}},created:function(){this.getMealList(),this.getCatList()},methods:{selectClassify:function(t){console.log(t),this.getCatStoreList(t)},onTabChange:function(t){this.tabKey=t},getMealList:function(){var t=this;this.request(n["a"].getMealList).then((function(e){t.mealList=e.data||[],t.currency=e.currency||"¥"}))},getCatList:function(){var t=this;this.request(n["a"].getCatList).then((function(e){Array.isArray(e)&&(t.classifyCatList=e,t.getCatStoreList(e[0].value))}))},getCatStoreList:function(t){var e=this;this.request(n["a"].getCatStoreList,{id:t}).then((function(t){Array.isArray(t)?e.classifyList=t:e.classifyList=[]}))}}},o=g,A=(a("1e94"),a("2877")),m=Object(A["a"])(o,s,i,!1,null,"2fd3276a",null);e["default"]=m.exports},bef3:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAqOSURBVHhe7Z15zCRFGcYXAREQDSiSeIASYqKCyhWihkSEvwiHBPBAheUyIkdICEFAEwSCQfmDIyGcIuxy6S4grLtcyx4Iy7GyyEI4BPZC9kAO9z5YX+vX0707M10z00ddPVNP8uy339fT3VXvM11d9dZbb42RIcD760RmLBa5+VWRC2eL/HS6yPcmi3zjXpHP3yWy43iRHW4TGXNzi/yfv3GMz/BZzuFcrsG1uOYwoHECr9so8sRSkSvmihz5iMgXlEiZcKbJtbkH9+Ke3LtpaITAS1aL3KierKOndj6Jrvlxde/vP9oqC2VqAoIV+APVRGLIg6eIbPnHvLF9kzLRtN/wSqusoSI4gZ9eJjJ2psj2t+aNGiopK2WepZrx0BCEwBv/JzJxnsi3H8gbr2mkDtSFOoUArwJjA4yx1z15QzWd1Im6+dbZm8DT3hbZ9695wwwbqSN19QXnAi9aKfLjaXlDDDt/pOq8UNXdNZwJzDvpmpf8DnN8k7pjA5fvZycCz1sh8p1J+QqPKrHFm8tT41iGdYHHvS7yiRF+ansRm2Ab27Am8NoPRU55PF+xyE5iI2xlC1YEpiO1/wj0kE0RW2EzGzAu8Jx3RT57Z74Skf2JzbCdaRgV+MG3Wg55XQUiBxPbYUOTMCbwPfNFPnpLvtCR5YgN8YCZghGBb1e9wRBnfJpKbIlNTaC2wHzborjmiU0nGHiSawk8eVFslm0S22LjOqgs8Avvjbbb0RXpeGHrqqgkMGM2AtZ0BYo0T2xddZxcWmACz6ITwz2xeRWPV2mBT47uR2/E9mVRSmCc47obR7pj2QmKwgIz5RdnhfwTDcpMNRYSmAnqOJ8bDtGiaNBAIYGJQtDdKNIf0aQIBgpMHFEc74ZHNCkS4zVQ4GMfy188MgyizSD0FXjmEpEtNBeODIdo1A89BeYdPgpxy00nGvXrb/UUmFki3QUjw2O/+WOtwHTBfSwn2fs+kdcdhZPaAGXfR9VBVzeb3FNp1WvYpBX4vgX5i7jgpIVpARqMqW/r62abaKaDVmBfTo2730wL0GDc7+nhQDMdcgKzxlV3ARfc9e5W0NkbqqlrIin7F1UddHVzQd365JzAJ87MnxjZDKJdNzoEJhVBk1bWR3YS7brTSXQIfP0r+ZMim0U0bEeHwCQV0Z3kgl+ZKHLIlOGgzdROg4iG7dgk8OLV/sJfd7lDZI3FBViuwdz5Vp6iTdEQLTNsEph0QLoTXPC8Z9NCDBEOf0RfVxck/VSGTQKT4Ev3YdtkMuPVD9JCDBH+tkhfXxdEywyJwOs3+gvH+W7XO2NYgOtwN09jYrREU5AI/KRH54apNTgh4pI5+jq7ILk1QSLwH17If8AFdxo/XJ2rbvx7lb/OFpqCROCjPL1/z5qVlGGo4cu23BckAuMD1n3INuusuWkKpnjqbKEpGPPe2vxBFzzg/lYBhh10tr70Z70NbDPRluzmuoO2eVPbWG3YcdnzehvYZqIthtYdtElCPlesT2s/AsCztLWHzlYyt/Drf+QP2ObP/57WfIRAtnqdLWwSD+GY46bnD9hmiImzbYNgAJ0tbDJJ+krKfN1BW8Q1uaGBm1vUxaoNenvYZKItkYy6gzY5f0Va6wp47b/pfyqAd+GyNekvFVBnqx0fo5Vv3qt+fs5DVrrrXk5rXRJEK1Deqtvb/Eb1Ny5PPTxlwT0JiS26qq8buGR1trDJJOPgJ8flD9jmlyeIfFjBUJemw42rCq6sa8dy1Wv/zO2tfBcrVXNZFmyYxb1v/Vf6hxKgrj7ipRNtfa0cPPeZtPYFgddr2z+1zmW2pGxTffyMzff+xRPpHwuCBCj4zTn30+pLsqDkKyb7YrpmklZSd8AF6WzRZBZ5kBG3O8EpU3EvFnB18vScOavzXPgrNYQocu+3Vol8dWLnubRARVfZMxb1mihO+0eHJIZo9jupNbpAs8q3f7sekZ480Rc91+rA6MDKO1yiunPhQerez/a4N+/7q9Wr4FPpk9tNWpErX2z1jnVgGcsPQ1h6G8ribtbXnKaazt/OETnnaZFDHyoewovQfFHOUE8qTf/PVHO8x1/0n9Xx66q3+csnWy7Fs59qhdsUvTfvOWZuzp+9+Xz2TvpIAOkdkybaRyerDmluq65ZZlz4tYqL6j6mvkSnqy+B7lioTLRtUvLuH6Qr2k+osPqCyvLeJHqlSn7N36vhFUMkQox0x0Nkom0yGNYcDI0HTtr8vuMnv+s+pyNN+MNtibbveKNcpAW+86xDhqOku9MVKhNtXbsqy5J3GU3j6q7QHn5nuDPoXYcYz2g6UuxGtvuAeVreYWSz6e5t49H6iQcfflkm2vqYbNBxZzW+5D2X/Y7xEXbugKEQQyjey3TS6DBuo66Bt4uNnfEe9fN7453CcXGE+izNGfdnnEvr8Lt/irwzwK1JD/xU9XRnXxT6BlwHh0pWD59MtGVbc91B18wCABjyNHEygvdzliyUL4eujq55Adr6mPDX8dqK/ukQEYrArHDwFrLTzSiweSbavusp6K6bUWDzTLSlQD6XO2aMApvlprBZ/vEVnN3OKLBZdgS++1q60s4osFl2LF3xufgsYxTYLDsWn/lcPpoxCmyOOHw6lo8CXwvAM0aBzTG3ABz4TOEAo8DmqE3h4DMJC4wCm2HPJCzAZxqlKLAZ9kyjBHwmQosCm2HfRGgEmvUKcLPNKHB9ol3fVIbAVzLSKHB9DkxGCnylE75iblqAIcDFnrLrFEonDL71QP5k2yTH47DgsIf1dbRJNNNBK7CvlP63VVj3ExpYB1w1rLcOS6X0J/yEGCfdhWwSwxD8zrqjqqv4fGHpmtZKiCTYvKtetll6Uw4Qt9VpDktvqwP4QsSNscIny1L7NXY9BQYs3tJdNDIcEnfVD30FBnFzynBZe3NKELeXDZN05oxsLwviBtHhkR57ERQSmC543OI9HLL+uOgwspDAgKWXvsN6IlsasMtaURQWGOBp0t000h3LevtKCQxOfjx/00g3PEnZvixKC8wKuv2iA8Q5sXm2erEMSgsMyBtFQjFdQSLNE1tj8yqoJDBg4bUPx/qokWw/dbY+qCwwmLyoWkKTyGLEtti4DmoJDJjJ8JrJbUiJTSf0mSUqitoCA3JhRJHNEVua2jDMiMCAJzk21/WJDU08uRmMCQzYIyh2vKoT22FDkzAqMHjuP/nMsJGDic2wnWkYFxgwZovOkOLEVlXHuYNgRWDAppOnRLfmQOL6tblBpzWBM4xTvcE4C5UnNqmyPUBZWBcYML0V55M3k/ncMlN+deBEYMAENVEIoxz+Q92xgcuYb2cCZyCO6BgP27z5JlvbFYmhMg3nAmcgna+PrWZckzpSV1/wJjCgpcID5mOZjG1SJzxSDltjLbwKnIF3EkLT+dAZq0mkDtTF5Xu2H4IQuB2scR0701+mgSqkrJQ5xF1VgxM4A6kISO3E3kYhzlRRJspGGbvTJoSEYAVux5LVrdxP9ER9DrOYDCDJGGWhTE1AIwRuB/sskIeRlA/sy2AzFTLX5h7ci3tW3fXUJxonsA7s8zB9cevJYg8KdkSh+WRHMzbo2HF8505mvDP5G8f4DJ/lHM7lGlyr13Z5zYLI/wHrVBn7ej17dwAAAABJRU5ErkJggg=="},c2a0:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAvwSURBVHhe7Z33m9RGEobn///5zndn7LvzBdtEk2wwrAkLGBawMXGJu0s0Ji5xdmKfXu1pRyNqRq1Rl9L09zyfDWiU6lOn6urqlmkAuhtD8+zxwKzc6Jsr57rm7NGOOb53wxz+dsPs/2fb7NnWNrv+9tF8+6dN8mf+jWP8ht9yDudyDa7FNZuA2gk86Bvz/PeBuXmpZ0593wlFioRzTa7NPbgX9+TedUMtBG5/GJp713vm9KHOWEksmtz71A+d8Fl4pjqgsgJ3O5uiUn1u/7Ns8DLJM/FsPCPPWlVUTuCXTwdmaaHckpqVPCvP/CJ49qqhEgIPgwLw8F7fLOzaEA1YJ/IOvAvvVAWULjDGOPRN/YVNknfi3cpGaQL/8WhgftzePGGT5B1517JQuMAf3g3Nzz92RGM0mbwz7140ChOYNun2lV6tOk+uybtjgyLb50IEfv92aBZ2N786tiW2eP+mGJXVBV672Te7P5dfdJ6JTbCNNtQExq13/lhXfDnPEbGRpgtURWA6E0d2+CrZlthKqwPmXODXzwdm3z/0JgCaSmyG7VzDqcC/3+/PdS85L7EdNnQJZwLjtdnxF/nBPe2JDV16wJwIvHarX8kZn7oSW2JTF8gtMF+bF9c9senDu/lFziXwkzVfLWsS22LjPJhZ4PUXA9+hKoDYGFvPipkEZsymGQvlOU5sPes4ObPAeF28E6N4YvNZPF6ZBT5/bP6m+qpCbJ8VmQTGOS7d2LM4Zp2gsBaYKT8/K1Q+0SDLVKOVwExQ+/nc6hAtbIMGrAQmCkG6kWd5RBMbpApM99yPd6tHNLEZOqUKfOZw+b1mqqTV5X7YD6jy+qB+UKjevt5ckVHEUBJt0jBVYFbZSRcuirjq7l2vsKIpuHO1p+7KRaNpmCpw2XHLqwXELGlDe2iJRtMwUWBmiaQLFsWTB7IP6qsKViRK7+iK0+aPRYHpghexnGT3trb54b/t8CtMsooLuWYFa4ul93fFQ19PHjaJAj9a0S29PNCVs11z91pP5P079a+ak9AuMGgmQRRY06mxeLAjihrn+svmlN4I2r4ENJPwicBUjdIFXJCvWBI0zpUbvUoPhWYFOT92/lW2iytKzdonAi/9pNchIMmJJGqcad3+OuPcUd3OFtolMSYwqQi0vFYH/9UWBU2y07Z0stYQz5/odrbQLplOYkxgDCyd6IJ8XUkxk3w8oaPQJNDBlOzjitgxjjGBSSoinZSXfFl4dZKCJvluvbmlN8Kt33Q7W2gYx5bApAXSCn89uT+99K7eLHbdbFmgCdqp6L5Ew3iKpy2BcZBLJ7jgjV9kUeN8+UdzO1dJnD2i29lCywhbAmu500gVKAkaJw/Us5vebAS0J3HQMkIo8CAoPFrhOL8upg+Nnj5ofucqCVy0kr1cEC3RFIQCv1Dyle790m5o9PG9XeO7EbRfDDUoAWWSWa4Lx7tjvH6hlymBKfkvJZu5Iv5vEAq8/KvOzZiQlgSN84Gl3zlKbShdo2gyIpD8BTRHth1FPlbNuWI0BaHApxXa3x2ffQyHBJKB4rRdlsHiaOn8snh8nzykzDLUI5OtdA0XRFMQCrz/K/ftAc5vyTBJ8iXbYP3l0Fy/2FOlTW8/4rXzn9Z6lMgsnjjNahpNQasTtBvSD/LSxu984XjHukrjd/hytZeqfv+ftpVTBvLb6Dw6NsSNZYHmxA5E2xadBulgHh6w9Dsf2Tk93EQCgW08uCYZsjGjlUZ+F50T9VqzAIeEZD9XRNsWQW3SwTykbZEEHWNQSk7uzy5wk8BHIdnPFbFzi6pUOpiHv51Jr54hQ4t5Rq+rK/Dln7umpeE2o/MgCZqk7RCpqWCNkWQ/VyQBaktjBkkSUyLj2nmYYJiER8qRq2jbIoJROpiHty/Lgkq09WI1EZdO6aZ6xPHS0shKR9sqiSmRnt48gppLOw0G2rZ2f+7+JvhmJTElEmTH0GfecP+2/sICtG1pxGD9tMfOixUxcozPCxhDa84mRUTblnQgL7kwccCSmCKDzlZdNppygctni0uzrCIwpIsuijmBhOy42mCKjpurjTBoPkhGxpjVBUhRKNlLiypVNCTIO4vzHq7dyh82yxrie0G7zvWePsy3f1GvOwzH6lyLNjPvB8iwcPtnsr00GFbRGp2siDjjM1XVAel0vXmVvfTh9qMtT17vwd2+9YxVHEz7rSyPX4u/v32d/dkIBCgj/VTYydJO3s1ylawiQ5ZE4ulJK4FUocwVU8VL14nI3HTaikXuxT1xQEjXgMxo4TugRPdTHHHtj8OwFtv7d/0OlcRwmMRgWDrokge+aptrGcbGkCk7wm33fNEOg8g2px/74d6Gr18MwtAdVtTRQZPOX/1/6UPYeDoFxp6/LHbNs+B8FrkRcEBEJ4m4qT2S16Fa5V53gj8nvX40QyeCZ8T3jnuWZ0ZQhonMlJWdhTd0dGgFuydJ23Ni34ZZTmmXKe2Uku++nPzVY7xJ882UZNphSvaNi5P3aeJ5ePdpTpmweg9KIXjzamiO1mxvxdBVqR2jmyRf9cF/t8Ob09NGTHbfZlkpXxxB4RyH0TmTVuUR1EfkyJlDHbMUtHEEw3UT668er/bD33Bf/i/FQVGqj30XXOfw5rNcOt01Tx8MxOaB6y0e6FgFr3NdSvO5hU6hnauIaKsyXZiHVHURaFv5+8py31w80f2kNO4L2rZow+a0Hi4dLapkqvXFgxth+4RIRGLgdCDGClvYZhaghsDNSkm/utQ1F4LnY4scPg7+jWYkjidBExB/9iLIInuVCf8kCcBj0RUrDKXjEemQTQKlCRHJDYVTBG9Q3aAR+zaNfPgqITtxUjXG0zXQ5rFVO2JSxVL97tnW3ur8NBnaaRySDEN2cCxIB12R6i8SN41UY01G0QKj7WbYrOK0FS8liSnRC+yOW2Gz/Ecj8D2iF3iEIgUeC3zXWroCvcAjFCnw2NIVrcVn0As8QpECjy0+01w+6gUeoSiB8ReMLR8FWgvAvcAjFCXwJwvAAYNi6cd56QUeoSiB0TLClsBaSVi8wCMUMVmBhmISFqAxs+QFHoHJDslGLomGcYwJjJGlk/LQCzxCEQJjxzjGBMaZ7zphphd4hKM7dQVGu+Ss2pjAwHUyUmaRJDElEirTZBDZItnIFVOTkQLXq87xc0tiSiQacmg3HVs7EMor2cclrdIJA9e9vSzhs01MBg6uKgdWoJkEUWDXKf1peyQxJRKamiXfVB2AK1h7e51MKf2JnnCd9hbviiSoRALnmrKslMB5rcUFEdFqUnixKDDQ2FaHyX+iNmzyZ0EC3AhrJUoSwW34IfjtuzcOuD4MIykpfdgCoWxJzDQRnUVtpJ15W50IGovDPd0SjaZhqsDa8Vqe+Zm2gH6qwKAKm1N6ysy9OSXw28tWk2jiZHtZoL2pk2d2kujGBlYC0wUvwlHuaceFXY63eAcsq9QK6/G0JxowjLOFtcCAxV3STT2LY9Y9lTMJDMpYqe65SWm2KA2ZBWbRV1EeGs8RsfksC+4yCwzonmsud/EcJ7a2GRJJmElggI/Yj4/1iY1t97WQMLPAgPxR2tNg80xsi43zIJfAgJkMjXDbeSc2fXg3n7ggt8CA7G1eZHfEltjUBZwIDCjJvrrOT2zoouRGcCYwIOzVd7xmJ7ZzHTrsVGDw6tkgzGAjvYDnZGIzbOcazgUGjNm8M8Se2GrWcW4aVAQG5HEkb5T0Qp4j4vpNy3mZB2oCR1i72fezUAKxSdaJg1mgLjBgesvPJ4/IfG6WKb88KERgwAQ1UQjz3Mvm3bGB7WS9CxQmcAQ6EyQPlQzQZJLdT6sjNQ2FCxyBPRXmIe6ad3S1f8QsKE3gCHjAXC+TqQJ5J5ceqVlRusCANgmh6XxIxqoTeQfepch2dhoqIXAcrHFdWug4zzSgSZ6VZ7bNNV0kKidwBFIRkA6ITOxVnKnimXg2m2TkZaKyAsdBWiAMSU+0zGEW944yzNdlp7ZaCBwHgWfkYSTVP1vJa8aGcW3uwb24Zx2zzNdOYAmdjWG4yo6Sxb4LbEZB9Xn4m829GcgoHy/5UZZ5jvEbfss5nMs1uBbXrD+M+R8nC6U4Np4QSQAAAABJRU5ErkJggg=="}}]);