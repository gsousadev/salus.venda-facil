(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aac0a8ce"],{"0cb2":function(e,t,r){var a=r("7b0b"),n=Math.floor,i="".replace,o=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,c=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,r,u,s,l){var d=r+e.length,f=u.length,v=c;return void 0!==s&&(s=a(s),v=o),i.call(l,v,(function(a,i){var o;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,r);case"'":return t.slice(d);case"<":o=s[i.slice(1,-1)];break;default:var c=+i;if(0===c)return a;if(c>f){var l=n(c/10);return 0===l?a:l<=f?void 0===u[l-1]?i.charAt(1):u[l-1]+i.charAt(1):a}o=u[c-1]}return void 0===o?"":o}))}},"14c3":function(e,t,r){var a=r("c6b6"),n=r("9263");e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var i=r.call(e,t);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==a(e))throw TypeError("RegExp#exec called on incompatible receiver");return n.call(e,t)}},"25f0":function(e,t,r){"use strict";var a=r("6eeb"),n=r("825a"),i=r("d039"),o=r("ad6d"),c="toString",u=RegExp.prototype,s=u[c],l=i((function(){return"/a/b"!=s.call({source:"a",flags:"b"})})),d=s.name!=c;(l||d)&&a(RegExp.prototype,c,(function(){var e=n(this),t=String(e.source),r=e.flags,a=String(void 0===r&&e instanceof RegExp&&!("flags"in u)?o.call(e):r);return"/"+t+"/"+a}),{unsafe:!0})},"2fbc":function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("nav",{attrs:{"aria-label":"breadcrumb bg-transparent rounded"}},[r("ol",{staticClass:"breadcrumb rounded bg-white"},[r("li",{staticClass:"breadcrumb-item"},[r("router-link",{attrs:{to:"/"}},[e._v("Inicio")])],1),r("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[e._v(" "+e._s(e.currentPageName)+" ")])])])])])},n=[],i={name:"Breadcrumb",props:{currentPageName:String}},o=i,c=r("2877"),u=Object(c["a"])(o,a,n,!1,null,null,null);t["a"]=u.exports},"44e7":function(e,t,r){var a=r("861d"),n=r("c6b6"),i=r("b622"),o=i("match");e.exports=function(e){var t;return a(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==n(e))}},"4d63":function(e,t,r){var a=r("83ab"),n=r("da84"),i=r("94ca"),o=r("7156"),c=r("9bf2").f,u=r("241c").f,s=r("44e7"),l=r("ad6d"),d=r("9f7f"),f=r("6eeb"),v=r("d039"),p=r("69f3").set,h=r("2626"),g=r("b622"),m=g("match"),b=n.RegExp,x=b.prototype,E=/a/g,y=/a/g,I=new b(E)!==E,S=d.UNSUPPORTED_Y,R=a&&i("RegExp",!I||S||v((function(){return y[m]=!1,b(E)!=E||b(y)==y||"/a/i"!=b(E,"i")})));if(R){var _=function(e,t){var r,a=this instanceof _,n=s(e),i=void 0===t;if(!a&&n&&e.constructor===_&&i)return e;I?n&&!i&&(e=e.source):e instanceof _&&(i&&(t=l.call(e)),e=e.source),S&&(r=!!t&&t.indexOf("y")>-1,r&&(t=t.replace(/y/g,"")));var c=o(I?new b(e,t):b(e,t),a?this:x,_);return S&&r&&p(c,{sticky:r}),c},C=function(e){e in _||c(_,e,{configurable:!0,get:function(){return b[e]},set:function(t){b[e]=t}})},w=u(b),T=0;while(w.length>T)C(w[T++]);x.constructor=_,_.prototype=x,f(n,"RegExp",_)}h("RegExp")},5319:function(e,t,r){"use strict";var a=r("d784"),n=r("825a"),i=r("50c4"),o=r("a691"),c=r("1d80"),u=r("8aa5"),s=r("0cb2"),l=r("14c3"),d=Math.max,f=Math.min,v=function(e){return void 0===e?e:String(e)};a("replace",2,(function(e,t,r,a){var p=a.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,h=a.REPLACE_KEEPS_$0,g=p?"$":"$0";return[function(r,a){var n=c(this),i=void 0==r?void 0:r[e];return void 0!==i?i.call(r,n,a):t.call(String(n),r,a)},function(e,a){if(!p&&h||"string"===typeof a&&-1===a.indexOf(g)){var c=r(t,e,this,a);if(c.done)return c.value}var m=n(e),b=String(this),x="function"===typeof a;x||(a=String(a));var E=m.global;if(E){var y=m.unicode;m.lastIndex=0}var I=[];while(1){var S=l(m,b);if(null===S)break;if(I.push(S),!E)break;var R=String(S[0]);""===R&&(m.lastIndex=u(b,i(m.lastIndex),y))}for(var _="",C=0,w=0;w<I.length;w++){S=I[w];for(var T=String(S[0]),$=d(f(o(S.index),b.length),0),k=[],P=1;P<S.length;P++)k.push(v(S[P]));var A=S.groups;if(x){var U=[T].concat(k,$,b);void 0!==A&&U.push(A);var O=String(a.apply(void 0,U))}else O=s(T,b,$,k,A,a);$>=C&&(_+=b.slice(C,$)+O,C=$+T.length)}return _+b.slice(C)}]}))},"599c":function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var a=r("d4ec"),n=r("262e"),i=r("2caf"),o=r("d4d0"),c=function(e){Object(n["a"])(r,e);var t=Object(i["a"])(r);function r(){return Object(a["a"])(this,r),t.call(this,"/product")}return r}(o["a"])},"5db0":function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var a=r("d4ec"),n=r("bee2"),i=(r("4d63"),r("ac1f"),r("25f0"),r("5319"),r("d3b7"),function(){function e(){Object(a["a"])(this,e)}return Object(n["a"])(e,null,[{key:"checkInput",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=RegExp("([0-9]{5,5}[-]?[0-9]{3})$"),a=RegExp("([0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2})$"),n=RegExp("");switch(t){case"cpf":n=a;break;case"cep":n=r;break}return n.test(e)}},{key:"setInvalidInputs",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(""!=e){var t=document.getElementById(e);t.classList.add("is-invalid"),t.classList.remove("is-valid")}return!1}},{key:"setValidInputs",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(""!=e){var t=document.getElementById(e);t.classList.remove("is-invalid"),t.classList.add("is-valid")}return!1}},{key:"money",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return parseFloat(e.toString().replace(",","."))}},{key:"cleanVal",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/[^0-9a-zA-Z]/g,"")}},{key:"createSlug",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";e=e.replace(/^\s+|\s+$/g,""),e=e.toLowerCase();for(var t="ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;",r="aaaaaeeeeeiiiiooooouuuunc------",a=0,n=t.length;a<n;a++)e=e.replace(new RegExp(t.charAt(a),"g"),r.charAt(a));return e=e.replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"_").replace(/-+/g,"_"),e}}]),e}())},7156:function(e,t,r){var a=r("861d"),n=r("d2bb");e.exports=function(e,t,r){var i,o;return n&&"function"==typeof(i=t.constructor)&&i!==r&&a(o=i.prototype)&&o!==r.prototype&&n(e,o),e}},"8aa5":function(e,t,r){"use strict";var a=r("6547").charAt;e.exports=function(e,t,r){return t+(r?a(e,t).length:1)}},9263:function(e,t,r){"use strict";var a=r("ad6d"),n=r("9f7f"),i=RegExp.prototype.exec,o=String.prototype.replace,c=i,u=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),s=n.UNSUPPORTED_Y||n.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],d=u||l||s;d&&(c=function(e){var t,r,n,c,d=this,f=s&&d.sticky,v=a.call(d),p=d.source,h=0,g=e;return f&&(v=v.replace("y",""),-1===v.indexOf("g")&&(v+="g"),g=String(e).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==e[d.lastIndex-1])&&(p="(?: "+p+")",g=" "+g,h++),r=new RegExp("^(?:"+p+")",v)),l&&(r=new RegExp("^"+p+"$(?!\\s)",v)),u&&(t=d.lastIndex),n=i.call(f?r:d,g),f?n?(n.input=n.input.slice(h),n[0]=n[0].slice(h),n.index=d.lastIndex,d.lastIndex+=n[0].length):d.lastIndex=0:u&&n&&(d.lastIndex=d.global?n.index+n[0].length:t),l&&n&&n.length>1&&o.call(n[0],r,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(n[c]=void 0)})),n}),e.exports=c},"9db1":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-12 col-md-8"},[r("Breadcrumb",{attrs:{currentPageName:e.headerTitle}}),r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-12"},[r("form",{on:{submit:function(t){return t.preventDefault(),e.submitForm()}}},[r("h4",{staticClass:"bg-primary p-2 text-white rounded"},[e._v(e._s(e.headerTitle))]),r("div",{staticClass:"row my-3"},e._l(e.productInfo,(function(t,a){return r("div",{key:a,staticClass:"col-12 col-sm-6",attrs:{value:t.value}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:t.name}},[e._v(" "+e._s(t.label)+" ")]),"checkbox"===t.type?r("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"field.value"}],staticClass:"form-control",attrs:{id:t.name,name:t.name,required:t.required,type:"checkbox"},domProps:{checked:Array.isArray(t.value)?e._i(t.value,null)>-1:t.value},on:{change:function(r){var a=t.value,n=r.target,i=!!n.checked;if(Array.isArray(a)){var o=null,c=e._i(a,o);n.checked?c<0&&e.$set(t,"value",a.concat([o])):c>-1&&e.$set(t,"value",a.slice(0,c).concat(a.slice(c+1)))}else e.$set(t,"value",i)}}}):"radio"===t.type?r("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"field.value"}],staticClass:"form-control",attrs:{id:t.name,name:t.name,required:t.required,type:"radio"},domProps:{checked:e._q(t.value,null)},on:{change:function(r){return e.$set(t,"value",null)}}}):r("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"field.value"}],staticClass:"form-control",attrs:{id:t.name,name:t.name,required:t.required,type:t.type},domProps:{value:t.value},on:{input:function(r){r.target.composing||e.$set(t,"value",r.target.value)}}})])])})),0),r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-12 col--4"},[r("button",{staticClass:"btn btn-primary d-block text-white",attrs:{type:"submit"}},[e._v(" "+e._s(e.textSubmitButton)+" ")])])])])])])],1)])},n=[],i=r("2fbc"),o=r("5db0"),c=r("dbca"),u=r("599c"),s={components:{Breadcrumb:i["a"]},created:function(){this.$route.params.id&&this.getProductInfo()},data:function(){return{productId:this.$route.params.id,headerTitle:"Cadastro de Produto",textSubmitButton:"Cadastrar",productInfo:{nome:{type:"text",label:"Nome",name:"nome",value:"",required:!0},estoque:{type:"number",label:"Estoque",name:"estoque",value:"",required:!0},descricao:{type:"text",label:"Descrição",name:"descricao",value:"",required:!0},valor:{type:"number",label:"Valor",name:"valor",value:"",required:!0}},redirectUrl:"/produtos/listar",dataToSend:{}}},methods:{generateDataToSend:function(){for(var e in this.productInfo)this.productInfo[e].mask?this.dataToSend[e]=o["a"].cleanVal(this.productInfo[e].value):this.dataToSend[e]=this.productInfo[e].value;this.dataToSend.slug=o["a"].createSlug(this.productInfo.nome.value)},submitForm:function(){var e=this;this.generateDataToSend(),this.productId?(new u["a"]).update(this.productId,this.dataToSend).then((function(){c["a"].modalSuccess("Muito bom!",["Os dados do produto foram editados com sucesso!"]),e.$router.push({path:e.redirectUrl})})).catch((function(e){c["a"].modalError(e.data)})):(new u["a"]).create(this.dataToSend).then((function(){c["a"].modalSuccess("Muito bom!",["Produto cadastrado com sucesso!"]),e.$router.push({path:e.redirectUrl})})).catch((function(e){c["a"].modalError(e.data)}))},getProductInfo:function(){var e=this;(new u["a"]).get(this.productId).then((function(t){e.fillFields(t.data),e.disabledFieldsToEdit(),e.setEditTitles(),e.setEditRoute()})).catch((function(e){c["a"].modalError(e.data)}))},setEditTitles:function(){this.headerTitle="Atualização Cadastral de Cliente",this.textSubmitButton="Atualizar"},setEditRoute:function(){this.redirectUrl="/clientes/listar"},fillFields:function(e){this.productInfo.nome.value=e.nome,this.productInfo.estoque.value=e.estoque,this.productInfo.descricao.value=e.descricao,this.productInfo.valor.value=e.valor}}},l=s,d=r("2877"),f=Object(d["a"])(l,a,n,!1,null,null,null);t["default"]=f.exports},"9f7f":function(e,t,r){"use strict";var a=r("d039");function n(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=a((function(){var e=n("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=a((function(){var e=n("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,r){"use strict";var a=r("23e7"),n=r("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==n},{exec:n})},ad6d:function(e,t,r){"use strict";var a=r("825a");e.exports=function(){var e=a(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},d784:function(e,t,r){"use strict";r("ac1f");var a=r("6eeb"),n=r("d039"),i=r("b622"),o=r("9263"),c=r("9112"),u=i("species"),s=!n((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),d=i("replace"),f=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),v=!n((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));e.exports=function(e,t,r,d){var p=i(e),h=!n((function(){var t={};return t[p]=function(){return 7},7!=""[e](t)})),g=h&&!n((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[u]=function(){return r},r.flags="",r[p]=/./[p]),r.exec=function(){return t=!0,null},r[p](""),!t}));if(!h||!g||"replace"===e&&(!s||!l||f)||"split"===e&&!v){var m=/./[p],b=r(p,""[e],(function(e,t,r,a,n){return t.exec===o?h&&!n?{done:!0,value:m.call(t,r,a)}:{done:!0,value:e.call(r,t,a)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),x=b[0],E=b[1];a(String.prototype,e,x),a(RegExp.prototype,p,2==t?function(e,t){return E.call(e,this,t)}:function(e){return E.call(e,this)})}d&&c(RegExp.prototype[p],"sham",!0)}}}]);
//# sourceMappingURL=chunk-aac0a8ce.8242a2eb.js.map