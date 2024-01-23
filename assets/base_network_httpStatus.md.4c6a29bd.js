import{_ as e,o,c as a,Q as t}from"./chunks/framework.a5035e6c.js";const q=JSON.parse('{"title":"HTTP 状态码","description":"","frontmatter":{},"headers":[],"relativePath":"base/network/httpStatus.md","lastUpdated":1705988915000}'),d={name:"base/network/httpStatus.md"},c=t('<h1 id="http-状态码" tabindex="-1">HTTP 状态码 <a class="header-anchor" href="#http-状态码" aria-label="Permalink to &quot;HTTP 状态码&quot;">​</a></h1><h2 id="分类" tabindex="-1">分类 <a class="header-anchor" href="#分类" aria-label="Permalink to &quot;分类&quot;">​</a></h2><ul><li><p>1**：信息，服务器收到请求，需要请求者继续执行操作。</p></li><li><p>2**：成功，操作成功接收并处理。</p></li><li><p>3**：重定向，需要进一步的操作完成请求。</p></li><li><p>4**：客户端错误。</p></li><li><p>5**：服务端错误</p></li></ul><h2 id="详细解释" tabindex="-1">详细解释 <a class="header-anchor" href="#详细解释" aria-label="Permalink to &quot;详细解释&quot;">​</a></h2><h3 id="_2" tabindex="-1">2** <a class="header-anchor" href="#_2" aria-label="Permalink to &quot;2\\*\\*&quot;">​</a></h3><p>200<code>（OK）</code> ： 服务器成功执行客户端的请求。</p><p>201<code>(&quot;Created&quot;)</code>：当服务器依照客户端的请求创建了一个新资源时，发送此响应代码。</p><p>202: 已接受。</p><p>204<code>(&quot;No Content&quot;)</code>：若服务器拒绝对 <code>PUT、POST</code> 或者 <code>DELETE</code> 请求返回任何状态信息或表示，那么通常采用此响应代码，服务器也可以对<code>GET</code>请求返回此响应代码，这表明“客户端请求的资源存在，但其表示是空的。</p><p>205: 成功，重置内容。</p><p>206: 成功，部分内容。</p><h3 id="_3" tabindex="-1">3** <a class="header-anchor" href="#_3" aria-label="Permalink to &quot;3\\*\\*&quot;">​</a></h3><p>301: 永久移动，重定向。</p><p>302: 临时移动，可使用原有 <code>URI</code>。</p><p>303<code>(&quot;See Other&quot;)</code>：请求已经被处理，但服务器不是直接返回一个响应文档，而是返回一个响应文档的 <code>URI</code>。</p><p>304<code>(&quot;Not Modified&quot;)</code>：（协商缓存）响应实体主体都必须为空。</p><p>305: 需代理访问。</p><p>307<code>(&quot;Temporary Redirect&quot;)</code>：请求还没有被处理，因为所请求的资源不在本地。</p><h3 id="_4" tabindex="-1">4** <a class="header-anchor" href="#_4" aria-label="Permalink to &quot;4\\*\\*&quot;">​</a></h3><p>400: 请求语法错误。</p><p>401<code>(&quot;Unauthorized&quot;)</code>：客户端试图对一个受保护的资源进行操作，却又没有提供正确的认证证书。</p><p>403: 拒绝请求。</p><p>404<code>(&quot;Not Found&quot;)</code>：404 表明服务器无法把客户端请求的 <code>URI</code> 转换为一个资源。</p><h3 id="_5" tabindex="-1">5** <a class="header-anchor" href="#_5" aria-label="Permalink to &quot;5\\*\\*&quot;">​</a></h3><p>500<code>(Internal Server Error)</code> ：服务器内部错误，无法完成请求。</p><p>501<code>(Not Implemented)</code>：服务器不支持请求的功能，无法完成请求。</p><p>502<code>(Bad Gateway)</code>：作为网关或者代理工作的服务器尝试执行请求时，从远程服务器接收到了一个无效的响应。</p><p>504<code>(Gateway Time-out)</code>：充当网关或代理的服务器，未及时从远端服务器获取请求。</p>',28),p=[c];function r(i,l,n,h,s,u){return o(),a("div",null,p)}const m=e(d,[["render",r]]);export{q as __pageData,m as default};