(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{147:function(e,t,a){"use strict";a.r(t);var n=a(0),A=a.n(n),r=a(159),i=a(157);t.default=function(){return A.a.createElement(r.a,null,A.a.createElement(i.a,{title:"404: Not found"}),A.a.createElement("h1",null,"NOT FOUND"),A.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},151:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),A=a.n(n),r=a(4),i=a.n(r),o=a(33),c=a.n(o);a.d(t,"a",function(){return c.a});a(152);var s=A.a.createContext({}),d=function(e){return A.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):A.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},152:function(e,t,a){var n;e.exports=(n=a(154))&&n.default||n},153:function(e){e.exports={data:{site:{siteMetadata:{title:"gatsby-background-image Test Site"}}}}},154:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),A=a.n(n),r=a(4),i=a.n(r),o=a(54),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?A.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},155:function(e){e.exports={data:{desktop:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQADAAAAAAAAAAAAAAAAAAIBAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAACAf/aAAwDAQACEAMQAAAB4dTliAbVCmsG/wD/xAAVEAEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAQABBQIpS//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABQQAQAAAAAAAAAAAAAAAAAAADD/2gAIAQEABj8CH//EABYQAQEBAAAAAAAAAAAAAAAAAAEQAP/aAAgBAQABPyGGmnf/2gAMAwEAAgADAAAAEBfwf//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAEDAQE/EGM//8QAFhEAAwAAAAAAAAAAAAAAAAAAARAx/9oACAECAQE/EBEIv//EABgQAAMBAQAAAAAAAAAAAAAAAAAQMUEB/9oACAEBAAE/EBhSYUnYUf/Z",aspectRatio:1,src:"/static/41d69c74142edcc878ff7122603d84d2/95388/seamless-bg-desktop.jpg",srcSet:"/static/41d69c74142edcc878ff7122603d84d2/ac6ef/seamless-bg-desktop.jpg 1040w,\n/static/41d69c74142edcc878ff7122603d84d2/5d93e/seamless-bg-desktop.jpg 2080w,\n/static/41d69c74142edcc878ff7122603d84d2/95388/seamless-bg-desktop.jpg 4160w,\n/static/41d69c74142edcc878ff7122603d84d2/bd4cc/seamless-bg-desktop.jpg 4167w",srcWebp:"/static/41d69c74142edcc878ff7122603d84d2/defa2/seamless-bg-desktop.webp",srcSetWebp:"/static/41d69c74142edcc878ff7122603d84d2/17cca/seamless-bg-desktop.webp 1040w,\n/static/41d69c74142edcc878ff7122603d84d2/93223/seamless-bg-desktop.webp 2080w,\n/static/41d69c74142edcc878ff7122603d84d2/defa2/seamless-bg-desktop.webp 4160w,\n/static/41d69c74142edcc878ff7122603d84d2/a0216/seamless-bg-desktop.webp 4167w",sizes:"(max-width: 4160px) 100vw, 4160px"}}}}}},157:function(e,t,a){"use strict";var n=a(158),A=a(0),r=a.n(A),i=a(4),o=a.n(i),c=a(165),s=a.n(c);function d(e){var t=e.description,a=e.lang,A=e.meta,i=e.keywords,o=e.title,c=n.data.site,d=t||c.siteMetadata.description;return r.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:o},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:d}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(A)})}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},d.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=d},158:function(e){e.exports={data:{site:{siteMetadata:{title:"gatsby-background-image Test Site",description:"Have a look at the similarities and differences of gatsby-background-image to gatsby-image side by side",author:"@timhagn"}}}}},159:function(e,t,a){"use strict";var n=a(153),A=a(0),r=a.n(A),i=a(4),o=a.n(i),c=a(151),s=(a(162),a(75),a(155)),d=a(161),l=a(156),u=a.n(l),g=a(163),f=a.n(g),m=a(164),p=a(35),b={attributes:!0,childList:!0,subtree:!0,characterData:!0,attributeOldValue:!0,characterDataOldValue:!0},h=function(e){return e},w=function(e,t,a){void 0===e&&(e=h),void 0===t&&(t=function(){}),void 0===a&&(a=b);var n=Object(A.useMemo)(function(){return"undefined"!=typeof window&&new window.MutationObserver(e)},[e]),r=Object(A.useState)(null),i=r[0],o=r[1],c=Object(A.useCallback)(function(e){null!==e&&o(e)},[i]);return Object(A.useEffect)(function(){if(i){var e=Object(p.findDOMNode)(i);return n.observe(e,a),function(){var e=n.takeRecords();n.disconnect(),t(e)}}},[i]),[c,i]},E=(Object(m.a)(),d.b.div.withConfig({displayName:"components__StyledSymetryWrapper",componentId:"sc-1efyw5b-0"})(["width:50vw;height:100%;overflow:hidden;"])),y=Object(d.b)(function(e){var t=e.className,a=e.children,n=s.data.desktop,A=function(e,t){e&&e.forEach(function(e){e.target instanceof HTMLImageElement&&c&&"main-img"===c.id?console.log(e.target.nodeName,e.target.currentSrc,c):e.previousSibling instanceof HTMLImageElement?console.log("PREV-"+e.previousSibling.nodeName,e.previousSibling.currentSrc):console.log(e.target.nodeName,e),e.target instanceof HTMLImageElement&&e.target.currentSrc.find&&console.log(e.target.nodeName,e.target.currentSrc)})},i=w(A,function(e){return console.log(e)}),o=i[0],c=i[1],d=w(A,function(e){return console.log(e)})[0],l=n.childImageSharp.fluid;return r.a.createElement(v,null,r.a.createElement(E,null,r.a.createElement(f.a,{ref:d,Tag:"section",className:t,fluid:l,backgroundColor:"#0f0",title:"gbitest",fadeIn:"soft",id:"gbitest",role:"img","aria-label":"gbitest",onLoad:function(){return console.log("onLoad")},onError:function(){return console.log("onError")},onStartLoad:function(e){var t=e.wasCached;return console.log("onStartLoad - wasCached:",t)}},a)),r.a.createElement(E,null,r.a.createElement(u.a,{ref:o,className:"main-img",id:"main-img",fluid:l,backgroundColor:"#0f0",objectFit:"cover",objectPosition:"50% 50%",style:{width:"100vw",height:"auto"}})))}).withConfig({displayName:"components__StyledBackgroundSection",componentId:"sc-1efyw5b-1"})(["width:100vw;"]),v=d.b.div.withConfig({displayName:"components__StyledWrapper",componentId:"sc-1efyw5b-2"})(["width:100%;height:100vh;display:flex;overflow:hidden;"]),j=y,B=function(e){var t=e.siteTitle;return r.a.createElement("header",{style:{background:"#00446f",position:"fixed",top:0,left:0,zIndex:1,width:"100vw"}},r.a.createElement("div",{style:{margin:"0 auto",padding:"1.45rem 1.0875rem"}},r.a.createElement("h1",{style:{margin:0,textAlign:"center"}},r.a.createElement(c.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};B.propTypes={siteTitle:o.a.string},B.defaultProps={siteTitle:""};var k=B,Q=function(){return r.a.createElement("footer",{style:{position:"fixed",bottom:0,left:0,background:"#00446f",zIndex:1,width:"100vw",padding:"1rem",textAlign:"center",color:"white"}},"© ",(new Date).getFullYear(),", Built with"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")," & ",r.a.createElement("a",{href:"https://github.com/timhagn/gatsby-background-image"},"gatsby-background-image"))};Q.propTypes={siteTitle:o.a.string},Q.defaultProps={siteTitle:""};var N=Q,S=function(e){var t=e.children;return r.a.createElement(c.b,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{siteTitle:e.site.siteMetadata.title}),r.a.createElement(j,null,r.a.createElement("div",{style:{height:"100vh",width:"100%",display:"flex",placeContent:"start"}},r.a.createElement("div",{style:{placeSelf:"center",textAlign:"center",color:"#ccc",height:"50vh",maxWidth:960,padding:"0px 1.0875rem 1.45rem",marginTop:"-5rem"}},r.a.createElement("main",null,t)))),r.a.createElement(N,null))},data:n})};S.propTypes={children:o.a.node.isRequired};t.a=S}}]);
//# sourceMappingURL=component---src-pages-404-js-ae7388d0787887740e7a.js.map