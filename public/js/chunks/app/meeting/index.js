(window.webpackJsonp=window.webpackJsonp||[]).push([[50,105],{iiEe:function(t,e,i){"use strict";var a={extends:i("lSlZ").a},s=i("KHd+"),n=Object(s.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("filter-wrapper",{attrs:{boxed:t.boxed,"is-loading":t.isLoading},on:{close:function(e){return t.$emit("close")}}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-md-4 mb-4"},[i("base-input",{attrs:{"auto-focus":"",label:t.$t("general.search_keyword"),type:"text",disabled:t.isLoading},model:{value:t.filters.keyword,callback:function(e){t.$set(t.filters,"keyword",e)},expression:"filters.keyword"}})],1),t._v(" "),i("div",{staticClass:"col-12 col-md-4 mb-4"},[i("base-select",{attrs:{options:t.preRequisite.types,label:t.$t("meeting.props.type"),disabled:t.isLoading,simple:!0},model:{value:t.filters.type,callback:function(e){t.$set(t.filters,"type",e)},expression:"filters.type"}})],1),t._v(" "),i("div",{staticClass:"col-12 col-md-4 mb-4"},[i("base-select",{attrs:{options:t.preRequisite.categories,label:t.$t("meeting.meeting_category.category"),disabled:t.isLoading,simple:!0},model:{value:t.filters.category,callback:function(e){t.$set(t.filters,"category",e)},expression:"filters.category"}})],1),t._v(" "),i("div",{staticClass:"col-12 col-md-4 mb-4"},[i("base-select",{attrs:{options:t.preRequisite.statuses,label:t.$t("meeting.props.status"),disabled:t.isLoading,simple:!0},model:{value:t.filters.status,callback:function(e){t.$set(t.filters,"status",e)},expression:"filters.status"}})],1),t._v(" "),i("div",{staticClass:"col-12 col-md-8 mb-4"},[i("date-between",{attrs:{label:t.$t("global.between",{attribute:t.$t("meeting.meetings")}),start:t.filters.startDate,end:t.filters.endDate,disabled:t.isLoading},on:{"update:start":function(e){return t.$set(t.filters,"startDate",e)},"update:end":function(e){return t.$set(t.filters,"endDate",e)}}})],1)])])}),[],!1,null,null,null);e.a=n.exports},"lNw+":function(t,e,i){"use strict";i.r(e);var a=i("UPFT"),s=i("iiEe"),n=(i("tkDv"),{components:{FilterForm:s.a},extends:a.a,data:function(){return{fields:[{key:"title",label:$t("meeting.props.title"),sort:"title",transformer:"limitWords",tdClass:"td-ellipsis max-width-250px"},{key:"user",label:$t("meeting.host")},{key:"agenda",label:$t("meeting.props.agenda"),transformer:"limitWords",tdClass:"d-none td-ellipsis max-width-100px",thClass:"d-none"},{key:"type",label:$t("meeting.props.type"),transformer:"objectWithName"},{key:"category",label:$t("meeting.meeting_category.category"),transformer:"objectWithName"},{key:"accessibleViaLink",label:"",headerTitle:$t("meeting.meeting_attributes"),tdClass:"text-center"},{key:"status",label:$t("meeting.props.status")},{key:"startDateTime",label:$t("meeting.props.scheduled_on"),sort:"start_date_time",transformer:"datetime"},{key:"endedAt",label:$t("meeting.ended_at"),transformer:"datetime",thClass:"d-none",tdClass:"d-none"},{key:"period",label:$t("meeting.props.estimated_period"),thClass:"d-none",tdClass:"d-none"},{key:"createdAt",label:$t("general.created_at"),sort:"created_at",transformer:"datetime",thClass:"d-none",tdClass:"d-none"},{key:"updatedAt",label:$t("general.updated_at"),sort:"updated_at",transformer:"datetime",thClass:"d-none",tdClass:"d-none"},{key:"actions",label:"",cantHide:!0,tdClass:"actions-dropdown-wrapper"}],preRequisite:{types:[],categories:[],statuses:[]},filtersOptions:{keyword:"",type:"",category:"",status:"",startDate:"",endDate:""},sortOptions:{hasScroll:!0},columnsOptions:{hasScroll:!0},exportOptions:{orientation:"l"},permissionsRequired:{add:"create-meeting",config:"access-meeting-config"},routesRequired:{add:"appMeetingAdd",config:"appMeetingConfigGeneral"},initUrl:"meetings",dataType:"meeting"}},methods:{sameDate:function(t){var e=t.startDateTime,i=t.endDateTime;return moment(e,this.vars.serverDateTimeFormat).format(this.vars.defaultDateFormat)===moment(i,this.vars.serverDateTimeFormat).format(this.vars.defaultDateFormat)}},mounted:function(){this.getInitialData()}}),r=i("KHd+"),o=Object(r.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"entity-list-container"},[i("collapse-transition",{attrs:{group:!0,duration:300,tag:"div"}},[t.showFilters?i("filter-form",{key:"filters",attrs:{boxed:!0,"pre-requisite":t.preRequisite,"is-loading":t.isLoading},on:{close:t.toggleFilter}}):t._e(),t._v(" "),i("base-container",{key:"list",staticClass:"p-0  zoom-print-85",attrs:{boxed:"","with-loader":"","is-loading":t.isLoading,"loader-color":t.vars.loaderColor}},[t.isInitialized?i("table-wrapper",{attrs:{meta:t.entities.meta,filtered:t.isFiltered,"add-button-route":"appMeetingAdd","add-button-permissions":["create-meeting"],"entity-title":"meeting.meeting","entities-title":"meeting.meetings","entity-description":"meeting.module_description"}},[i("b-table",{directives:[{name:"show",rawName:"v-show",value:t.entities.meta.total,expression:"entities.meta.total"}],ref:"btable",attrs:{items:t.itemsProvider,fields:t.fields,busy:t.isLoading,hover:"",striped:"",stacked:"sm","per-page":t.entities.meta.perPage,"current-page":t.entities.meta.currentPage,filters:null},on:{"update:busy":function(e){t.isLoading=e},"row-dblclicked":function(e){return t.rowClickHandler({route:"appMeetingView"},e)}},scopedSlots:t._u([{key:"cell(title)",fn:function(e){return[i("router-link",{staticClass:"row-link",attrs:{to:{name:"appMeetingView",params:{uuid:e.item.uuid}}}},[t._v("\n                            "+t._s(e.item.title)+"\n                        ")])]}},{key:"cell(user)",fn:function(t){return[i("view-user",{staticClass:"m-0",attrs:{value:t.item.user,"inline-sub":"","show-image":!1,"data-classes":"m-0"}})]}},{key:"cell(createdAt)",fn:function(t){return[i("view-date",{staticClass:"mb-0",attrs:{value:t.item.createdAt,"with-tz":"",tag:"span","data-classes":"text-sm"}})]}},{key:"cell(updatedAt)",fn:function(t){return[i("view-date",{staticClass:"mb-0",attrs:{value:t.item.updatedAt,"with-tz":"",tag:"span","data-classes":"text-sm"}})]}},{key:"cell(startDateTime)",fn:function(t){return[i("view-date",{staticClass:"mb-0",attrs:{value:t.item.startDateTime,"with-tz":"",tag:"span","data-classes":"text-sm"}})]}},{key:"cell(endedAt)",fn:function(t){return[i("view-date",{staticClass:"mb-0",attrs:{value:t.item.endedAt,"with-tz":"",tag:"span","data-classes":"text-sm"}})]}},{key:"cell(period)",fn:function(t){return[i("view-single",{staticClass:"mb-0",attrs:{value:t.item.period,tag:"span","data-classes":"text-sm"}})]}},{key:"cell(type)",fn:function(e){return[e.item.type?i("badge",{staticClass:"mb-0",attrs:{type:"default"}},[t._v(t._s(e.item.type.name))]):t._e()]}},{key:"cell(category)",fn:function(e){return[e.item.category?i("badge",{staticClass:"mb-0",attrs:{type:"dark"}},[t._v(t._s(e.item.category.name))]):t._e()]}},{key:"cell(status)",fn:function(e){return[e.item.status?i("badge",{attrs:{rounded:"",type:t.vars.colorsForStatus["meeting-"+e.item.status]}},[t._v(t._s(e.item.status))]):t._e()]}},{key:"cell(accessibleViaLink)",fn:function(e){return[e.item.accessibleViaLink?i("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",modifiers:{hover:!0,left:!0}}],staticClass:"text-success",attrs:{title:t.$t("meeting.props.accessible_via_link")}},[i("i",{staticClass:"fas fa-link"})]):i("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",modifiers:{hover:!0,left:!0}}],staticClass:"text-light",attrs:{title:t.$t("meeting.props.not_accessible_via_link")}},[i("i",{staticClass:"fas fa-link"})]),t._v(" "),e.item.isPam?i("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",modifiers:{hover:!0,left:!0}}],staticClass:"ml-3 text-success",attrs:{title:t.$t("meeting.props.is_pam")}},[i("i",{staticClass:"fas fa-users"})]):i("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",modifiers:{hover:!0,left:!0}}],staticClass:"ml-3 text-light",attrs:{title:t.$t("meeting.props.not_is_pam")}},[i("i",{staticClass:"fas fa-users"})]),t._v(" "),t.allowExtraInput&&t.configs.membership.enabled?[e.item.accessibleToMembers?i("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",modifiers:{hover:!0,left:!0}}],staticClass:"ml-3 text-success",attrs:{title:t.$t("meeting.props.only_accessible_to_members")}},[i("i",{staticClass:"far fa-id-badge"})]):i("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",modifiers:{hover:!0,left:!0}}],staticClass:"ml-3 text-light",attrs:{title:t.$t("meeting.props.not_only_accessible_to_members")}},[i("i",{staticClass:"far fa-id-badge"})])]:t._e()]}},{key:"cell(actions)",fn:function(e){return[i("table-row-actions",[t.configs.meeting&&t.configs.meeting.enableSnapshot?i("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"appMeetingView",params:{uuid:e.item.uuid}}}},[i("i",{staticClass:"fas fa-arrow-circle-right"}),t._v(" "+t._s(t.$t("global.view",{attribute:t.$t("meeting.meeting")})))]):t._e(),t._v(" "),i("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"appMeetingSnapshots",params:{uuid:e.item.uuid}}}},[i("i",{staticClass:"fas fa-image"}),t._v(" "+t._s(t.$t("global.view",{attribute:t.$t("meeting.snapshots")})))]),t._v(" "),"scheduled"===e.item.status||"live"===e.item.status?i("router-link",{staticClass:"dropdown-item bg-primary text-white",attrs:{to:{name:"liveMeeting",params:{uuid:e.item.uuid}}}},[i("i",{staticClass:"fas fa-sign-in-alt"}),t._v(" "+t._s(t.$t("meeting.join_meeting")))]):t._e(),t._v(" "),"scheduled"===e.item.status&&(t.hasPermission("create-meeting")||e.item.canModerate)?i("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"appMeetingEdit",params:{uuid:e.item.uuid}}}},[i("i",{staticClass:"fas fa-edit"}),t._v(" "+t._s(t.$t("global.edit",{attribute:t.$t("meeting.meeting")})))]):t._e(),t._v(" "),t.hasPermission("create-meeting")?i("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"appMeetingDuplicate",params:{uuid:e.item.uuid}}}},[i("i",{staticClass:"fas fa-copy"}),t._v(" "+t._s(t.$t("global.duplicate",{attribute:t.$t("meeting.meeting")})))]):t._e(),t._v(" "),"scheduled"===e.item.status&&t.hasPermission("list-meeting")&&e.item.canModerate?i("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"appMeetingSingleConfig",params:{subUuid:e.item.uuid}}}},[i("i",{staticClass:"fas fa-cog"}),t._v(" "+t._s(t.$t("global.config",{attribute:t.$t("meeting.meeting")})))]):t._e(),t._v(" "),t.hasPermission("delete-meeting")&&("scheduled"===e.item.status||"cancelled"===e.item.status&&t.configs.meeting&&t.configs.meeting.allowDeletingCancelledMeetings||"ended"===e.item.status&&t.configs.meeting&&t.configs.meeting.allowDeletingEndedMeetings)?i("a",{staticClass:"dropdown-item",on:{click:function(i){return i.stopPropagation(),t.deleteEntity(e.item)}}},[i("i",{staticClass:"fas fa-trash"}),t._v(" "+t._s(t.$t("global.delete",{attribute:t.$t("meeting.meeting")})))]):t._e()],1)]}}],null,!1,2976632883)})],1):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=o.exports},lSlZ:function(t,e,i){"use strict";var a=i("L2JU");function s(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function n(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?s(Object(i),!0).forEach((function(e){r(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var o={props:{boxed:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1}},computed:n(n({},Object(a.c)("common",["filters"])),Object(a.c)("config",["vars"])),methods:n(n({},Object(a.b)("common",["ResetFilters"])),{},{submit:function(){var t=n(n(n({},this.$route.query),this.filters),{},{filtered:!0,filtered_at:moment().unix()});this.$router.push({path:this.$route.path,query:t}).catch((function(t){}))},reset:function(){this.ResetFilters(),this.$route.query&&this.$route.query.filtered&&this.$router.push({path:this.$route.path})}})},l=i("KHd+"),c=Object(l.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("base-container",{staticClass:"mb-element",attrs:{boxed:t.boxed,"with-loader":"","is-loading":t.isLoading,"loader-color":t.vars.loaderColor}},[i("close-button",{attrs:{title:t.$t("general.close")},on:{click:function(e){return t.$emit("close")}}}),t._v(" "),i("form",{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[t._t("default"),t._v(" "),i("div",{staticClass:"form-footer mt-3"},[i("div",{staticClass:"left-side"},[i("base-button",{attrs:{type:"button",design:"light",disabled:t.isLoading},on:{click:function(e){return t.$emit("close")}}},[t._v(t._s(t.$t("general.close")))])],1),t._v(" "),i("div",{staticClass:"right-side"},[i("base-button",{attrs:{type:"button",design:"light",disabled:t.isLoading},on:{click:t.reset}},[t._v(t._s(t.$t("general.clear")))]),t._v(" "),i("base-button",{attrs:{type:"submit",design:"primary",disabled:t.isLoading}},[t._v(t._s(t.$t("general.filter")))])],1)])],2)],1)}),[],!1,null,null,null).exports;function u(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function d(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}e.a={components:{FilterWrapper:c},props:{preRequisite:{type:Object,default:function(){return{}}},boxed:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1}},computed:function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?u(Object(i),!0).forEach((function(e){d(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):u(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({},Object(a.c)("common",["filters"]))}},tkDv:function(t,e,i){"use strict";i.r(e),i.d(e,"objectWithName",(function(){return r})),i.d(e,"contact",(function(){return o})),i.d(e,"contactWithAlias",(function(){return l})),i.d(e,"contactWithAssociation",(function(){return c})),i.d(e,"employee",(function(){return u})),i.d(e,"employeeWithAlias",(function(){return d})),i.d(e,"getRegion",(function(){return m})),i.d(e,"percent",(function(){return p})),i.d(e,"date",(function(){return f})),i.d(e,"datetime",(function(){return g})),i.d(e,"truncateString",(function(){return b})),i.d(e,"limitWords",(function(){return v})),i.d(e,"badgeStatus",(function(){return y})),i.d(e,"badgeStatusYesNo",(function(){return h})),i.d(e,"badgeStatusLabel",(function(){return _})),i.d(e,"badgeStatusCompleted",(function(){return w})),i.d(e,"currency",(function(){return C})),i.d(e,"getCurrencyDescription",(function(){return $}));var a=i("g6NE"),s=i("V0LQ"),n=a.a.getters["config/vars"];function r(t){return t.name}function o(t){return t.name}function l(t){var e=t.name,i=t.alias;return"".concat(e," (").concat(i,")")}function c(t){var e=t.name,i=t.association;return"".concat(e," (").concat(i,")")}function u(t){return t.name}function d(t){var e=t.name,i=t.alias;return"".concat(e," (").concat(i,")")}function m(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e?e.city:"";return i=i?e.zipcode?"".concat(i," - ").concat(e.zipcode):i:"",i=e.state?i?"".concat(i,", ").concat(e.state):e.state:i,i=e.country?i?"".concat(i,", ").concat(e.country.name):e.country.name:i}function p(t){return"".concat(t," %")}function f(t){return moment(t,n.serverDateFormat).format(n.defaultDateFormat)}function g(t){return moment(t,n.serverDateTimeFormat).format(n.defaultDateTimeFormat)}function b(t,e){var i=e.max||30,a=t.length>i?e.suffix||"...":"";return t.slice(0,i)+a}function v(t,e){var i=t.split(" "),a=e.max||3,s=i.length>a?e.suffix||"...":"";return i.slice(0,a).join(" ")+s}function y(t){return t?"true":"false"}function h(t){return t?$t("general.yes"):$t("general.no")}function _(t,e){return t?$t("general.yes"):$t("general.no")}function w(t){return t?$t("utility.todo.completed"):$t("utility.todo.incomplete")}function C(t,e){var i=e&&e.currency?e.currency:n.defaultCurrency;return s.d.to(t,i,!0)}function $(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"".concat(e.currency.name," - ").concat(e.currency.description," (").concat(e.currency.symbol,")")}}}]);
//# sourceMappingURL=index.js.map?id=a631449001885837d549