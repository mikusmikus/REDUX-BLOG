(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{13:function(e,t,c){e.exports={header:"header_header__1E5L_",blog:"header_blog__1Oq_v",LinkWraper:"header_LinkWraper__17HV9",navLink:"header_navLink__2Fe5R",user:"header_user__1dTLR",paragraph:"header_paragraph__3G_h3",active:"header_active__2ewzd"}},17:function(e,t,c){e.exports={heading1:"typography_heading1__3xoqY",heading2:"typography_heading2__1w5tJ",heading3:"typography_heading3__2TR-O",heading5:"typography_heading5__ftbTJ",Paragraph1:"typography_Paragraph1__1glaI",Paragraph2:"typography_Paragraph2__3hs35"}},31:function(e,t,c){e.exports={imageWrapper:"image_imageWrapper__2iVIx",image:"image_image__2hpXR"}},32:function(e,t,c){e.exports={smallPosts:"smallPosts_smallPosts__w6ZOq",smallPostCard:"smallPosts_smallPostCard__3cm_b"}},33:function(e,t,c){e.exports={comments:"comments_comments__vhopa",commentCard:"comments_commentCard__Jd_3V"}},48:function(e,t,c){e.exports={mainBody:"mainBody_mainBody__1rC7k"}},49:function(e,t,c){e.exports={form:"form_form__3KtoT"}},50:function(e,t,c){e.exports={label:"label_label__3f6H-"}},51:function(e,t,c){e.exports={input:"input_input__2u2bz"}},52:function(e,t,c){e.exports={button:"button_button__3RoOj"}},54:function(e,t,c){e.exports={postCard:"postCard_postCard__1nzbQ"}},55:function(e,t,c){e.exports={post:"post_post__8TseF"}},56:function(e,t,c){e.exports={textarea:"textarea_textarea__2GCbz"}},90:function(e,t,c){},91:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(1),a=c(23),r=c.n(a),o=c(4),i=c(19),l=c(47),d="SAVE_USER_INFO",j="LOG_OUT_USER",u={},h=c(57),b=c(9),m="ADD_POSTS",x="ADD_COMMENTS",O="ADD_NEW_COMMENT",p="DELETE_POST",v="DELETE_COMMENT",f="ADD_POST",g="EDIT_POST",N=[],y="INPUT_POST_SEARCH",_="LOADING",w=Object(i.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return t.user;case j:return{};default:return e}},blogPosts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return 0===e.length?t.posts:e;case x:var c=Object(h.a)(e),s=c.findIndex((function(e){return e.postId===t.comments[0].postId}));return c[s].comments=t.comments,c;case O:var n=Object(b.cloneDeep)(e),a=n.findIndex((function(e){return e.postId===t.comment.postId}));return n[a].comments.push(t.comment),n;case p:var r=Object(b.cloneDeep)(e),o=r.findIndex((function(e){return e.postId===t.postId}));return r.splice(o,1),r;case v:var i=Object(b.cloneDeep)(e),l=i.findIndex((function(e){return e.postId===t.postId})),d=i[l].comments.findIndex((function(e){return e.commentId===t.commentId}));return i[l].comments.splice(d,1),i;case g:var j=Object(b.cloneDeep)(e),u=j.findIndex((function(e){return e.postId===t.post.postId}));return j.splice(u,1,t.post),j;case f:var y=Object(b.cloneDeep)(e);return y.push(t.post),y;default:return e}},seachPost:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return t.value;default:return e}},loading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return t.isLoading;default:return e}}}),C=Object(i.d)(w,Object(i.a)(l.a)),I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,93)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),a(e),r(e)}))},P=c(7),S=c(5),E=c(15),H=c(16),T=function(e){return{type:d,user:e}},k=c(13),F=c.n(k),D=c(17),L=c.n(D),q=function(e){var t=e.children,c=e.propsClass;return Object(s.jsx)("h1",{className:"".concat(L.a.heading1," ").concat(c),children:t})},z=function(e){var t=e.children,c=e.propsClass;return Object(s.jsx)("h2",{className:"".concat(L.a.heading2," ").concat(c),children:t})},M=function(e){var t=e.children,c=e.propsClass;return Object(s.jsx)("h3",{className:"".concat(L.a.heading3," ").concat(c),children:t})},R=function(e){var t=e.children,c=e.propsClass;return Object(s.jsx)("h5",{className:"".concat(L.a.heading5," ").concat(c),children:t})},B=function(e){var t=e.children,c=e.propsClass;return Object(s.jsx)("p",{className:"".concat(L.a.Paragraph1," ").concat(c),children:t})},A=function(e){var t=e.children,c=e.propsClass;return Object(s.jsx)("p",{className:"".concat(L.a.Paragraph2," ").concat(c),children:t})},V=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.user}));return Object(s.jsx)("header",{children:Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-xs-10 col-xs-offset-1",children:Object(s.jsx)("div",{className:F.a.header,children:Object(s.jsxs)("div",{className:"row center-xs",children:[Object(s.jsx)("div",{className:"col-md-2 col-xs-4",children:Object(s.jsx)(E.a,{icon:H.a,size:"6x"})}),Object(s.jsx)("div",{className:"col-md-3 col-xs-4",children:Object(s.jsx)("div",{className:F.a.blog,children:Object(s.jsx)(P.b,{className:F.a.navLink,exact:!0,activeClassName:F.a.active,to:"/",children:"blog"})})}),Object(s.jsx)("div",{className:"col-md-5 col-xs-12 last-xs",children:Object(s.jsx)("div",{className:F.a.user,children:t.username?Object(s.jsxs)(R,{children:["Hello, ",Object(b.capitalize)(t.username),"!"," ","user"===t.status?Object(s.jsx)(E.a,{icon:H.c}):Object(s.jsx)(E.a,{icon:H.e})," "]}):Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(R,{children:["Hello, Guest! ",Object(s.jsx)(E.a,{icon:H.f})]})})})}),Object(s.jsx)("div",{className:"col-md-2 col-xs-4 last-md",children:Object(s.jsx)("div",{className:F.a.LinkWraper,children:t.username?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(P.b,{className:F.a.navLink,exact:!0,activeClassName:F.a.active,to:"/login",onClick:function(){return e({type:j})},children:"logout"}),Object(s.jsxs)(A,{propsClass:"padding--0",children:[t.status," ","user"===t.status?Object(s.jsx)(E.a,{icon:H.c}):Object(s.jsx)(E.a,{icon:H.e})]})]}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(P.b,{className:F.a.navLink,exact:!0,activeClassName:F.a.active,to:"/login",children:"login"}),Object(s.jsx)(P.b,{className:F.a.navLink,exact:!0,activeClassName:F.a.active,to:"/register",children:"register"})]})})})]})})})})})})},J=c(6),U=c(48),G=c.n(U),W=function(e){var t=e.propsClass,c=e.children;return Object(s.jsx)("div",{className:"".concat(G.a.mainBody," ").concat(t),children:c})},Y=c(49),K=c.n(Y),Q=function(e){var t=e.handleSubmit,c=e.children,n=e.propsClass;return Object(s.jsx)("form",{action:"",onSubmit:t,className:"".concat(K.a.form," ").concat(n),children:c})},X=c(50),Z=c.n(X),$=function(e){var t=e.children,c=e.htmlFor,n=e.propsClass;return Object(s.jsx)("label",{htmlFor:c,className:"".concat(Z.a.label," ").concat(n),children:t})},ee=c(51),te=c.n(ee),ce=function(e){var t=e.value,c=e.onChangeHandler,a=e.placeholder,r=void 0===a?"placeholder here...":a,o=e.id,i=e.required,l=void 0!==i&&i,d=e.propsClass,j=e.list,u=e.type,h=void 0===u?"text":u,b=e.focus,m=void 0!==b&&b,x=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e;m&&(null===(e=x.current)||void 0===e||e.focus())}),[]),Object(s.jsx)("input",{className:"".concat(te.a.input," ").concat(d),list:j,type:h,onChange:function(e){return c(e.target.value)},placeholder:r,value:t,id:o,required:l,ref:x})},se=c(52),ne=c.n(se),ae=function(e){var t=e.children,c=void 0===t?"button":t,n=e.type,a=void 0===n?"button":n,r=e.handleClick,o=e.propsClass,i=e.size,l=void 0===i?"medium":i,d=e.color,j=void 0===d?"primary":d;return Object(s.jsx)("button",{className:"".concat(ne.a.button," ").concat(o),type:a,style:{padding:"small"===l?"4px 8px":"large"===l?"12px 32px":"6px 16px",backgroundColor:"success"===j?"#fca311":"warning"===j?"#cc6b6b":"#e5e5e5",fontSize:"small"===l?"16px":"large"===l?"32px":"24px"},onClick:r,children:c})},re=function(){var e=Object(n.useState)(""),t=Object(J.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),i=Object(J.a)(r,2),l=i[0],d=i[1],j=Object(o.b)(),u=Object(S.g)();return Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-xs-10 col-xs-offset-1",children:Object(s.jsxs)(W,{children:[Object(s.jsx)(q,{children:"This is LOGIN Page"}),Object(s.jsx)("div",{className:"row center-xs",children:Object(s.jsx)("div",{className:"col-xs-8",children:Object(s.jsxs)(Q,{handleSubmit:function(e){return function(e,t,c){var s=JSON.parse(localStorage.usersBlog||"[]");if(0!==s.length){e.preventDefault();var n=s.find((function(e){return e.username===t&&e.password===c}));n?(j(T(n)),a(""),d(""),u.push("./")):alert("wrong username or password")}else alert("wrong username or password")}(e,c,l)},children:[Object(s.jsx)(E.a,{icon:H.d,size:"3x",spin:!0}),Object(s.jsx)("div",{className:"row center-xs",children:Object(s.jsxs)("div",{className:"col-sm-8 col-xs-12",children:[Object(s.jsx)($,{htmlFor:"username",children:"Username"}),Object(s.jsx)(ce,{placeholder:"Enter username",value:c,onChangeHandler:function(e){return a(e)},id:"username",required:!0,focus:!0}),Object(s.jsx)($,{htmlFor:"password",children:"password"}),Object(s.jsx)(ce,{placeholder:"Enter Password",value:l,onChangeHandler:function(e){return d(e)},id:"password",required:!0,type:"password",propsClass:"margin-bottom--32"}),Object(s.jsx)(ae,{type:"submit",size:"large",color:"success",children:"Login"})]})})]})})})]})})})})},oe=c(30),ie=c.n(oe),le=["Mikus","Gatis","J\u0101nis","M\u0101rti\u0146\u0161","Vit\u0101lijs","Estere","Aina","Ieva"],de=function(e,t){for(var c=e,s=0;s<t;s++)c+=e,c+=" ";return c},je=["life","cars","nature","health","sport","music","house","summer"],ue=function(e){return{type:_,isLoading:e}},he=function(e){return{type:p,postId:e}},be=function(){return function(e){e(ue(!0)),ie.a.get("https://jsonplaceholder.typicode.com/posts").then((function(t){var c=t.data.map((function(e){return{postId:"".concat(e.id),title:e.title,body:de(e.body,6),author:le[Object(b.random)(le.length-1)],image:"https://picsum.photos/id/".concat(e.id+5,"/500/500"),updated:Date.now()-Object(b.random)(1e4),category:Object(b.sampleSize)(je,2),comments:[]}}));ie.a.get("https://jsonplaceholder.typicode.com/comments").then((function(t){var s=t.data.map((function(e){return{commentId:"".concat(e.id),postId:"".concat(e.postId),email:e.email,body:e.body}}));c.forEach((function(e){s.forEach((function(t){e.postId===t.postId&&e.comments.push(t)}))})),e(function(e){return{type:m,posts:e}}(c)),e(ue(!1))}))}))}},me=function(e){return{type:y,value:e}},xe=c(53),Oe=c.n(xe),pe=function(e){return Oe.a.unix(e/1e3).format("MMMM Do, h:mm:ss a")},ve=c(54),fe=c.n(ve),ge=c(31),Ne=c.n(ge),ye=function(e){var t=e.src,c=e.alt,n=e.propsClass;return Object(s.jsx)("div",{className:"".concat(Ne.a.imageWrapper," ").concat(n),children:Object(s.jsx)("img",{src:t,alt:c,className:Ne.a.image})})},_e=function(e){var t=e.post,c=e.chosenCategory,n=e.user,a=e.searchValue,r=e.deletePostHandler,o=e.handleReadMore,i=t.title,l=t.body,d=t.image,j=t.category,u=t.author,h=t.updated,b=t.comments;return Object(s.jsxs)("div",{className:fe.a.postCard,children:[Object(s.jsx)("div",{className:"row end-xs",children:Object(s.jsx)("div",{className:"col-xs-12",children:"admin"===n.status&&Object(s.jsx)(ae,{handleClick:r,color:"warning",size:"small",children:"Delete Post"})})}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-xs-12",children:a?Object(s.jsx)("h3",{className:"heading3",dangerouslySetInnerHTML:function(){var e=i.split(a),t="";return e.forEach((function(e){t+="<span>".concat(e,"</span><span class='apricot'>").concat(a,"</span>")})),{__html:t.slice(0,t.length-30-a.length)}}()}):Object(s.jsx)(M,{children:i})})}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-xs-3",children:Object(s.jsx)(ye,{src:d,alt:i})}),Object(s.jsxs)("div",{className:"col-xs-9",children:[Object(s.jsxs)(B,{propsClass:"margin-bottom--16",children:[l.substring(0,200),"... ",Object(s.jsx)(ae,{type:"button",handleClick:o,propsClass:"ReadMore",children:"Read more..."})]}),Object(s.jsxs)(A,{children:["category:"," ",j.map((function(e){return Object(s.jsxs)("em",{className:"".concat(c===e&&"apricot"),children:["#",e," "]},e)}))]}),Object(s.jsxs)(A,{children:["Author : ",Object(s.jsx)("em",{children:u}),",  ","Updated :"," ",Object(s.jsxs)("em",{children:[pe(h),",  "]}),"Comments :"," ",Object(s.jsxs)("em",{children:[b.length,"  "]})]})]})]})]})},we=["all"],Ce=function(){var e=Object(n.useState)("all"),t=Object(J.a)(e,2),c=t[0],a=t[1],r=Object(o.b)(),i=Object(S.g)(),l=Object(o.c)((function(e){return{posts:e.blogPosts,searchValue:e.seachPost,loading:e.loading,user:e.user}})),d=l.posts,j=l.searchValue,u=l.loading,h=l.user;d.forEach((function(e){return e.category.forEach((function(e){we.includes(e)||we.push(e)}))}));var b=d.filter((function(e){return e.title.toLowerCase().includes(j.toLowerCase())})),m=function(e){return e===c?"success":"primary"};return u?Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-xs-10 col-xs-offset-1",children:Object(s.jsx)(W,{children:Object(s.jsx)(q,{children:"loading..."})})})})}):Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-xs-10 col-xs-offset-1",children:Object(s.jsxs)(W,{children:[Object(s.jsx)(q,{children:"This is Blog Page"}),Object(s.jsx)("div",{className:"row end-xs",children:Object(s.jsx)("div",{className:"col-xs-12 margin-right--16",children:h.username&&Object(s.jsx)(ae,{type:"button",handleClick:function(){return i.push("/newpost")},size:"large",color:"success",children:"New Post"})})}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-sm-4 col-xs-8 margin-left--16",children:Object(s.jsx)(ce,{type:"search",placeholder:"Find post by title here...",value:j,onChangeHandler:function(e){e.length>1&&a("all"),r(me(e))}})})}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-xs-12 margin-left--16",children:we.map((function(e){return Object(s.jsx)(ae,{type:"button",color:m(e),handleClick:function(){a(e),r(me(""))},children:Object(s.jsxs)("em",{children:["#",e]})},e)}))})}),Object(s.jsx)(s.Fragment,{children:b.length?b.sort((function(e,t){return t.updated-e.updated})).map((function(e){return t=e.category,("all"===(n=c)||t.some((function(e){return e===n})))&&Object(s.jsx)(_e,{user:h,chosenCategory:c,searchValue:j,post:e,deletePostHandler:function(){return t=e.postId,void(window.confirm("Are you sure want to delete post?")&&r(he(t)));var t},handleReadMore:function(){return t=e.postId,void i.push("/blog/".concat(t));var t}},e.postId);var t,n})):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(M,{children:"Can not find any posts..."}),Object(s.jsx)(ye,{src:"https://aubankaitis.files.wordpress.com/2014/04/search_600.jpg",alt:".."})]})})]})})})})},Ie=c(92),Pe=function(){var e=Object(n.useState)(""),t=Object(J.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),i=Object(J.a)(r,2),l=i[0],d=i[1],j=Object(n.useState)(""),u=Object(J.a)(j,2),h=u[0],b=u[1],m=Object(n.useState)(""),x=Object(J.a)(m,2),O=x[0],p=x[1],v=Object(o.b)(),f=Object(S.g)();return Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-xs-10 col-xs-offset-1",children:Object(s.jsxs)(W,{children:[Object(s.jsx)(q,{children:"This is Register Page"}),Object(s.jsx)("div",{className:"row center-xs",children:Object(s.jsx)("div",{className:"col-xs-8",children:Object(s.jsxs)(Q,{handleSubmit:function(e){e.preventDefault();var t=JSON.parse(localStorage.usersBlog||"[]");if(t.some((function(e){return e.username===l})))alert("username already exists, try other!");else if(h===O){var s={id:Object(Ie.a)(),username:l,email:c,password:h};t.push(s),localStorage.usersBlog=JSON.stringify(t),v(T(s)),f.push("./")}else alert("passwords do not match")},children:[Object(s.jsx)(E.a,{icon:H.b,size:"3x",spin:!0}),Object(s.jsx)("div",{className:"row center-xs",children:Object(s.jsxs)("div",{className:"col-sm-8 col-xs-12",children:[Object(s.jsx)($,{htmlFor:"email",children:"Email"}),Object(s.jsx)(ce,{placeholder:"Enter email",type:"email",value:c,onChangeHandler:function(e){return a(e)},id:"email",required:!0,focus:!0}),Object(s.jsx)($,{htmlFor:"username",children:"Username"}),Object(s.jsx)(ce,{placeholder:"Enter username",value:l,onChangeHandler:function(e){return d(e)},id:"username",required:!0}),Object(s.jsx)($,{htmlFor:"password",children:"Password"}),Object(s.jsx)(ce,{placeholder:"Enter password",type:"password",value:h,onChangeHandler:function(e){return b(e)},id:"password",required:!0}),Object(s.jsx)($,{propsClass:"commentLabel",htmlFor:"password2",children:"Password"}),Object(s.jsx)(ce,{placeholder:"Enter password again",type:"password",value:O,onChangeHandler:function(e){return p(e)},id:"password2",required:!0,propsClass:"margin-bottom--32"}),Object(s.jsx)(ae,{type:"submit",size:"large",color:"success",children:"Register"})]})})]})})})]})})})})},Se=c(55),Ee=c.n(Se),He=function(e){var t=e.post,c=e.user,n=e.handlePostEdit,a=e.handleToHomePage,r=e.deletePostHandler,o=t.title,i=t.image,l=t.category,d=t.body,j=t.author,u=t.updated;return Object(s.jsx)("div",{className:Ee.a.post,children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-xs-12",children:Object(s.jsx)(ae,{handleClick:a,color:"success",children:"Back to Blogs"})}),Object(s.jsx)("div",{className:"col-xs-12",children:Object(s.jsx)(z,{children:o})}),Object(s.jsx)("div",{className:"col-xs-6",children:Object(s.jsx)(ye,{src:i,alt:o})}),Object(s.jsxs)("div",{className:"col-xs-6",children:[Object(s.jsxs)("div",{className:"row end-xs",children:[Object(s.jsx)("div",{className:"col-xs-12",children:"admin"===c.status&&Object(s.jsx)(ae,{handleClick:n,color:"success",children:"Edit post"})}),Object(s.jsx)("div",{className:"col-xs-12",children:"admin"===c.status&&Object(s.jsx)(ae,{handleClick:r,size:"small",color:"warning",children:"Delete post"})})]}),Object(s.jsxs)(A,{children:["Author :"," ",Object(s.jsxs)("em",{children:[j,"  "]})]}),Object(s.jsxs)(A,{children:["category:"," ",l.map((function(e){return Object(s.jsxs)("em",{children:["#",e," "]},e)}))]}),Object(s.jsxs)(A,{children:["Updated :"," ",Object(s.jsxs)("em",{children:[pe(u),",  "]})]})]}),Object(s.jsx)("div",{className:"col-xs-12",children:Object(s.jsx)(B,{children:d})})]})})},Te=c(32),ke=c.n(Te),Fe=function(e){var t=e.post,c=e.id,a=Object(n.useState)([]),r=Object(J.a)(a,2),i=r[0],l=r[1],d=Object(S.g)(),j=Object(o.c)((function(e){return e.blogPosts.filter((function(e){return e.category.some((function(e){return e===(null===t||void 0===t?void 0:t.category[0])||e===(null===t||void 0===t?void 0:t.category[1])}))}))}));return Object(n.useEffect)((function(){l(Object(b.sampleSize)(j,3))}),[c]),Object(s.jsxs)("div",{className:ke.a.smallPosts,children:[Object(s.jsx)(z,{children:"Similar category posts"}),Object(s.jsx)("div",{className:"row center-xs",children:1===i.length?Object(s.jsx)(M,{children:"No similar posts..."}):Object(s.jsx)(s.Fragment,{children:i.map((function(e){var t=e.postId,c=e.image,n=e.title,a=e.author,r=e.category;return Object(s.jsx)("div",{className:"col-xs-4",children:Object(s.jsxs)("div",{className:ke.a.smallPostCard,children:[Object(s.jsx)(ye,{src:c,alt:n}),Object(s.jsx)(R,{children:n.substring(0,50)}),Object(s.jsxs)(A,{children:["category:"," ",r.map((function(e){return Object(s.jsxs)("em",{children:[e," "]},e)}))]}),Object(s.jsxs)(A,{children:["author:",Object(s.jsxs)("em",{children:[" ",a]})]}),Object(s.jsx)(ae,{type:"button",handleClick:function(){return d.push("/blog/".concat(t))},children:"Read more..."})]},t)},t)}))})})]})},De=c(33),Le=c.n(De),qe=c(56),ze=c.n(qe),Me=function(e){var t=e.children,c=e.propsClass,n=e.id,a=e.required,r=e.rows,o=void 0===r?10:r,i=e.value,l=e.placeholder,d=void 0===l?"Enter text here":l,j=e.onChangeHandler;return Object(s.jsx)("textarea",{className:"".concat(ze.a.textarea," ").concat(c),placeholder:d,rows:o,value:i,id:n,required:a,onChange:function(e){return j(e.target.value)},children:t})},Re=function(e){var t=e.post,c=e.user,n=e.deleteCommentHandler,a=e.inputCommentValue,r=e.commentHandler,o=e.commentValueHandler,i=t.comments;return Object(s.jsxs)("div",{className:Le.a.comments,children:[Object(s.jsx)(z,{children:"Comments"}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-xs-12",children:i.map((function(e){var t=e.commentId,a=e.email,r=e.body;return Object(s.jsxs)("div",{className:Le.a.commentCard,children:[Object(s.jsxs)("div",{className:"col-xs-4",children:[Object(s.jsx)(A,{children:a}),"admin"===c.status&&Object(s.jsx)(ae,{handleClick:function(){return n(t)},size:"small",color:"warning",children:"delete"})]}),Object(s.jsx)("div",{className:"col-xs-8",children:Object(s.jsx)(A,{children:r})})]},t)}))})}),Object(s.jsx)("div",{className:"row center-xs",children:c.email?Object(s.jsxs)("div",{className:"col-xs-12",children:[Object(s.jsx)(Me,{required:!0,id:"textarea",placeholder:"Add comment here...",value:a,rows:3,onChangeHandler:o,children:a}),Object(s.jsx)(ae,{handleClick:function(){return r()},children:"Save Comment"})]}):Object(s.jsx)(M,{children:" You need to login to comment..."})})]})},Be=function(){var e=Object(n.useState)(""),t=Object(J.a)(e,2),c=t[0],a=t[1],r=Object(S.h)().postId,i=Object(o.b)(),l=Object(S.g)(),d=Object(o.c)((function(e){return{post:e.blogPosts.find((function(e){return e.postId===r})),loading:e.loading,user:e.user}})),j=d.post,u=d.loading,h=d.user;Object(n.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"smooth"}),j||l.push("/notfound")}),[r]);return u?Object(s.jsx)("div",{className:"row",children:Object(s.jsxs)("div",{className:"col-xs-10 col-xs-offset-1",children:[Object(s.jsx)(q,{children:"loading..."}),";"]})}):Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-xs-10 col-xs-offset-1",children:Object(s.jsxs)(W,{children:[Object(s.jsx)(q,{children:"This is Post Page"}),j&&Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(He,{post:j,user:h,deletePostHandler:function(){window.confirm("Are you sure want to delete post?")&&(i(he(r)),l.push("/"))},handleToHomePage:function(){return l.push("/")},handlePostEdit:function(){return l.push("/editpost/".concat(j.postId))}}),Object(s.jsx)(Fe,{id:r,post:j}),Object(s.jsx)(Re,{post:j,user:h,inputCommentValue:c,deleteCommentHandler:function(e){window.confirm("Are you sure want to delete post?")&&i(function(e,t){return{type:v,commentId:e,postId:t}}(e,r))},commentHandler:function(){if(c){var e={commentId:Object(Ie.a)(),postId:r,email:"comment@email.com",body:c};i({type:O,comment:e}),a("")}else alert("empty comment")},commentValueHandler:function(e){return a(e)}})]})]})})})})},Ae=[{id:"123csxc",username:"mikus",email:"mikus@inbox.lv",password:"redux",status:"admin"},{id:"1234csxc",username:"gatis",email:"gatis@inbox.lv",password:"derux",status:"user"}],Ve=function(e){var t=e.data,c=e.id;return Object(s.jsx)("datalist",{id:c,children:t.map((function(e){return Object(s.jsx)("option",{children:e},e)}))})},Je=[],Ue=function(e){var t=e.SavePostHandler,c=e.handleCancel,a=Object(n.useState)(""),r=Object(J.a)(a,2),i=r[0],l=r[1],d=Object(n.useState)(""),j=Object(J.a)(d,2),u=j[0],h=j[1],b=Object(n.useState)("https://picsum.photos/200/300"),m=Object(J.a)(b,2),x=m[0],O=m[1],p=Object(n.useState)(""),v=Object(J.a)(p,2),f=v[0],g=v[1],N=Object(n.useState)(""),y=Object(J.a)(N,2),_=y[0],w=y[1],C=Object(o.c)((function(e){return e.blogPosts})),I=Object(S.h)().postId;return Object(n.useEffect)((function(){var e=C.find((function(e){return e.postId===I}));e&&(l(null===e||void 0===e?void 0:e.title),h(null===e||void 0===e?void 0:e.body),O(null===e||void 0===e?void 0:e.image),g(null===e||void 0===e?void 0:e.category[0]),w(null===e||void 0===e?void 0:e.category[1]))}),[]),C.forEach((function(e){return e.category.forEach((function(e){Je.includes(e)||Je.push(e)}))})),Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:"row center-xs",children:Object(s.jsx)("div",{className:"col-xs-10",children:Object(s.jsxs)(Q,{handleSubmit:function(e){return t(e,i,u,x,f,_)},children:[Object(s.jsxs)("div",{className:"row center-xs",children:[Object(s.jsxs)("div",{className:"col-xs-11",children:[Object(s.jsx)($,{htmlFor:"title",children:"Title"}),Object(s.jsx)(ce,{type:"text",id:"title",placeholder:"Title",value:i,required:!0,onChangeHandler:function(e){return l(e)},focus:!0})]}),Object(s.jsx)("div",{className:"col-xs-3",children:Object(s.jsx)(ye,{src:x,alt:"add image"})}),Object(s.jsxs)("div",{className:"col-xs-8",children:[Object(s.jsx)($,{htmlFor:"image",children:"Image"}),Object(s.jsx)(ce,{type:"text",id:"image",placeholder:"Image link",value:x,required:!0,onChangeHandler:function(e){return O(e)}}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsxs)("div",{className:"col-xs-6",children:[Object(s.jsx)($,{htmlFor:"category1",children:"First category"}),Object(s.jsx)(ce,{value:f,type:"text",list:"data1",id:"category1",required:!0,onChangeHandler:function(e){return g(e)}}),Object(s.jsx)(Ve,{data:Je,id:"data1"})]}),Object(s.jsxs)("div",{className:"col-xs-6",children:[Object(s.jsx)($,{htmlFor:"category2",children:"Second category"}),Object(s.jsx)(ce,{value:_,type:"text",list:"data2",id:"category2",required:!0,onChangeHandler:function(e){return w(e)}}),Object(s.jsx)(Ve,{data:Je,id:"data2"})]})]})]})]}),Object(s.jsx)("div",{className:"row center-xs",children:Object(s.jsxs)("div",{className:"col-xs-11",children:[Object(s.jsx)($,{htmlFor:"textarea",children:"Body"}),Object(s.jsx)(Me,{required:!0,id:"textarea",placeholder:"My story starts here...",value:u,onChangeHandler:function(e){return h(e)},children:u})]})}),Object(s.jsxs)(ae,{size:"large",color:"success",type:"submit",children:["Save"," "]}),Object(s.jsx)(ae,{size:"large",color:"success",handleClick:c,children:"Cancel"})]})})})})},Ge=function(){var e=Object(o.c)((function(e){return e.user.username})),t=Object(S.g)(),c=Object(o.b)();return Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-xs-10 col-xs-offset-1",children:Object(s.jsxs)(W,{children:[Object(s.jsx)(q,{children:"This Is New Post Page"}),Object(s.jsx)(Ue,{SavePostHandler:function(s,n,a,r,o,i){if(s.preventDefault(),e){var l={postId:Object(Ie.a)(),title:n,body:a,author:e,image:r,updated:Date.now(),category:[o,i],comments:[]};c({type:f,post:l}),t.push("/")}},handleCancel:function(){t.push("/")}})]})})})})},We=function(){var e=Object(S.g)(),t=Object(o.b)(),c=Object(S.h)().postId,n=Object(o.c)((function(e){return{post:e.blogPosts.find((function(e){return e.postId===c})),loggedUser:e.user.username}})),a=n.post,r=n.loggedUser;return Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-xs-10 col-xs-offset-1",children:Object(s.jsxs)(W,{children:[Object(s.jsx)(q,{children:"This EDIT Post Page"}),Object(s.jsx)(Ue,{SavePostHandler:function(s,n,o,i,l,d){if(s.preventDefault(),r&&a){var j={postId:a.postId,title:n,body:o,author:r,image:i,updated:Date.now(),category:[l,d],comments:a.comments};t(function(e){return{type:g,post:e}}(j)),e.push("/blog/".concat(c))}},handleCancel:function(){e.push("/blog/".concat(c))}})]})})})})},Ye=function(){return Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-xs-10 col-xs-offset-1",children:Object(s.jsxs)(W,{children:[Object(s.jsx)(q,{children:"This is Not Found Page"}),Object(s.jsx)(ye,{src:"https://previews.123rf.com/images/abirvalg/abirvalg1301/abirvalg130100004/17628381-404-error-illustration-yellow-quot-wet-floor-quot-style-sign.jpg"})]})})})})},Ke=function(){var e=Object(o.b)();return Object(n.useEffect)((function(){0===JSON.parse(localStorage.usersBlog||"[]").length&&(localStorage.usersBlog=JSON.stringify(Ae)),e(be())}),[]),Object(s.jsxs)(P.a,{children:[Object(s.jsx)(V,{}),Object(s.jsxs)(S.d,{children:[Object(s.jsx)(S.b,{exact:!0,path:"/login",children:Object(s.jsx)(re,{})}),Object(s.jsx)(S.b,{exact:!0,path:"/register",children:Object(s.jsx)(Pe,{})}),Object(s.jsx)(S.b,{exact:!0,path:"/newpost",children:Object(s.jsx)(Ge,{})}),Object(s.jsx)(S.b,{exact:!0,path:"/editpost/:postId",children:Object(s.jsx)(We,{})}),Object(s.jsx)(S.b,{exact:!0,path:"/blog/:postId",children:Object(s.jsx)(Be,{})}),Object(s.jsx)(S.b,{exact:!0,path:"/notfound",children:Object(s.jsx)(Ye,{})}),Object(s.jsx)(S.b,{exact:!0,path:"/",children:Object(s.jsx)(Ce,{})}),Object(s.jsx)(S.a,{to:"/notfound"})]})]})};c(90);r.a.render(Object(s.jsx)(o.a,{store:C,children:Object(s.jsx)(Ke,{})}),document.getElementById("root")),I()}},[[91,1,2]]]);
//# sourceMappingURL=main.fb37f222.chunk.js.map