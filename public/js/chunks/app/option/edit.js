(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{LF47:function(t,e,i){"use strict";var a=i("BcCH"),r=i("L2JU");function s(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function n(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?s(Object(i),!0).forEach((function(e){o(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function o(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}e.a={data:function(){return{isLoading:!0,isFetching:!0,uuid:null,subUuid:null,entity:null,duplicate:!1,duplicateRoute:null,fallBackRoute:"appDashboard",initUrl:"",initSubUrl:null}},methods:n(n({},Object(r.b)("common",["Init","InitSub","Get"])),{},{getInitialData:function(){var t=this;this.isLoading=!0,this.Get(this.uuid).then((function(e){t.entity=e,t.isLoading=!1,t.isFetching=!1})).catch((function(e){t.isLoading=!1,t.formErrors=formUtil.handleErrors(e),t.$router.push({name:t.fallBackRoute})}))}}),mounted:function(){this.$route.params.uuid&&(this.uuid=this.$route.params.uuid),this.$route.params.subUuid&&(this.subUuid=this.$route.params.subUuid),this.duplicateRoute&&this.$route.name===this.duplicateRoute&&(this.duplicate=!0),this.Init({url:this.initUrl}),this.initSubUrl&&this.InitSub({url:(this.subUuid?this.subUuid+"/":"")+this.initSubUrl}),this.getInitialData()},beforeRouteEnter:function(t,e,i){t.params.uuid?i():i({name:this.fallBackRoute})},beforeRouteLeave:function(t,e,i){a.a.$emit("ROUTE_LEAVING",i)}}},P33g:function(t,e,i){"use strict";var a={extends:i("g+26").a,data:function(){return{formData:{uuid:null,name:"",slug:"",description:"",parent:null,type:null},hasSlug:!1,hasParent:!1,preRequisite:{options:[]},formLabels:{name:$t("option.props.name"),slug:$t("option.props.slug"),description:$t("option.props.description"),parent:$t("option.props.parent"),type:$t("option.props.type")},initUrl:"options",entityTitle:"option.option"}},computed:{computedClass:function(){return this.hasSlug&&this.hasParent?"col-md-4":this.hasSlug||this.hasParent?"col-md-6":""}},methods:{createSlug:function(){this.showKeepAdding&&this.formData.name!=this.initialFormData.name?this.formData.slug=this.formData.name.kebabCase():this.formData.slug=this.formData.slug?this.formData.slug:this.formData.name.kebabCase()},preSubmit:function(){this.createSlug(),!this.hasParent||this.formData.parent?this.submit():this.$toasted.error($t("global.invalid",{attribute:$t("option.props.parent")}),this.$toastConfig.error)}},mounted:function(){this.getInitialData()},beforeMount:function(){var t=this.$route.meta;this.customFilters.type=t.optionType,this.formData.type=t.optionType,this.entityTitle=t.entityTitle,this.hasSlug=t.hasSlug,this.hasParent=t.hasParent}},r=i("KHd+"),s=Object(r.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("form",{on:{submit:function(e){return e.preventDefault(),t.preSubmit.apply(null,arguments)}}},[i("animated-loader",{attrs:{"is-loading":t.isLoading||t.isFetching,"loader-color":t.vars.loaderColor}}),t._v(" "),i("div",{staticClass:"row"},[i("div",{class:["col-12 mb-4",t.computedClass]},[i("base-input",{attrs:{"auto-focus":"",label:t.formLabels.name,type:"text",error:t.formErrors.name,required:""},on:{"update:error":function(e){return t.$set(t.formErrors,"name",e)},blur:t.createSlug},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),t._v(" "),t.hasSlug?i("div",{class:["col-12 mb-4",t.computedClass]},[i("base-input",{attrs:{label:t.formLabels.slug,type:"text",error:t.formErrors.slug,format:"kebabCase",required:""},on:{"update:error":function(e){return t.$set(t.formErrors,"slug",e)},focus:t.createSlug,blur:t.createSlug},model:{value:t.formData.slug,callback:function(e){t.$set(t.formData,"slug",e)},expression:"formData.slug"}})],1):t._e(),t._v(" "),t.hasParent?i("div",{class:["col-12 mb-4",t.computedClass]},[i("base-select",{attrs:{options:t.preRequisite.options,label:t.formLabels.parent,error:t.formErrors.parent,"allow-empty":!0,disabled:t.isLoading,"track-by":"uuid","show-by":"nameWithParents"},on:{"update:error":function(e){return t.$set(t.formErrors,"parent",e)}},model:{value:t.formData.parent,callback:function(e){t.$set(t.formData,"parent",e)},expression:"formData.parent"}})],1):t._e(),t._v(" "),i("div",{staticClass:"col-12 mb-4"},[i("base-input",{attrs:{label:t.formLabels.description,type:"text",error:t.formErrors.description},on:{"update:error":function(e){return t.$set(t.formErrors,"description",e)}},model:{value:t.formData.description,callback:function(e){t.$set(t.formData,"description",e)},expression:"formData.description"}})],1)]),t._v(" "),t.formHasErrors?i("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[i("h6",{staticClass:"m-0"},[t._v(t._s(t.$t("general.form_has_errors")))])]):t._e(),t._v(" "),i("div",{staticClass:"form-footer mt-5"},[i("div",{staticClass:"left-side"},[i("base-button",{attrs:{type:"button",design:"light",tabindex:"-1"},on:{click:function(e){return t.$router.back()}}},[i("i",{staticClass:"fas fa-chevron-left"}),t._v(" "+t._s(t.$t("general.cancel")))]),t._v(" "),t.showKeepAdding?i("base-checkbox",{staticClass:"ml-3 mt-2",model:{value:t.keepAdding,callback:function(e){t.keepAdding=e},expression:"keepAdding"}},[t._v("\n                "+t._s(t.$t("general.keep_adding"))+"\n            ")]):t._e()],1),t._v(" "),i("div",{staticClass:"right-side"},[i("base-button",{attrs:{type:"button",design:"light"},on:{click:t.reset}},[t._v(t._s(t.$t("general.reset")))]),t._v(" "),i("base-button",{attrs:{type:"submit",design:"primary"}},[i("i",{staticClass:"fas fa-save"}),t._v(" "+t._s(t.$t("global.save",{attribute:t.$t(t.entityTitle)})))])],1)]),t._v(" "),t.showKeepAdding&&t.keepAdding?[i("keep-adding-form",{attrs:{"keep-adding-fields":t.keepAddingFields,"keep-adding-option":t.keepAddingOption,"keep-adding-selected-fields":t.keepAddingSelectedFields,"is-loading":t.isLoading},on:{optionUpdated:function(e){t.keepAddingOption=e},fieldsUpdated:function(e){t.keepAddingSelectedFields=e}}})]:t._e()],2)}),[],!1,null,null,null);e.a=s.exports},hW61:function(t,e,i){"use strict";i.r(e);var a=i("P33g"),r=i("LF47"),s={components:{CommonForm:a.a},extends:r.a,data:function(){return{initUrl:"options",fallBackRoute:"appOptionList"}},beforeMount:function(){var t=this.$route.meta;this.fallBackRoute="".concat(t.routeNamePrefix,"List")}},n=i("KHd+"),o=Object(n.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("base-container",{attrs:{boxed:""}},[e("common-form",{attrs:{"is-fetching":this.isFetching,"edit-data":this.entity}})],1)}),[],!1,null,null,null);e.default=o.exports}}]);
//# sourceMappingURL=edit.js.map?id=4249a26651a62bdde21a