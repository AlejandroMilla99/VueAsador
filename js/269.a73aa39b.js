"use strict";(self["webpackChunkvue_asador"]=self["webpackChunkvue_asador"]||[]).push([[269],{9269:function(e,t,s){s.r(t),s.d(t,{default:function(){return y}});var a=s(6768);const i={class:"gallery-page section"},n={class:"carousel-container"},r={class:"gallery-section"},o={class:"gallery-section"},c={class:"gallery-section"};function l(e,t,s,l,u,g){const d=(0,a.g2)("AppCarousel");return(0,a.uX)(),(0,a.CE)("section",i,[(0,a.Lk)("div",n,[(0,a.Lk)("div",r,[t[0]||(t[0]=(0,a.Lk)("h1",{class:"section-title"},"Nuestro espacio",-1)),(0,a.bF)(d,{images:u.images.space},null,8,["images"])]),(0,a.Lk)("div",o,[t[1]||(t[1]=(0,a.Lk)("h1",{class:"section-title"},"Nuestro producto",-1)),(0,a.bF)(d,{images:u.images.product},null,8,["images"])]),(0,a.Lk)("div",c,[t[2]||(t[2]=(0,a.Lk)("h1",{class:"section-title"},"Nuestra gente",-1)),(0,a.bF)(d,{images:u.images.people},null,8,["images"])])])])}var u=s(4232);const g={class:"carousel-container"},d={class:"carousel"},h=["onClick"],m={class:"image-wrapper"},p=["src"];function C(e,t,s,i,n,r){return(0,a.uX)(),(0,a.CE)("div",g,[(0,a.Lk)("div",d,[(0,a.Lk)("button",{class:"carousel-button left-button",onClick:t[0]||(t[0]=(...e)=>r.rotateLeft&&r.rotateLeft(...e))},t[2]||(t[2]=[(0,a.Lk)("span",null,"<",-1)])),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(s.images,((e,t)=>((0,a.uX)(),(0,a.CE)("div",{key:t,class:(0,u.C4)(r.getClass(t)),onClick:e=>r.handleClick(t)},[(0,a.Lk)("div",m,[(0,a.Lk)("img",{src:e,alt:"gallery image"},null,8,p)])],10,h)))),128)),(0,a.Lk)("button",{class:"carousel-button right-button",onClick:t[1]||(t[1]=(...e)=>r.rotateRight&&r.rotateRight(...e))},t[3]||(t[3]=[(0,a.Lk)("span",null,">",-1)]))])])}var k={name:"AppCarousel",props:{images:{type:Array,required:!0}},data(){return{currentIndex:0}},computed:{imageCount(){return this.images.length}},methods:{getClass(e){const t=(e-this.currentIndex+this.imageCount)%this.imageCount;return 0===t?"carousel-image active":1===t?"carousel-image right":t===this.imageCount-1?"carousel-image left":"carousel-image hidden"},handleClick(e){const t=(e-this.currentIndex+this.imageCount)%this.imageCount;1===t?this.rotateRight():t===this.imageCount-1&&this.rotateLeft()},rotateLeft(){this.currentIndex=(this.currentIndex-1+this.imageCount)%this.imageCount},rotateRight(){this.currentIndex=(this.currentIndex+1)%this.imageCount}}},b=s(1786);const v=(0,b.A)(k,[["render",C],["__scopeId","data-v-0c949aa6"]]);var A=v,L=s(5764),f={name:"GalleryView",components:{AppCarousel:A},data(){return{images:{space:[L.A.bg4,L.A.bg2,L.A.bg3,L.A.bg5],product:[L.A.bg4,L.A.bg2,L.A.bg3,L.A.bg5],people:[L.A.bg4,L.A.bg2,L.A.bg3,L.A.bg5]}}}};const I=(0,b.A)(f,[["render",l],["__scopeId","data-v-627486b4"]]);var y=I}}]);
//# sourceMappingURL=269.a73aa39b.js.map