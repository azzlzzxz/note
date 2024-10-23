import{_ as o,o as c,c as l,N as d}from"./chunks/framework.2f525601.js";const S=JSON.parse('{"title":"Web 安全相关知识","description":"","frontmatter":{},"headers":[],"relativePath":"base/secure/attack.md","lastUpdated":1729657648000}'),a={name:"base/secure/attack.md"};function s(i,e,p,t,n,r){return c(),l("div",null,e[0]||(e[0]=[d('<h1 id="web-安全相关知识" tabindex="-1">Web 安全相关知识 <a class="header-anchor" href="#web-安全相关知识" aria-label="Permalink to &quot;Web 安全相关知识&quot;">​</a></h1><h2 id="xss-跨站脚本攻击" tabindex="-1"><code>XSS</code> 跨站脚本攻击 <a class="header-anchor" href="#xss-跨站脚本攻击" aria-label="Permalink to &quot;`XSS` 跨站脚本攻击&quot;">​</a></h2><p><code>XSS</code>，是一种代码注入攻击，攻击者通过在目标网站上注入恶意脚本，使之在用户的浏览器上运行。利用这些恶意脚本，攻击者可获取用户的敏感信息如 <code>Cookie</code>、<code>SessionID</code> 等，进而危害数据安全。</p><ul><li>存储型<code>XSS</code></li></ul><p>攻击者恶意通过页面输入框提交一段脚本代码到服务器，用户从服务器访问页面时会自动执行该脚本代码，从而进行攻击</p><ul><li>反射型<code>XSS</code></li></ul><p>攻击者提供给用户一个包含恶意脚本的<code>URL</code>，用户打开<code>URL</code>后重定向到正常页面，同时执行恶意脚本代码</p><ul><li><code>DOM</code>型<code>XSS</code></li></ul><p>攻击者通过修改<code>DOM</code>节点绑定的方法来促使用户正常交互时产生攻击行为</p><div class="tip custom-block"><p class="custom-block-title">如何解决</p><ul><li>对用户的输入进行验证过滤</li></ul><p>验证和过滤的目的是确保用户输入的数据符合预期的格式和内容，避免恶意脚本或非法字符的注入。</p><ul><li><p>现代框架默认都会在 HTML 渲染到页面前进行<code>XSS</code>转义处理</p></li><li><p>富文本编辑时对内容进行转义后存储</p></li><li><p>使用 <code>CSP</code>（内容安全策略）：通过 <code>HTTP</code> 头中的 <code>Content-Security-Policy</code> 指令来指定哪些来源的脚本可以执行，哪些不能执行，阻止恶意脚本的加载。</p></li></ul><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">http-equiv</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Content-Security-Policy</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">default-src &#39;self&#39;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div><h2 id="csrf-跨站请求伪造" tabindex="-1"><code>CSRF</code> 跨站请求伪造 <a class="header-anchor" href="#csrf-跨站请求伪造" aria-label="Permalink to &quot;`CSRF` 跨站请求伪造&quot;">​</a></h2><p><code>CSRF</code> 攻击是指用户在正常网站中登录后，访问了钓鱼网站，钓鱼网站获取到正常网站中的认证信息并伪造请求发送给正常网站服务端。</p><p>攻击方式主要包含：<code>img</code>标签等<code>src</code>属性、<code>form</code>标签的<code>action</code>、<code>a</code>标签的<code>href</code></p><div class="tip custom-block"><p class="custom-block-title">如何解决</p><ul><li><p>添加<code>Token</code>认证，客户端每次发起请求是都携带一个<code>token</code>标记，服务端对该标记进行验证</p></li><li><p>服务端处理请求前验证来源，检查 <code>HTTP</code> 请求头中的 <code>Referer</code> 或 <code>Origin</code> 是否来自信任的域</p></li><li><p>服务端返回<code>Cookie</code>时设置 <code>SameSite</code>，不允许第三方<code>Cookie</code></p></li></ul></div><h2 id="sql-注入" tabindex="-1"><code>SQL</code> 注入 <a class="header-anchor" href="#sql-注入" aria-label="Permalink to &quot;`SQL` 注入&quot;">​</a></h2><p><code>SQL</code> 注入是通过在 <code>Web</code> 表单输入或 <code>URL</code> 参数中插入恶意 <code>SQL</code> 语句，从而操控数据库执行意外操作的攻击手段。</p><div class="tip custom-block"><p class="custom-block-title">如何解决</p><ul><li><p>输入验证：严格验证和过滤所有用户输入，防止恶意字符或语句注入。</p></li><li><p>通过使用预处理语句或参数化查询，避免将用户输入直接拼接到 <code>SQL</code> 语句中，防止 <code>SQL</code> 注入。</p></li></ul></div><h2 id="点击劫持" tabindex="-1"><code>点击劫持</code> <a class="header-anchor" href="#点击劫持" aria-label="Permalink to &quot;`点击劫持`&quot;">​</a></h2><p>点击劫持是一种攻击手段，攻击者通过在一个透明的框架中嵌入受信任网站的页面，诱使用户在不知情的情况下点击攻击者控制的恶意页面上的按钮或链接，从而执行攻击者意图的操作。</p><div class="tip custom-block"><p class="custom-block-title">如何解决</p><ul><li><p>在<code>Http</code>头中加入 <code>X-Frame-Options</code> 属性，此属性控制页面是否可被嵌入 <code>iframe</code> 中</p><ul><li><p><code>DENY</code>：不能被所有网站嵌套或加载</p></li><li><p><code>SAMEORIGIN</code>：只能被同域网站嵌套或加载</p></li><li><p><code>ALLOW-FROM URL</code>：可以被指定网站嵌套或加载</p></li></ul></li><li><p>使用 <code>CSP</code> <code>frame-ancestors</code>：通过设置 <code>CSP</code> 的 <code>frame-ancestors</code> 指令，限制哪些域可以嵌入当前页面，进一步减少点击劫持风险。</p></li></ul></div><h2 id="文件上传漏洞" tabindex="-1">文件上传漏洞 <a class="header-anchor" href="#文件上传漏洞" aria-label="Permalink to &quot;文件上传漏洞&quot;">​</a></h2><p>文件上传漏洞允许攻击者上传包含恶意代码的文件到服务器，并在服务器上执行这些文件。这类攻击会导致服务器被攻击者控制、网站篡改、数据泄露等严重后果。</p><div class="tip custom-block"><p class="custom-block-title">如何解决</p><ul><li><p>限制文件类型和大小</p></li><li><p>文件名安全性检查：避免文件名中包含特殊字符或代码，防止攻击者利用文件名执行攻击</p></li><li><p>存储位置隔离：上传的文件应存储在与应用程序分离的文件存储位置上，并限制执行权限，防止文件被直接执行</p></li></ul></div><h2 id="cdn劫持" tabindex="-1"><code>CDN</code>劫持 <a class="header-anchor" href="#cdn劫持" aria-label="Permalink to &quot;`CDN`劫持&quot;">​</a></h2><p>攻击者为了让用户能够登录自己开发的钓鱼网站，都会通过对<code>CDN</code>进行劫持的方法，让用户自动转入自己开发的网站，而很多用户却往往无法察觉到自己已经被劫持。</p><p><code>CDN</code> 劫持的攻击形式一般包括以下几种：</p><ul><li><p><code>DNS</code> 劫持：攻击者通过劫持 <code>DNS</code> 解析，将用户请求的域名解析到伪造的 <code>CDN</code> 节点上，从而实现内容篡改或插入恶意代码。</p></li><li><p><code>HTTP</code> 劫持：攻击者劫持 <code>HTTP</code> 请求，通过修改返回的响应内容，将合法的内容替换为恶意内容。</p></li><li><p><code>MITM（中间人攻击）</code>：攻击者在用户和 <code>CDN</code> 服务器之间的通信中间插入恶意节点，篡改传输的数据。</p></li></ul><div class="tip custom-block"><p class="custom-block-title">如何解决</p><ul><li><p>使用 <code>HTTPS</code> 强制加密传输</p></li><li><p>启用子资源完整性</p><ul><li><p>使用 <code>SRI</code> 验证静态资源：<code>SRI</code> 通过为资源（如 <code>JavaScript</code>、<code>CSS</code> 文件）生成哈希值，确保内容没有被篡改。如果 <code>CDN</code> 返回的文件内容和预期的哈希值不匹配，浏览器将拒绝加载该文件。</p></li><li><p>注意使用正确的哈希算法（如 <code>SHA-256</code>）：确保资源的完整性检查更加安全和有效。</p></li></ul></li><li><p><code>DNS</code> 安全防护：通过对 <code>DNS</code> 解析请求进行数字签名，防止 <code>DNS</code> 劫持攻击</p></li></ul></div>',28)]))}const h=o(a,[["render",s]]);export{S as __pageData,h as default};