(function(){"use strict";var e={2489:function(e,n,t){var r={};t.r(r),t.d(r,{M:function(){return A}});var i=t(9242),o=t(3396),a=t(7718),c=t(9271);function u(e,n,t,r,i,u){const s=(0,o.up)("NavigationBar"),d=(0,o.up)("Main");return(0,o.wg)(),(0,o.j4)(a.q,null,{default:(0,o.w5)((()=>[(0,o.Wm)(c.O,{id:"vuetify-main"},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{id:"navbar"}),(0,o.Wm)(d)])),_:1})])),_:1})}const s={id:"navbar"};function d(e,n,t,r,i,a){return(0,o.wg)(),(0,o.iD)("div",s)}var p={name:"NavigationBar"},l=t(89);const f=(0,l.Z)(p,[["render",d],["__scopeId","data-v-6d43c583"]]);var m=f;const h={id:"main"};function g(e,n,t,r,i,a){const c=(0,o.up)("IngredientSearch"),u=(0,o.up)("RecipeList");return(0,o.wg)(),(0,o.iD)("div",h,[(0,o.Wm)(c),(0,o.Wm)(u)])}function v(e,n,t,r,i,a){const c=(0,o.up)("RecipeCard");return(0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.recipes,(e=>((0,o.wg)(),(0,o.j4)(c,{key:e.id,recipe:e},null,8,["recipe"])))),128)}var b=t(7139),y=t(3289);const w={id:"card"},j=["src"],_={id:"info"},O={id:"icon-info"};function k(e,n,t,r,i,a){return(0,o.wg)(),(0,o.iD)("div",w,[(0,o._)("img",{src:t.recipe.image},null,8,j),(0,o._)("div",_,[(0,o._)("h2",null,(0,b.zw)(t.recipe.title),1),(0,o._)("div",O,[t.recipe.vegetarian?((0,o.wg)(),(0,o.j4)(y.t,{key:0,id:"leaf",icon:"mdi-leaf"})):(0,o.kq)("",!0),t.recipe.veryPopular?((0,o.wg)(),(0,o.j4)(y.t,{key:1,id:"thumb",icon:"mdi-thumb-up"})):(0,o.kq)("",!0)])])])}var R={name:"RecipeCard",props:["recipe"]};const S=(0,l.Z)(R,[["render",k]]);var I=S,P=t(1020);const C="e08d347420b548169eb033e623bdfb88",A=(0,P.Q_)("recipe",{state:()=>({recipes:[],autocompleteIngredients:[]}),actions:{async fetchRandomRecipes(){const e="https://api.spoonacular.com/recipes/random?"+new URLSearchParams({apiKey:C,number:10});await fetch(e).then((e=>e.json())).then((e=>this.recipes=e.recipes)).catch((e=>console.log(e)))},async fetchAutocompleteIngredients(e){if(""===e)return void(this.autocompleteIngredients=[]);const n="https://api.spoonacular.com/food/ingredients/autocomplete?"+new URLSearchParams({apiKey:C,number:5,query:e});await fetch(n).then((e=>e.json())).then((e=>this.autocompleteIngredients=e)).catch((e=>console.log(e)))},async fetchFilteredRecipes(e){if(0===Object.keys(e).length)return void this.fetchRandomRecipes();let n="";for(const r in e)n+=e[r]+",";const t="https://api.spoonacular.com/recipes/findByIngredients?"+new URLSearchParams({apiKey:C,ingredients:n});await fetch(t).then((e=>e.json())).then((e=>this.recipes=e)).catch((e=>console.log(e)))}},getters:{getRecipes(e){return e.recipes},getAutocompleteIngredients(e){const n=e=>"https://spoonacular.com/cdn/ingredients_100x100/"+e,t=e=>e.charAt(0).toUpperCase()+e.slice(1);return e.autocompleteIngredients.map((e=>({name:t(e.name),image:n(e.image)})))}}});var W={name:"RecipeList",components:{RecipeCard:I},data(){return{recipes:[]}},mounted(){const{fetchRandomRecipes:e}=A();e();const{getRecipes:n}=(0,P.Jk)(A());this.recipes=n}};const x=(0,l.Z)(W,[["render",v]]);var L=x,M=t(2759),T=t(3562),U=t(8889);const E={id:"search"};function N(e,n,t,r,i,a){return(0,o.wg)(),(0,o.iD)("div",E,[(0,o.Wm)(M.f,{modelValue:i.model,"onUpdate:modelValue":[n[0]||(n[0]=e=>i.model=e),a.onChange],chips:"","closable-chips":"",clearable:"",multiple:"",items:i.ingredients,label:"Search for ingredients...","onUpdate:search":a.onSearch,"item-title":"name","item-value":"name","no-filter":"","hide-no-data":""},{chip:(0,o.w5)((({props:e,item:n})=>[(0,o.Wm)(T.v,(0,o.dG)(e,{"prepend-avatar":n.raw.avatar,text:n.raw.name}),null,16,["prepend-avatar","text"])])),item:(0,o.w5)((({props:e,item:n})=>[(0,o.Wm)(U.l,(0,o.dG)(e,{"prepend-avatar":n?.raw?.image,title:n?.raw?.name}),null,16,["prepend-avatar","title"])])),_:1},8,["modelValue","items","onUpdate:search","onUpdate:modelValue"])])}var B={name:"IngredientSearch",data(){return{model:null,ingredients:[]}},mounted(){const{getAutocompleteIngredients:e}=(0,P.Jk)(A());this.ingredients=e},methods:{onSearch(e){const{fetchAutocompleteIngredients:n}=A();n(e)},onChange(){const{fetchFilteredRecipes:e}=A();e(this.model)}}};const Z=(0,l.Z)(B,[["render",N]]);var q=Z,D={name:"Main",components:{RecipeList:L,IngredientSearch:q}};const F=(0,l.Z)(D,[["render",g]]);var K=F,V={name:"App",components:{NavigationBar:m,Main:K}};const G=(0,l.Z)(V,[["render",u]]);var J=G,z=(t(9773),t(8957)),H=(0,z.Rd)({theme:{defaultTheme:"dark"}});async function Q(){const e=await t.e(461).then(t.t.bind(t,3657,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}Q(),(0,i.ri)(J).use(r["default"]).use(H).use((0,P.WB)()).mount("#app")}},n={};function t(r){var i=n[r];if(void 0!==i)return i.exports;var o=n[r]={exports:{}};return e[r](o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(n,r,i,o){if(!r){var a=1/0;for(d=0;d<e.length;d++){r=e[d][0],i=e[d][1],o=e[d][2];for(var c=!0,u=0;u<r.length;u++)(!1&o||a>=o)&&Object.keys(t.O).every((function(e){return t.O[e](r[u])}))?r.splice(u--,1):(c=!1,o<a&&(a=o));if(c){e.splice(d--,1);var s=i();void 0!==s&&(n=s)}}return n}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[r,i,o]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){var e,n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};t.t=function(r,i){if(1&i&&(r=this(r)),8&i)return r;if("object"===typeof r&&r){if(4&i&&r.__esModule)return r;if(16&i&&"function"===typeof r.then)return r}var o=Object.create(null);t.r(o);var a={};e=e||[null,n({}),n([]),n(n)];for(var c=2&i&&r;"object"==typeof c&&!~e.indexOf(c);c=n(c))Object.getOwnPropertyNames(c).forEach((function(e){a[e]=function(){return r[e]}}));return a["default"]=function(){return r},t.d(o,a),o}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/webfontloader.9c824096.js"}}(),function(){t.miniCssF=function(e){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="recipe-ingredient-app:";t.l=function(r,i,o,a){if(e[r])e[r].push(i);else{var c,u;if(void 0!==o)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var p=s[d];if(p.getAttribute("src")==r||p.getAttribute("data-webpack")==n+o){c=p;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,t.nc&&c.setAttribute("nonce",t.nc),c.setAttribute("data-webpack",n+o),c.src=r),e[r]=[i];var l=function(n,t){c.onerror=c.onload=null,clearTimeout(f);var i=e[r];if(delete e[r],c.parentNode&&c.parentNode.removeChild(c),i&&i.forEach((function(e){return e(t)})),n)return n(t)},f=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),u&&document.head.appendChild(c)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var e={143:0};t.f.j=function(n,r){var i=t.o(e,n)?e[n]:void 0;if(0!==i)if(i)r.push(i[2]);else{var o=new Promise((function(t,r){i=e[n]=[t,r]}));r.push(i[2]=o);var a=t.p+t.u(n),c=new Error,u=function(r){if(t.o(e,n)&&(i=e[n],0!==i&&(e[n]=void 0),i)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;c.message="Loading chunk "+n+" failed.\n("+o+": "+a+")",c.name="ChunkLoadError",c.type=o,c.request=a,i[1](c)}};t.l(a,u,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var i,o,a=r[0],c=r[1],u=r[2],s=0;if(a.some((function(n){return 0!==e[n]}))){for(i in c)t.o(c,i)&&(t.m[i]=c[i]);if(u)var d=u(t)}for(n&&n(r);s<a.length;s++)o=a[s],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(d)},r=self["webpackChunkrecipe_ingredient_app"]=self["webpackChunkrecipe_ingredient_app"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(2489)}));r=t.O(r)})();
//# sourceMappingURL=app.be32c9fe.js.map