(window.webpackJsonp=window.webpackJsonp||[]).push([[16,9,10],{254:function(t,e,n){"use strict";n.r(e);var r={},l=n(17),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full sm:w-1/2"},[n("div",{staticClass:"leading-loose"},[n("form",{staticClass:"\n        max-w-xl\n        m-4\n        p-6\n        sm:p-10\n        bg-secondary-light\n        dark:bg-secondary-dark\n        rounded-xl\n        shadow-xl\n        text-left\n      "},[n("p",{staticClass:"\n          text-primary-dark\n          dark:text-primary-light\n          text-2xl\n          font-semibold\n          mb-8\n        "},[t._v("\n        Contact Form\n      ")]),t._v(" "),n("div",{},[n("label",{staticClass:"block text-lg text-primary-dark dark:text-primary-light mb-2",attrs:{for:"name"}},[t._v("Full Name")]),t._v(" "),n("input",{staticClass:"\n            w-full\n            px-5\n            py-2\n            border-0\n            text-primary-dark\n            dark:text-secondary-light\n            bg-ternary-light\n            dark:bg-ternary-dark\n            rounded-md\n            shadow-sm\n            text-md\n            dark:font-medium\n          ",attrs:{id:"name",name:"name",type:"text",required:"",placeholder:"Your Name","aria-label":"Name"}})]),t._v(" "),n("div",{staticClass:"mt-6"},[n("label",{staticClass:"block text-lg text-primary-dark dark:text-primary-light mb-2",attrs:{for:"email"}},[t._v("Email")]),t._v(" "),n("input",{staticClass:"\n            w-full\n            px-5\n            py-2\n            border-0\n            text-primary-dark\n            dark:text-secondary-light\n            bg-ternary-light\n            dark:bg-ternary-dark\n            rounded-md\n            shadow-sm\n            text-md\n            dark:font-medium\n          ",attrs:{id:"email",name:"email",type:"text",required:"",placeholder:"Your Email","aria-label":"Email"}})]),t._v(" "),n("div",{staticClass:"mt-6"},[n("label",{staticClass:"block text-lg text-primary-dark dark:text-primary-light mb-2",attrs:{for:"subject"}},[t._v("Subject")]),t._v(" "),n("input",{staticClass:"\n            w-full\n            px-5\n            py-2\n            border-0\n            text-primary-dark\n            dark:text-secondary-light\n            bg-ternary-light\n            dark:bg-ternary-dark\n            rounded-md\n            shadow-sm\n            text-md\n            dark:font-medium\n          ",attrs:{id:"subject",name:"subject",type:"text",required:"",placeholder:"Subject","aria-label":"Subject"}})]),t._v(" "),n("div",{staticClass:"mt-6"},[n("label",{staticClass:"block text-lg text-primary-dark dark:text-primary-light mb-2",attrs:{for:"message"}},[t._v("Message")]),t._v(" "),n("textarea",{staticClass:"\n            w-full\n            px-5\n            py-2\n            border-0\n            text-primary-dark\n            dark:text-secondary-light\n            bg-ternary-light\n            dark:bg-ternary-dark\n            rounded-md\n            shadow-sm\n            text-md\n            dark:font-medium\n          ",attrs:{id:"message",name:"message",cols:"14",rows:"6","aria-label":"Message"}})]),t._v(" "),n("div",{staticClass:"mt-6"},[n("button",{staticClass:"\n            px-4\n            py-2.5\n            text-white\n            font-medium\n            tracking-wider\n            bg-ligt-oggy\n            hover:bg-primary-oggy\n            focus:ring-1 focus:ring-ternary-light\n            rounded-lg\n          ",attrs:{type:"submit","aria-label":"Send Message"}},[t._v("\n          Send Message\n        ")])])])])])}],!1,null,"63bc1180",null);e.default=component.exports},255:function(t,e,n){"use strict";n.r(e);var r={props:["contacts"]},l=n(17),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full sm:w-1/2"},[n("div",{staticClass:"text-left max-w-xl px-6"},[n("h2",{staticClass:"\n        text-2xl text-primary-dark\n        dark:text-primary-light\n        font-semibold\n        mt-12\n        mb-8\n      "},[t._v("\n      Contact details\n    ")]),t._v(" "),n("ul",{},t._l(t.contacts,(function(e){return n("li",{key:e.id,staticClass:"flex"},[n("i",{staticClass:"w-5 text-gray-500 dark:text-gray-400 mr-4",attrs:{"data-feather":e.icon}}),t._v(" "),n("a",{staticClass:"text-lg mb-4 text-ternary-dark dark:text-ternary-light",class:"mail"===e.icon||"phone"===e.icon?"hover:underline cursor-pointer":"",attrs:{href:"#","aria-label":"Website and Phone"}},[t._v("\n          "+t._s(e.name)+"\n        ")])])})),0)])])}),[],!1,null,"5ce05fd2",null);e.default=component.exports},269:function(t,e,n){"use strict";n.r(e);n(24),n(42);var r=n(32),l=n.n(r),d={data:function(){return{contacts:[{id:1,name:"Your Address, Your City, Your Country",icon:"map-pin"},{id:2,name:"email@domain.com",icon:"mail"},{id:3,name:"555 8888 888",icon:"phone"}]}},mounted:function(){l.a.replace()},updated:function(){l.a.replace()}},o=n(17),component=Object(o.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mx-auto sm:flex py-4 sm:py-10 mt-6 sm:mt-20"},[n("ContactForm"),t._v(" "),n("ContactDetails",{attrs:{contacts:t.contacts}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ContactForm:n(254).default,ContactDetails:n(255).default})}}]);