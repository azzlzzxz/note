import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.a5035e6c.js";const e="/assets/nvm.78f3ae85.png",B=JSON.parse('{"title":"node 版本管理工具","description":"","frontmatter":{},"headers":[],"relativePath":"work/utility/nvm.md","lastUpdated":1697093424000}'),p={name:"work/utility/nvm.md"},o=l(`<h1 id="node-版本管理工具" tabindex="-1">node 版本管理工具 <a class="header-anchor" href="#node-版本管理工具" aria-label="Permalink to &quot;node 版本管理工具&quot;">​</a></h1><h2 id="nvm" tabindex="-1">nvm <a class="header-anchor" href="#nvm" aria-label="Permalink to &quot;nvm&quot;">​</a></h2><p>安装 HomeBrew</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><a href="https://brew.idayer.com/" target="_blank" rel="noreferrer">参考链接-HomeBrew</a></p></div><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">/bin/zsh</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-c</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;$(</span><span style="color:#FFCB6B;">curl</span><span style="color:#C3E88D;"> -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh</span><span style="color:#89DDFF;">)&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>安装 nvm</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">#curl</span></span>
<span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-o-</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#wget</span></span>
<span class="line"><span style="color:#FFCB6B;">wget</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-qO-</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">bash</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>完成安装输入 nvm --version 可以查看当前 nvm 的版本，若遇到 nvm:command not found ,则编辑.bash_profile 文件，没有的话就新建一个，命令都是：</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">vi</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">.bash_profile</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>然后将以下代码复制进去，保存退出</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">export</span><span style="color:#BABED8;"> NVM_DIR</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">$HOME</span><span style="color:#C3E88D;">/.nvm</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">-s</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">$NVM_DIR</span><span style="color:#C3E88D;">/nvm.sh</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">]</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">.</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">$NVM_DIR</span><span style="color:#C3E88D;">/nvm.sh</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>然后 source 一下 .bash_profile</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">source</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">.bash_profile</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>使用 nvm：</p><ol><li>查看当前 node 版本：nvm current</li><li>切换 node 版本：nvm use 指定版本</li><li>设置默认版本并切换：nvm alias default 指定版本</li><li>查看安装的 node 列表：nvm ls</li></ol><p><img src="`+e+`" alt="nvm"></p><h2 id="fnm" tabindex="-1">fnm <a class="header-anchor" href="#fnm" aria-label="Permalink to &quot;fnm&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><a href="https://github.com/Schniz/fnm" target="_blank" rel="noreferrer">参考链接-fnm</a></p></div><p>安装 fnm</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># homebrew</span></span>
<span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">fnm</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># curl</span></span>
<span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-fsSL</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">https://fnm.vercel.app/install</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">bash</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>使用 fnm</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># fnm 版本</span></span>
<span class="line"><span style="color:#FFCB6B;">fnm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--version</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 安装指定node版本</span></span>
<span class="line"><span style="color:#FFCB6B;">fnm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">版本</span><span style="color:#BABED8;">号</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 切换node版本</span></span>
<span class="line"><span style="color:#FFCB6B;">fnm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">use</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">版本</span><span style="color:#BABED8;">号</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看安装的node版本</span></span>
<span class="line"><span style="color:#FFCB6B;">fnm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">ls</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,22),t=[o];function r(c,i,m,y,d,u){return n(),a("div",null,t)}const D=s(p,[["render",r]]);export{B as __pageData,D as default};
