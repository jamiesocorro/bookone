"use strict";(()=>{var e={};e.id=762,e.ids=[762],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},9348:e=>{e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},412:e=>{e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},6672:(e,t,o)=>{o.r(t),o.d(t,{patchFetch:()=>v,routeModule:()=>u,serverHooks:()=>p,workAsyncStorage:()=>c,workUnitAsyncStorage:()=>f});var i={};o.r(i),o.d(i,{GET:()=>d});var r=o(8797),n=o(42),a=o(8492),l=o(336),s=o(1939);async function d(){let e=await {name:"BookOne",short_name:"BookOne",description:"Booking app for artists",start_url:"/",display:"standalone",background_color:"#ffffff",theme_color:"#000000",icons:[{src:"icons/bookone.png",sizes:"192x192",type:"image/png"}]},t=(0,s.resolveRouteData)(e,"manifest");return new l.NextResponse(t,{headers:{"Content-Type":"application/manifest+json","Cache-Control":"public, max-age=0, must-revalidate"}})}let u=new r.AppRouteRouteModule({definition:{kind:n.RouteKind.APP_ROUTE,page:"/manifest.webmanifest/route",pathname:"/manifest.webmanifest",filename:"manifest",bundlePath:"app/manifest.webmanifest/route"},resolvedPagePath:"next-metadata-route-loader?filePath=%2FUsers%2Fjamiesocorro%2FDesktop%2FJamie%20Online%20Portfolio%2Fbookone%2Fsrc%2Fapp%2Fmanifest.ts&isDynamicRouteExtension=1!?__next_metadata_route__",nextConfigOutput:"",userland:i}),{workAsyncStorage:c,workUnitAsyncStorage:f,serverHooks:p}=u;function v(){return(0,a.patchFetch)({workAsyncStorage:c,workUnitAsyncStorage:f})}},1939:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var o in t)Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}(t,{resolveManifest:function(){return a},resolveRobots:function(){return r},resolveRouteData:function(){return l},resolveSitemap:function(){return n}});let i=o(2574);function r(e){let t="";for(let o of Array.isArray(e.rules)?e.rules:[e.rules]){for(let e of(0,i.resolveArray)(o.userAgent||["*"]))t+=`User-Agent: ${e}
`;if(o.allow)for(let e of(0,i.resolveArray)(o.allow))t+=`Allow: ${e}
`;if(o.disallow)for(let e of(0,i.resolveArray)(o.disallow))t+=`Disallow: ${e}
`;o.crawlDelay&&(t+=`Crawl-delay: ${o.crawlDelay}
`),t+="\n"}return e.host&&(t+=`Host: ${e.host}
`),e.sitemap&&(0,i.resolveArray)(e.sitemap).forEach(e=>{t+=`Sitemap: ${e}
`}),t}function n(e){let t=e.some(e=>Object.keys(e.alternates??{}).length>0),o=e.some(e=>{var t;return!!(null==(t=e.images)?void 0:t.length)}),i=e.some(e=>{var t;return!!(null==(t=e.videos)?void 0:t.length)}),r="";for(let s of(r+='<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',o&&(r+=' xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"'),i&&(r+=' xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"'),t?r+=' xmlns:xhtml="http://www.w3.org/1999/xhtml">\n':r+=">\n",e)){var n,a,l;r+=`<url>
<loc>${s.url}</loc>
`;let e=null==(n=s.alternates)?void 0:n.languages;if(e&&Object.keys(e).length)for(let t in e)r+=`<xhtml:link rel="alternate" hreflang="${t}" href="${e[t]}" />
`;if(null==(a=s.images)?void 0:a.length)for(let e of s.images)r+=`<image:image>
<image:loc>${e}</image:loc>
</image:image>
`;if(null==(l=s.videos)?void 0:l.length)for(let e of s.videos)r+=["<video:video>",`<video:title>${e.title}</video:title>`,`<video:thumbnail_loc>${e.thumbnail_loc}</video:thumbnail_loc>`,`<video:description>${e.description}</video:description>`,e.content_loc&&`<video:content_loc>${e.content_loc}</video:content_loc>`,e.player_loc&&`<video:player_loc>${e.player_loc}</video:player_loc>`,e.duration&&`<video:duration>${e.duration}</video:duration>`,e.view_count&&`<video:view_count>${e.view_count}</video:view_count>`,e.tag&&`<video:tag>${e.tag}</video:tag>`,e.rating&&`<video:rating>${e.rating}</video:rating>`,e.expiration_date&&`<video:expiration_date>${e.expiration_date}</video:expiration_date>`,e.publication_date&&`<video:publication_date>${e.publication_date}</video:publication_date>`,e.family_friendly&&`<video:family_friendly>${e.family_friendly}</video:family_friendly>`,e.requires_subscription&&`<video:requires_subscription>${e.requires_subscription}</video:requires_subscription>`,e.live&&`<video:live>${e.live}</video:live>`,e.restriction&&`<video:restriction relationship="${e.restriction.relationship}">${e.restriction.content}</video:restriction>`,e.platform&&`<video:platform relationship="${e.platform.relationship}">${e.platform.content}</video:platform>`,e.uploader&&`<video:uploader${e.uploader.info&&` info="${e.uploader.info}"`}>${e.uploader.content}</video:uploader>`,`</video:video>
`].filter(Boolean).join("\n");if(s.lastModified){let e=s.lastModified instanceof Date?s.lastModified.toISOString():s.lastModified;r+=`<lastmod>${e}</lastmod>
`}s.changeFrequency&&(r+=`<changefreq>${s.changeFrequency}</changefreq>
`),"number"==typeof s.priority&&(r+=`<priority>${s.priority}</priority>
`),r+="</url>\n"}return r+"</urlset>\n"}function a(e){return JSON.stringify(e)}function l(e,t){return"robots"===t?r(e):"sitemap"===t?n(e):"manifest"===t?a(e):""}},2574:(e,t)=>{function o(e){return Array.isArray(e)?e:[e]}function i(e){if(null!=e)return o(e)}function r(e){let t;if("string"==typeof e)try{t=(e=new URL(e)).origin}catch{}return t}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var o in t)Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}(t,{getOrigin:function(){return r},resolveArray:function(){return o},resolveAsArrayOrUndefined:function(){return i}})}};var t=require("../../webpack-runtime.js");t.C(e);var o=e=>t(t.s=e),i=t.X(0,[492,676],()=>o(6672));module.exports=i})();