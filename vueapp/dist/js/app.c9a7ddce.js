(function(e){function t(t){for(var a,i,o=t[0],c=t[1],u=t[2],l=0,d=[];l<o.length;l++)i=o[l],r[i]&&d.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);f&&f(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},s=[];function i(e){return o.p+"js/"+({about:"about"}[e]||e)+"."+{about:"99b5cca3"}[e]+".js"}function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(function(t,a){n=r[e]=[t,a]});t.push(n[2]=a);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=i(e),s=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+a+": "+s+")");i.type=a,i.request=s,n[1](i)}r[e]=void 0}};var u=setTimeout(function(){s({type:"timeout",target:c})},12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(t)},o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"2bdf":function(e,t,n){},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"73332","./en-il.js":"73332","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=s(e);return n(t)}function s(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(a)},r.resolve=s,e.exports=r,r.id="4678"},5973:function(e,t,n){"use strict";var a=n("dfa7"),r=n.n(a);r.a},"62bf":function(e,t,n){},"63a7":function(e,t,n){"use strict";var a=n("62bf"),r=n.n(a);r.a},c6da:function(e,t,n){"use strict";var a=n("2bdf"),r=n.n(a);r.a},cd49:function(e,t,n){"use strict";n.r(t);n("744f"),n("6c7b"),n("7514"),n("20d6"),n("1c4c"),n("6762"),n("cadf"),n("e804"),n("55dd"),n("d04f"),n("c8ce"),n("217b"),n("7f7f"),n("f400"),n("7f25"),n("536b"),n("d9ab"),n("f9ab"),n("32d7"),n("25c9"),n("9f3c"),n("042e"),n("c7c6"),n("f4ff"),n("049f"),n("7872"),n("a69f"),n("0b21"),n("6c1a"),n("c7c62"),n("84b4"),n("c5f6"),n("2e37"),n("fca0"),n("7cdf"),n("ee1d"),n("b1b1"),n("87f3"),n("9278"),n("5df2"),n("04ff"),n("f751"),n("4504"),n("fee7"),n("ffc1"),n("0d6d"),n("9986"),n("8e6e"),n("25db"),n("e4f7"),n("b9a1"),n("64d5"),n("9aea"),n("db97"),n("66c8"),n("57f0"),n("165b"),n("456d"),n("cf6a"),n("fd24"),n("8615"),n("551c"),n("097d"),n("df1b"),n("2397"),n("88ca"),n("ba16"),n("d185"),n("ebde"),n("2d34"),n("f6b3"),n("2251"),n("c698"),n("a19f"),n("9253"),n("9275"),n("3b2b"),n("3846"),n("4917"),n("a481"),n("28a5"),n("386d"),n("6b54"),n("4f7f"),n("8a81"),n("ac4d"),n("8449"),n("9c86"),n("fa83"),n("48c0"),n("a032"),n("aef6"),n("d263"),n("6c37"),n("9ec8"),n("5695"),n("2fdb"),n("d0b0"),n("5df3"),n("b54a"),n("f576"),n("ed50"),n("788d"),n("14b9"),n("f386"),n("f559"),n("1448"),n("673e"),n("242a"),n("c66f"),n("b05c"),n("34ef"),n("6aa2"),n("15ac"),n("af56"),n("b6e4"),n("9c29"),n("63d9"),n("4dda"),n("10ad"),n("c02b"),n("4795"),n("130f"),n("ac6a"),n("96cf");var a=n("2b0e"),r=n("ce5b"),s=n.n(r);n("bf40");a["default"].use(s.a,{theme:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"},customProperties:!0,iconfont:"md"});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"appRoot"}},[n("AppToolbar"),n("v-content",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs2:"",sm2:""}},[n("AppDrawer")],1),n("v-flex",[n("router-view")],1),n("v-flex",{attrs:{xs2:"",sm2:""}},[n("PatientSideInfo")],1)],1)],1)],1)},o=[],c=n("a34a"),u=n.n(c),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-toolbar",{attrs:{app:""}},[n("v-toolbar-title",{staticClass:"headline"},[n("span",[e._v("BetterCare")])]),n("v-spacer"),n("ApolloQuery",{attrs:{query:e.mostRecentEventQuery},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.result,r=a.loading,s=(a.error,a.data);return[r?n("div",{staticClass:"loading apollo"},[e._v("Loading...")]):s?n("div",{staticClass:"result apollo"},[n("span",{staticClass:"mr-2"},[e._v(e._s(e.mostRecentEvent(s)))])]):n("div",{staticClass:"no-result apollo"},[e._v("No result :(")])]}}])}),n("v-btn",{attrs:{flat:""}},[n("v-icon",[e._v("account_circle")])],1)],1)},f=[],d=n("9530"),v=n.n(d);function m(){var e=g(["\nquery mostRecentEvent {\n  mostRecentEvent: patientsList {\n    items {\n      firstName\n      lastName\n      events\n      careGiver {\n        firstName\n        lastName\n      }\n    }\n  }\n}\n"]);return m=function(){return e},e}function p(){var e=g(["\n  query patientMedInfo ($patientId: ID){\n    patientMedInfo: patient(id: $patientId) {\n      firstName\n      medicationList{\n        items{\n          drugName\n          drugDosage\n          drugFrequency\n          drugLastAdmin\n          drugEffectiveDuration\n        }\n      }\n    }\n  }"]);return p=function(){return e},e}function b(){var e=g(["\n  query allPatients {\n    patientsList{\n      items{\n        firstName\n        lastName\n        age\n        careGiver{\n          firstName\n          lastName\n        }\n        events\n        medicationList{\n          items{\n            drugName\n            drugDosage\n            drugFrequency\n            drugLastAdmin\n            drugEffectiveDuration\n          }\n      }\n    }\n  }\n}"]);return b=function(){return e},e}function h(){var e=g(["\nquery allPatientsMed {\n    allPatientsMed: patientsList {\n      items {\n        firstName\n        lastName\n        age\n        medicationList {\n        items {\n          drugName\n          drugDosage\n          drugFrequency\n        drugLastAdmin\n        drugEffectiveDuration\n        }\n      }\n    }\n  }\n}"]);return h=function(){return e},e}function j(){var e=g(["\nquery allPatientEvents {\n  allPatientEvents: patientsList {\n    items {\n    \tfirstName\n    \tlastName\n    \tage\n    \tcareGiver {\n      \tfirstName\n      \tlastName\n    \t}\n    \tevents\n    }\n  }\n}"]);return j=function(){return e},e}function g(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var y=v()(j()),w=v()(h()),_=v()(b()),P=v()(p()),k=v()(m()),O={patientsList:_,allPatientEvents:y,patientMedInfo:P,allPatientsMed:w,mostRecentEvent:k},x=O,E=a["default"].extend({name:"AppToolbar",data:function(){return{mostRecentEventQuery:x.mostRecentEvent}},methods:{mostRecentEvent:function(e){return e.mostRecentEvent.items[0].events.reverse()[0]}}}),S=E,N=n("2877"),L=Object(N["a"])(S,l,f,!1,null,null,null),D=L.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-navigation-drawer",{attrs:{permanent:"",id:"mainDrawerRoot"}},[n("v-list",{staticClass:"pt-0",attrs:{dense:""}},e._l(e.items,function(t){return n("v-list-tile",{key:t.name},[n("v-list-tile-content",[n("router-link",{attrs:{to:t.route}},[n("v-list-tile-title",[e._v(e._s(t.name))])],1)],1)],1)}),1)],1)},M=[],A=[{name:"Patients",route:"/patients"},{name:"Prescriptions",route:"/prescriptions"},{name:"Messages",route:"/messages"},{name:"Event Log",route:"/events"},{name:"Google Home",route:"/integration"},{name:"Music",route:"/music"},{name:"Contact Information",route:"/contact"}],q=a["default"].extend({data:function(){return{items:A}}}),$=q,z=(n("c6da"),Object(N["a"])($,C,M,!1,null,"4825036a",null)),F=z.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-navigation-drawer",{attrs:{permanent:"",right:""}},[n("v-list",[n("v-list-tile",{attrs:{"two-line":""}},[n("v-list-tile-avatar",[n("img",{attrs:{src:"https://i.imgur.com/GmMymJz.png"}})]),n("v-list-tile-content",[n("v-list-tile-title",[e._v("Tammy")]),n("v-list-tile-sub-title",[e._v("Since 3pm")])],1)],1)],1)],1)},G=[],I=a["default"].extend({}),R=I,U=Object(N["a"])(R,T,G,!1,null,null,null),H=U.exports,V=n("522d");function Q(e,t,n,a,r,s,i){try{var o=e[s](i),c=o.value}catch(u){return void n(u)}o.done?t(c):Promise.resolve(c).then(a,r)}function B(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var s=e.apply(t,n);function i(e){Q(s,a,r,i,o,"next",e)}function o(e){Q(s,a,r,i,o,"throw",e)}i(void 0)})}}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){J(e,t,n[t])})}return e}function J(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var W=n("efe7"),K=W.createApolloClient,X=W.restartWebsockets;a["default"].use(V["a"]);var Z="apollo-token",ee="4f81ac0e-4052-4206-99a4-0fe6e81915f5",te=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_GRAPHQL_HTTP||"https://api.8base.com/cjrmx5lmj000001qsrnkscsp9",ne=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_FILES_ROOT||te.substr(0,te.indexOf("/graphql"));a["default"].prototype.$filesRoot=ne;var ae={httpEndpoint:te,wsEndpoint:null,tokenName:Z,persisting:!1,websocketsOnly:!1,ssr:!1};function re(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=K(Y({},ae,e)),n=t.apolloClient,a=t.wsClient;n.wsClient=a;var r=new V["a"]({defaultClient:n,defaultOptions:{$query:{}},errorHandler:function(e){console.log("%cError","background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;",e.message)}});return r}function se(e,t){return ie.apply(this,arguments)}function ie(){return ie=B(u.a.mark(function e(t,n){return u.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return"undefined"!==typeof localStorage&&n&&localStorage.setItem(Z,ee),t.wsClient&&X(t.wsClient),e.prev=2,e.next=5,t.resetStore();case 5:e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](2),console.log("%cError on cache reset (login)","color: orange;",e.t0.message);case 10:case"end":return e.stop()}},e,this,[[2,7]])})),ie.apply(this,arguments)}function oe(e,t,n,a,r,s,i){try{var o=e[s](i),c=o.value}catch(u){return void n(u)}o.done?t(c):Promise.resolve(c).then(a,r)}function ce(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var s=e.apply(t,n);function i(e){oe(s,a,r,i,o,"next",e)}function o(e){oe(s,a,r,i,o,"throw",e)}i(void 0)})}}var ue=a["default"].extend({name:"App",components:{AppToolbar:D,AppDrawer:F,PatientSideInfo:H},data:function(){return{}},mounted:function(){var e=ce(u.a.mark(function e(){var t;return u.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this.$apollo.provider.defaultClient,e.next=3,se(t,{});case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}),le=ue,fe=(n("63a7"),Object(N["a"])(le,i,o,!1,null,"1ae9d792",null)),de=fe.exports,ve=n("8c4f"),me=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"})},pe=[],be=a["default"].extend({name:"home",components:{}}),he=be,je=Object(N["a"])(he,me,pe,!1,null,null,null),ge=je.exports,ye=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.viewPrescriptionInfo,function(t,a){return n("v-layout",{key:a,attrs:{row:"",wrap:""}},[t.header?n("v-subheader",{key:t.header},[e._v("\n          "+e._s(t.header)+"\n        ")]):e._l(t.prescriptions,function(t){return n("v-flex",{key:t.id,attrs:{xs5:""}},[n("v-card",{staticClass:"mt-2 ml-1 mr-1"},[n("v-card-title",[n("h4",[e._v(e._s(t.drugName))])]),n("v-divider"),n("v-list",[n("v-list-tile",[n("v-list-tile-content",[e._v("Effectiveness:")]),n("v-list-tile-content",{staticClass:"align-end"},[e._v(e._s(t.drugEffectiveDuration)+" hours")])],1),n("v-list-tile",[n("v-list-tile-content",[e._v("Frequency:")]),n("v-list-tile-content",{staticClass:"align-end"},[e._v(e._s(t.drugFrequency)+"/day")])],1),n("v-list-tile",[n("v-list-tile-content",[e._v("Last Administration:")]),n("v-list-tile-content",{staticClass:"align-end",attrs:{title:e.format(t.drugLastAdmin)}},[n("timeago",{attrs:{datetime:t.drugLastAdmin,"auto-update":60}})],1)],1)],1)],1)],1)})],2)}),1)},we=[],_e=n("c1df"),Pe=n.n(_e),ke=n("2f62");function Oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){xe(e,t,n[t])})}return e}function xe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ee=a["default"].extend({data:function(){},computed:Oe({},Object(ke["e"])("prescriptions",["patients"]),Object(ke["c"])("prescriptions",["viewPrescriptionInfo"])),methods:Oe({},Object(ke["b"])("prescriptions",["loadPrescriptions"]),{format:function(e){return Pe()(e).format("MMMM Do YYYY, h:mm:ss a")}}),mounted:function(){this.loadPrescriptions()}}),Se=Ee,Ne=Object(N["a"])(Se,ye,we,!1,null,null,null),Le=Ne.exports,De=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("web-cam"),n("message-list")],1)},Ce=[],Me=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{on:{keydown:[function(t){if(!("button"in t)&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"]))return null;0!=e.offset&&e.scrollUp()},function(t){if(!("button"in t)&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"]))return null;e.items.length>=3&&(e.offset!=e.items.length-3&&e.scrollDown())}]}},[n("v-form",{ref:"form",on:{submit:e.submit}},[n("v-container",[n("v-layout",{attrs:{"align-end":"","justify-center":"",row:"",wrap:""}},[n("v-flex",[n("v-list",{attrs:{"two-line":""}},[e._l(e.items.slice(e.offset,e.items.length<3?e.items.length:e.offset+3),function(t){return[n("v-list-tile-content",{key:t},[n("v-list-tile-sub-title",{domProps:{innerHTML:e._s(t.user)}}),n("v-list-tile-title",{domProps:{innerHTML:e._s(t.message)}},[e._v(e._s(t.message))])],1)]})],2),n("v-text-field",{attrs:{label:"Enter message",type:"text",block:"false"},on:{submit:e.submit},model:{value:e.text1,callback:function(t){e.text1=t},expression:"text1"}})],1),n("v-flex",{attrs:{xs1:"",sm1:"",md1:""}},[n("v-btn",{on:{click:function(t){0!=e.offset&&e.scrollUp()}}},[e._v("↑")]),n("v-btn",{on:{click:function(t){e.items.length>=3&&(e.offset!=e.items.length-3&&e.scrollDown())}}},[e._v("↓")]),n("v-btn",{on:{click:function(t){""==!e.text1&&e.addItems(e.text1)}}},[e._v("Submit")])],1),n("v-flex")],1)],1)],1)],1)},Ae=[];a["default"].use(s.a);var qe={name:"MessageList",data:function(){return{text1:"",offset:0,start:!0,items:[{message:"Hey grandma, how are you?",user:"Greg"},{message:"Doing well dear",user:"Greg's Grandma"}]}},components:{Vue:a["default"],Vuetify:s.a},methods:{calculateOffset:function(){this.items.length>2&&(this.offset=this.items.length-3),this.start=!1},addItems:function(e){this.items.push({message:e,user:"Greg"}),this.items.length>2&&(this.offset=this.items.length-3),this.text1=""},scrollUp:function(){this.offset--},scrollDown:function(){this.offset++},submit:function(e){e.preventDefault(),""!==this.text1&&this.addItems(this.text1)}}},$e=qe,ze=Object(N["a"])($e,Me,Ae,!1,null,"dbf232b8",null),Fe=ze.exports,Te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"webcam"}},[n("video",{ref:"video",attrs:{id:"video",width:"640",height:"480",autoplay:""}})])},Ge=[],Ie={name:"WebCam",data:function(){return{video:{},canvas:{},captures:[]}},mounted:function(){var e=this;this.video=this.$refs.video,navigator.mediaDevices&&navigator.mediaDevices.getUserMedia&&navigator.mediaDevices.getUserMedia({video:!0}).then(function(t){e.video.src=window.URL.createObjectURL(t)})}},Re=Ie,Ue=(n("5973"),Object(N["a"])(Re,Te,Ge,!1,null,null,null)),He=Ue.exports,Ve=a["default"].extend({components:{MessageList:Fe,WebCam:He}}),Qe=Ve,Be=Object(N["a"])(Qe,De,Ce,!1,null,null,null),Ye=Be.exports,Je=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-list",[e._l(e.viewFriendlyPatients,function(t,a){return[t.header?n("v-subheader",{key:t.header},[e._v("\n      "+e._s(t.header)+"\n    ")]):t.divider?n("v-divider",{key:a,attrs:{inset:t.inset}}):e._l(t.events,function(t){return n("v-list-tile",{key:t.id},[n("v-list-tile-content",[e._v("\n        "+e._s(t)+"\n      ")])],1)})]})],2)},We=[];function Ke(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){Xe(e,t,n[t])})}return e}function Xe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ze,et,tt=a["default"].extend({computed:Ke({},Object(ke["e"])("eventLogs",["patients"]),Object(ke["c"])("eventLogs",["viewFriendlyPatients"])),methods:Ke({},Object(ke["b"])("eventLogs",["loadEvents"])),mounted:function(){this.loadEvents()}}),nt=tt,at=Object(N["a"])(nt,Je,We,!1,null,null,null),rt=at.exports,st=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Test ")])},it=[],ot=a["default"].extend({}),ct=ot,ut=Object(N["a"])(ct,st,it,!1,null,null,null),lt=ut.exports,ft={},dt=Object(N["a"])(ft,Ze,et,!1,null,null,null),vt=dt.exports,mt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-btn",[e._v("\n    Text\n  ")]),a("ApolloQuery",{attrs:{query:n("d659")},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.result,r=n.data,s=n.loading;return[s?a("div",[e._v("Loading...")]):a("ul",e._l(r.patientsList.items,function(t){return a("li",{key:t.firstName,staticClass:"user",on:{click:function(t){e.newData(r)}}},[e._v("\n          "+e._s(t.firstName)+": "+e._s(t.__typename)+"\n        ")])}),0)]}}])})],1)},pt=[],bt=a["default"].extend({data:function(){return{}},methods:{newData:function(e){console.log(e)}}}),ht=bt,jt=Object(N["a"])(ht,mt,pt,!1,null,null,null),gt=jt.exports,yt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-layout",{attrs:{row:"",wrap:""}},[e._l(e.patients,function(t){return n("v-flex",{key:t.id,staticClass:"mt-4 ml-3",attrs:{xs3:""}},[n("PatientCard",{attrs:{name:t.firstName+" "+t.lastName,age:t.age,careGiver:t.careGiver,events:t.events},on:{click:function(n){e.patientSelected(n,t)}}})],1)}),n("v-flex",[e._v("\n      "+e._s(e.currentPatient)+"\n    ")])],2)],1)},wt=[],_t=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{on:{click:function(t){e.newData(e.data)}}},[n("v-card-title",[n("div",[n("h3",{staticClass:"headline mb-0"},[e._v(e._s(e.name))]),n("h5",[e._v(e._s(e.age)+" - "+e._s(e.careGiverToString(e.careGiver)))]),n("p",[e._v(e._s(e.events.join("\n")))])])]),n("v-card-actions",[n("v-btn",{attrs:{flat:"",color:"blue"}},[e._v("Message")])],1)],1)},Pt=[],kt=a["default"].extend({props:{name:{type:String,required:!0},age:{type:Number,required:!0},careGiver:{type:Object,required:!0},events:Array},methods:{careGiverToString:function(e){return"".concat(e.firstName," ").concat(e.lastName)}}}),Ot=kt,xt=Object(N["a"])(Ot,_t,Pt,!1,null,null,null),Et=xt.exports;function St(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){Nt(e,t,n[t])})}return e}function Nt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Lt=a["default"].extend({components:{PatientCard:Et},data:function(){return{listPatients:this.$store.state.allPatients.patients}},computed:St({},Object(ke["c"])("allPatients",["numPatients"]),Object(ke["e"])("allPatients",["currentPatient","patients"])),watch:{},mounted:function(){this.getAllPatients()},methods:St({},Object(ke["b"])("allPatients",["getAllPatients"]),Object(ke["d"])("allPatients",["updateCurrentPatient"]),{newData:function(e){console.log(e)},patientSelected:function(e){this.updateCurrentPatient(e)}})}),Dt=Lt,Ct=Object(N["a"])(Dt,yt,wt,!1,null,null,null),Mt=Ct.exports;a["default"].use(ve["a"]);var At=new ve["a"]({routes:[{path:"/",name:"home",component:ge},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/patients",name:"Patients",component:Mt},{path:"/prescriptions",name:"Prescriptions",component:Le},{path:"/messages",name:"Messages",component:Ye},{path:"/events",name:"Event Log",component:rt},{path:"/integration",name:"Integrations",component:lt},{path:"/music",name:"Music",component:vt},{path:"/contact",name:"Contact Information",component:gt}]});function qt(e,t,n,a,r,s,i){try{var o=e[s](i),c=o.value}catch(u){return void n(u)}o.done?t(c):Promise.resolve(c).then(a,r)}function $t(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var s=e.apply(t,n);function i(e){qt(s,a,r,i,o,"next",e)}function o(e){qt(s,a,r,i,o,"throw",e)}i(void 0)})}}var zt={state:{patients:[],currentPatient:null},getters:{numPatients:function(e){return e.patients.length}},mutations:{updateCurrentPatient:function(e,t){Wt.$set(e,"currentPatient",t)},updatePatientsList:function(e,t){Wt.$set(e,"patients",t||[]),console.log("patients",e.patients)}},actions:{getAllPatients:function(){var e=$t(u.a.mark(function e(t){var n;return u.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Wt.$apollo.queries.patientsList.refetch();case 2:n=e.sent,t.commit("updatePatientsList",n.data.patientsList.items),console.log(n);case 5:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},namespaced:!0},Ft=zt;function Tt(e,t,n,a,r,s,i){try{var o=e[s](i),c=o.value}catch(u){return void n(u)}o.done?t(c):Promise.resolve(c).then(a,r)}function Gt(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var s=e.apply(t,n);function i(e){Tt(s,a,r,i,o,"next",e)}function o(e){Tt(s,a,r,i,o,"throw",e)}i(void 0)})}}var It={state:{patients:[]},getters:{viewFriendlyPatients:function(e){var t=[];return e.patients.forEach(function(e){t.push({header:"".concat(e.firstName," ").concat(e.lastName),patient:e}),t.push({events:e.events,patient:e})}),t}},mutations:{updatePatients:function(e,t){e.patients=t}},actions:{loadEvents:function(){var e=Gt(u.a.mark(function e(t){var n,a;return u.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,Wt.$apollo.queries.allPatientEvents.refetch();case 3:a=e.sent,n("updatePatients",a.data.allPatientEvents.items);case 5:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},namespaced:!0},Rt=It;function Ut(e,t,n,a,r,s,i){try{var o=e[s](i),c=o.value}catch(u){return void n(u)}o.done?t(c):Promise.resolve(c).then(a,r)}function Ht(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var s=e.apply(t,n);function i(e){Ut(s,a,r,i,o,"next",e)}function o(e){Ut(s,a,r,i,o,"throw",e)}i(void 0)})}}var Vt={state:{patients:[]},getters:{viewPrescriptionInfo:function(e){var t=[];return e.patients.forEach(function(e){t.push({header:"".concat(e.firstName," ").concat(e.lastName)}),t.push({patient:e,prescriptions:e.medicationList.items})}),t}},mutations:{updatePrescriptions:function(e,t){e.patients=t}},actions:{loadPrescriptions:function(){var e=Ht(u.a.mark(function e(t){var n,a;return u.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,Wt.$apollo.queries.allPatientsMed.refetch();case 3:a=e.sent,n("updatePrescriptions",a.data.allPatientsMed.items);case 5:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},namespaced:!0},Qt=Vt;a["default"].use(ke["a"]);var Bt=new ke["a"].Store({state:{},mutations:{},actions:{},modules:{allPatients:Ft,eventLogs:Rt,prescriptions:Qt}}),Yt=n("8682");a["default"].config.productionTip=!1;var Jt=new a["default"]({router:At,store:Bt,apolloProvider:re(),apollo:x,render:function(e){return e(de)}}).$mount("#app");a["default"].use(Yt["a"],{name:"Timeago",locale:"en"});var Wt=t["default"]=Jt},d659:function(e,t){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"patientFirstNames"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"patientsList"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"firstName"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:86}};n.loc.source={body:"query patientFirstNames {\r\n  patientsList{\r\n    items{\r\n      firstName\r\n    }\r\n  }\r\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};function a(e,t){if("FragmentSpread"===e.kind)t.add(e.name.value);else if("VariableDefinition"===e.kind){var n=e.type;"NamedType"===n.kind&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){a(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){a(e,t)}),e.definitions&&e.definitions.forEach(function(e){a(e,t)})}var r={};function s(e,t){for(var n=0;n<e.definitions.length;n++){var a=e.definitions[n];if(a.name&&a.name.value==t)return a}}function i(e,t){var n={kind:e.kind,definitions:[s(e,t)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var a=r[t]||new Set,i=new Set,o=new Set;a.forEach(function(e){o.add(e)});while(o.size>0){var c=o;o=new Set,c.forEach(function(e){if(!i.has(e)){i.add(e);var t=r[e]||new Set;t.forEach(function(e){o.add(e)})}})}return i.forEach(function(t){var a=s(e,t);a&&n.definitions.push(a)}),n}(function(){n.definitions.forEach(function(e){if(e.name){var t=new Set;a(e,t),r[e.name.value]=t}})})(),e.exports=n,e.exports["patientFirstNames"]=i(n,"patientFirstNames")},dfa7:function(e,t,n){}});
//# sourceMappingURL=app.c9a7ddce.js.map