import{_ as e,o,c as d,Q as c}from"./chunks/framework.a5035e6c.js";const m=JSON.parse('{"title":"Node","description":"","frontmatter":{},"headers":[],"relativePath":"node/base/base.md","lastUpdated":1723537988000}'),a={name:"node/base/base.md"},s=c('<h1 id="node" tabindex="-1">Node <a class="header-anchor" href="#node" aria-label="Permalink to &quot;Node&quot;">​</a></h1><h2 id="nodejs-的特点" tabindex="-1"><code>Nodejs</code> 的特点 <a class="header-anchor" href="#nodejs-的特点" aria-label="Permalink to &quot;`Nodejs` 的特点&quot;">​</a></h2><p><code>Node.js</code> 最大的特点就是使用 异步式 <code>I/O</code> 与 事件驱动 的架构设计。</p><p>对于高并发的解决方案，传统的架构是多线程模型，而 <code>Node.js</code> 使用的是 单线程 模型，对于所有 <code>I/O</code> 都使用非阻塞的异步式的请求方式，避免了频繁的线程切换。</p><p>异步式 <code>I/O</code> 是这样实现的：由于大多数现代内核都是多线程的，所以它们可以处理在后台执行的多个操作。</p><p><img src="https://steinsgate.oss-cn-hangzhou.aliyuncs.com/node_async.jpg" alt="node_async"></p><p><code>Node.js</code> 在执行的过程中会维护一个事件队列，程序在执行时进入 事件循环 等待下一个事件到来。</p><p>当事件到来时，事件循环将操作交给系统内核，当一个操作完成后内核会告诉 <code>Nodejs</code>，对应的回调会被推送到事件队列，等待程序进程进行处理。</p><h2 id="nodejs-的架构" tabindex="-1"><code>Nodejs</code> 的架构 <a class="header-anchor" href="#nodejs-的架构" aria-label="Permalink to &quot;`Nodejs` 的架构&quot;">​</a></h2><p><img src="https://steinsgate.oss-cn-hangzhou.aliyuncs.com/node_1.png" alt="node"></p><p><code>Node.js</code> 使用 <code>V8</code> 作为 <code>JavaScript</code> 引擎，使用高效的 <code>libev</code> 和 <code>libeio</code> 库支持事件驱动和异步式 <code>I/O</code>。</p><p><code>Node.js</code> 的开发者在 <code>libev</code> 和 <code>libeio</code> 的基础上还抽象出了层 <code>libuv</code>。对于 POSIX1 操作系统，<code>libuv</code> 通过封装 <code>libev</code> 和 <code>libeio</code> 来利用 <code>epoll</code> 或 <code>kqueue</code>。在 <code>Windows</code> 下，<code>libuv</code> 使用了 <code>Windows</code> 的 <code>IOCP</code> 机制，以在不同平台下实现同样的高性能。</p><h2 id="nodejs-的运行机制" tabindex="-1"><code>Nodejs</code> 的运行机制 <a class="header-anchor" href="#nodejs-的运行机制" aria-label="Permalink to &quot;`Nodejs` 的运行机制&quot;">​</a></h2><p><img src="https://steinsgate.oss-cn-hangzhou.aliyuncs.com/node_system.jpg" alt="node_system"></p><ol><li><code>V8</code> 引擎解析 <code>JavaScript</code> 脚本。</li><li>解析后的代码，调用 <code>Node API</code>。</li><li><code>libuv</code> 库负责 <code>Node API</code> 的执行。它将不同的任务分配给不同的线程，形成一个 <code>Event Loop（事件循环）</code>，以异步的方式将任务的执行结果返回给 <code>V8</code> 引擎。</li><li><code>V8</code> 引擎再将结果返回给用户</li></ol><h2 id="node-的一些概念" tabindex="-1"><code>Node</code> 的一些概念 <a class="header-anchor" href="#node-的一些概念" aria-label="Permalink to &quot;`Node` 的一些概念&quot;">​</a></h2><ol><li><code>node</code> 不是一门语言，其核心就是一个让 <code>JS</code> 运行在服务端的一个运行时（我们可以用 <code>JS</code> 来实现服务端，或工具）。</li><li><code>JS</code> 有几部分组成：<code>BOM</code>、<code>DOM</code>、<code>ECMASCRIPT</code>。</li><li><code>node</code> 中只能使用 <code>ECMASCRIPT</code> 语法本身（<code>node</code> 提供了内置模块可以帮助我们做系统级别的操作：<code>fs</code>，<code>http</code>...）+ <code>npm 包</code>。</li><li><code>node</code> 做中间层是用来处理服务端返回的数据格式问题，并且还能解决跨域问题（后端是没有跨域的，跨域是浏览器做的限制）。</li><li>ssr 服务端渲染：<code>node</code> 可以解析 <code>react</code>、<code>vue</code> 语法渲染后返回给浏览器。</li><li>前端打包工具 <code>webpack</code>、<code>rollup</code> 都是基于 <code>node</code> 实现的，前端可以用 <code>node</code> 来实现各种各样的工具。</li><li><code>node</code> 做服务端是没什么优势的，刚开始是为了与 <code>web</code> 密切结合的。</li><li><code>node</code> 的主线程是单线程。</li><li><code>java 多线程</code>每次请求都开一个线程（引出线程池的概念），但是请求过多的话，也会浪费内存，<code>java 中的锁</code>：当多线程请求操作同一个资源时，是要一个一个来操作的，就是当一个在操作时，锁上，操作完毕后打开，依次往复。 <code>java</code> 是通过时间切片进行并发操作的，时间切片也是有性能消耗的。</li></ol><p><code>java</code> 可以利用多线程实现加密、压缩、计算等 <code>cpu 密集型操作</code>。</p><ol start="10"><li><code>node</code> 高并发都是单线程异步的，<code>node</code> 本身有个 <code>libuv</code> 库，内部是用多线程实现异步的。</li></ol><p><img src="https://steinsgate.oss-cn-hangzhou.aliyuncs.com/java.png" alt="java"></p><ol><li><p><code>node</code> 没有锁的概念，就是一个主线程（内存消耗小），如果主线程工作量大就会有阻塞的问题，所以 <code>node</code> 不适合做 <code>cpu</code> 密集的操作，适合 <code>i/o(input/output，文件读写)</code>操作。 <code>node</code> 可以开子进程，多个进程就可以充分利用 <code>cpu</code> 内核。</p></li><li><p>异步非阻塞，同步阻塞（阻塞和非阻塞针对的是 调用方 异步同步指的是被调用方）</p></li></ol><div class="language-lua line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">处理时，是异步的。</span></span>\n<span class="line"><span style="color:#BABED8;">当前端请求</span><span style="color:#676E95;font-style:italic;">--&gt;node --&gt;数据库</span></span>\n<span class="line"><span style="color:#BABED8;">当前端请求</span><span style="color:#676E95;font-style:italic;">--&gt; | --&gt;数据库</span></span>\n<span class="line"><span style="color:#BABED8;">当数据库在处理时，node会去处理下一个请求，数据库处理完这个时，通知node，node再回来把数据返回去</span></span>\n<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>',22),n=[s];function l(i,t,p,r,u,h){return o(),d("div",null,n)}const _=e(a,[["render",l]]);export{m as __pageData,_ as default};
