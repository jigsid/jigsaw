(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[343],{7460:function(e,n,t){"use strict";t.r(n),t.d(n,{Armor:function(){return L}});var r=t(7568),i=t(1799),a=t(9396),u=t(9534),o=t(828),c=t(655),s=t(5893),l="/_next/static/media/volkihar-cube-nx.6150c9af.jpg",f="/_next/static/media/volkihar-cube-ny.f2c25620.jpg",d="/_next/static/media/volkihar-cube-nz.094dd0b3.jpg",v="/_next/static/media/volkihar-cube-px.cb007f0e.jpg",m="/_next/static/media/volkihar-cube-py.46d12f37.jpg",h="/_next/static/media/volkihar-cube-pz.e7c6feeb.jpg",p=t.p+"static/media/volkihar-knight.d62f417b.glb",y=t(7206),w=t(3994),_=t(7260),g=t(6240),x=t(7378),b=t(4529),k=t(7294),C=t(9477);const j=Math.PI/180;Math.PI;var S=t(2362),E=t(3142),P=t(3934),R=t.n(P),z={stiffness:40,damping:20,mass:1.5},L=function(e){var n=e.showDelay,t=void 0===n?0:n,P=e.cameraPosition,L=void 0===P?{x:0,y:0,z:6}:P,M=e.className,N=e.alt,Z=(0,u.Z)(e,["showDelay","cameraPosition","className","alt"]),A=(0,k.useState)(!1),O=A[0],T=A[1],q=(0,k.useState)(!1),D=q[0],F=q[1],J=(0,k.useState)(!1),H=J[0],I=J[1],W=(0,k.useRef)(),B=(0,k.useRef)(),U=(0,k.useRef)(),Y=(0,k.useRef)(),G=(0,k.useRef)(),K=(0,k.useRef)(),V=(0,k.useRef)(),X=(0,b.NM)(W,!1,{threshold:.4}),Q=(0,g.J)(),$=(0,x.q)(0,z),ee=(0,x.q)(0,z);(0,k.useEffect)((function(){var e=W.current,n=e.clientWidth,t=e.clientHeight;K.current=new C.CP7({canvas:B.current,alpha:!0,antialias:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!0}),K.current.setPixelRatio(2),K.current.setSize(n,t),K.current.outputEncoding=C.knz,K.current.physicallyCorrectLights=!0,K.current.toneMapping=C.LY2,U.current=new C.cPb(36,n/t,.1,100),U.current.position.set(L.x,L.y,L.z),G.current=new C.xsS;var i=new C.cBK;Y.current=new C.ZAu,G.current.add(Y.current);var a=new C.anP(K.current);a.compileCubemapShader();var u=new C.Ox3(16777215,3.2),s=new C.Ox3(16777215,1),y=new C.Ox3(16777215,1);u.position.set(1,.1,2),s.position.set(-1,.1,8),y.position.set(-2,2,-3),V.current=[y,u,s],V.current.forEach((function(e){return G.current.add(e)}));var w=function(){var e=(0,r.Z)((function(){var e,n,t,u,s,y;return(0,c.__generator)(this,(function(w){switch(w.label){case 0:return e=E.Zf.loadAsync(p),n=i.loadAsync([l,f,d,v,m,h]),[4,Promise.all([e,n])];case 1:return t=o.Z.apply(void 0,[w.sent(),2]),u=t[0],s=t[1],Y.current.add(u.scene),u.scene.rotation.y=180*j,u.scene.position.y=-1.6,y=a.fromCubemap(s).texture,G.current.environment=y,a.dispose(),[4,K.current.initTexture(G.current.environment)];case 2:return w.sent(),Y.current.traverse(function(){var e=(0,r.Z)((function(e){return(0,c.__generator)(this,(function(n){switch(n.label){case 0:return e.material?[4,K.current.initTexture(e.material)]:[3,2];case 1:n.sent(),n.label=2;case 2:return[2]}}))}));return function(n){return e.apply(this,arguments)}}()),T(!0),ne(),[2]}}))}));return function(){return e.apply(this,arguments)}}();(0,k.startTransition)((function(){w(),setTimeout((function(){I(!0)}),1e3)}));var _=$.onChange((function(e){Y.current.rotation.x=e,ne()})),g=ee.onChange((function(e){Y.current.rotation.y=e,ne()}));return function(){(0,E.Ji)(V.current),(0,E.in)(G.current),(0,E.e8)(K.current),_(),g()}}),[]);var ne=(0,k.useCallback)((function(){K.current.render(G.current,U.current)}),[]);return(0,k.useEffect)((function(){var e=function(e){var n=window.innerWidth,t=window.innerHeight,r=(e.clientX-n/2)/n,i=(e.clientY-t/2)/t;$.set(i/2),ee.set(r/2)};return X&&F(!0),X&&!Q&&window.addEventListener("mousemove",e),function(){window.removeEventListener("mousemove",e)}}),[X,Q,$,ee]),(0,k.useEffect)((function(){var e=function(){if(W.current){var e=W.current,n=e.clientWidth,t=e.clientHeight;K.current.setSize(n,t),U.current.aspect=n/t,U.current.updateProjectionMatrix(),ne()}};return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}}),[ne]),(0,s.jsxs)("div",(0,a.Z)((0,i.Z)({className:(0,S.Sh)(R().armor,M),ref:W,role:"img","aria-label":N},Z),{children:[(0,s.jsx)(_.u,{unmount:!0,in:!O&&H,timeout:(0,S.zG)(w.T.base.durationL),children:function(e){return(0,s.jsx)(y.a,{className:R().loader,"data-visible":e})}}),(0,s.jsx)("canvas",{className:R().canvas,ref:B,"data-loaded":O&&D,style:(0,S.Fh)({delay:(0,S.aU)(t)})})]}))}},3142:function(e,n,t){"use strict";t.d(n,{Et:function(){return s},Ji:function(){return v},Zf:function(){return c},e8:function(){return d},in:function(){return l}});var r=t(9477),i=t(4976),a=t(7607);r.CtF.enabled=!0;var u=new i._,o=new a.E;u.setDecoderPath("/draco/"),o.setDRACOLoader(u);var c=o,s=new r.dpR,l=function(e){null===e||void 0===e||e.traverse((function(e){if(e.isMesh)if(e.geometry.dispose(),e.material.isMaterial)f(e.material);else{var n=!0,t=!1,r=void 0;try{for(var i,a=e.material[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var u=i.value;f(u)}}catch(o){t=!0,r=o}finally{try{n||null==a.return||a.return()}finally{if(t)throw r}}}}))},f=function(e){e.dispose();var n=!0,t=!1,r=void 0;try{for(var i,a=Object.keys(e)[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var u,o,c,s=e[i.value];if(s&&"object"===typeof s&&"minFilter"in s)s.dispose(),null===(u=s.source)||void 0===u||null===(o=u.data)||void 0===o||null===(c=o.close)||void 0===c||c.call(o)}}catch(l){t=!0,r=l}finally{try{n||null==a.return||a.return()}finally{if(t)throw r}}},d=function(e){e.dispose(),e=null},v=function(e){var n=!0,t=!1,r=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var u=i.value;u.parent.remove(u)}}catch(o){t=!0,r=o}finally{try{n||null==a.return||a.return()}finally{if(t)throw r}}}},3934:function(e){e.exports={armor:"Armor_armor__npq42",loader:"Armor_loader___wk2y",canvas:"Armor_canvas__Oe927"}},7378:function(e,n,t){"use strict";t.d(n,{q:function(){return f}});var r=t(655),i=t(7294),a=t(754),u=t(406),o=t(3234),c=t(6014),s=t(6681);var l=t(8868);function f(e,n){void 0===n&&(n={});var t=(0,i.useContext)(c._).isStatic,f=(0,i.useRef)(null),d=function(e){var n=(0,s.h)((function(){return(0,o.B)(e)}));if((0,i.useContext)(c._).isStatic){var t=(0,r.__read)((0,i.useState)(e),2)[1];(0,i.useEffect)((function(){return n.onChange(t)}),[])}return n}((0,u.i)(e)?e.get():e);return(0,i.useMemo)((function(){return d.attach((function(e,i){return t?i(e):(f.current&&f.current.stop(),f.current=(0,a.j)((0,r.__assign)((0,r.__assign)({from:d.get(),to:e,velocity:d.getVelocity()},n),{onUpdate:i})),d.get())}))}),[JSON.stringify(n)]),function(e,n){(0,l.L)((function(){if((0,u.i)(e))return e.onChange(n)}),[n])}(e,(function(e){return d.set(parseFloat(e))})),d}}}]);