import{_ as a,o as s,c as n,Q as e}from"./chunks/framework.a5035e6c.js";const h=JSON.parse('{"title":"Git 常用命令","description":"","frontmatter":{},"headers":[],"relativePath":"work/git/command.md","lastUpdated":1697514140000}'),t={name:"work/git/command.md"},l=e(`<h1 id="git-常用命令" tabindex="-1">Git 常用命令 <a class="header-anchor" href="#git-常用命令" aria-label="Permalink to &quot;Git 常用命令&quot;">​</a></h1><h2 id="git-add" tabindex="-1">git add <a class="header-anchor" href="#git-add" aria-label="Permalink to &quot;git add&quot;">​</a></h2><p>把要提交的文件的信息添加到暂存区中。当使用 git commit 时，将依据暂存区中的内容来进行文件的提交。</p><p>它通常将现有路径的当前内容作为一个整体添加，但是通过一些选项，它也可以用于添加内容，只对所应用的工作树文件进行一些更改，或删除工作树中不存在的路径了。</p><p>“索引”保存工作树内容的快照，并且将该快照作为下一个提交的内容。 因此，在对工作树进行任何更改之后，并且在运行 git commit 命令之前，必须使用 git add 命令将任何新的或修改的文件添加到索引。</p><p>该命令可以在提交之前多次执行。它只在运行 git add 命令时添加指定文件的内容; 如果希望随后的更改包含在下一个提交中，那么必须再次运行 git add 将新的内容添加到索引。</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 将当前目录下所有修改过的文件添加到暂存区的命令</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">add</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 把指定的文件添加到暂存区中</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">add</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">文件路</span><span style="color:#BABED8;">径</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,7),p=[l];function o(i,r,c,d,m,_){return s(),n("div",null,p)}const y=a(t,[["render",o]]);export{h as __pageData,y as default};
