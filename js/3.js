var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("easing.Back",["easing.Ease"],function(t){var n,e,i,o=_gsScope.GreenSockGlobals||_gsScope,s=o.com.greensock,r=2*Math.PI,u=Math.PI/2,p=s._class,c=function(n,e){var i=p("easing."+n,function(){},!0),o=i.prototype=new t;return o.constructor=i,o.getRatio=e,i},a=t.register||function(){},h=function(t,n,e,i){var o=p("easing."+t,{easeOut:new n,easeIn:new e,easeInOut:new i},!0);return a(o,t),o},_=function(t,n,e){this.t=t,this.v=n,e&&(this.next=e,e.prev=this,this.c=e.v-n,this.gap=e.t-t)},f=function(n,e){var i=p("easing."+n,function(t){this._p1=t||0===t?t:1.70158,this._p2=1.525*this._p1},!0),o=i.prototype=new t;return o.constructor=i,o.getRatio=e,o.config=function(t){return new i(t)},i},g=h("Back",f("BackOut",function(t){return(t-=1)*t*((this._p1+1)*t+this._p1)+1}),f("BackIn",function(t){return t*t*((this._p1+1)*t-this._p1)}),f("BackInOut",function(t){return 1>(t*=2)?.5*t*t*((this._p2+1)*t-this._p2):.5*((t-=2)*t*((this._p2+1)*t+this._p2)+2)})),w=p("easing.SlowMo",function(t,n,e){n=n||0===n?n:.7,null==t?t=.7:t>1&&(t=1),this._p=1!==t?n:0,this._p1=(1-t)/2,this._p2=t,this._p3=this._p1+this._p2,this._calcEnd=e===!0},!0),l=w.prototype=new t;return l.constructor=w,l.getRatio=function(t){var n=t+(.5-t)*this._p;return this._p1>t?this._calcEnd?1-(t=1-t/this._p1)*t:n-(t=1-t/this._p1)*t*t*t*n:t>this._p3?this._calcEnd?1-(t=(t-this._p3)/this._p1)*t:n+(t-n)*(t=(t-this._p3)/this._p1)*t*t*t:this._calcEnd?1:n},w.ease=new w(.7,.7),l.config=w.config=function(t,n,e){return new w(t,n,e)},n=p("easing.SteppedEase",function(t){t=t||1,this._p1=1/t,this._p2=t+1},!0),l=n.prototype=new t,l.constructor=n,l.getRatio=function(t){return 0>t?t=0:t>=1&&(t=.999999999),(this._p2*t>>0)*this._p1},l.config=n.config=function(t){return new n(t)},e=p("easing.RoughEase",function(n){n=n||{};for(var e,i,o,s,r,u,p=n.taper||"none",c=[],a=0,h=0|(n.points||20),f=h,g=n.randomize!==!1,w=n.clamp===!0,l=n.template instanceof t?n.template:null,M="number"==typeof n.strength?.4*n.strength:.4;--f>-1;)e=g?Math.random():1/h*f,i=l?l.getRatio(e):e,"none"===p?o=M:"out"===p?(s=1-e,o=s*s*M):"in"===p?o=e*e*M:.5>e?(s=2*e,o=.5*s*s*M):(s=2*(1-e),o=.5*s*s*M),g?i+=Math.random()*o-.5*o:f%2?i+=.5*o:i-=.5*o,w&&(i>1?i=1:0>i&&(i=0)),c[a++]={x:e,y:i};for(c.sort(function(t,n){return t.x-n.x}),u=new _(1,1,null),f=h;--f>-1;)r=c[f],u=new _(r.x,r.y,u);this._prev=new _(0,0,0!==u.t?u:u.next)},!0),l=e.prototype=new t,l.constructor=e,l.getRatio=function(t){var n=this._prev;if(t>n.t){for(;n.next&&t>=n.t;)n=n.next;n=n.prev}else for(;n.prev&&n.t>=t;)n=n.prev;return this._prev=n,n.v+(t-n.t)/n.gap*n.c},l.config=function(t){return new e(t)},e.ease=new e,h("Bounce",c("BounceOut",function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}),c("BounceIn",function(t){return 1/2.75>(t=1-t)?1-7.5625*t*t:2/2.75>t?1-(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)}),c("BounceInOut",function(t){var n=.5>t;return t=n?1-2*t:2*t-1,t=1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,n?.5*(1-t):.5*t+.5})),h("Circ",c("CircOut",function(t){return Math.sqrt(1-(t-=1)*t)}),c("CircIn",function(t){return-(Math.sqrt(1-t*t)-1)}),c("CircInOut",function(t){return 1>(t*=2)?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)})),i=function(n,e,i){var o=p("easing."+n,function(t,n){this._p1=t||1,this._p2=n||i,this._p3=this._p2/r*(Math.asin(1/this._p1)||0)},!0),s=o.prototype=new t;return s.constructor=o,s.getRatio=e,s.config=function(t,n){return new o(t,n)},o},h("Elastic",i("ElasticOut",function(t){return this._p1*Math.pow(2,-10*t)*Math.sin((t-this._p3)*r/this._p2)+1},.3),i("ElasticIn",function(t){return-(this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*r/this._p2))},.3),i("ElasticInOut",function(t){return 1>(t*=2)?-.5*this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*r/this._p2):.5*this._p1*Math.pow(2,-10*(t-=1))*Math.sin((t-this._p3)*r/this._p2)+1},.45)),h("Expo",c("ExpoOut",function(t){return 1-Math.pow(2,-10*t)}),c("ExpoIn",function(t){return Math.pow(2,10*(t-1))-.001}),c("ExpoInOut",function(t){return 1>(t*=2)?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))})),h("Sine",c("SineOut",function(t){return Math.sin(t*u)}),c("SineIn",function(t){return-Math.cos(t*u)+1}),c("SineInOut",function(t){return-.5*(Math.cos(Math.PI*t)-1)})),p("easing.EaseLookup",{find:function(n){return t.map[n]}},!0),a(o.SlowMo,"SlowMo","ease,"),a(e,"RoughEase","ease,"),a(n,"SteppedEase","ease,"),g},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();