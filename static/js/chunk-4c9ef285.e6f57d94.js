(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c9ef285"],{3252:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-container"},[s("switch-roles",{on:{change:e.handleRolesChange}})],1)},o=[],i=s("8ee8"),l={name:"PagePermission",components:{SwitchRoles:i["a"]},methods:{handleRolesChange:function(){this.$router.push({path:"/permission/index?"+ +new Date})}}},r=l,a=s("4023"),c=Object(a["a"])(r,n,o,!1,null,null,null);t["default"]=c.exports},"8ee8":function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticStyle:{"margin-bottom":"15px"}},[e._v("\n    "+e._s(e.$t("permission.roles"))+": "+e._s(e.roles)+"\n  ")]),e._v("\n  "+e._s(e.$t("permission.switchRoles"))+":\n  "),s("el-radio-group",{model:{value:e.switchRoles,callback:function(t){e.switchRoles=t},expression:"switchRoles"}},[s("el-radio-button",{attrs:{label:"editor"}}),e._v(" "),s("el-radio-button",{attrs:{label:"admin"}})],1)],1)},o=[],i={computed:{roles:function(){return this.$store.getters.roles},switchRoles:{get:function(){return this.roles[0]},set:function(e){var t=this;this.$store.dispatch("user/changeRoles",e).then((function(){t.$emit("change")}))}}}},l=i,r=s("4023"),a=Object(r["a"])(l,n,o,!1,null,null,null);t["a"]=a.exports}}]);