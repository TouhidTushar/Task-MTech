(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{60:function(A,e,t){},61:function(A,e,t){},63:function(A,e,t){},66:function(A,e,t){},67:function(A,e,t){},68:function(A,e,t){"use strict";t.r(e);var c=t(0),a=t.n(c),r=t(18),n=t.n(r),s=t(9),o=t(11),i=t.n(o),l=t(14),u=t(32),g=t.n(u).a.create({baseURL:"https://mtech-task.herokuapp.com/api"}),d="GETCATEGORY_REQUEST",v="GETCATEGORY_SUCCESS",f="GETCATEGORY_FAILURE",b="GETPRODUCT_REQUEST",C="GETPRODUCT_SUCCESS",B="GETPRODUCT_FAILURE",j="ADDTOCART_SUCCESS",O=(t(60),t(12)),Q=t(3),p=t(4),P=t(15),h=(t(61),t(1));var y=function(A){var e=A.data,t=Object(s.b)(),a=Object(s.c)((function(A){return A.cart.cartItems})),r=Object(c.useState)(!1),n=Object(P.a)(r,2),o=n[0],u=n[1],g=Object(c.useState)(1),d=Object(P.a)(g,2),v=d[0],f=d[1],b=function(){var A=e.offer/100;return(e.price-e.price*A).toFixed(2)},C=function(){var A,c,r=Object(p.a)(Object(p.a)({},e),{},{price:b(),orderQuantity:v});console.log(r),t((A=a,c=r,function(){var e=Object(l.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(a=A).push(c),t({type:j,payload:{currentCartItems:a}}),localStorage.setItem("Cart",JSON.stringify(a));case 4:case"end":return e.stop()}}),e)})));return function(A){return e.apply(this,arguments)}}()))};return Object(h.jsxs)("div",{className:"cardWrapper",children:[Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("div",{className:o?"imgBoxActive":"imgBox",children:Object(h.jsx)("img",{src:e.imageRef,alt:e.title+" photo"})}),Object(h.jsxs)("div",{className:"detailsBox",children:[Object(h.jsx)("p",{children:e.title}),0!==e.offer?Object(h.jsxs)("p",{children:["$",b()," ",Object(h.jsxs)("i",{className:"oldPrice",children:["$",e.price]})]}):Object(h.jsxs)("p",{children:["$",e.price]}),o?Object(h.jsxs)("div",{className:"productQuantityControl",children:[Object(h.jsx)("i",{className:"fas fa-minus",onClick:function(){v>1&&f(v-1)},style:1===v?{cursor:"not-allowed",opacity:.5}:null}),Object(h.jsx)("span",{children:v}),Object(h.jsx)("i",{className:"fas fa-plus",onClick:function(){v<e.quantity&&f(v+1)},style:v===e.quantity?{cursor:"not-allowed",opacity:.5}:null}),Object(h.jsx)("button",{onClick:function(){u(!1),f(1)},children:"Cancel"})]}):null]})]}),0===e.quantity?Object(h.jsx)("button",{className:"dummyBtn",children:"Out of stock"}):o?Object(h.jsxs)("button",{className:"addToCartBtn",onClick:function(){u(!1),C()},children:[Object(h.jsx)("i",{className:"fas fa-shopping-cart"})," Add to cart"]}):Object(h.jsx)("button",{className:"addToCartBtn",onClick:function(){return u(!0)},children:"Buy Now"})]})},E=(t(63),function(A){var e=Object(c.useState)(!1),t=Object(P.a)(e,2),a=t[0],r=t[1],n=Object(c.useState)(!1),o=Object(P.a)(n,2),i=o[0],l=o[1],u=Object(s.c)((function(A){return A.cart.cartItems}));window.addEventListener("scroll",(function(){window.scrollY>.1*window.innerHeight?r(!0):r(!1)}));return Object(h.jsxs)("header",{className:a?"headerWrapperAct":"headerWrapper",children:[Object(h.jsx)(O.b,{to:"/",className:"logo",children:Object(h.jsx)("img",{src:"data:image/png;base64,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",alt:"placeholder-logo"})}),Object(h.jsxs)("button",{className:"cartBtn",onClick:function(){l(!0),document.body.style.overflow="hidden"},children:[Object(h.jsx)("img",{src:"data:image/png;base64,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",alt:"cart-icon"}),Object(h.jsx)("span",{children:u.length>0?u.length:null})]}),Object(h.jsx)("div",{className:i?"cartModalActive":"cartModal",children:Object(h.jsxs)("div",{className:"cartContainer",children:[Object(h.jsx)("button",{onClick:function(){l(!1),document.body.style.overflow="unset"},children:"Close"}),Object(h.jsx)("h1",{children:"Cart"})]})})]})}),w=(t(66),function(A){return Object(h.jsxs)("div",{className:"mainContainer",children:[Object(h.jsx)(E,{}),A.children]})});t(67);var I=function(){var A=Object(s.c)((function(A){return A.product.allProducts})),e=Object(s.c)((function(A){return A.product.allCategories}));return Object(h.jsx)(w,{children:Object(h.jsxs)("div",{className:"productPageWrapper",children:[Object(h.jsxs)("p",{className:"directory",children:["products ",">"," new arrivals"]}),Object(h.jsx)("h1",{children:"new arrivals"}),Object(h.jsxs)("div",{className:"productControls",children:[Object(h.jsx)("div",{className:"filters",children:e.map((function(A,e){return Object(h.jsx)("button",{children:A.category},e)}))}),Object(h.jsxs)("div",{className:"viewControls",children:[Object(h.jsx)("button",{children:Object(h.jsx)("i",{className:"fas fa-th"})}),Object(h.jsx)("button",{children:Object(h.jsx)("i",{className:"fas fa-list-ul"})})]})]}),Object(h.jsx)("div",{className:"productShowcase",children:A.map((function(A,e){return Object(h.jsx)(y,{data:A},e)}))})]})})};var m=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(O.b,{to:"products",children:"Explore"})})};var x=function(){var A=Object(s.b)();return Object(c.useEffect)((function(){A(function(){var A=Object(l.a)(i.a.mark((function A(e){var t,c;return i.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,e({type:b}),A.next=4,g.get("/product/getProducts");case 4:200===(t=A.sent).status&&(c=t.data.result,e({type:C,payload:{products:c}})),A.next=11;break;case 8:A.prev=8,A.t0=A.catch(0),e({type:B,payload:{message:"Failed to retrieve data from server!"}});case 11:case"end":return A.stop()}}),A,null,[[0,8]])})));return function(e){return A.apply(this,arguments)}}()),A(function(){var A=Object(l.a)(i.a.mark((function A(e){var t,c;return i.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,e({type:d}),A.next=4,g.get("/product/getCategories");case 4:200===(t=A.sent).status&&(c=t.data.result,e({type:v,payload:{categories:c}})),A.next=11;break;case 8:A.prev=8,A.t0=A.catch(0),e({type:f,payload:{message:"Failed to retrieve data from server!"}});case 11:case"end":return A.stop()}}),A,null,[[0,8]])})));return function(e){return A.apply(this,arguments)}}()),A(function(){var A=Object(l.a)(i.a.mark((function A(e){var t;return i.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:t=JSON.parse(localStorage.getItem("Cart")),e({type:j,payload:{currentCartItems:t}});case 2:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}())}),[]),Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(O.a,{children:[Object(h.jsx)(Q.a,{path:"/",exact:!0,component:m}),Object(h.jsx)(Q.a,{path:"/products",exact:!0,component:I})]})})},N=t(33),X=t(17),U={cartItems:[],loading:!1,serverRes:""},D=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case j:A=Object(p.a)(Object(p.a)({},A),{},{cartItems:e.payload.currentCartItems,serverRes:"item added to cart"});break;default:A=Object(p.a)({},A)}return A},R={allProducts:[],allCategories:[],loading:!1,serverRes:""},k=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case d:A=Object(p.a)(Object(p.a)({},A),{},{loading:!0});break;case v:A=Object(p.a)(Object(p.a)({},A),{},{allCategories:e.payload.categories,loading:!1,serverRes:"products retrieved"});break;case f:A=Object(p.a)(Object(p.a)({},A),{},{loading:!1,serverRes:e.payload.Message});break;case b:A=Object(p.a)(Object(p.a)({},A),{},{loading:!0});break;case C:A=Object(p.a)(Object(p.a)({},A),{},{allProducts:e.payload.products,loading:!1,serverRes:"products retrieved"});break;case B:A=Object(p.a)(Object(p.a)({},A),{},{loading:!1,serverRes:e.payload.Message});break;default:A=Object(p.a)({},A)}return A},S=Object(X.b)({product:k,cart:D}),Y=Object(X.c)(S,Object(X.a)(N.a)),K=function(A){A&&A instanceof Function&&t.e(3).then(t.bind(null,69)).then((function(e){var t=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,n=e.getTTFB;t(A),c(A),a(A),r(A),n(A)}))};window.store=Y,n.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(s.a,{store:Y,children:Object(h.jsx)(O.a,{children:Object(h.jsx)(x,{})})})}),document.getElementById("root")),K()}},[[68,1,2]]]);
//# sourceMappingURL=main.c2d1209f.chunk.js.map