import{_ as o,B as e,o as c,c as t,N as a,x as l,a as n,D as r,z as F}from"./chunks/framework.2673bc46.js";const A=JSON.parse('{"title":"HOC 高阶组件","description":"","frontmatter":{},"headers":[],"relativePath":"frame/react/base/hoc.md","lastUpdated":1727500876000}'),y={name:"frame/react/base/hoc.md"};function i(D,s,d,u,b,m){const p=e("font");return c(),t("div",null,[s[3]||(s[3]=a('<h1 id="hoc-高阶组件" tabindex="-1">HOC 高阶组件 <a class="header-anchor" href="#hoc-高阶组件" aria-label="Permalink to &quot;HOC 高阶组件&quot;">​</a></h1><p><code>高阶组件（HOC）</code>是 <code>React</code> 中用于复用组件逻辑的一种高级技巧。<code>HOC</code> 自身不是 <code>React API</code> 的一部分，它是一种基于 <code>React</code> 的组合特性而形成的设计模式。</p>',2)),l("p",null,[s[1]||(s[1]=n("具体而言，")),l("strong",null,[r(p,{color:"#FF9D00"},{default:F(()=>s[0]||(s[0]=[n("高阶组件是参数为组件，返回值为新组件的函数")])),_:1})]),s[2]||(s[2]=n("。"))]),s[4]||(s[4]=a(`<p>组件是将 <code>props</code> 转换为 <code>UI</code>，而高阶组件是将组件转换为另一个组件。</p><p>你也可以把它理解成，就是一个高阶函数。</p><p>语法结构：</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> EnhancedComponent </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">higherOrderComponent</span><span style="color:#BABED8;">(WrappedComponent)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="高阶组件的作用" tabindex="-1">高阶组件的作用 <a class="header-anchor" href="#高阶组件的作用" aria-label="Permalink to &quot;高阶组件的作用&quot;">​</a></h2><ul><li><p><code>代码复用、逻辑抽象</code>： <code>HOC</code> 可以将一些通用的业务逻辑抽取出来，在多个组件中重用，避免重复代码。例如权限控制、数据获取、条件渲染等。</p></li><li><p><code>跨组件操作</code>： 通过 <code>HOC</code> 可以在多个不相关的组件间共享功能或者行为。例如，某个全局的状态或者布局风格的注入。</p></li><li><p><code>渲染劫持</code>： <code>HOC</code> 可以通过在渲染时对组件进行包裹，来决定某个组件是否要渲染，以及渲染什么内容。</p></li><li><p><code>修改组件的 Props</code>： <code>HOC</code> 可以通过操控 <code>props</code> 来增强组件的行为。例如，在渲染某个组件之前为它传递一些特定的 <code>props</code>。</p></li></ul><h2 id="常用的高阶组件的两种方式" tabindex="-1">常用的高阶组件的两种方式 <a class="header-anchor" href="#常用的高阶组件的两种方式" aria-label="Permalink to &quot;常用的高阶组件的两种方式&quot;">​</a></h2><ul><li>属性代理</li></ul><p>属性代理，就是用组件包裹一层代理组件，在代理组件上，我们可以做一些，对源组件的代理操作。</p><div class="language-tsx line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* 使用函数组件实现高阶组件 */</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">HOC</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">WrappedComponent</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Father</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">props</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">[</span><span style="color:#BABED8;">state</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">useState</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> name </span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Father</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">WrappedComponent</span><span style="color:#89DDFF;"> {...</span><span style="color:#BABED8;">props</span><span style="color:#89DDFF;">} {...</span><span style="color:#BABED8;">state</span><span style="color:#89DDFF;">} /&gt;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* 使用类组件实现高阶组件 */</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">HOC</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">WrappedComponent</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">class</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Father</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">extends</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">React</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Component</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    state </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Father</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    render</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">WrappedComponent</span><span style="color:#89DDFF;"> {...this.</span><span style="color:#BABED8;">props</span><span style="color:#89DDFF;">} {this.</span><span style="color:#BABED8;">state</span><span style="color:#89DDFF;">} /&gt;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">优点</p><ul><li><p>属性代理可以和业务组件低耦合，零耦合，对于条件渲染和<code>props</code>属性增强,只负责控制子组件渲染和传递额外的<code>props</code>就可以，所以无须知道，业务组件做了些什么。</p></li><li><p>可以完全隔离业务组件的渲染,相比反向继承，属性代理这种模式。可以完全控制业务组件渲染与否，可以避免反向继承带来一些副作用，比如生命周期的执行。</p></li><li><p>可以嵌套使用，多个<code>hoc</code>是可以嵌套使用的，而且一般不会限制包装<code>hoc</code>的先后顺序</p></li></ul></div><div class="warning custom-block"><p class="custom-block-title">缺点</p><ul><li><p>一般无法直接获取业务组件的状态，如果想要获取，需要<code>ref</code>获取组件实例。</p></li><li><p>无法直接继承静态属性。如果需要继承需要手动处理，或者引入第三方库</p></li></ul></div><ul><li>反向继承</li></ul><p>反向继承和属性代理有一定的区别，在于包装后的组件继承了业务组件本身，所以我们我无须在去实例化我们的业务组件。当前高阶组件就是继承后，加强型的业务组件。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">HOC</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">WrappedComponent</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 继承业务组件，而不是 React.Component</span></span>
<span class="line highlighted"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">class</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">H</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">extends</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">WrappedComponent</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">优点</p><ul><li><p>方便获取组件内部状态，比如<code>state</code>，<code>props</code> ,生命周期,绑定的事件函数等</p></li><li><p>es6 继承可以良好继承静态属性。我们无须对静态属性和方法进行额外的处理</p></li></ul></div><div class="warning custom-block"><p class="custom-block-title">缺点</p><ul><li><p>函数组件无法使用</p></li><li><p>和被包装的组件强耦合，需要知道被包装的组件的内部状态，具体是做什么</p></li><li><p>如果多个反向继承<code>hoc</code>嵌套在一起，当前状态会覆盖上一个状态。这样带来的隐患是非常大的，比如说有多个<code>componentDidMount</code>，当前<code>componentDidMount</code>会覆盖上一个<code>componentDidMount</code>。这样副作用串联起来，影响很大。</p></li></ul></div><h2 id="如何编写高阶组件" tabindex="-1">如何编写高阶组件 <a class="header-anchor" href="#如何编写高阶组件" aria-label="Permalink to &quot;如何编写高阶组件&quot;">​</a></h2><h3 id="强化props" tabindex="-1">强化<code>props</code> <a class="header-anchor" href="#强化props" aria-label="Permalink to &quot;强化\`props\`&quot;">​</a></h3><p>高阶组件可以修改传递给子组件的 <code>props</code>，用于动态注入数据或控制组件的行为</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">Hoc</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">WrapComponent</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Index</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">props</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">[</span><span style="color:#BABED8;">state</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">setState</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">useState</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">steins gate</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">WrapComponent</span><span style="color:#89DDFF;"> {...</span><span style="color:#BABED8;">props</span><span style="color:#89DDFF;">} {...</span><span style="color:#BABED8;">state</span><span style="color:#89DDFF;">} /&gt;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="条件渲染" tabindex="-1">条件渲染 <a class="header-anchor" href="#条件渲染" aria-label="Permalink to &quot;条件渲染&quot;">​</a></h3><p>这个 <code>HOC</code> 将根据某些条件（如 <code>props</code> 或 状态）决定是否渲染原始组件</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">Hoc</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">WrappedComponent</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Index</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">props</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">shouldRender</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">fallback</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">props</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">shouldRender</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">WrappedComponent</span><span style="color:#89DDFF;"> {...</span><span style="color:#BABED8;">props</span><span style="color:#89DDFF;">} /&gt;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">fallback</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="赋能组件" tabindex="-1">赋能组件 <a class="header-anchor" href="#赋能组件" aria-label="Permalink to &quot;赋能组件&quot;">​</a></h3><p>高阶组件还可以赋能组件，比如加一些额外生命周期，劫持事件，监控日志等等</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">HOC</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">Component</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">parentDidMount</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Component</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">componentDidMount</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">Component</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">componentDidMount</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">劫持生命周期：componentDidMount</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">parentDidMount</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">class</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">wrapComponent</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">extends</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">React</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Component</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    render</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Component</span><span style="color:#89DDFF;"> {...this.</span><span style="color:#BABED8;">props</span><span style="color:#89DDFF;">} /&gt;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#BABED8;">HOC</span></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Index</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">extends</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">React</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Component</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">componentDidMount</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">———didMounted———</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">render</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">hello,world</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><div class="info custom-block"><p class="custom-block-title">相关资料</p><ul><li><a href="https://github.com/GoodLuckAlien/blogs/blob/028fc6dce405027a7048985d92cb505134090949/react/react-hoc.md" target="_blank" rel="noreferrer"><u>「react 进阶」一文吃透 React 高阶组件(HOC)</u></a></li></ul></div>`,28))])}const C=o(y,[["render",i]]);export{A as __pageData,C as default};
