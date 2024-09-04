import{_ as l,B as c,o as t,c as d,N as s,x as a,D as r,z as p,a as o}from"./chunks/framework.84e4f51a.js";const B=JSON.parse('{"title":"环境配置","description":"","frontmatter":{},"headers":[],"relativePath":"frame/react-native/init.md","lastUpdated":1725422901000}'),i={name:"frame/react-native/init.md"};function h(u,e,m,b,y,g){const n=c("font");return t(),d("div",null,[e[1]||(e[1]=s('<h1 id="环境配置" tabindex="-1">环境配置 <a class="header-anchor" href="#环境配置" aria-label="Permalink to &quot;环境配置&quot;">​</a></h1><h2 id="基础环境配置" tabindex="-1">基础环境配置 <a class="header-anchor" href="#基础环境配置" aria-label="Permalink to &quot;基础环境配置&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><a href="https://reactnative.cn/" target="_blank" rel="noreferrer">ReactNative 中文网</a></p><p><a href="https://reactnative.dev/" target="_blank" rel="noreferrer">ReactNative 官网</a></p></div><h3 id="安装-nodejs" tabindex="-1">安装 <code>nodejs</code> <a class="header-anchor" href="#安装-nodejs" aria-label="Permalink to &quot;安装 `nodejs`&quot;">​</a></h3><p>如果你 <code>node</code> 装过了，这一步跳过。注意检查下版本号，<code>node</code> 最好需要 18 或者 18+，你可以使用 <code>node -v</code> 先检查下版本号。如果低于这个版本，建议升级或者重装，可以使用 <code>nvm</code> 等 <code>node</code> 版本控制工具来切换 <code>node</code> 版本(<a href="/work/utility/nvm">可以看这篇文章来安装<code>nvm</code></a>)。</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">node</span></span>\n<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="安装-yarn" tabindex="-1">安装 <code>yarn</code> <a class="header-anchor" href="#安装-yarn" aria-label="Permalink to &quot;安装 `yarn`&quot;">​</a></h3><p><a href="https://yarnpkg.com/" target="_blank" rel="noreferrer">Yarn</a>是 <code>Facebook</code> 提供的替代 <code>npm</code> 的工具，可以加速 <code>node</code> 模块的下载。</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">yarn</span></span>\n<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="安装-react-native-cli" tabindex="-1">安装 <code>React Native cli</code> <a class="header-anchor" href="#安装-react-native-cli" aria-label="Permalink to &quot;安装 `React Native cli`&quot;">​</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">react-native-cli</span></span>\n<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="安装java-development-kit" tabindex="-1">安装<code>Java Development Kit</code> <a class="header-anchor" href="#安装java-development-kit" aria-label="Permalink to &quot;安装`Java Development Kit`&quot;">​</a></h3><p>推荐使用 <code>Homebrew</code>(如何安装 <code>Homebrew</code> 可以看这篇文章<a href="/work/utility/nvm">Homebrew 安装</a>) 来安装由 <code>Azul</code> 提供的 名为 <code>Zulu</code> 的 <code>OpenJDK</code> 发行版。此发行版同时为 <code>Intel</code> 和 <code>M1</code> 芯片提供支持。在 <code>M1</code> 芯片架构的 <code>Mac</code> 上相比其他 <code>JDK</code> 在编译时有明显的性能优势。</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--cask</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">zulu@17</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># Get path to where cask was installed to double-click installer</span></span>\n<span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">info</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--cask</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">zulu@17</span></span>\n<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="android环境搭建-mac" tabindex="-1"><code>android</code>环境搭建(<code>mac</code>) <a class="header-anchor" href="#android环境搭建-mac" aria-label="Permalink to &quot;`android`环境搭建(`mac`)&quot;">​</a></h2><h3 id="安装-android-studio" tabindex="-1">安装 <code>Android Studio</code> <a class="header-anchor" href="#安装-android-studio" aria-label="Permalink to &quot;安装 `Android Studio`&quot;">​</a></h3><p><a href="https://developer.android.google.cn/studio?hl=zh-cn" target="_blank" rel="noreferrer">Android Studio 下载</a></p><p>安装界面中选择&quot;<code>Customize</code>&quot;选项，确保选中了以下几项：</p><ul><li><code>Android SDK</code></li><li><code>Android SDK Platform</code></li><li><code>Android Virtual Device</code></li></ul><h3 id="安装-android-sdk" tabindex="-1">安装 <code>Android SDK</code> <a class="header-anchor" href="#安装-android-sdk" aria-label="Permalink to &quot;安装 `Android SDK`&quot;">​</a></h3><p>在 <code>Android Studio</code> 的欢迎界面中找到 <code>seetings</code>。点击<code>seetings</code>。</p><p><img src="https://steinsgate.oss-cn-hangzhou.aliyuncs.com/seettings.png" alt="settings"></p><p>在<code>Languages &amp; Frameworks</code> 里找到 <code>Android SDK</code> ，选择<code>&quot;SDK Platforms&quot;</code>选项卡，然后在右下角勾选<code>&quot;Show Package Details&quot;</code>，展开 <code>Android 14 (UpsideDownCake)</code> 选项，确保勾选了下面这些组件（如果看不到这个界面，则需要使用稳定的代理软件）：</p><ul><li><code>Android SDK Platform 34</code></li><li><code>Sources for Android 34</code></li><li><code>Intel x86 Atom_64 System Image</code>（官方模拟器镜像文件，使用非官方模拟器不需要安装此组件）或是 <code>Google APIs ARM 64 v8a System Image</code>（针对 <code>Apple Silicon</code> 系列机型）或是 <code>Google APIs ARM 64 v8a System Image</code>。</li></ul><p><img src="https://steinsgate.oss-cn-hangzhou.aliyuncs.com/sdk.png" alt="Android SDK Platform"></p><p>然后点击<code>&quot;SDK Tools&quot;</code>选项卡，同样勾中右下角的<code>&quot;Show Package Details&quot;</code>。展开&quot;<code>Android SDK Build-Tools&quot;</code>选项，确保选中了 <code>React Native</code> 所必须的 <code>34.0.0</code> 版本。你可以同时安装多个其他版本。</p><p><img src="https://steinsgate.oss-cn-hangzhou.aliyuncs.com/tools.png" alt="tools"></p><p>点击<code>&quot;Apply&quot;</code>来下载和安装选中的这些组件。</p><h3 id="配置-android-home-环境变量" tabindex="-1">配置 <code>ANDROID_HOME</code> 环境变量 <a class="header-anchor" href="#配置-android-home-环境变量" aria-label="Permalink to &quot;配置 `ANDROID_HOME` 环境变量&quot;">​</a></h3><p><code>React Native </code>工具要求设置一些环境变量，以便使用原生代码构建应用程序。 将以下内容添加到你的 <code>~/.zprofile</code> 或 <code>~/.zshrc</code> 文件（如果您使用的是 <code>bash</code>，则添加到 <code>~/.bash_profile</code> 或 <code>~/.bashrc</code> 文件）中。</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">export</span><span style="color:#BABED8;"> ANDROID_HOME</span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;">$HOME</span><span style="color:#C3E88D;">/Library/Android/sdk</span></span>\n<span class="line"><span style="color:#C792EA;">export</span><span style="color:#BABED8;"> PATH</span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;">$PATH</span><span style="color:#C3E88D;">:</span><span style="color:#BABED8;">$ANDROID_HOME</span><span style="color:#C3E88D;">/emulator</span></span>\n<span class="line"><span style="color:#C792EA;">export</span><span style="color:#BABED8;"> PATH</span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;">$PATH</span><span style="color:#C3E88D;">:</span><span style="color:#BABED8;">$ANDROID_HOME</span><span style="color:#C3E88D;">/platform-tools</span></span>\n<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',31)),a("p",null,[a("strong",null,[r(n,{color:"FF9D00"},{default:p(()=>e[0]||(e[0]=[o("具体操作为：在终端输入"),a("code",null,"open ~/.zshrc",-1),o("然后在弹出的文件里加入以上命令之后，关闭文件即可。")])),_:1})])]),e[2]||(e[2]=s('<p><img src="https://steinsgate.oss-cn-hangzhou.aliyuncs.com/android_home.png" alt="ANDROID_HOME"></p><h2 id="ios环境搭建-mac" tabindex="-1"><code>ios</code>环境搭建(<code>mac</code>) <a class="header-anchor" href="#ios环境搭建-mac" aria-label="Permalink to &quot;`ios`环境搭建(`mac`)&quot;">​</a></h2><h3 id="安装-watchman" tabindex="-1">安装 <code>Watchman</code> <a class="header-anchor" href="#安装-watchman" aria-label="Permalink to &quot;安装 `Watchman`&quot;">​</a></h3><p><code>Watchman</code> 是一个监视工具，用于监视文件系统事件，并通知应用程序。</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">watchman</span></span>\n<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="安装-xcode" tabindex="-1">安装 <code>Xcode</code> <a class="header-anchor" href="#安装-xcode" aria-label="Permalink to &quot;安装 `Xcode`&quot;">​</a></h3><p>你可以通过 <code>App Store</code> 或是到<code>Apple</code> 开发者官网上下载。这一步骤会同时安装 <code>Xcode IDE</code>、<code>Xcode</code> 的命令行工具和 <code>iOS</code> 模拟器。</p><p><img src="https://steinsgate.oss-cn-hangzhou.aliyuncs.com/ios_settings.png" alt="settings"></p><h3 id="xcode-的命令行工具" tabindex="-1"><code>Xcode</code> 的命令行工具 <a class="header-anchor" href="#xcode-的命令行工具" aria-label="Permalink to &quot;`Xcode` 的命令行工具&quot;">​</a></h3><p>启动 <code>Xcode</code>，并在 <code>Xcode | settings | Locations</code> 菜单中检查一下是否装有某个版本的 <code>Command Line Tools</code>。</p><p><img src="https://steinsgate.oss-cn-hangzhou.aliyuncs.com/command.png" alt="command"></p><h3 id="选择平台" tabindex="-1">选择平台 <a class="header-anchor" href="#选择平台" aria-label="Permalink to &quot;选择平台&quot;">​</a></h3><p><img src="https://steinsgate.oss-cn-hangzhou.aliyuncs.com/platform.png" alt="platform"></p><h3 id="ios-模拟器" tabindex="-1"><code>ios</code> 模拟器 <a class="header-anchor" href="#ios-模拟器" aria-label="Permalink to &quot;`ios` 模拟器&quot;">​</a></h3><p>选择你想用的模拟器 <img src="https://steinsgate.oss-cn-hangzhou.aliyuncs.com/simulator.png" alt="simulator"></p><h3 id="安装-cocoapods" tabindex="-1">安装 CocoaPods <a class="header-anchor" href="#安装-cocoapods" aria-label="Permalink to &quot;安装 CocoaPods&quot;">​</a></h3><p><code>CocoaPods</code> 是一个依赖管理工具，用于管理 <code>iOS</code> 和 <code>Mac</code> 应用程序依赖项。</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">cocoapods</span></span>\n<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>这样就完成了安卓和 ios 的环境配置，可以开始着手于我们的项目搭建了。</strong></p>',19))])}const A=l(i,[["render",h]]);export{B as __pageData,A as default};
