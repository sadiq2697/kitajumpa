(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{vTMN:function(t,e,i){"use strict";i.r(e);var r=i("g+26"),n=i("L2JU");function a(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function s(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(Object(i),!0).forEach((function(e){o(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function o(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var l={extends:r.a,data:function(){return{initUrl:"membership",hideFilterButton:!0}},computed:s(s({},Object(n.c)("common",["entity"])),Object(n.c)("user",["profile","username","email"])),watch:{$route:function(){this.$route.query.hasOwnProperty("reload")&&(this.isLoading=!0,this.ResetEntity(),this.getInitialData())}},methods:s(s({},Object(n.b)("common",["ResetEntity","SetEntity"])),{},{afterGetInitialData:function(t){this.SetEntity(t)}}),mounted:function(){this.ResetEntity(),this.getInitialData()}},c=i("KHd+"),u=Object(c.a)(l,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.hasRole("admin")?t._e():i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-md-4"},[i("base-container",{attrs:{boxed:"","with-loader":"","min-height":"full","is-loading":t.isLoading,"loader-color":t.vars.loaderColor,id:"printable"}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 mb-3"},[i("view-single",{attrs:{label:t.$t("user.props.name"),value:t.profile.name,tag:"h5","data-classes":"font-weight-600"}})],1),t._v(" "),i("div",{staticClass:"col-12 mb-3"},[i("view-single",{attrs:{label:t.$t("user.props.email"),value:t.email}})],1),t._v(" "),i("div",{staticClass:"col-12 mb-3"},[i("view-single",{attrs:{label:t.$t("user.props.username"),value:t.username}})],1)])])],1),t._v(" "),i("div",{staticClass:"col-12 col-md-8"},[i("transition-page",[i("router-view",{attrs:{name:"plan"}})],1)],1)]),t._v(" "),!t.entity||t.entity.newMembership&&!t.hasRole("admin")?t._e():i("div",{class:{"mt-element":!t.hasRole("admin")}},[i("transition-page",[i("router-view",{attrs:{name:"history"}})],1)],1)])}),[],!1,null,null,null);e.default=u.exports}}]);
//# sourceMappingURL=index.js.map?id=e319202fece7d939bc0c