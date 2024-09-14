import{_ as a,o as n,c as l,N as e}from"./chunks/framework.72e0000c.js";const y=JSON.parse('{"title":"模版字符串","description":"","frontmatter":{},"headers":[],"relativePath":"base/es6/template.md","lastUpdated":1726284284000}'),p={name:"base/es6/template.md"};function o(t,s,r,c,i,d){return n(),l("div",null,s[0]||(s[0]=[e('<h1 id="模版字符串" tabindex="-1">模版字符串 <a class="header-anchor" href="#模版字符串" aria-label="Permalink to &quot;模版字符串&quot;">​</a></h1><p>模板字符串<code>（template string）</code>是增强版的字符串，用反引号（`）标识。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。</p><ul><li>普通字符串</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">;</span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">my name is steins gate</span><span style="color:#89DDFF;">`</span></span>\n<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>多行字符串</li></ul><p>使用模板字符串表示多行字符串时，所有的空格和缩进都会被保留在输出之中。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">;</span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">my name is steins gate</span></span>\n<span class="line"><span style="color:#C3E88D;"> from china</span><span style="color:#89DDFF;">`</span></span>\n<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>字符串中嵌入变量</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> name </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">steins gate</span><span style="color:#89DDFF;">&#39;`</span><span style="color:#C3E88D;">my name is </span><span style="color:#89DDFF;">${</span><span style="color:#BABED8;">name</span><span style="color:#89DDFF;">}`</span></span>\n<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>如果在模板字符串中需要使用反引号，则前面要用反斜杠转义</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> greet </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">`</span><span style="color:#BABED8;">\\`</span><span style="color:#C3E88D;">Hi</span><span style="color:#BABED8;">\\`</span><span style="color:#C3E88D;"> World!</span><span style="color:#89DDFF;">`</span></span>\n<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>运算符</li></ul><p>模板字符串中的运算符与普通字符串中的运算符一样，都是<code>+</code></p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> name </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">steins gate</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> age </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">18</span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">my name is </span><span style="color:#89DDFF;">${</span><span style="color:#BABED8;">name</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;"> and i am </span><span style="color:#89DDFF;">${</span><span style="color:#BABED8;">age</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;"> years old</span><span style="color:#89DDFF;">`</span></span>\n<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>标签模版</li></ul><p>模板字符串的功能它可以紧跟在一个函数名后面，该函数将被调用来处理这个模板字符串，这被称为<code>“标签模板”</code>功能<code>（tagged template）</code></p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">alert</span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">`</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// 等同于</span></span>\n<span class="line"><span style="color:#82AAFF;">alert</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span></span>\n<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',17)]))}const m=a(p,[["render",o]]);export{y as __pageData,m as default};
