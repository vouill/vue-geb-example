webpackJsonp([0],[,,,function(e,t,a){"use strict";var s=a(2),o=a.n(s),n=a(18),l=a(1);a.n(l);o.a.use(n.a);var i={open_modal:function(e,t){(0,e.commit)("open_modal",t),l.gebHandler.emit(t)}};t.a=new n.a.Store({actions:i})},function(e,t,a){a(11);var s=a(0)(a(7),a(15),null,null);e.exports=s.exports},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(2),o=a.n(s),n=a(4),l=a.n(n),i=a(1),c=a.n(i),r=a(3);o.a.use(c.a),new o.a({el:"#app",store:r.a,template:"<App/>",components:{App:l.a}})},function(e,t,a){"use strict";var s=a(13),o=a.n(s);a.d(t,"a",function(){return n});var n=o.a},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(12),o=a.n(s);t.default={name:"app",components:{Hello:o.a}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(6);t.default={name:"hello",data:function(){return{}},components:{Modal:s.a}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{gebId:{type:[String,Number],required:!0}},created:function(){var e=this;this.sub=this.$geb.getFilteredBus({gebId:this.gebId}).subscribe(function(t){e.showModal=!e.showModal})},data:function(){return{showModal:!1}}}},function(e,t){},function(e,t){},function(e,t,a){a(10);var s=a(0)(a(8),a(14),null,null);e.exports=s.exports},function(e,t,a){var s=a(0)(a(9),a(16),null,null);e.exports=s.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[a("div",[a("button",{directives:[{name:"geb-click-emit",rawName:"v-geb-click-emit",value:{gebId:"hello-modal"},expression:"{gebId:'hello-modal'}"}],staticClass:"button is-info"},[e._v("\n      Vue-geb directive\n    ")])]),e._v(" "),a("div",[a("button",{staticClass:"button is-primary",on:{click:function(t){e.$store.dispatch("open_modal",{gebId:"hello-modal"})}}},[e._v("\n      Vue-geb from Vuex Action\n    ")])]),e._v(" "),a("Modal",{attrs:{gebId:"hello-modal"}},[a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[e._v("Modal title")]),e._v(" "),a("button",{staticClass:"delete"})]),e._v(" "),a("section",{staticClass:"modal-card-body"},[e._v("\n        Bla bla bla\n      ")]),e._v(" "),a("footer",{staticClass:"modal-card-foot"},[a("a",{staticClass:"button is-success"},[e._v("Save changes")]),e._v(" "),a("a",{directives:[{name:"geb-click-emit",rawName:"v-geb-click-emit",value:{gebId:"hello-modal"},expression:"{gebId:'hello-modal'}"}],staticClass:"button"},[e._v("Cancel")])])])])],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"columns is-flex-mobile"},[a("div",{staticClass:"column is-half is-offset-one-quarter"},[a("div",{staticClass:"box"},[e._m(0),e._v(" "),a("Hello")],1)])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",[e._v("Vue-geb usage demo")]),e._v(" "),a("p",[e._v("This is an example of how to use a global event bus to your advantage. We are using "),a("a",{attrs:{href:"http://bulma.io/"}},[e._v("Bulma")]),e._v(" for the UI style.")]),e._v(" "),a("p",[e._v("Checkout this example's repository and the vue-geb global event vue plugin used here.")])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"modal",class:{"is-active":e.showModal}},[a("div",{staticClass:"modal-background",on:{click:function(t){e.showModal=!e.showModal}}}),e._v(" "),a("div",{staticClass:"modal-content"},[e._t("default")],2),e._v(" "),a("button",{staticClass:"modal-close",on:{click:function(t){e.showModal=!e.showModal}}})])},staticRenderFns:[]}}],[5]);
//# sourceMappingURL=app.js.map