(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["SD1Page"],{b6f9:function(t,a,r){"use strict";r.r(a);var i=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"route-container"},[r("div",{staticClass:"back-button",on:{click:t.goBack}},[r("vs-icon",{attrs:{icon:"keyboard_arrow_left"}}),t._v(" Go back ")],1),r("h2",{staticStyle:{"margin-bottom":"1rem"}},[t._v(" Social Distancing ")]),null==t.currentData?r("div",[t._v("Loading...")]):r("div",{staticClass:"flex-wrapper"},[r("div",{staticClass:"half"},[r("br"),r("br"),r("div",[t._v("Name: "),r("b",[t._v(" "+t._s(t.currentData.Name)+" ")]),r("br"),r("br")]),r("div",[t._v("Employee Id: "),r("b",[t._v(" "+t._s(t.currentData["Employee ID"])+" ")]),r("br"),r("br")]),r("div",[t._v("Visitor Id: "),r("b",[t._v(" "+t._s(t.currentData["Visitor ID"])+" ")]),r("br"),r("br")]),r("div",[t._v("Cluster/Location: "),r("b",[t._v(" "+t._s(t.currentData["Cluster/Location"])+" ")]),r("br"),r("br")]),r("div",[t._v("Violation Score: "),r("b",[t._v(" "+t._s(t.currentData["Voilation Score"])+" ")]),r("br"),r("br")]),r("div",[t._v("Violation Density: "),r("b",[t._v(" "+t._s(t.currentData["Voilation Density"])+" ")]),r("br"),r("br")])]),r("div",{staticClass:"half"},[void 0!=t.currentData.video||null!=t.currentData.video?r("video",{staticStyle:{"object-fit":"cover"},attrs:{width:"500px",height:"350px",controls:""}},[r("source",{attrs:{src:t.currentData.video,type:"video/mp4"}})]):r("p",[t._v(" Video Not Found! ")]),r("div",{staticStyle:{"margin-top":"1rem"}},[r("Chart",{attrs:{"chart-data":t.currentData.graph}})],1)])])])},e=[],o=(r("a9e3"),r("25eb"),r("9287")),n=r("5178"),s={name:"SD-1",components:{Chart:n["a"]},data:function(){return{currentData:null}},methods:{goBack:function(){this.$router.push("/social-distancing")}},mounted:function(){this.currentData=o["a"][Number.parseInt(this.$route.params.id)]}},c=s,u=r("2877"),l=Object(u["a"])(c,i,e,!1,null,null,null);a["default"]=l.exports}}]);
//# sourceMappingURL=SD1Page.d1a4d732.js.map