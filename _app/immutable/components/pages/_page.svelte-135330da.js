import{S as st,i as rt,s as at,k as z,l as S,m as _,h as v,b as T,J as nt,B as R,a as G,w as ht,q as F,K as ot,c as I,x as lt,r as $,n as d,p as K,E as y,y as ct,f as ut,t as ft,z as pt}from"../../chunks/index-4a96e512.js";/**!
 * Sparticles - Lightweight, High Performance Particles in Canvas
 * @version 1.3.1
 * @license MPL-2.0
 * @author simeydotme <simey.me@gmail.com>
 * @website http://sparticlesjs.dev
 * @repository https://github.com/simeydotme/sparticles.git
 */function et(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),i.push.apply(i,s)}return i}function it(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?et(Object(i),!0).forEach(function(s){dt(t,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):et(Object(i)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(i,s))})}return t}function dt(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var gt=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(){},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:60;this.fps=i,this.handler=e;var s=0;this.start=function(){var r=this;if(!this.started){var n=performance.now(),a=1e3/this.fps,h=0,o=function c(l){var f=l-n;s=requestAnimationFrame(c),f>=a-h&&(r.handler(f),n=l-f%a)};s=requestAnimationFrame(o),this.started=!0}},this.stop=function(){cancelAnimationFrame(s),this.started=!1}},U=function(e){return[Math.cos(j(e-90)),Math.sin(j(e-90))]},Z=function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(i,Math.min(s,e))},j=function(e){return e*Math.PI/180},m=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Math.random();return i<=e?s=e:(e!==0||i!==1)&&i>e&&(s=s*(i-e)+e),s},L=function(e){return e[Math.floor(m(0,e.length))]},vt=function(){var e=O(m(0,360)),i=O(m(90,100)),s=O(m(45,85));return"hsl(".concat(e,",").concat(i,"%,").concat(s,"%)")},q=function(e){return e>m()},O=function(e){return .5+e|0},u=function(e){return e?(this.canvas=e.canvas,this.settings=e.settings,this.colors=e.colors,this.shapes=e.shapes,this.images=e.images,this.styles=e.styles,this.ctx=e.canvas.getContext("2d"),this.setup(),this.init()):console.warn("Invalid parameters given to Sparticle()",arguments),this};u.prototype.setup=function(){var t=this.settings;this.frame=0,this.frameoffset=O(m(0,360)),this.size=O(m(t.minSize,t.maxSize)),this.da=this.getAlphaDelta(),this.dx=this.getDeltaX(),this.dy=this.getDeltaY(),this.dd=this.getDriftDelta(),this.dr=this.getRotationDelta(),this.color=this.getColor(),this.shape=this.getShape(),this.image=this.getImage(),this.style=this.getStyle(),this.rotation=t.rotate?j(m(0,360)):0,this.vertical=t.direction>150&&t.direction<210||t.direction>330&&t.direction<390||t.direction>-30&&t.direction<30,this.horizontal=t.direction>60&&t.direction<120||t.direction>240&&t.direction<300};u.prototype.init=function(){var t=this.settings,e=this.canvas;this.alpha=0,(t.speed>0||t.alphaSpeed===0)&&(this.alpha=m(t.minAlpha,t.maxAlpha)),t.bounce?(this.px=O(m(2,e.width-this.size-2)),this.py=O(m(2,e.height-this.size-2))):(this.px=O(m(-this.size*2,e.width+this.size)),this.py=O(m(-this.size*2,e.height+this.size)))};u.prototype.reset=function(){this.setup(),this.py<0?this.py=this.canvas.height+this.size*2:this.py>this.canvas.height&&(this.py=0-this.size*2),this.px<0?this.px=this.canvas.width+this.size*2:this.px>this.canvas.width&&(this.px=0-this.size*2)};u.prototype.bounce=function(){var t=this.settings;t.direction,(this.py<=0||this.py+this.size>=this.canvas.height)&&(this.dy=-this.dy,this.horizontal&&(this.dd=-this.dd)),(this.px<=0||this.px+this.size>=this.canvas.width)&&(this.dx=-this.dx,this.vertical&&(this.dd=-this.dd))};u.prototype.isOffCanvas=function(){var t=0-this.size*2,e=this.canvas.height+this.size*2,i=this.canvas.width+this.size*2;return this.px<t||this.px>i||this.py<t||this.py>e};u.prototype.isTouchingEdge=function(){var t=0,e=this.canvas.height-this.size,i=this.canvas.width-this.size;return this.px<t||this.px>i||this.py<t||this.py>e};u.prototype.getColor=function(){return this.settings.color==="random"?L(this.colors):Array.isArray(this.settings.color)?L(this.settings.color):this.settings.color};u.prototype.getShape=function(){return this.settings.shape==="random"?L(this.shapes):Array.isArray(this.settings.shape)?L(this.settings.shape):this.settings.shape};u.prototype.getImage=function(){return Array.isArray(this.settings.imageUrl)?L(this.settings.imageUrl):this.settings.imageUrl};u.prototype.getStyle=function(){return L(this.styles)};u.prototype.getDelta=function(){var t=this.settings.speed*.1;return this.settings.speed&&this.settings.parallax?t+this.size*this.settings.parallax/50:t};u.prototype.getDeltaVariance=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,e=this.settings.speed||10;return t>0?m(-t,t)*e/100:0};u.prototype.getDeltaX=function(){var t=this.getDelta(),e=this.getDeltaVariance(this.settings.xVariance);return U(this.settings.direction)[0]*t+e};u.prototype.getDeltaY=function(){var t=this.getDelta(),e=this.getDeltaVariance(this.settings.yVariance);return U(this.settings.direction)[1]*t+e};u.prototype.getAlphaDelta=function(){var t=this.settings.alphaVariance,e=m(1,t+1);return q(1/2)&&(e=-e),e};u.prototype.getDriftDelta=function(){return this.settings.drift?m(this.settings.drift-this.settings.drift/2,this.settings.drift+this.settings.drift/2):0};u.prototype.getRotationDelta=function(){var t=0;return this.settings.rotate&&this.settings.rotation&&(t=j(m(.5,1.5)*this.settings.rotation),q(1/2)&&(t=-t)),t};u.prototype.update=function(){return this.frame+=1,this.updatePosition(),this.updateAlpha(),this};u.prototype.updateAlpha=function(){return this.settings.alphaSpeed>0&&(this.settings.twinkle?this.alpha=this.updateTwinkle():this.alpha=this.updateFade()),this.alpha};u.prototype.updateFade=function(){var t=this.da/1e3*this.settings.alphaSpeed*.5,e=this.alpha+t,i=this.da>0&&e>this.settings.maxAlpha,s=this.da<0&&e<this.settings.minAlpha;return(i||s)&&(this.da=-this.da,e=this.settings.maxAlpha,s&&(e=this.settings.minAlpha)),e};u.prototype.updateTwinkle=function(){var t=this.alpha,e=Math.abs(this.da),i=t>this.settings.maxAlpha,s=t<this.settings.minAlpha,r=e/1e3*this.settings.alphaSpeed*.5,n=q(1/30),a=q(1/30);return this.resettingTwinkle?t+=r*5:n?t+=r*50:a?t-=r*25:t-=r,s?(this.resettingTwinkle=!0,t=this.settings.minAlpha):i&&(this.resettingTwinkle=!1,t=this.settings.maxAlpha),t};u.prototype.updatePosition=function(){if(this.settings.bounce&&this.isTouchingEdge())this.bounce();else if(this.isOffCanvas()){this.reset();return}this.px+=this.dx,this.py+=this.dy,this.updateDrift(),this.updateRotation()};u.prototype.updateRotation=function(){this.settings.rotate&&this.settings.rotation&&(this.rotation+=this.dr)};u.prototype.updateDrift=function(){var t=this.settings;t.direction,t.drift&&t.speed&&(this.vertical?this.px+=U(this.frame+this.frameoffset)[0]*this.dd/(this.getDelta()*15):this.horizontal&&(this.py+=U(this.frame+this.frameoffset)[1]*this.dd/(this.getDelta()*15)))};u.prototype.render=function(t){var e;this.shape!=="image"?e=t[this.color][this.shape][this.style]:e=t[this.color][this.shape][this.image];var i=e.width,s=this.size/i,r=this.px/s,n=this.py/s;return this.ctx.globalAlpha=Z(this.alpha,0,1),this.renderRotate(),this.ctx.transform(s,0,0,s,0,0),this.ctx.drawImage(e,0,0,i,i,r,n,i,i),this.ctx.setTransform(1,0,0,1,0,0),this};u.prototype.renderRotate=function(){if(this.shape!=="circle"&&this.settings.rotate){var t=this.px+this.size/2,e=this.py+this.size/2;this.ctx.translate(t,e),this.ctx.rotate(this.rotation),this.ctx.translate(-t,-e)}};var p=function(e,i,s,r){arguments.length>=1&&!(arguments[0]instanceof HTMLElement)&&(i=arguments[0],s=arguments[1],r=arguments[2],e=void 0),s&&!r&&(r=s);var n={alphaSpeed:10,alphaVariance:1,bounce:!1,color:"random",randomColor:vt,randomColorCount:3,composition:"source-over",count:50,direction:180,drift:1,glow:0,imageUrl:"",maxAlpha:1,maxSize:10,minAlpha:0,minSize:1,parallax:1,rotate:!0,rotation:1,shape:"circle",speed:10,style:"fill",twinkle:!1,xVariance:2,yVariance:2};return this.el=e||document.body,this.settings=it(it({},n),i),this.resizable=!s&&!r,this.width=this.resizable?this.el.clientWidth:s,this.height=this.resizable?this.el.clientHeight:r,this.init=function(){var a=this;return this.sparticles=[],this.colors=this.getColorArray(),this.shapes=this.getShapeArray(),this.styles=this.getStyleArray(),this.imageUrls=this.getImageArray(),this.setupMainCanvas(),this.setupOffscreenCanvasses(function(){a.createSparticles(),a.start()}),window.addEventListener("resize",this),this},this.handleEvent=function(a){var h=this;a.type==="resize"&&(clearTimeout(this.resizeTimer),this.resizeTimer=setTimeout(function(){h.resizable&&(h.width=h.el.clientWidth,h.height=h.el.clientHeight,h.setCanvasSize().resetSparticles())},200))},this.start=function(){var a=this;return this.loop||(this.loop=new gt(function(h){a.drawFrame(h)})),this.loop.start(),this},this.stop=function(){return this.loop.stop(),this},this.destroy=function(){this.stop(),this.el.removeChild(this.canvas),window.removeEventListener("resize",this);for(var a in this)this.hasOwnProperty(a)&&delete this[a];return this},this.setCanvasSize=function(a,h){return a&&(this.resizable=!1),this.width=a||this.width,this.height=h||this.height,this.canvas.width=this.width,this.canvas.height=this.height,this},this.resetSparticles=this.createSparticles=function(){this.sparticles=[],this.ctx.globalCompositeOperation=this.settings.composition;for(var a=0;a<this.settings.count;a++)this.sparticles.push(new u(this,a));return this.sort(),this.sparticles},this.sort=function(){this.settings.parallax&&this.sparticles.sort(function(a,h){return a.size-h.size})},this.init()};p.prototype.getColorArray=function(){var t=Array.isArray(this.settings.color)?this.settings.color:[this.settings.color],e=t.some(function(s){return s==="random"});if(e)for(var i=0;i<this.settings.randomColorCount;i++)t[i]=this.settings.randomColor(i,this.settings.randomColorCount);return t};p.prototype.getShapeArray=function(){var t=Array.isArray(this.settings.shape)?this.settings.shape:[this.settings.shape],e=t.some(function(i){return i==="random"});return e&&(t=["square","circle","triangle"]),t};p.prototype.getImageArray=function(){return Array.isArray(this.settings.imageUrl)?this.settings.imageUrl:[this.settings.imageUrl]};p.prototype.getStyleArray=function(){var t=this.settings.style;return t!=="fill"&&t!=="stroke"?t=["fill","stroke"]:t=[t],t};p.prototype.setupMainCanvas=function(){return this.canvas=document.createElement("canvas"),this.canvas.setAttribute("class","sparticles"),this.ctx=this.canvas.getContext("2d"),this.setCanvasSize(),this.el.appendChild(this.canvas),this.canvas};p.prototype.setupOffscreenCanvasses=function(t){var e=this,i=this.colors.filter(function(l,f){return e.colors.indexOf(l)===f}),s=this.shapes.filter(function(l,f){return e.shapes.indexOf(l)===f}),r=this.styles.filter(function(l,f){return e.styles.indexOf(l)===f}),n=this.imageUrls.filter(function(l,f){return e.imageUrls.indexOf(l)===f}),a=i.length*n.length,h=i.length*s.length*r.length,o=0,c=0;this.canvasses=this.canvasses||{},i.forEach(function(l){e.canvasses[l]=e.canvasses[l]||{},s.forEach(function(f){e.canvasses[l][f]=e.canvasses[l][f]||{},f==="image"?n.forEach(function(x,C){var D=new Image,E=document.createElement("canvas");e.canvasses[l][f][x]=E,D.onload=function(){o++,e.drawOffscreenCanvasForImage(D,l,E),t&&o===a&&t()},D.onerror=function(){console.error("failed to load source image: ",x)},D.src=x}):r.forEach(function(x){var C=document.createElement("canvas");e.canvasses[l][f][x]=C,c++,e.drawOffscreenCanvas(f,x,l,C),t&&c===h&&t()})})})};p.prototype.getGlowSize=function(t){return this.settings.glow};p.prototype.getLineSize=function(t){return Z(t/20,1,5)};p.prototype.getOffscreenCanvasSize=function(){return Z(this.settings.maxSize,this.settings.minSize,this.settings.maxSize)};p.prototype.renderStyle=function(t,e,i,s){s==="fill"?t.fillStyle=e:(t.lineWidth=i,t.strokeStyle=e)};p.prototype.renderGlow=function(t,e,i){var s=this.getGlowSize(i)/2;t.shadowColor=e,t.shadowBlur=s};p.prototype.renderColor=function(t,e,i){e==="fill"?i?t.fill(i):t.fill():i?t.stroke(i):t.stroke()};p.prototype.drawOffscreenCanvas=function(t,e,i,s){return this.offScreenCanvas[t].call(this,e,i,s)};p.prototype.offScreenCanvas={};p.prototype.offScreenCanvas.circle=function(t,e,i){var s=i.getContext("2d"),r=this.getOffscreenCanvasSize(),n=this.getLineSize(r),a=this.getGlowSize(r),h=r+n*2+a,o=t==="stroke"?r-n:r;return i.width=h,i.height=h,this.renderGlow(s,e,r),this.renderStyle(s,e,n,t),s.beginPath(),s.ellipse(h/2,h/2,o/2,o/2,0,0,360),this.renderColor(s,t),i};p.prototype.offScreenCanvas.square=function(t,e,i){var s=i.getContext("2d"),r=this.getOffscreenCanvasSize(),n=this.getLineSize(r),a=this.getGlowSize(r),h=r+n*2+a,o=t==="stroke"?r-n:r;return i.width=h,i.height=h,this.renderGlow(s,e,r),this.renderStyle(s,e,n,t),s.beginPath(),s.rect(h/2-o/2,h/2-o/2,o,o),this.renderColor(s,t),i};p.prototype.offScreenCanvas.line=function(t,e,i){var s=i.getContext("2d"),r=this.getOffscreenCanvasSize()*1.5,n=this.getLineSize(r),a=this.getGlowSize(r),h=r+n*2+a,o=h/2-r/2,c=h/2-r/2;return i.width=h,i.height=h,this.renderGlow(s,e,r),s.lineWidth=n,s.strokeStyle=e,s.beginPath(),s.moveTo(o,c),s.lineTo(o+r,c+r),s.stroke(),s.closePath(),i};p.prototype.offScreenCanvas.triangle=function(t,e,i){var s=i.getContext("2d"),r=this.getOffscreenCanvasSize(),n=this.getLineSize(r),a=this.getGlowSize(r),h=r+n*2+a,o=t==="stroke"?r-n:r,c=o*(Math.sqrt(3)/2),l=h/2,f=h/2-o/2;return i.width=h,i.height=h,this.renderGlow(s,e,r),this.renderStyle(s,e,n,t),s.beginPath(),s.moveTo(l,f),s.lineTo(l-o/2,f+c),s.lineTo(l+o/2,f+c),s.closePath(),this.renderColor(s,t),i};p.prototype.offScreenCanvas.diamond=function(t,e,i){var s=100,r=new Path2D("M43,83.74,48.63,99a1.46,1.46,0,0,0,2.74,0L57,83.74A45.09,45.09,0,0,1,83.74,57L99,51.37a1.46,1.46,0,0,0,0-2.74L83.74,43A45.11,45.11,0,0,1,57,16.26L51.37,1a1.46,1.46,0,0,0-2.74,0L43,16.26A45.11,45.11,0,0,1,16.26,43L1,48.63a1.46,1.46,0,0,0,0,2.74L16.26,57A45.09,45.09,0,0,1,43,83.74Z"),n=i.getContext("2d"),a=this.getOffscreenCanvasSize(),h=this.getLineSize(a),o=this.getGlowSize(a),c=a+h*2+o,l=c/((s+o)*1.1);return i.width=c,i.height=c,this.renderGlow(n,e,a),this.renderStyle(n,e,h/l,t),n.scale(l,l),n.translate(s*.05+o*.5,s*.05+o*.5),this.renderColor(n,t,r),i};p.prototype.offScreenCanvas.star=function(t,e,i){var s=100,r=new Path2D("M99.86,36.45a2.94,2.94,0,0,0-2.37-2l-31-4.54L52.63,1.64a2.93,2.93,0,0,0-5.26,0L33.51,29.91l-31,4.54a3,3,0,0,0-2.37,2,3,3,0,0,0,.74,3l22.44,22L18,92.55A2.94,2.94,0,0,0,20.91,96a2.86,2.86,0,0,0,1.36-.34L50,81,77.73,95.66a2.91,2.91,0,0,0,3.08-.22A3,3,0,0,0,82,92.55l-5.3-31.07,22.44-22A3,3,0,0,0,99.86,36.45Z"),n=i.getContext("2d"),a=this.getOffscreenCanvasSize(),h=this.getLineSize(a),o=this.getGlowSize(a),c=a+h*2+o,l=c/((s+o)*1.1);return i.width=c,i.height=c,n.scale(l,l),this.renderGlow(n,e,a),this.renderStyle(n,e,h/l,t),n.translate(s*.05+o*.5,s*.05+o*.5),this.renderColor(n,t,r),i};p.prototype.drawOffscreenCanvasForImage=function(t,e,i){var s=t.width,r=i.getContext("2d");return i.width=s,i.height=s,r.drawImage(t,0,0,s,s,0,0,s,s),r.globalCompositeOperation="source-atop",r.fillStyle=e,r.fillRect(0,0,s,s),i};p.prototype.drawFrame=function(){this.ctx.clearRect(0,0,this.width,this.height);for(var t=0;t<this.sparticles.length;t++){var e=this.sparticles[t];e.update().render(this.canvasses)}return this.sort(),this.sparticles};function mt(t){let e,i,s;return{c(){e=z("main")},l(r){e=S(r,"MAIN",{});var n=_(e);n.forEach(v)},m(r,n){T(r,e,n),i||(s=nt(t[0].call(null,e)),i=!0)},p:R,i:R,o:R,d(r){r&&v(e),i=!1,s()}}}function yt(t){let e={count:150,color:"#555555",shape:"circle",speed:5,minSize:3,maxSize:5,alphaSpeed:0,yVariance:0,xVarience:0};function i(s){new p(s,e,2560,1080)}return[i]}class zt extends st{constructor(e){super(),rt(this,e,yt,mt,at,{})}}function St(t){let e,i,s,r,n,a,h,o,c,l,f,x,C,D,E,k,A,H,Y,w,W,M;return a=new zt({}),{c(){e=z("meta"),i=z("meta"),s=z("link"),r=G(),n=z("div"),ht(a.$$.fragment),h=G(),o=z("div"),c=z("div"),l=z("h1"),f=F("Genç geliştiriciler için genç bir topluluk."),x=G(),C=z("p"),D=F("Genç Yazılımcılar, 50'den fazla üyesiyle birlikte gelişen bir yazılımcı topluluğudur."),E=G(),k=z("div"),A=z("a"),H=F("Discord'da bize katıl →"),Y=G(),w=z("a"),W=F("Instagram'da bizi takip et →"),this.h()},l(g){const b=ot("svelte-8v4lqv",document.head);e=S(b,"META",{name:!0,content:!0}),i=S(b,"META",{name:!0,content:!0}),s=S(b,"LINK",{href:!0,rel:!0}),b.forEach(v),r=I(g),n=S(g,"DIV",{class:!0});var B=_(n);lt(a.$$.fragment,B),B.forEach(v),h=I(g),o=S(g,"DIV",{class:!0});var N=_(o);c=S(N,"DIV",{class:!0,style:!0});var P=_(c);l=S(P,"H1",{class:!0});var X=_(l);f=$(X,"Genç geliştiriciler için genç bir topluluk."),X.forEach(v),x=I(P),C=S(P,"P",{class:!0});var J=_(C);D=$(J,"Genç Yazılımcılar, 50'den fazla üyesiyle birlikte gelişen bir yazılımcı topluluğudur."),J.forEach(v),E=I(P),k=S(P,"DIV",{class:!0});var V=_(k);A=S(V,"A",{href:!0,target:!0,rel:!0,class:!0});var Q=_(A);H=$(Q,"Discord'da bize katıl →"),Q.forEach(v),Y=I(V),w=S(V,"A",{href:!0,target:!0,rel:!0,class:!0,style:!0});var tt=_(w);W=$(tt,"Instagram'da bizi takip et →"),tt.forEach(v),V.forEach(v),P.forEach(v),N.forEach(v),this.h()},h(){document.title="Genç Yazılımcılar",d(e,"name","description"),d(e,"content","Genç yazılımcılar için genç bir topluluk."),d(i,"name","author"),d(i,"content","Genç Yazılımcılar"),d(s,"href","https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;600&display=swap"),d(s,"rel","stylesheet"),d(n,"class","particles-container svelte-dudnt4"),d(l,"class","svelte-dudnt4"),d(C,"class","svelte-dudnt4"),d(A,"href","https://discord.gg/kEYXgAZndV"),d(A,"target","_blank"),d(A,"rel","noreferrer nofollow"),d(A,"class","button svelte-dudnt4"),d(w,"href","https://www.instagram.com/gyazilimcilar/"),d(w,"target","_blank"),d(w,"rel","noreferrer nofollow"),d(w,"class","button svelte-dudnt4"),K(w,"background","none"),K(w,"box-shadow","0px 0px 0px 2px white inset"),d(k,"class","links svelte-dudnt4"),d(c,"class","content-1 svelte-dudnt4"),K(c,"text-align","left"),d(o,"class","container")},m(g,b){y(document.head,e),y(document.head,i),y(document.head,s),T(g,r,b),T(g,n,b),ct(a,n,null),T(g,h,b),T(g,o,b),y(o,c),y(c,l),y(l,f),y(c,x),y(c,C),y(C,D),y(c,E),y(c,k),y(k,A),y(A,H),y(k,Y),y(k,w),y(w,W),M=!0},p:R,i(g){M||(ut(a.$$.fragment,g),M=!0)},o(g){ft(a.$$.fragment,g),M=!1},d(g){v(e),v(i),v(s),g&&v(r),g&&v(n),pt(a),g&&v(h),g&&v(o)}}}class xt extends st{constructor(e){super(),rt(this,e,null,St,at,{})}}export{xt as default};