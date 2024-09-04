import{_ as o,B as e,o as c,c as r,N as a,x as n,D as t,z as i,a as l}from"./chunks/framework.84e4f51a.js";const m=JSON.parse('{"title":"浏览器事件循环机制","description":"","frontmatter":{},"headers":[],"relativePath":"base/browser/eventloop.md","lastUpdated":1725422901000}'),F={name:"base/browser/eventloop.md"};function y(D,s,d,B,b,A){const p=e("font");return c(),r("div",null,[s[1]||(s[1]=a('<h1 id="浏览器事件循环机制" tabindex="-1">浏览器事件循环机制 <a class="header-anchor" href="#浏览器事件循环机制" aria-label="Permalink to &quot;浏览器事件循环机制&quot;">​</a></h1><p><strong>事件循环机制：<code>event loop</code> 即事件循环，是指浏览器或<code>Node</code>的一种解决<code>javaScript</code>单线程运行时不会阻塞的一种机制，也就是我们经常使用异步的原理。</strong></p><ul><li><code>JavaScript</code> 是一个单进程的语言，同一时间不能处理多个任务，所以何时执行宏任务，何时执行微任务？我们需要有这样的一个判断逻辑存在。</li></ul><p>例如：</p><p>每办理完一个业务，柜员就会问当前的客户，是否还有其他需要办理的业务。（检查还有没有微任务需要处理）</p><p>而客户明确告知说没有事情以后，柜员就去查看后边还有没有等着办理业务的人。（结束本次宏任务、检查还有没有宏任务需要处理）</p><p>这个检查的过程是持续进行的，每完成一个任务都会进行一次，而这样的操作就被称为 <code>Event Loop</code>。</p><h2 id="浏览器中的事件循环" tabindex="-1">浏览器中的事件循环 <a class="header-anchor" href="#浏览器中的事件循环" aria-label="Permalink to &quot;浏览器中的事件循环&quot;">​</a></h2><p><img src="https://steinsgate.oss-cn-hangzhou.aliyuncs.com/browser_EventLoop.jpeg" alt="browser_eventLoop"></p><ul><li>整体<code>script</code>作为第一个宏任务进入主线程。</li><li>同步任务被放到执行栈，异步任务会进入<code>Event Table</code>并注册函数，其回调函数按类别被放到宏任务队列和微任务队列中。</li><li>执行完所有同步任务后，开始读取任务队列中的结果。检查微任务队列，如果有任务则按顺序执行。</li><li>执行完所有微任务后，开始下一个宏任务。如此循环，直到两个队列（宏任务队列和微任务队列）的任务都执行完。</li></ul>',10)),n("p",null,[n("strong",null,[t(p,{color:"F19594"},{default:i(()=>s[0]||(s[0]=[l("默认先执行宏任务"),n("code",null," （script 脚本）",-1),l(",会清空所有的微任务 (全部执行完毕) ,微任务执行后开始页面渲染（不是每次都渲染：如果一次渲染东西过少，有可能多次渲染进行合并的）,取出一个宏任务执行，执行过程中可能再次产生宏任务、微任务。。。不停的循环。")])),_:1})])]),s[2]||(s[2]=a(`<h3 id="主线程、执行栈、任务队列" tabindex="-1">主线程、执行栈、任务队列 <a class="header-anchor" href="#主线程、执行栈、任务队列" aria-label="Permalink to &quot;主线程、执行栈、任务队列&quot;">​</a></h3><p><code>Javascript</code> 有一个<code>main thread</code>主线程 和<code>call-stack</code>执行栈。所有的任务都会被放到执行栈等待主线程执行。</p><h4 id="执行栈" tabindex="-1">执行栈 <a class="header-anchor" href="#执行栈" aria-label="Permalink to &quot;执行栈&quot;">​</a></h4><p>执行栈是在其它编程语言中所说的“调用栈”，是一种拥有<code> LIFO（后进先出）</code>数据结构的栈，被用来存储代码运行时创建的所有执行上下文。</p><p>（作用域链）当<code>JavaScript</code>引擎第一次遇到你的脚本时，它会创建一个全局的执行上下文并且压入当前执行栈。</p><p>每当引擎遇到一个函数调用，它会为该函数创建一个新的执行上下文并压入栈的顶部。</p><p>引擎会执行那些执行上下文位于栈顶的函数。当该函数执行结束时，执行上下文从栈中弹出，控制流程到达当前栈中的下一个上下文。</p><h4 id="任务队列task-queue" tabindex="-1">任务队列<code>Task Queue</code> <a class="header-anchor" href="#任务队列task-queue" aria-label="Permalink to &quot;任务队列\`Task Queue\`&quot;">​</a></h4><p>队列：是一种先进先出的一种数据结构。</p><h3 id="同步任务和异步任务" tabindex="-1">同步任务和异步任务 <a class="header-anchor" href="#同步任务和异步任务" aria-label="Permalink to &quot;同步任务和异步任务&quot;">​</a></h3><p><code>Javascript</code> 单线程任务被分为同步任务和异步任务。</p><ol><li>同步任务会在执行栈中按照顺序等待主线程依次执行</li><li>异步任务会进入<code>Event Table</code>并注册函数。</li><li>当指定的事情完成时，<code>Event Table</code> 会将这个函数移入任务队列中。等待主线程空闲的时候（执行栈被清空），任务队列的任务按顺序被读取到栈内等待主线程的执行。</li></ol><p>如图：</p><p><img src="https://steinsgate.oss-cn-hangzhou.aliyuncs.com/task.jpg" alt="task"></p><h3 id="宏任务和微任务" tabindex="-1">宏任务和微任务 <a class="header-anchor" href="#宏任务和微任务" aria-label="Permalink to &quot;宏任务和微任务&quot;">​</a></h3><p>除了广义的同步任务和异步任务，我们对任务有更精细的定义。在高层次上，<code>JavaScript</code> 中有宏任务<code>（MacroTask）</code>和微任务<code>（MicroTask）</code>。</p><ol><li><code>MacroTask（宏任务）</code>包括<code>script</code>全部代码、<code>setTimeout</code>、<code>setInterval</code>、<code>I/O</code>、<code>UI Rendering</code> 等；</li></ol><p><img src="https://steinsgate.oss-cn-hangzhou.aliyuncs.com/macro.png" alt="macro"></p><ol><li><code>MicroTask（微任务</code>）包括 <code>Process.nextTick（Node 独有）</code>、<code>Promise.then</code>、<code>Object.observe(废弃)</code>等。</li></ol><p><img src="https://steinsgate.oss-cn-hangzhou.aliyuncs.com/micro.png" alt="micro"></p><h4 id="浅析宏任务与微任务的区别" tabindex="-1">浅析宏任务与微任务的区别： <a class="header-anchor" href="#浅析宏任务与微任务的区别" aria-label="Permalink to &quot;浅析宏任务与微任务的区别：&quot;">​</a></h4><ul><li><p>这个就像去银行办业务一样，先要取号进行排号。</p></li><li><p>一般上边都会印着类似：“您的号码为 XX，前边还有 XX 人。”之类的字样。</p></li><li><p>因为柜员同时只能处理一个来办理业务的客户，这时每一个来办理业务的人就可以认为是银行柜员的一个宏任务来存在的，当柜员处理完当前客户的问题以后，选择接待下一位，广播报号，也就是下一个宏任务的开始。</p></li><li><p>多个宏任务合在一起就可以认为说有一个任务队列，里面是当前银行中所有的排号客户。</p></li><li><p>任务队列中都是已完成的异步操作，而不是说注册一个异步任务就会被放在这个任务队列中，就像在银行中排号，如果叫到你你不在，号码就作废了，柜员会跳过进行下一个客户处理。</p></li><li><p>而且一个宏任务在执行过程中，是可以添加一些微任务的，就像在柜台办理业务，你前边的一位老大爷可能在存款，在存款这个业务办理完以后，柜员会问老大爷还有没有其他需要办理的业务。</p></li><li><p>也就是说在当前的微任务没有执行完成时，是不会执行下一个宏任务的。</p></li></ul><p>简单的来看一个 🌰：</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">setTimeout</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(</span><span style="color:#F78C6C;">4</span><span style="color:#BABED8;">))</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// setTimeout是作为宏任务来存在的，</span></span>
<span class="line"><span style="color:#89DDFF;">new</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">resolve</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">_</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Promise.then是微任务</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">3</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(</span><span style="color:#F78C6C;">2</span><span style="color:#BABED8;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1 2 3 4</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>所有会进入的异步都是指的是事件回调中的代码。</p><p>也就是说<code>new Promsie</code>在实例化的过程中所执行的代码都是同步进行的，而<code>then</code>中注册的回调才是异步执行的。</p><p>在同步代码执行完成后才会回去检查是否有异步任务完成，并执行对应的回调，而微任务又会在宏任务之前执行，所以会输出 1、2、3、4。</p><p>+号部分表示同步执行的代码</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">+</span><span style="color:#82AAFF;">setTimeout</span><span style="color:#BABED8;">(</span><span style="color:#BABED8;font-style:italic;">_</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#F07178;">  </span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">4</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">+}</span><span style="color:#BABED8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">+new</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#BABED8;">(</span><span style="color:#BABED8;font-style:italic;">resolve</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#F07178;">  </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#F07178;">  </span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">+}</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#BABED8;">(</span><span style="color:#BABED8;font-style:italic;">_</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#F07178;">  </span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">3</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">+}</span><span style="color:#BABED8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(</span><span style="color:#F78C6C;">2</span><span style="color:#BABED8;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>本来<code>setTimeout</code>已经先设置了定时器（相当于取号），然后在当前的进程中有添加了一些<code>Promsie</code>的处理（临时添加的业务）。</p><p>所以进阶的，即便我们继续在<code>Promise</code>中实例化<code>Promise</code>，其输出依然会早于<code>setTimeout</code>的宏任务。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">setTimeout</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">_</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(</span><span style="color:#F78C6C;">4</span><span style="color:#BABED8;">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">new</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">resolve</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">_</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">3</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">_</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">before timeout</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">_</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">_</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">also before timeout</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(</span><span style="color:#F78C6C;">2</span><span style="color:#BABED8;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">1</span></span>
<span class="line"><span style="color:#FFCB6B;">2</span></span>
<span class="line"><span style="color:#FFCB6B;">3</span></span>
<span class="line"><span style="color:#FFCB6B;">before timeout</span></span>
<span class="line"><span style="color:#FFCB6B;">also before timeout</span></span>
<span class="line"><span style="color:#FFCB6B;">4</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="node-eventloop" tabindex="-1">Node EventLoop <a class="header-anchor" href="#node-eventloop" aria-label="Permalink to &quot;Node EventLoop&quot;">​</a></h2><p>想了解 <code>Node EventLoop</code> 👇</p><p><a href="./../../node/base/eventLoop">Node EventLoop 🚀</a></p>`,36))])}const E=o(F,[["render",y]]);export{m as __pageData,E as default};
