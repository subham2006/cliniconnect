(this.webpackJsonpcliniconnect=this.webpackJsonpcliniconnect||[]).push([[0],{80:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(21),s=n.n(r),i=n(25),l=n(59),o=(n(66),l.a.initializeApp({apiKey:"AIzaSyC_5P1CTPzl_II3m5Rn6LKe9qr7tOeZs5U",authDomain:"cliniconnec.firebaseapp.com",databaseURL:"https://cliniconnec-default-rtdb.firebaseio.com",projectId:"cliniconnec",storageBucket:"cliniconnec.appspot.com",messagingSenderId:"886098761366",appId:"1:886098761366:web:3596b71ef88bf45e0794b7",measurementId:"G-0XQSRTRBKR"})),j=o.auth(),b=n(4),d=c.a.createContext();function h(){return Object(a.useContext)(d)}function u(e){var t=e.children,n=Object(a.useState)(),c=Object(i.a)(n,2),r=c[0],s=c[1],l=Object(a.useState)(!0),o=Object(i.a)(l,2),u=o[0],x=o[1];Object(a.useEffect)((function(){return j.onAuthStateChanged((function(e){s(e),x(!1)}))}),[]);var O={currentUser:r,login:function(e,t){return j.signInWithEmailAndPassword(e,t)},signup:function(e,t){return j.createUserWithEmailAndPassword(e,t)},logout:function(){return j.signOut()},resetPassword:function(e){return j.sendPasswordResetEmail(e)},updateEmail:function(e){return r.updateEmail(e)},updatePassword:function(e){return r.updatePassword(e)},useAuth:h};return Object(b.jsx)(d.Provider,{value:O,children:!u&&t})}var x=n(52),O=n.n(x),p=n(60),m=n(92),g=n(85),f=n(91),v=n(86),y=n(14),C=n.p+"static/media/logo.23202fe2.png";function w(){var e=Object(a.useRef)(),t=Object(a.useRef)(),n=h().login,c=Object(a.useState)(""),r=Object(i.a)(c,2),s=r[0],l=r[1],o=Object(a.useState)(!1),j=Object(i.a)(o,2),d=j[0],u=j[1],x=Object(y.f)();function w(){return(w=Object(p.a)(O.a.mark((function a(c){return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c.preventDefault(),a.prev=1,l(""),u(!0),a.next=6,n(e.current.value,t.current.value);case 6:x.push("/CliniConnect/dashboard"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(1),l("Failed to log in");case 12:u(!1);case 13:case"end":return a.stop()}}),a,null,[[1,9]])})))).apply(this,arguments)}return Object(b.jsxs)("div",{className:"w-100 ",style:{maxWidth:"400px",marginBottom:"100px"},children:[Object(b.jsx)("h1",{className:"d-flex justify-content-center",style:{marginBottom:"100px"},children:"CliniConnect"}),Object(b.jsx)("div",{className:"d-flex justify-content-center",style:{margin:"50px"},children:Object(b.jsx)("img",{src:C,style:{maxHeight:"100px"}})}),Object(b.jsx)("div",{children:Object(b.jsx)(m.a,{children:Object(b.jsxs)(m.a.Body,{children:[Object(b.jsx)("h2",{className:"text-center mb-4",children:"Log In"}),s&&Object(b.jsx)(g.a,{variant:"danger",children:s}),Object(b.jsxs)(f.a,{onSubmit:function(e){return w.apply(this,arguments)},children:[Object(b.jsxs)(f.a.Group,{id:"email",children:[Object(b.jsx)(f.a.Label,{children:"Email"}),Object(b.jsx)(f.a.Control,{type:"email",ref:e,required:!0})]}),Object(b.jsxs)(f.a.Group,{id:"password",children:[Object(b.jsx)(f.a.Label,{children:"Password"}),Object(b.jsx)(f.a.Control,{type:"password",ref:t,required:!0})]}),Object(b.jsx)(v.a,{disabled:d,className:"w-100",type:"submit",style:{marginTop:"20px"},children:"Log In"})]})]})})})]})}var N=n(40),k=n(88),I=(n(57),n(35)),P=n(87),S=n(89),R=(n(79),n(90));function L(e){Object(a.useRef)();return Object(b.jsxs)(R.a,Object(I.a)(Object(I.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(b.jsx)(R.a.Header,{closeButton:!0,children:Object(b.jsx)(R.a.Title,{id:"contained-modal-title-vcenter",children:"Patient Referral Form"})}),Object(b.jsx)(R.a.Body,{children:Object(b.jsxs)(f.a,{children:[Object(b.jsxs)(f.a.Group,{controlId:"exampleForm.ControlInput1",children:[Object(b.jsx)(f.a.Label,{children:"Doctor Name"}),Object(b.jsx)(f.a.Control,{placeholder:"Name"})]}),Object(b.jsxs)(f.a.Group,{controlId:"exampleForm.ControlSelect1",children:[Object(b.jsx)(f.a.Label,{children:"Would you like to refer this Patient?"}),Object(b.jsxs)(f.a.Control,{as:"select",children:[Object(b.jsx)("option",{children:"Yes"}),Object(b.jsx)("option",{children:"No"})]})]}),Object(b.jsxs)(f.a.Group,{controlId:"exampleForm.ControlTextarea1",children:[Object(b.jsx)(f.a.Label,{children:"If No, explain your reason"}),Object(b.jsx)(f.a.Control,{as:"textarea",rows:3})]})]})}),Object(b.jsx)(R.a.Footer,{children:Object(b.jsx)(v.a,{onClick:e.onHide,children:"Submit"})})]}))}function T(){Object(y.f)();var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=(t[0],t[1],Object(a.useState)(!1)),r=Object(i.a)(n,2),s=(r[0],r[1],c.a.useState(!1)),l=Object(i.a)(s,2),o=l[0],j=l[1],d=function(e){return Object(b.jsx)(P.a,Object(I.a)(Object(I.a)({id:"button-tooltip"},e),{},{children:"Trial Matched! Click to view Details."}))};return Object(b.jsxs)(k.a,{className:"d-flex justify-content-center",children:[Object(b.jsxs)("nav",{className:"navbar fixed-top navbar-expand-lg navbar-light bg-light",children:[Object(b.jsx)("img",{src:C,style:{height:"30px",margin:"15px"}}),Object(b.jsx)("a",{className:"navbar-brand",href:"#",children:"CliniConnect"}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(b.jsxs)("ul",{className:"navbar-nav",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link active",href:"#",children:"Doctor Portal"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link",href:"#",children:"Clinical Trial Portal"})})]})})]}),Object(b.jsx)("div",{children:Object(b.jsxs)("ul",{className:"list-group d-flex justify-content-center",style:{width:"100vh",height:"100vh"},children:[Object(b.jsx)("h1",{className:"d-flex justify-content-center",children:"Patients"}),Object(b.jsx)(S.a,{placement:"right",delay:{show:100,hide:1e3},overlay:d,children:Object(b.jsx)(v.a,{className:"w-100 btn btn-lg btn-danger",type:"button",style:{height:"75px"},onClick:function(){return j(!0)},children:"Cintrifuse"})}),Object(b.jsx)(S.a,{placement:"right",delay:{show:100,hide:1e3},overlay:d,children:Object(b.jsx)(v.a,{className:"w-100 btn btn-lg btn-danger",type:"button",style:{height:"75px"},onClick:function(){return j(!0)},children:"First"})}),Object(b.jsx)(S.a,{placement:"right",delay:{show:100,hide:1e3},overlay:d,children:Object(b.jsx)(v.a,{className:"w-100 btn btn-lg btn-danger",type:"button",style:{height:"75px"},onClick:function(){return j(!0)},children:"KMK"})}),Object(b.jsx)(S.a,{placement:"right",delay:{show:100,hide:1e3},overlay:d,children:Object(b.jsx)(v.a,{className:"w-100 btn btn-lg btn-danger",type:"button",style:{height:"75px"},onClick:function(){return j(!0)},children:"Taft"})}),Object(b.jsx)(S.a,{placement:"right",delay:{show:100,hide:1e3},overlay:d,children:Object(b.jsx)(v.a,{className:"w-100 btn btn-lg btn-danger",type:"button",style:{height:"75px"},onClick:function(){return j(!0)},children:"Kroger"})}),Object(b.jsx)(S.a,{placement:"right",delay:{show:100,hide:1e3},overlay:d,children:Object(b.jsx)(v.a,{className:"w-100 btn btn-lg btn-danger",type:"button",style:{height:"75px"},onClick:function(){return j(!0)},children:"P&G"})})]})}),Object(b.jsx)(L,{show:o,onHide:function(){return j(!1)}})]})}var B=function(){return Object(b.jsx)(k.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(b.jsx)(N.a,{children:Object(b.jsx)(u,{children:Object(b.jsxs)(y.c,{children:[Object(b.jsx)(y.a,{path:"/CliniConnect/",component:w}),Object(b.jsx)(y.a,{path:"/CliniConnect/dashboard",component:T}),Object(b.jsx)(y.a,{path:"/ClinicConnect/patient",component:L})]})})})})};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(B,{})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.5d7f46d1.chunk.js.map