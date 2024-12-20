<template><div><h1 id="qrdicpro-使用文档" tabindex="-1"><a class="header-anchor" href="#qrdicpro-使用文档"><span>QRDICPro 使用文档</span></a></h1>
<p>QRDICPro 是一个高性能的词库系统，其主要特性包括速度提升、严格的转义规则、兼容模式支持等。</p>
<hr>
<h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h2>
<ul>
<li><a href="#%E7%AE%80%E4%BB%8B">简介</a></li>
<li><a href="#%E5%AE%89%E8%A3%85%E4%B8%8E%E9%85%8D%E7%BD%AE">安装与配置</a></li>
<li><a href="#%E5%9F%BA%E7%A1%80%E5%8F%98%E9%87%8F">基础变量</a></li>
<li><a href="#%E9%AB%98%E7%BA%A7%E5%8A%9F%E8%83%BD">高级功能</a>
<ul>
<li><a href="#json-%E6%93%8D%E4%BD%9C">JSON 操作</a></li>
<li><a href="#%E7%94%BB%E5%B8%83%E6%93%8D%E4%BD%9C">画布操作</a></li>
</ul>
</li>
<li><a href="#%E6%9B%B4%E6%96%B0%E6%97%A5%E5%BF%97">更新日志</a></li>
<li><a href="#%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98">常见问题</a></li>
</ul>
<hr>
<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2>
<p>QRDICPro 是词库系统的增强版本，通过重写底层架构，实现了更高的执行效率和更严谨的变量处理机制。主要应用于 QR 机器人功能扩展。</p>
<h3 id="特点" tabindex="-1"><a class="header-anchor" href="#特点"><span>特点</span></a></h3>
<ul>
<li><strong>高性能</strong>：支持多线程并发。</li>
<li><strong>扩展性强</strong>：提供了丰富的变量和函数支持。</li>
<li><strong>兼容模式</strong>：支持部分普通版词库语法。</li>
</ul>
<hr>
<h2 id="安装与配置" tabindex="-1"><a class="header-anchor" href="#安装与配置"><span>安装与配置</span></a></h2>
<h3 id="启用兼容模式" tabindex="-1"><a class="header-anchor" href="#启用兼容模式"><span>启用兼容模式</span></a></h3>
<p>在词库文件中添加以下内容即可开启兼容模式：</p>
<div class="language-plaintext line-numbers-mode" data-highlighter="prismjs" data-ext="plaintext" data-title="plaintext"><pre v-pre><code><span class="line">&amp;&amp;&lt;配置>兼容模式:是</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="禁用函数示例" tabindex="-1"><a class="header-anchor" href="#禁用函数示例"><span>禁用函数示例</span></a></h3>
<div class="language-plaintext line-numbers-mode" data-highlighter="prismjs" data-ext="plaintext" data-title="plaintext"><pre v-pre><code><span class="line">&amp;&amp;&lt;配置>禁用函数:MD5,随机数</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>注意：确保语法正确，去掉 <code v-pre>【】</code> 仅保留内容。</p>
</blockquote>
<hr>
<h2 id="基础变量" tabindex="-1"><a class="header-anchor" href="#基础变量"><span>基础变量</span></a></h2>
<p>以下是 QRDICPro 中常用的变量：</p>
<h3 id="消息变量" tabindex="-1"><a class="header-anchor" href="#消息变量"><span>消息变量</span></a></h3>
<table>
<thead>
<tr>
<th>变量名</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>%QQ%</code></td>
<td>获取发言者账号</td>
</tr>
<tr>
<td><code v-pre>%昵称%</code></td>
<td>获取发言者昵称</td>
</tr>
<tr>
<td><code v-pre>%Type%</code></td>
<td>消息类型：0为群，1为好友等</td>
</tr>
<tr>
<td><code v-pre>%群号%</code></td>
<td>获取群号</td>
</tr>
<tr>
<td><code v-pre>%Msgbar%</code></td>
<td>消息编号（默认获取上一条消息）</td>
</tr>
</tbody>
</table>
<h3 id="时间变量" tabindex="-1"><a class="header-anchor" href="#时间变量"><span>时间变量</span></a></h3>
<table>
<thead>
<tr>
<th>变量名</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>%NDTime%</code></td>
<td>当前时间戳（毫秒级）</td>
</tr>
<tr>
<td><code v-pre>$时间 yyyyMMdd$</code></td>
<td>获取当前时间（格式化输出）</td>
</tr>
</tbody>
</table>
<h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h3>
<h4 id="查询消息类型" tabindex="-1"><a class="header-anchor" href="#查询消息类型"><span>查询消息类型</span></a></h4>
<div class="language-plaintext line-numbers-mode" data-highlighter="prismjs" data-ext="plaintext" data-title="plaintext"><pre v-pre><code><span class="line">查询消息类型</span>
<span class="line">%Type%</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>返回结果：</p>
<div class="language-plaintext line-numbers-mode" data-highlighter="prismjs" data-ext="plaintext" data-title="plaintext"><pre v-pre><code><span class="line">0</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>表示消息类型为群消息。</p>
<hr>
<h2 id="高级功能" tabindex="-1"><a class="header-anchor" href="#高级功能"><span>高级功能</span></a></h2>
<h3 id="json-操作" tabindex="-1"><a class="header-anchor" href="#json-操作"><span>JSON 操作</span></a></h3>
<p>QRDICPro 提供了丰富的 JSON 操作函数。</p>
<h4 id="添加-json-键值对" tabindex="-1"><a class="header-anchor" href="#添加-json-键值对"><span>添加 JSON 键值对</span></a></h4>
<div class="language-plaintext line-numbers-mode" data-highlighter="prismjs" data-ext="plaintext" data-title="plaintext"><pre v-pre><code><span class="line">$JSON 添加 A Key Value$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="删除-json-键值对" tabindex="-1"><a class="header-anchor" href="#删除-json-键值对"><span>删除 JSON 键值对</span></a></h4>
<div class="language-plaintext line-numbers-mode" data-highlighter="prismjs" data-ext="plaintext" data-title="plaintext"><pre v-pre><code><span class="line">$JSON 删除 A Key$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="获取-json-长度" tabindex="-1"><a class="header-anchor" href="#获取-json-长度"><span>获取 JSON 长度</span></a></h4>
<div class="language-plaintext line-numbers-mode" data-highlighter="prismjs" data-ext="plaintext" data-title="plaintext"><pre v-pre><code><span class="line">$JSON 长度 A$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1"><span>示例</span></a></h3>
<h4 id="合并-json" tabindex="-1"><a class="header-anchor" href="#合并-json"><span>合并 JSON</span></a></h4>
<div class="language-plaintext line-numbers-mode" data-highlighter="prismjs" data-ext="plaintext" data-title="plaintext"><pre v-pre><code><span class="line">1:["abc"]</span>
<span class="line">2:["def"]</span>
<span class="line">$JSON 合并 1 %2%$</span>
<span class="line">%1%</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回结果：</p>
<div class="language-plaintext line-numbers-mode" data-highlighter="prismjs" data-ext="plaintext" data-title="plaintext"><pre v-pre><code><span class="line">["abc", "def"]</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><hr>
<h3 id="画布操作" tabindex="-1"><a class="header-anchor" href="#画布操作"><span>画布操作</span></a></h3>
<h4 id="声明画布" tabindex="-1"><a class="header-anchor" href="#声明画布"><span>声明画布</span></a></h4>
<div class="language-plaintext line-numbers-mode" data-highlighter="prismjs" data-ext="plaintext" data-title="plaintext"><pre v-pre><code><span class="line">$画布 声明 A 600 600$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>创建一个大小为 600x600 的画布。</p>
</blockquote>
<h4 id="设置画布背景颜色" tabindex="-1"><a class="header-anchor" href="#设置画布背景颜色"><span>设置画布背景颜色</span></a></h4>
<div class="language-plaintext line-numbers-mode" data-highlighter="prismjs" data-ext="plaintext" data-title="plaintext"><pre v-pre><code><span class="line">$画布 颜色 A FFFFFFFF$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>设置画布颜色为白色（不透明）。</p>
</blockquote>
<h4 id="添加文字" tabindex="-1"><a class="header-anchor" href="#添加文字"><span>添加文字</span></a></h4>
<div class="language-plaintext line-numbers-mode" data-highlighter="prismjs" data-ext="plaintext" data-title="plaintext"><pre v-pre><code><span class="line">$画布 文字 A 你好 100 100 FFFF0000 100$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>在画布上绘制文字，位置为 (100, 100)，颜色为红色。</p>
</blockquote>
<h4 id="保存画布" tabindex="-1"><a class="header-anchor" href="#保存画布"><span>保存画布</span></a></h4>
<div class="language-plaintext line-numbers-mode" data-highlighter="prismjs" data-ext="plaintext" data-title="plaintext"><pre v-pre><code><span class="line">$画布 保存 A /storage/emulated/0/图片/生成图片.jpg$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>保存画布至指定路径。</p>
</blockquote>
<hr>
<h2 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志"><span>更新日志</span></a></h2>
<h3 id="版本-3-6-2024-年-2-月-19-日" tabindex="-1"><a class="header-anchor" href="#版本-3-6-2024-年-2-月-19-日"><span>版本 3.6（2024 年 2 月 19 日）</span></a></h3>
<ul>
<li>更新画布教程文档链接。</li>
<li>修复 JSON 合并示例。</li>
<li>添加戳一戳功能。</li>
</ul>
<h3 id="版本-3-4-2023-年-10-月-5-日" tabindex="-1"><a class="header-anchor" href="#版本-3-4-2023-年-10-月-5-日"><span>版本 3.4（2023 年 10 月 5 日）</span></a></h3>
<ul>
<li>添加画布圆角和旋转函数。</li>
</ul>
<hr>
<h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h2>
<h3 id="如何获取机器人登录账号" tabindex="-1"><a class="header-anchor" href="#如何获取机器人登录账号"><span>如何获取机器人登录账号？</span></a></h3>
<p>使用变量 <code v-pre>%Robot%</code> 获取。</p>
<p>示例：</p>
<div class="language-plaintext line-numbers-mode" data-highlighter="prismjs" data-ext="plaintext" data-title="plaintext"><pre v-pre><code><span class="line">bot账号查询</span>
<span class="line">%Robot%</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>返回结果为机器人当前登录账号。</p>
<h3 id="json-合并为什么无效" tabindex="-1"><a class="header-anchor" href="#json-合并为什么无效"><span>JSON 合并为什么无效？</span></a></h3>
<p>可能是语法错误，检查示例格式是否正确：</p>
<div class="language-plaintext line-numbers-mode" data-highlighter="prismjs" data-ext="plaintext" data-title="plaintext"><pre v-pre><code><span class="line">$JSON 合并 A B$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>确保 A 和 B 是有效的 JSON 数据。</p>
<hr>
<p>以上内容仅为文档初稿，如需更多内容或进一步优化，请随时提出需求。</p>
</div></template>


