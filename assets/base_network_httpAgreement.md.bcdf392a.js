import{_ as a,B as h,o as p,c as n,x as e,D as d,z as t,a as o,Q as l}from"./chunks/framework.a5035e6c.js";const Se=JSON.parse('{"title":"HTTP 协议","description":"","frontmatter":{},"headers":[],"relativePath":"base/network/httpAgreement.md","lastUpdated":1723537988000}'),i={name:"base/network/httpAgreement.md"},s=l('<h1 id="http-协议" tabindex="-1">HTTP 协议 <a class="header-anchor" href="#http-协议" aria-label="Permalink to &quot;HTTP 协议&quot;">​</a></h1><h2 id="http-0-9-单行协议" tabindex="-1"><code>http/0.9</code> - 单行协议 <a class="header-anchor" href="#http-0-9-单行协议" aria-label="Permalink to &quot;`http/0.9` - 单行协议&quot;">​</a></h2><p><code>http</code> 于 1990 年问世，那时候 <code>http</code> 非常简单：只支持 <code>GET</code> 方法；没有首部；只能获取纯文本。</p><h2 id="http-1-0-搭建协议的框架" tabindex="-1"><code>http/1.0</code> - 搭建协议的框架 <a class="header-anchor" href="#http-1-0-搭建协议的框架" aria-label="Permalink to &quot;`http/1.0` - 搭建协议的框架&quot;">​</a></h2><p>1996 年，<code>http</code> 正式被作为标准公布，版本为 <code>http/1.0</code>。1.0 版本增加了首部、状态码、权限、缓存、长连接（默认短连接）等规范，可以说搭建了协议的基本框架。</p><p>缺陷：无法复用链接，完成即断开，重新慢启动和 <code>TCP 3 次握手</code>。</p><h2 id="http-1-1-进一步完善" tabindex="-1"><code>http/1.1</code> - 进一步完善 <a class="header-anchor" href="#http-1-1-进一步完善" aria-label="Permalink to &quot;`http/1.1` - 进一步完善&quot;">​</a></h2><p>1997 年，1.1 版本接踵而至。1.1 版本的重大改进在于默认长连接；强制客户端提供 <code>Host</code> 首部；管线化；<code>Cache-Control</code>、<code>ETag</code> 等缓存的相关扩展。</p><h3 id="http-1-1-存在有哪些问题" tabindex="-1"><code>http/1.1</code> 存在有哪些问题： <a class="header-anchor" href="#http-1-1-存在有哪些问题" aria-label="Permalink to &quot;`http/1.1` 存在有哪些问题：&quot;">​</a></h3>',9),r=e("p",null,[o("线头阻塞："),e("code",null,"TCP"),o(" 连接上只能发送一个请求，前面的请求未完成前，后续的请求都在排队等待。 针对队头阻塞,人们尝试过以下办法来解决：")],-1),u=e("code",null,"Chrome",-1),_=e("code",null,"TCP",-1),T=e("code",null,"TCP",-1),P=e("code",null,"chrome",-1),C=e("p",null,[o("精灵图，"),e("code",null,"Spriting"),o(" 合并多张小图为一张大图,再用 "),e("code",null,"JavaScript"),o(" 或者 "),e("code",null,"CSS"),o(" 将小图重新“切割”出来的技术。")],-1),m=e("code",null,"(Inlining)",-1),b=e("code",null,"CSS",-1),S=e("code",null,"URL",-1),f=e("p",null,[o("拼接"),e("code",null,"(Concatenation)"),o("将多个体积较小的 "),e("code",null,"JavaScript"),o(" 使用"),e("code",null,"webpack"),o("等工具打包成 1 个体积更大的"),e("code",null,"JavaScript"),o("文件,但如果其中 1 个文件的改动就会导致大量数据被重新下载多个文件。")],-1),q=e("li",null,[e("p",null,[o("多个 "),e("code",null,"TCP"),o(" 连接")])],-1),g=e("p",null,[o("虽然 "),e("code",null,"http/1.1"),o(" 管线化可以支持请求并发，所以 1.1 版本请求并发依赖于多个 "),e("code",null,"TCP"),o(" 连接，建立 "),e("code",null,"TCP"),o(" 连接成本很高，还会存在慢启动的问题。")],-1),k=e("ol",{start:"3"},[e("li",null,"头部冗余，采用文本格式")],-1),I=e("code",null,"http/1.x",-1),x=e("code",null,"cookie",-1),D=e("code",null,"user-agent",-1),F=e("code",null,"http",-1),U=e("code",null,"cookie",-1),A=e("code",null,"Header",-1),R=e("code",null,'"User Agent"',-1),Q=e("code",null,'"Cookie"',-1),L=e("code",null,'"Accept"',-1),E=e("code",null,'"Server"',-1),H=e("code",null,"Body",-1),V=e("code",null,"GET",-1),v=e("code",null,"Header",-1),y={start:"4"},N=e("li",null,"客户端需要主动请求",-1),w=e("code",null,"http/1.1",-1),z=e("h2",{id:"http-2",tabindex:"-1"},[e("code",null,"http/2"),o(),e("a",{class:"header-anchor",href:"#http-2","aria-label":'Permalink to "`http/2`"'},"​")],-1),B=e("code",null,"http/2",-1),G=e("code",null,"http/2",-1),W=e("code",null,"http",-1),j=e("code",null,"（http/1.x）",-1),J=e("code",null,"http",-1),K=e("code",null,"http/1.x ",-1),$=e("code",null,"http/2",-1),M=e("code",null,"SPDY",-1),O=e("code",null,"（connection）",-1),Y=e("code",null,"http/2",-1),X=e("code",null,"http/2",-1),Z=e("p",null,[e("code",null,"http/2"),o(" 由两个规范"),e("code",null,"（Specification）"),o("组成：")],-1),ee=e("ul",null,[e("li",null,[e("code",null,"Hypertext Transfer Protocol version 2 - RFC7540")]),e("li",null,[e("code",null,"HPACK - Header Compression for http/2 - RFC7541")])],-1),oe=e("code",null,"http/2",-1),ce=e("code",null,"Header",-1),de=l('<h3 id="二进制分帧层" tabindex="-1">二进制分帧层 <a class="header-anchor" href="#二进制分帧层" aria-label="Permalink to &quot;二进制分帧层&quot;">​</a></h3><p><code>http/2</code> 是二进制协议，他采用二进制格式传输数据而不是 1.x 的文本格式。</p><p><img src="https://steinsgate.oss-cn-hangzhou.aliyuncs.com/http2.png" alt="http2"></p><p>👆 的图中很清晰的表达了 <code>http/1.1</code> 的响应和 2.0 的区别。 1.1 响应是文本格式，而 2.0 把响应划分成了两个帧，图中的 <code>HEADERS（首部</code>）和<code>DATA（消息负载</code> 是帧的类型。也就是说一条 <code>http</code>响应，划分成了两个帧来传输，并且采用二进制来编码。</p><p>这里我们来提三个概念。</p><ul><li>流<code>（Stream）</code>：已建立的 <code>TCP</code> 连接上的双向字节流，可以承载一个或多个消息。</li><li>消息<code>（Message）</code>：一个完整的 <code>http</code> 请求或响应，由一个或多个帧组成。特定消息的帧在同一个流上发送，这意味着一个 <code>http</code> 请求或响应只能在一个流上发送。</li><li>帧<code>（Frame）</code>：通信的基本单位。</li></ul><p>一个 <code>TCP</code> 连接上可以有任意数量的流。</p><h3 id="头部压缩" tabindex="-1">头部压缩 <a class="header-anchor" href="#头部压缩" aria-label="Permalink to &quot;头部压缩&quot;">​</a></h3><p>在 1.x 版本中，首部用文本格式传输，通常会给每个传输增加 500-800 字节的开销。现在打开一个网页上百个请求已是常态，而每个请求带的一些首部字段都是相同的，例如 <code>cookie</code>、<code>user-agent</code> 等。</p>',9),te=e("code",null,"http/2",-1),le=e("code",null,"HPACK",-1),ae=l('<ul><li>维护一份相同的静态字典，包含常见的头部名称，以及常见的头部名称和值的组合。</li><li>维护一份相同的动态字典，可以动态的添加内容。</li><li>通过静态 Huffman 编码对传输的首部字段进行编码。</li></ul><p><code>http2</code> 的静态字典是长这个样子的（只截取了部分）：</p><p><img src="https://steinsgate.oss-cn-hangzhou.aliyuncs.com/header_zip.png" alt="header_zip"></p><p>所以我们在传输首部字段的时候，例如要传输 <code>method:GET</code>,那我们只需要传输静态字典里面 <code>method:GET</code> 对应的索引值就可以了，一个字节搞定。</p><p>像 <code>user-agent</code>、<code>cookie</code> 这种静态字典里面只有首部名称而没有值的首部，第一次传输需要 <code>user-agent</code> 在静态字典中的索引以及他的值，值会采用静态 <code>Huffman</code> 编码来减小体积。</p><p>第一次传输过 <code>user-agent</code> 之后呢，浏览器和服务器端就会把它添加到自己的动态字典中。后续传输就可以传输索引了，一个字节搞定。</p><h3 id="多路复用" tabindex="-1">多路复用 <a class="header-anchor" href="#多路复用" aria-label="Permalink to &quot;多路复用&quot;">​</a></h3><p>在 <code>http/2</code> 中:</p>',8),he=l('<p>这一特性，使性能有了极大提升：</p><ul><li>同个域名只需要占用一个 <code>TCP</code> 连接，使用一个连接并行发送多个请求和响应,这样整个页面资源的下载过程只需要一次慢启动，同时也避免了多个 <code>TCP</code> 连接竞争带宽所带来的问题。</li><li>并行交错地发送多个请求/响应，请求/响应之间互不影响。</li><li>在 <code>http/2</code> 中，每个请求都可以带一个 <code>31bit</code> 的优先值，0 表示最高优先级， 数值越大优先级越低。有了这个优先值，客户端和服务器就可以在处理不同的流时采取不同的策略，以最优的方式发送流、消息和帧。</li></ul><p><img src="https://steinsgate.oss-cn-hangzhou.aliyuncs.com/http2.jpg" alt="http2"></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>多路复用的技术可以只通过一个 <code>TCP</code> 连接就可以传输所有的请求数，但是还是会有请求排队现象。</p><p>一个 <code>TCP</code> 连接可以有任意数量的流，也就是同时可以并发任意数量的请求啊，为啥还会排队呢？</p><p>原因就是请求太多时，浏览器或服务器会受不了，这超出了它的处理能力。</p><p>流控制帮我们解决了这个问题，流控制会管理数据的传输，允许接收者停止或减少发送的数据量，免得接收方不堪重负。</p><p>所以请求太多时，还是会存在排队等待的问题，因为不管是客户端或服务器端，能同时处理请求或响应都是有限的。</p></div><h3 id="服务端推送" tabindex="-1">服务端推送 <a class="header-anchor" href="#服务端推送" aria-label="Permalink to &quot;服务端推送&quot;">​</a></h3><p>服务器端推送使得服务器可以预测客户端需要的资源，主动推送到客户端。</p><p>例如：客户端请求 <code>index.html</code>，服务器端能够额外推送 <code>script.js</code> 和 <code>style.css</code>。 实现原理就是客户端发出页面请求时，服务器端能够分析这个页面所依赖的其他资源，主动推送到客户端的缓存，当客户端收到原始网页的请求时，它需要的资源已经位于缓存。</p><p>针对每一个希望发送的资源，服务器会发送一个 <code>PUSH_PROMISE</code> 帧，客户端可以通过发送 <code>RST_STREAM</code> 帧来拒绝推送（当资源已经位于缓存）。</p><p>这一步的操作先于父响应<code>（index.html）</code>，客户端了解到服务器端打算推送哪些资源，就不会再为这些资源创建重复请求。当客户端收到 <code>index.html</code> 的响应时，<code>script.js</code> 和 <code>style.css</code> 已经位于缓存。</p><h3 id="提高安全性" tabindex="-1">提高安全性 <a class="header-anchor" href="#提高安全性" aria-label="Permalink to &quot;提高安全性&quot;">​</a></h3><p>出于兼容的考虑，<code>http/2</code> 延续了 <code>http/1</code> 的“明文”特点，可以像以前一样使用明文传输数据，不强制使用加密通信，不过格式还是二进制，只是不需要解密。</p><p>但由于 https 已经是大势所趋，而且主流的浏览器 <code>Chrome</code>、<code>Firefox</code> 等都公开宣布只支持加密的 <code>http/2</code>，所以“事实上”的 <code>http/2</code> 是加密的。</p><p>也就是说，互联网上通常所能见到的 <code>http/2</code> 都是使用<code>&quot;https”</code>协议名，跑在 <code>TLS</code> 上面。<code>http/2</code> 协议定义了两个字符串标识符：<code>“h2&quot;</code>表示加密的 <code>http/2</code>，<code>“h2c”</code>表示明文的 <code>http/2</code>。</p><p><img src="https://steinsgate.oss-cn-hangzhou.aliyuncs.com/http2_construct.png" alt="http2_construct"></p><h3 id="http2-的问题" tabindex="-1"><code>http2</code> 的问题 <a class="header-anchor" href="#http2-的问题" aria-label="Permalink to &quot;`http2` 的问题&quot;">​</a></h3><p>主要是底层支撑的 <code>TCP</code> 协议造成的。<code>http/2</code> 的缺点主要有以下几点：</p><ul><li><code>TCP</code> 以及 <code>TCP + TLS</code> 建立连接的延时</li><li><code>TCP</code> 的队头阻塞并没有彻底解决</li><li>多路复用导致服务器压力上升</li><li>多路复用容易 <code>Timeout</code></li></ul><ol><li>建连延时 <code>http/2</code> 都是使用 <code>TCP</code> 协议来传输的，而如果使用 <code>https</code> 的话，还需要使用 <code>TLS</code> 协议进行安全传输，而使用 <code>TLS</code> 也需要一个握手过程，这样就需要有两个握手延迟过程： ① 在建立 <code>TCP</code> 连接的时候，需要和服务器进行三次握手来确认连接成功，即需要消耗完 1.5 个 <code>RTT</code> 之后才能进行数据传输。 ② 进行 <code>TLS</code> 连接，TLS 有两个版本——<code>TLS1.2</code> 和 <code>TLS1.3</code>，每个版本建立连接所花的时间不同，大致是需要 1~2 个 <code>RTT</code>。</li></ol><p>总之，在传输数据之前，我们需要花掉 3 ～ 4 个 <code>RTT</code>。</p><blockquote><p><code>RTT（Round-Trip Time）:</code>往返时延。表示从发送端发送数据开始，到发送端收到来自接收端的确认（接收端收到数据后便立即发送确认），总共经历的时延。</p></blockquote><ol start="2"><li><p>队头阻塞没有彻底解决 上文我们提到在 <code>http/2</code> 中，多个请求是跑在一个 <code>TCP</code> 管道中的。</p><p>但当出现了丢包时，<code>http/2</code> 的表现反倒不如 <code>http/1</code> 了。</p><p>因为 <code>TCP</code> 为了保证可靠传输，有个特别的“丢包重传”机制，丢失的包必须要等待重新传输确认，<code>http/2</code> 出现丢包时，整个 <code>TCP</code> 都要开始等待重传，那么就会阻塞该 <code>TCP</code> 连接中的所有请求（如下图）。而对于 <code>http/1.1</code> 来说，可以开启多个 <code>TCP</code> 连接，出现这种情况反到只会影响其中一个连接，剩余的 <code>TCP</code> 连接还可以正常传输数据。</p></li><li><p>多路复用导致服务器压力上升</p></li></ol><p>多路复用没有限制同时请求数。请求的平均数量与往常相同，但实际会有许多请求的短暂爆发，导致瞬时 <code>QPS</code> 暴增。</p><ol start="4"><li>多路复用容易 <code>Timeout</code></li></ol><p>大批量的请求同时发送，由于 <code>http2</code> 连接内存在多个并行的流，而网络带宽和服务器资源有限，每个流的资源会被稀释，虽然它们开始时间相差更短，但却都可能超时。</p><p>即使是使用 <code>Nginx</code> 这样的负载均衡器，想正确进行节流也可能很棘手。 其次，就算你向应用程序引入或调整排队机制，但一次能处理的连接也是有限的。如果对请求进行排队，还要注意在响应超时后丢弃请求，以避免浪费不必要的资源。</p><h2 id="http3" tabindex="-1">http3 <a class="header-anchor" href="#http3" aria-label="Permalink to &quot;http3&quot;">​</a></h2><p><code>Google</code> 在推 <code>SPDY</code> 的时候就已经意识到了这些问题，于是就另起炉灶搞了一个基于<code>UDP</code>协议的<code>“QUIC”</code>协议，让<code>http</code>跑在 <code>QUIC</code> 上而不是<code>TCP</code>上。</p><p>而这个<code>“http over QUIC”</code>就是<code>http</code>协议的下一个大版本，<code>http/3</code>。它在<code>http/2</code>的基础上又实现了质的飞跃，真正“完美”地解决了“队头阻塞”问题。</p><p><img src="https://steinsgate.oss-cn-hangzhou.aliyuncs.com/http3.jpeg" alt="http3"></p><p><code>QUIC</code> 虽然基于 <code>UDP</code>，但是在原本的基础上新增了很多功能，接下来我们重点介绍几个 <code>QUIC</code> 新功能。不过<code>http/3</code>目前还处于草案阶段，正式发布前可能会有变动，所以本文尽量不涉及那些不稳定的细节。</p><h3 id="quic-新功能" tabindex="-1">QUIC 新功能 <a class="header-anchor" href="#quic-新功能" aria-label="Permalink to &quot;QUIC 新功能&quot;">​</a></h3><p><code>QUIC</code> 基于 <code>UDP</code>，而 <code>UDP</code> 是“无连接”的，根本就不需要“握手”和“挥手”，所以就比<code>TCP</code>来得快。</p><p>此外 <code>QUIC</code> 也实现了可靠传输，保证数据一定能够抵达目的地。</p><p>它还引入了类似 <code>http/2</code> 的“流”和“多路复用”，单个“流&quot;是有序的，可能会因为丢包而阻塞，但其他“流”不会受到影响。具体来说 <code>QUIC</code> 协议有以下特点：</p><h3 id="实现了类似-tcp-的流量控制、传输可靠性的功能" tabindex="-1">实现了类似 <code>TCP</code> 的流量控制、传输可靠性的功能 <a class="header-anchor" href="#实现了类似-tcp-的流量控制、传输可靠性的功能" aria-label="Permalink to &quot;实现了类似 `TCP` 的流量控制、传输可靠性的功能&quot;">​</a></h3><p>虽然 <code>UDP</code> 不提供可靠性的传输，但 <code>QUIC</code> 在 <code>UDP</code> 的基础之上增加了一层来保证数据可靠性传输。它提供了数据包重传、拥塞控制以及其他一些 <code>TCP</code> 中存在的特性。</p><p><code>QUIC</code> 协议到底改进在哪些方面呢？主要有如下几点：</p><ul><li>可插拔 — 应用程序层面就能实现不同的拥塞控制算法。</li><li>单调递增的 <code>Packet Number</code> — 使用 <code>Packet Number</code> 代替了 <code>TCP</code> 的 <code>seq</code>。</li><li>不允许 <code>Reneging</code> — 一个 <code>Packet</code> 只要被 <code>Ack</code>，就认为它一定被正确接收。</li><li>前向纠错<code>（FEC）</code></li><li>更多的 <code>Ack</code> 块和增加 <code>Ack Delay</code> 时间。</li><li>基于 <code>stream</code> 和 <code>connection</code> 级别的流量控制。</li></ul><h3 id="实现了快速握手功能" tabindex="-1">实现了快速握手功能 <a class="header-anchor" href="#实现了快速握手功能" aria-label="Permalink to &quot;实现了快速握手功能&quot;">​</a></h3><p>由于 <code>QUIC</code> 是基于 <code>UDP</code> 的，所以 <code>QUIC</code> 可以实现使用 <code>0-RTT</code> 或者 <code>1-RTT</code> 来建立连接，这意味着 <code>QUIC</code> 可以用最快的速度来发送和接收数据，这样可以大大提升首次打开页面的速度。</p>',40),pe=e("code",null,"0RTT",-1),ne=e("code",null,"QUIC",-1),ie=e("code",null,"http2",-1),se=l('<h3 id="集成了-tls-加密功能" tabindex="-1">集成了 <code>TLS</code> 加密功能 <a class="header-anchor" href="#集成了-tls-加密功能" aria-label="Permalink to &quot;集成了 `TLS` 加密功能&quot;">​</a></h3><p>目前 <code>QUIC</code> 使用的是 <code>TLS1.3</code>，相较于早期版本 <code>TLS1.3</code> 有更多的优点，其中最重要的一点是减少了握手所花费的 <code>RTT</code> 个数。</p><p>在完全握手情况下，需要<code>1-RTT</code>建立连接。 <code>TLS1.3</code> 恢复会话可以直接发送加密后的应用数据，不需要额外的 <code>TLS</code> 握手，也就是 <code>0-RTT</code>。</p><p>但是 <code>TLS1.3</code> 也并不完美。<code>TLS 1.3</code> 的 <code>0-RTT</code> 无法保证前向安全性<code>(Forward secrecy)</code>。简单讲就是，如果当攻击者通过某种手段获取到了 <code>Session Ticket Key</code>，那么该攻击者可以解密以前的加密数据。</p><p>要缓解该问题可以通过设置使得与 <code>Session Ticket Key</code> 相关的 <code>DH</code> 静态参数在短时间内过期（一般几个小时）。</p><h3 id="多路复用-彻底解决tcp中队头阻塞的问题" tabindex="-1">多路复用，彻底解决<code>TCP</code>中队头阻塞的问题 <a class="header-anchor" href="#多路复用-彻底解决tcp中队头阻塞的问题" aria-label="Permalink to &quot;多路复用，彻底解决`TCP`中队头阻塞的问题&quot;">​</a></h3><p>和 <code>TCP</code> 不同，<code>QUIC</code> 实现了在同一物理连接上可以有多个独立的逻辑数据流（如下图）。实现了数据流的单独传输，就解决了 <code>TCP</code> 中队头阻塞的问题。</p><h3 id="连接迁移" tabindex="-1">连接迁移 <a class="header-anchor" href="#连接迁移" aria-label="Permalink to &quot;连接迁移&quot;">​</a></h3><p><code>TCP</code> 是按照 4 要素（<code>客户端 IP</code>、端口, <code>服务器 IP</code>、端口）确定一个连接的。</p><p>而<code>QUIC</code>则是让客户端生成一个 <code>Connection ID （64 位）</code>来区别不同连接。</p><p>只要<code>Connection ID</code>不变，连接就不需要重新建立，即便是客户端的网络发生变化。由于迁移客户端继续使用相同的会话密钥来加密和解密数据包，<code>QUIC</code>还提供了迁移客户端的自动加密验证。</p><h2 id="http-https" tabindex="-1">http &amp; https <a class="header-anchor" href="#http-https" aria-label="Permalink to &quot;http &amp; https&quot;">​</a></h2><ul><li><p><code>http：</code>是一个客户端和服务器端请求和应答的标准<code>（TCP）</code>，用于从<code>WWW</code>服务器传输超文本到本地浏览器的超文本传输协议。</p></li><li><p><code>https：</code>是以安全为目标的 <code>http</code> 通道，即<code>http</code>下 加入<code>SSL</code>层进行加密。其作用是：建立一个信息安全通道，来确保数据的传输，确保网站的真实性。</p></li></ul><h3 id="http-和-https-的区别及优缺点" tabindex="-1"><code>http </code>和 <code>https</code> 的区别及优缺点 <a class="header-anchor" href="#http-和-https-的区别及优缺点" aria-label="Permalink to &quot;`http `和 `https` 的区别及优缺点&quot;">​</a></h3><ul><li><code>http</code> 是超文本传输协议，信息是明文传输，<code>https</code> 协议要比 <code>http</code> 协议安全，<code>https</code> 是具有安全性的 <code>ssl 加密传输协议</code>，可防止数据在传输过程中被窃取、改变，确保数据的完整性(当然这种安全性并非绝对的，对于更深入的 <code>Web</code> 安全问题，此处暂且不表)。</li><li><code>http</code> 协议的默认端口为 80，<code>https</code> 的默认端口为 443。</li><li><code>http</code> 的连接很简单，是无状态的。<code>https</code> 握手阶段比较费时，会使页面加载时间延长 50%，增加 10%~20%的耗电。</li><li><code>https</code> 缓存不如 <code>http</code> 高效，会增加数据开销。</li><li><code>https</code> 协议需要 <code>ca</code> 证书，费用较高，功能越强大的证书费用越高。</li><li><code>SSL</code> 证书需要绑定 <code>IP</code>，不能再同一个 IP 上绑定多个域名，IPV4 资源支持不了这种消耗。</li></ul><h3 id="https-协议的工作原理" tabindex="-1"><code>https</code> 协议的工作原理 <a class="header-anchor" href="#https-协议的工作原理" aria-label="Permalink to &quot;`https` 协议的工作原理&quot;">​</a></h3><p>客户端在使用 <code>https</code> 方式与 <code>Web</code> 服务器通信时有以下几个步骤：</p><ul><li>客户端使用 <code>https url</code> 访问服务器，则要求 <code>web</code> 服务器建立 <code>ssl</code> 链接。</li><li><code>web</code> 服务器接收到客户端的请求之后，会将网站的证书（证书中包含了公钥），传输给客户端。</li><li>客户端和 <code>web</code> 服务器端开始协商 <code>SSL</code> 链接的安全等级，也就是加密等级。</li><li>客户端浏览器通过双方协商一致的安全等级，建立会话密钥，然后通过网站的公钥来加密会话密钥，并传送给网站。</li><li><code>web</code> 服务器通过自己的私钥解密出会话密钥。</li><li><code>web</code> 服务器通过会话密钥加密与客户端之间的通信。</li></ul><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>http/1.1</code> 有两个主要的缺点：安全不足和性能不高。</p><p><code>http/2</code> 完全兼容 <code>http/1</code>，是“更安全的 <code>http</code>、更快的 <code>https</code>&quot;，二进制传输、头部压缩、多路复用、服务器推送等技术可以充分利用带宽，降低延迟，从而大幅度提高上网体验；</p><p><code>QUIC</code> 基于 <code>UDP</code> 实现，是 <code>http/3</code> 中的底层支撑协议，该协议基于 <code>UDP</code>，又取了 <code>TCP</code> 中的精华，实现了即快又可靠的协议。</p></div>',20);function re(ue,_e,Te,Pe,Ce,me){const c=h("font");return p(),n("div",null,[s,e("ol",null,[e("li",null,[r,e("ul",null,[e("li",null,[d(c,{color:"FF9D00"},{default:t(()=>[o("同一页面的资源分散到不同域名下，提升连接上限。")]),_:1}),e("p",null,[e("strong",null,[d(c,{color:"FF9D00"},{default:t(()=>[u,o(" 有个机制，对于同一个域名，默认允许同时建立 6 个 "),_,o(" 持久连接")]),_:1})]),o("，使用持久连接时，虽然能公用一个 "),T,o(" 管道，但是在一个管道中同一时刻只能处理一个请求，在当前的请求没有结束之前，其他的请求只能处于阻塞状态。另外如果在同一个域名下同时有 10 个请求发生，那么其中 4 个请求会进入排队等待状态，直至进行中的请求完成（"),P,o(" 放弃了）")])]),e("li",null,[d(c,{color:"FF9D00"},{default:t(()=>[o("合并小文件减少资源数。")]),_:1}),C]),e("li",null,[e("p",null,[e("strong",null,[d(c,{color:"FF9D00"},{default:t(()=>[o("内联"),m,o("资源是另外一种防止发送很多小图请求的技巧")]),_:1})]),o("，将图片的原始数据嵌入在 "),b,o("文件里面的"),S,o("里，减少网络请求次数。")])]),e("li",null,[d(c,{color:"FF9D00"},{default:t(()=>[o("减少请求数量。")]),_:1}),f])])]),q]),g,k,e("ul",null,[e("li",null,[o("**"),d(c,{color:"FF9D00"},{default:t(()=>[I,o(" 版本是采用文本格式，首部未压缩，")]),_:1}),o("**而且每一个请求都会带上 "),x,o("、"),D,o(" 等完全相同的首部。")]),e("li",null,[d(c,{color:"FF9D00"},{default:t(()=>[o("无状态是指协议对于连接状态没有记忆能力。")]),_:1}),o("纯净的 "),F,o(" 是没有 "),U,o(" 等机制的，每一个连接都是一个新的连接。")]),e("li",null,[o("由于报文 "),A,o(" 一般会携带"),R,o("、"),Q,o("、"),L,o("、"),E,o("等许多固定的头字段，多达几百字节甚至上千字节，但 "),H,o(" 却经常只有几十字节（比如 "),V,o(" 请求、204/301/304 响应），成了不折不扣的“大头儿子”。"),e("strong",null,[d(c,{color:"FF9D00"},{default:t(()=>[v,o(" 里携带的内容过大，在一定程度上增加了传输的成本。更要命的是，请求响应报文里有大量字段值都是重复的，非常浪费。")]),_:1})])])]),e("ol",y,[N,e("li",null,[w,o(" 在传输数据时，所有传输的"),d(c,{color:"FF9D00"},{default:t(()=>[o("内容都是明文")]),_:1}),o("内容都是明文，客户端和服务器端都无法验证对方的身份，这在一定程度上无法保证数据的安全性。")])]),z,e("p",null,[o("2015 年，"),B,o(" 发布。"),G,o(" 是现行 "),W,o(" 协议"),j,o("的替代，但它不是重写，"),J,o(" 方法/状态码/语义都与 "),K,o("一样。 "),$,o(" 基于 "),M,o("，专注于性能，最大的一个目标是在用户和网站间只用一个连接"),O,o("。从目前的情况来看，国内外一些排名靠前的站点基本都实现了 "),Y,o(" 的部署，"),e("strong",null,[d(c,{color:"FF9D00"},{default:t(()=>[o("使用 "),X,o(" 能带来 20%~60%的效率提升。")]),_:1})])]),Z,ee,e("p",null,[e("strong",null,[d(c,{color:"FF4229"},{default:t(()=>[oe,o(" 传输数据量的大幅减少,主要有两个原因:以二进制方式传输和 "),ce,o(" 压缩。")]),_:1})])]),de,e("p",null,[e("strong",null,[d(c,{color:"FF9D00"},{default:t(()=>[te,o(" 为此采用 "),le,o(" 压缩格式来压缩首部。头部压缩需要在浏览器和服务器端之间：")]),_:1})])]),ae,e("ul",null,[e("li",null,[e("strong",null,[d(c,{color:"FF9D00"},{default:t(()=>[o("同域名下所有通信都在单个连接上完成。")]),_:1})])]),e("li",null,[e("strong",null,[d(c,{color:"FF9D00"},{default:t(()=>[o("单个连接可以承载任意数量的双向数据流。")]),_:1})])]),e("li",null,[e("strong",null,[d(c,{color:"FF9D00"},{default:t(()=>[o("数据流以消息的形式发送，而消息又由一个或多个帧组成，多个帧之间可以乱序发送，因为根据帧首部的流标识可以重新组装。")]),_:1})])])]),he,e("p",null,[e("strong",null,[d(c,{color:"FF9D00"},{default:t(()=>[pe,o(" 建连可以说是 "),ne,o(" 相比 "),ie,o(" 最大的性能优势。")]),_:1})])]),se])}const fe=a(i,[["render",re]]);export{Se as __pageData,fe as default};
