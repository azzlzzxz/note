import{_ as o,o as c,c as d,N as i}from"./chunks/framework.2f525601.js";const h=JSON.parse('{"title":"Vite","description":"","frontmatter":{},"headers":[],"relativePath":"capital/construct/vite/base.md","lastUpdated":1728985701000}'),l={name:"capital/construct/vite/base.md"};function a(t,e,r,p,s,n){return c(),d("div",null,e[0]||(e[0]=[i('<h1 id="vite" tabindex="-1">Vite <a class="header-anchor" href="#vite" aria-label="Permalink to &quot;Vite&quot;">​</a></h1><h2 id="依赖预构建" tabindex="-1">依赖预构建 <a class="header-anchor" href="#依赖预构建" aria-label="Permalink to &quot;依赖预构建&quot;">​</a></h2><p>当你首次启动 <code>vite</code> 时，<code>Vite</code> 在本地加载你的站点之前预构建了项目依赖，<code>Vite</code>预编译之后，将文件缓存在<code>node_modules/.vite/</code>文件夹下。</p><h3 id="commonjs-和-umd-兼容性" tabindex="-1"><code>CommonJS</code> 和 <code>UMD</code> 兼容性 <a class="header-anchor" href="#commonjs-和-umd-兼容性" aria-label="Permalink to &quot;`CommonJS` 和 `UMD` 兼容性&quot;">​</a></h3><p>在开发阶段中，<code>Vite</code> 的开发服务器将所有代码视为原生 <code>ES</code> 模块。因此，<code>Vite</code> 必须先将以 <code>CommonJS</code> 或 <code>UMD</code> 形式提供的依赖项转换为 <code>ES</code> 模块。</p><h3 id="性能优化" tabindex="-1">性能优化 <a class="header-anchor" href="#性能优化" aria-label="Permalink to &quot;性能优化&quot;">​</a></h3><ul><li><p>为了提高后续页面的加载性能，<code>Vite</code>将那些具有许多内部模块的 <code>ESM</code> 依赖项转换为单个模块。</p><ul><li>如果不使用<code>esbuild</code>进行预构建，浏览器每检测到一个<code>import</code>语句就会向服务器发送一个请求，如果一个三方包被分割成很多的文件，这样就会发送很多请求，会触发浏览器并发请求限制。</li></ul></li><li><p>默认只有 <code>package.json</code> 或者 <code>lock</code> 文件中的依赖发生变化时才会重新打包依赖</p></li><li><p>打包好的依赖在请求时会被浏览器进行强缓存，只有依赖发生变化或者强刷页面后才会重新请求</p></li></ul><h2 id="基于esm的dev-server" tabindex="-1">基于<code>ESM</code>的<code>Dev server</code> <a class="header-anchor" href="#基于esm的dev-server" aria-label="Permalink to &quot;基于`ESM`的`Dev server`&quot;">​</a></h2><p>传统的打包工具如<code>Webpack</code>是先解析依赖、打包构建再启动开发服务器，<code>Dev Server</code> 必须等待所有模块构建完成后才能启动，当我们修改了 <code>bundle</code> 模块中的一个子模块， 整个 <code>bundle</code> 文件都会重新打包然后输出。项目应用越大，启动时间越长。</p><p><code>Vite</code>利用浏览器对<code>ESM</code>的支持，当 <code>import</code> 模块时，浏览器就会下载被导入的模块。先启动开发服务器，当代码执行到模块加载时再请求对应模块的文件，本质上实现了动态加载。</p><h2 id="基于esm的hmr" tabindex="-1">基于<code>ESM</code>的<code>HMR</code> <a class="header-anchor" href="#基于esm的hmr" aria-label="Permalink to &quot;基于`ESM`的`HMR`&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">目前所有的打包工具实现热更新的思路都大同小异</p><p>主要是通过<code>WebSocket</code>创建浏览器和服务器的通信监听文件的改变，当文件被修改时，服务端发送消息通知客户端修改相应的代码，客户端对应不同的文件进行不同的操作的更新。</p></div><p><code>Vite</code>的热更新：</p><ul><li><p>开发服务器启动时，会在<code>index.html</code>中插入一段<code>JS</code>代码，用于创建一个<code>WebSocket</code>链接</p></li><li><p>通过<code>chokidar</code>对项目根目录进行监听，但是会忽略<code>node_modules</code>、<code>gitignore</code>等目录和文件</p></li><li><p>当文件发生变化时会根据文件类型进行不同的更新处理</p><ul><li><p><code>package.json</code>：相当于更新了项目的第三方依赖，会重新进行依赖的预构建</p></li><li><p><code>config或者env</code>：配置信息变更直接重启开发服务器</p></li><li><p>项目代码：根据项目代码的类型进行不同的处理</p></li></ul></li><li><p><code>WebSocket</code>的服务端在处理完成文件更新之后，会把当前<code>HMR</code>的类型，文件的路径信息等返回给客户端</p></li><li><p>客户端根据<code>HMR</code>的类型进行不同的处理，对于普通文件的话直接走<code>ESM</code>的动态加载最终完成一次<code>HMR</code></p></li></ul><h2 id="vite-核心原理" tabindex="-1"><code>Vite</code> 核心原理 <a class="header-anchor" href="#vite-核心原理" aria-label="Permalink to &quot;`Vite` 核心原理&quot;">​</a></h2><ul><li><p><code>Vite</code>其核心原理是利用浏览器现在已经支持<code>ES6</code>的<code>import</code>，碰见<code>import</code>就会发送一个<code>HTTP</code>请求去加载文件。</p></li><li><p><code>Vite</code>启动一个 <code>koa</code> 服务器拦截这些请求，并在后端进行相应的处理，将项目中使用的文件通过简单的分解与整合，然后再以<code>ESM</code>格式返回给浏览器。</p></li><li><p><code>Vite</code>整个过程中没有对文件进行打包编译，做到了真正的按需加载，所以其运行速度比原始的<code>webpack</code>开发编译速度快出许多！</p></li></ul><h2 id="vite-的插件" tabindex="-1"><code>Vite</code> 的插件 <a class="header-anchor" href="#vite-的插件" aria-label="Permalink to &quot;`Vite` 的插件&quot;">​</a></h2><ul><li><p>基于<code>Rollup</code>的插件机制单独实现了一套<code>Vite</code>插件</p></li><li><p>所有的文件转换都在插件中实现，一个插件可以实现<code>Webpack</code>中<code>loader</code>和<code>plugin</code>的效果</p></li><li><p><code>Vite</code>默认内置一些插件，可以通过插件的<code>enforce</code>配置来强制设置插件调用顺序（在内置前或者后执行）</p><ul><li><code>pre</code>：在 <code>Vite</code> 核心插件之前调用该插件</li><li>默认：在 <code>Vite</code> 核心插件之后调用该插件</li><li><code>post</code>：在 <code>Vite</code> 构建插件之后调用该插件</li></ul></li><li><p>通过<code>apply</code>配置可以设置插件在开发或生产阶段调用</p></li><li><p>每一个插件将返回一个对象，包含一个<code>name</code>字段，用于表示插件的名称，其他的插件钩子函数用于执行插件的逻辑</p></li></ul><div class="info custom-block"><p class="custom-block-title">相关资料</p><ul><li><p><a href="https://cn.vitejs.dev/" target="_blank" rel="noreferrer"><u>Vite 官方中文文档</u></a></p></li><li><p><a href="https://github.com/vitejs/vite" target="_blank" rel="noreferrer"><u>Vite | Github</u></a></p></li></ul></div>',19)]))}const m=o(l,[["render",a]]);export{h as __pageData,m as default};
