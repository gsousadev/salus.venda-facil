(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b68019c8"],{"0cb2":function(t,e,n){var r=n("7b0b"),a=Math.floor,i="".replace,c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,s=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,o,u,l){var d=n+t.length,f=o.length,v=s;return void 0!==u&&(u=r(u),v=c),i.call(l,v,(function(r,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(d);case"<":c=u[i.slice(1,-1)];break;default:var s=+i;if(0===s)return r;if(s>f){var l=a(s/10);return 0===l?r:l<=f?void 0===o[l-1]?i.charAt(1):o[l-1]+i.charAt(1):r}c=o[s-1]}return void 0===c?"":c}))}},1148:function(t,e,n){"use strict";var r=n("a691"),a=n("1d80");t.exports="".repeat||function(t){var e=String(a(this)),n="",i=r(t);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(n+=e);return n}},"14c3":function(t,e,n){var r=n("c6b6"),a=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var i=n.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"2fbc":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("nav",{attrs:{"aria-label":"breadcrumb bg-transparent rounded"}},[n("ol",{staticClass:"breadcrumb rounded bg-white"},[n("li",{staticClass:"breadcrumb-item"},[n("router-link",{attrs:{to:"/"}},[t._v("Inicio")])],1),n("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(" "+t._s(t.currentPageName)+" ")])])])])])},a=[],i={name:"Breadcrumb",props:{currentPageName:String}},c=i,s=n("2877"),o=Object(s["a"])(c,r,a,!1,null,null,null);e["a"]=o.exports},"408a":function(t,e,n){var r=n("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=r(t))throw TypeError("Incorrect invocation");return+t}},5319:function(t,e,n){"use strict";var r=n("d784"),a=n("825a"),i=n("50c4"),c=n("a691"),s=n("1d80"),o=n("8aa5"),u=n("0cb2"),l=n("14c3"),d=Math.max,f=Math.min,v=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,n,r){var p=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,g=r.REPLACE_KEEPS_$0,h=p?"$":"$0";return[function(n,r){var a=s(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,a,r):e.call(String(a),n,r)},function(t,r){if(!p&&g||"string"===typeof r&&-1===r.indexOf(h)){var s=n(e,t,this,r);if(s.done)return s.value}var b=a(t),x=String(this),m="function"===typeof r;m||(r=String(r));var E=b.global;if(E){var _=b.unicode;b.lastIndex=0}var y=[];while(1){var w=l(b,x);if(null===w)break;if(y.push(w),!E)break;var R=String(w[0]);""===R&&(b.lastIndex=o(x,i(b.lastIndex),_))}for(var S="",$=0,I=0;I<y.length;I++){w=y[I];for(var C=String(w[0]),P=d(f(c(w.index),x.length),0),N=[],O=1;O<w.length;O++)N.push(v(w[O]));var k=w.groups;if(m){var A=[C].concat(N,P,x);void 0!==k&&A.push(k);var T=String(r.apply(void 0,A))}else T=u(C,x,P,N,k,r);P>=$&&(S+=x.slice($,P)+T,$=P+C.length)}return S+x.slice($)}]}))},8152:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("d4ec"),a=n("262e"),i=n("2caf"),c=n("d4d0"),s=function(t){Object(a["a"])(n,t);var e=Object(i["a"])(n);function n(){return Object(r["a"])(this,n),e.call(this,"/service")}return n}(c["a"])},8236:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-12 col-lg-10"},[n("Breadcrumb",{attrs:{currentPageName:"Lista de Serviços"}}),n("div",{staticClass:"row mb-3 justify-content-end"},[n("div",{staticClass:"col-12 col-md-3"},[n("button",{staticClass:"btn btn-primary d-block text-white w-100",on:{click:function(e){return t.newItem()}}},[n("i",{staticClass:"material-icons"},[t._v("playlist_add")]),t._v(" Novo ")])])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"table-responsive"},[n("table",{staticClass:"table table-striped text-center table-sm bg-white rounded"},[t._m(0),0!=this.items.length?n("tbody",t._l(t.items,(function(e,r){return n("tr",{key:r},[n("td",[t._v(t._s(e.nome))]),n("td",[t._v(t._s(t.OutputHelper.money(e.valor)))]),n("td",[t._v(t._s(e.created_at))]),n("td",[n("button",{on:{click:function(n){return t.editItem(e.id)}}},[n("span",{staticClass:"material-icons"},[t._v("edit")])]),t._v(" | "),n("button",{on:{click:function(n){return t.deleteItem(e.id,r)}}},[n("i",{staticClass:"material-icons"},[t._v("delete")])])])])})),0):n("tbody",[t._m(1)])])])])])],1)])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("Nome")]),n("th",{attrs:{scope:"col"}},[t._v("Valor")]),n("th",{attrs:{scope:"col"}},[t._v("Data Criação")]),n("th",{attrs:{scope:"col"}},[t._v("Atualizar | Excluir")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",{attrs:{colspan:"6"}},[t._v("Nenhum dado localizado")])])}],i=n("5530"),c=(n("d3b7"),n("a434"),n("2fbc")),s=n("8676"),o=n("dbca"),u=n("2f62"),l=n("8152"),d={created:function(){this.loaderVisibility(!0),this.indexServices()},data:function(){return{OutputHelper:s["a"],items:[]}},components:{Breadcrumb:c["a"]},methods:Object(i["a"])(Object(i["a"])({},Object(u["c"])(["loaderVisibility"])),{},{indexServices:function(){var t=this;(new l["a"]).index().then((function(e){t.items=e.data})).catch((function(t){o["a"].modalError(t.data)})).finally((function(){t.loaderVisibility(!1)}))},newItem:function(){this.$router.push({path:"/servicos/cadastrar"})},deleteItem:function(t,e){var n=this;(new l["a"]).delete(t).then((function(){o["a"].modalSuccess("Ok!",["Serviço excluido com sucesso!"]),n.items.splice(e,1)})).catch((function(t){o["a"].modalError(t.data)}))},editItem:function(t){this.$router.push({path:"/servicos/editar/".concat(t)})}})},f=d,v=n("2877"),p=Object(v["a"])(f,r,a,!1,null,null,null);e["default"]=p.exports},8676:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("d4ec"),a=n("bee2"),i=(n("5319"),n("ac1f"),n("b680"),function(){function t(){Object(r["a"])(this,t)}return Object(a["a"])(t,null,[{key:"cpf",value:function(t){return null==t?"":t.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"$1.$2.$3-$4")}},{key:"phone",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return null==t?"":11==t.length?t.replace(/(\d{2})(\d{5})(\d{4})/g,"($1) $2-$3"):10==t.length?t.replace(/(\d{2})(\d{4})(\d{4})/g,"($1) $2-$3"):t}},{key:"money",value:function(t){return"string"==typeof t&&(t=parseFloat(t)),"number"==typeof t?"R$ "+t.toFixed(2).replace(".",","):t}},{key:"productSize",value:function(t){switch(t){case"p":return"pequeno";case"m":return"médio";case"g":return"grande";default:return t}}},{key:"productGenre",value:function(t){switch(t){case"m":return"masculino";case"f":return"feminino";case"u":return"Unisex";default:return t}}},{key:"status",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];switch(t){case"PENDENTE":return e?"Pendente":'<span class="badge badge-warning status-tag">Pendente</span>';case"RETIRAR":return e?"Aguardando Retirada":'<span class="badge badge-info status-tag">Aguardando Retirada</span>';case"ENTREGUE":return e?"Entregue":'<span class="badge badge-success status-tag">Entregue</span>';case"PAGO_SINAL":return e?"Pago Sinal":'<span class="badge badge-warning status-tag">Pago Sinal</span>';case"PAGO":return e?"Pago":'<span class="badge badge-success status-tag">Pago</span>';default:return e?t:'<span class="badge badge-light status-tag">'.concat(t,"</span>")}}}]),t}())},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9263:function(t,e,n){"use strict";var r=n("ad6d"),a=n("9f7f"),i=RegExp.prototype.exec,c=String.prototype.replace,s=i,o=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=a.UNSUPPORTED_Y||a.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],d=o||l||u;d&&(s=function(t){var e,n,a,s,d=this,f=u&&d.sticky,v=r.call(d),p=d.source,g=0,h=t;return f&&(v=v.replace("y",""),-1===v.indexOf("g")&&(v+="g"),h=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(p="(?: "+p+")",h=" "+h,g++),n=new RegExp("^(?:"+p+")",v)),l&&(n=new RegExp("^"+p+"$(?!\\s)",v)),o&&(e=d.lastIndex),a=i.call(f?n:d,h),f?a?(a.input=a.input.slice(g),a[0]=a[0].slice(g),a.index=d.lastIndex,d.lastIndex+=a[0].length):d.lastIndex=0:o&&a&&(d.lastIndex=d.global?a.index+a[0].length:e),l&&a&&a.length>1&&c.call(a[0],n,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(a[s]=void 0)})),a}),t.exports=s},"9f7f":function(t,e,n){"use strict";var r=n("d039");function a(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a434:function(t,e,n){"use strict";var r=n("23e7"),a=n("23cb"),i=n("a691"),c=n("50c4"),s=n("7b0b"),o=n("65f0"),u=n("8418"),l=n("1dde"),d=l("splice"),f=Math.max,v=Math.min,p=9007199254740991,g="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!d},{splice:function(t,e){var n,r,l,d,h,b,x=s(this),m=c(x.length),E=a(t,m),_=arguments.length;if(0===_?n=r=0:1===_?(n=0,r=m-E):(n=_-2,r=v(f(i(e),0),m-E)),m+n-r>p)throw TypeError(g);for(l=o(x,r),d=0;d<r;d++)h=E+d,h in x&&u(l,d,x[h]);if(l.length=r,n<r){for(d=E;d<m-r;d++)h=d+r,b=d+n,h in x?x[b]=x[h]:delete x[b];for(d=m;d>m-r+n;d--)delete x[d-1]}else if(n>r)for(d=m-r;d>E;d--)h=d+r-1,b=d+n-1,h in x?x[b]=x[h]:delete x[b];for(d=0;d<n;d++)x[d+E]=arguments[d+2];return x.length=m-r+n,l}})},ac1f:function(t,e,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b680:function(t,e,n){"use strict";var r=n("23e7"),a=n("a691"),i=n("408a"),c=n("1148"),s=n("d039"),o=1..toFixed,u=Math.floor,l=function(t,e,n){return 0===e?n:e%2===1?l(t,e-1,n*t):l(t*t,e/2,n)},d=function(t){var e=0,n=t;while(n>=4096)e+=12,n/=4096;while(n>=2)e+=1,n/=2;return e},f=function(t,e,n){var r=-1,a=n;while(++r<6)a+=e*t[r],t[r]=a%1e7,a=u(a/1e7)},v=function(t,e){var n=6,r=0;while(--n>=0)r+=t[n],t[n]=u(r/e),r=r%e*1e7},p=function(t){var e=6,n="";while(--e>=0)if(""!==n||0===e||0!==t[e]){var r=String(t[e]);n=""===n?r:n+c.call("0",7-r.length)+r}return n},g=o&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){o.call({})}));r({target:"Number",proto:!0,forced:g},{toFixed:function(t){var e,n,r,s,o=i(this),u=a(t),g=[0,0,0,0,0,0],h="",b="0";if(u<0||u>20)throw RangeError("Incorrect fraction digits");if(o!=o)return"NaN";if(o<=-1e21||o>=1e21)return String(o);if(o<0&&(h="-",o=-o),o>1e-21)if(e=d(o*l(2,69,1))-69,n=e<0?o*l(2,-e,1):o/l(2,e,1),n*=4503599627370496,e=52-e,e>0){f(g,0,n),r=u;while(r>=7)f(g,1e7,0),r-=7;f(g,l(10,r,1),0),r=e-1;while(r>=23)v(g,1<<23),r-=23;v(g,1<<r),f(g,1,1),v(g,2),b=p(g)}else f(g,0,n),f(g,1<<-e,0),b=p(g)+c.call("0",u);return u>0?(s=b.length,b=h+(s<=u?"0."+c.call("0",u-s)+b:b.slice(0,s-u)+"."+b.slice(s-u))):b=h+b,b}})},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),a=n("d039"),i=n("b622"),c=n("9263"),s=n("9112"),o=i("species"),u=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),d=i("replace"),f=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),v=!a((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,d){var p=i(t),g=!a((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),h=g&&!a((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[o]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return e=!0,null},n[p](""),!e}));if(!g||!h||"replace"===t&&(!u||!l||f)||"split"===t&&!v){var b=/./[p],x=n(p,""[t],(function(t,e,n,r,a){return e.exec===c?g&&!a?{done:!0,value:b.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),m=x[0],E=x[1];r(String.prototype,t,m),r(RegExp.prototype,p,2==e?function(t,e){return E.call(t,this,e)}:function(t){return E.call(t,this)})}d&&s(RegExp.prototype[p],"sham",!0)}}}]);
//# sourceMappingURL=chunk-b68019c8.69cb4b29.js.map