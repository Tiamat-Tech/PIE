(function(U,O){var e=U.PIE||(U.PIE={});e.wa=function(b){var a,d,c,f,g=arguments;a=1;for(d=g.length;a<d;a++){f=g[a];for(c in f)if(f.hasOwnProperty(c))b[c]=f[c]}return b};e.wa(e,{o:"-pie-",Ia:"Pie",ea:"pie_",Uc:{TD:1,TH:1},gc:{TABLE:1,THEAD:1,TBODY:1,TFOOT:1,TR:1,INPUT:1,TEXTAREA:1,SELECT:1,OPTION:1,IMG:1,HR:1},wb:{A:1,INPUT:1,TEXTAREA:1,SELECT:1,BUTTON:1},vd:{submit:1,button:1,reset:1},ua:function(){}});try{O.execCommand("BackgroundImageCache",false,true)}catch(aa){}(function(){for(var b=4,a=O.createElement("div"),
d=a.getElementsByTagName("i");a.innerHTML="<!--[if gt IE "+ ++b+"]><i></i><![endif]--\>",d[0];);e.zb=b;if(b===6)e.o=e.o.replace(/^-/,"");e.P=O.documentMode||e.zb;a.innerHTML='<v:shape adj="1"/>';b=a.firstChild;b.style.behavior="url(#default#VML)";e.Gb=typeof b.adj==="object"})();(function(){var b=0,a={};e.na={Sa:function(d){return d&&d._pieId||(d._pieId="_"+b++)},$c:function(d,c,f){var g=a[d],h,i;if(g)Object.prototype.toString.call(g)==="[object Array]"?g.push([c,f]):c.call(f,g);else{i=a[d]=[[c,f]];
h=new Image;h.onload=function(){g=a[d]={g:h.width,f:h.height};for(var j=0,n=i.length;j<n;j++)i[j][0].call(i[j][1],g);h.onload=null};h.src=d}}}})();e.Ea={oc:function(b,a,d,c){function f(){n=h>=90&&h<270?a:0;o=h<180?d:0;l=a-n;p=d-o}function g(){for(;h<0;)h+=360;h%=360}var h=c.pa;c=c.Ua;var i,j,n,o,l,p,u,w;if(c){c=c.coords(b,a,d);i=c.x;j=c.y}if(h){h=h.ic();g();f();if(!c){i=n;j=o}c=e.Ea.Hc(i,j,h,l,p);b=c[0];c=c[1]}else if(c){b=a-i;c=d-j}else{i=j=b=0;c=d}u=b-i;w=c-j;if(h===void 0){h=!u?w<0?90:270:!w?u<
0?180:0:-Math.atan2(w,u)/Math.PI*180;g();f()}return{pa:h,Rc:i,Sc:j,kc:b,lc:c,zd:n,Ad:o,sd:l,td:p,pd:u,qd:w,Cc:e.Ea.jc(i,j,b,c)}},Hc:function(b,a,d,c,f){if(d===0||d===180)return[c,a];else if(d===90||d===270)return[b,f];else{d=Math.tan(-d*Math.PI/180);b=d*b-a;a=-1/d;c=a*c-f;f=a-d;return[(c-b)/f,(d*c-a*b)/f]}},jc:function(b,a,d,c){b=d-b;a=c-a;return Math.abs(b===0?a:a===0?b:Math.sqrt(b*b+a*a))}};e.L=function(){this.$a=[];this.Bb={}};e.L.prototype={J:function(b){var a=e.na.Sa(b),d=this.Bb,c=this.$a;if(!(a in
d)){d[a]=c.length;c.push(b)}},Z:function(b){b=e.na.Sa(b);var a=this.Bb;if(b&&b in a){delete this.$a[a[b]];delete a[b]}},W:function(){for(var b=this.$a,a=b.length;a--;)b[a]&&b[a]()}};e.ga=new e.L;e.ga.Mc=function(){var b=this;if(!b.Nc){setInterval(function(){b.W()},250);b.Nc=1}};(function(){function b(){e.G.W();U.detachEvent("onunload",b);U.PIE=null}e.G=new e.L;U.attachEvent("onunload",b);e.G.Oa=function(a,d,c){a.attachEvent(d,c);this.J(function(){a.detachEvent(d,c)})}})();e.ja=new e.L;e.G.Oa(U,"onresize",
function(){e.ja.W()});(function(){function b(){e.Ha.W()}e.Ha=new e.L;e.G.Oa(U,"onscroll",b);e.ja.J(b)})();e.Ga=new e.L;e.G.Oa(O,"onmouseup",function(){e.Ga.W()});e.hd=function(){function b(j){this.F=j}var a=O.createElement("length-calc"),d=O.body||O.documentElement,c=a.style,f={},g=["mm","cm","in","pt","pc"],h=g.length,i={};c.position="absolute";c.top=c.left="-9999px";for(d.appendChild(a);h--;){c.width="100"+g[h];f[g[h]]=a.offsetWidth/100}d.removeChild(a);c.width="1em";b.prototype={cb:/(px|em|ex|mm|cm|in|pt|pc|%)$/,
sc:function(){var j=this.Ec;if(j===void 0)j=this.Ec=parseFloat(this.F);return j},Ta:function(){var j=this.Vc;if(!j)j=this.Vc=(j=this.F.match(this.cb))&&j[0]||"px";return j},c:function(j,n){var o=this.sc(),l=this.Ta();switch(l){case "px":return o;case "%":return o*(typeof n==="function"?n():n)/100;case "em":return o*this.Ra(j);case "ex":return o*this.Ra(j)/2;default:return o*f[l]}},Ra:function(j){var n=j.currentStyle.fontSize,o,l;if(n.indexOf("px")>0)return parseFloat(n);else if(j.tagName in e.gc){l=
this;o=j.parentNode;return e.h(n).c(o,function(){return l.Ra(o)})}else{j.appendChild(a);n=a.offsetWidth;a.parentNode===j&&j.removeChild(a);return n}}};b.yd=function(j){return j/f.pt};e.h=function(j){return i[j]||(i[j]=new b(j))};return b}();e.ca=function(){function b(f){this.D=f}var a=e.h("50%"),d={top:1,center:1,bottom:1},c={left:1,center:1,right:1};b.prototype={tc:function(){if(!this.ob){var f=this.D,g=f.length,h=e.m,i=h.Ka,j=e.h("0");i=i.ha;j=["left",j,"top",j];if(g===1){f.push(new h.Ja(i,"center"));
g++}if(g===2){i&(f[0].e|f[1].e)&&f[0].a in d&&f[1].a in c&&f.push(f.shift());if(f[0].e&i)if(f[0].a==="center")j[1]=a;else j[0]=f[0].a;else if(f[0].B())j[1]=e.h(f[0].a);if(f[1].e&i)if(f[1].a==="center")j[3]=a;else j[2]=f[1].a;else if(f[1].B())j[3]=e.h(f[1].a)}this.ob=j}return this.ob},coords:function(f,g,h){var i=this.tc(),j=i[1].c(f,g);f=i[3].c(f,h);return{x:i[0]==="right"?g-j:j,y:i[2]==="bottom"?h-f:f}}};return b}();e.da=function(){function b(a,d){this.g=a;this.f=d}b.prototype={c:function(a,d,c,
f,g){var h=this.g,i=this.f,j=d/c;f=f/g;if(h==="contain"){h=f>j?d:c*f;i=f>j?d/f:c}else if(h==="cover"){h=f<j?d:c*f;i=f<j?d/f:c}else if(h==="auto"){i=i==="auto"?g:i.c(a,c);h=i*f}else{h=h.c(a,d);i=i==="auto"?h/f:i.c(a,c)}return{g:h,f:i}}};b.Mb=new b("auto","auto");return b}();e.Kb=function(){function b(a){this.F=a}b.prototype={cb:/[a-z]+$/i,Ta:function(){return this.$b||(this.$b=this.F.match(this.cb)[0].toLowerCase())},ic:function(){var a=this.Vb,d;if(a===undefined){a=this.Ta();d=parseFloat(this.F,10);
a=this.Vb=a==="deg"?d:a==="rad"?d/Math.PI*180:a==="grad"?d/400*360:a==="turn"?d*360:0}return a}};return b}();e.Lb=function(){function b(c,f,g){if(g<0)g+=1;else if(g>1)g-=1;return 255*(6*g<1?c+(f-c)*g*6:2*g<1?f:3*g<2?c+(f-c)*(2/3-g)*6:c)}function a(c){this.F=c}var d={};a.Lc=/\s*rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(,\s*(\d+|\d*\.\d+))?\s*\)\s*/;a.xc=/\s*hsla?\(\s*(\d*\.?\d+)\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*(,\s*(\d+|\d*\.\d+))?\s*\)\s*/;a.Xa={aliceblue:"F0F8FF",antiquewhite:"FAEBD7",
aqua:"0FF",aquamarine:"7FFFD4",azure:"F0FFFF",beige:"F5F5DC",bisque:"FFE4C4",black:"000",blanchedalmond:"FFEBCD",blue:"00F",blueviolet:"8A2BE2",brown:"A52A2A",burlywood:"DEB887",cadetblue:"5F9EA0",chartreuse:"7FFF00",chocolate:"D2691E",coral:"FF7F50",cornflowerblue:"6495ED",cornsilk:"FFF8DC",crimson:"DC143C",cyan:"0FF",darkblue:"00008B",darkcyan:"008B8B",darkgoldenrod:"B8860B",darkgray:"A9A9A9",darkgreen:"006400",darkkhaki:"BDB76B",darkmagenta:"8B008B",darkolivegreen:"556B2F",darkorange:"FF8C00",
darkorchid:"9932CC",darkred:"8B0000",darksalmon:"E9967A",darkseagreen:"8FBC8F",darkslateblue:"483D8B",darkslategray:"2F4F4F",darkturquoise:"00CED1",darkviolet:"9400D3",deeppink:"FF1493",deepskyblue:"00BFFF",dimgray:"696969",dodgerblue:"1E90FF",firebrick:"B22222",floralwhite:"FFFAF0",forestgreen:"228B22",fuchsia:"F0F",gainsboro:"DCDCDC",ghostwhite:"F8F8FF",gold:"FFD700",goldenrod:"DAA520",gray:"808080",green:"008000",greenyellow:"ADFF2F",honeydew:"F0FFF0",hotpink:"FF69B4",indianred:"CD5C5C",indigo:"4B0082",
ivory:"FFFFF0",khaki:"F0E68C",lavender:"E6E6FA",lavenderblush:"FFF0F5",lawngreen:"7CFC00",lemonchiffon:"FFFACD",lightblue:"ADD8E6",lightcoral:"F08080",lightcyan:"E0FFFF",lightgoldenrodyellow:"FAFAD2",lightgreen:"90EE90",lightgrey:"D3D3D3",lightpink:"FFB6C1",lightsalmon:"FFA07A",lightseagreen:"20B2AA",lightskyblue:"87CEFA",lightslategray:"789",lightsteelblue:"B0C4DE",lightyellow:"FFFFE0",lime:"0F0",limegreen:"32CD32",linen:"FAF0E6",magenta:"F0F",maroon:"800000",mediumauqamarine:"66CDAA",mediumblue:"0000CD",
mediumorchid:"BA55D3",mediumpurple:"9370D8",mediumseagreen:"3CB371",mediumslateblue:"7B68EE",mediumspringgreen:"00FA9A",mediumturquoise:"48D1CC",mediumvioletred:"C71585",midnightblue:"191970",mintcream:"F5FFFA",mistyrose:"FFE4E1",moccasin:"FFE4B5",navajowhite:"FFDEAD",navy:"000080",oldlace:"FDF5E6",olive:"808000",olivedrab:"688E23",orange:"FFA500",orangered:"FF4500",orchid:"DA70D6",palegoldenrod:"EEE8AA",palegreen:"98FB98",paleturquoise:"AFEEEE",palevioletred:"D87093",papayawhip:"FFEFD5",peachpuff:"FFDAB9",
peru:"CD853F",pink:"FFC0CB",plum:"DDA0DD",powderblue:"B0E0E6",purple:"800080",red:"F00",rosybrown:"BC8F8F",royalblue:"4169E1",saddlebrown:"8B4513",salmon:"FA8072",sandybrown:"F4A460",seagreen:"2E8B57",seashell:"FFF5EE",sienna:"A0522D",silver:"C0C0C0",skyblue:"87CEEB",slateblue:"6A5ACD",slategray:"708090",snow:"FFFAFA",springgreen:"00FF7F",steelblue:"4682B4",tan:"D2B48C",teal:"008080",thistle:"D8BFD8",tomato:"FF6347",turquoise:"40E0D0",violet:"EE82EE",wheat:"F5DEB3",white:"FFF",whitesmoke:"F5F5F5",
yellow:"FF0",yellowgreen:"9ACD32"};a.prototype={parse:function(){if(!this.Ma){var c=this.F,f;if(f=c.match(a.Lc)){c=this.Fb(+f[1],+f[2],+f[3]);f=f[5]?+f[5]:1}else if(f=c.match(a.xc)){var g=f[1],h=f[2],i=f[3],j,n;c=Math.round;h/=100;i/=100;if(h){h=i<=0.5?i*(h+1):i+h-i*h;j=i*2-h;g=g%360/360;i=b(j,h,g+1/3);n=b(j,h,g);g=b(j,h,g-1/3)}else i=n=g=i*255;c={Kc:c(i),mc:c(n),cc:c(g)};c=this.Fb(c.Kc,c.mc,c.cc);f=f[5]?+f[5]:1}else{if(a.Xa.hasOwnProperty(f=c.toLowerCase()))c="#"+a.Xa[f];f=c==="transparent"?0:1}this.Ma=
c;this.Ub=f}},Fb:function(c,f,g){return"#"+(c<16?"0":"")+c.toString(16)+(f<16?"0":"")+f.toString(16)+(g<16?"0":"")+g.toString(16)},sb:function(c){this.parse();return this.Ma==="currentColor"?e.N(c.currentStyle.color).sb(c):this.Ma},ac:function(){this.parse();return this.Ub}};e.N=function(c){return d[c]||(d[c]=new a(c))};return a}();e.m=function(){function b(d){this.ta=d;this.ch=0;this.D=[];this.Y=0}var a=b.Ka={ba:1,ib:2,i:4,Nb:8,kb:16,ha:32,p:64,R:128,Fa:256,ka:512,Tb:1024,URL:2048};b.Ja=function(d,
c){this.e=d;this.a=c};b.Ja.prototype={Wa:function(){return this.e&a.p||this.e&a.R&&this.a==="0"},B:function(){return this.Wa()||this.e&a.ka}};b.prototype={Zc:/\s/,Fc:/^[\+\-]?(\d*\.)?\d+/,url:/^url\(\s*("([^"]*)"|'([^']*)'|([!#$%&*-~]*))\s*\)/i,yb:/^\-?[_a-z][\w-]*/i,Tc:/^("([^"]*)"|'([^']*)')/,vc:/^#([\da-f]{6}|[\da-f]{3})/i,Wc:{px:a.p,em:a.p,ex:a.p,mm:a.p,cm:a.p,"in":a.p,pt:a.p,pc:a.p,deg:a.ba,rad:a.ba,grad:a.ba},hc:{rgb:1,rgba:1,hsl:1,hsla:1},next:function(d){function c(p,u){p=new b.Ja(p,u);if(!d){n.D.push(p);
n.Y++}return p}function f(){n.Y++;return null}var g,h,i,j,n=this;if(this.Y<this.D.length)return this.D[this.Y++];for(;this.Zc.test(this.ta.charAt(this.ch));)this.ch++;if(this.ch>=this.ta.length)return f();h=this.ch;g=this.ta.substring(this.ch);i=g.charAt(0);switch(i){case "#":if(j=g.match(this.vc)){this.ch+=j[0].length;return c(a.i,j[0])}break;case '"':case "'":if(j=g.match(this.Tc)){this.ch+=j[0].length;return c(a.Tb,j[2]||j[3]||"")}break;case "/":case ",":this.ch++;return c(a.Fa,i);case "u":if(j=
g.match(this.url)){this.ch+=j[0].length;return c(a.URL,j[2]||j[3]||j[4]||"")}}if(j=g.match(this.Fc)){i=j[0];this.ch+=i.length;if(g.charAt(i.length)==="%"){this.ch++;return c(a.ka,i+"%")}if(j=g.substring(i.length).match(this.yb)){i+=j[0];this.ch+=j[0].length;return c(this.Wc[j[0].toLowerCase()]||a.Nb,i)}return c(a.R,i)}if(j=g.match(this.yb)){i=j[0];this.ch+=i.length;if(i.toLowerCase()in e.Lb.Xa||i==="currentColor"||i==="transparent")return c(a.i,i);if(g.charAt(i.length)==="("){this.ch++;if(i.toLowerCase()in
this.hc){g=function(p){return p&&p.e&a.R};j=function(p){return p&&p.e&(a.R|a.ka)};var o=function(p,u){return p&&p.a===u},l=function(){return n.next(1)};if((i.charAt(0)==="r"?j(l()):g(l()))&&o(l(),",")&&j(l())&&o(l(),",")&&j(l())&&(i==="rgb"||i==="hsa"||o(l(),",")&&g(l()))&&o(l(),")"))return c(a.i,this.ta.substring(h,this.ch));return f()}return c(a.kb,i)}return c(a.ha,i)}this.ch++;return c(a.ib,i)},j:function(){return this.D[this.Y-- -2]},all:function(){for(;this.next(););return this.D},$:function(d,
c){for(var f=[],g,h;g=this.next();){if(d(g)){h=true;this.j();break}f.push(g)}return c&&!h?null:f}};return b}();e.hb=function(b){this.d=b};e.hb.prototype={H:0,Ic:function(){var b=this.Na,a;return!b||(a=this.X())&&(b.x!==a.x||b.y!==a.y)},Pc:function(){var b=this.Na,a;return!b||(a=this.X())&&(b.g!==a.g||b.f!==a.f)},xb:function(){var b=this.d,a=b.getBoundingClientRect(),d=e.P===9;return{x:a.left,y:a.top,g:d?b.offsetWidth:a.right-a.left,f:d?b.offsetHeight:a.bottom-a.top}},X:function(){return this.H?this.oa||
(this.oa=this.xb()):this.xb()},uc:function(){return!!this.Na},va:function(){++this.H},Da:function(){if(!--this.H){if(this.oa)this.Na=this.oa;this.oa=null}}};(function(){function b(a){var d=e.na.Sa(a);return function(){if(this.H){var c=this.nb||(this.nb={});return d in c?c[d]:(c[d]=a.call(this))}else return a.call(this)}}e.k={H:0,xa:function(a){function d(c){this.d=c;this.mb=this.O()}e.wa(d.prototype,e.k,a);d.Zb={};return d},v:function(){var a=this.O(),d=this.constructor.Zb;return a?a in d?d[a]:(d[a]=
this.za(a)):null},O:b(function(){var a=this.d,d=this.constructor,c=a.style;a=a.currentStyle;var f=this.Pa,g=this.bb,h=d.Xb||(d.Xb=e.o+f);d=d.Yb||(d.Yb=e.Ia+g.charAt(0).toUpperCase()+g.substring(1));return c[d]||a.getAttribute(h)||c[g]||a.getAttribute(f)}),z:b(function(){return!!this.v()}),rb:b(function(){var a=this.O(),d=a!==this.mb;this.mb=a;return d}),V:b,va:function(){++this.H},Da:function(){--this.H||delete this.nb}}})();e.eb=e.k.xa({Pa:e.o+"background",bb:e.Ia+"Background",bc:{scroll:1,fixed:1,
local:1},Ba:{"repeat-x":1,"repeat-y":1,repeat:1,"no-repeat":1},Db:{"padding-box":1,"border-box":1,"content-box":1},Jc:{top:1,right:1,bottom:1,left:1,center:1},Qc:{contain:1,cover:1},Aa:{fa:"backgroundClip",i:"backgroundColor",K:"backgroundImage",ia:"backgroundOrigin",q:"backgroundPosition",s:"backgroundRepeat",ma:"backgroundSize"},za:function(b){function a(q){return q&&q.B()||q.e&n&&q.a in w}function d(q){return q&&(q.B()&&e.h(q.a)||q.a==="auto"&&"auto")}var c=this.d.currentStyle,f,g,h,i=e.m.Ka,j=
i.Fa,n=i.ha,o=i.i,l,p,u=0,w=this.Jc,k,m,r={I:[]};if(this.Qa()){f=new e.m(b);for(h={};g=f.next();){l=g.e;p=g.a;if(!h.w&&l&i.kb&&p==="linear-gradient"){k={Q:[],w:p};for(m={};g=f.next();){l=g.e;p=g.a;if(l&i.ib&&p===")"){m.color&&k.Q.push(m);k.Q.length>1&&e.wa(h,k);break}if(l&o){if(k.pa||k.Ua){g=f.j();if(g.e!==j)break;f.next()}m={color:e.N(p)};g=f.next();if(g.B())m.Cb=e.h(g.a);else f.j()}else if(l&i.ba&&!k.pa&&!m.color&&!k.Q.length)k.pa=new e.Kb(g.a);else if(a(g)&&!k.Ua&&!m.color&&!k.Q.length){f.j();
k.Ua=new e.ca(f.$(function(q){return!a(q)},false))}else if(l&j&&p===","){if(m.color){k.Q.push(m);m={}}}else break}}else if(!h.w&&l&i.URL){h.Ab=p;h.w="image"}else if(a(g)&&!h.T){f.j();h.T=new e.ca(f.$(function(q){return!a(q)},false))}else if(l&n)if(p in this.Ba&&!h.Va)h.Va=p;else if(p in this.Db&&!h.ra){h.ra=p;if((g=f.next())&&g.e&n&&g.a in this.Db)h.qa=g.a;else{h.qa=p;f.j()}}else if(p in this.bc&&!h.pb)h.pb=p;else return null;else if(l&o&&!r.color)r.color=e.N(p);else if(l&j&&p==="/"&&!h.sa&&h.T){g=
f.next();if(g.e&n&&g.a in this.Qc)h.sa=new e.da(g.a);else if(g=d(g)){l=d(f.next());if(!l){l=g;f.j()}h.sa=new e.da(g,l)}else return null}else if(l&j&&p===","&&h.w){h.ab=b.substring(u,f.ch-1);u=f.ch;r.I.push(h);h={}}else return null}if(h.w){h.ab=b.substring(u);r.I.push(h)}r.md=h.qa}else this.Ib(e.P<9?function(){var q=this.Aa,s=c[q.q+"X"],z=c[q.q+"Y"],B=c[q.K],E=c[q.i];if(E!=="transparent")r.color=e.N(E);if(B!=="none")r.I=[{w:"image",Ab:(new e.m(B)).next().a,Va:c[q.s],T:new e.ca((new e.m(s+" "+z)).all())}]}:
function(){var q=this.Aa,s=/\s*,\s*/,z=c[q.K].split(s),B=c[q.i],E,F,H,J,I,v;if(B!=="transparent")r.color=e.N(B);if((J=z.length)&&z[0]!=="none"){B=c[q.s].split(s);E=c[q.q].split(s);F=c[q.ia].split(s);H=c[q.fa].split(s);q=c[q.ma].split(s);r.I=[];for(s=0;s<J;s++)if((I=z[s])&&I!=="none"){v=q[s].split(" ");r.I.push({ab:I+" "+B[s]+" "+E[s]+" / "+q[s]+" "+F[s]+" "+H[s],w:"image",Ab:(new e.m(I)).next().a,Va:B[s],T:new e.ca((new e.m(E[s])).all()),ra:F[s],qa:H[s],sa:new e.da(v[0],v[1])})}}});return r.color||
r.I[0]?r:null},Ib:function(b){var a=e.P>8,d=this.Aa,c=this.d.runtimeStyle,f=c[d.K],g=c[d.i],h=c[d.s],i,j,n,o;if(f)c[d.K]="";if(g)c[d.i]="";if(h)c[d.s]="";if(a){i=c[d.fa];j=c[d.ia];o=c[d.q];n=c[d.ma];if(i)c[d.fa]="";if(j)c[d.ia]="";if(o)c[d.q]="";if(n)c[d.ma]=""}b=b.call(this);if(f)c[d.K]=f;if(g)c[d.i]=g;if(h)c[d.s]=h;if(a){if(i)c[d.fa]=i;if(j)c[d.ia]=j;if(o)c[d.q]=o;if(n)c[d.ma]=n}return b},O:e.k.V(function(){return this.Qa()||this.Ib(function(){var b=this.d.currentStyle,a=this.Aa;return b[a.i]+" "+
b[a.K]+" "+b[a.s]+" "+b[a.q+"X"]+" "+b[a.q+"Y"]})}),Qa:e.k.V(function(){var b=this.d;return b.style[this.bb]||b.currentStyle.getAttribute(this.Pa)}),nc:function(b,a,d,c){var f=this.d,g=a.X();a=g.g;g=g.f;if(b!=="border-box")if((d=d.v())&&(d=d.aa)){a-=d.l.c(f)+d.l.c(f);g-=d.t.c(f)+d.b.c(f)}if(b==="content-box")if(b=c.v()){a-=b.l.c(f)+b.l.c(f);g-=b.t.c(f)+b.b.c(f)}return{g:a,f:g}},Bc:function(){var b=0;if(e.zb<7){b=this.d;b=""+(b.style[e.Ia+"PngFix"]||b.currentStyle.getAttribute(e.o+"png-fix"))==="true"}return b},
z:e.k.V(function(){return(this.Qa()||this.Bc())&&!!this.v()})});e.gb=e.k.xa({Oc:["Top","Right","Bottom","Left"],Dc:{thin:"1px",medium:"3px",thick:"5px"},za:function(){var b={},a={},d={},c=false,f=true,g=true,h=true;this.Jb(function(){for(var i=this.d.currentStyle,j=0,n,o,l,p,u,w,k;j<4;j++){l=this.Oc[j];k=l.charAt(0).toLowerCase();n=a[k]=i["border"+l+"Style"];o=i["border"+l+"Color"];l=i["border"+l+"Width"];if(j>0){if(n!==p)g=false;if(o!==u)f=false;if(l!==w)h=false}p=n;u=o;w=l;d[k]=e.N(o);l=b[k]=e.h(a[k]===
"none"?"0":this.Dc[l]||l);if(l.c(this.d)>0)c=true}});return c?{aa:b,Bd:a,nd:d,Ed:h,od:f,Cd:g}:null},O:e.k.V(function(){var b=this.d,a=b.currentStyle,d;b.tagName in e.Uc&&b.offsetParent.currentStyle.borderCollapse==="collapse"||this.Jb(function(){d=a.borderWidth+"|"+a.borderStyle+"|"+a.borderColor});return d}),Jb:function(b){var a=this.d.runtimeStyle,d=a.borderWidth,c=a.borderColor;if(d)a.borderWidth="";if(c)a.borderColor="";b=b.call(this);if(d)a.borderWidth=d;if(c)a.borderColor=c;return b}});e.fb=
e.k.xa({Pa:"border-image",bb:"borderImage",Ba:{stretch:1,round:1,repeat:1,space:1},za:function(b){var a=null,d,c,f,g,h,i,j=0,n=e.m.Ka,o=n.ha,l=n.R,p=n.ka;if(b){d=new e.m(b);a={};for(var u=function(m){return m&&m.e&n.Fa&&m.a==="/"},w=function(m){return m&&m.e&o&&m.a==="fill"},k=function(){g=d.$(function(m){return!(m.e&(l|p))});if(w(d.next())&&!a.fill)a.fill=true;else d.j();if(u(d.next())){j++;h=d.$(function(m){return!m.B()&&!(m.e&o&&m.a==="auto")});if(u(d.next())){j++;i=d.$(function(m){return!m.Wa()})}}else d.j()};b=
d.next();){c=b.e;f=b.a;if(c&(l|p)&&!g){d.j();k()}else if(w(b)&&!a.fill){a.fill=true;k()}else if(c&o&&this.Ba[f]&&!a.repeat){a.repeat={f:f};if(b=d.next())if(b.e&o&&this.Ba[b.a])a.repeat.db=b.a;else d.j()}else if(c&n.URL&&!a.src)a.src=f;else return null}if(!a.src||!g||g.length<1||g.length>4||h&&h.length>4||j===1&&h.length<1||i&&i.length>4||j===2&&i.length<1)return null;if(!a.repeat)a.repeat={f:"stretch"};if(!a.repeat.db)a.repeat.db=a.repeat.f;b=function(m,r){return{t:r(m[0]),r:r(m[1]||m[0]),b:r(m[2]||
m[0]),l:r(m[3]||m[1]||m[0])}};a.slice=b(g,function(m){return e.h(m.e&l?m.a+"px":m.a)});if(h&&h[0])a.aa=b(h,function(m){return m.B()?e.h(m.a):m.a});if(i&&i[0])a.xd=b(i,function(m){return m.Wa()?e.h(m.a):m.a})}return a}});e.lb=e.k.xa({za:function(b){b=new e.m(b);for(var a=[],d;(d=b.next())&&d.B();)a.push(e.h(d.a));return a.length>0&&a.length<5?{t:a[0],r:a[1]||a[0],b:a[2]||a[0],l:a[3]||a[1]||a[0]}:null},O:e.k.V(function(){var b=this.d,a=b.runtimeStyle,d=a.padding;if(d)a.padding="";b=b.currentStyle.padding;
if(d)a.padding=d;return b})});e.la={Za:function(b){function a(d,c,f,g){this.d=d;this.qb=c;this.C=f;this.parent=g}e.wa(a.prototype,e.la,b);return a},Ya:function(){return false},Eb:e.ua,Hb:function(){this.z()?this.tb():this.n()},wc:function(){this.d.runtimeStyle.borderColor="transparent"},n:function(){}};e.Qb=e.la.Za({Xc:e.ua,Hb:e.ua,Dd:e.ua,Gc:/^,+|,+$/g,Ac:/,+/g,Ca:function(b,a){(this.La||(this.La=[]))[b]=a||void 0},vb:function(){var b=this.La,a;if(b&&(a=b.join(",").replace(this.Gc,"").replace(this.Ac,
","))!==this.Wb)this.Wb=this.d.runtimeStyle.background=a},n:function(){this.d.runtimeStyle.background="";delete this.La}});e.Ob=e.la.Za({S:1,Ya:function(){return this.C.M.rb()},z:function(){var b=this.C;return b.M.z()||b.u.z()},tb:function(){var b=this.C,a=b.M,d=a.v(),c,f,g=0,h,i;if(d){c=[];if(f=d.I)for(;h=f[g++];)if(h.w==="linear-gradient"){i=a.nc(c.ra,this.qb,b.U,b.ya);i=(h.sa||e.da.Mb).c(this.d,i.g,i.f,i.g,i.f);c.push("url(data:image/svg+xml,"+escape(this.qc(h,i.g,i.f))+") "+this.dc(h.T)+" / "+
i.g+"px "+i.f+"px "+(h.pb||"")+" "+(h.ra||"")+" "+(h.qa||""))}else c.push(h.ab);d.color&&c.push(d.color.F);this.parent.Ca(this.S,c.join(","))}},dc:function(b){return b?b.D.map(function(a){return a.a}).join(" "):"0 0"},qc:function(b,a,d){var c=this.d,f=b.Q,g=f.length,h=e.Ea.oc(c,a,d,b);b=h.Rc;var i=h.Sc,j=h.kc,n=h.lc;h=h.Cc;var o,l,p,u,w;o=[];for(l=0;l<g;l++)o.push(f[l].Cb?f[l].Cb.c(c,h):l===0?0:l===g-1?h:null);for(l=1;l<g;l++)if(o[l]===null){u=o[l-1];p=l;do w=o[++p];while(w===null);o[l]=u+(w-u)/(p-
l+1)}a=['<svg width="'+a+'" height="'+d+'" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" gradientUnits="userSpaceOnUse" x1="'+b/a*100+'%" y1="'+i/d*100+'%" x2="'+j/a*100+'%" y2="'+n/d*100+'%">'];for(l=0;l<g;l++)a.push('<stop offset="'+o[l]/h+'" stop-color="'+f[l].color.sb(c)+'" stop-opacity="'+f[l].color.ac()+'"/>');a.push('</linearGradient></defs><rect width="100%" height="100%" fill="url(#g)"/></svg>');return a.join("")},n:function(){this.parent.Ca(this.S)}});e.Pb=e.la.Za({s:"repeat",
Sb:"stretch",Rb:"round",S:0,Ya:function(){return this.C.u.rb()},z:function(){return this.C.u.z()},tb:function(){var b=this,a=b.C.u.v(),d=b.C.U.v(),c=b.qb.X(),f=a.repeat,g=f.f,h=f.db,i=b.d,j=0;e.na.$c(a.src,function(n){function o(V,Q,W,X,Y,R,t,A,C,K){y.push('<pattern patternUnits="userSpaceOnUse" id="pattern'+S+'" x="'+(g===m?V+W/2-C/2:V)+'" y="'+(h===m?Q+X/2-K/2:Q)+'" width="'+C+'" height="'+K+'"><svg width="'+C+'" height="'+K+'" viewBox="'+Y+" "+R+" "+t+" "+A+'" preserveAspectRatio="none"><image xlink:href="'+
k+'" x="0" y="0" width="'+u+'" height="'+w+'" /></svg></pattern>');P.push('<rect x="'+V+'" y="'+Q+'" width="'+W+'" height="'+X+'" fill="url(#pattern'+S+')" />');S++}var l=c.g,p=c.f,u=n.g,w=n.f,k=b.yc(a.src,u,w),m=b.s,r=b.Sb;n=b.Rb;var q=Math.ceil,s=e.h("0"),z=a.aa||(d?d.aa:{t:s,r:s,b:s,l:s});s=z.t.c(i);var B=z.r.c(i),E=z.b.c(i);z=z.l.c(i);var F=a.slice,H=F.t.c(i),J=F.r.c(i),I=F.b.c(i);F=F.l.c(i);var v=l-z-B,M=p-s-E,T=u-F-J,N=w-H-I,G=g===r?v:T*s/H,D=h===r?M:N*B/J,x=g===r?v:T*E/I;r=h===r?M:N*z/F;var y=
[],P=[],S=0;if(g===n){G-=(G-(v%G||G))/q(v/G);x-=(x-(v%x||x))/q(v/x)}if(h===n){D-=(D-(M%D||D))/q(M/D);r-=(r-(M%r||r))/q(M/r)}n=['<svg width="'+l+'" height="'+p+'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'];o(0,0,z,s,0,0,F,H,z,s);o(z,0,v,s,F,0,T,H,G,s);o(l-B,0,B,s,u-J,0,J,H,B,s);o(0,s,z,M,0,H,F,N,z,r);if(a.fill)o(z,s,v,M,F,H,T,N,G||x||T,r||D||N);o(l-B,s,B,M,u-J,H,J,N,B,D);o(0,p-E,z,E,0,w-I,F,I,z,E);o(z,p-E,v,E,F,w-I,T,I,x,E);o(l-B,p-E,B,E,u-J,w-I,J,I,B,E);n.push("<defs>"+
y.join("\n")+"</defs>"+P.join("\n")+"</svg>");b.parent.Ca(b.S,"url(data:image/svg+xml,"+escape(n.join(""))+") no-repeat border-box border-box");j&&b.parent.vb()},b);j=1},yc:function(){var b={};return function(a,d,c){var f=b[a],g;if(!f){f=new Image;g=O.createElement("canvas");f.src=a;g.width=d;g.height=c;g.getContext("2d").drawImage(f,0,0);f=b[a]=g.toDataURL()}return f}}(),Eb:function(){if(this.z()){var b=this.d,a=b.runtimeStyle,d=this.C.u.v().aa;a.borderStyle="solid";if(d){a.borderTopWidth=d.t.c(b)+
"px";a.borderRightWidth=d.r.c(b)+"px";a.borderBottomWidth=d.b.c(b)+"px";a.borderLeftWidth=d.l.c(b)+"px"}this.wc()}},n:function(){var b=this.d.runtimeStyle;this.parent.Ca(this.S);b.borderColor=b.borderStyle=b.borderWidth=""}});e.jb=function(){function b(k,m){k.className+=" "+m}function a(k){var m=w.slice.call(arguments,1),r=m.length;setTimeout(function(){if(k)for(;r--;)b(k,m[r])},0)}function d(k){var m=w.slice.call(arguments,1),r=m.length;setTimeout(function(){if(k)for(;r--;){var q=m[r];q=u[q]||(u[q]=
new RegExp("\\b"+q+"\\b","g"));k.className=k.className.replace(q,"")}},0)}function c(k){function m(){if(!V){var t,A,C=e.P,K=k.currentStyle,L=K.getAttribute(g)==="true",$=K.getAttribute(i)!=="false";R=K.getAttribute(h);R=C>7?R!=="false":R==="true";if(!S){S=1;k.runtimeStyle.zoom=1;K=k;for(var Z=1;K=K.previousSibling;)if(K.nodeType===1){Z=0;break}Z&&b(k,l)}x.va();if(L&&(A=x.X())&&(t=O.documentElement||O.body)&&(A.y>t.clientHeight||A.x>t.clientWidth||A.y+A.f<0||A.x+A.g<0)){if(!X){X=1;e.Ha.J(m)}}else{V=
1;X=S=0;e.Ha.Z(m);if(C===9){y={M:new e.eb(k),u:new e.fb(k),U:new e.gb(k),ya:new e.lb(k)};P=[y.M,y.U,y.u,y.ya];D=new e.Qb(k,x,y);t=[new e.Ob(k,x,y,D),new e.Pb(k,x,y,D)]}else{y={M:new e.eb(k),U:new e.gb(k),u:new e.fb(k),ec:new e.cd(k),fc:new e.fd(k),ya:new e.lb(k),Yc:new e.kd(k)};P=[y.M,y.U,y.u,y.ec,y.fc,y.ya,y.Yc];D=new e.jd(k,x,y);t=[new e.ed(k,x,y,D),new e.ad(k,x,y,D),new e.dd(k,x,y,D),new e.bd(k,x,y,D)];k.tagName==="IMG"&&t.push(new e.gd(k,x,y,D));D.ld=t}G=[D].concat(t);if(t=k.currentStyle.getAttribute(e.o+
"watch-ancestors")){t=parseInt(t,10);A=0;for(L=k.parentNode;L&&(t==="NaN"||A++<t);){v(L,"onpropertychange",I);v(L,"onmouseenter",z);v(L,"onmouseleave",B);v(L,"onmousedown",E);if(L.tagName in e.wb){v(L,"onfocus",H);v(L,"onblur",J)}L=L.parentNode}}if(R){e.ga.J(q);e.ga.Mc()}q(0,1)}if(!Q){Q=1;C<9&&v(k,"onmove",r);v(k,"onresize",r);v(k,"onpropertychange",s);v(k,"onmouseenter",z);v(k,"onmouseleave",B);$&&v(k,"onmousedown",E);if(k.tagName in e.wb){v(k,"onfocus",H);v(k,"onblur",J)}e.ja.J(r);e.G.J(M)}x.Da()}}
function r(){x&&x.uc()&&q()}function q(t,A){if(!Y)if(V){x.va();for(var C=P.length;C--;)P[C].va();var K=G.length,L=x.Pc();for(C=0;C<K;C++)G[C].Eb();for(C=0;C<K;C++)if(A||L||t&&G[C].Ya())G[C].Hb();D.vb();if(A||D.wd&&x.Ic())D.Xc();for(t=P.length;t--;)P[t].Da();x.Da()}else S||m()}function s(){var t=event;t&&t.propertyName in p||q(1)}function z(){a(k,j)}function B(){d(k,j,n)}function E(){a(k,n);e.Ga.J(F)}function F(){d(k,n);e.Ga.Z(F)}function H(){a(k,o)}function J(){d(k,o)}function I(){var t=event.propertyName;
if(t==="className"||t==="id")s()}function v(t,A,C){t.attachEvent(A,C);W.push([t,A,C])}function M(){if(Q){for(var t=W.length,A;t--;){A=W[t];A[0].detachEvent(A[1],A[2])}e.G.Z(M);Q=0;W=[]}}function T(){if(!Y){var t,A;M();Y=1;if(G){t=0;for(A=G.length;t<A;t++){G[t].ud=1;G[t].n()}}R&&e.ga.Z(q);e.ja.Z(q);G=x=y=P=k=null;N.ub=N=0}}var N=this,G,D,x=new e.hb(k),y,P,S,V,Q,W=[],X,Y,R;N.ub=k;N.zc=m;N.n=T}var f={},g=e.o+"lazy-init",h=e.o+"poll",i=e.o+"track-active",j=e.ea+"hover",n=e.ea+"active",o=e.ea+"focus",
l=e.ea+"first-child",p={background:1,bgColor:1,display:1},u={},w=[];c.rc=function(k){var m=k.uniqueID;return f[m]||(f[m]=new c(k))};c.n=function(k){k=k.uniqueID;var m=f[k];if(m){m.n();delete f[k]}};c.rd=function(){var k=[],m;if(f){for(var r in f)if(f.hasOwnProperty(r)){m=f[r];k.push(m.ub);m.n()}f={}}return k};return c}();e.version="2.0beta1-SNAPSHOT";e.supportsVML=e.Gb;e.attach=function(b){if(e.P===9||e.P<9&&e.Gb)e.jb.rc(b).zc()};e.detach=function(b){e.jb.n(b)}})(window,document);