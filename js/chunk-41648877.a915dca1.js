(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41648877"],{"2fce":function(t,e,n){"use strict";n("ee63")},"47e9":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a=n("d4ec"),s=n("bee2"),r=n("262e"),c=n("2caf"),o=(n("99af"),n("d4d0")),i=function(t){Object(r["a"])(n,t);var e=Object(c["a"])(n);function n(){return Object(a["a"])(this,n),e.call(this,"/customer")}return Object(s["a"])(n,[{key:"getByCpf",value:function(t){return this.api.get("".concat(this.prefix,"/cpf/").concat(t))}},{key:"getByPhone",value:function(t){return this.api.get("".concat(this.prefix,"/phone/").concat(t))}}]),n}(o["a"])},a15b:function(t,e,n){"use strict";var a=n("23e7"),s=n("44ad"),r=n("fc6a"),c=n("a640"),o=[].join,i=s!=Object,l=c("join",",");a({target:"Array",proto:!0,forced:i||!l},{join:function(t){return o.call(r(this),void 0===t?",":t)}})},cdcd:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n("d4ec"),s=n("bee2"),r=(n("a15b"),function(){function t(){Object(a["a"])(this,t)}return Object(s["a"])(t,null,[{key:"buildQueryFilter",value:function(t){if("string"===typeof t)return t;var e=[];for(var n in t)e.push(encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e.join("&")}}]),t}())},ee63:function(t,e,n){},f29e:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"home"},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-12 col-sm-8"},[n("PhoneSearchUser"),n("div",{staticClass:"row py-3 justify-content-center"},[n("IconButton",{attrs:{url:"/pedidos/listar",iconClass:"list",buttonText:"Listar Pedidos"}}),n("IconButton",{attrs:{url:"/clientes/cadastrar",iconClass:"playlist_add",buttonText:"Cadastrar Clientes"}}),n("IconButton",{attrs:{url:"/clientes/listar",iconClass:"list",buttonText:"Listar Clientes"}}),n("IconButton",{attrs:{url:"/produtos/cadastrar",iconClass:"playlist_add",buttonText:"Cadastrar Produtos"}}),n("IconButton",{attrs:{url:"/produtos/listar",iconClass:"list",buttonText:"Listar Produtos"}}),n("IconButton",{attrs:{url:"/servicos/cadastrar",iconClass:"playlist_add",buttonText:"Cadastrar Serviços"}}),n("IconButton",{attrs:{url:"/servicos/listar",iconClass:"list",buttonText:"Listar Serviços"}})],1)],1)])])},s=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"row py-3 justify-content-center",on:{submit:function(e){return e.preventDefault(),t.checkUser()}}},[n("div",{staticClass:"col-12 col-lg-5 mb-3"},[n("the-mask",{staticClass:"form-control w-100",attrs:{type:"text",name:"phone",id:"phoneInput",placeholder:"Pesquisar cliente pelo telefone","aria-describedby":"helpId",mask:"(##) #####-####"},model:{value:t.searchText,callback:function(e){t.searchText=e},expression:"searchText"}})],1),t._m(0)])},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-12 col-lg-3"},[n("button",{staticClass:"btn btn-primary w-100",attrs:{type:"submit"}},[t._v(" Consultar Cliente ")])])}],o=n("5530"),i=(n("d3b7"),n("dbca")),l=n("cdcd"),u=n("47e9"),d=n("2f62"),f={data:function(){return{searchText:""}},methods:Object(o["a"])(Object(o["a"])({},Object(d["c"])(["loaderVisibility"])),{},{checkUser:function(){var t=this,e=this.$router,n=this.searchText,a=l["a"].buildQueryFilter({telefone_1:n});(new u["a"]).index(a).then((function(t){0!==t.data.length?(i["a"].modalSuccess("Um ou mais clientes encontrados com esse telefone",["Redirecionando para lista de clientes"]),e.push({path:"/clientes/listar",query:{telefone_1:n}})):(i["a"].modalWarning("Nenhum resultado encontado",["Redirecionando para o cadastro de clientes"]),e.push({path:"/clientes/cadastrar",query:{telefone_1:n}}))})).catch((function(t){i["a"].modalError(t.data)})).finally((function(){t.loaderVisibility(!1)}))}})},p=f,h=n("2877"),b=Object(h["a"])(p,r,c,!1,null,null,null),m=b.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-12 col-lg-6"},[n("router-link",{staticClass:"sp-link bg-primary rounded d-flex justify-content-center",attrs:{to:t.url}},[n("h3",{staticClass:"title"},[n("i",{staticClass:"material-icons"},[t._v(t._s(t.iconClass))]),n("span",[t._v(t._s(t.buttonText))])])])],1)},v=[],y={props:{url:String,buttonText:String,classNames:String,iconClass:String}},x=y,j=(n("2fce"),Object(h["a"])(x,C,v,!1,null,"16ead44c",null)),_=j.exports,g={name:"Home",data:function(){return{}},components:{IconButton:_,PhoneSearchUser:m}},T=g,k=Object(h["a"])(T,a,s,!1,null,null,null);e["default"]=k.exports}}]);
//# sourceMappingURL=chunk-41648877.a915dca1.js.map