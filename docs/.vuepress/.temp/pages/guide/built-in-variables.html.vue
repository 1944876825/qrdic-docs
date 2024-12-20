<template><div><h1 id="内置变量" tabindex="-1"><a class="header-anchor" href="#内置变量"><span>内置变量</span></a></h1>
<h2 id="一览表" tabindex="-1"><a class="header-anchor" href="#一览表"><span>一览表</span></a></h2>
<table>
<thead>
<tr>
<th>变量</th>
<th>介绍</th>
<th style="text-align:center">可用</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>%主人%</code></td>
<td>获取软件中的主人QQ</td>
<td style="text-align:center">✅</td>
<td></td>
</tr>
<tr>
<td><code v-pre>%管理员%</code></td>
<td>获取软件管理员</td>
<td style="text-align:center">✅</td>
<td></td>
</tr>
<tr>
<td><code v-pre>%Robot%</code></td>
<td>获取登录QR机器人账号</td>
<td style="text-align:center">✅</td>
<td></td>
</tr>
<tr>
<td><code v-pre>%RobotAuth%</code></td>
<td>检测QR授权状态</td>
<td style="text-align:center">✅</td>
<td></td>
</tr>
<tr>
<td><code v-pre>%RobotRunTime%</code></td>
<td>获取软件启动时间戳毫秒级</td>
<td style="text-align:center">✅</td>
<td></td>
</tr>
<tr>
<td><code v-pre>%NDTime%</code></td>
<td>获取当前时间戳毫秒级</td>
<td style="text-align:center">✅</td>
<td></td>
</tr>
<tr>
<td><code v-pre>%Type%</code></td>
<td>消息类型</td>
<td style="text-align:center">✅</td>
<td><a href="#%E6%B6%88%E6%81%AF%E7%B1%BB%E5%9E%8B-type">查看详情</a></td>
</tr>
<tr>
<td><code v-pre>%Status%</code></td>
<td>系统消息状态码</td>
<td style="text-align:center">✅</td>
<td><a href="#%E7%B3%BB%E7%BB%9F%E6%B6%88%E6%81%AF%E7%8A%B6%E6%80%81%E7%A0%81-status">查看详情</a></td>
</tr>
<tr>
<td><code v-pre>%Value%</code></td>
<td>进群申请状态</td>
<td style="text-align:center">✅</td>
<td><a href="#%E8%BF%9B%E7%BE%A4%E7%94%B3%E8%AF%B7%E7%8A%B6%E6%80%81-value">查看详情</a></td>
</tr>
<tr>
<td><code v-pre>%Number%</code></td>
<td>红包判断</td>
<td style="text-align:center">✅</td>
<td></td>
</tr>
<tr>
<td><code v-pre>%Groupid%</code></td>
<td>获取群号</td>
<td style="text-align:center">✅</td>
<td></td>
</tr>
<tr>
<td><code v-pre>%Code%</code></td>
<td>操作QQ号</td>
<td style="text-align:center">✅</td>
<td></td>
</tr>
<tr>
<td><code v-pre>%Uin%</code></td>
<td>发言者账号</td>
<td style="text-align:center">✅</td>
<td></td>
</tr>
<tr>
<td><code v-pre>%Adminuin%</code></td>
<td>进群审核同意的管理QQ (需要搭配标签<code v-pre>系统</code>使用)</td>
<td style="text-align:center">✅</td>
<td></td>
</tr>
<tr>
<td><code v-pre>%Time%</code></td>
<td>获取当前时间戳</td>
<td style="text-align:center">✅</td>
<td></td>
</tr>
<tr>
<td><code v-pre>%Msgbar%</code></td>
<td>获取消息编号</td>
<td style="text-align:center">✅</td>
<td>默认获取上一条消息的编号</td>
</tr>
<tr>
<td><code v-pre>%Reqid%</code></td>
<td>获取QQ特殊消息ID</td>
<td style="text-align:center">✅</td>
<td></td>
</tr>
<tr>
<td><code v-pre>%Json%</code></td>
<td>获取机器人&quot;Pskey&quot;json格式</td>
<td style="text-align:center">✅</td>
<td></td>
</tr>
<tr>
<td><code v-pre>%Skey%</code></td>
<td>获取机器人账号的skey</td>
<td style="text-align:center">✅</td>
<td></td>
</tr>
<tr>
<td><code v-pre>%GroupName%</code></td>
<td>获取群名称</td>
<td style="text-align:center">✅</td>
<td></td>
</tr>
<tr>
<td><code v-pre>%UinName%</code></td>
<td>获取发言者昵称</td>
<td style="text-align:center">✅</td>
<td></td>
</tr>
<tr>
<td><code v-pre>%Adminname%</code></td>
<td>获取群操作管理昵称</td>
<td style="text-align:center">✅</td>
<td></td>
</tr>
<tr>
<td><code v-pre>%Inviteename%</code></td>
<td>获取退群者昵称</td>
<td style="text-align:center">✅</td>
<td></td>
</tr>
<tr>
<td><code v-pre>%Title%</code></td>
<td>获取发言者头衔</td>
<td style="text-align:center">✅</td>
<td></td>
</tr>
<tr>
<td><code v-pre>%Msgbar0%</code></td>
<td>获取被回复消息的ID</td>
<td style="text-align:center">✅</td>
<td></td>
</tr>
<tr>
<td><code v-pre>%Msgbarqq0%</code></td>
<td>获取被回复QQ号</td>
<td style="text-align:center">✅</td>
<td></td>
</tr>
<tr>
<td><code v-pre>%Msgbartime0%</code></td>
<td>获取被回复消息的发送时间戳</td>
<td style="text-align:center">✅</td>
<td></td>
</tr>
<tr>
<td><code v-pre>%代码运行时间%</code></td>
<td>获取代码运行时间</td>
<td style="text-align:center">✅</td>
<td></td>
</tr>
<tr>
<td><code v-pre>%Strmsg%</code></td>
<td>本指令仅供参考，%Strmsg%可能有其他用处自行摸索</td>
<td style="text-align:center">✅</td>
<td></td>
</tr>
<tr>
<td><code v-pre>%Listid%</code></td>
<td>获取红包id（配合抢红包，查红包使用）</td>
<td style="text-align:center">✅</td>
<td></td>
</tr>
<tr>
<td><code v-pre>%Authkey%</code></td>
<td>tx红包授权密钥</td>
<td style="text-align:center">✅</td>
<td></td>
</tr>
<tr>
<td><code v-pre>%Tftext%</code></td>
<td>转账文本</td>
<td style="text-align:center">✅</td>
<td></td>
</tr>
<tr>
<td><code v-pre>%Tftitle%</code></td>
<td>转账标题</td>
<td style="text-align:center">✅</td>
<td></td>
</tr>
<tr>
<td><code v-pre>%Tftip%</code></td>
<td><code v-pre>[转账]</code>你收到一笔转账</td>
<td style="text-align:center">✅</td>
<td></td>
</tr>
<tr>
<td><code v-pre>%Tfurl%</code></td>
<td>获取订单链接</td>
<td style="text-align:center">✅</td>
<td></td>
</tr>
<tr>
<td><code v-pre>%TfAmounts%</code></td>
<td>获取转账金额</td>
<td style="text-align:center">✅</td>
<td></td>
</tr>
<tr>
<td><code v-pre>%Tfuin%</code></td>
<td>获取转账者账号</td>
<td style="text-align:center">✅</td>
<td></td>
</tr>
<tr>
<td><code v-pre>%群%</code></td>
<td>获取群号</td>
<td style="text-align:center">✅</td>
<td></td>
</tr>
<tr>
<td><code v-pre>%群号%</code></td>
<td>同上获取群号</td>
<td style="text-align:center">✅</td>
<td></td>
</tr>
<tr>
<td><code v-pre>%QQ%</code></td>
<td>获取发言者账号</td>
<td style="text-align:center">✅</td>
<td></td>
</tr>
<tr>
<td><code v-pre>%昵称%</code></td>
<td>获取发言者昵称</td>
<td style="text-align:center">✅</td>
<td></td>
</tr>
<tr>
<td><code v-pre>%参数-1%</code></td>
<td>获取发言所有字，不带换行</td>
<td style="text-align:center">✅</td>
<td></td>
</tr>
<tr>
<td><code v-pre>%参数0%</code></td>
<td>获取第一个空格之前的消息</td>
<td style="text-align:center">✅</td>
<td></td>
</tr>
<tr>
<td><code v-pre>%括号0%</code></td>
<td>类%参数-1%获取包括括号外消息在内的发言，不带换行</td>
<td style="text-align:center">✅</td>
<td></td>
</tr>
<tr>
<td><code v-pre>%括号1%</code></td>
<td>获取发言括号1，括号里的内容可以使用变量/正则等</td>
<td style="text-align:center">✅</td>
<td></td>
</tr>
<tr>
<td><code v-pre>%AT0%</code></td>
<td>获取第一个被艾特的账号（0替换为1即获取第二个被艾特的账号）</td>
<td style="text-align:center">✅</td>
<td></td>
</tr>
<tr>
<td><code v-pre>%ATNUM%</code></td>
<td>获取被艾特账号数量</td>
<td style="text-align:center">✅</td>
<td></td>
</tr>
<tr>
<td><code v-pre>%IMG0%</code></td>
<td>获取图片MD5</td>
<td style="text-align:center">✅</td>
<td></td>
</tr>
<tr>
<td><code v-pre>%FIMG0%</code></td>
<td>获取闪照MD5</td>
<td style="text-align:center">✅</td>
<td></td>
</tr>
<tr>
<td><code v-pre>%FACE0%</code></td>
<td>获取表情ID</td>
<td style="text-align:center">✅</td>
<td></td>
</tr>
<tr>
<td><code v-pre>%BUB0%</code></td>
<td>获取发言者气泡ID</td>
<td style="text-align:center">✅</td>
<td></td>
</tr>
<tr>
<td><code v-pre>%撤回%</code></td>
<td>检测撤回消息需要搭配标签<code v-pre>[总处理]</code>或<code v-pre>[撤回]</code>使用</td>
<td style="text-align:center">✅</td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="详细介绍" tabindex="-1"><a class="header-anchor" href="#详细介绍"><span>详细介绍</span></a></h2>
<h3 id="获取软件管理员、主人等-其他用法一致-不再介绍" tabindex="-1"><a class="header-anchor" href="#获取软件管理员、主人等-其他用法一致-不再介绍"><span>获取软件管理员、主人等，其他用法一致，不再介绍</span></a></h3>
<p>示例：</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">查看管理员</span>
<span class="line">%管理员%</span>
<span class="line"></span>
<span class="line">查看主人</span>
<span class="line">%主人%</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="消息类型-type" tabindex="-1"><a class="header-anchor" href="#消息类型-type"><span>消息类型：<code v-pre>%Type%</code></span></a></h3>
<ul>
<li><code v-pre>0</code> 群</li>
<li><code v-pre>1</code> 好友</li>
<li><code v-pre>2</code> 讨论组</li>
<li><code v-pre>3</code> 系统</li>
<li><code v-pre>4</code> 临时会话</li>
<li><code v-pre>19</code> 群撤回</li>
<li>如在群内进行触发将会获得反馈&quot;0&quot;以此类推，更多消息类型请自测</li>
</ul>
<p>示例:</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">查询消息类型</span>
<span class="line">%Type%</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="系统消息状态码-status" tabindex="-1"><a class="header-anchor" href="#系统消息状态码-status"><span>系统消息状态码：<code v-pre>%Status%</code></span></a></h3>
<ul>
<li><code v-pre>%Status%</code>【系统消息的状态码，进群、退群、状态等等】配合%Value%使用</li>
<li><code v-pre>%Status%==1</code> 有人申请进群(自己申请)/入群申请被同意</li>
<li><code v-pre>%Status%==22</code> 有人申请进群(有人邀请)/入群申请被同意</li>
<li><code v-pre>%Status%==3</code>  我不道啊</li>
<li><code v-pre>%Status%==6</code> 管理员踢出(需要下一次[系统]触发，不推荐)</li>
<li><code v-pre>%Status%==13</code> 有人自己退群(需要下一次[系统]触发，不推荐)</li>
</ul>
<h3 id="进群申请状态-value" tabindex="-1"><a class="header-anchor" href="#进群申请状态-value"><span>进群申请状态：<code v-pre>%Value%</code></span></a></h3>
<ul>
<li>
<p>情况1 <code v-pre>%Value%</code> 在进群申请时，搭配标签<code v-pre>[系统]</code>使用</p>
<ul>
<li><code v-pre>%Value%==1</code> 有人申请入群</li>
<li><code v-pre>%Value%==2</code> 有人进群</li>
<li><code v-pre>%Value%==5</code> 有人退群(需要下一次<code v-pre>[系统]</code>触发，不推荐)</li>
</ul>
</li>
<li>
<p>情况2 <code v-pre>%Value%</code> 在管理变动时，为1时则上管理,为0时到下管理，需搭配标签<code v-pre>[上下管理]</code>使用 <br>
示例:</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">[上下管理]</span>
<span class="line">如果:%Value%==1</span>
<span class="line">恭喜%QQ%升级为管理员</span>
<span class="line">返回</span>
<span class="line">如果尾</span>
<span class="line">如果:%QQ%==0</span>
<span class="line">$回调 艾特$的管理员被解除了</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="红包判断-number" tabindex="-1"><a class="header-anchor" href="#红包判断-number"><span>红包判断：<code v-pre>%Number%</code></span></a></h3>
<p>例子：</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">[红包]</span>
<span class="line">如果:%Number%!=</span>
<span class="line">%Number%</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="操作qq号-code" tabindex="-1"><a class="header-anchor" href="#操作qq号-code"><span>操作QQ号：<code v-pre>%Code%</code></span></a></h3>
<p>情况比较多，不同情况的code所指QQ不同，大部分情况下<code v-pre>%QQ%</code>和<code v-pre>%Code%</code>获取到的为同一QQ值，但是特殊情况是用在进群检测中，<code v-pre>%Code%</code>获取进群邀请人QQ，<code v-pre>%QQ%</code>获取进群人QQ。如：<code v-pre>%Code%邀请%QQ%进群</code>。</p>
<h3 id="strmsg" tabindex="-1"><a class="header-anchor" href="#strmsg"><span><code v-pre>%Strmsg%</code></span></a></h3>
<p>本指令仅供参考，%Strmsg%可能有其他用处自行摸索 <code v-pre>±rep %Msgbar%±</code> <code v-pre>±strmsg %参数-1%±</code> <br>
示例:【仅供参考】</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">回复我 ?(.*)</span>
<span class="line">±rep %Msgbar%±±strmsg %参数-1%±</span>
<span class="line">%括号1%</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>回复触发词并发送'括号1'其中%参数-1%为回复界面消息框显示消息，具体可更改后自行查看返回消息</p>
<h3 id="消息组-±msg-内容±" tabindex="-1"><a class="header-anchor" href="#消息组-±msg-内容±"><span>消息组 <code v-pre>±msg 内容±</code></span></a></h3>
<p>直接输出内容……意义不明</p>
<h3 id="获取转账者账号-tfuin" tabindex="-1"><a class="header-anchor" href="#获取转账者账号-tfuin"><span>获取转账者账号 <code v-pre>%Tfuin%</code></span></a></h3>
<p>示例：</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">\[转账\]([\S\s]+)</span>
<span class="line">如果:%Tfuin%!=</span>
<span class="line">%Tfuin%\n</span>
<span class="line">%Tfurl%\n</span>
<span class="line">%Tftip%\n</span>
<span class="line">%Tftitle%\n</span>
<span class="line">%Tftext%\n</span>
<span class="line">%TfAmounts%\n</span>
<span class="line">如果尾</span>
<span class="line">返回</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取图片md5-img0-imgnum" tabindex="-1"><a class="header-anchor" href="#获取图片md5-img0-imgnum"><span>获取图片MD5：<code v-pre>%IMG0%</code> <code v-pre>%IMGNUM%</code></span></a></h3>
<p>示例:</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">.*</span>
<span class="line">如果:%IMG0%!=</span>
<span class="line">a:$替换 € %IMG0%€.jpg€$</span>
<span class="line">%a%</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例2:</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">.*</span>
<span class="line">a:$正则 @ %IMG0%@/.*-|[^\dA-Z]@$</span>
<span class="line">%a%</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="图片前后缀" tabindex="-1"><a class="header-anchor" href="#图片前后缀"><span>图片前后缀</span></a></h3>
<ul>
<li>
<p>±img=图片链接/本地路径/MD5±</p>
</li>
<li>
<p>±img=图片链接/本地路径/MD5</p>
</li>
<li>
<p>±img 图片链接/本地路径/MD5</p>
</li>
<li>
<p>获取群头像：±img=http://p.qlogo.cn/gh/群号/群号/±</p>
</li>
<li>
<p>获取发言人头像：±img=http://q2.qlogo.cn/headimg_dl?dst_uin=%QQ%&amp;spec=5±</p>
</li>
<li>
<p>获取被艾特人头像：±img=http://q2.qlogo.cn/headimg_dl?dst_uin=%AT0%&amp;spec=5±</p>
</li>
</ul>
<h3 id="获取闪照md5-fimg0-fimgnum" tabindex="-1"><a class="header-anchor" href="#获取闪照md5-fimg0-fimgnum"><span>获取闪照MD5：<code v-pre>%FIMG0%</code> <code v-pre>%FIMGNUM%</code></span></a></h3>
<p>可搭配其他变量达到检测闪照后自动发送原图
示例:</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">.*</span>
<span class="line">如果:%FIMG0%!=</span>
<span class="line">a:$替换 @ %FIMG0%@.jpg@$</span>
<span class="line">±img=%a%±</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取表情id" tabindex="-1"><a class="header-anchor" href="#获取表情id"><span>获取表情ID</span></a></h3>
<ul>
<li>%FACE0%</li>
<li>%FACENUM%</li>
<li>%FACEPRO0%</li>
<li>%FACEPRONUM%</li>
<li>%FACENEW0%</li>
<li>%FACENEWNUM%</li>
</ul>
<h3 id="获取发言者气泡id" tabindex="-1"><a class="header-anchor" href="#获取发言者气泡id"><span>获取发言者气泡ID</span></a></h3>
<ul>
<li>%BUB0%</li>
<li>%BUBNUM%</li>
</ul>
<h3 id="检测撤回消息" tabindex="-1"><a class="header-anchor" href="#检测撤回消息"><span>检测撤回消息</span></a></h3>
<p>需要搭配标签<code v-pre>[总处理]</code>或<code v-pre>[撤回]</code>使用 <span style="color: red;">要授权</span></p>
<ul>
<li>%撤回%</li>
<li>%撤回 NUM%</li>
</ul>
</div></template>


