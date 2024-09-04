import{_ as r,B as i,o as s,c as n,N as t,x as e,D as l,z as a,a as o}from"./chunks/framework.84e4f51a.js";const O=JSON.parse('{"title":"RestFul API","description":"","frontmatter":{},"headers":[],"relativePath":"base/network/restFulAPI.md","lastUpdated":1725422901000}'),u={name:"base/network/restFulAPI.md"};function p(T,d,h,P,f,b){const c=i("font");return s(),n("div",null,[d[4]||(d[4]=t('<h1 id="restful-api" tabindex="-1">RestFul API <a class="header-anchor" href="#restful-api" aria-label="Permalink to &quot;RestFul API&quot;">​</a></h1><ul><li><code>RestFul</code> 是面向资源。</li><li><code>RestFul</code> 是一种架构的规范和约束、原则。</li><li><code>rest：</code>资源的表述性状态转移（表述性：客户端请求一个资源，服务器拿到这个资源）</li><li>资源的地址：在 <code>Web</code> 中就是 <code>URL</code>（统一资源标识符）</li><li>资源是 <code>Rest</code> 系统的核心概念，所有的设计都是以资源为中心。</li></ul><h2 id="restful-架构应该遵循统一接口原则。" tabindex="-1"><code>RestFul</code> 架构应该遵循统一接口原则。 <a class="header-anchor" href="#restful-架构应该遵循统一接口原则。" aria-label="Permalink to &quot;`RestFul` 架构应该遵循统一接口原则。&quot;">​</a></h2><p>不论什么样的资源，都是通过使用相同的接口进行资源的访问。</p><p><code>RestFul</code> 可以通过一套统一的接口为 <code>Web</code>，<code>iOS 和 Android </code>提供服务。</p><p><code>RestFul</code> 架构风格规定，数据的元操作，即 <code>CRUD(create, read, update 和 delete,即数据的增删查改)</code>操作，分别对应于 <code>HTTP</code> 方法：</p><ul><li><code>GET</code> 用来获取资源</li><li><code>POST</code> 用来新建资源（也可以用于更新资源）</li><li><code>PUT</code> 用来更新资源，<code>DELETE</code> 用来删除资源，这样就统一了数据操作的接口，仅通过 <code>HTTP</code> 方法，就可以完成对数据的所有增删查改工作。</li></ul><h2 id="rest-和-restful-的区别" tabindex="-1"><code>rest</code> 和 <code>RestFul</code> 的区别 <a class="header-anchor" href="#rest-和-restful-的区别" aria-label="Permalink to &quot;`rest` 和 `RestFul` 的区别&quot;">​</a></h2><ul><li><code>rest</code> 是一种架构风格。</li><li><code>RestFul</code> 是遵循了 <code>rest</code> 的原则 的<code>web</code>服务。</li><li><code>retFul</code> 是有 <code>rest</code> 衍生出来的。</li></ul><h3 id="rest-原则" tabindex="-1"><code>rest</code> 原则 <a class="header-anchor" href="#rest-原则" aria-label="Permalink to &quot;`rest` 原则&quot;">​</a></h3><ol><li>网络上的所有事物都被抽象为资源。</li><li>每一个资源都有一个唯一的资源标识符。</li><li>同一个资源具有多种表现形式<code>（xml、json 等）</code>。</li><li>对于资源的各种操作不会改变资源的标识符。</li><li>所有操作都是无状态的。</li></ol><h3 id="什么是无状态和有状态" tabindex="-1">什么是无状态和有状态 <a class="header-anchor" href="#什么是无状态和有状态" aria-label="Permalink to &quot;什么是无状态和有状态&quot;">​</a></h3><ul><li>有状态：后面每一个状态都依赖于前面的状态，没有一个 <code>url</code>，能够直接定位到想要的资源。</li><li>无状态：对每个资源请求，都不依赖于其他资源或其他请求。每个资源都可以寻址的，都有至少一个 <code>url</code> 能对其定位的。</li></ul><h3 id="在-restful-之前的操作" tabindex="-1">在 <code>RestFul</code> 之前的操作 <a class="header-anchor" href="#在-restful-之前的操作" aria-label="Permalink to &quot;在 `RestFul` 之前的操作&quot;">​</a></h3><ul><li><a href="http://127.0.0.1/user/query/1" target="_blank" rel="noreferrer">http://127.0.0.1/user/query/1</a> <code>GET</code>   根据用户 <code>id</code> 查询用户数据</li><li><a href="http://127.0.0.1/user/save" target="_blank" rel="noreferrer">http://127.0.0.1/user/save</a> <code>POST</code> 新增用户</li><li><a href="http://127.0.0.1/user/update" target="_blank" rel="noreferrer">http://127.0.0.1/user/update</a> <code>POST</code> 修改用户信息</li><li><a href="http://127.0.0.1/user/delete" target="_blank" rel="noreferrer">http://127.0.0.1/user/delete</a> <code>GET/POST</code> 删除用户信息</li></ul><h3 id="restful-用法" tabindex="-1"><code>RestFul</code> 用法 <a class="header-anchor" href="#restful-用法" aria-label="Permalink to &quot;`RestFul` 用法&quot;">​</a></h3><ul><li><a href="http://127.0.0.1/user/1" target="_blank" rel="noreferrer">http://127.0.0.1/user/1</a> <code>GET</code>   根据用户 <code>id</code> 查询用户数据</li><li><a href="http://127.0.0.1/user" target="_blank" rel="noreferrer">http://127.0.0.1/user</a>  <code>POST</code>  新增用户</li><li><a href="http://127.0.0.1/user" target="_blank" rel="noreferrer">http://127.0.0.1/user</a>  <code>PUT</code>  修改用户信息</li><li><a href="http://127.0.0.1/user" target="_blank" rel="noreferrer">http://127.0.0.1/user</a>  <code>DELETE</code>  删除用户信息</li></ul><h2 id="restful-中的请求方法有哪些" tabindex="-1"><code>RestFul</code> 中的请求方法有哪些 <a class="header-anchor" href="#restful-中的请求方法有哪些" aria-label="Permalink to &quot;`RestFul` 中的请求方法有哪些&quot;">​</a></h2><p><code>get</code>、<code>post</code>、<code>put</code>、<code>delete</code>、<code>head</code>、<code>options</code>。</p><h3 id="put" tabindex="-1"><code>PUT</code> <a class="header-anchor" href="#put" aria-label="Permalink to &quot;`PUT`&quot;">​</a></h3><p><code>put</code> 方法在 <code>Rest</code> 中主要用于更新资源，因为大多数浏览器不支持 <code>put</code> 和 <code>delete</code>，会自动将 <code>put</code> 和 <code>delete</code> 请求转化为 <code>get</code> 和 <code>post</code>。</p><p>因此为了使用 <code>put</code> 和 <code>delete</code> 方法,需要以 <code>post</code> 发送请求，在表单中使用隐藏域发送真正的请求。</p><p><code>put</code> 方法的参数是同 <code>post</code> 一样是存放在消息中的，同样具有安全性，可发送较大信息。</p><p><code>put</code> 方法是幂等的，对同一 <code>URL</code> 资源做出的同一数据的任意次 <code>put</code> 请求其对数据的改变都是一致的。比如更新<code>/student/2</code> 的 <code>name</code> 值为 <code>bobdylan</code>，不论提交该请求多少次，<code>/student/2</code> 资源的 <code>name</code> 值会于提交一次请求无异。</p><h3 id="delete" tabindex="-1"><code>DELETE</code> <a class="header-anchor" href="#delete" aria-label="Permalink to &quot;`DELETE`&quot;">​</a></h3><p><code>Delete</code> 在<code>Rest</code>请求中主要用于删除资源，因为大多数浏览器不支持 <code>put</code> 和 <code>delete</code>，会自动将 <code>put</code> 和 <code>delete</code> 请求转化为 get 和 <code>post</code>。</p><p>因此为了使用 <code>put</code> 和 <code>delete</code> 方法,需要以 <code>post</code> 发送请求，在表单中使用隐藏域发送真正的请求。</p><p><code>Delete</code> 方法的参数同 <code>post</code> 一样存放在消息体中,具有安全性，可发送较大信息 <code>Delete</code> 方法是幂等的，不论对同一个资源进行多少次 <code>delete</code> 请求都不会破坏数据。</p><h3 id="options" tabindex="-1"><code>OPTIONS</code> <a class="header-anchor" href="#options" aria-label="Permalink to &quot;`OPTIONS`&quot;">​</a></h3><p><code>options</code> 请求属于浏览器的预检请求，查看服务器是否接受请求，预检通过后，浏览器才会去发 <code>get</code>，<code>post</code>，<code>put</code>，<code>delete</code> 等请求。</p><p>至于什么情况下浏览器会发预检请求，浏览器会会将请求分为两类，简单请求与非简单请求，非简单请求会产生预检 <code>options</code> 请求。</p><h3 id="两种请求方式" tabindex="-1">两种请求方式 <a class="header-anchor" href="#两种请求方式" aria-label="Permalink to &quot;两种请求方式&quot;">​</a></h3><p>浏览器将 <code>CORS</code> 请求分为两类：简单请求<code>（simple request）</code>和非简单请求<code>（not-simple-request）</code>,简单请求浏览器不会预检，而非简单请求会预检。</p><p><strong>这两种方式怎么区分？</strong></p><p>同时满足下列三大条件，就属于简单请求，否则属于非简单请求</p><ol><li>请求方式只能是：<code>GET</code>、<code>POST</code>、<code>HEAD</code>。</li><li><code>HTTP</code> 请求头限制这几种字段：<code>Accept</code>、<code>Accept-Language</code>、<code>Content-Language</code>、<code>Content-Type</code>、<code>Last-Event-ID</code>。</li><li><code>Content-type</code> 只能取：<code>application/x-www-form-urlencoded</code>、<code>multipart/form-data</code>、<code>text/plain</code>。</li></ol><p>对于简单请求，浏览器直接请求，会在请求头信息中，增加一个 <code>origin</code> 字段，来说明本次请求来自哪个源（协议+域名+端口）。</p><p>服务器根据这个值，来决定是否同意该请求，服务器返回的响应会多几个头信息字段，三个与 <code>CORS</code> 请求相关，都是以 <code>Access-Control</code>-开头。</p><ol><li><code>Access-Control-Allow-Origin：</code>该字段是必须的，_ 表示接受任意域名的请求，还可以指定域名。</li><li><code>Access-Control-Allow-Credentials：</code>该字段可选，是个布尔值，表示是否可以携带 <code>cookie</code>，（注意：如果 <code>Access-Control-Allow-Origin</code> 字段设置_，此字段设为 <code>true</code> 无效）。</li><li><code>Access-Control-Allow-Headers：</code>该字段可选，里面可以获取 <code>Cache-Control</code>、<code>Content-Type</code>、<code>Expires</code> 等，如果想要拿到其他字段，就可以在这个字段中指定。</li></ol><p>非简单请求是对那种对服务器有特殊要求的请求，比如请求方式是 <code>PUT</code> 或者 <code>DELETE，或者</code> <code>Content-Type</code> 字段类型是 <code>application/json</code>，都会在正式通信之前，增加一次 <code>HTTP</code> 请求，称之为预检。</p><p>浏览器会先询问服务器，当前网页所在域名是否在服务器的许可名单之中，服务器允许之后，浏览器会发出正式的 <code>XMLHttpRequest</code> 请求，否则会报错。（备注：之前碰到预检请求后端没有通过，就不会发正式请求，然后找了好久原因，原来后端给忘了设置...）<code>Java</code> 后端实现拦截器，排除 <code>Options</code>。</p><h2 id="经典面试题-get-与-post的区别" tabindex="-1">经典面试题 <code>Get</code> 与 <code>Post</code>的区别 <a class="header-anchor" href="#经典面试题-get-与-post的区别" aria-label="Permalink to &quot;经典面试题 `Get` 与 `Post`的区别&quot;">​</a></h2><h3 id="最普遍的答案" tabindex="-1">最普遍的答案 <a class="header-anchor" href="#最普遍的答案" aria-label="Permalink to &quot;最普遍的答案&quot;">​</a></h3><ul><li><code>GET</code> 使用 <code>URL</code> 或 <code>Cookie</code> 传参，而 <code>POST</code> 将数据放在 <code>BODY</code> 中。</li><li><code>GET</code> 方式提交的数据有长度限制，则 <code>POST</code> 的数据则可以非常大。</li><li><code>POST</code> 比 <code>GET</code> 安全，因为数据在地址栏上不可见</li></ul>',44)),e("p",null,[e("strong",null,[l(c,{color:"FF9D00"},{default:a(()=>d[0]||(d[0]=[o("“标准答案”其实是错的")])),_:1})])]),d[5]||(d[5]=e("h3",{id:"get-使用-url-或-cookie-传参-而-post-将数据放在-body-中",tabindex:"-1"},[e("code",null,"GET"),o(" 使用 "),e("code",null,"URL"),o(" 或 "),e("code",null,"Cookie"),o(" 传参，而 "),e("code",null,"POST"),o(" 将数据放在 "),e("code",null,"BODY"),o(" 中 "),e("a",{class:"header-anchor",href:"#get-使用-url-或-cookie-传参-而-post-将数据放在-body-中","aria-label":'Permalink to "`GET` 使用 `URL` 或 `Cookie` 传参，而 `POST` 将数据放在 `BODY` 中"'},"​")],-1)),e("p",null,[e("strong",null,[l(c,{color:"FF9D00"},{default:a(()=>d[1]||(d[1]=[e("code",null,"GET",-1),o(" 和 "),e("code",null,"POS",-1),o("T 是由 "),e("code",null,"HTTP",-1),o(" 协议定义的。")])),_:1})])]),d[6]||(d[6]=t('<p>在 <code>HTTP</code> 协议中，<code>Method</code> 和 <code>Data（URL， Body， Header）</code>是正交的两个概念，也就是说，使用哪个 <code>Method</code>与应用层的数据如何传输是没有相互关系的。</p><p><code>HTTP</code> 没有要求，如果 <code>Method</code> 是 <code>POST</code> 数据就要放在 <code>BODY</code> 中。也没有要求，如果 <code>Method</code> 是 <code>GET</code>，数据（参数）就一定要放在 URL 中而不能放在 <code>BODY</code> 中。</p><p>那么，网上流传甚广的这个说法是从何而来的呢？我在 <code>HTML</code> 标准中，找到了相似的描述。这和网上流传的说法一致。但是这只是 <code>HTML</code> 标准对 <code>HTTP</code> 协议的用法的约定。怎么能当成 <code>GET</code> 和 <code>POST</code> 的区别呢？</p><p>而且，现代的 <code>Web Server</code> 都是支持 <code>GET</code> 中包含 <code>BODY</code> 这样的请求。虽然这种请求不可能从浏览器发出，但是现在的 <code>Web Server</code> 又不是只给浏览器用，已经完全地超出了<code>HTML</code> 服务器的范畴了。</p><h3 id="get-方式提交的数据有长度限制-则-post-的数据则可以非常大" tabindex="-1">GET 方式提交的数据有长度限制，则 POST 的数据则可以非常大 <a class="header-anchor" href="#get-方式提交的数据有长度限制-则-post-的数据则可以非常大" aria-label="Permalink to &quot;GET 方式提交的数据有长度限制，则 POST 的数据则可以非常大&quot;">​</a></h3>',5)),e("p",null,[e("strong",null,[l(c,{color:"FF9D00"},{default:a(()=>d[2]||(d[2]=[o("先说结论："),e("code",null,"HTTP",-1),o(" 协议对 "),e("code",null,"GET",-1),o(" 和 "),e("code",null,"POST",-1),o(" 都没有对长度的限制。"),e("code",null,"HTTP",-1),o(" 协议明确地指出了，"),e("code",null,"HTTP",-1),o(" 头和 Body 都没有长度的要求。")])),_:1})])]),d[7]||(d[7]=t('<p>首先是&quot;<code>GET</code> 方式提交的数据有长度限制&quot;，如果我们使用 <code>GET</code> 通过 <code>URL</code> 提交数据，那么 <code>GET</code> 可提交的数据量就跟 URL 的长度有直接关系了。而实际上，<code>URL</code> 不存在参数上限的问题，HTTP 协议规范没有对 URL 长度进行限制。这个限制是特定的浏览器及服务器对它的限制。<code>IE</code> 对 <code>URL</code> 长度的限制是 <code>2083 字节(2K+35)</code>。对于其他浏览器，如 <code>Netscape</code>、<code>FireFox</code> 等，理论上没有长度限制，其限制取决于操作系统的支持。</p><p>注意这个限制是整个 <code>URL</code> 长度，而不仅仅是你的参数值数据长度。</p><p><code>POST</code> 也是一样，<code>POST</code> 是没有大小限制的，<code>HTTP</code> 协议规范也没有对 <code>POST</code> 数据进行大小限制，起限制作用的是服务器的处理程序的处理能力。 当然，我们常说 <code>GET</code> 的 <code>URL</code> 会有长度上的限制这个说法是怎么回事呢？虽然这个不是 <code>GET</code> 和 <code>POST</code> 的本质区别，但是我们也可以说说导致 <code>URL</code> 长度限制的两方面的原因：</p><ol><li><p>浏览器。早期的浏览器会对 <code>UR</code>L 长度做限制。而现在的具体限制是怎么样的，我自己没有亲测过，就不复制网上的说法啦。</p></li><li><p>服务器。<code>URL</code> 长了，对服务器处理也是一种负担。原本一个会话就没有多少数据，现在如果有人恶意地构造<code>几个 M</code> 大小的 <code>URL</code>，并不停地访问你的服务器。服务器的最大并发数显然会下降。另一种攻击方式是，告诉服务器 <code>Content-Length</code> 是一个很大的数，然后只给服务器发一点儿数据，服务器你就傻等着去吧。哪怕你有超时设置，这种故意的次次访问超时也能让服务器吃不了兜着走。有鉴于此，多数服务器出于安全啦、稳定啦方面的考虑，会给 <code>URL</code> 长度加限制。但是这个限制是针对所有 <code>HTTP</code> 请求的，与 <code>GET</code>、<code>POST</code> 没有关系。</p></li><li><p><code>POST</code> 比 <code>GET</code> 安全，因为数据在地址栏上不可见</p></li></ol><p>这个说法其实也是基于上面的 1，2 两点的基础上来说的，我觉得没什么问题，但是需要明白为什么使用 <code>GET</code> 在地址栏上就不安全了，以及还有没有其他原因说明“<code>POST</code> 比 <code>GET</code> 安全”。</p><p>通过 <code>GET</code> 提交数据，用户名和密码将明文出现在 <code>URL</code> 上，因为登录页面有可能被浏览器缓存，其他人查看浏览器的历史纪录，那么别人就可以拿到你的账号和密码了，除此之外，使用 <code>GET</code> 提交数据还可能会造成 <code>Cross-site request forgery</code> 攻击。</p><h3 id="理解" tabindex="-1">理解 <a class="header-anchor" href="#理解" aria-label="Permalink to &quot;理解&quot;">​</a></h3><ol><li><code>GET</code> 使用 <code>URL</code> 或 <code>Cookie</code> 传参，而 <code>POST</code> 将数据放在 <code>BODY</code> 中”，这个是因为 <code>HTTP</code> 协议用法的约定。并非它们的本身区别。</li><li><code>GET</code> 方式提交的数据有长度限制，则 <code>POST</code> 的数据则可以非常大”，这个是因为它们使用的操作系统和浏览器设置的不同引起的区别。也不是 <code>GET</code> 和 <code>POST</code> 本身的区别。</li><li><code>POST</code> 比 <code>GET</code> 安全，因为数据在地址栏上不可见”，这个说法没毛病，但依然不是 <code>GET</code> 和 <code>POST</code> 本身的区别。</li></ol><h3 id="终极区别" tabindex="-1">终极区别 <a class="header-anchor" href="#终极区别" aria-label="Permalink to &quot;终极区别&quot;">​</a></h3>',9)),e("p",null,[e("strong",null,[l(c,{color:"FF9D00"},{default:a(()=>d[3]||(d[3]=[e("code",null,"GET",-1),o(" 和 "),e("code",null,"POST",-1),o(" 最大的区别主要是 "),e("code",null,"GET",-1),o(" 请求是幂等性的，"),e("code",null,"POST",-1),o(" 请求不是。")])),_:1})])]),d[8]||(d[8]=t("<p>这个是它们本质区别，上面的只是在使用上的区别。</p><p>什么是幂等性？</p><p>幂等性是指一次和多次请求某一个资源应该具有同样的副作用。简单来说意味着对同一 <code>URL</code> 的多个请求应该返回同样的结果。</p><p>正因为它们有这样的区别，所以不应该且不能用 <code>get</code> 请求做数据的增删改这些有副作用的操作。因为 <code>get</code> 请求是幂等的，在网络不好的隧道中会尝试重试。如果用 <code>get</code> 请求增数据，会有重复操作的风险，而这种重复操作可能会导致副作用（浏览器和操作系统并不知道你会用 <code>get</code> 请求去做增操作）。</p>",4))])}const R=r(u,[["render",p]]);export{O as __pageData,R as default};
