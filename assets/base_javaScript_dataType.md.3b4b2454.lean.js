import{_ as d,o,c as a,N as c}from"./chunks/framework.87264d68.js";const h=JSON.parse('{"title":"数据类型","description":"","frontmatter":{},"headers":[],"relativePath":"base/javaScript/dataType.md","lastUpdated":1726501491000}'),l={name:"base/javaScript/dataType.md"};function i(n,e,t,r,p,u){return o(),a("div",null,e[0]||(e[0]=[c('<h1 id="数据类型" tabindex="-1">数据类型 <a class="header-anchor" href="#数据类型" aria-label="Permalink to &quot;数据类型&quot;">​</a></h1><h2 id="javascript-的-8-种数据类型" tabindex="-1">javaScript 的 8 种数据类型 <a class="header-anchor" href="#javascript-的-8-种数据类型" aria-label="Permalink to &quot;javaScript 的 8 种数据类型&quot;">​</a></h2><h3 id="_7-种基本数据类型" tabindex="-1">7 种基本数据类型 <a class="header-anchor" href="#_7-种基本数据类型" aria-label="Permalink to &quot;7 种基本数据类型&quot;">​</a></h3><p><code>Number</code>、<code>String</code>、<code>Boolean</code>、<code>Undefined</code>、<code>Null</code>、<code>Symbol（es6 新增）</code>、<code>Biglent（es10 新增）</code></p><p>在内存中占据固定大小，保存在栈内存中</p><h3 id="_1-种引用数据类型" tabindex="-1">1 种引用数据类型 <a class="header-anchor" href="#_1-种引用数据类型" aria-label="Permalink to &quot;1 种引用数据类型&quot;">​</a></h3><p><code>Object</code></p><p>里面包含 <code>Function(函数)</code>，其他还有<code>Array(数组)</code>、<code>Date(日期)</code>、<code>RegExp(正则表达式)</code>等。</p><p>特殊的基本包装类型(<code>String</code>、<code>Number</code>、<code>Boolean</code>) 以及单体内置对象(<code>Global</code>、<code>Math</code>)等。</p><p>引用类型的值是对象，保存在堆内存中，而栈内存存储的是对象的变量标识符以及对象在堆内存中的存储地址。</p><h3 id="null-与-undefined-的区别" tabindex="-1"><code>null</code> 与 <code>undefined</code> 的区别 <a class="header-anchor" href="#null-与-undefined-的区别" aria-label="Permalink to &quot;`null` 与 `undefined` 的区别&quot;">​</a></h3><ol><li><p><code>null</code> 是表示一个&#39;无&#39;的对象，转为数值是 0。</p></li><li><p><code>undefined</code> 是表示一个&#39;无&#39;的原始值，转为数值是 <code>NAN</code>。</p></li><li><p><code>null</code> 用来表示尚未存在的对象，常用来表示函数企图返回一个不存在的对象</p></li><li><p><code>undefined</code> 表示”缺少值”，就是此处应该有一个值,但是还没有定义，典型用法是：</p><ol><li>变量被声明了，但没有赋值时，就等于 <code>undefined</code></li><li>调用函数时，应该提供的参数没有提供，该参数等于 <code>undefined</code></li><li>对象没有赋值属性，该属性的值为 <code>undefined</code></li><li>函数没有返回值时，默认返回 <code>undefined</code></li></ol></li><li><p><code>null</code> 表示”没有对象”，即该处不应该有值，典型用法是：</p><ol><li>作为函数的参数，表示该函数的参数不是对象</li><li>作为对象原型链的终点</li></ol></li></ol><h3 id="和-的区别" tabindex="-1">=== 和 == 的区别 <a class="header-anchor" href="#和-的区别" aria-label="Permalink to &quot;=== 和 == 的区别&quot;">​</a></h3><p>前者会⾃动转换类型，再判断是否相等，后者不会⾃动类型转换，直接去⽐较。</p>',14)]))}const f=d(l,[["render",i]]);export{h as __pageData,f as default};
