<template><div><h1 id="赋值方式" tabindex="-1"><a class="header-anchor" href="#赋值方式"><span>赋值方式</span></a></h1>
<h2 id="单字符变量赋值" tabindex="-1"><a class="header-anchor" href="#单字符变量赋值"><span>单字符变量赋值</span></a></h2>
<p>使用冒号（:）进行赋值，只能用于单字符变量。
例如：</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">A:123456</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>这将变量A赋值为123456。</p>
<h2 id="多字符变量赋值" tabindex="-1"><a class="header-anchor" href="#多字符变量赋值"><span>多字符变量赋值</span></a></h2>
<p>使用美元符号（$）和等号（=）进行赋值，支持多字变量。
例如：</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$变量 金币 123456$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>这将变量“金币”赋值为123456。</p>
<h2 id="通过函数赋值" tabindex="-1"><a class="header-anchor" href="#通过函数赋值"><span>通过函数赋值</span></a></h2>
<p>使用特定的函数进行赋值，如<code v-pre>$读</code>、<code v-pre>$写</code>等。
例如：</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$读 教程/%群号%/金币 %QQ% 0$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>这将从文件中读取金币值并赋给变量。</p>
<h2 id="通过正则表达式捕获赋值" tabindex="-1"><a class="header-anchor" href="#通过正则表达式捕获赋值"><span>通过正则表达式捕获赋值</span></a></h2>
<p>使用正则表达式捕获组进行赋值。
例如：</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$取括号 内容 正则表达式$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>这将捕获正则表达式匹配的内容并赋值给变量。</p>
<h2 id="通过随机数或随机文本赋值" tabindex="-1"><a class="header-anchor" href="#通过随机数或随机文本赋值"><span>通过随机数或随机文本赋值</span></a></h2>
<p>使用<code v-pre>$随机数</code>或<code v-pre>$随机文本</code>函数进行赋值。
例如：</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$随机数 1-10$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>这将生成一个1到10之间的随机数并赋值。</p>
<h2 id="全局变量" tabindex="-1"><a class="header-anchor" href="#全局变量"><span>全局变量</span></a></h2>
<p>使用<code v-pre>$全局变量</code> 进行静态全局赋值，重启词库或主程序后需要重新赋值。
例如：</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$全局变量 好 好$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>这将全局变量“好”赋值为“好”。</p>
</div></template>


