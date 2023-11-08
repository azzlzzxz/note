import{_ as a,o as e,c as l,Q as o}from"./chunks/framework.a5035e6c.js";const b=JSON.parse('{"title":"闭包","description":"","frontmatter":{},"headers":[],"relativePath":"base/javaScript/closure.md","lastUpdated":1699441140000}'),i={name:"base/javaScript/closure.md"},t=o('<h1 id="闭包" tabindex="-1">闭包 <a class="header-anchor" href="#闭包" aria-label="Permalink to &quot;闭包&quot;">​</a></h1><h2 id="什么是闭包" tabindex="-1">什么是闭包？ <a class="header-anchor" href="#什么是闭包" aria-label="Permalink to &quot;什么是闭包？&quot;">​</a></h2><p>能够访问另一个函数作用域的变量的函数（闭包就是一个函数，这个函数能够访问其他函数的作用域变量）。</p><p>闭包是可以在另一个函数的外部访问到其作用域中的变量的函数。而被访问的变量可以和函数一同存在。即使另一个函数已经运行结束，导致创建变量的环境销毁，也依然会存在，直到访问变量的那个函数被销毁。</p><p>闭包属于一种特殊的作用域，称为   静态作用域。它的定义可以理解为:  父函数被销毁   的情况下，返回出的子函数的[[scope]]中仍然保留着父级的单变量对象和作用域链，因此可以继续访问到父级的变量对象，这样的函数称为闭包。</p><h2 id="闭包的概念" tabindex="-1">闭包的概念 <a class="header-anchor" href="#闭包的概念" aria-label="Permalink to &quot;闭包的概念&quot;">​</a></h2><p>函数执行时形成的私有上下文 <code>EC(FN)</code>，正常情况下，代码执行完会出栈后释放;但是特殊情况下，如果当前私有上下文中的某个东西被上下文以外的事物占用了，则上下文不会出栈释放，从而形成不销毁的上下文。 函数执行函数执行过程中，会形成一个全新的私有上下文，可能会被释放，可能不会被释放，不论释放与否，他的作用是：</p><ol><li>保护：划分一个独立的代码执行区域，在这个区域中有自己私有变量存储的空间，保护自己的私有变量不受外界干扰（操作自己的私有变量和外界没有关系）；</li><li>保存：如果当前上下文不被释放【只要上下文中的某个东西被外部占用即可】，则存储的这些私有变量也不会被释放，可以供其下级上下文中调取使用，相当于把一些值保存起来了；</li></ol><p>我们把函数执行形成私有上下文，来保护和保存私有变量机制称为闭包。</p><h2 id="闭包特性" tabindex="-1">闭包特性 <a class="header-anchor" href="#闭包特性" aria-label="Permalink to &quot;闭包特性&quot;">​</a></h2><h3 id="函数嵌套函数。" tabindex="-1">函数嵌套函数。 <a class="header-anchor" href="#函数嵌套函数。" aria-label="Permalink to &quot;函数嵌套函数。&quot;">​</a></h3><h3 id="内部函数可以访问定义他们外部函数的参数和变量。" tabindex="-1">内部函数可以访问定义他们外部函数的参数和变量。 <a class="header-anchor" href="#内部函数可以访问定义他们外部函数的参数和变量。" aria-label="Permalink to &quot;内部函数可以访问定义他们外部函数的参数和变量。&quot;">​</a></h3><p>(作用域链的向上查找，把外围的作用域中的变量值存储在内存中而不是在函数调用完毕后销毁)设计私有的方法和变量，避免全局变量的污染。</p><ol><li>闭包是密闭的容器，，类似于 <code>set</code>、<code>map</code> 容器，存储数据的</li><li>闭包是一个对象，存放数据的格式为 <code>key-value </code>形式</li></ol><h3 id="参数和变量不会被垃圾回收机制回收" tabindex="-1">参数和变量不会被垃圾回收机制回收 <a class="header-anchor" href="#参数和变量不会被垃圾回收机制回收" aria-label="Permalink to &quot;参数和变量不会被垃圾回收机制回收&quot;">​</a></h3><p>本质是将函数内部和外部连接起来。优点是可以读取函数内部的变量，让这些变量的值始终保存在内存中，不会在函数被调用之后自动清除。</p><h2 id="闭包的形成条件" tabindex="-1">闭包的形成条件 <a class="header-anchor" href="#闭包的形成条件" aria-label="Permalink to &quot;闭包的形成条件&quot;">​</a></h2><ol><li>函数的嵌套</li><li>内部函数引用外部函数的局部变量，延长外部函数的变量生命周期</li></ol><h2 id="闭包的用途" tabindex="-1">闭包的用途 <a class="header-anchor" href="#闭包的用途" aria-label="Permalink to &quot;闭包的用途&quot;">​</a></h2><ol><li>模仿块级作用域。</li><li>保护外部函数的变量能够访问函数定义时所在的词法作用域（阻止其被回收）。</li><li>封装私有化变量。</li><li>创建模块。</li></ol><h2 id="闭包的应用场景" tabindex="-1">闭包的应用场景 <a class="header-anchor" href="#闭包的应用场景" aria-label="Permalink to &quot;闭包的应用场景&quot;">​</a></h2><ol><li>闭包的两个场景，闭包的两大作用：保存/保护。</li><li>在开发中, 其实我们随处可见闭包的身影, 大部分前端 <code>JavaScript</code> 代码都是“事件驱动”的： <ol><li>一个事件绑定的回调方法。</li><li>发送 <code>ajax</code> 请求成功|失败的回调。</li><li><code>setTimeout</code> 的延时回调。</li><li>或者一个函数内部返回另一个匿名函数。</li></ol></li></ol><h2 id="闭包的优缺点" tabindex="-1">闭包的优缺点 <a class="header-anchor" href="#闭包的优缺点" aria-label="Permalink to &quot;闭包的优缺点&quot;">​</a></h2><p>闭包的优点：延长局部变量的生命周期</p><p>闭包缺点：会导致函数的变量一直保存在内存中，过多的闭包可能会导致内存泄漏</p><h2 id="闭包会产生一个很经典的问题" tabindex="-1">闭包会产生一个很经典的问题 <a class="header-anchor" href="#闭包会产生一个很经典的问题" aria-label="Permalink to &quot;闭包会产生一个很经典的问题&quot;">​</a></h2><p>多个子函数的[[scope]]都是同时指向父级，是完全共享的。因此当父级的变量对象被修改时，所有子函数都受到影响。 解决:</p><ul><li>变量可以通过 函数参数的形式 传入，避免使用默认的[[scope]]向上查找</li><li>使用 <code>setTimeout</code> 包裹，通过第三个参数传入</li><li>使用 块级作用域，让变量成为自己上下文的属性，避免共享</li></ul>',28),r=[t];function c(d,h,s,n,p,u){return e(),l("div",null,r)}const q=a(i,[["render",c]]);export{b as __pageData,q as default};
