(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[850],{2198:function(e,n,t){"use strict";var r,i=t(7294);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}n.Z=e=>i.createElement("svg",a({stroke:"currentColor",width:43,height:15,viewBox:"0 0 43 15"},e),r||(r=i.createElement("path",{d:"M1 1l20.5 12L42 1",strokeWidth:2,fill:"none"})))},573:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles/[slug]",function(){return t(5366)}])},3185:function(e,n,t){"use strict";t.d(n,{i:function(){return d}});var r=t(1799),i=t(9396),a=t(9534),s=t(5893),c=t(2362),o=t(3265),l=t.n(o),d=function(e){var n=e.lineWidth,t=e.lineHeight,o=e.notchWidth,d=e.notchHeight,u=e.collapseDelay,h=e.collapsed,_=e.className,p=e.style,f=(0,a.Z)(e,["lineWidth","lineHeight","notchWidth","notchHeight","collapseDelay","collapsed","className","style"]);return(0,s.jsxs)("div",(0,i.Z)((0,r.Z)({className:(0,c.Sh)(l().divider,_),style:(0,c.Fh)({lineWidth:n,lineHeight:t,notchWidth:o,notchHeight:d,collapseDelay:(0,c.aU)(u)},p)},f),{children:[(0,s.jsx)("div",{className:l().line,"data-collapsed":h}),(0,s.jsx)("div",{className:l().notch,"data-collapsed":h,style:(0,c.Fh)({collapseDelay:(0,c.aU)(u+160)})})]}))};d.defaultProps={lineWidth:"100%",lineHeight:"2px",notchWidth:"90px",notchHeight:"10px",collapsed:!1,collapseDelay:0}},5149:function(e,n,t){"use strict";t.d(n,{a:function(){return d},H:function(){return u}});var r=t(1799),i=t(9396),a=t(9534),s=t(5893),c=t(2362),o=t(3509),l=t.n(o),d=function(e){var n=e.ordered,t=e.children,o=e.className,d=(0,a.Z)(e,["ordered","children","className"]),u=n?"ol":"ul";return(0,s.jsx)(u,(0,i.Z)((0,r.Z)({className:(0,c.Sh)(l().list,o)},d),{children:t}))},u=function(e){var n=e.children,t=(0,a.Z)(e,["children"]);return(0,s.jsx)("li",(0,i.Z)((0,r.Z)({className:l().item},t),{children:n}))}},5366:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return X},default:function(){return J}});var r=t(1799),i=t(9396),a=t(5893),s=t(2198),c=t(3185),o=t(5192),l=t(2221),d=t(1424),u=t(5633),h=t(6602),_=t(7346),p=t(3994),f=t(7260),x=t(4529),m=t(1664),j=t.n(m),g=t(7294),v=t(7715),N=t(2362),y=t(9623),Z=t.n(y),b=function(e){var n=e.children,t=e.title,r=e.date,i=e.abstract,m=e.banner,y=e.timecode,b=e.ogImage,w=(0,x.jh)(),P=(0,g.useRef)(),k=(0,g.useState)(null),M=k[0],O=k[1];(0,g.useEffect)((function(){O((0,v.p)(r))}),[r,M]),(0,x.YT)(.004,(function(e){var n,t,r;P.current&&P.current.style.setProperty("--blurOpacity",(n=e,t=0,(r=1)?Math.min(n,t)===n?t:Math.max(n,r)===n?r:n:Math.max(n,t)===t?n:t))}));return(0,a.jsxs)("article",{className:Z().post,children:[(0,a.jsx)(u.h,{title:t,prefix:"",description:i,ogImage:b}),(0,a.jsxs)(h.$,{children:[m&&(0,a.jsxs)("div",{className:Z().banner,ref:P,children:[(0,a.jsx)("div",{className:Z().bannerImage,children:(0,a.jsx)(d.E,{role:"presentation",src:{src:m},placeholder:{src:"".concat(m.split(".")[0],"-placeholder.jpg")},alt:""})}),(0,a.jsx)("div",{className:Z().bannerImageBlur,children:(0,a.jsx)(d.E,{role:"presentation",src:{src:"".concat(m.split(".")[0],"-placeholder.jpg")},placeholder:{src:"".concat(m.split(".")[0],"-placeholder.jpg")},alt:""})})]}),(0,a.jsx)("header",{className:Z().header,children:(0,a.jsxs)("div",{className:Z().headerText,children:[(0,a.jsx)(f.u,{in:!0,timeout:(0,N.zG)(p.T.base.durationM),children:function(e){return(0,a.jsxs)("div",{className:Z().date,children:[(0,a.jsx)(c.i,{notchWidth:"64px",notchHeight:"8px",collapsed:!e}),(0,a.jsx)(_.x,{className:Z().dateText,"data-visible":e,children:M})]})}}),(0,a.jsx)(l.X,{level:2,as:"h1",className:Z().title,"aria-label":t,children:t.split(" ").map((function(e,n){return(0,a.jsx)("span",{className:Z().titleWordWrapper,children:(0,a.jsxs)("span",{className:Z().titleWord,style:(0,N.Fh)({delay:(0,N.aU)(100*n+100)}),index:n,children:[e,n!==t.split(" ").length-1?" ":""]})},"".concat(e,"-").concat(n))}))}),(0,a.jsxs)("div",{className:Z().details,children:[(0,a.jsx)(j(),{href:"#postContent",children:(0,a.jsx)("a",{className:Z().arrow,"aria-label":"Scroll to post content",onClick:function(e){e.preventDefault(),w(e.currentTarget.href)},children:(0,a.jsx)(s.Z,{"aria-hidden":!0})})}),(0,a.jsx)("div",{className:Z().timecode,children:y})]})]})})]}),(0,a.jsx)(h.$,{className:Z().wrapper,id:"postContent",tabIndex:-1,children:(0,a.jsx)(_.x,{as:"div",size:"l",className:Z().content,children:n})}),(0,a.jsx)(o.$,{})]})};function w(){return w=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},w.apply(this,arguments)}var P=t(9534),k=t(8526),M=t(1879),O=t(8718),W=t(2726),C=t.n(W),T=function(e){var n,t=(0,g.useState)(!1),i=t[0],s=t[1],c=(0,O.Fg)(),o=(0,g.useRef)(),l=(0,g.useRef)(),d=null===(n=e.className)||void 0===n?void 0:n.split("-")[1];return(0,a.jsxs)("div",{className:C().code,"data-theme":c.themeId,children:[!!d&&(0,a.jsx)(_.x,{secondary:!0,size:"s",className:C().lang,children:d}),(0,a.jsx)("pre",(0,r.Z)({ref:o},e)),(0,a.jsx)("div",{className:C().actions,children:(0,a.jsx)(k.z,{iconOnly:!0,onClick:function(){clearTimeout(l),navigator.clipboard.writeText(o.current.textContent),s(!0),setTimeout((function(){s(!1)}),2e3)},"aria-label":"Copy",children:(0,a.jsxs)("span",{className:C().copyIcon,children:[(0,a.jsx)(f.u,{in:!i,children:function(e){return(0,a.jsx)(M.J,{icon:"copy","data-visible":e})}}),(0,a.jsx)(f.u,{in:i,children:function(e){return(0,a.jsx)(M.J,{icon:"check","data-visible":e})}})]})})})]})},D=t(270),I=t(5149),E=t(1188),H=t.n(E),S=function(e){var n=e.id;return(0,a.jsx)("a",{className:H().headingLink,href:"#".concat(n),"aria-label":"Link to heading",children:(0,a.jsx)(M.J,{icon:"link"})})},L=function(e){var n=e.src,t=e.alt,i=e.width,s=e.height,c=(0,P.Z)(e,["src","alt","width","height"]);return(0,a.jsx)("img",(0,r.Z)({className:H().image,src:n,decoding:"async",loading:"lazy",alt:t,width:i,height:s},c))},z={h1:function(e){var n=e.children,t=e.id,s=(0,P.Z)(e,["children","id"]);return(0,a.jsxs)(l.X,(0,i.Z)((0,r.Z)({className:H().heading,id:t,level:2,as:"h1"},s),{children:[(0,a.jsx)(S,{id:t}),n]}))},h2:function(e){var n=e.children,t=e.id,s=(0,P.Z)(e,["children","id"]);return(0,a.jsxs)(l.X,(0,i.Z)((0,r.Z)({className:H().heading,id:t,level:3,as:"h2"},s),{children:[(0,a.jsx)(S,{id:t}),n]}))},h3:function(e){var n=e.children,t=e.id,s=(0,P.Z)(e,["children","id"]);return(0,a.jsxs)(l.X,(0,i.Z)((0,r.Z)({className:H().heading,id:t,level:4,as:"h3"},s),{children:[(0,a.jsx)(S,{id:t}),n]}))},h4:function(e){var n=e.children,t=e.id,s=(0,P.Z)(e,["children","id"]);return(0,a.jsxs)(l.X,(0,i.Z)((0,r.Z)({className:H().heading,id:t,level:5,as:"h4"},s),{children:[(0,a.jsx)(S,{id:t}),n]}))},p:function(e){var n=e.children,t=(0,P.Z)(e,["children"]),s=1===g.Children.count(n),c=g.Children.toArray(n)[0];return s&&c.type===L?n:(0,a.jsx)(_.x,(0,i.Z)((0,r.Z)({className:H().paragraph,size:"l",as:"p"},t),{children:n}))},a:function(e){var n=function(){return w.apply(this,arguments)}({},e);return(0,a.jsx)(D.r,(0,r.Z)({},n))},ul:function(e){return(0,a.jsx)(I.a,(0,r.Z)({className:H().list},e))},ol:function(e){return(0,a.jsx)(I.a,(0,r.Z)({className:H().list,ordered:!0},e))},li:function(e){var n=e.children,t=(0,P.Z)(e,["children"]);return(0,a.jsx)(I.H,(0,i.Z)((0,r.Z)({},t),{children:n}))},pre:function(e){return(0,a.jsx)("div",{className:H().pre,children:(0,a.jsx)(T,(0,r.Z)({},e))})},code:function(e){var n=e.children,t=(0,P.Z)(e,["children"]);return(0,a.jsx)("code",(0,i.Z)((0,r.Z)({className:H().code},t),{children:n}))},blockquote:function(e){return(0,a.jsx)("blockquote",(0,r.Z)({className:H().blockquote},e))},hr:function(e){return(0,a.jsx)("hr",(0,r.Z)({className:H().hr},e))},img:L,strong:function(e){return(0,a.jsx)("strong",(0,r.Z)({className:H().strong},e))},Embed:function(e){var n=e.src;return(0,a.jsx)("div",{className:H().embed,children:(0,a.jsx)("iframe",{src:n,loading:"lazy"})})}},F=t(3194),X=!0;function J(e){var n=e.frontmatter,t=e.code,s=e.timecode,c=e.ogImage,o=(0,g.useMemo)((function(){return(0,F.getMDXComponent)(t)}),[t]);return(0,a.jsx)(b,(0,i.Z)((0,r.Z)({timecode:s,ogImage:c},n),{children:(0,a.jsx)(o,{components:z})}))}},7715:function(e,n,t){"use strict";function r(e){return new Date(e).toLocaleDateString("default",{year:"numeric",month:"long",day:"2-digit"})}t.d(n,{p:function(){return r}})},2726:function(e){e.exports={code:"Code_code__RSNfC",actions:"Code_actions__Zoqye",copyIcon:"Code_copyIcon__gdLmk",lang:"Code_lang__3Kuby"}},3265:function(e){e.exports={divider:"Divider_divider__R3vqT",line:"Divider_line__bFTLx",notch:"Divider_notch__1kxAj"}},3509:function(e){e.exports={list:"List_list__0oF1W",item:"List_item__t5SQz"}},9623:function(e){e.exports={post:"Post_post__fWn0d",header:"Post_header__Sf1pZ",headerText:"Post_headerText__gC9Yl",date:"Post_date__InVhZ",dateText:"Post_dateText__H5Zzn",titleWordWrapper:"Post_titleWordWrapper__yKhUz",titleWord:"Post_titleWord__SU5zc",postTitleWord:"Post_postTitleWord__XAuou",banner:"Post_banner__OU9ZO",bannerImage:"Post_bannerImage__MT3ht",bannerImageBlur:"Post_bannerImageBlur__JbMhH",details:"Post_details__sLHn9",arrow:"Post_arrow__GnDPy",timecode:"Post_timecode__QfQ7k",wrapper:"Post_wrapper__FLc1v",content:"Post_content__GI1_2"}},1188:function(e){e.exports={heading:"PostMarkdown_heading__oOjES",paragraph:"PostMarkdown_paragraph__JJW6d",list:"PostMarkdown_list___gY0U",image:"PostMarkdown_image__58Jo8",headingLink:"PostMarkdown_headingLink__urh9O",code:"PostMarkdown_code__hwEir",pre:"PostMarkdown_pre__MgdYF",hr:"PostMarkdown_hr__F4uZ6",blockquote:"PostMarkdown_blockquote__C9__4",strong:"PostMarkdown_strong__AlJE_",embed:"PostMarkdown_embed__aO_uG"}},3194:function(e,n,t){e.exports=t(8773)},8773:function(e,n,t){"use strict";n.getMDXComponent=function(e,n){return o(e,n).default};var r=c(t(7294)),i=c(t(5893)),a=c(t(3935));function s(e){if("function"!==typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(s=function(e){return e?t:n})(e)}function c(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s(n);if(t&&t.has(e))return t.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var c=i?Object.getOwnPropertyDescriptor(e,a):null;c&&(c.get||c.set)?Object.defineProperty(r,a,c):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}function o(e,n){const t={React:r,ReactDOM:a,_jsx_runtime:i,...n};return new Function(...Object.keys(t),e)(...Object.values(t))}},7568:function(e,n,t){"use strict";function r(e,n,t,r,i,a,s){try{var c=e[a](s),o=c.value}catch(l){return void t(l)}c.done?n(o):Promise.resolve(o).then(r,i)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(i,a){var s=e.apply(n,t);function c(e){r(s,i,a,c,o,"next",e)}function o(e){r(s,i,a,c,o,"throw",e)}c(void 0)}))}}t.d(n,{Z:function(){return i}})}},function(e){e.O(0,[408,774,888,179],(function(){return n=573,e(e.s=n);var n}));var n=e.O();_N_E=n}]);