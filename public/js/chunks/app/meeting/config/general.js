(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"3HR4":function(e,t,a){"use strict";var o=a("o0o1"),i=a.n(o),r=a("L2JU"),n=a("8BOd");a("i8R7");function s(e,t,a,o,i,r,n){try{var s=e[r](n),l=s.value}catch(e){return void a(e)}s.done?t(l):Promise.resolve(l).then(o,i)}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){m(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}t.a={components:{},data:function(){return{formData:{},formErrors:{},initialFormData:null,initianLength:0,emptyFormData:null,entity:null,preRequisite:{},isLoading:!0,useUserPreference:!1,dataType:null,configType:""}},computed:c(c({},Object(r.c)("config",{configsWithPreference:"configs",configs:"configsOriginal",vars:"vars"})),{},{formHasErrors:function(){var e=!1;return this.formErrors.objForEach((function(t){e=""!==t||e})),e}}),methods:c(c(c(c(c({},Object(r.b)("config",["GetConfig"])),Object(r.b)("user",["GetUser"])),Object(r.b)("navigation",["Generate"])),Object(r.b)("common",["Custom"])),{},{findActualValue:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"uuid";return t.find((function(t){return t[a]===e}))||null},submit:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(formUtil.isUnchanged(this.initialFormData,this.formData))return this.$toasted.info(this.$t("general.nothing_changed"),this.$toastConfig.info),!1;this.isLoading=!0,this.formData.hasOwnProperty("type")&&(this.formData.type=this.formData.type.snakeCase());var a=!0===t||this.useUserPreference?n.e:"module"===this.configType?n.d:n.c;"function"==typeof this.beforeSubmit&&this.beforeSubmit(),a(this.formData).then((function(a){(!0===t||e.useUserPreference?e.GetUser:e.GetConfig)().then((function(){e.$toasted.success(a.message,e.$toastConfig),e.initialFormData=_.cloneDeep(e.formData),e.isLoading=!1})).catch((function(t){e.isLoading=!1,e.formErrors=formUtil.handleErrors(t)})),"function"==typeof e.afterSubmit&&e.afterSubmit(),"function"==typeof e.afterSubmitSuccess&&e.afterSubmitSuccess()})).catch((function(t){e.isLoading=!1,e.formErrors=formUtil.handleErrors(t),"function"==typeof e.afterSubmit&&e.afterSubmit(),"function"==typeof e.afterSubmitError&&e.afterSubmitError()}))},reset:function(){var e=this;formUtil.confirmAction().then((function(t){t.value&&(e.formData=Object.assign({},e.formData,_.cloneDeep(e.initialFormData)))}))},unsavedCheck:function(e){formUtil.unsavedCheckAlert(this.initialFormData,this.formData,e)},fillPreRequisite:function(e){var t=this;this.preRequisite.objForEach((function(a,o){t.preRequisite[o]=e.hasOwnProperty(o)?e[o]:a})),this.isLoading=!1},fillFormData:function(){var e=this;this.isLoading=!0;var t=this.useUserPreference?this.configsWithPreference:this.configs;this.formData.type&&t[this.formData.type]&&(this.formData=formUtil.assignValues(this.formData,t[this.formData.type])),this.formData.types&&Array.isArray(this.formData.types)&&this.formData.types.forEach((function(a){e.formData=formUtil.assignValues(e.formData,t[a])})),this.formData.override&&this.formData.objForEach((function(a,o){a&&_.isObject(a)?e.formData[o]=formUtil.assignValues(e.formData[o],t[o]):e.formData[o]=t[o]?t[o]:a})),"function"==typeof this.addNewRow&&"function"==typeof this.addNewRowIfNone&&this.addNewRowIfNone(),this.isLoading=!1},getInitialData:function(e){var t,a=this;return(t=i.a.mark((function t(){var o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.isLoading=!0,t.prev=1,t.next=4,n.b(Object.keys(a.preRequisite).join(","));case 4:return o=t.sent,a.fillPreRequisite(o),e&&a.$nextTick((function(){e()})),t.abrupt("return",o);case 10:throw t.prev=10,t.t0=t.catch(1),a.isLoading=!1,a.formErrors=formUtil.handleErrors(t.t0),t.t0;case 15:case"end":return t.stop()}}),t,null,[[1,10]])})),function(){var e=this,a=arguments;return new Promise((function(o,i){var r=t.apply(e,a);function n(e){s(r,o,i,n,l,"next",e)}function l(e){s(r,o,i,n,l,"throw",e)}n(void 0)}))})()}}),mounted:function(){this.fillFormData(),this.initialFormData=_.cloneDeep(this.formData)},beforeDestroy:function(){delete this.formData,delete this.formErrors,delete this.preRequisite},beforeRouteLeave:function(e,t,a){this.unsavedCheck(a)}}},"5Xmu":function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var o=a("wd/R"),i=a.n(o),r={DAY_OF_MONTH:{code:"%DAY_OF_MONTH%",example:"Ex. 1-31",outputFormat:"moment",output:"DD"},DAY_OF_YEAR:{code:"%DAY_OF_YEAR%",example:"Ex. 1-365",outputFormat:"moment",output:"DDDD"},YEAR:{code:"%YEAR%",example:"Ex. 2020",outputFormat:"moment",output:"YYYY"},YEAR_SHORT:{code:"%YEAR_SHORT%",example:"Ex. 20",outputFormat:"moment",output:"YY"},MONTH:{code:"%MONTH%",example:"Ex. JANUARY",outputFormat:"moment",output:"MMMM"},MONTH_SHORT:{code:"%MONTH_SHORT%",example:"Ex. JAN",outputFormat:"moment",output:"MMM"},MONTH_NUMBER:{code:"%MONTH_NUMBER%",example:"Ex. 1 - 12",outputFormat:"moment",output:"MM"},DAY:{code:"%DAY%",example:"Ex. MONDAY",outputFormat:"moment",output:"dddd"},DAY_SHORT:{code:"%DAY_SHORT%",example:"Ex. MON",outputFormat:"moment",output:"ddd"},DAY_NUMBER:{code:"%DAY_NUMBER%",example:"Ex. 1 - 7",outputFormat:"moment",output:"E"},DATE:{code:"%DATE%",example:"Ex. 31-08-1987",outputFormat:"moment",output:"YYYY"},TIME:{code:"%DATE%",example:"Ex. 23:59",outputFormat:"moment",output:"mm"}},n=/%(.*?)%/g;function s(e){e.match(n);return r.objForEach((function(t,a){var o=new RegExp(t.code,"g");if("moment"===t.outputFormat){var r=i()().format(t.output);e=e.replace(o,r)}})),e}},Gtvm:function(e,t,a){"use strict";a.r(t);var o=a("3HR4"),i=(a("5Xmu"),{extends:o.a,data:function(){return{formData:{debugMode:!1,forceTurn:!1,enableChat:!0,enablePam:!1,enableScreenSharing:!0,enableRecording:!0,enableHandGesture:!0,footerAutoHide:!1,mirroredVideo:!1,disableScroll:!1,speechDetection:!0,muteParticipantsOnStart:!1,enableFileSharing:!0,enableLinkSharing:!0,enableWhiteboard:!0,allowJoiningWithoutDevices:!0,allowDeletingCancelledMeetings:!1,allowDeletingEndedMeetings:!1,instantMeetingAutoEnded:180,pamOpenJoinAsGuestPage:!1,pamEnableScreenSharingForGuest:!1,pamEnableLinkSharingForGuest:!1,pamEnableWhiteboardForGuest:!1,enableSnapshot:!1,anyoneCanTakeSnapshot:!1,enableSnapshotAlert:!1,snapshotAlertToUserOnly:!1,snapshotAlertToModerators:!1,askHostBeforeJoining:!1,preferRearCameraFirst:!1,layout:"fullpage",maxParticipantCount:1e3,type:"meeting"},layouts:[{uuid:"grid",label:$t("meeting.config.layout_grid")},{uuid:"gallery",label:$t("meeting.config.layout_gallery")},{uuid:"fullpage",label:$t("meeting.config.layout_fullpage")}],mimeTypesAudio:[{uuid:"audio/webm",label:"audio/webm"},{uuid:"audio/wav",label:"audio/wav"},{uuid:"audio/webm;codecs=pcm",label:"audio/webm;codecs=pcm"}],mimeTypesVideo:[{uuid:"video/mp4",label:"video/mp4"},{uuid:"video/webm",label:"video/webm"},{uuid:"video/webm;codecs=vp9",label:"video/webm;codecs=vp9"},{uuid:"video/webm;codecs=vp8",label:"video/webm;codecs=vp8"},{uuid:"video/webm;codecs=h264",label:"video/webm;codecs=h264"},{uuid:"video/x-matroska;codecs=avc1",label:"video/x-matroska;codecs=avc1"}]}},mounted:function(){this.getInitialData()}}),r=a("KHd+"),n=Object(r.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("base-container",{attrs:{boxed:"","with-loader":"","is-loading":e.isLoading,"loader-color":e.vars.loaderColor}},[a("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-6 mb-3"},[a("switch-wrapper",{attrs:{label:e.$t("meeting.config.allow_deleting_ended_meetings")}},[a("base-switch",{model:{value:e.formData.allowDeletingEndedMeetings,callback:function(t){e.$set(e.formData,"allowDeletingEndedMeetings",t)},expression:"formData.allowDeletingEndedMeetings"}})],1)],1),e._v(" "),a("div",{staticClass:"col-12 col-md-6 mb-3"},[a("switch-wrapper",{attrs:{label:e.$t("meeting.config.allow_deleting_cancelled_meetings")}},[a("base-switch",{model:{value:e.formData.allowDeletingCancelledMeetings,callback:function(t){e.$set(e.formData,"allowDeletingCancelledMeetings",t)},expression:"formData.allowDeletingCancelledMeetings"}})],1)],1),e._v(" "),a("div",{staticClass:"col-12 col-md-6 mb-3"},[a("base-input",{attrs:{label:e.$t("meeting.config.instant_meeting_auto_ended"),type:"number",error:e.formErrors.instantMeetingAutoEnded,"select-on-focus":"","addon-right-text":e.$t("list.general.durations.minutes")},on:{"update:error":function(t){return e.$set(e.formErrors,"instantMeetingAutoEnded",t)},wheel:function(e){e.stopPropagation(),e.preventDefault()}},model:{value:e.formData.instantMeetingAutoEnded,callback:function(t){e.$set(e.formData,"instantMeetingAutoEnded",t)},expression:"formData.instantMeetingAutoEnded"}})],1),e._v(" "),a("div",{staticClass:"col-12 col-md-6 mb-3"},[a("base-input",{attrs:{label:e.$t("meeting.config.max_participant_count"),type:"number",error:e.formErrors.maxParticipantCount,"select-on-focus":""},on:{"update:error":function(t){return e.$set(e.formErrors,"maxParticipantCount",t)},wheel:function(e){e.stopPropagation(),e.preventDefault()}},model:{value:e.formData.maxParticipantCount,callback:function(t){e.$set(e.formData,"maxParticipantCount",t)},expression:"formData.maxParticipantCount"}})],1)]),e._v(" "),a("h5",{staticClass:"mb-4 mt-5 pb-2 border-bottom"},[e._v(e._s(e.$t("meeting.publicly_accessible_meetings")))]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-6 mb-3"},[a("switch-wrapper",{attrs:{label:e.$t("meeting.config.enable_pam")}},[a("base-switch",{model:{value:e.formData.enablePam,callback:function(t){e.$set(e.formData,"enablePam",t)},expression:"formData.enablePam"}})],1)],1),e._v(" "),e.formData.enablePam?[a("div",{staticClass:"col-12 col-md-6 mb-3"},[a("switch-wrapper",{attrs:{label:e.$t("meeting.config.pam_open_join_as_guest_page")}},[a("base-switch",{model:{value:e.formData.pamOpenJoinAsGuestPage,callback:function(t){e.$set(e.formData,"pamOpenJoinAsGuestPage",t)},expression:"formData.pamOpenJoinAsGuestPage"}})],1)],1),e._v(" "),a("div",{staticClass:"col-12 col-md-6 mb-3"},[a("switch-wrapper",{attrs:{label:e.$t("meeting.config.pam_enable_screen_sharing_for_guest")}},[a("base-switch",{model:{value:e.formData.pamEnableScreenSharingForGuest,callback:function(t){e.$set(e.formData,"pamEnableScreenSharingForGuest",t)},expression:"formData.pamEnableScreenSharingForGuest"}})],1)],1),e._v(" "),a("div",{staticClass:"col-12 col-md-6 mb-3"},[a("switch-wrapper",{attrs:{label:e.$t("meeting.config.pam_enable_link_sharing_for_guest")}},[a("base-switch",{model:{value:e.formData.pamEnableScreenSharingForGuest,callback:function(t){e.$set(e.formData,"pamEnableScreenSharingForGuest",t)},expression:"formData.pamEnableScreenSharingForGuest"}})],1)],1),e._v(" "),a("div",{staticClass:"col-12 col-md-6 mb-3"},[a("switch-wrapper",{attrs:{label:e.$t("meeting.config.pam_enable_whiteboard_for_guest")}},[a("base-switch",{model:{value:e.formData.pamEnableScreenSharingForGuest,callback:function(t){e.$set(e.formData,"pamEnableScreenSharingForGuest",t)},expression:"formData.pamEnableScreenSharingForGuest"}})],1)],1)]:e._e()],2),e._v(" "),a("h5",{staticClass:"mb-4 mt-5 pb-2 border-bottom"},[e._v(e._s(e.$t("meeting.config.snapshot")))]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-6 mb-3"},[a("switch-wrapper",{attrs:{label:e.$t("meeting.config.enable_snapshot")}},[a("base-switch",{model:{value:e.formData.enableSnapshot,callback:function(t){e.$set(e.formData,"enableSnapshot",t)},expression:"formData.enableSnapshot"}})],1)],1),e._v(" "),e.formData.enableSnapshot?[a("div",{staticClass:"col-12 col-md-6 mb-3"},[a("switch-wrapper",{attrs:{label:e.$t("meeting.config.anyone_can_take_snapshot")}},[a("base-switch",{model:{value:e.formData.anyoneCanTakeSnapshot,callback:function(t){e.$set(e.formData,"anyoneCanTakeSnapshot",t)},expression:"formData.anyoneCanTakeSnapshot"}})],1)],1),e._v(" "),a("div",{staticClass:"col-12 col-md-6 mb-3"},[a("switch-wrapper",{attrs:{label:e.$t("meeting.config.enable_snapshot_alert")}},[a("base-switch",{model:{value:e.formData.enableSnapshotAlert,callback:function(t){e.$set(e.formData,"enableSnapshotAlert",t)},expression:"formData.enableSnapshotAlert"}})],1)],1),e._v(" "),a("div",{staticClass:"col-12 col-md-6 mb-3"},[a("switch-wrapper",{attrs:{label:e.$t("meeting.config.snapshot_alert_to_user_only")}},[a("base-switch",{model:{value:e.formData.snapshotAlertToUserOnly,callback:function(t){e.$set(e.formData,"snapshotAlertToUserOnly",t)},expression:"formData.snapshotAlertToUserOnly"}})],1)],1),e._v(" "),a("div",{staticClass:"col-12 col-md-6 mb-3"},[a("switch-wrapper",{attrs:{label:e.$t("meeting.config.snapshot_alert_to_moderators")}},[a("base-switch",{model:{value:e.formData.snapshotAlertToModerators,callback:function(t){e.$set(e.formData,"snapshotAlertToModerators",t)},expression:"formData.snapshotAlertToModerators"}})],1)],1)]:e._e()],2),e._v(" "),a("h5",{staticClass:"mb-4 mt-5 pb-2 border-bottom"},[e._v(e._s(e.$t("meeting.config.miscellaneous")))]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-4 mb-3"},[a("switch-wrapper",{attrs:{label:e.$t("meeting.config.enable_chat")}},[a("base-switch",{model:{value:e.formData.enableChat,callback:function(t){e.$set(e.formData,"enableChat",t)},expression:"formData.enableChat"}})],1)],1),e._v(" "),a("div",{staticClass:"col-12 col-md-4 mb-3"},[a("switch-wrapper",{attrs:{label:e.$t("meeting.config.enable_screen_sharing")}},[a("base-switch",{model:{value:e.formData.enableScreenSharing,callback:function(t){e.$set(e.formData,"enableScreenSharing",t)},expression:"formData.enableScreenSharing"}})],1)],1),e._v(" "),a("div",{staticClass:"col-12 col-md-4 mb-3"},[a("switch-wrapper",{attrs:{label:e.$t("meeting.config.enable_recording")}},[a("base-switch",{model:{value:e.formData.enableRecording,callback:function(t){e.$set(e.formData,"enableRecording",t)},expression:"formData.enableRecording"}})],1)],1),e._v(" "),a("div",{staticClass:"col-12 col-md-4 mb-3"},[a("switch-wrapper",{attrs:{label:e.$t("meeting.config.enable_hand_gesture")}},[a("base-switch",{model:{value:e.formData.enableHandGesture,callback:function(t){e.$set(e.formData,"enableHandGesture",t)},expression:"formData.enableHandGesture"}})],1)],1),e._v(" "),a("div",{staticClass:"col-12 col-md-4 mb-3"},[a("switch-wrapper",{attrs:{label:e.$t("meeting.config.enable_file_sharing")}},[a("base-switch",{model:{value:e.formData.enableFileSharing,callback:function(t){e.$set(e.formData,"enableFileSharing",t)},expression:"formData.enableFileSharing"}})],1)],1),e._v(" "),a("div",{staticClass:"col-12 col-md-4 mb-3"},[a("switch-wrapper",{attrs:{label:e.$t("meeting.config.enable_link_sharing")}},[a("base-switch",{model:{value:e.formData.enableLinkSharing,callback:function(t){e.$set(e.formData,"enableLinkSharing",t)},expression:"formData.enableLinkSharing"}})],1)],1),e._v(" "),a("div",{staticClass:"col-12 col-md-4 mb-3"},[a("switch-wrapper",{attrs:{label:e.$t("meeting.config.enable_whiteboard")}},[a("base-switch",{model:{value:e.formData.enableWhiteboard,callback:function(t){e.$set(e.formData,"enableWhiteboard",t)},expression:"formData.enableWhiteboard"}})],1)],1),e._v(" "),a("div",{staticClass:"col-12 col-md-4 mb-3"},[a("switch-wrapper",{attrs:{label:e.$t("meeting.config.footer_auto_hide")}},[a("base-switch",{model:{value:e.formData.footerAutoHide,callback:function(t){e.$set(e.formData,"footerAutoHide",t)},expression:"formData.footerAutoHide"}})],1)],1),e._v(" "),a("div",{staticClass:"col-12 col-md-4 mb-3"},[a("switch-wrapper",{attrs:{label:e.$t("meeting.config.mirrored_video")}},[a("base-switch",{model:{value:e.formData.mirroredVideo,callback:function(t){e.$set(e.formData,"mirroredVideo",t)},expression:"formData.mirroredVideo"}})],1)],1),e._v(" "),a("div",{staticClass:"col-12 col-md-4 mb-3"},[a("switch-wrapper",{attrs:{label:e.$t("meeting.config.disable_scroll")}},[a("base-switch",{model:{value:e.formData.disableScroll,callback:function(t){e.$set(e.formData,"disableScroll",t)},expression:"formData.disableScroll"}})],1)],1),e._v(" "),a("div",{staticClass:"col-12 col-md-4 mb-3"},[a("switch-wrapper",{attrs:{label:e.$t("meeting.config.speech_detection")}},[a("base-switch",{model:{value:e.formData.speechDetection,callback:function(t){e.$set(e.formData,"speechDetection",t)},expression:"formData.speechDetection"}})],1)],1),e._v(" "),a("div",{staticClass:"col-12 col-md-4 mb-3"},[a("switch-wrapper",{attrs:{label:e.$t("meeting.config.mute_participants_on_start")}},[a("base-switch",{model:{value:e.formData.muteParticipantsOnStart,callback:function(t){e.$set(e.formData,"muteParticipantsOnStart",t)},expression:"formData.muteParticipantsOnStart"}})],1)],1),e._v(" "),a("div",{staticClass:"col-12 col-md-4 mb-3"},[a("switch-wrapper",{attrs:{label:e.$t("meeting.config.allow_joining_without_devices")}},[a("base-switch",{model:{value:e.formData.allowJoiningWithoutDevices,callback:function(t){e.$set(e.formData,"allowJoiningWithoutDevices",t)},expression:"formData.allowJoiningWithoutDevices"}})],1)],1),e._v(" "),a("div",{staticClass:"col-12 col-md-4 mb-3"},[a("switch-wrapper",{attrs:{label:e.$t("meeting.config.ask_host_before_joining")}},[a("base-switch",{model:{value:e.formData.askHostBeforeJoining,callback:function(t){e.$set(e.formData,"askHostBeforeJoining",t)},expression:"formData.askHostBeforeJoining"}})],1)],1),e._v(" "),a("div",{staticClass:"col-12 col-md-4 mb-3"},[a("switch-wrapper",{attrs:{label:e.$t("meeting.config.prefer_rear_camera_first")}},[a("base-switch",{model:{value:e.formData.preferRearCameraFirst,callback:function(t){e.$set(e.formData,"preferRearCameraFirst",t)},expression:"formData.preferRearCameraFirst"}})],1)],1)]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-4"},[a("base-select",{attrs:{options:e.layouts,label:e.$t("meeting.config.layout"),"allow-empty":!1,"preselect-first":"",simple:"","track-by":"uuid","show-by":"label"},model:{value:e.formData.layout,callback:function(t){e.$set(e.formData,"layout",t)},expression:"formData.layout"}})],1),e._v(" "),a("div",{staticClass:"col-12 col-md-4 mb-3"},[a("base-select",{attrs:{options:e.mimeTypesAudio,label:e.$t("meeting.config.recording_format_audio"),"allow-empty":!1,"preselect-first":"",simple:"","track-by":"uuid","show-by":"label"},model:{value:e.formData.recordingFormatAudio,callback:function(t){e.$set(e.formData,"recordingFormatAudio",t)},expression:"formData.recordingFormatAudio"}})],1),e._v(" "),a("div",{staticClass:"col-12 col-md-4 mb-3"},[a("base-select",{attrs:{options:e.mimeTypesVideo,label:e.$t("meeting.config.recording_format_video"),"allow-empty":!1,"preselect-first":"",simple:"","track-by":"uuid","show-by":"label"},model:{value:e.formData.recordingFormatVideo,callback:function(t){e.$set(e.formData,"recordingFormatVideo",t)},expression:"formData.recordingFormatVideo"}})],1)]),e._v(" "),a("h5",{staticClass:"mb-4 mt-5 pb-2 border-bottom"},[e._v(e._s(e.$t("meeting.config.for_debugging")))]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-4 mb-3"},[a("switch-wrapper",{attrs:{label:e.$t("meeting.config.debug_mode")}},[a("base-switch",{model:{value:e.formData.debugMode,callback:function(t){e.$set(e.formData,"debugMode",t)},expression:"formData.debugMode"}})],1)],1),e._v(" "),a("div",{staticClass:"col-12 col-md-4 mb-3"},[a("switch-wrapper",{attrs:{label:e.$t("meeting.config.force_turn")}},[a("base-switch",{model:{value:e.formData.forceTurn,callback:function(t){e.$set(e.formData,"forceTurn",t)},expression:"formData.forceTurn"}})],1)],1)]),e._v(" "),a("div",{staticClass:"form-footer mt-5"},[a("div",{staticClass:"left-side"},[a("base-button",{attrs:{type:"button",design:"light",tabindex:"-1"},on:{click:function(t){return e.$router.back()}}},[a("i",{staticClass:"fas fa-chevron-left"}),e._v(" "+e._s(e.$t("general.cancel")))])],1),e._v(" "),a("div",{staticClass:"right-side"},[a("base-button",{attrs:{type:"button",design:"light"},on:{click:e.reset}},[e._v(e._s(e.$t("general.reset")))]),e._v(" "),a("base-button",{attrs:{type:"submit",design:"primary"}},[a("i",{staticClass:"fas fa-save"}),e._v(" "+e._s(e.$t("general.save")))])],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);
//# sourceMappingURL=general.js.map?id=6c9c6b5f3bbc382efd1e