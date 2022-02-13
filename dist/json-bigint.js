!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.JSONbig=r():e.JSONbig=r()}(self,(function(){return e={10:(e,r,t)=>{var n=t(128).stringify,i=t(481);e.exports=function(e){return{parse:i(e),stringify:n}},e.exports.parse=i(),e.exports.stringify=n},481:(e,r,t)=>{var n=null;const i=/(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])/,o=/(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)/;e.exports=function(e){"use strict";var r={strict:!1,storeAsString:!1,alwaysParseAsBig:!1,useNativeBigInt:!1,protoAction:"error",constructorAction:"error"};if(null!=e){if(!0===e.strict&&(r.strict=!0),!0===e.storeAsString&&(r.storeAsString=!0),r.alwaysParseAsBig=!0===e.alwaysParseAsBig&&e.alwaysParseAsBig,r.useNativeBigInt=!0===e.useNativeBigInt&&e.useNativeBigInt,void 0!==e.constructorAction){if("error"!==e.constructorAction&&"ignore"!==e.constructorAction&&"preserve"!==e.constructorAction)throw new Error('Incorrect value for constructorAction option, must be "error", "ignore" or undefined but passed '+e.constructorAction);r.constructorAction=e.constructorAction}if(void 0!==e.protoAction){if("error"!==e.protoAction&&"ignore"!==e.protoAction&&"preserve"!==e.protoAction)throw new Error('Incorrect value for protoAction option, must be "error", "ignore" or undefined but passed '+e.protoAction);r.protoAction=e.protoAction}}var u,s,f,c,l={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:"\n",r:"\r",t:"\t"},a=function(e){throw{name:"SyntaxError",message:e,at:u,text:f}},h=function(e){return e&&e!==s&&a("Expected '"+e+"' instead of '"+s+"'"),s=f.charAt(u),u+=1,s},p=function(){var e,i="";for("-"===s&&(i="-",h("-"));s>="0"&&s<="9";)i+=s,h();if("."===s)for(i+=".";h()&&s>="0"&&s<="9";)i+=s;if("e"===s||"E"===s)for(i+=s,h(),"-"!==s&&"+"!==s||(i+=s,h());s>="0"&&s<="9";)i+=s,h();if(e=+i,isFinite(e))return null==n&&(n=t(431)),i.length>15?r.storeAsString?i:r.useNativeBigInt?BigInt(i):new n(i):r.alwaysParseAsBig?r.useNativeBigInt?BigInt(e):new n(e):e;a("Bad number")},g=function(){var e,r,t,n="";if('"'===s)for(var i=u;h();){if('"'===s)return u-1>i&&(n+=f.substring(i,u-1)),h(),n;if("\\"===s){if(u-1>i&&(n+=f.substring(i,u-1)),h(),"u"===s){for(t=0,r=0;r<4&&(e=parseInt(h(),16),isFinite(e));r+=1)t=16*t+e;n+=String.fromCharCode(t)}else{if("string"!=typeof l[s])break;n+=l[s]}i=u}}a("Bad string")},w=function(){for(;s&&s<=" ";)h()};return c=function(){switch(w(),s){case"{":return function(){var e,t=Object.create(null);if("{"===s){if(h("{"),w(),"}"===s)return h("}"),t;for(;s;){if(e=g(),w(),h(":"),!0===r.strict&&Object.hasOwnProperty.call(t,e)&&a('Duplicate key "'+e+'"'),!0===i.test(e)?"error"===r.protoAction?a("Object contains forbidden prototype property"):"ignore"===r.protoAction?c():t[e]=c():!0===o.test(e)?"error"===r.constructorAction?a("Object contains forbidden constructor property"):"ignore"===r.constructorAction?c():t[e]=c():t[e]=c(),w(),"}"===s)return h("}"),t;h(","),w()}}a("Bad object")}();case"[":return function(){var e=[];if("["===s){if(h("["),w(),"]"===s)return h("]"),e;for(;s;){if(e.push(c()),w(),"]"===s)return h("]"),e;h(","),w()}}a("Bad array")}();case'"':return g();case"-":return p();default:return s>="0"&&s<="9"?p():function(){switch(s){case"t":return h("t"),h("r"),h("u"),h("e"),!0;case"f":return h("f"),h("a"),h("l"),h("s"),h("e"),!1;case"n":return h("n"),h("u"),h("l"),h("l"),null}a("Unexpected '"+s+"'")}()}},function(e,r){var t;return f=e+"",u=0,s=" ",t=c(),w(),s&&a("Syntax error"),"function"==typeof r?function e(t,n){var i,o=t[n];return o&&"object"==typeof o&&Object.keys(o).forEach((function(r){void 0!==(i=e(o,r))?o[r]=i:delete o[r]})),r.call(t,n,o)}({"":t},""):t}}},128:(e,r,t)=>{var n=t(431),i=e.exports;!function(){"use strict";var e,r,t,o=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,u={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};function s(e){return o.lastIndex=0,o.test(e)?'"'+e.replace(o,(function(e){var r=u[e];return"string"==typeof r?r:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)}))+'"':'"'+e+'"'}function f(i,o){var u,c,l,a,h,p=e,g=o[i],w=null!=g&&(g instanceof n||n.isBigNumber(g));switch(g&&"object"==typeof g&&"function"==typeof g.toJSON&&(g=g.toJSON(i)),"function"==typeof t&&(g=t.call(o,i,g)),typeof g){case"string":return w?g:s(g);case"number":return isFinite(g)?String(g):"null";case"boolean":case"null":case"bigint":return String(g);case"object":if(!g)return"null";if(e+=r,h=[],"[object Array]"===Object.prototype.toString.apply(g)){for(a=g.length,u=0;u<a;u+=1)h[u]=f(u,g)||"null";return l=0===h.length?"[]":e?"[\n"+e+h.join(",\n"+e)+"\n"+p+"]":"["+h.join(",")+"]",e=p,l}if(t&&"object"==typeof t)for(a=t.length,u=0;u<a;u+=1)"string"==typeof t[u]&&(l=f(c=t[u],g))&&h.push(s(c)+(e?": ":":")+l);else Object.keys(g).forEach((function(r){var t=f(r,g);t&&h.push(s(r)+(e?": ":":")+t)}));return l=0===h.length?"{}":e?"{\n"+e+h.join(",\n"+e)+"\n"+p+"}":"{"+h.join(",")+"}",e=p,l}}"function"!=typeof i.stringify&&(i.stringify=function(n,i,o){var u;if(e="",r="","number"==typeof o)for(u=0;u<o;u+=1)r+=" ";else"string"==typeof o&&(r=o);if(t=i,i&&"function"!=typeof i&&("object"!=typeof i||"number"!=typeof i.length))throw new Error("JSON.stringify");return f("",{"":n})})}()},431:function(e,r,t){var n;!function(i){"use strict";var o,u=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,s=Math.ceil,f=Math.floor,c="[BigNumber Error] ",l=c+"Number primitive has more than 15 significant digits: ",a=1e14,h=14,p=9007199254740991,g=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],w=1e7,d=1e9;function v(e){var r=0|e;return e>0||e===r?r:r-1}function y(e){for(var r,t,n=1,i=e.length,o=e[0]+"";n<i;){for(r=e[n++]+"",t=h-r.length;t--;r="0"+r);o+=r}for(i=o.length;48===o.charCodeAt(--i););return o.slice(0,i+1||1)}function m(e,r){var t,n,i=e.c,o=r.c,u=e.s,s=r.s,f=e.e,c=r.e;if(!u||!s)return null;if(t=i&&!i[0],n=o&&!o[0],t||n)return t?n?0:-s:u;if(u!=s)return u;if(t=u<0,n=f==c,!i||!o)return n?0:!i^t?1:-1;if(!n)return f>c^t?1:-1;for(s=(f=i.length)<(c=o.length)?f:c,u=0;u<s;u++)if(i[u]!=o[u])return i[u]>o[u]^t?1:-1;return f==c?0:f>c^t?1:-1}function b(e,r,t,n){if(e<r||e>t||e!==f(e))throw Error(c+(n||"Argument")+("number"==typeof e?e<r||e>t?" out of range: ":" not an integer: ":" not a primitive number: ")+String(e))}function A(e){var r=e.c.length-1;return v(e.e/h)==r&&e.c[r]%2!=0}function N(e,r){return(e.length>1?e.charAt(0)+"."+e.slice(1):e)+(r<0?"e":"e+")+r}function O(e,r,t){var n,i;if(r<0){for(i=t+".";++r;i+=t);e=i+e}else if(++r>(n=e.length)){for(i=t,r-=n;--r;i+=t);e+=i}else r<n&&(e=e.slice(0,r)+"."+e.slice(r));return e}(o=function e(r){var t,n,i,o,E,x,S,B,I,P,j=$.prototype={constructor:$,toString:null,valueOf:null},_=new $(1),D=20,R=4,F=-7,L=21,U=-1e7,C=1e7,T=!1,M=1,k=0,G={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:" ",suffix:""},q="0123456789abcdefghijklmnopqrstuvwxyz";function $(e,r){var t,o,s,c,a,g,w,d,v=this;if(!(v instanceof $))return new $(e,r);if(null==r){if(e&&!0===e._isBigNumber)return v.s=e.s,void(!e.c||e.e>C?v.c=v.e=null:e.e<U?v.c=[v.e=0]:(v.e=e.e,v.c=e.c.slice()));if((g="number"==typeof e)&&0*e==0){if(v.s=1/e<0?(e=-e,-1):1,e===~~e){for(c=0,a=e;a>=10;a/=10,c++);return void(c>C?v.c=v.e=null:(v.e=c,v.c=[e]))}d=String(e)}else{if(!u.test(d=String(e)))return i(v,d,g);v.s=45==d.charCodeAt(0)?(d=d.slice(1),-1):1}(c=d.indexOf("."))>-1&&(d=d.replace(".","")),(a=d.search(/e/i))>0?(c<0&&(c=a),c+=+d.slice(a+1),d=d.substring(0,a)):c<0&&(c=d.length)}else{if(b(r,2,q.length,"Base"),10==r)return J(v=new $(e),D+v.e+1,R);if(d=String(e),g="number"==typeof e){if(0*e!=0)return i(v,d,g,r);if(v.s=1/e<0?(d=d.slice(1),-1):1,$.DEBUG&&d.replace(/^0\.0*|\./,"").length>15)throw Error(l+e)}else v.s=45===d.charCodeAt(0)?(d=d.slice(1),-1):1;for(t=q.slice(0,r),c=a=0,w=d.length;a<w;a++)if(t.indexOf(o=d.charAt(a))<0){if("."==o){if(a>c){c=w;continue}}else if(!s&&(d==d.toUpperCase()&&(d=d.toLowerCase())||d==d.toLowerCase()&&(d=d.toUpperCase()))){s=!0,a=-1,c=0;continue}return i(v,String(e),g,r)}g=!1,(c=(d=n(d,r,10,v.s)).indexOf("."))>-1?d=d.replace(".",""):c=d.length}for(a=0;48===d.charCodeAt(a);a++);for(w=d.length;48===d.charCodeAt(--w););if(d=d.slice(a,++w)){if(w-=a,g&&$.DEBUG&&w>15&&(e>p||e!==f(e)))throw Error(l+v.s*e);if((c=c-a-1)>C)v.c=v.e=null;else if(c<U)v.c=[v.e=0];else{if(v.e=c,v.c=[],a=(c+1)%h,c<0&&(a+=h),a<w){for(a&&v.c.push(+d.slice(0,a)),w-=h;a<w;)v.c.push(+d.slice(a,a+=h));a=h-(d=d.slice(a)).length}else a-=w;for(;a--;d+="0");v.c.push(+d)}}else v.c=[v.e=0]}function z(e,r,t,n){var i,o,u,s,f;if(null==t?t=R:b(t,0,8),!e.c)return e.toString();if(i=e.c[0],u=e.e,null==r)f=y(e.c),f=1==n||2==n&&(u<=F||u>=L)?N(f,u):O(f,u,"0");else if(o=(e=J(new $(e),r,t)).e,s=(f=y(e.c)).length,1==n||2==n&&(r<=o||o<=F)){for(;s<r;f+="0",s++);f=N(f,o)}else if(r-=u,f=O(f,o,"0"),o+1>s){if(--r>0)for(f+=".";r--;f+="0");}else if((r+=o-s)>0)for(o+1==s&&(f+=".");r--;f+="0");return e.s<0&&i?"-"+f:f}function H(e,r){for(var t,n=1,i=new $(e[0]);n<e.length;n++){if(!(t=new $(e[n])).s){i=t;break}r.call(i,t)&&(i=t)}return i}function V(e,r,t){for(var n=1,i=r.length;!r[--i];r.pop());for(i=r[0];i>=10;i/=10,n++);return(t=n+t*h-1)>C?e.c=e.e=null:t<U?e.c=[e.e=0]:(e.e=t,e.c=r),e}function J(e,r,t,n){var i,o,u,c,l,p,w,d=e.c,v=g;if(d){e:{for(i=1,c=d[0];c>=10;c/=10,i++);if((o=r-i)<0)o+=h,u=r,w=(l=d[p=0])/v[i-u-1]%10|0;else if((p=s((o+1)/h))>=d.length){if(!n)break e;for(;d.length<=p;d.push(0));l=w=0,i=1,u=(o%=h)-h+1}else{for(l=c=d[p],i=1;c>=10;c/=10,i++);w=(u=(o%=h)-h+i)<0?0:l/v[i-u-1]%10|0}if(n=n||r<0||null!=d[p+1]||(u<0?l:l%v[i-u-1]),n=t<4?(w||n)&&(0==t||t==(e.s<0?3:2)):w>5||5==w&&(4==t||n||6==t&&(o>0?u>0?l/v[i-u]:0:d[p-1])%10&1||t==(e.s<0?8:7)),r<1||!d[0])return d.length=0,n?(r-=e.e+1,d[0]=v[(h-r%h)%h],e.e=-r||0):d[0]=e.e=0,e;if(0==o?(d.length=p,c=1,p--):(d.length=p+1,c=v[h-o],d[p]=u>0?f(l/v[i-u]%v[u])*c:0),n)for(;;){if(0==p){for(o=1,u=d[0];u>=10;u/=10,o++);for(u=d[0]+=c,c=1;u>=10;u/=10,c++);o!=c&&(e.e++,d[0]==a&&(d[0]=1));break}if(d[p]+=c,d[p]!=a)break;d[p--]=0,c=1}for(o=d.length;0===d[--o];d.pop());}e.e>C?e.c=e.e=null:e.e<U&&(e.c=[e.e=0])}return e}function W(e){var r,t=e.e;return null===t?e.toString():(r=y(e.c),r=t<=F||t>=L?N(r,t):O(r,t,"0"),e.s<0?"-"+r:r)}return $.clone=e,$.ROUND_UP=0,$.ROUND_DOWN=1,$.ROUND_CEIL=2,$.ROUND_FLOOR=3,$.ROUND_HALF_UP=4,$.ROUND_HALF_DOWN=5,$.ROUND_HALF_EVEN=6,$.ROUND_HALF_CEIL=7,$.ROUND_HALF_FLOOR=8,$.EUCLID=9,$.config=$.set=function(e){var r,t;if(null!=e){if("object"!=typeof e)throw Error(c+"Object expected: "+e);if(e.hasOwnProperty(r="DECIMAL_PLACES")&&(b(t=e[r],0,d,r),D=t),e.hasOwnProperty(r="ROUNDING_MODE")&&(b(t=e[r],0,8,r),R=t),e.hasOwnProperty(r="EXPONENTIAL_AT")&&((t=e[r])&&t.pop?(b(t[0],-d,0,r),b(t[1],0,d,r),F=t[0],L=t[1]):(b(t,-d,d,r),F=-(L=t<0?-t:t))),e.hasOwnProperty(r="RANGE"))if((t=e[r])&&t.pop)b(t[0],-d,-1,r),b(t[1],1,d,r),U=t[0],C=t[1];else{if(b(t,-d,d,r),!t)throw Error(c+r+" cannot be zero: "+t);U=-(C=t<0?-t:t)}if(e.hasOwnProperty(r="CRYPTO")){if((t=e[r])!==!!t)throw Error(c+r+" not true or false: "+t);if(t){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw T=!t,Error(c+"crypto unavailable");T=t}else T=t}if(e.hasOwnProperty(r="MODULO_MODE")&&(b(t=e[r],0,9,r),M=t),e.hasOwnProperty(r="POW_PRECISION")&&(b(t=e[r],0,d,r),k=t),e.hasOwnProperty(r="FORMAT")){if("object"!=typeof(t=e[r]))throw Error(c+r+" not an object: "+t);G=t}if(e.hasOwnProperty(r="ALPHABET")){if("string"!=typeof(t=e[r])||/^.$|[+-.\s]|(.).*\1/.test(t))throw Error(c+r+" invalid: "+t);q=t}}return{DECIMAL_PLACES:D,ROUNDING_MODE:R,EXPONENTIAL_AT:[F,L],RANGE:[U,C],CRYPTO:T,MODULO_MODE:M,POW_PRECISION:k,FORMAT:G,ALPHABET:q}},$.isBigNumber=function(e){if(!e||!0!==e._isBigNumber)return!1;if(!$.DEBUG)return!0;var r,t,n=e.c,i=e.e,o=e.s;e:if("[object Array]"=={}.toString.call(n)){if((1===o||-1===o)&&i>=-d&&i<=d&&i===f(i)){if(0===n[0]){if(0===i&&1===n.length)return!0;break e}if((r=(i+1)%h)<1&&(r+=h),String(n[0]).length==r){for(r=0;r<n.length;r++)if((t=n[r])<0||t>=a||t!==f(t))break e;if(0!==t)return!0}}}else if(null===n&&null===i&&(null===o||1===o||-1===o))return!0;throw Error(c+"Invalid BigNumber: "+e)},$.maximum=$.max=function(){return H(arguments,j.lt)},$.minimum=$.min=function(){return H(arguments,j.gt)},$.random=(o=9007199254740992,E=Math.random()*o&2097151?function(){return f(Math.random()*o)}:function(){return 8388608*(1073741824*Math.random()|0)+(8388608*Math.random()|0)},function(e){var r,t,n,i,o,u=0,l=[],a=new $(_);if(null==e?e=D:b(e,0,d),i=s(e/h),T)if(crypto.getRandomValues){for(r=crypto.getRandomValues(new Uint32Array(i*=2));u<i;)(o=131072*r[u]+(r[u+1]>>>11))>=9e15?(t=crypto.getRandomValues(new Uint32Array(2)),r[u]=t[0],r[u+1]=t[1]):(l.push(o%1e14),u+=2);u=i/2}else{if(!crypto.randomBytes)throw T=!1,Error(c+"crypto unavailable");for(r=crypto.randomBytes(i*=7);u<i;)(o=281474976710656*(31&r[u])+1099511627776*r[u+1]+4294967296*r[u+2]+16777216*r[u+3]+(r[u+4]<<16)+(r[u+5]<<8)+r[u+6])>=9e15?crypto.randomBytes(7).copy(r,u):(l.push(o%1e14),u+=7);u=i/7}if(!T)for(;u<i;)(o=E())<9e15&&(l[u++]=o%1e14);for(i=l[--u],e%=h,i&&e&&(o=g[h-e],l[u]=f(i/o)*o);0===l[u];l.pop(),u--);if(u<0)l=[n=0];else{for(n=-1;0===l[0];l.splice(0,1),n-=h);for(u=1,o=l[0];o>=10;o/=10,u++);u<h&&(n-=h-u)}return a.e=n,a.c=l,a}),$.sum=function(){for(var e=1,r=arguments,t=new $(r[0]);e<r.length;)t=t.plus(r[e++]);return t},n=function(){var e="0123456789";function r(e,r,t,n){for(var i,o,u=[0],s=0,f=e.length;s<f;){for(o=u.length;o--;u[o]*=r);for(u[0]+=n.indexOf(e.charAt(s++)),i=0;i<u.length;i++)u[i]>t-1&&(null==u[i+1]&&(u[i+1]=0),u[i+1]+=u[i]/t|0,u[i]%=t)}return u.reverse()}return function(n,i,o,u,s){var f,c,l,a,h,p,g,w,d=n.indexOf("."),v=D,m=R;for(d>=0&&(a=k,k=0,n=n.replace(".",""),p=(w=new $(i)).pow(n.length-d),k=a,w.c=r(O(y(p.c),p.e,"0"),10,o,e),w.e=w.c.length),l=a=(g=r(n,i,o,s?(f=q,e):(f=e,q))).length;0==g[--a];g.pop());if(!g[0])return f.charAt(0);if(d<0?--l:(p.c=g,p.e=l,p.s=u,g=(p=t(p,w,v,m,o)).c,h=p.r,l=p.e),d=g[c=l+v+1],a=o/2,h=h||c<0||null!=g[c+1],h=m<4?(null!=d||h)&&(0==m||m==(p.s<0?3:2)):d>a||d==a&&(4==m||h||6==m&&1&g[c-1]||m==(p.s<0?8:7)),c<1||!g[0])n=h?O(f.charAt(1),-v,f.charAt(0)):f.charAt(0);else{if(g.length=c,h)for(--o;++g[--c]>o;)g[c]=0,c||(++l,g=[1].concat(g));for(a=g.length;!g[--a];);for(d=0,n="";d<=a;n+=f.charAt(g[d++]));n=O(n,l,f.charAt(0))}return n}}(),t=function(){function e(e,r,t){var n,i,o,u,s=0,f=e.length,c=r%w,l=r/w|0;for(e=e.slice();f--;)s=((i=c*(o=e[f]%w)+(n=l*o+(u=e[f]/w|0)*c)%w*w+s)/t|0)+(n/w|0)+l*u,e[f]=i%t;return s&&(e=[s].concat(e)),e}function r(e,r,t,n){var i,o;if(t!=n)o=t>n?1:-1;else for(i=o=0;i<t;i++)if(e[i]!=r[i]){o=e[i]>r[i]?1:-1;break}return o}function t(e,r,t,n){for(var i=0;t--;)e[t]-=i,i=e[t]<r[t]?1:0,e[t]=i*n+e[t]-r[t];for(;!e[0]&&e.length>1;e.splice(0,1));}return function(n,i,o,u,s){var c,l,p,g,w,d,y,m,b,A,N,O,E,x,S,B,I,P=n.s==i.s?1:-1,j=n.c,_=i.c;if(!(j&&j[0]&&_&&_[0]))return new $(n.s&&i.s&&(j?!_||j[0]!=_[0]:_)?j&&0==j[0]||!_?0*P:P/0:NaN);for(b=(m=new $(P)).c=[],P=o+(l=n.e-i.e)+1,s||(s=a,l=v(n.e/h)-v(i.e/h),P=P/h|0),p=0;_[p]==(j[p]||0);p++);if(_[p]>(j[p]||0)&&l--,P<0)b.push(1),g=!0;else{for(x=j.length,B=_.length,p=0,P+=2,(w=f(s/(_[0]+1)))>1&&(_=e(_,w,s),j=e(j,w,s),B=_.length,x=j.length),E=B,N=(A=j.slice(0,B)).length;N<B;A[N++]=0);I=_.slice(),I=[0].concat(I),S=_[0],_[1]>=s/2&&S++;do{if(w=0,(c=r(_,A,B,N))<0){if(O=A[0],B!=N&&(O=O*s+(A[1]||0)),(w=f(O/S))>1)for(w>=s&&(w=s-1),y=(d=e(_,w,s)).length,N=A.length;1==r(d,A,y,N);)w--,t(d,B<y?I:_,y,s),y=d.length,c=1;else 0==w&&(c=w=1),y=(d=_.slice()).length;if(y<N&&(d=[0].concat(d)),t(A,d,N,s),N=A.length,-1==c)for(;r(_,A,B,N)<1;)w++,t(A,B<N?I:_,N,s),N=A.length}else 0===c&&(w++,A=[0]);b[p++]=w,A[0]?A[N++]=j[E]||0:(A=[j[E]],N=1)}while((E++<x||null!=A[0])&&P--);g=null!=A[0],b[0]||b.splice(0,1)}if(s==a){for(p=1,P=b[0];P>=10;P/=10,p++);J(m,o+(m.e=p+l*h-1)+1,u,g)}else m.e=l,m.r=+g;return m}}(),x=/^(-?)0([xbo])(?=\w[\w.]*$)/i,S=/^([^.]+)\.$/,B=/^\.([^.]+)$/,I=/^-?(Infinity|NaN)$/,P=/^\s*\+(?=[\w.])|^\s+|\s+$/g,i=function(e,r,t,n){var i,o=t?r:r.replace(P,"");if(I.test(o))e.s=isNaN(o)?null:o<0?-1:1;else{if(!t&&(o=o.replace(x,(function(e,r,t){return i="x"==(t=t.toLowerCase())?16:"b"==t?2:8,n&&n!=i?e:r})),n&&(i=n,o=o.replace(S,"$1").replace(B,"0.$1")),r!=o))return new $(o,i);if($.DEBUG)throw Error(c+"Not a"+(n?" base "+n:"")+" number: "+r);e.s=null}e.c=e.e=null},j.absoluteValue=j.abs=function(){var e=new $(this);return e.s<0&&(e.s=1),e},j.comparedTo=function(e,r){return m(this,new $(e,r))},j.decimalPlaces=j.dp=function(e,r){var t,n,i,o=this;if(null!=e)return b(e,0,d),null==r?r=R:b(r,0,8),J(new $(o),e+o.e+1,r);if(!(t=o.c))return null;if(n=((i=t.length-1)-v(this.e/h))*h,i=t[i])for(;i%10==0;i/=10,n--);return n<0&&(n=0),n},j.dividedBy=j.div=function(e,r){return t(this,new $(e,r),D,R)},j.dividedToIntegerBy=j.idiv=function(e,r){return t(this,new $(e,r),0,1)},j.exponentiatedBy=j.pow=function(e,r){var t,n,i,o,u,l,a,p,g=this;if((e=new $(e)).c&&!e.isInteger())throw Error(c+"Exponent not an integer: "+W(e));if(null!=r&&(r=new $(r)),u=e.e>14,!g.c||!g.c[0]||1==g.c[0]&&!g.e&&1==g.c.length||!e.c||!e.c[0])return p=new $(Math.pow(+W(g),u?2-A(e):+W(e))),r?p.mod(r):p;if(l=e.s<0,r){if(r.c?!r.c[0]:!r.s)return new $(NaN);(n=!l&&g.isInteger()&&r.isInteger())&&(g=g.mod(r))}else{if(e.e>9&&(g.e>0||g.e<-1||(0==g.e?g.c[0]>1||u&&g.c[1]>=24e7:g.c[0]<8e13||u&&g.c[0]<=9999975e7)))return o=g.s<0&&A(e)?-0:0,g.e>-1&&(o=1/o),new $(l?1/o:o);k&&(o=s(k/h+2))}for(u?(t=new $(.5),l&&(e.s=1),a=A(e)):a=(i=Math.abs(+W(e)))%2,p=new $(_);;){if(a){if(!(p=p.times(g)).c)break;o?p.c.length>o&&(p.c.length=o):n&&(p=p.mod(r))}if(i){if(0===(i=f(i/2)))break;a=i%2}else if(J(e=e.times(t),e.e+1,1),e.e>14)a=A(e);else{if(0==(i=+W(e)))break;a=i%2}g=g.times(g),o?g.c&&g.c.length>o&&(g.c.length=o):n&&(g=g.mod(r))}return n?p:(l&&(p=_.div(p)),r?p.mod(r):o?J(p,k,R,void 0):p)},j.integerValue=function(e){var r=new $(this);return null==e?e=R:b(e,0,8),J(r,r.e+1,e)},j.isEqualTo=j.eq=function(e,r){return 0===m(this,new $(e,r))},j.isFinite=function(){return!!this.c},j.isGreaterThan=j.gt=function(e,r){return m(this,new $(e,r))>0},j.isGreaterThanOrEqualTo=j.gte=function(e,r){return 1===(r=m(this,new $(e,r)))||0===r},j.isInteger=function(){return!!this.c&&v(this.e/h)>this.c.length-2},j.isLessThan=j.lt=function(e,r){return m(this,new $(e,r))<0},j.isLessThanOrEqualTo=j.lte=function(e,r){return-1===(r=m(this,new $(e,r)))||0===r},j.isNaN=function(){return!this.s},j.isNegative=function(){return this.s<0},j.isPositive=function(){return this.s>0},j.isZero=function(){return!!this.c&&0==this.c[0]},j.minus=function(e,r){var t,n,i,o,u=this,s=u.s;if(r=(e=new $(e,r)).s,!s||!r)return new $(NaN);if(s!=r)return e.s=-r,u.plus(e);var f=u.e/h,c=e.e/h,l=u.c,p=e.c;if(!f||!c){if(!l||!p)return l?(e.s=-r,e):new $(p?u:NaN);if(!l[0]||!p[0])return p[0]?(e.s=-r,e):new $(l[0]?u:3==R?-0:0)}if(f=v(f),c=v(c),l=l.slice(),s=f-c){for((o=s<0)?(s=-s,i=l):(c=f,i=p),i.reverse(),r=s;r--;i.push(0));i.reverse()}else for(n=(o=(s=l.length)<(r=p.length))?s:r,s=r=0;r<n;r++)if(l[r]!=p[r]){o=l[r]<p[r];break}if(o&&(i=l,l=p,p=i,e.s=-e.s),(r=(n=p.length)-(t=l.length))>0)for(;r--;l[t++]=0);for(r=a-1;n>s;){if(l[--n]<p[n]){for(t=n;t&&!l[--t];l[t]=r);--l[t],l[n]+=a}l[n]-=p[n]}for(;0==l[0];l.splice(0,1),--c);return l[0]?V(e,l,c):(e.s=3==R?-1:1,e.c=[e.e=0],e)},j.modulo=j.mod=function(e,r){var n,i,o=this;return e=new $(e,r),!o.c||!e.s||e.c&&!e.c[0]?new $(NaN):!e.c||o.c&&!o.c[0]?new $(o):(9==M?(i=e.s,e.s=1,n=t(o,e,0,3),e.s=i,n.s*=i):n=t(o,e,0,M),(e=o.minus(n.times(e))).c[0]||1!=M||(e.s=o.s),e)},j.multipliedBy=j.times=function(e,r){var t,n,i,o,u,s,f,c,l,p,g,d,y,m,b,A=this,N=A.c,O=(e=new $(e,r)).c;if(!(N&&O&&N[0]&&O[0]))return!A.s||!e.s||N&&!N[0]&&!O||O&&!O[0]&&!N?e.c=e.e=e.s=null:(e.s*=A.s,N&&O?(e.c=[0],e.e=0):e.c=e.e=null),e;for(n=v(A.e/h)+v(e.e/h),e.s*=A.s,(f=N.length)<(p=O.length)&&(y=N,N=O,O=y,i=f,f=p,p=i),i=f+p,y=[];i--;y.push(0));for(m=a,b=w,i=p;--i>=0;){for(t=0,g=O[i]%b,d=O[i]/b|0,o=i+(u=f);o>i;)t=((c=g*(c=N[--u]%b)+(s=d*c+(l=N[u]/b|0)*g)%b*b+y[o]+t)/m|0)+(s/b|0)+d*l,y[o--]=c%m;y[o]=t}return t?++n:y.splice(0,1),V(e,y,n)},j.negated=function(){var e=new $(this);return e.s=-e.s||null,e},j.plus=function(e,r){var t,n=this,i=n.s;if(r=(e=new $(e,r)).s,!i||!r)return new $(NaN);if(i!=r)return e.s=-r,n.minus(e);var o=n.e/h,u=e.e/h,s=n.c,f=e.c;if(!o||!u){if(!s||!f)return new $(i/0);if(!s[0]||!f[0])return f[0]?e:new $(s[0]?n:0*i)}if(o=v(o),u=v(u),s=s.slice(),i=o-u){for(i>0?(u=o,t=f):(i=-i,t=s),t.reverse();i--;t.push(0));t.reverse()}for((i=s.length)-(r=f.length)<0&&(t=f,f=s,s=t,r=i),i=0;r;)i=(s[--r]=s[r]+f[r]+i)/a|0,s[r]=a===s[r]?0:s[r]%a;return i&&(s=[i].concat(s),++u),V(e,s,u)},j.precision=j.sd=function(e,r){var t,n,i,o=this;if(null!=e&&e!==!!e)return b(e,1,d),null==r?r=R:b(r,0,8),J(new $(o),e,r);if(!(t=o.c))return null;if(n=(i=t.length-1)*h+1,i=t[i]){for(;i%10==0;i/=10,n--);for(i=t[0];i>=10;i/=10,n++);}return e&&o.e+1>n&&(n=o.e+1),n},j.shiftedBy=function(e){return b(e,-9007199254740991,p),this.times("1e"+e)},j.squareRoot=j.sqrt=function(){var e,r,n,i,o,u=this,s=u.c,f=u.s,c=u.e,l=D+4,a=new $("0.5");if(1!==f||!s||!s[0])return new $(!f||f<0&&(!s||s[0])?NaN:s?u:1/0);if(0==(f=Math.sqrt(+W(u)))||f==1/0?(((r=y(s)).length+c)%2==0&&(r+="0"),f=Math.sqrt(+r),c=v((c+1)/2)-(c<0||c%2),n=new $(r=f==1/0?"1e"+c:(r=f.toExponential()).slice(0,r.indexOf("e")+1)+c)):n=new $(f+""),n.c[0])for((f=(c=n.e)+l)<3&&(f=0);;)if(o=n,n=a.times(o.plus(t(u,o,l,1))),y(o.c).slice(0,f)===(r=y(n.c)).slice(0,f)){if(n.e<c&&--f,"9999"!=(r=r.slice(f-3,f+1))&&(i||"4999"!=r)){+r&&(+r.slice(1)||"5"!=r.charAt(0))||(J(n,n.e+D+2,1),e=!n.times(n).eq(u));break}if(!i&&(J(o,o.e+D+2,0),o.times(o).eq(u))){n=o;break}l+=4,f+=4,i=1}return J(n,n.e+D+1,R,e)},j.toExponential=function(e,r){return null!=e&&(b(e,0,d),e++),z(this,e,r,1)},j.toFixed=function(e,r){return null!=e&&(b(e,0,d),e=e+this.e+1),z(this,e,r)},j.toFormat=function(e,r,t){var n,i=this;if(null==t)null!=e&&r&&"object"==typeof r?(t=r,r=null):e&&"object"==typeof e?(t=e,e=r=null):t=G;else if("object"!=typeof t)throw Error(c+"Argument not an object: "+t);if(n=i.toFixed(e,r),i.c){var o,u=n.split("."),s=+t.groupSize,f=+t.secondaryGroupSize,l=t.groupSeparator||"",a=u[0],h=u[1],p=i.s<0,g=p?a.slice(1):a,w=g.length;if(f&&(o=s,s=f,f=o,w-=o),s>0&&w>0){for(o=w%s||s,a=g.substr(0,o);o<w;o+=s)a+=l+g.substr(o,s);f>0&&(a+=l+g.slice(o)),p&&(a="-"+a)}n=h?a+(t.decimalSeparator||"")+((f=+t.fractionGroupSize)?h.replace(new RegExp("\\d{"+f+"}\\B","g"),"$&"+(t.fractionGroupSeparator||"")):h):a}return(t.prefix||"")+n+(t.suffix||"")},j.toFraction=function(e){var r,n,i,o,u,s,f,l,a,p,w,d,v=this,m=v.c;if(null!=e&&(!(f=new $(e)).isInteger()&&(f.c||1!==f.s)||f.lt(_)))throw Error(c+"Argument "+(f.isInteger()?"out of range: ":"not an integer: ")+W(f));if(!m)return new $(v);for(r=new $(_),a=n=new $(_),i=l=new $(_),d=y(m),u=r.e=d.length-v.e-1,r.c[0]=g[(s=u%h)<0?h+s:s],e=!e||f.comparedTo(r)>0?u>0?r:a:f,s=C,C=1/0,f=new $(d),l.c[0]=0;p=t(f,r,0,1),1!=(o=n.plus(p.times(i))).comparedTo(e);)n=i,i=o,a=l.plus(p.times(o=a)),l=o,r=f.minus(p.times(o=r)),f=o;return o=t(e.minus(n),i,0,1),l=l.plus(o.times(a)),n=n.plus(o.times(i)),l.s=a.s=v.s,w=t(a,i,u*=2,R).minus(v).abs().comparedTo(t(l,n,u,R).minus(v).abs())<1?[a,i]:[l,n],C=s,w},j.toNumber=function(){return+W(this)},j.toPrecision=function(e,r){return null!=e&&b(e,1,d),z(this,e,r,2)},j.toString=function(e){var r,t=this,i=t.s,o=t.e;return null===o?i?(r="Infinity",i<0&&(r="-"+r)):r="NaN":(null==e?r=o<=F||o>=L?N(y(t.c),o):O(y(t.c),o,"0"):10===e?r=O(y((t=J(new $(t),D+o+1,R)).c),t.e,"0"):(b(e,2,q.length,"Base"),r=n(O(y(t.c),o,"0"),10,e,i,!0)),i<0&&t.c[0]&&(r="-"+r)),r},j.valueOf=j.toJSON=function(){return W(this)},j._isBigNumber=!0,null!=r&&$.set(r),$}()).default=o.BigNumber=o,void 0===(n=function(){return o}.call(r,t,r,e))||(e.exports=n)}()}},r={},function t(n){if(r[n])return r[n].exports;var i=r[n]={exports:{}};return e[n].call(i.exports,i,i.exports,t),i.exports}(10);var e,r}));