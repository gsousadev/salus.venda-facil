(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-665cd2e9"],{"0cb2":function(t,e,a){var r=a("7b0b"),s=Math.floor,n="".replace,i=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,o=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,a,c,l,u){var d=a+t.length,v=c.length,f=o;return void 0!==l&&(l=r(l),f=i),n.call(u,f,(function(r,n){var i;switch(n.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,a);case"'":return e.slice(d);case"<":i=l[n.slice(1,-1)];break;default:var o=+n;if(0===o)return r;if(o>v){var u=s(o/10);return 0===u?r:u<=v?void 0===c[u-1]?n.charAt(1):c[u-1]+n.charAt(1):r}i=c[o-1]}return void 0===i?"":i}))}},1148:function(t,e,a){"use strict";var r=a("a691"),s=a("1d80");t.exports="".repeat||function(t){var e=String(s(this)),a="",n=r(t);if(n<0||n==1/0)throw RangeError("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(e+=e))1&n&&(a+=e);return a}},"14c3":function(t,e,a){var r=a("c6b6"),s=a("9263");t.exports=function(t,e){var a=t.exec;if("function"===typeof a){var n=a.call(t,e);if("object"!==typeof n)throw TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return s.call(t,e)}},"159c":function(t,e,a){"use strict";a("8e5f")},"2d4a":function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));var r=a("d4ec"),s=a("bee2"),n=a("262e"),i=a("2caf"),o=(a("99af"),a("d722")),c=a("d4d0"),l=function(t){Object(n["a"])(a,t);var e=Object(i["a"])(a);function a(){return Object(r["a"])(this,a),e.call(this,"/order")}return Object(s["a"])(a,[{key:"createOrderObservation",value:function(t){return o["a"].post("".concat(this.prefix,"/observation"),t)}},{key:"paymentStatusUpdate",value:function(t,e){return o["a"].put("".concat(this.prefix,"/payment-status/").concat(t),{status:e})}}]),a}(c["a"])},"2fbc":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("nav",{attrs:{"aria-label":"breadcrumb bg-transparent rounded"}},[a("ol",{staticClass:"breadcrumb rounded bg-white"},[a("li",{staticClass:"breadcrumb-item"},[a("router-link",{attrs:{to:"/"}},[t._v("Inicio")])],1),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(" "+t._s(t.currentPageName)+" ")])])])])])},s=[],n={name:"Breadcrumb",props:{currentPageName:String}},i=n,o=a("2877"),c=Object(o["a"])(i,r,s,!1,null,null,null);e["a"]=c.exports},"408a":function(t,e,a){var r=a("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=r(t))throw TypeError("Incorrect invocation");return+t}},5319:function(t,e,a){"use strict";var r=a("d784"),s=a("825a"),n=a("50c4"),i=a("a691"),o=a("1d80"),c=a("8aa5"),l=a("0cb2"),u=a("14c3"),d=Math.max,v=Math.min,f=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,a,r){var p=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,m=r.REPLACE_KEEPS_$0,g=p?"$":"$0";return[function(a,r){var s=o(this),n=void 0==a?void 0:a[t];return void 0!==n?n.call(a,s,r):e.call(String(s),a,r)},function(t,r){if(!p&&m||"string"===typeof r&&-1===r.indexOf(g)){var o=a(e,t,this,r);if(o.done)return o.value}var _=s(t),b=String(this),h="function"===typeof r;h||(r=String(r));var C=_.global;if(C){var y=_.unicode;_.lastIndex=0}var E=[];while(1){var x=u(_,b);if(null===x)break;if(E.push(x),!C)break;var S=String(x[0]);""===S&&(_.lastIndex=c(b,n(_.lastIndex),y))}for(var w="",O=0,P=0;P<E.length;P++){x=E[P];for(var I=String(x[0]),$=d(v(i(x.index),b.length),0),R=[],T=1;T<x.length;T++)R.push(f(x[T]));var N=x.groups;if(h){var j=[I].concat(R,$,b);void 0!==N&&j.push(N);var A=String(r.apply(void 0,j))}else A=l(I,b,$,R,N,r);$>=O&&(w+=b.slice(O,$)+A,O=$+I.length)}return w+b.slice(O)}]}))},8676:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var r=a("d4ec"),s=a("bee2"),n=(a("5319"),a("ac1f"),a("b680"),function(){function t(){Object(r["a"])(this,t)}return Object(s["a"])(t,null,[{key:"cpf",value:function(t){return null==t?"":t.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"$1.$2.$3-$4")}},{key:"phone",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return null==t?"":11==t.length?t.replace(/(\d{2})(\d{5})(\d{4})/g,"($1) $2-$3"):10==t.length?t.replace(/(\d{2})(\d{4})(\d{4})/g,"($1) $2-$3"):t}},{key:"money",value:function(t){return"string"==typeof t&&(t=parseFloat(t)),"number"==typeof t?"R$ "+t.toFixed(2).replace(".",","):t}},{key:"productSize",value:function(t){switch(t){case"p":return"pequeno";case"m":return"médio";case"g":return"grande";default:return t}}},{key:"productGenre",value:function(t){switch(t){case"m":return"masculino";case"f":return"feminino";case"u":return"Unisex";default:return t}}},{key:"status",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];switch(t){case"PENDENTE":return e?"Pendente":'<span class="badge badge-warning status-tag">Pendente</span>';case"RETIRAR":return e?"Aguardando Retirada":'<span class="badge badge-info status-tag">Aguardando Retirada</span>';case"ENTREGUE":return e?"Entregue":'<span class="badge badge-success status-tag">Entregue</span>';case"PAGO_SINAL":return e?"Pago Sinal":'<span class="badge badge-warning status-tag">Pago Sinal</span>';case"PAGO":return e?"Pago":'<span class="badge badge-success status-tag">Pago</span>';default:return e?t:'<span class="badge badge-light status-tag">'.concat(t,"</span>")}}}]),t}())},"8aa5":function(t,e,a){"use strict";var r=a("6547").charAt;t.exports=function(t,e,a){return e+(a?r(t,e).length:1)}},"8e5f":function(t,e,a){},9263:function(t,e,a){"use strict";var r=a("ad6d"),s=a("9f7f"),n=RegExp.prototype.exec,i=String.prototype.replace,o=n,c=function(){var t=/a/,e=/b*/g;return n.call(t,"a"),n.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=s.UNSUPPORTED_Y||s.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=c||u||l;d&&(o=function(t){var e,a,s,o,d=this,v=l&&d.sticky,f=r.call(d),p=d.source,m=0,g=t;return v&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),g=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(p="(?: "+p+")",g=" "+g,m++),a=new RegExp("^(?:"+p+")",f)),u&&(a=new RegExp("^"+p+"$(?!\\s)",f)),c&&(e=d.lastIndex),s=n.call(v?a:d,g),v?s?(s.input=s.input.slice(m),s[0]=s[0].slice(m),s.index=d.lastIndex,d.lastIndex+=s[0].length):d.lastIndex=0:c&&s&&(d.lastIndex=d.global?s.index+s[0].length:e),u&&s&&s.length>1&&i.call(s[0],a,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(s[o]=void 0)})),s}),t.exports=o},"9f7f":function(t,e,a){"use strict";var r=a("d039");function s(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=s("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=s("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a314:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-12 col-lg-10"},[a("Breadcrumb",{attrs:{currentPageName:t.headerTitle}}),a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-12"},[a("h4",{staticClass:"bg-primary p-2 text-white rounded"},[t._v(t._s(t.headerTitle))]),a("section",{staticClass:"bg-white p-3 mt-3 rounded"},[a("h3",[t._v("Informações do Pedido")]),a("hr"),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-6"},[a("p",[a("strong",[t._v("Código do Pedido: ")]),t._v(" "+t._s(t.orderInfo.id)+" ")])]),a("div",{staticClass:"col-12 col-sm-6"},[a("p",[a("strong",[t._v("Nome do Cliente: ")]),t._v(" "+t._s(t.orderInfo.customer.nome)+" ")])]),a("div",{staticClass:"col-12 col-sm-6"},[a("p",[a("strong",[t._v("CPF do Cliente: ")]),t._v(" "+t._s(t.OutputHelper.cpf(t.orderInfo.customer.cpf))+" ")])]),a("div",{staticClass:"col-12 col-sm-6"},[a("p",[a("strong",[t._v("Desconto: ")]),t._v(" "+t._s(t.OutputHelper.money(t.orderInfo.desconto))+" ")])]),a("div",{staticClass:"col-12 col-sm-6"},[a("p",[a("strong",[t._v("Valor Pago: ")]),t._v(" "+t._s(t.OutputHelper.money(t.orderInfo.valor_pago))+" ")])]),a("div",{staticClass:"col-12 col-sm-6"},[a("p",[a("strong",[t._v("Valor faltante: ")]),t._v(" "+t._s(t.OutputHelper.money(t.missingValue))+" ")])]),a("div",{staticClass:"col-12 col-sm-6"},[a("p",[a("strong",[t._v("Status Pagamento: ")]),a("span",{domProps:{innerHTML:t._s(t.OutputHelper.status(t.orderInfo.status_pagamento))}})])])])]),a("section",{staticClass:"bg-white p-3 mt-3 rounded"},[a("h3",[t._v("Produtos do Pedido")]),a("hr"),0!==t.orderInfo.product_items.length?a("div",{staticClass:"row justify-content-center"},t._l(t.orderInfo.product_items,(function(e,r){return a("div",{key:r,staticClass:"col-12 py-3"},[r!=Object.keys(t.orderInfo.product_items).length-1?a("div",{staticClass:"border-bottom p-2 rounded"},[a("ProductTable",{attrs:{item:e}})],1):a("div",{staticClass:"p-2 rounded"},[a("ProductTable",{attrs:{item:e}})],1)])})),0):a("div",{staticClass:"row justify-content-center"},[t._m(0)])]),a("section",{staticClass:"bg-white p-3 mt-3 rounded"},[a("h3",[t._v("Servicos do Pedido")]),a("hr"),0!==t.orderInfo.service_items.length?a("div",{staticClass:"row justify-content-center"},t._l(t.orderInfo.service_items,(function(e,r){return a("div",{key:r,staticClass:"col-12 py-3"},[r!=Object.keys(t.orderInfo.service_items).length-1?a("div",{staticClass:"border-bottom p-2 rounded"},[a("ServiceTable",{attrs:{item:e}})],1):a("div",{staticClass:"p-2 rounded"},[a("ServiceTable",{attrs:{item:e}})],1)])})),0):a("div",{staticClass:"row justify-content-center"},[t._m(1)])]),a("section",{staticClass:"bg-white p-3 mt-3 rouded"},[a("h3",[t._v("Observações")]),a("hr"),a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-12 py-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"new_observation"}},[t._v("Nova Observação")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.observation.textarea.value,expression:"observation.textarea.value"}],staticClass:"form-control",attrs:{name:"new_observation"},domProps:{value:t.observation.textarea.value},on:{input:function(e){e.target.composing||t.$set(t.observation.textarea,"value",e.target.value)}}})])])]),a("div",{staticClass:"row justify-content-end"},[a("div",{staticClass:"col-12 col-lg-2 col-md-3 col-sm-4"},[a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-primary btn-add w-100",attrs:{type:"button"},on:{click:function(e){return t.addObservation()}}},[t._v(" Salvar ")])])])]),a("div",{staticClass:"row justify-content-center"},[t._m(2),t._l(t.orderInfo.observations,(function(e,r){return a("div",{key:r,staticClass:"col-12 my-2"},[a("div",{staticClass:"order_observation p-2"},[a("small",[a("strong",[t._v(t._s(e.created_at))])]),a("p",{staticClass:"mb-0"},[t._v(t._s(e.descricao))])])])}))],2)]),a("section",{staticClass:"bg-white p-3 mt-3 rouded"},[a("h3",[t._v("Ações")]),a("hr"),a("div",{staticClass:"row align-items-end justify-content-between"},[a("div",{staticClass:"col-12 col-sm-8"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Status de Pagamento")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.orderPaymentStatusSelect.value,expression:"orderPaymentStatusSelect.value"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.orderPaymentStatusSelect,"value",e.target.multiple?a:a[0])}}},t._l(t.orderPaymentStatusSelect.options,(function(e,r){return a("option",{key:r,domProps:{value:r}},[t._v(" "+t._s(e)+" ")])})),0)])]),a("div",{staticClass:"col-12 col-lg-2 col-md-3 col-sm-4"},[a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-primary w-100",on:{click:function(e){return t.paymentStatusUpdate()}}},[t._v(" Alterar Status ")])])])]),a("div",{staticClass:"row align-items-end justify-content-end"},[a("div",{staticClass:"col-12 col-lg-2 col-md-3 col-sm-4"},[a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-primary w-100",on:{click:function(e){return t.printOrder()}}},[a("i",{staticClass:"material-icons"},[t._v("print")]),t._v(" Imprimir Pedido ")])])]),a("div",{staticClass:"col-12 col-lg-2 col-md-3 col-sm-4"},[a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-danger w-100",on:{click:function(e){return t.deleteOrder()}}},[a("i",{staticClass:"material-icons"},[t._v("delete")]),t._v(" Excluir Pedido ")])])])])])])])],1)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-12 py-3"},[a("p",{staticClass:"text-center"},[t._v("Não há produtos neste pedido!")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-12 py-3"},[a("p",{staticClass:"text-center"},[t._v("Não há serviços neste pedido!")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-12"},[a("h4",[t._v("Observações do Pedido")])])}],n=a("5530"),i=(a("159b"),a("d3b7"),a("2fbc")),o=a("8676"),c=a("dbca"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("table",{staticClass:"table table-borderless table-sm"},[a("tr",[t._m(0),a("td",[a("span",{staticClass:"text-capitalize"},[t._v(t._s(t.item.service.id))])])]),a("tr",[t._m(1),a("td",[a("span",{staticClass:"text-capitalize"},[t._v(t._s(t.item.service.nome))])])]),a("tr",[t._m(2),a("td",[a("span",{staticClass:"text-capitalize"},[t._v(t._s(t.OutputHelper.money(t.item.service.valor)))])])]),a("tr",[t._m(3),a("td",[a("span",{staticClass:"text-capitalize"},[t._v(t._s(t.OutputHelper.money(t.item.valor_adicional)))])])]),a("tr",[t._m(4),a("td",[a("span",{staticClass:"text-capitalize"},[t._v(t._s(t.item.service.descricao))])])]),a("tr",[t._m(5),a("td",[a("span",{staticClass:"text-capitalize"},[t._v(t._s(t.item.observacao))])])]),a("tr",[t._m(6),a("td",{domProps:{innerHTML:t._s(t.OutputHelper.status(t.item.status_progresso))}})])]),a("div",{staticClass:"row align-items-end justify-content-between"},[a("div",{staticClass:"col-12 col-sm-8"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Status de Progresso")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.orderProgressStatusSelect.value,expression:"orderProgressStatusSelect.value"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.orderProgressStatusSelect,"value",e.target.multiple?a:a[0])}}},t._l(t.orderProgressStatusSelect.options,(function(e,r){return a("option",{key:r,domProps:{value:r}},[t._v(" "+t._s(e)+" ")])})),0)])]),a("div",{staticClass:"col-12 col-lg-2 col-md-3 col-sm-4"},[a("div",{staticClass:"form-group ml-sm-3 ml-0"},[a("button",{staticClass:"btn btn-primary w-100",on:{click:function(e){return t.progressStatusUpdate()}}},[t._v(" Alterar Status ")])])])])])},u=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",{staticClass:"w-25"},[a("strong",[t._v("Código do Serviço:")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",{staticClass:"w-25"},[a("strong",[t._v("Nome:")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",{staticClass:"w-25"},[a("strong",[t._v("Valor Base:")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",{staticClass:"w-25"},[a("strong",[t._v("Valor Adicional:")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",{staticClass:"w-25"},[a("strong",[t._v("Descrição:")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",{staticClass:"w-25"},[a("strong",[t._v("Observação:")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",{staticClass:"w-25"},[a("strong",[t._v("Status Progresso:")])])}],d=a("d4ec"),v=a("bee2"),f=a("262e"),p=a("2caf"),m=(a("99af"),a("d722")),g=a("d4d0"),_=function(t){Object(f["a"])(a,t);var e=Object(p["a"])(a);function a(){return Object(d["a"])(this,a),e.call(this,"/service-item")}return Object(v["a"])(a,[{key:"progressStatusUpdate",value:function(t,e){return m["a"].put("".concat(this.prefix,"/progress-status/").concat(t),{status:e})}}]),a}(g["a"]),b=a("2f62"),h={name:"ServiceTable",props:{item:Object},data:function(){return{OutputHelper:o["a"],redirectUrl:"/pedidos/listar",orderProgressStatusSelect:{value:this.item.status_progresso,options:{PENDENTE:o["a"].status("PENDENTE",!0),RETIRAR:o["a"].status("RETIRAR",!0),ENTREGUE:o["a"].status("ENTREGUE",!0)}}}},methods:Object(n["a"])(Object(n["a"])({},Object(b["c"])(["loaderVisibility"])),{},{progressStatusUpdate:function(){var t=this;this.loaderVisibility(!0),(new _).progressStatusUpdate(this.item.id,this.orderProgressStatusSelect.value).then((function(e){t.item.status_progresso=e.data.status_progresso})).catch((function(t){c["a"].modalError(t.data)})).finally((function(){t.loaderVisibility(!1)}))}})},C=h,y=a("2877"),E=Object(y["a"])(C,l,u,!1,null,null,null),x=E.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"table table-borderless table-sm"},[a("tr",[t._m(0),a("td",[a("span",{staticClass:"text-capitalize"},[t._v(t._s(t.item.product.id))])])]),a("tr",[t._m(1),a("td",[a("span",{staticClass:"text-capitalize"},[t._v(t._s(t.item.product.nome))])])]),a("tr",[t._m(2),a("td",[a("span",{staticClass:"text-capitalize"},[t._v(t._s(t.OutputHelper.money(t.item.product.valor)))])])]),a("tr",[t._m(3),a("td",[a("span",{staticClass:"text-capitalize"},[t._v(t._s(t.item.quantidade))])])])])},w=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",{staticClass:"w-25"},[a("strong",[t._v("Código do Produto:")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",{staticClass:"w-25"},[a("strong",[t._v("Nome:")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",{staticClass:"w-25"},[a("strong",[t._v("Valor Unitário:")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",{staticClass:"w-25"},[a("strong",[t._v("Quantidade:")])])}],O={name:"ProductTable",props:{item:Object},data:function(){return{OutputHelper:o["a"]}}},P=O,I=Object(y["a"])(P,S,w,!1,null,null,null),$=I.exports,R=a("2d4a"),T={components:{Breadcrumb:i["a"],ServiceTable:x,ProductTable:$},computed:{missingValue:function(){return this.totalOrderValue-this.orderInfo.valor_pago}},created:function(){this.loaderVisibility(!0),this.getOrderInfo()},data:function(){return{OutputHelper:o["a"],headerTitle:"Visualizar Pedido",redirectUrl:"/pedidos/listar",orderId:this.$route.params.id,orderInfo:{customer:{nome:"",cpf:""},status:"",valor_pago:0,observations:[],product_items:[],service_items:[]},observation:{textarea:{value:""}},totalOrderValue:0,orderPaymentStatusSelect:{value:"",options:{PENDENTE:o["a"].status("PENDENTE",!0),PAGO_SINAL:o["a"].status("PAGO_SINAL",!0),PAGO:o["a"].status("PAGO",!0)}}}},methods:Object(n["a"])(Object(n["a"])({},Object(b["c"])(["loaderVisibility"])),{},{calculateTotalOrderValue:function(){var t=this;this.orderInfo.product_items.forEach((function(e){var a=parseFloat(e.product.valor)*e.quantidade;t.totalOrderValue+=a,console.log(a)})),this.orderInfo.service_items.forEach((function(e){var a=parseFloat(e.service.valor)+parseFloat(e.valor_adicional);t.totalOrderValue+=a}))},paymentStatusUpdate:function(){var t=this;this.loaderVisibility(!0),(new R["a"]).paymentStatusUpdate(this.orderInfo.id,this.orderPaymentStatusSelect.value).then((function(e){t.orderInfo.status_pagamento=e.data.status_pagamento,t.orderPaymentStatusSelect.value=t.orderInfo.status_pagamento})).catch((function(t){c["a"].modalError(t.data)})).finally((function(){t.loaderVisibility(!1)}))},addObservation:function(){var t=this,e={pedido_id:this.orderInfo.id,descricao:this.observation.textarea.value};(new R["a"]).createOrderObservation(e).then((function(){c["a"].modalSuccess("Ok!",["Observação cadastrada com sucesso"]),t.getOrderInfo(),t.observation.textarea.value=0})).catch((function(t){c["a"].modalError(t.data)})).finally((function(){t.loaderVisibility(!1)}))},getOrderInfo:function(){var t=this;(new R["a"]).get(this.orderId).then((function(e){t.orderInfo=e.data,t.orderPaymentStatusSelect.value=t.orderInfo.status_pagamento,t.calculateTotalOrderValue()})).catch((function(t){c["a"].modalError(t.data)})).finally((function(){t.loaderVisibility(!1)}))},deleteOrder:function(){var t=this;(new R["a"]).delete(this.orderInfo.id).then((function(){c["a"].modalSuccess("Ok!",["Pedido deletado com sucesso!"]),t.$router.push({path:t.redirectUrl})})).catch((function(t){c["a"].modalError(t.data)}))},printOrder:function(){this.$router.push({path:"/pedidos/imprimir/".concat(this.orderInfo.id)})}})},N=T,j=(a("159c"),Object(y["a"])(N,r,s,!1,null,null,null));e["default"]=j.exports},ac1f:function(t,e,a){"use strict";var r=a("23e7"),s=a("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==s},{exec:s})},ad6d:function(t,e,a){"use strict";var r=a("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b680:function(t,e,a){"use strict";var r=a("23e7"),s=a("a691"),n=a("408a"),i=a("1148"),o=a("d039"),c=1..toFixed,l=Math.floor,u=function(t,e,a){return 0===e?a:e%2===1?u(t,e-1,a*t):u(t*t,e/2,a)},d=function(t){var e=0,a=t;while(a>=4096)e+=12,a/=4096;while(a>=2)e+=1,a/=2;return e},v=function(t,e,a){var r=-1,s=a;while(++r<6)s+=e*t[r],t[r]=s%1e7,s=l(s/1e7)},f=function(t,e){var a=6,r=0;while(--a>=0)r+=t[a],t[a]=l(r/e),r=r%e*1e7},p=function(t){var e=6,a="";while(--e>=0)if(""!==a||0===e||0!==t[e]){var r=String(t[e]);a=""===a?r:a+i.call("0",7-r.length)+r}return a},m=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!o((function(){c.call({})}));r({target:"Number",proto:!0,forced:m},{toFixed:function(t){var e,a,r,o,c=n(this),l=s(t),m=[0,0,0,0,0,0],g="",_="0";if(l<0||l>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(g="-",c=-c),c>1e-21)if(e=d(c*u(2,69,1))-69,a=e<0?c*u(2,-e,1):c/u(2,e,1),a*=4503599627370496,e=52-e,e>0){v(m,0,a),r=l;while(r>=7)v(m,1e7,0),r-=7;v(m,u(10,r,1),0),r=e-1;while(r>=23)f(m,1<<23),r-=23;f(m,1<<r),v(m,1,1),f(m,2),_=p(m)}else v(m,0,a),v(m,1<<-e,0),_=p(m)+i.call("0",l);return l>0?(o=_.length,_=g+(o<=l?"0."+i.call("0",l-o)+_:_.slice(0,o-l)+"."+_.slice(o-l))):_=g+_,_}})},d784:function(t,e,a){"use strict";a("ac1f");var r=a("6eeb"),s=a("d039"),n=a("b622"),i=a("9263"),o=a("9112"),c=n("species"),l=!s((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=n("replace"),v=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),f=!s((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2!==a.length||"a"!==a[0]||"b"!==a[1]}));t.exports=function(t,e,a,d){var p=n(t),m=!s((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),g=m&&!s((function(){var e=!1,a=/a/;return"split"===t&&(a={},a.constructor={},a.constructor[c]=function(){return a},a.flags="",a[p]=/./[p]),a.exec=function(){return e=!0,null},a[p](""),!e}));if(!m||!g||"replace"===t&&(!l||!u||v)||"split"===t&&!f){var _=/./[p],b=a(p,""[t],(function(t,e,a,r,s){return e.exec===i?m&&!s?{done:!0,value:_.call(e,a,r)}:{done:!0,value:t.call(a,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:v}),h=b[0],C=b[1];r(String.prototype,t,h),r(RegExp.prototype,p,2==e?function(t,e){return C.call(t,this,e)}:function(t){return C.call(t,this)})}d&&o(RegExp.prototype[p],"sham",!0)}}}]);
//# sourceMappingURL=chunk-665cd2e9.1022745c.js.map