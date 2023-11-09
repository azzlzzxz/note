import{_ as o,B as l,o as p,c as e,x as s,D as t,z as c,Q as r,a}from"./chunks/framework.a5035e6c.js";const h=JSON.parse('{"title":"问题/解决方式记录","description":"","frontmatter":{},"headers":[],"relativePath":"work/question/work.md","lastUpdated":1699509188000}'),i={name:"work/question/work.md"},D=r(`<h1 id="问题-解决方式记录" tabindex="-1">问题/解决方式记录 <a class="header-anchor" href="#问题-解决方式记录" aria-label="Permalink to &quot;问题/解决方式记录&quot;">​</a></h1><h2 id="import-引入的方法-is-not-a-function" tabindex="-1"><code>import</code> 引入的方法 <code>is not a function</code> <a class="header-anchor" href="#import-引入的方法-is-not-a-function" aria-label="Permalink to &quot;\`import\` 引入的方法 \`is not a function\`&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>问题描述： 项目开发中遇到模块导入后使用其中的方法，报错 ❗️</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">a</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">b</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">c</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">z</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sum</span><span style="color:#BABED8;">()</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>改成这样就不报错 😱</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">b</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">c</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">z</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">z</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sum</span><span style="color:#BABED8;">()</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></div><p><code>引用一段话来描述这个问题：</code></p>`,4),y=s("code",null,"import",-1),F=s("code",null,"import foo from 'foo'",-1);function d(m,u,B,_,b,f){const n=l("font");return p(),e("div",null,[D,s("p",null,[s("strong",null,[t(n,{color:"FF9D00"},{default:c(()=>[a("ES6 模块是动态引用，如果使用 "),y,a(" 从一个模块加载变量（即 "),F,a("），那些变量不会被缓存，而是成为一个指向被加载模块的引用，需要开发者自己保证，真正取值的时候能够取到值。")]),_:1})])])])}const E=o(i,[["render",d]]);export{h as __pageData,E as default};
