webpackJsonp([10],{"B/cU":function(e,t,r){(e.exports=r("FZ+f")(!1)).push([e.i,"",""])},Fntp:function(e,t,r){(function(t){var r=1/0,o="[object Symbol]",n="[\\ud800-\\udfff]",u="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",f="\\ud83c[\\udffb-\\udfff]",a="[^\\ud800-\\udfff]",l="(?:\\ud83c[\\udde6-\\uddff]){2}",i="[\\ud800-\\udbff][\\udc00-\\udfff]",c="(?:"+u+"|"+f+")"+"?",s="[\\ufe0e\\ufe0f]?"+c+("(?:\\u200d(?:"+[a,l,i].join("|")+")[\\ufe0e\\ufe0f]?"+c+")*"),d="(?:"+[a+u+"?",u,l,i,n].join("|")+")",p=RegExp(f+"(?="+f+")|"+d+s,"g"),m=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),b="object"==typeof t&&t&&t.Object===Object&&t,h="object"==typeof self&&self&&self.Object===Object&&self,v=b||h||Function("return this")();function j(e){return m.test(e)}function y(e){return j(e)?function(e){return e.match(p)||[]}(e):function(e){return e.split("")}(e)}var g=Object.prototype.toString,F=v.Symbol,w=F?F.prototype:void 0,x=w?w.toString:void 0;function C(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&g.call(e)==o}(e))return x?x.call(e):"";var t=e+"";return"0"==t&&1/e==-r?"-0":t}function O(e,t,r){var o=e.length;return r=void 0===r?o:r,!t&&r>=o?e:function(e,t,r){var o=-1,n=e.length;t<0&&(t=-t>n?0:n+t),(r=r>n?n:r)<0&&(r+=n),n=t>r?0:r-t>>>0,t>>>=0;for(var u=Array(n);++o<n;)u[o]=e[o+t];return u}(e,t,r)}var k,R=(k="toUpperCase",function(e){var t,r=j(e=null==(t=e)?"":C(t))?y(e):void 0,o=r?r[0]:e.charAt(0),n=r?O(r,1).join(""):e.slice(1);return o[k]()+n});e.exports=R}).call(t,r("DuR2"))},X5cQ:function(e,t,r){var o=r("VU/8")(r("iujp"),r("kktW"),!1,function(e){r("yLU3")},null,null);e.exports=o.exports},iujp:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});r("Fntp");t.default={name:"Forms",components:{DataTable:function(){return r.e(32).then(r.bind(null,"bnM4"))}},props:[],data:function(){return{formCreateForm:{},formCreateFormRules:{name:[{required:!0,message:"The name is required",trigger:"blur"}]},tableOptions:{border:!0,stripe:!0,showSearch:!0,showHeader:!0,showNewBtn:!0,showRefreshBtn:!0,showHeadHr:!0,showTitle:!0,viewText:"View",deleteText:"Delete",collumns:[{prop:"id",sortable:!0,label:"ID",align:"left",resizable:!0},{prop:"name",sortable:!0,label:"Name",align:"left",resizable:!0},{prop:"created_at.human",sortable:!0,label:"Created",align:"left",resizable:!0}],bulkOptions:[{value:"delete",label:"Delete"}]}}},computed:{},watch:{},mounted:function(){},methods:{}}},kktW:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("data-table",{attrs:{"type-name":"form","request-with":"","table-options":e.tableOptions,"create-form":e.formCreateForm,"create-form-rules":e.formCreateFormRules},scopedSlots:e._u([{key:"createForm",fn:function(t){return[r("el-form-item",{attrs:{label:"Form Name",prop:"name"}},[r("el-input",{attrs:{autofocus:!0,"auto-complete":"off"},model:{value:e.formCreateForm.name,callback:function(t){e.$set(e.formCreateForm,"name",t)},expression:"formCreateForm.name"}})],1)]}}])})},staticRenderFns:[]}},yLU3:function(e,t,r){var o=r("B/cU");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);r("rjj0")("4cdfd7c2",o,!0,{})}});