(this.webpackJsonpinvitation=this.webpackJsonpinvitation||[]).push([[0],{50:function(n,t,e){"use strict";e.r(t);var r=e(0),c=e(1),i=e.n(c),a=e(22),o=e.n(a),u=e(4),s=e(6),f=e(2),b=e(3);function j(){var n=Object(f.a)(["\n  @media (max-width: ","px) {\n    ",";\n  }\n"]);return j=function(){return n},n}function l(){var n=Object(f.a)(["\n  display: flex;\n  flex-direction: row;\n"]);return l=function(){return n},n}function d(){var n=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return d=function(){return n},n}function p(){var n=Object(f.a)(["\n  font-size: 18px;\n  font-weight: 400;\n  letter-spacing: 0.2px;\n"]);return p=function(){return n},n}function x(){var n=Object(f.a)(["\n  color: #7a7a7a;\n  font-size: 15px;\n  font-weight: 400;\n  letter-spacing: 6.2px;\n"]);return x=function(){return n},n}function O(){var n=Object(f.a)(['\n  color: #676483;\n  font-size: 48px;\n  font-weight: 400;\n  letter-spacing: -0.3px;\n  font-family: "Caveat", cursive;\n']);return O=function(){return n},n}var h=b.c.h3(O()),m=b.c.span(x()),v=(b.c.span(p()),Object(b.b)(d())),g=Object(b.b)(l()),w={tablet:768,phone:414},y=Object.keys(w).reduce((function(n,t){var e;return n[t]=(e=w[t],function(n){for(var t=arguments.length,r=new Array(t>1?t-1:0),c=1;c<t;c++)r[c-1]=arguments[c];return Object(b.b)(j(),e,b.b.apply(void 0,[n].concat(r)))}),n}),{});function z(){var n=Object(f.a)(["\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  ",";\n"]);return z=function(){return n},n}function U(){var n=Object(f.a)(["\n  ",";\n  top: 0;\n  left: 0;\n  z-index: 3;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  align-items: center;\n  justify-content: center;\n"]);return U=function(){return n},n}function F(){var n=Object(f.a)(["\n  "," {\n    font-size: 78px;\n    max-width: 226px;\n    text-align: center;\n  }\n  img {\n    object-fit: cover;\n  }\n"]);return F=function(){return n},n}function k(){var n=Object(f.a)(["\n  color: #5d5454;\n  font-size: 17px;\n  margin-bottom: 6px;\n  text-transform: uppercase;\n"]);return k=function(){return n},n}function A(){var n=Object(f.a)(["\n  font-size: 80px;\n"]);return A=function(){return n},n}function S(){var n=Object(f.a)(["\n  font-size: 104px;\n  text-align: center;\n"]);return S=function(){return n},n}function B(){var n=Object(f.a)(["\n  top: 0;\n  left: 0;\n  z-index: 2;\n  width: 100%;\n  height: 100vh;\n  opacity: 0.73;\n  position: absolute;\n  background-color: #ebe9f4;\n"]);return B=function(){return n},n}function E(){var n=Object(f.a)(["\n      transform: scale(1.2);\n      transition: transform 5s linear;\n    "]);return E=function(){return n},n}function C(){var n=Object(f.a)(["\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  position: relative;\n  transform: scale(1);\n  ","\n"]);return C=function(){return n},n}var I=b.c.img(C(),(function(n){return n.canAnimate&&Object(b.b)(E())})),T=b.c.div(B()),X=Object(b.c)(h)(S()),D=Object(b.c)(X)(A()),R=Object(b.c)(m)(k()),M=y.phone(F(),X),K=b.c.div(U(),v),N=b.c.section(z(),M),J=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return!!n&&/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/gi.test(n)},Y=e.p+"static/media/bg1-mob.d3d6db98.png",_=e.p+"static/media/bg2-mob.64176cd5.png",q=e.p+"static/media/bg3-mob.265c0622.png",H=e.p+"static/media/bg1-des.ca3dea9f.jpg",L=e.p+"static/media/bg2-des.b0fb36ea.jpg",P=e.p+"static/media/bg3-des.31c3e3da.jpg",Z=e(7),G=function(n){return n.replace("?","").split("&").map((function(n){return n.split(/^([^=]+)=/).filter((function(n){return n}))})).reduce((function(n,t){var e=Object(s.a)(t,2),r=e[0],c=e[1];return Object(u.a)(Object(u.a)({},n),{},Object(Z.a)({},r,decodeURIComponent(c)))}),{})},V=[_,q,Y],$=[H,L,P],Q=J()?V:$,W=function(n){var t=n.activeIndex,e=Object(c.useState)(!1),i=Object(s.a)(e,2),a=i[0],o=i[1];return Object(c.useEffect)((function(){return setTimeout((function(){return o(!0)}),10),function(){setTimeout((function(){return o(!1)}),0)}}),[t]),Object(r.jsx)(I,Object(u.a)(Object(u.a)({alt:"rings"},{canAnimate:a}),{},{src:Q[t]}))},nn=function(){var n=function(){var n=Object(c.useState)(0),t=Object(s.a)(n,2),e=t[0],r=t[1];return Object(c.useEffect)((function(){var n=setInterval((function(){r((function(n){return 2===n?0:n+1}))}),5e3);return function(){return clearInterval(n)}}),[]),e}(),t=Object(c.useState)(""),e=Object(s.a)(t,2),i=e[0],a=e[1];return Object(c.useEffect)((function(){var n=G(window.location.search);n.for&&a(n.for)}),[]),Object(r.jsxs)(N,{children:[Object(r.jsx)(T,{}),Object(r.jsx)(W,Object(u.a)({},{activeIndex:n})),Object(r.jsxs)(K,{children:[Object(r.jsx)(D,{as:"h2",dangerouslySetInnerHTML:{__html:i}}),Object(r.jsx)(R,{children:"\u0417\u0430\u043f\u0440\u043e\u0448\u0443\u0454\u043c\u043e \u043d\u0430 \u0432\u0435\u0441\u0456\u043b\u043b\u044f"}),Object(r.jsx)(X,{as:"h1",children:"\u0412\u0456\u043a\u0442\u043e\u0440\u0430 & \u041c\u0430\u0440'\u044f\u043d\u0438"})]})]})};function tn(){var n=Object(f.a)(["\n  ",";\n"]);return tn=function(){return n},n}function en(){var n=Object(f.a)(["\n  ","\n  margin: 0 10px;\n  min-width: 195px;\n  min-height: 195px;\n  align-items: center;\n  box-sizing: border-box;\n  justify-content: center;\n  border: 3px solid #b3b1c6;\n  padding: 31px 0px 43px 0px;\n  ",";\n"]);return en=function(){return n},n}function rn(){var n=Object(f.a)(["\n  margin: 0 3px;\n  min-width: 83px;\n  min-height: 122px;\n  "," {\n    font-size: 34px;\n  }\n  "," {\n    font-size: 8px;\n  }\n"]);return rn=function(){return n},n}function cn(){var n=Object(f.a)(["\n  color: #676483;\n  font-size: 11px;\n  font-weight: 400;\n  line-height: 1em;\n  font-style: normal;\n  letter-spacing: 3px;\n  text-transform: uppercase;\n"]);return cn=function(){return n},n}function an(){var n=Object(f.a)(['\n  color: #676483;\n  font-size: 69px;\n  font-weight: 400;\n  line-height: 1.4em;\n  font-family: "Times New Roman", Sans-serif;\n']);return an=function(){return n},n}var on=b.c.span(an()),un=b.c.span(cn()),sn=y.phone(rn(),on,un),fn=b.c.div(en(),v,sn),bn=b.c.div(tn(),g),jn=function(n){var t=n.title,e=n.value;return Object(r.jsxs)(fn,{children:[Object(r.jsx)(on,{children:"".concat(e).padStart(2,"0")}),Object(r.jsx)(un,{children:t})]})},ln=6e4,dn=36e5,pn=864e5,xn=function(){var n=function(){var n=Object(c.useState)(Date.now()),t=Object(s.a)(n,2),e=t[0],r=t[1];Object(c.useEffect)((function(){var n=setInterval((function(){r(Date.now())}),1e3);return function(){clearInterval(n)}}),[]);var i=new Date("2021/06/26").getTime()-e;return[~~(i/pn),~~(i%pn/dn),~~(i%dn/ln),~~(i%ln/1e3)]}(),t=Object(s.a)(n,4),e=t[0],i=t[1],a=t[2],o=t[3];return Object(r.jsxs)(bn,{children:[Object(r.jsx)(jn,{title:"\u0434\u043d\u0456\u0432",value:e}),Object(r.jsx)(jn,{title:"\u0433\u043e\u0434\u0438\u043d",value:i}),Object(r.jsx)(jn,{title:"\u0445\u0432\u0438\u043b\u0438\u043d",value:a}),Object(r.jsx)(jn,{title:"\u0441\u0435\u043a\u0443\u043d\u0434",value:o})]})};function On(){var n=Object(f.a)(["\n  ",";\n  width: 100%;\n  margin: 0 auto;\n  padding: 100px 0;\n  max-width: 1140px;\n  align-items: center;\n  background: #6ec1e400;\n  justify-content: center;\n  ",", "," {\n    text-align: center;\n  }\n"]);return On=function(){return n},n}function hn(){var n=Object(f.a)(["\n  font-size: 61px;\n  margin-bottom: 40px;\n"]);return hn=function(){return n},n}function mn(){var n=Object(f.a)(["\n  margin: 0 0 20px;\n  text-transform: uppercase;\n"]);return mn=function(){return n},n}var vn=Object(b.c)(m)(mn()),gn=Object(b.c)(h)(hn()),wn=b.c.section(On(),v,vn,gn),yn=function(){return Object(r.jsxs)(wn,{children:[Object(r.jsxs)(gn,{as:"h2",children:["\u0414\u0435\u043d\u044c \u0432\u0435\u0441\u0456\u043b\u043b\u044f ",Object(r.jsx)("br",{})," 26 \u0447\u0435\u0440\u0432\u043d\u044f 2021\u0440."]}),Object(r.jsx)(vn,{children:"\u0414\u043e \u0432\u0435\u0441\u0456\u043b\u043b\u044f \u0437\u0430\u043b\u0438\u0448\u0438\u043b\u043e\u0441\u044f"}),Object(r.jsx)(xn,{})]})};function zn(){var n=Object(f.a)([""]);return zn=function(){return n},n}function Un(){var n=Object(f.a)([""]);return Un=function(){return n},n}function Fn(){var n=Object(f.a)(['\n  color: #676483;\n  font-family: "Font Awesome 5 Brands";\n  &:before {\n    content: "\f09a";\n    /* position: absolute; */\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n    -ms-transform: translateX(-50%);\n    transform: translateX(-50%);\n  }\n'],['\n  color: #676483;\n  font-family: "Font Awesome 5 Brands";\n  &:before {\n    content: "\\f09a";\n    /* position: absolute; */\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n    -ms-transform: translateX(-50%);\n    transform: translateX(-50%);\n  }\n']);return Fn=function(){return n},n}function kn(){var n=Object(f.a)(['\n  color: #676483;\n  width: 1em;\n  height: 1em;\n  position: relative;\n  display: block;\n  font-family: "Font Awesome 5 Brands";\n  &:before {\n    content: "\f16d";\n  }\n'],['\n  color: #676483;\n  width: 1em;\n  height: 1em;\n  position: relative;\n  display: block;\n  font-family: "Font Awesome 5 Brands";\n  &:before {\n    content: "\\f16d";\n  }\n']);return kn=function(){return n},n}function An(){var n=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return An=function(){return n},n}function Sn(){var n=Object(f.a)(["\n  width: 100%;\n  display: flex;\n  color: #ebe9f4;\n  font-size: 16px;\n  min-height: 120px;\n  align-items: center;\n  justify-content: center;\n  background-color: #676483;\n"]);return Sn=function(){return n},n}var Bn=b.c.div(Sn()),En=(b.c.div(An()),b.c.i(kn()),b.c.i(Fn()),b.c.div(Un())),Cn=b.c.section(zn()),In=function(){var n=(new Date).getFullYear();return Object(r.jsxs)(Cn,{children:[Object(r.jsx)(En,{}),Object(r.jsx)(Bn,{children:"\xa9".concat(n," Made with Love by Viktor Hardubej")})]})};function Tn(){var n=Object(f.a)(["\n  ",";\n  padding: 100px 0;\n  text-align: center;\n  align-items: center;\n  "," {\n    margin-bottom: 13px;\n  }\n"]);return Tn=function(){return n},n}function Xn(){var n=Object(f.a)(["\n  ",";\n  width: 100%;\n  padding: 100px 0;\n  max-width: 1140px;\n  margin: 35px auto 0;\n  box-shadow: 0px 0px 44px -14px rgb(0 0 0 / 50%);\n  ",";\n"]);return Xn=function(){return n},n}function Dn(){var n=Object(f.a)(["\n  ",";\n  width: calc(100% - 20px);\n  ",":last-of-type {\n    margin-top: 50px;\n  }\n"]);return Dn=function(){return n},n}function Rn(){var n=Object(f.a)(["\n  ",";\n  flex: 1;\n  justify-content: center;\n"]);return Rn=function(){return n},n}function Mn(){var n=Object(f.a)(['\n  color: #676483;\n  font-size: 20px;\n  margin-top: 30px;\n  font-weight: 700;\n  margin-bottom: 10px;\n  letter-spacing: 0.1px;\n  font-family: "Times New Roman", Sans-serif;\n']);return Mn=function(){return n},n}function Kn(){var n=Object(f.a)(['\n  color: #7a7a7a;\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: 0.1px;\n  font-family: "Times New Roman", Sans-serif;\n']);return Kn=function(){return n},n}function Nn(){var n=Object(f.a)(['\n  color: #676483;\n  font-size: 45px;\n  font-weight: 400;\n  font-family: "Caveat", cursive;\n  letter-spacing: -0.3px;\n']);return Nn=function(){return n},n}var Jn=b.c.h3(Nn()),Yn=b.c.span(Kn()),_n=b.c.span(Mn()),qn=b.c.div(Rn(),v),Hn=y.phone(Dn(),v,qn),Ln=b.c.div(Xn(),g,Hn),Pn=b.c.section(Tn(),v,m),Zn=function(){return Object(r.jsxs)(Pn,{children:[Object(r.jsx)(m,{children:"\u0420\u041e\u0417\u041a\u041b\u0410\u0414"}),Object(r.jsx)(h,{children:"\u0414\u0435 \u0456 \u041a\u043e\u043b\u0438"}),Object(r.jsxs)(Ln,{children:[Object(r.jsxs)(qn,{children:[Object(r.jsx)(Jn,{children:"\u0422\u0430\u0457\u043d\u0441\u0442\u0432\u043e \u0432\u0456\u043d\u0447\u0430\u043d\u043d\u044f"}),Object(r.jsx)(Yn,{children:"26/06/2021 13:45"}),Object(r.jsx)(_n,{children:"\u0410\u0434\u0440\u0435\u0441\u0430"}),Object(r.jsxs)(Yn,{children:["\u043c\u0456\u0441\u0442\u043e \u041b\u044c\u0432\u0456\u0432, \u0432\u0443\u043b. \u041f\u0430\u0441\u0456\u0447\u043d\u0430 83, ",Object(r.jsx)("br",{}),"\u0446\u0435\u0440\u043a\u0432\u0430 \u0411\u043b\u0430\u0433\u043e\u0432\u0456\u0449\u0435\u043d\u043d\u044f \u041f\u0440\u0435\u0441\u0432\u044f\u0442\u043e\u0457 \u0411\u043e\u0433\u043e\u0440\u043e\u0434\u0438\u0446\u0456"]})]}),Object(r.jsxs)(qn,{children:[Object(r.jsx)(Jn,{children:"\u0421\u0432\u044f\u0442\u043a\u043e\u0432\u0438\u0439 \u0431\u0435\u043d\u043a\u0435\u0442"}),Object(r.jsx)(Yn,{children:"26/06/2021 17:00"}),Object(r.jsx)(_n,{children:"\u0410\u0434\u0440\u0435\u0441\u0430"}),Object(r.jsxs)(Yn,{children:["\u043c\u0456\u0441\u0442\u043e \u041b\u044c\u0432\u0456\u0432, \u0432\u0443\u043b. \u041c\u0435\u0434\u043e\u0432\u043e\u0457 \u041f\u0435\u0447\u0435\u0440\u0438 65, ",Object(r.jsx)("br",{}),'\u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d "\u041c\u0435\u0434\u043e\u0432\u0430 \u041f\u0435\u0447\u0435\u0440\u0430"']})]})]})]})},Gn=e(9);function Vn(){var n=Object(f.a)(["\n  width: 100%;\n  padding: 100px 0;\n  background: linear-gradient(\n      rgba(235, 233, 244, 0.5),\n      rgba(235, 233, 244, 0.5)\n    ),\n    url(",") center / cover no-repeat;\n"]);return Vn=function(){return n},n}function $n(){var n=Object(f.a)(["\n  color: #fff;\n  height: 60px;\n  border: none;\n  font-size: 17px;\n  border-radius: 5px;\n  background-color: #676483;\n  text-transform: uppercase;\n"]);return $n=function(){return n},n}function Qn(){var n=Object(f.a)(["\n  position: relative;\n  span {\n    top: 9px;\n    right: 6px;\n    color: red;\n    z-index: 5;\n    font-size: 12px;\n    position: absolute;\n  }\n"]);return Qn=function(){return n},n}function Wn(){var n=Object(f.a)(["\n  ",";\n  margin: auto;\n  margin-top: 50px;\n  background-color: #ffffff94;\n  padding: 80px 80px 80px 80px;\n  box-shadow: 0px 0px 44px -14px rgb(0 0 0 / 50%);\n  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;\n  input,\n  textarea {\n    width: 100%;\n    font-size: 17px;\n    min-height: 40px;\n    font-weight: 400;\n    padding: 8px 16px;\n    border-radius: 3px;\n    margin-bottom: 36px;\n    box-sizing: border-box;\n    border: 1px solid #7a7a7a;\n  }\n  textarea {\n    resize: none;\n    height: 150px;\n  }\n  ",";\n"]);return Wn=function(){return n},n}function nt(){var n=Object(f.a)(["\n  padding: 80px 40px;\n"]);return nt=function(){return n},n}function tt(){var n=Object(f.a)(["\n  margin: auto;\n  max-width: 683px;\n  justify-content: center;\n  span,\n  h3 {\n    display: block;\n    text-align: center;\n  }\n  h3 {\n    margin: 10px 0;\n  }\n"]);return tt=function(){return n},n}var et=b.c.div(tt()),rt=y.phone(nt()),ct=b.c.form(Wn(),v,rt),it=b.c.div(Qn()),at=b.c.button($n()),ot=b.c.section(Vn(),"https://templatekit.hellokuro.com/kunikaa/wp-content/uploads/2020/10/bg-header-3-wedding-couple-at-destination-wedding-ceremony-BKX4KXJ.jpg"),ut=e(26),st=e.n(ut),ft=function(n,t){st.a.post("https://sheet.best/api/sheets/39588945-8961-4981-865a-984a9e025910",n),t.reset()},bt=function(n){return function(n){return n&&/^.+@.+\..+$/.test(n)}(n)?void 0:"\u041d\u0435 \u0432\u0456\u0440\u043d\u0430 \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430 \u0430\u0434\u0440\u0435\u0441\u0430"},jt=function(n){return n?void 0:"o\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0435 \u043f\u043e\u043b\u0435"},lt=function(n){var t=n.name,e=n.validate,c=n.placeholder,i=n.fieldType,a=void 0===i?"input":i;return Object(r.jsx)(Gn.a,Object(u.a)(Object(u.a)({},{name:t,validate:e}),{},{children:function(n){var t=n.input,e=n.meta;return Object(r.jsxs)(it,{children:["input"===a?Object(r.jsx)("input",Object(u.a)(Object(u.a)({},Object(u.a)(Object(u.a)({},t),{},{placeholder:c})),{},{type:"text"})):Object(r.jsx)("textarea",Object(u.a)({},Object(u.a)(Object(u.a)({},t),{},{placeholder:c}))),e.error&&e.touched&&Object(r.jsx)("span",{children:e.error})]})}}))},dt=function(){return Object(r.jsx)(ot,{children:Object(r.jsxs)(et,{children:[Object(r.jsx)(h,{children:"\u0417 \u0432\u0435\u043b\u0438\u043a\u0438\u043c \u0437\u0430\u0434\u043e\u0432\u043e\u043b\u0435\u043d\u043d\u044f\u043c \u0437\u0430\u043f\u0440\u043e\u0448\u0443\u0454\u043c\u043e \u0412\u0430\u0441 \u043f\u0440\u043e\u0432\u0435\u0441\u0442\u0438 \u0446\u0435\u0439 \u043d\u0435\u0437\u0430\u0431\u0443\u0442\u043d\u0456\u0439 \u0443 \u043d\u0430\u0448\u043e\u043c\u0443 \u0436\u0438\u0442\u0442\u0456 \u0434\u0435\u043d\u044c \u0440\u0430\u0437\u043e\u043c \u0437 \u043d\u0430\u043c\u0438!"}),Object(r.jsx)(Gn.b,{onSubmit:ft,children:function(n){var t=n.handleSubmit;return Object(r.jsxs)(ct,{onSubmit:t,children:[Object(r.jsx)(lt,{name:"name",placeholder:"\u0412\u0430\u0448\u0435 \u0456\u043c'\u044f",validate:jt}),Object(r.jsx)(lt,{name:"email",placeholder:"\u0415\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430 \u0441\u043a\u0440\u0438\u043d\u044c\u043a\u0430",validate:bt}),Object(r.jsx)(lt,{name:"wish",fieldType:"textarea",placeholder:"\u041f\u043e\u0431\u0430\u0436\u0430\u043d\u043d\u044f...",validate:jt}),Object(r.jsx)(at,{type:"submit",children:"\u0412\u0456\u0434\u043f\u0440\u0430\u0432\u0438\u0442\u0438"})]})}})]})})};function pt(){var n=Object(f.a)(["\n  padding: 100px 0;\n  background: #f3f1fa;\n"]);return pt=function(){return n},n}function xt(){var n=Object(f.a)(["\n  width: 100%;\n  margin: 0 auto;\n  max-width: 1100px;\n"]);return xt=function(){return n},n}var Ot=b.c.div(xt()),ht=b.c.section(pt()),mt=function(){var n=Object(c.useRef)(null);return Object(r.jsx)(ht,{children:Object(r.jsx)(Ot,Object(u.a)(Object(u.a)({},{ref:n}),{},{children:Object(r.jsx)("div",Object(u.a)(Object(u.a)({},{ref:n}),{},{className:"wave_embed","data-id":"6071e15946e0fb000127ae77"}))}))})};function vt(){var n=Object(f.a)(["\n  body {\n    margin: 0;\n    background: #EBE9F4;\n    font-family: \"Roboto\", sans-serif;\n  }\n  p, h1, h2, h3 {\n    margin: 0;\n  }\n  @font-face {\n  font-family: 'Alex Brush';\n  font-style: normal;\n  font-weight: 400;\n  src: url('https://fonts.gstatic.com/s/alexbrush/v12/SZc83FzrJKuqFbwMKk6EhUvz7RlNiCY0GA.woff2') format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n@font-face {\n  font-family: 'Alex Brush';\n  font-style: normal;\n  font-weight: 400;\n  src: url('https://fonts.gstatic.com/s/alexbrush/v12/SZc83FzrJKuqFbwMKk6EhUXz7RlNiCY.woff2') format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n"]);return vt=function(){return n},n}var gt=Object(b.a)(vt()),wt=function(){return Object(r.jsxs)("main",{children:[Object(r.jsx)(gt,{}),Object(r.jsx)(nn,{}),Object(r.jsx)(yn,{}),Object(r.jsx)(mt,{}),Object(r.jsx)(Zn,{}),Object(r.jsx)(dt,{}),Object(r.jsx)(In,{})]})};o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(wt,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.2b956d4d.chunk.js.map