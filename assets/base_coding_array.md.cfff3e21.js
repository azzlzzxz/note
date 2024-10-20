import{_ as a,o as n,c as l,N as p}from"./chunks/framework.2f525601.js";const i=JSON.parse('{"title":"数组系列","description":"","frontmatter":{},"headers":[],"relativePath":"base/coding/array.md","lastUpdated":1729414590000}'),o={name:"base/coding/array.md"};function e(r,s,t,c,y,F){return n(),l("div",null,s[0]||(s[0]=[p(`<h1 id="数组系列" tabindex="-1">数组系列 <a class="header-anchor" href="#数组系列" aria-label="Permalink to &quot;数组系列&quot;">​</a></h1><h2 id="反转数组的方式和时间复杂度" tabindex="-1">反转数组的方式和时间复杂度 <a class="header-anchor" href="#反转数组的方式和时间复杂度" aria-label="Permalink to &quot;反转数组的方式和时间复杂度&quot;">​</a></h2><ul><li>双指针法</li></ul><p>使用两个指针分别从数组的头和尾开始，逐一交换数组中的元素，直到两个指针相遇。</p><p>时间复杂度：<code>O(n)</code>，其中 <code>n</code> 是数组的长度。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">reverseArray</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">arr</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">left</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">right</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">left</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">right</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">arr</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">left</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">arr</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">right</span><span style="color:#F07178;">]] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> [</span><span style="color:#BABED8;">arr</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">right</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">arr</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">left</span><span style="color:#F07178;">]]</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">left</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">right</span><span style="color:#89DDFF;">--</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">arr</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul><li><code>reverse</code></li></ul><p>使用 <code>JavaScript</code> 的内置方法 <code>Array.prototype.reverse()</code>，返回原数组。</p><p>时间复杂度：<code>O(n)</code></p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">5</span><span style="color:#BABED8;">]</span></span>
<span class="line"><span style="color:#BABED8;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reverse</span><span style="color:#BABED8;">()</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>递归</li></ul><p>递归地交换数组的首尾元素。</p><p>时间复杂度：<code>O(n)</code></p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">reverseArrayRecursive</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">arr</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">start</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">end</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">start</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">end</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">arr</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">arr</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">start</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">arr</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">end</span><span style="color:#F07178;">]] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> [</span><span style="color:#BABED8;">arr</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">end</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">arr</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">start</span><span style="color:#F07178;">]]</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">reverseArrayRecursive</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">arr</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">start</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">end</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,14)]))}const B=a(o,[["render",e]]);export{i as __pageData,B as default};
