(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{38:function(e,t,s){},57:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),r=s(20),c=s.n(r),o=s(12),l=s(3),i=s(5),d=s(0),u=Object(a.createContext)(),m={auth:!1,user:null,token:null},j=function(e,t){switch(t.type){case"LOGIN":return Object(i.a)(Object(i.a)({},e),{},{auth:!0,user:t.payload.user,token:t.payload.token});case"LOGOUT":return Object(i.a)(Object(i.a)({},e),{},{auth:!1,user:null});default:return e}},b=function(e){var t=e.children,s=Object(a.useReducer)(j,m),n=Object(l.a)(s,2),r=n[0],c=n[1];return Object(d.jsx)(u.Provider,{value:{state:r,dispatch:c},children:t})},x=(s(38),s(59)),h=s.p+"static/media/logo.d39ac25c.png",p=function(e){var t=e.auth,s=e.customStyle,a=e.dispatch;return Object(d.jsx)(d.Fragment,{children:t?Object(d.jsx)("button",{type:"button",className:s,onClick:function(){localStorage.removeItem("educativeUser"),a({type:"LOGOUT"})},children:"Logout"}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(o.b,{to:"/login",className:s,children:"Login"}),Object(d.jsx)(o.b,{to:"/signup",className:s,children:"Signup"})]})})},f=function(e){e.auth;var t=Object(a.useContext)(u),s=t.state,n=t.dispatch,r=Object(a.useState)(!1),c=Object(l.a)(r,2),i=c[0],m=c[1];return Object(d.jsx)("div",{children:Object(d.jsxs)("nav",{className:"bg-gray-800",children:[Object(d.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:Object(d.jsxs)("div",{className:"flex items-center justify-between h-16",children:[Object(d.jsxs)("div",{className:"flex items-center",children:[Object(d.jsx)("div",{className:"flex-shrink-0",children:Object(d.jsx)("img",{className:"h-8 w-8",src:h,alt:"Educative"})}),Object(d.jsx)("div",{className:"hidden md:block",children:Object(d.jsxs)("div",{className:"ml-10 flex items-baseline space-x-4",children:[Object(d.jsx)(o.b,{to:"/",className:" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium",children:"Home"}),Object(d.jsx)(o.b,{to:"/upload",className:" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium",children:"Upload"}),Object(d.jsx)(o.b,{to:"/view",className:" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium",children:"View"})]})})]}),Object(d.jsx)("div",{className:"hidden md:block",children:Object(d.jsx)(p,{auth:s.auth,customStyle:"hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium",dispatch:n})}),Object(d.jsx)("div",{className:"-mr-2 flex md:hidden",children:Object(d.jsxs)("button",{onClick:function(){return m(!i)},type:"button",className:"bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white","aria-controls":"mobile-menu","aria-expanded":"false",children:[Object(d.jsx)("span",{className:"sr-only",children:"Open main menu"}),i?Object(d.jsx)("svg",{className:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:Object(d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})}):Object(d.jsx)("svg",{className:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:Object(d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})]})})]})}),Object(d.jsx)(x.a,{show:i,enter:"transition ease-out duration-100 transform",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75 transform",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:function(e){return Object(d.jsx)("div",{className:"md:hidden",id:"mobile-menu",children:Object(d.jsxs)("div",{ref:e,className:"px-2 pt-2 pb-3 space-y-1 sm:px-3",children:[Object(d.jsx)(o.b,{to:"/",className:"hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium",children:"Home"}),Object(d.jsx)(o.b,{to:"/upload",className:"hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium",children:"Upload"}),Object(d.jsx)(o.b,{to:"/view",className:" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium",children:"View"}),Object(d.jsx)(p,{auth:s.auth,dispatch:n,customStyle:"hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"})]})})}})]})})},g=s(2),O=function(){return Object(d.jsxs)("div",{className:"flex",children:[Object(d.jsx)("div",{className:"h-2.5 w-2.5 bg-current rounded-full mr-1 animate-bounce"}),Object(d.jsx)("div",{className:"h-2.5 w-2.5 bg-current rounded-full mr-1 animate-bounce200"}),Object(d.jsx)("div",{className:"h-2.5 w-2.5 bg-current rounded-full animate-bounce400"})]})},v=function(e){var t=e.color,s=e.msg,a=e.showAlert,n=e.setShowAlert;return Object(d.jsx)(d.Fragment,{children:a?Object(d.jsxs)("div",{className:"text-white px-6 py-4 border-0 rounded relative mb-4 bg-"+t+"-500",children:[Object(d.jsx)("span",{className:"text-xl inline-block mr-5 align-middle",children:Object(d.jsx)("i",{className:"fas fa-bell"})}),Object(d.jsx)("span",{className:"inline-block align-middle mr-8",children:s}),Object(d.jsx)("button",{className:"absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none",onClick:function(){return n(!1)},children:Object(d.jsx)("span",{children:"\xd7"})})]}):null})},y=s(13),w=s.n(y),N={signup:function(e){var t=e.firstName,s=e.lastName,a=e.username,n=e.email,r=e.password;return w.a.post("/signup",{firstName:t,lastName:s,username:a,email:n,password:r})},verify:function(e){return w.a.get("/verify/".concat(e))},login:function(e){var t=e.emailOrUsername,s=e.password;return w.a.post("/login",{emailOrUsername:t,password:s})},logout:function(){localStorage.removeItem("user")}},k=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),s=t[0],n=t[1],r=Object(a.useState)(""),c=Object(l.a)(r,2),o=c[0],u=c[1],m=Object(a.useState)(""),j=Object(l.a)(m,2),b=j[0],x=j[1],h=Object(a.useState)(""),p=Object(l.a)(h,2),f=p[0],g=p[1],y=Object(a.useState)(""),w=Object(l.a)(y,2),k=w[0],F=w[1],S=Object(a.useState)(!1),C=Object(l.a)(S,2),L=C[0],U=C[1],z=Object(a.useState)({show:!1,color:"green",msg:""}),A=Object(l.a)(z,2),T=A[0],E=A[1];return Object(d.jsxs)("form",{className:"mt-8 space-y-6",onSubmit:function(e){e.preventDefault(),U(!0),N.signup({firstName:s,lastName:o,username:b,email:f,password:k}).then((function(e){console.log(e),U(!1),E({show:!0,color:"green",msg:e.data.message})})).catch((function(e){console.log(e.response.data),U(!1),E({show:!0,color:"red",msg:e.response.data||"Failed to create the account"})}))},children:[Object(d.jsx)("div",{className:"flex justify-center",children:T.show?Object(d.jsx)(v,{color:T.color,msg:T.msg,showAlert:T.show,setShowAlert:function(e){return E(Object(i.a)(Object(i.a)({},T),{},{show:e}))}}):null}),Object(d.jsxs)("div",{className:"rounded-md shadow-sm -space-y-px",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"firstName",className:"sr-only",children:"First Name"}),Object(d.jsx)("input",{id:"firstName",name:"firstName",type:"text",autoComplete:"firstName",className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"First Name",value:s,onChange:function(e){return n(e.target.value)},required:!0})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"lastName",className:"sr-only",children:"Last Name"}),Object(d.jsx)("input",{id:"lastName",name:"lastName",type:"text",autoComplete:"lastName",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Last Name",value:o,onChange:function(e){return u(e.target.value)}})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"username",className:"sr-only",children:"Username"}),Object(d.jsx)("input",{id:"username",name:"username",type:"text",autoComplete:"username",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Username",value:b,onChange:function(e){return x(e.target.value)}})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"email-address",className:"sr-only",children:"Email address"}),Object(d.jsx)("input",{id:"email-address",name:"email",type:"email",autoComplete:"email",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Email address",value:f,onChange:function(e){return g(e.target.value)}})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"password",className:"sr-only",children:"Password"}),Object(d.jsx)("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Password",value:k,onChange:function(e){return F(e.target.value)}})]})]}),Object(d.jsx)("div",{children:Object(d.jsxs)("button",{type:"submit",className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:[Object(d.jsx)("span",{className:"absolute left-0 inset-y-0 flex items-center pl-3",children:Object(d.jsx)("svg",{className:"h-5 w-5 text-indigo-500 group-hover:text-indigo-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:Object(d.jsx)("path",{fillRule:"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",clipRule:"evenodd"})})}),"Signup"]})}),Object(d.jsx)("div",{className:"flex justify-center",children:L?Object(d.jsx)(O,{}):null})]})},F=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8",children:Object(d.jsxs)("div",{className:"max-w-md w-full space-y-8",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{className:"mx-auto h-12 w-auto",src:h,alt:"Workflow"}),Object(d.jsx)("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Create a new account"})]}),Object(d.jsx)(k,{})]})})})},S=function(){var e=Object(g.h)().confirmationToken,t=Object(a.useState)(!0),s=Object(l.a)(t,2),n=s[0],r=s[1],c=Object(a.useState)({show:!1,color:"green",msg:""}),o=Object(l.a)(c,2),u=o[0],m=o[1];return Object(a.useEffect)((function(){N.verify(e).then((function(e){m({show:!0,color:"green",msg:e.data.message}),r(!1)})).catch((function(e){m({show:!0,color:"red",msg:"Failed to verify your email"}),r(!1),console.error(e)}))}),[]),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"flex h-screen",children:Object(d.jsxs)("div",{className:"m-auto",children:[n?Object(d.jsx)(O,{}):null,u.show?Object(d.jsx)(v,{color:u.color,msg:u.msg,showAlert:u.show,setShowAlert:function(e){return m(Object(i.a)(Object(i.a)({},u),{},{show:e}))}}):null]})})})},C=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),s=t[0],n=t[1],r=Object(a.useState)(""),c=Object(l.a)(r,2),o=c[0],m=c[1],j=Object(a.useContext)(u).dispatch,b=Object(a.useState)(!1),x=Object(l.a)(b,2),h=x[0],p=x[1],f=Object(a.useState)({show:!1,color:"green",msg:""}),g=Object(l.a)(f,2),y=g[0],w=g[1];return Object(d.jsxs)("form",{className:"mt-8 space-y-6",onSubmit:function(e){e.preventDefault(),N.login({emailOrUsername:s,password:o}).then((function(e){console.log(e),localStorage.setItem("educativeUser",JSON.stringify(e.data)),j({type:"LOGIN",payload:{user:e.data,token:e.data.token}}),p(!1)})).catch((function(e){console.log(e),p(!1),w({show:!0,color:"red",msg:e.response.data||"Failed to process the data"})}))},children:[Object(d.jsx)("div",{className:"flex justify-center",children:y.show?Object(d.jsx)(v,{color:y.color,msg:y.msg,showAlert:y.show,setShowAlert:function(e){return w(Object(i.a)(Object(i.a)({},y),{},{show:e}))}}):null}),Object(d.jsxs)("div",{className:"rounded-md shadow-sm -space-y-px",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"email-address",className:"sr-only",children:"Email address"}),Object(d.jsx)("input",{id:"email-address",name:"email",type:"email",autoComplete:"email",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Email address or Username",value:s,onChange:function(e){return n(e.target.value)}})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"password",className:"sr-only",children:"Password"}),Object(d.jsx)("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Password",value:o,onChange:function(e){return m(e.target.value)}})]})]}),Object(d.jsx)("div",{children:Object(d.jsxs)("button",{type:"submit",className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:[Object(d.jsx)("span",{className:"absolute left-0 inset-y-0 flex items-center pl-3",children:Object(d.jsx)("svg",{className:"h-5 w-5 text-indigo-500 group-hover:text-indigo-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:Object(d.jsx)("path",{fillRule:"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",clipRule:"evenodd"})})}),"Login"]})}),Object(d.jsx)("div",{className:"flex justify-center",children:h?Object(d.jsx)(O,{}):null})]})},L=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8",children:Object(d.jsxs)("div",{className:"max-w-md w-full space-y-8",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{className:"mx-auto h-12 w-auto",src:h,alt:"Workflow"}),Object(d.jsx)("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Log in to your account"})]}),Object(d.jsx)(C,{})]})})})},U=s.p+"static/media/welcome.35edbd3e.png",z=function(){var e=Object(a.useContext)(u).state;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8",children:Object(d.jsxs)("div",{className:"max-w-md w-full",children:[Object(d.jsx)("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Welcome, ".concat(e.user.firstName,"!")}),Object(d.jsx)("p",{className:"mt-6 text-center text-3xl text-gray-900",children:"You can upload your content easily to manage your files"}),Object(d.jsx)("img",{className:"mx-auto w-auto my-12",src:U,alt:"Workflow"})]})})})};function A(){var e=JSON.parse(localStorage.getItem("educativeUser"));return e&&e.token?{"x-access-token":e.token}:{}}var T={upload:function(e){return w.a.post("/upload",e,{headers:Object(i.a)(Object(i.a)({},A()),{},{"Content-Type":"multipart/form-data"})})},getFile:function(e){return w.a.get("/uploads/".concat(e),{headers:Object(i.a)({},A())})},getFiles:function(){return w.a.get("/file",{headers:Object(i.a)({},A())})},updateFile:function(e){return w.a.put("/file/".concat(e._id),Object(i.a)({},e),{headers:Object(i.a)({},A())})},deleteFile:function(e){return w.a.delete("/file/".concat(e),{headers:Object(i.a)({},A())})}},E=function(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),s=t[0],n=t[1],r=Object(a.useState)(""),c=Object(l.a)(r,2),o=c[0],u=c[1],m=Object(a.useState)(""),j=Object(l.a)(m,2),b=j[0],x=j[1],h=Object(a.useState)(!1),p=Object(l.a)(h,2),f=p[0],g=p[1],y=Object(a.useState)({show:!1,color:"green",msg:""}),w=Object(l.a)(y,2),N=w[0],k=w[1];return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),null!==s&&o){g(!0);var t=new FormData;t.append("file",s),t.append("name",(null===s||void 0===s?void 0:s.name)||"filename"),t.append("description",o),T.upload(t).then((function(e){console.log(e),g(!1),k(Object(i.a)(Object(i.a)({},N),{},{show:!0,color:"green",msg:e.data.message||"File uploaded successfully"}))})).catch((function(e){console.log(e),g(!1),k(Object(i.a)(Object(i.a)({},N),{},{show:!0,color:"red",msg:e.response.data||"Failed to upload the file"}))}))}else k({show:!0,color:"red",msg:"You have to choose a file and write a description"})},className:"m-10 flex flex-col items-center justify-center",children:[Object(d.jsx)("div",{className:"flex justify-center mt-10",children:N.show?Object(d.jsx)(v,{color:N.color,msg:N.msg,showAlert:N.show,setShowAlert:function(e){return k(Object(i.a)(Object(i.a)({},N),{},{show:e}))}}):null}),Object(d.jsxs)("label",{className:"flex flex-col items-center justify-center h-full w-full border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300",children:[Object(d.jsxs)("div",{className:"flex flex-col items-center justify-center pt-7",children:[Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-60 h-60 text-gray-500 group-hover:text-gray-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"})}),Object(d.jsx)("p",{className:"pt-1 text-lg tracking-wider text-gray-500 group-hover:text-gray-600",children:b||"Upload a file"})]}),Object(d.jsx)("input",{type:"file",className:"opacity-0",onChange:function(e){var t;n(e.target.files[0]||null),x((null===(t=e.target.files[0])||void 0===t?void 0:t.name)||"Upload a file")}})]}),Object(d.jsx)("textarea",{onChange:function(e){return u(e.target.value)},value:o,className:"mt-10 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",rows:"3",placeholder:"File Description"}),Object(d.jsx)("input",{type:"submit",value:"Upload",className:"w-80 cursor-pointer mt-10 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"}),Object(d.jsx)("div",{className:"flex justify-center mt-10",children:f?Object(d.jsx)(O,{}):null})]})})},M=s(31),q=s(58),I=function(e){var t=e.open,s=e.setOpen,n=e.file,r=e.fetchFiles,c=Object(a.useRef)(null),o=Object(a.useState)(""),u=Object(l.a)(o,2),m=u[0],j=u[1],b=Object(a.useState)(""),h=Object(l.a)(b,2),p=h[0],f=h[1],g=Object(a.useState)({show:!1,color:"green",msg:""}),O=Object(l.a)(g,2),y=O[0],w=O[1];return Object(a.useEffect)((function(){j((null===n||void 0===n?void 0:n.name)||""),f((null===n||void 0===n?void 0:n.description)||"")}),[n]),Object(d.jsx)(x.a.Root,{show:t,as:a.Fragment,children:Object(d.jsx)(q.a,{as:"div",className:"fixed z-10 inset-0 overflow-y-auto",initialFocus:c,onClose:s,children:Object(d.jsxs)("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[Object(d.jsx)(x.a.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(d.jsx)(q.a.Overlay,{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),Object(d.jsx)("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"\u200b"}),Object(d.jsx)(x.a.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:Object(d.jsxs)("div",{className:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:[Object(d.jsx)("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:Object(d.jsx)("div",{className:"sm:flex sm:items-start",children:Object(d.jsxs)("div",{className:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full",children:[y.show?Object(d.jsx)(v,{color:y.color,msg:y.msg,showAlert:y.show,setShowAlert:function(e){return w(Object(i.a)(Object(i.a)({},y),{},{show:e}))}}):null,Object(d.jsx)(q.a.Title,{as:"h3",className:"text-lg leading-6 font-medium text-gray-900",children:"Update File"}),Object(d.jsxs)("div",{className:"mt-2",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"name",className:"sr-only",children:"File's name"}),Object(d.jsx)("input",{id:"name",name:"name",type:"name",autoComplete:"name",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"File's name",value:m,onChange:function(e){return j(e.target.value)}})]}),Object(d.jsxs)("div",{className:"mt-2 w-full",children:[Object(d.jsx)("label",{htmlFor:"description",className:"sr-only",children:"File's description"}),Object(d.jsx)("input",{id:"description",name:"description",type:"description",autoComplete:"description",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"File's description",value:p,onChange:function(e){return f(e.target.value)}})]})]})]})})}),Object(d.jsxs)("div",{className:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",children:[Object(d.jsx)("button",{type:"button",className:"w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white-600 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm",onClick:function(){m&&p?T.updateFile(Object(i.a)(Object(i.a)({},n),{},{name:m,description:p})).then((function(e){r(),w({show:!0,color:"green",msg:"File updated successfully"}),setTimeout((function(){s(!1),w(Object(i.a)(Object(i.a)({},y),{},{show:!1}))}),3e3)})).catch((function(e){console.log(e.response),w({show:!0,color:"red",msg:"Failed to update the file"})})):w({show:!0,color:"red",msg:"Please, enter valid name and description"})},ref:c,children:"Update"}),Object(d.jsx)("button",{type:"button",className:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",onClick:function(){return s(!1)},children:"Cancel"})]})]})})]})})})},P=function(e){var t=e.file,s=e.fetchFiles,n=Object(a.useState)(!1),r=Object(l.a)(n,2),c=r[0],o=r[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(I,{open:c,setOpen:o,file:t,fetchFiles:s}),Object(d.jsxs)("div",{className:"max-w-sm rounded overflow-hidden shadow-lg border-2",children:[Object(d.jsx)("iframe",{style:{height:"20rem"},className:"w-full",src:t.filePath,title:t.name}),Object(d.jsxs)("div",{className:"px-6 py-4",children:[Object(d.jsx)("div",{className:"font-bold text-xl mb-2",children:t.name}),Object(d.jsx)("p",{className:"text-gray-700 text-base",children:t.description})]}),Object(d.jsxs)("div",{class:"inline-flex px-6 pb-3",children:[Object(d.jsx)("a",{class:"bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-l",href:t.filePath,download:t.name,target:"_blank",rel:"noreferrer",children:"Download"}),Object(d.jsx)("button",{class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4",onClick:function(){o(!0)},children:"Edit"}),Object(d.jsx)("button",{class:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-r",onClick:function(){T.deleteFile(t._id).then((function(e){console.log(e),s()})).catch((function(e){console.log(e.response)}))},children:"Delete"})]})]})]})},D=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),s=t[0],n=t[1],r=function(){T.getFiles().then((function(e){console.log(e.data.data),n(Object(M.a)(e.data.data))})).catch((function(e){console.log(e)}))};return Object(a.useEffect)((function(){r()}),[]),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"grid grid-cols-3 gap-4 m-10",children:s.map((function(e){return Object(d.jsx)(P,{file:e,fetchFiles:r})}))})})},R=function(e){var t=e.children;return Object(a.useContext)(u).state.auth?t:Object(d.jsx)(g.a,{to:"/login",replace:!0})},W=function(e){var t=e.children;return Object(a.useContext)(u).state.auth?Object(d.jsx)(g.a,{to:"/"}):t},B=function(){var e=Object(a.useContext)(u).dispatch;return Object(a.useEffect)((function(){var t=JSON.parse(localStorage.getItem("educativeUser"));return t&&e({type:"LOGIN",payload:{user:t,token:null===t||void 0===t?void 0:t.token}}),function(){localStorage.clear()}}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(f,{auth:!1}),Object(d.jsxs)(g.d,{children:[Object(d.jsx)(g.b,{path:"/",element:Object(d.jsx)(R,{children:Object(d.jsx)(z,{})})}),Object(d.jsx)(g.b,{path:"/upload",element:Object(d.jsx)(R,{children:Object(d.jsx)(E,{})})}),Object(d.jsx)(g.b,{path:"/view",element:Object(d.jsx)(R,{children:Object(d.jsx)(D,{})})}),Object(d.jsx)(g.b,{path:"/signup",element:Object(d.jsx)(W,{children:Object(d.jsx)(F,{})})}),Object(d.jsx)(g.b,{path:"/login",element:Object(d.jsx)(W,{children:Object(d.jsx)(L,{})})}),Object(d.jsx)(g.b,{path:"/verify/:confirmationToken",element:Object(d.jsx)(W,{children:Object(d.jsx)(S,{})})})]})]})};c.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(b,{children:Object(d.jsx)(o.a,{children:Object(d.jsx)(B,{})})})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.e2dd7410.chunk.js.map