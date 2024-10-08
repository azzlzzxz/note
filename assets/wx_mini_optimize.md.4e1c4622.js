import{_ as o,o as a,c as t,N as c}from"./chunks/framework.b71846ef.js";const m=JSON.parse('{"title":"微信小程序优化相关知识","description":"","frontmatter":{},"headers":[],"relativePath":"wx/mini/optimize.md","lastUpdated":1728375592000}'),l={name:"wx/mini/optimize.md"};function p(s,e,i,d,n,r){return a(),t("div",null,e[0]||(e[0]=[c(`<h1 id="微信小程序优化相关知识" tabindex="-1">微信小程序优化相关知识 <a class="header-anchor" href="#微信小程序优化相关知识" aria-label="Permalink to &quot;微信小程序优化相关知识&quot;">​</a></h1><p><img src="https://steinsgate.oss-cn-hangzhou.aliyuncs.com/wx/wx_optimize.jpeg" alt="wx_optimize"></p><h2 id="启动时性能优化" tabindex="-1">启动时性能优化 <a class="header-anchor" href="#启动时性能优化" aria-label="Permalink to &quot;启动时性能优化&quot;">​</a></h2><p>用户能够更快的打开并看到小程序内容，避免耗时过长导致用户流失，启动性能可从以下几个方面进行优化：</p><ul><li><p>代码包体积优化</p></li><li><p>代码注入优化</p></li><li><p>首页渲染优化</p></li></ul><p><img src="https://steinsgate.oss-cn-hangzhou.aliyuncs.com/wx/wx_package.jpeg" alt="wx_package"></p><p>小程序启动时，微信会为小程序展示一个固定的启动界面，此时微信会在背后完成几项工作：</p><ul><li><p>下载小程序代码包</p></li><li><p>加载小程序代码包</p></li><li><p>初始化小程序首页</p></li></ul><blockquote><p>流程图</p></blockquote><p><img src="https://steinsgate.oss-cn-hangzhou.aliyuncs.com/wx/start_flow.png" alt="start_flow"></p><p>在小程序第一次启动时，微信需要下载小程序代码包。此后，如果小程序代码包未更新且还被保留在缓存中，则下载小程序代码包的步骤会被跳过。这样控制代码包大小有助于减少小程序的启动时间。</p><div class="tip custom-block"><p class="custom-block-title">控制代码包大小的方法</p><ul><li><p>精简代码，去掉不必要的 <code>WXML</code> 结构和未使用的 <code>WXSS</code> 定义</p></li><li><p>减少在代码包中直接嵌入的资源文件</p></li><li><p>压缩图片，使用适当的图片格式</p></li></ul></div><p><strong>如果小程序比较复杂，优化后的代码总量可能仍然较大，此时可以采用分包加载的方式进行优化</strong>。小程序的代码包可以被划分为几个（单个代码包上限<code>2M</code>）：</p><ul><li><p>主包：包含小程序启动时会马上打开的页面代码和相关资源</p></li><li><p>分包：包含其余的代码和资源</p></li></ul><p>一般情况下，小程序的代码将打包在一起，在小程序启动时一次性下载完成。采用分包可以显著减少启动时需要下载的代码包大小，在不影响功能正常使用的前提下，有效降低启动耗时。</p><p>另外，结合分包加载的几个扩展功能，可以进一步优化启动耗时：</p><ul><li><p><a href="https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages/independent.html" target="_blank" rel="noreferrer"><u>独立分包</u></a>：可以独立于主包和其他分包运行，功能独立性的页面可以使用</p></li><li><p><a href="https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages/preload.html" target="_blank" rel="noreferrer"><u>分包预下载</u></a>：进入某个页面时可自动预下载可能需要的分包，提升进入后续分包页面时的启动速度</p></li><li><p><a href="https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages/async.html" target="_blank" rel="noreferrer"><u>分包异步化</u></a>：允许通过一些配置和新的接口，使部分跨分包的内容可以等待下载后异步使用</p></li></ul><h3 id="代码注入优化" tabindex="-1">代码注入优化 <a class="header-anchor" href="#代码注入优化" aria-label="Permalink to &quot;代码注入优化&quot;">​</a></h3><p><img src="https://steinsgate.oss-cn-hangzhou.aliyuncs.com/wx/code_inject.jpeg" alt="code_inject"></p><h4 id="按需注入" tabindex="-1">按需注入 <a class="header-anchor" href="#按需注入" aria-label="Permalink to &quot;按需注入&quot;">​</a></h4><p>在小程序启动时，启动页面依赖的所有代码包（主包、分包、插件包、扩展库等）的所有 <code>JS</code> 代码会全部合并注入，包括其他未访问的页面以及未用到自定义组件，同时所有页面和自定义组件的 <code>JS</code> 代码会被立刻执行。</p><p>这造成很多没有使用的代码在小程序运行环境中注入执行，影响注入耗时和内存占用。</p><p>小程序可通过 <code>lazyCodeLoading</code> 有选择的注入必要的代码，以降低小程序的启动时间和运行时内存。</p><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">lazyCodeLoading</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">requiredComponents</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>按需注入开启后：</p><p>小程序仅注入当前访问页面所需的自定义组件和页面代码。</p><p>未访问的页面、当前页面未声明的自定义组件不会被加载和初始化，对应的代码文件也不会被执行。</p><div class="tip custom-block"><p class="custom-block-title">注意 ⚠️</p><ul><li><p>页面 <code>JSON</code> 配置中定义的所有组件和 <code>app.json</code> 中 <code>usingComponents</code> 配置的全局自定义组件，都会被视为页面的依赖并进行注入和加载。</p></li><li><p>因此，要及时移除 <code>JSON</code> 中未使用自定义组件的声明，并尽量避免在全局声明使用率低的自定义组件，否则可能会影响按需注入的效果。</p></li></ul></div><h4 id="用时注入" tabindex="-1">用时注入 <a class="header-anchor" href="#用时注入" aria-label="Permalink to &quot;用时注入&quot;">​</a></h4><p>在开启<code>「按需注入」</code>特性的前提下，<code>「用时注入」</code>可以指定一部分自定义组件不在小程序启动时注入，而是在真正渲染的时候才进行注入。</p><p>在已经指定 <code>lazyCodeLoading</code> 为 <code>requiredComponents</code> 的情况下，为自定义组件配置 <a href="https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/placeholder.html" target="_blank" rel="noreferrer"><u>占位组件</u></a>，组件就会自动被视为用时注入组件：</p><ol><li>每个页面内，第一次渲染该组件前，该组件都不会被注入。</li><li>每个页面内，第一次渲染该组件时，该组件会被渲染为其对应的占位组件，渲染流程结束后开始注入。</li><li>注入结束后，占位组件被替换回对应组件。</li></ol><p><strong>启动过程中减少同步 <code>API</code> 的调用：</strong></p><ul><li>同步 <code>API</code> 会阻塞当前 <code>JS</code> 线程，影响代码的执行。</li><li>在小程序启动流程中，会注入开发者代码并顺序同步执行 <code>App.onLaunch</code>、<code>App.onShow</code>、<code>Page.onLoad</code>、<code>Page.onShow</code> ，这几个与启动相关的生命周期中应尽量避免调用同步 <code>API</code> 。</li></ul><div class="tip custom-block"><p class="custom-block-title">举个 🌰</p><ul><li><p><a href="https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getSystemInfo.html" target="_blank" rel="noreferrer"><u><code>getSystemInfo</code></u></a>/<a href="https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getSystemInfoSync.html" target="_blank" rel="noreferrer"><u><code>getSystemInfoSync</code></u></a>： <code>getSystemInfo</code> 内容多耗时长，建议缓存调用结果或使用拆分后的 <code>getSystemSetting</code> 等按需获取信息，或使用异步版本 <code>getSystemInfoAsync</code> 代替。</p></li><li><p><a href="https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorageSync.html" target="_blank" rel="noreferrer"><u><code>getStorageSync</code></u></a>/<a href="https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.setStorageSync.html" target="_blank" rel="noreferrer"><u><code>setStorageSync</code></u></a></p><ul><li><p>应该只用来进行数据持久化存储。</p></li><li><p>不应用于运行时的数据传递或全局状态管理。</p></li><li><p>启动过程中过多读写存储，也会影响小程序代码注入的耗时，简单数据共享推荐 <code>globalData</code>。</p></li></ul></li></ul></div><p><strong>启动过程中不进行复杂运算：</strong></p><ul><li><p>复杂运算也会阻塞当前 <code>JS</code> 线程，影响启动耗时。</p></li><li><p>与启动流程相关的生命周期中也应尽量避免此类运算，建议将复杂的运算延迟到启动完成后进行。</p></li></ul><h3 id="首屏渲染优化" tabindex="-1">首屏渲染优化 <a class="header-anchor" href="#首屏渲染优化" aria-label="Permalink to &quot;首屏渲染优化&quot;">​</a></h3><p><img src="https://steinsgate.oss-cn-hangzhou.aliyuncs.com/wx/first_render_optmize.jpeg" alt="first_render_optmize"></p><ul><li><p><strong>按需注入和用时注入</strong>：可减少需要初始化的组件数量</p></li><li><p><a href="https://developers.weixin.qq.com/miniprogram/dev/framework/view/initial-rendering-cache.html" target="_blank" rel="noreferrer"><u><strong>初始渲染缓存</strong></u></a></p></li></ul><div class="tip custom-block"><p class="custom-block-title">小程序页面的初始化分为两个部分</p><ul><li><p><strong>逻辑层初始化</strong>：载入必需的小程序代码、初始化页面 <code>this</code> 对象（也包括它涉及到的所有自定义组件的 <code>this</code> 对象）、将相关数据发送给视图层。</p></li><li><p><strong>视图层初始化</strong>：载入必需的小程序代码，然后等待逻辑层初始化完毕并接收逻辑层发送的数据，最后渲染页面。</p></li></ul></div><ul><li><p><strong>清除废弃组件</strong>：不用的组件从 <code>usingComponents</code> 移除，减少不必要的初始化。</p></li><li><p><strong>精简首屏数据</strong>：降低数据复杂度，与渲染无关的数据不要放 <code>data</code> 中。</p></li><li><p>骨架屏</p></li></ul><h2 id="运行时性能优化" tabindex="-1">运行时性能优化 <a class="header-anchor" href="#运行时性能优化" aria-label="Permalink to &quot;运行时性能优化&quot;">​</a></h2><p>运行时性能保障用户能够流畅的使用小程序功能，可从以下几个角度进行优化：</p><ul><li><p>合理使用 <code>setData</code></p></li><li><p>渲染性能优化</p></li><li><p>页面切换优化</p></li><li><p>资源加载优化</p></li><li><p>内存优化</p></li></ul><h3 id="合理使用-setdata" tabindex="-1">合理使用 <code>setData</code> <a class="header-anchor" href="#合理使用-setdata" aria-label="Permalink to &quot;合理使用 \`setData\`&quot;">​</a></h3><p><img src="https://steinsgate.oss-cn-hangzhou.aliyuncs.com/wx/%60setData%60.jpeg" alt=""></p><div class="tip custom-block"><p class="custom-block-title">小程序的逻辑层和渲染层是分开的两个线程</p><p>在渲染层，宿主环境会把 <code>WXML</code> 转换成对应的 <code>JS</code> 对象，在逻辑层发生数据变更的时候，我们需要通过宿主环境提供的 <code>setData</code> 方法把数据从逻辑层传递到渲染层，再经过对比前后差异，把差异应用在原来的 <code>Dom</code> 树上，渲染出正确的 <code>UI</code> 界面。</p></div><p>正因为逻辑层和渲染层不属于同一个线程，因此是无法数据共享的，这就涉及到了渲染层和逻辑层之间的通信。</p><p><img src="https://steinsgate.oss-cn-hangzhou.aliyuncs.com/wx/message.png" alt="message"></p><div class="tip custom-block"><p class="custom-block-title">注意</p><p>渲染层和逻辑层之间的数据通信都要经由微信客户端<code>（Native）</code>来转发。正因如此，数据传输的时间就与数据量大体上呈正相关的关系，因而减少传输数据量是降低数据传输时间的有效方式。</p></div><p>初始化渲染完毕后，当我们需要更新界面时，需要调用逻辑层的 <code>setData</code> 来执行界面更新。</p><p>在数据传输时，逻辑层会执行一次 <code>JSON.stringify</code> 来去除掉 <code>setData</code> 数据中不可传输的部分，之后将数据发送给视图层。</p><p>同时，逻辑层还会将 <code>setData</code> 所设置的数据字段与 <code>data</code> 合并，这样可以用 <code>this.data</code> 读取变更后的数据。</p><div class="info custom-block"><p class="custom-block-title">为了提升数据更新性能，我们在调用 <code>setData</code> 时应注意：</p><ul><li><p>不要过于频繁调用<code>setData</code>，应考虑将多次 <code>setData</code> 合并成一次 <code>setData</code> 调用，<code>setData</code>接口的调用涉及逻辑层与渲染层间的线程通信，通信过于频繁可能导致处理队列阻塞，界面渲染不及时而导致卡顿，应避免无用的频繁调用。</p></li><li><p>数据通信的性能与数据量正相关，因而如果有一些数据字段不在界面中展示且数据结构比较复杂或包含长字符串，则不应使用 <code>setData</code> 来设置这些数据</p></li><li><p>与界面渲染无关的数据最好不要设置在 <code>data</code> 中，可以考虑设置在 <code>page</code> 对象的其他字段下</p></li></ul></div><p>当某个元素的绑定事件被触发，视图层将事件反馈给逻辑层时，同样需要一个通信过程，通信的方向是从视图层到逻辑层。因为这个通信过程是异步的，会产生一定的延迟，延迟时间同样与传输的数据量正相关。</p><div class="tip custom-block"><p class="custom-block-title">降低延迟时间的方法主要有两个：</p><ul><li><p>去掉不必要的事件绑定（<code>WXML</code>中的 <code>bind</code> 和 <code>catch</code>），从而减少通信的数据量和次数。</p></li><li><p>事件绑定时需要传输 <code>target</code> 和 <code>currentTarget</code> 的 <code>dataset</code>，因而不要在节点的 <code>data</code> 前缀属性中放置过大的数据。</p></li></ul></div><h3 id="渲染性能优化" tabindex="-1">渲染性能优化 <a class="header-anchor" href="#渲染性能优化" aria-label="Permalink to &quot;渲染性能优化&quot;">​</a></h3><p><img src="https://steinsgate.oss-cn-hangzhou.aliyuncs.com/wx/render_optimize.jpeg" alt="render_optimize"></p><p>视图层在接收到初始数据<code>（data）</code>和更新数据<code>（</code>setData<code>数据）</code>时，需要进行视图层渲染。</p><p>在一个页面的生命周期中，视图层会收到一份初始数据和多份更新数据。</p><p>收到初始数据时需要执行初始渲染，每次收到更新数据时需要执行重渲染。</p><p>初始渲染发生在页面刚刚创建时。</p><p>初始渲染时，将初始数据套用在对应的 <code>WXML</code> 片段上生成节点树。它包含页面内所有组件节点的名称、属性值和事件回调函数等信息，最后根据节点树包含的各个节点，在界面上依次创建出各个组件。</p><blockquote><p>流程图</p></blockquote><p><img src="https://steinsgate.oss-cn-hangzhou.aliyuncs.com/wx/render_flow.png" alt="render_flow"></p><p>在这整个流程中，时间开销大体上与节点树中节点的总量成正比例关系，因而减少 <code>WXML</code> 中节点的数量可以有效降低初始渲染和重渲染的时间开销，提升渲染性能。</p><div class="tip custom-block"><p class="custom-block-title">初始渲染完毕后</p><p>视图层可以多次应用 <code>setData</code> 的数据。每次应用 <code>setData</code> 数据时，都会执行重渲染来更新界面。</p><ul><li><p>初始渲染中得到的 <code>data</code> 和当前节点树会保留下来用于重渲染。</p></li><li><p>每次重渲染时，将 <code>data</code> 和 <code>setData</code> 数据套用在 <code>WXML</code> 片段上，得到一个新节点树。</p></li><li><p>然后将新节点树与当前节点树进行比较，这样可以得到哪些节点的哪些属性需要更新、哪些节点需要添加或移除。</p></li><li><p>最后，将 <code>setData</code> 数据合并到 <code>data</code> 中，并用新节点树替换旧节点树，用于下一次重渲染。</p></li></ul></div><blockquote><p>流程图</p></blockquote><p><img src="https://steinsgate.oss-cn-hangzhou.aliyuncs.com/wx/dom-diff.png" alt="dom-diff"></p><p>在进行当前节点树与新节点树的比较时，会着重比较 <code>setData</code> 数据影响到的节点属性。因而，去掉不必要设置的数据、减少 <code>setData</code> 的数据量有助于提升重渲染性能。</p><h3 id="页面切换优化" tabindex="-1">页面切换优化 <a class="header-anchor" href="#页面切换优化" aria-label="Permalink to &quot;页面切换优化&quot;">​</a></h3><p><img src="https://steinsgate.oss-cn-hangzhou.aliyuncs.com/wx/page_optimize.jpeg" alt="page_optimize"></p><p>页面切换的性能影响用户操作的连贯性和流畅度，是小程序运行时性能的一个重要组成部分。</p><p><strong>不在 <code>onHide/onUnload</code> 中执行耗时操作：</strong></p><p>页面切换时，会先调用前一个<code>main</code>页面的 <code>onHide</code> 或 <code>onUnload</code> 生命周期，然后在进行新页面的创建和渲染。如果 <code>onHide</code> 和 <code>onUnload</code> 执行过久，可能导致页面切换的延迟。</p><p><strong>提前发起数据请求：</strong></p><p>对那些性能要求较高的场景，当使用 <code>JSAPI</code> 进行页面跳转时，可以通过 <a href="https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#%E9%A1%B5%E9%9D%A2%E9%97%B4%E9%80%9A%E4%BF%A1" target="_blank" rel="noreferrer"><u><code>EventChannel</code></u></a> 进行通信提前发起接口请求，无需等到页面 <code>onLoad</code> 时再进行，从而让用户可以更早的看到页面内容。</p><h3 id="资源加载优化" tabindex="-1">资源加载优化 <a class="header-anchor" href="#资源加载优化" aria-label="Permalink to &quot;资源加载优化&quot;">​</a></h3><p><img src="https://steinsgate.oss-cn-hangzhou.aliyuncs.com/wx/assest_optimize.jpeg" alt="assest_optimize"></p><p><code>widthFix/heightFix</code> 模式会在图片加载完成后，动态改变图片的高度或宽度。图片高度或宽度的动态改变，可能会引起页面内大范围的布局重排，导致页面发生抖动，并造成卡顿。</p><h3 id="内存优化" tabindex="-1">内存优化 <a class="header-anchor" href="#内存优化" aria-label="Permalink to &quot;内存优化&quot;">​</a></h3><ul><li><p>事件监听结束及时解绑</p></li><li><p>定时器及时清理</p></li><li><p>代码中持有的页面实例 <code>this</code> 应及时释放</p></li></ul>`,83)]))}const h=o(l,[["render",p]]);export{m as __pageData,h as default};
