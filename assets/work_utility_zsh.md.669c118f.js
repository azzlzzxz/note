import{_ as a,o as n,c as l,N as e}from"./chunks/framework.2f525601.js";const h=JSON.parse('{"title":"Zsh 配置","description":"","frontmatter":{},"headers":[],"relativePath":"work/utility/zsh.md","lastUpdated":1731052528000}'),p={name:"work/utility/zsh.md"};function o(t,s,c,r,i,y){return n(),l("div",null,s[0]||(s[0]=[e(`<h1 id="zsh-配置" tabindex="-1">Zsh 配置 <a class="header-anchor" href="#zsh-配置" aria-label="Permalink to &quot;Zsh 配置&quot;">​</a></h1><h2 id="oh-my-zsh" tabindex="-1"><code>oh-my-zsh</code> <a class="header-anchor" href="#oh-my-zsh" aria-label="Permalink to &quot;\`oh-my-zsh\`&quot;">​</a></h2><p><a href="https://ohmyz.sh/" target="_blank" rel="noreferrer">oh-my-zsh</a></p><p>安装</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sh</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-c</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;$(</span><span style="color:#FFCB6B;">curl</span><span style="color:#C3E88D;"> -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh</span><span style="color:#89DDFF;">)&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># OR 国内镜像</span></span>
<span class="line"><span style="color:#FFCB6B;">sh</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-c</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;$(</span><span style="color:#FFCB6B;">curl</span><span style="color:#C3E88D;"> -fsSL https://gitee.com/mirrors/oh-my-zsh/raw/master/tools/install.sh</span><span style="color:#89DDFF;">)&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>更新</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">omz</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">update</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="zinint" tabindex="-1"><code>zinint</code> <a class="header-anchor" href="#zinint" aria-label="Permalink to &quot;\`zinint\`&quot;">​</a></h2><p>安装</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 下载安装脚本</span></span>
<span class="line"><span style="color:#FFCB6B;">bash</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-c</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;$(</span><span style="color:#FFCB6B;">curl</span><span style="color:#C3E88D;"> --fail --show-error --silent --location https://raw.githubusercontent.com/zdharma-continuum/zinit/HEAD/scripts/install.sh</span><span style="color:#89DDFF;">)&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>更新</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 更新 zinit</span></span>
<span class="line"><span style="color:#FFCB6B;">zinit</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">self-update</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 更新所有插件</span></span>
<span class="line"><span style="color:#FFCB6B;">zinit</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">update</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 并发更新所有插件</span></span>
<span class="line"><span style="color:#FFCB6B;">zinit</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">update</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--parallel</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>加载插件</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 加载插件（启动分析功能跟踪插件具体）</span></span>
<span class="line"><span style="color:#FFCB6B;">zinit</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">load</span><span style="color:#BABED8;"> [插件]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 加载插件（静默加载，启动更快）</span></span>
<span class="line"><span style="color:#FFCB6B;">zinit</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">light</span><span style="color:#BABED8;"> [插件]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>卸载</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 卸载插件</span></span>
<span class="line"><span style="color:#FFCB6B;">zinit</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">delete</span><span style="color:#BABED8;"> [插件]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 卸载所有插件</span></span>
<span class="line"><span style="color:#FFCB6B;">zinit</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">delete</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--all</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 卸载所有未使用插件</span></span>
<span class="line"><span style="color:#FFCB6B;">zinit</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">delete</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--clean</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="zsh-插件" tabindex="-1"><code>zsh</code> 插件 <a class="header-anchor" href="#zsh-插件" aria-label="Permalink to &quot;\`zsh\` 插件&quot;">​</a></h2><h3 id="autojump" tabindex="-1"><code>autojump</code> <a class="header-anchor" href="#autojump" aria-label="Permalink to &quot;\`autojump\`&quot;">​</a></h3><p>用于常用目录间的快速跳转（通过维护命令行中最常用的目录的数据库来工作）</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 安装</span></span>
<span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">autojump</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li><a href="https://github.com/wting/autojump" target="_blank" rel="noreferrer"><u>autojump | Github</u></a></li></ul><h3 id="zsh-autosuggestions" tabindex="-1"><code>zsh-autosuggestions</code> <a class="header-anchor" href="#zsh-autosuggestions" aria-label="Permalink to &quot;\`zsh-autosuggestions\`&quot;">​</a></h3><p>根据您的历史记录和完成情况建议您键入的命令</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-p2ZaZ" id="tab-_oYinQS" checked="checked"><label for="tab-_oYinQS">oh-my-zsh</label><input type="radio" name="group-p2ZaZ" id="tab-zdy8p7x"><label for="tab-zdy8p7x">zinit</label></div><div class="blocks"><div class="language-sh active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># clone</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--depth=1</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">git://github.com/zsh-users/zsh-autosuggestions</span><span style="color:#BABED8;"> $ZSH_CUSTOM</span><span style="color:#C3E88D;">/plugins/zsh-autosuggestions</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 在 ~/.zshrc 中配置</span></span>
<span class="line"><span style="color:#BABED8;">plugins</span><span style="color:#89DDFF;">=(</span><span style="color:#C3E88D;">其他插件</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">zsh-autosuggestions</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 使配置生效</span></span>
<span class="line"><span style="color:#82AAFF;">source</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">~/.zshrc</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 在 ~/.zshrc 中配置</span></span>
<span class="line"><span style="color:#FFCB6B;">zinit</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">ice</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">lucid</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">wait=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">atload=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">_zsh_autosuggest_start</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#FFCB6B;">zinit</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">light</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">zsh-users/zsh-autosuggestions</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 使配置生效</span></span>
<span class="line"><span style="color:#82AAFF;">source</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">~/.zshrc</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></div></div><h3 id="zsh-completions" tabindex="-1"><code>zsh-completions</code> <a class="header-anchor" href="#zsh-completions" aria-label="Permalink to &quot;\`zsh-completions\`&quot;">​</a></h3><p><code>zsh</code> 的自动补全功能。</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># clone</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">https://github.com/zsh-users/zsh-completions</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">\${</span><span style="color:#BABED8;">ZSH_CUSTOM</span><span style="color:#89DDFF;">:-\${</span><span style="color:#BABED8;">ZSH</span><span style="color:#89DDFF;">:-</span><span style="color:#BABED8;">~</span><span style="color:#89DDFF;">/</span><span style="color:#BABED8;">.oh-my-zsh</span><span style="color:#89DDFF;">}/</span><span style="color:#BABED8;">custom</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">/plugins/zsh-completions</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 在 ~/.zshrc 中配置</span></span>
<span class="line"><span style="color:#BABED8;">plugins</span><span style="color:#89DDFF;">=(</span><span style="color:#C3E88D;">其他插件</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">zsh-completions</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 使配置生效</span></span>
<span class="line"><span style="color:#82AAFF;">source</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">~/.zshrc</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="fast-syntax-highlighting" tabindex="-1"><code>fast-syntax-highlighting</code> <a class="header-anchor" href="#fast-syntax-highlighting" aria-label="Permalink to &quot;\`fast-syntax-highlighting\`&quot;">​</a></h3><p><code>zsh</code> 的语法高亮功能。</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-eXHi-" id="tab-bJCDL_B" checked="checked"><label for="tab-bJCDL_B">oh-my-zsh</label><input type="radio" name="group-eXHi-" id="tab-vMPXPW3"><label for="tab-vMPXPW3">zinit</label></div><div class="blocks"><div class="language-sh active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># clone</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--depth=1</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">https://github.com/zdharma-continuum/fast-syntax-highlighting.git</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">\${</span><span style="color:#BABED8;">ZSH_CUSTOM</span><span style="color:#89DDFF;">:-</span><span style="color:#BABED8;">$HOME</span><span style="color:#89DDFF;">/</span><span style="color:#BABED8;">.oh-my-zsh</span><span style="color:#89DDFF;">/</span><span style="color:#BABED8;">custom</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">/plugins/fast-syntax-highlighting</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 在 ~/.zshrc 中配置</span></span>
<span class="line"><span style="color:#BABED8;">plugins</span><span style="color:#89DDFF;">=(</span><span style="color:#C3E88D;">其他插件</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">fast-syntax-highlighting</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 使配置生效</span></span>
<span class="line"><span style="color:#82AAFF;">source</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">~/.zshrc</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 在 ~/.zshrc 中配置</span></span>
<span class="line"><span style="color:#FFCB6B;">zinit</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">light</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">zdharma-continuum/fast-syntax-highlighting</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 使配置生效</span></span>
<span class="line"><span style="color:#82AAFF;">source</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">~/.zshrc</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div></div><h2 id="zsh-主题" tabindex="-1"><code>zsh</code> 主题 <a class="header-anchor" href="#zsh-主题" aria-label="Permalink to &quot;\`zsh\` 主题&quot;">​</a></h2><h3 id="powerlevel10k" tabindex="-1"><code>powerlevel10k</code> <a class="header-anchor" href="#powerlevel10k" aria-label="Permalink to &quot;\`powerlevel10k\`&quot;">​</a></h3><p>安装</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-W53Wv" id="tab-7IIq3GB" checked="checked"><label for="tab-7IIq3GB">oh-my-zsh</label><input type="radio" name="group-W53Wv" id="tab-o3d-Yzh"><label for="tab-o3d-Yzh">zinit</label></div><div class="blocks"><div class="language-sh active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--depth=1</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">https://github.com/romkatv/powerlevel10k.git</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">\${</span><span style="color:#BABED8;">ZSH_CUSTOM</span><span style="color:#89DDFF;">:-</span><span style="color:#BABED8;">$HOME</span><span style="color:#89DDFF;">/</span><span style="color:#BABED8;">.oh-my-zsh</span><span style="color:#89DDFF;">/</span><span style="color:#BABED8;">custom</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">/themes/powerlevel10k</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 在 ~/.zshrc 中配置</span></span>
<span class="line"><span style="color:#BABED8;">ZSH_THEME</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">powerlevel10k/powerlevel10k</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 使配置生效</span></span>
<span class="line"><span style="color:#82AAFF;">source</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">~/.zshrc</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 在 ~/.zshrc 中配置</span></span>
<span class="line"><span style="color:#FFCB6B;">zinit</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">ice</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">depth=</span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#FFCB6B;">zinit</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">light</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">romkatv/powerlevel10k</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 使配置生效</span></span>
<span class="line"><span style="color:#82AAFF;">source</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">~/.zshrc</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></div></div><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">p10k</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">configure</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>修改字体</p><p><code>Powerlevel10k</code> 推薦使用 <code>Meslo Nerd Font</code></p><ul><li><a href="https://steinsgate.oss-cn-hangzhou.aliyuncs.com/MesloLGS%20NF%20Regular.ttf" target="_blank" rel="noreferrer">MesloLGS NF Regular.ttf</a></li></ul><p><img src="https://steinsgate.oss-cn-hangzhou.aliyuncs.com/iterm2_config.jpg" alt="iterm2_config"></p><p>修复 <code>vscode</code> 终端图标乱码，修改 <code>terminal.integrated.fontFamily</code>为 <code>&quot;MesloLGS NF&quot;</code></p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">&quot;terminal.integrated.fontFamily&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">MesloLGS NF</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,41)]))}const d=a(p,[["render",o]]);export{h as __pageData,d as default};