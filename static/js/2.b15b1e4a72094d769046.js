webpackJsonp([2],{"4Uwr":function(e,s,r){e.exports=r.p+"static/img/logo.5a484e0.jpg"},C43d:function(e,s){},xJsL:function(e,s,r){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var t={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"login fillcontain"},[t("img",{staticClass:"manage-logo",attrs:{src:r("4Uwr"),alt:""}}),e._v(" "),e._m(0),e._v(" "),t("el-row",[t("el-col",{attrs:{span:12,offset:6}},[t("el-form",{ref:"loginForm",attrs:{"label-position":"left","label-width":"80px",model:e.loginForm,rules:e.rules}},[t("el-form-item",{attrs:{prop:"username",label:"用户名"}},[t("el-input",{attrs:{placeholder:"用户名"},model:{value:e.loginForm.username,callback:function(s){e.$set(e.loginForm,"username",s)},expression:"loginForm.username"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"password",label:"密码"}},[t("el-input",{attrs:{label:"密码",type:"password",placeholder:"密码"},model:{value:e.loginForm.password,callback:function(s){e.$set(e.loginForm,"password",s)},expression:"loginForm.password"}})],1),e._v(" "),t("el-form-item",{staticClass:"button-wrapper"},[t("el-button",{staticClass:"submit_btn",attrs:{type:"primary"},on:{click:function(s){e.submitForm("loginForm")}}},[e._v("登陆")])],1)],1)],1)],1)],1)},staticRenderFns:[function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"manage-tip"},[s("p",[this._v("巧克力梦工厂后台管理系统")])])}]};var o=r("VU/8")({data:function(){return{loginForm:{username:"",password:""},rules:{username:[{required:!0,message:"请输入活动名称",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]},showLogin:!1}},methods:{submitForm:function(e){var s=this;this.$refs[e].validate(function(e){if(!e)return!1;"admin"==s.loginForm.username&&"123456"==s.loginForm.password?(s.$message({type:"success",message:"登录成功"}),s.$router.push("main")):s.$message({type:"error",message:"账号或者密码错误"})})},resetForm:function(e){this.$refs[e].resetFields()}}},t,!1,function(e){r("C43d")},"data-v-1e439c44",null);s.default=o.exports}});
//# sourceMappingURL=2.b15b1e4a72094d769046.js.map