import{_ as o,o as l,c as d,N as c}from"./chunks/framework.6198c6ab.js";const p=JSON.parse('{"title":"模块化","description":"","frontmatter":{},"headers":[],"relativePath":"base/es6/esModule.md","lastUpdated":1726112933000}'),i={name:"base/es6/esModule.md"};function r(a,e,t,s,m,u){return l(),d("div",null,e[0]||(e[0]=[c('<h1 id="模块化" tabindex="-1">模块化 <a class="header-anchor" href="#模块化" aria-label="Permalink to &quot;模块化&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">什么是模块化?</p><p>模块化<code>（Modularity）</code>是一种软件设计原则，指将一个大的系统或程序分解为相对独立、可管理的小部分（模块），这些模块可以各自独立开发、测试、维护，并可以组合在一起形成更大的系统。</p><p>模块化的优点：</p><ul><li>提高代码复用性</li><li>便于维护和更新</li><li>增强可扩展性</li><li>避免命名空间的冲突</li><li>更好的分离，实现按需加载</li></ul></div><p>目前前端主流的模块规范是</p><ul><li><a href="/node/norm/commonJs"><u>CommonJS</u></a></li><li>ESModule</li><li>AMD</li><li>CMD</li><li>UMD</li></ul><h2 id="esmodule" tabindex="-1"><code>ESModule</code> <a class="header-anchor" href="#esmodule" aria-label="Permalink to &quot;`ESModule`&quot;">​</a></h2><p><code>ESModule</code> 是 <code>ES6</code> 在语言标准的层面上实现的模块功能，主要由 <code>export</code> 和 <code>import</code> 构成</p><ul><li><code>export</code> 命令用于规定模块的对外接口</li><li><code>import</code> 命令用于输入其他模块提供的功能</li></ul><p>一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。</p><h3 id="esmodule-与-commonjs-的区别" tabindex="-1"><code>ESModule</code> 与 <code>CommonJS</code> 的区别 <a class="header-anchor" href="#esmodule-与-commonjs-的区别" aria-label="Permalink to &quot;`ESModule` 与 `CommonJS` 的区别&quot;">​</a></h3><ul><li><p><code>CommonJS</code> 是动态语法可以写在判断里，<code>ESModule</code> 静态语法只能写在顶层</p></li><li><p><code>CommonJS</code> 模块输出的是一个值的拷贝，<code>ESModule</code>输出的是值的引用。</p><ul><li><code>CommonJS</code> 模块一旦输出一个值模块内部的变化就影响不到这个值</li><li><code>ESModule</code> 模块在 <code>JavaScript</code> 引擎对脚本静态分析时，遇到模块加载命令 <code>import</code>，就会生成一个只读引用，等到脚本真正执行时再根据这个只读引用到被加载的那个模块里面去取值(<code>ESModule</code> 是动态引用，并且不会缓存值，模块里面的变量绑定其所在的模块)</li></ul></li><li><p><code>CommonJS</code> 模块是运行时加载，<code>ESModule</code>是编译时输出接口。</p><ul><li><code>CommonJS</code> 加载的是一个对象（即 <code>module.exports</code> 属性），该对象只有在脚本运行完才会生成</li><li><code>ESModule</code> 不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成</li></ul></li><li><p><code>CommonJS</code> 模块的<code>require()</code>是同步加载模块，<code>ESModule</code>的<code>import</code>命令是异步加载，有一个独立的模块依赖的解析阶段</p></li><li><p>顶层的 <code>this</code> 指向不同</p><ul><li><code>CommonJS</code> 模块中的顶层 <code>this</code> 指向模块本身</li><li><code>ESModule</code> 模块中的顶层 <code>this</code> 指向 <code>undefined</code></li></ul></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li><a href="https://es6.ruanyifeng.com/#docs/module-loader#ES6-%E6%A8%A1%E5%9D%97%E4%B8%8E-CommonJS-%E6%A8%A1%E5%9D%97%E7%9A%84%E5%B7%AE%E5%BC%82" target="_blank" rel="noreferrer">阮一峰 ES6 模块与 CommonJS 模块的差异</a></li><li><a href="https://es6.ruanyifeng.com/#docs/module" target="_blank" rel="noreferrer">阮一峰 ES6 模块</a></li><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules" target="_blank" rel="noreferrer">JavaScript 模块 --MDN</a></li><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/export" target="_blank" rel="noreferrer">export --MDN</a></li><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import" target="_blank" rel="noreferrer">import --MDN</a></li></ul></div>',11)]))}const S=o(i,[["render",r]]);export{p as __pageData,S as default};
