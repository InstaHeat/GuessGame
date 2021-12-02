(function(t){function e(e){for(var i,r,a=e[0],u=e[1],c=e[2],f=0,d=[];f<a.length;f++)r=a[f],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);l&&l(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,a=1;a<n.length;a++){var u=n[a];0!==s[u]&&(i=!1)}i&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},s={app:0},o=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/GuessGame/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},4587:function(t,e,n){"use strict";n("f770")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._m(0),n("Board")],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("h1",[t._v("¡Squares!")]),n("p",{staticClass:"text"},[t._v(" Remember squares. Find them all. ")])])}],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"board"},t._l(t.dots,(function(e){return n("BoardItem",{key:e.id,attrs:{item:e,gameStatus:t.gameStatus},on:{selected:t.selected}})})),1),n("div",{staticClass:"panel"},[n("div",{staticClass:"panel-input"},[n("span",[t._v("Difficulty : "+t._s(this.diff)+" ")]),4===this.gameStatus?n("div",[n("span",{staticClass:"notification lose"},[t._v("You lose! Try again!")])]):t._e(),3===this.gameStatus?n("div",[n("span",{staticClass:"notification win"},[t._v("You WIN!")])]):t._e()]),n("button",{staticClass:"button",attrs:{disabled:1===this.gameStatus},on:{click:t.start}},[t._v("Start")])])])},a=[],u=(n("c740"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{class:t.classObject,on:{click:function(e){return t.selectDot(t.item.id)}}})}),c=[],l={props:["item","gameStatus"],data:function(){return{}},computed:{classObject:function(){return{item:!0,show:1===this.item.value&&1===this.gameStatus||this.item.selected&&1===this.item.value,wrong:this.item.selected&&0===this.item.value}}},methods:{selectDot:function(t){2===this.gameStatus&&this.$emit("selected",t)}}},f=l,d=(n("f6e5"),n("2877")),h=Object(d["a"])(f,u,c,!1,null,null,null),p=h.exports,m={EMPTY:0,FILLED:1},v=3,g=16,b={NONE:0,SHOW_DOTS:1,STARTED:2,WIN:3,GAMEOVER:4},O=2e3,S={components:{BoardItem:p},data:function(){return{dots:[],dotsLength:25,gameStatus:b.NONE,diff:v,maxDiff:g}},created:function(){this.init()},methods:{init:function(){this.dots=[];for(var t=0;t<this.dotsLength;t++)this.dots.push({id:t,value:0,selected:m.EMPTY})},start:function(){var t=this;this.init(),this.setUpDots(),setTimeout((function(){t.gameStatus=b.STARTED}),O)},rand:function(t,e){return Math.floor(Math.random()*(e-t)+t)},setUpDots:function(){this.gameStatus=b.SHOW_DOTS;for(var t=0;t<this.diff;t++){var e=this.rand(0,this.dotsLength-1);this.dots[e].value!==m.FILLED?this.dots[e].value=m.FILLED:t--}},selected:function(t){var e=this.dots.findIndex((function(e){return e.id===t}));e>-1&&!this.dots[e].selected&&(this.dots[e].selected=!0,this.check())},check:function(){var t=this.dots.findIndex((function(t){return t.selected&&t.value===m.EMPTY}));if(t>-1)this.gameOver();else{var e=this.dots.findIndex((function(t){return!t.selected&&t.value===m.FILLED}));-1===e&&this.win()}},win:function(){var t=this;if(this.diff+=1,this.diff===g)return this.gameStatus=b.WIN,void setTimeout((function(){t.gameStatus=b.NONE,t.diff=v,t.init()}),O);this.start()},gameOver:function(){var t=this;this.gameStatus=b.GAMEOVER,console.log("It seems you like to look into console :)"),setTimeout((function(){t.init(),t.diff=v}),O)}}},_=S,y=(n("4587"),Object(d["a"])(_,r,a,!1,null,"d9d40632",null)),E=y.exports,w={name:"App",components:{Board:E}},T=w,j=(n("034f"),Object(d["a"])(T,s,o,!1,null,null,null)),x=j.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(x)}}).$mount("#app")},"85ec":function(t,e,n){},f6e5:function(t,e,n){"use strict";n("f9d3")},f770:function(t,e,n){},f9d3:function(t,e,n){}});
//# sourceMappingURL=app.732e5ef0.js.map