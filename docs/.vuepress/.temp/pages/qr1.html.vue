<template><div><h1 id="qrpro词库说明文档" tabindex="-1"><a class="header-anchor" href="#qrpro词库说明文档"><span>QRPRO词库说明文档</span></a></h1>
<p>QRPRO词库是用来方便编写QQ机器人的词库，可以实现自定义回复消息、变量赋值、加解密、发送图片、语音等功能。</p>
<h2 id="一个简单的自定义回复例子" tabindex="-1"><a class="header-anchor" href="#一个简单的自定义回复例子"><span>一个简单的自定义回复例子</span></a></h2>
<p>第一行用户匹配消息，第二行是回复内容。支持正则匹配匹配</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">你好</span>
<span class="line">你好</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="变量赋值方式" tabindex="-1"><a class="header-anchor" href="#变量赋值方式"><span>变量赋值方式</span></a></h2>
<ul>
<li>单字符变量赋值：
使用冒号（:）进行赋值，只能用于单字符变量。
例如：A:123456，这将变量A赋值为123456。</li>
<li>多字符变量赋值：
使用美元符号（$）和等号（=）进行赋值，支持多字变量。
例如：$变量 金币 123456$，这将变量“金币”赋值为123456。</li>
<li>全局变量赋值：
使用$全局变量进行静态全局赋值，重启词库或主程序后需要重新赋值。
例如：$全局变量 好 好$，这将全局变量“好”赋值为“好”。</li>
<li>通过函数赋值：
使用特定的函数进行赋值，如$读、$写等。
例如：$读 教程/%群号%/金币 %QQ% 0$，这将从文件中读取金币值并赋给变量。</li>
<li>通过正则表达式捕获赋值：
使用正则表达式捕获组进行赋值。
例如：$取括号 内容 正则表达式$，这将捕获正则表达式匹配的内容并赋值给变量。</li>
<li>通过随机数或随机文本赋值：
使用$随机数或$随机文本函数进行赋值。
例如：$随机数 1-10$，这将生成一个1到10之间的随机数并赋值。</li>
</ul>
<h2 id="配置指令" tabindex="-1"><a class="header-anchor" href="#配置指令"><span>配置指令</span></a></h2>
<ul>
<li>开启兼容模式：&amp;&amp;&lt;配置&gt;兼容模式:是/否</li>
<li>禁用函数：&amp;&amp;&lt;配置&gt;禁用函数:MD5,随机数</li>
</ul>
<h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量"><span>变量</span></a></h2>
<ul>
<li>
<p>获取软件中的主人QQ：%主人%</p>
</li>
<li>
<p>获取软件管理员：%管理员% <br>
示例：</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">查看管理员</span>
<span class="line">%管理员%</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>获取登录QR机器人账号：%Robot% <br>
示例：</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">bot账号查询</span>
<span class="line">%Robot%</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>检测QR授权状态：%RobotAuth%</p>
</li>
<li>
<p>获取软件启动时间戳毫秒级：%RobotRunTime%</p>
</li>
<li>
<p>获取当前时间戳毫秒级：%NDTime%</p>
</li>
<li>
<p>消息类型：%Type% <br>
【0为群，1为好友，2为讨论组，3为系统，4为临时会话，19为群撤回】 <br>
【如在群内进行触发将会获得反馈&quot;0&quot;以此类推，更多消息类型请自测】<br>
示例:</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">查询消息类型</span>
<span class="line">%Type%</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>系统消息状态码：%Status%</p>
<ul>
<li>%Status%【系统消息的状态码，进群、退群、状态等等】配合%Value%使用</li>
<li>%Status%==1 有人申请进群(自己申请)/入群申请被同意</li>
<li>%Status%==22 有人申请进群(有人邀请)/入群申请被同意</li>
<li>%Status%==3  我不道啊</li>
<li>%Status%==6 管理员踢出(需要下一次[系统]触发，不推荐)</li>
<li>%Status%==13 有人自己退群(需要下一次[系统]触发，不推荐)</li>
</ul>
</li>
<li>
<p>进群申请状态：%Value% <br>
情况1 <br>
%Value%【在进群申请时，搭配标签[系统]使用】</p>
<ul>
<li>%Value%==1 有人申请入群</li>
<li>%Value%==2 有人进群</li>
<li>%Value%==5 有人退群(需要下一次[系统]触发，不推荐)</li>
</ul>
<p>情况2 <br>
%Value%【在管理变动时，为1时则上管理,为0时到下管理，需搭配标签&quot;[上下管理]&quot;使用】
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
<li>
<p>红包判断：%Number%
例子：</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">[红包]</span>
<span class="line">如果:%Number%!=</span>
<span class="line">%Number%</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>获取群号：%Groupid%</p>
</li>
<li>
<p>操作QQ号：%Code% （情况比较多，不同情况的code所指QQ不同，大部分情况下%QQ%和%Code%获取到的为同一QQ值，但是特殊情况是用在进群检测中，%Code%获取进群邀请人QQ，%QQ%获取进群人QQ
##%Code%邀请%QQ%进群）</p>
</li>
<li>
<p>发言者账号：%Uin%</p>
</li>
<li>
<p>进群审核同意的管理QQ：%Adminuin% （需要搭配标签&quot;系统&quot;使用）</p>
</li>
<li>
<p>获取当前时间戳：%Time%</p>
</li>
<li>
<p>获取消息编号：%Msgbar% （默认使用将会获取上一条消息的编号，既触发本回复的消息）</p>
</li>
<li>
<p>获取QQ特殊消息ID：%Reqid%</p>
</li>
<li>
<p>获取机器人&quot;Pskey&quot;json格式：%Json%</p>
</li>
<li>
<p>获取机器人账号的skey：%Skey%</p>
</li>
<li>
<p>获取群名称：%GroupName%</p>
</li>
<li>
<p>获取发言者昵称：%UinName%</p>
</li>
<li>
<p>获取群操作管理昵称：%Adminname%</p>
</li>
<li>
<p>获取退群者昵称：%Inviteename%</p>
</li>
<li>
<p>获取发言者头衔：%Title%</p>
</li>
<li>
<p>获取被回复消息的ID：%Msgbar0%</p>
</li>
<li>
<p>获取被回复QQ号：%Msgbarqq0%</p>
</li>
<li>
<p>获取被回复消息的发送时间戳：%Msgbartime0%</p>
</li>
<li>
<p>获取代码运行时间：%代码运行时间%</p>
</li>
<li>
<p>%Strmsg% 【本指令仅供参考，%Strmsg%可能有其他用处自行摸索】 <br>
±rep %Msgbar%± <br>
±strmsg %参数-1%± <br>
#示例:【仅供参考】</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">回复我 ?(.*)</span>
<span class="line">±rep %Msgbar%±±strmsg %参数-1%±</span>
<span class="line">%括号1%</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【回复触发词并发送'括号1'其中%参数-1%为回复界面消息框显示消息，具体可更改后自行查看返回消息】</p>
</li>
<li>
<p>消息组 <br>
±msg 内容± <br>
【直接输出内容……意义不明】</p>
</li>
<li>
<p>获取红包id: %Listid% （配合抢红包，查红包使用）
示例：</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">[红包]</span>
<span class="line">红包id为:%Listid%</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>tx红包授权密钥：%Authkey%</p>
</li>
<li>
<p>转账文本：%Tftext%</p>
</li>
<li>
<p>转账标题：%Tftitle%</p>
</li>
<li>
<p>%Tftip%【[转账]你收到一笔转账】</p>
</li>
<li>
<p>%Tfurl%【获取订单链接】</p>
</li>
<li>
<p>%TfAmounts%【获取转账金额】</p>
</li>
<li>
<p>%Tfuin%【获取转账者账号】
示例：</p>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>%群%【获取群号】</p>
</li>
<li>
<p>%群号%【同上获取群号】</p>
</li>
<li>
<p>%QQ%【获取发言者账号】</p>
</li>
<li>
<p>%昵称%【获取发言者昵称】</p>
</li>
<li>
<p>%参数-1%【获取发言所有字，不带换行】</p>
</li>
<li>
<p>%参数0%【获取第一个空格之前的消息】</p>
</li>
<li>
<p>%括号0%【类%参数-1%获取包括括号外消息在内的发言，不带换行】</p>
</li>
<li>
<p>%括号1%【获取发言括号1，可不带空格】以括号为线，不包含自己那个括号。另外括号里还可以使用变量\正则等。更多请看括号解释及正则表达式</p>
</li>
<li>
<p>%AT0%【获取第一个被艾特的账号（0替换为1即获取第二个被艾特的账号，以此类推）】 <br>
示例1:</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">查看账号@.*</span>
<span class="line">%AT0%</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>示例2:</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">查看账号@.*@.*@.*</span>
<span class="line">[&quot;%AT0%&quot;&quot;%AT1%&quot;&quot;%AT2%&quot;]</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>获取被艾特账号数量：%ATNUM%</p>
</li>
<li>
<p>获取图片MD5：%IMG0% %IMGNUM% <br>
示例:</p>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>图片前后缀：</p>
<ul>
<li>±img=图片链接/本地路径/MD5±</li>
<li>±img=图片链接/本地路径/MD5</li>
<li>±img 图片链接/本地路径/MD5</li>
</ul>
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
<li>
<p>获取被回复消息的ID：%Msgbar0%</p>
</li>
<li>
<p>是否获取到回复消息ID，获取不到为0，有为1：%MsgbarNUM%</p>
</li>
<li>
<p>被回复信息的QQ号&amp;非机器人账号输出一串负数：%Msgbarqq0%</p>
</li>
<li>
<p>是否获取到回复QQ号，获取不到为0，有为1：%MsgbarqqNUM%</p>
</li>
<li>
<p>被回复的消息的发送时间戳：%Msgbartime0%</p>
</li>
<li>
<p>是否获取到回复时间戳，获取不到为0，有为1：%MsgbartimeNUM%</p>
</li>
<li>
<p>获取JSON卡片代码：%JSON0% %JSONNUM%</p>
</li>
<li>
<p>获取XML卡片代码：%XML0% %XMLNUM%</p>
</li>
<li>
<p>获取闪照MD5：%FIMG0% %FIMGNUM%【可搭配其他变量达到检测闪照后自动发送原图】
示例:</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">.*</span>
<span class="line">如果:%FIMG0%!=</span>
<span class="line">a:$替换 @ %FIMG0%@.jpg@$</span>
<span class="line">±img=%a%±</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>获取表情ID</p>
<ul>
<li>%FACE0%</li>
<li>%FACENUM%</li>
<li>%FACEPRO0%</li>
<li>%FACEPRONUM%</li>
<li>%FACENEW0%</li>
<li>%FACENEWNUM%</li>
</ul>
</li>
<li>
<p>获取发言者气泡ID</p>
<ul>
<li>%BUB0%</li>
<li>%BUBNUM%</li>
</ul>
</li>
<li>
<p>检测撤回消息需要搭配标签&quot;[总处理]&quot;或&quot;[撤回]&quot;使用 要授权</p>
<ul>
<li>%撤回%</li>
<li>%撤回 NUM%</li>
</ul>
</li>
</ul>
<h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数"><span>函数</span></a></h2>
<ul>
<li>
<p>发闪照</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">±fimg=图片链接±</span>
<span class="line">$发送 群 fimg %群号% -1 图片链接$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>发秀图【已失效】</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">±ximgtype 图片±</span>
<span class="line">±ximg 40000-40005±</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>发送表情</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">±face 表情id±</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>拆发信息</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$发送$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>示例:</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">你</span>
<span class="line">$发送$</span>
<span class="line">好</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>发送匿名消息</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">±anony 匿名±</span>
<span class="line">这是一条匿名消息</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>发送群信息</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$发送 群$</span>
<span class="line">$发送 群 群号$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>发送好友信息</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$发送 好友$</span>
<span class="line">$发送 好友 QQ$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>发送临时信息</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$发送 临时/私聊$</span>
<span class="line">$发送 临时/私聊 群号 QQ$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>发送指定群信息</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$发送 群 msg/xml/json/img 群号 消息内容$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>发送语音信息</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">±ptt=音频地址或本地路径±</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>发送语音【已失效↓】</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$发送 群 ptt %群号% -1 音频地址$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>【发送语音】支持音频格式mp3,acc,amr等,语音会格式自动识别，不过最多只能发1MB以内的音频。
注意:需要授权！发xml和json要授权</p>
</li>
<li>
<p>发送好友/临时/私聊信息</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$发送 好友/临时 img 图片md5/链接$</span>
<span class="line">$发送 好友 msg/xml/json 消息内容$</span>
<span class="line">$发送 临时/私聊 msg/xml/json 群号 QQ 消息内容$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>新版QQ超级表情（表情id请自行获取）</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">±faceplus 表情id±</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>$管理员 QQ$ （权限判定）<br>
示例:【如发言账号为词库管理员将返回发言者账号，否则为0】</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">权限判定</span>
<span class="line">$管理员 %QQ%$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>$添加管理员 QQ$</p>
</li>
<li>
<p>$删除管理员 QQ$ <br>
示例:【注意此处为设置词库管理员，非群管理员】</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">(添加|删除)管理员@.*</span>
<span class="line">如果:%QQ%==%主人%</span>
<span class="line">$%括号1%管理员 %AT0%$</span>
<span class="line">成功</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>使用其他气泡发言，突破VIP限制，QR牛逼：这是设置气泡效果，需要授权</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">气泡</span>
<span class="line">±bub 1±</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>常调 【不能调用带有内部标签的指令，一般配合总处理使用】 <br>
$常调 内容$ <br>
示例:</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">测试</span>
<span class="line">测试1</span>
<span class="line">$常调 测试1$</span>
<span class="line"></span>
<span class="line">测试1</span>
<span class="line">测试2</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>回调 【能用所有指令，包括带有内部标签的指令】
$回调 内容$ <br>
示例:</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">测试</span>
<span class="line">成功</span>
<span class="line">$回调 测试2$</span>
<span class="line"></span>
<span class="line">[内部]测试2</span>
<span class="line">成功2</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>回调内部 【回调获取返回的数值，可以当指令使用】
$回调内部 内容$ <br>
示例:</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$回调内部 你好$</span>
<span class="line">哈喽</span>
<span class="line"></span>
<span class="line">[内部]你好</span>
<span class="line">这是指令</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个词条意思就是，发送“这是指令”会触发回复“哈喽”，自己悟一下</p>
</li>
<li>
<p>调用 【有无内部标签均可调用，1000是时间延迟，1000=1s，内容为调用指令】
$调用 1000 内容$ <br>
示例:</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">你好</span>
<span class="line">$调用 10000 哈喽$</span>
<span class="line"></span>
<span class="line">[内部]哈喽</span>
<span class="line">这是10s延迟回复</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在某一个时间戳达到时开始调用，时间戳为毫秒级 <br>
$调用 时间戳 1649842305965 内容$ <br>
示例:</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">你好</span>
<span class="line">$调用 时间戳 1649842305965 哈喽$</span>
<span class="line"></span>
<span class="line">[内部]哈喽</span>
<span class="line">这是时间戳为1649842305965(2022-04-13 17:31:45)的延迟回复</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>本地读写操作</p>
<ul>
<li>$读 文件路径 key value$</li>
<li>$写 文件路径 Key 默认值$##当文件为空的时候，默认值是什么就会读取什么</li>
<li>读写的路径都是从/storage/emulated/0/QR/QRDic/data开始</li>
<li>即$写 1 1 1$会在/storage/emulated/0/QR/QRDic/data下生成一个叫1的文件而不是在根目录/storage/emulated/0/下生成</li>
<li>读同理</li>
</ul>
<p>示例:</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">金:$读 教程/%群号%/金币 %QQ% 0$【这是读取金币文件】</span>
<span class="line">$写 教程/%群号%/金币 %QQ% [%金%+1]$ 【这是加金币，读取金币文件并进行+1】</span>
<span class="line">#</span>
<span class="line">金:$读 教程/%群号%/金币 %QQ% 0$【这是读取金币文件】</span>
<span class="line">$写 教程/%群号%/金币 %QQ% [%金%-1]$-----------【这是减金币，读取金币文件并进行-1】</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例2:</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$写 教程/%群号%/测试 m 0$</span>
<span class="line">【写入文本到/教程/%群号%/测试里】</span>
<span class="line">$读 教程/%群号%/测试 m 0$</span>
<span class="line">【取文本：从/教程/%群号%/测试里取】【这里的最后一个0是数据的默认值，也就是说没有读取到时给这个值】</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>全局变量：$全局变量 Name$</p>
<ul>
<li>可在这个词库定义全局变量，任何一个指令都可使用</li>
<li>静态全局，不会随着时间改变，且重启一次词库或主程序就要重新赋值一次，较为麻烦</li>
</ul>
<p>示例:</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">你好</span>
<span class="line">$全局变量 好 好$</span>
<span class="line"></span>
<span class="line">全局变量</span>
<span class="line">%好%</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>取变量：$取变量 Name$ <br>
示例：</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">取</span>
<span class="line">1:$随机数 1 10$</span>
<span class="line">$取变量 1$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>取括号：$取括号 内容 正则表达式$ <br>
示例:</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">取</span>
<span class="line">$取括号 我是谁 我(.*)谁$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>替换内容：$替换 分割符 内容分割符被替换内容分割符要替换内容$ <br>
示例:</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">测试</span>
<span class="line">$替换 @ 你好呀@呀@吗$</span>
<span class="line">分割符可替换任意符号，不可为函数符号</span>
<span class="line">##替换，同上</span>
<span class="line">$替换 内容 被替换内容 要替换内容$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>正则替换：$正则 分割符 内容分割符正则表达式分割符要替换内容$ <br>
示例:</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">测试</span>
<span class="line">$正则 @ 你好呀@好.*@吗$</span>
<span class="line">##正则替换，同上</span>
<span class="line">$正则 内容 正则表达式 要替换内容$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>取中间：$取中间 分割符 内容分割符左边内容分割符右边内容$ <br>
示例:</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">测试</span>
<span class="line">$取中间 @ 你好呀@你@呀$</span>
<span class="line">##取中间 同上</span>
<span class="line">$取中间 内容 左边内容 右边内容$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>访问网址</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$访问 链接$</span>
<span class="line"></span>
<span class="line">$访问 GET 链接$</span>
<span class="line">$访问 POST 链接 参数$</span>
<span class="line">$访问 SETGET JSON格式的Headers 链接$</span>
<span class="line">$访问 SETPOST JSON格式的Headers 链接 参数$</span>
<span class="line">$访问 SETGETFT JSON格式的Headers A 链接$</span>
<span class="line">$访问 SETPOSTFT JSON格式的Headers A 链接 参数$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>转码解码URL格式</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$URLDecoder 内容$</span>
<span class="line">$URLEncoder 内容$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>转码解码HEX格式</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$HexDecoder 内容$</span>
<span class="line">$HexEncoder 内容$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>转码解码BASE64格式</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$Base64Decoder 内容$</span>
<span class="line">$Base64Encoder 内容$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<p>-转码解码unicode格式
<code v-pre>qr     $UnicodeDecoder 内容$     $UnicodeEncoder 内容$     </code></p>
<ul>
<li>
<p>转md5格式，不可逆</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$MD5 内容$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>转码CRC32格式，不可逆</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$CRC32 内容$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>字符串操作</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$字符串 length 内容$</span>
<span class="line">$字符串 substring 取位置(第一个字符位置为0)$</span>
<span class="line">$字符串 substring 内容 左位置(包含) 右位置(不包含)$</span>
<span class="line">$字符串 indexOf 内容 查找内容$</span>
<span class="line">$字符串 lastIndexOf 内容 查找内容$</span>
<span class="line">$字符串 replace 内容 被替换内容 替换后内容$</span>
<span class="line">$字符串 replaceAll 内容 正则表达式 替换后内容$</span>
<span class="line">$字符串 replaceFirst 内容 正则表达式 替换后内容$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>官方示例:</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">[总处理]</span>
<span class="line">$回调 识别 %参数-1%$</span>
<span class="line">$发送$</span>
<span class="line">头:$字符串 substring %参数-1% 0 1$</span>
<span class="line">如果:#==%头%</span>
<span class="line">指:$字符串 substring %参数-1% 1$</span>
<span class="line">a:$常调 %指%$</span>
<span class="line">如果尾</span>
<span class="line">$常调 %参数-1%$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>字符/字节长度</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$字符长度 内容$</span>
<span class="line">$字节长度 内容$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>ASCII码：一个英文字母（不分大小写）占一个字节的空间。一个二进制数字序列，在计算机中作为一个数字单元，一般为8位二进制数。换算为十进制，最小值-128，最大值127。如一个ASCII码就是一个字节。</li>
<li>UTF-8编码：一个英文字符等于一个字节，一个中文（含繁体）等于三个字节。中文标点占三个字节，英文标点占一个字节</li>
<li>Unicode编码：一个英文等于两个字节，一个中文（含繁体）等于两个字节。中文标点占两个字节，英文标点占两个字节</li>
</ul>
</li>
<li>
<p>转大写/小写</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$转大写 内容$</span>
<span class="line">$转小写 内容$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>示例:</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$转大写 h$</span>
<span class="line">$转小写 H$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>数字转中文</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$数字转中文 数字$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$数字转中文 114.514$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>结果是→壹壹肆伍壹 <br>
(小数点不报，保留两位小数四舍五入，就算是整数也会报零零如下)</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$数字转中文 114514$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>结果为→壹壹肆伍壹肆零零</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$数字转中文 单位 数字$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>单位不明，未实验出结果</p>
</li>
<li>
<p>随机字符</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$随机字符 长度$</span>
<span class="line">$随机字符 内容 长度$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>内容为空则产生随机内容，长度为随机次数，每次取内容一个字符</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$随机字符 10$</span>
<span class="line">$随机字符 嘻哈123abc 10$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>概率随机</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$概率随机 [概率1,概率2] [1,2]$【概率随机】</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>数字可替换为随机数
#示例:</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">获取</span>
<span class="line">$概率随机 [1,2,3,4] [1,2,3,4]$</span>
<span class="line">            ↑            ┗要随机的东西，数量和概率框内数量对应</span>
<span class="line">    概率比，比如1,1,1就是1:1:1</span>
<span class="line"></span>
<span class="line">※注:要随机的东西如果是数字或随机数┐用这种格式就行，但是如果随机文本则需要&quot;&quot;框住如[&quot;一&quot;,&quot;二&quot;]这种</span>
<span class="line">                                    ↓</span>
<span class="line">获取2</span>
<span class="line">$概率随机 [20,30,50] [%随机数1-5%,%随机数10-15%,%随机数20-30%]$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>随机数</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$随机数 1-2$</span>
<span class="line">$随机数 -1 2$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>示例:</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">获取随机数</span>
<span class="line">$随机数 1-10$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>示例2:</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">获取随机数</span>
<span class="line">$随机数 -10 10$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>将两个数字中间的&quot;-&quot;替换为空格就可随机正负数</p>
</li>
<li>
<p>随机文本使用方法</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">随机文本使用方法</span>
<span class="line">1:你</span>
<span class="line">2:好</span>
<span class="line">3:呀</span>
<span class="line">a:$随机数 1-3$</span>
<span class="line">$取变量 %a%$</span>
<span class="line"></span>
<span class="line">&amp;&amp;兼容时</span>
<span class="line">你好</span>
<span class="line">1:你</span>
<span class="line">2:好</span>
<span class="line">%%随机数1-2%%</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>毫秒级时间戳转时间格式</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$时间格式 %NDTime% yyyyMMddHHmmss$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>获取当前年月日时分秒</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$时间 yyyyMMddHHmmss$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>可拆$时间 yyyy$$时间 MM$等 <br>
兼容普通词库写法为</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">%时间yyyyMMdd%</span>
<span class="line">%时间yyyy%等</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>时间戳转时间格式</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$格式时间戳 2021-1-1 11:12:33$</span>
<span class="line">[未知]</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$格式时间戳 2021-1-1-11:12:33 yyyy-MM-dd-HH:mm:ss$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>[可用，转换出来的是毫秒级时间戳] <br>
后边两个格式只要对应就行比如</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$格式时间戳 20210101111233 yyyyMMddHHmmss$和上边那个结果相同</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>时间戳计算，具体自测</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$时间操作 Time YEAR 1$</span>
<span class="line">$时间操作 Time MONTH 1$</span>
<span class="line">$时间操作 Time DAY_OF_MONTH 1$</span>
<span class="line">$时间操作 Time HOUR_OF_DAY 1$</span>
<span class="line">$时间操作 Time MINUTE 1$</span>
<span class="line">$时间操作 Time SECOND 1$</span>
<span class="line">$时间操作 Time WEEK_OF_YEAR 1$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>词库操作</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$词库操作 删除 词库文件名$</span>
<span class="line">$词库操作 添加 词库文件名$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>示例:</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">(添加|删除)词库 ?(\w+)</span>
<span class="line">$词库操作 %括号1% %括号2%.txt$</span>
<span class="line">ok</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>查看词库列表</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">a:$访问 file:////data/data/com.QR.Dic.Pro/shared_prefs/data.xml$</span>
<span class="line">b:$正则 @ %a%@[\s\S]*&quot;DicNameArr&quot;&gt;@$</span>
<span class="line">c:$正则 @ %b%@&lt;/string&gt;[\s\S]*@$</span>
<span class="line">$正则 @ %c%@&amp;#10;@\%0A$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>线程池</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$线程池 执行列表$</span>
<span class="line">$线程池 列队列表$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>下载</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$下载 路径 直连地址$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>【下载文件到手机】请勿使用非法用途。默认路径为根目录。可以用作下载图片</p>
</li>
<li>
<p>文件操作</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$下载 根目录路径 链接$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>示例:</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">下载词库</span>
<span class="line">$下载 /storage/emulated/0/QR/QRDic/dic.txt 链接$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>下载文件，自定义头</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$下载 根目录路径 链接 JSON格式的Headers A$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>删除文件</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$删除 根目录路径$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>示例:</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">删除词库【执行将会删除dic.txt文件】【删除文件，现在也可以删除文件夹了】</span>
<span class="line">$删除 /storage/emulated/0/QR/QRDic/dic.txt$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>读写本地文件</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$写文件 根目录路径 内容$</span>
<span class="line">$读文件 根目录路径$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>示例:</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">写入 ?(.*) (.*)</span>
<span class="line">$写文件 //sdcard/QR/QRDic/%括号1% %括号2%$</span>
<span class="line"></span>
<span class="line">读取 ?(.*)</span>
<span class="line">$读文件 //sdcard/QR/QRDic/%括号1%$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例2:</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">写入[\n\r]([\s\S]+)【此操作将会覆盖原文件&quot;dic3.txt&quot;内的数据】</span>
<span class="line">$写文件 /storage/emulated/0/QR/QRDic/dic3.txt %括号1%\%0A\%0A\%0A$</span>
<span class="line">写入成功。</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不覆盖写入<a href="%5B%5Cs%5CS%5D+">\n\r</a>【搭配读写即可实现在原文件内容后进行续写而非直接覆盖原有文件】</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">a:$读文件 /storage/emulated/0/QR/QRDic/dic3.txt$</span>
<span class="line">$写文件 /storage/emulated/0/QR/QRDic/dic3.txt %a%\%0A%括号1%\%0A$</span>
<span class="line">写入成功。</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>清空文件</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$写文件 /storage/emulated/0/QR/QRDic/dic3.txt \%0A\%0A\%0A$</span>
<span class="line">已清空</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>读写变量搭配多词库执行即可在群内进行更新词库内容（可覆盖原本文件或在原本文件后新增数据，具体请查看上方示例）</p>
</li>
<li>
<p>文件(全字面意思)</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$文件 指定行数 根目录路径 行数$  读出指定文件某一行的内容</span>
<span class="line">$文件 总行数 根目录路径$  给出指定文件的总行数</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>示例:</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">看看词库</span>
<span class="line">$文件 指定行数 /storage/emulated/0/QR/QRDic/dic.txt 1$</span>
<span class="line">$文件 总行数 /storage/emulated/0/QR/QRDic/dic.txt$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>计算两个时间戳的差</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$时间戳差 Time Time2$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>排行榜，通过读取文件键-值进行排序</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$排行榜 路径 正序/反序 排行数量 分割符号 [序号]:[值]-[键转昵称%群号%]$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>这个[序号]:[值]-[键转昵称%群号%]除了[]里的内容其他都是可以改的，比如[值]◎[序号]◎[键]◎[键转昵称%群号%]</li>
<li>只能对一个文件内的内容进行排行，键一定也要是需要排序的基础【如QQ】才行，如果把例如金币的数据放在多个文件夹下是无法使用该函数的</li>
</ul>
</li>
<li>
<p>执行</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$执行 内容$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>示例:</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">执行[\n\r]([\s\S]*)</span>
<span class="line">如果:%QQ%==%主人%</span>
<span class="line">$执行 %括号1%$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>延迟执行</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$延迟执行 1000 内容$</span>
<span class="line">1000为时间延迟，1000=1s</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>示例:</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">延迟执行([0-9]+) ?[\n\r]([\s\S]*)</span>
<span class="line">如果:%QQ%==%主人%</span>
<span class="line">$延迟执行 [%括号1%*1000] %括号2%$</span>
<span class="line">返回</span>
<span class="line">如果尾</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>图片转链接</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$图片链接 内容$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>示例:【搭配获取图片MD5变量&quot;%IMG0%&quot;使用即可直接把图片转换为链接】</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">取图链接.*</span>
<span class="line">如果:%IMG0%!=</span>
<span class="line">$图片链接 %IMG0%$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>一些QQ官方接口需要的</p>
<ul>
<li>$BKN 内容$</li>
<li>$GKB 内容路径$</li>
<li>$SIG 内容$</li>
</ul>
</li>
<li>
<p>执行JAVA代码</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$BSH BSH 函数名 参数 …$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>转义无法发送的卡片，可以用这个输出发送</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$输出为 内容$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>戳一戳获取账号</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$获取消息 内容$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>QQ群管操作</p>
<ul>
<li>使用QR机器人执行群内禁言操作<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$禁 群号 QQ 时间，单位/秒$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>示例:<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">禁言(@.*) (.*)</span>
<span class="line">$禁 %群% %AT0% [%括号2%*60]$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>时间单位为秒所以需要进行*60操作</li>
<li>艾特带不带括号都可以用，如果去掉括号只需要把禁言时间中的&quot;%括号2%&quot;改为&quot;%括号1%&quot;即可</li>
<li>艾特带括号为个人习惯，如有需要请自行修改</li>
</ul>
</li>
<li>使用QR机器人执行群内踢出群成员操作<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$踢 群号 QQ$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>示例:<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">踢(@.*)</span>
<span class="line">$踢 %群% %AT0%$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>使用QR机器人执行群内名片更改操作
示例:<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$改 群号 QQ 新名片$</span>
<span class="line">改名(@.*) (.*)</span>
<span class="line">$改 %群% %AT0% %括号2%$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>使用QR进行专属头衔设置 需要授权<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$群头衔 群号 QQ 头衔内容$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>示例:<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">我要 ?(.*)头衔</span>
<span class="line">$群头衔 %群号% %QQ% %括号1%$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>使用QR获取发言者群昵称或指定账号群昵称<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$群昵称 群号 QQ$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>示例:<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">我的昵称</span>
<span class="line">$群昵称 %群% %QQ%$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div>示例2:<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">查看昵称(@.*)</span>
<span class="line">$群昵称 %群% %AT0%$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>使用QR进行群内全体禁言/全体解禁操作<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$全体禁言 开/关 群号$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>示例:<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">(开|关)全体禁言</span>
<span class="line">$全体禁言 %括号1% %群%$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>进群审核</p>
<ul>
<li>pro的进群审核确认犯病，挂时间久就不触发，需要重新启动</li>
<li>进群审核需搭配标签&quot;[系统]&quot;使用</li>
</ul>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$进群审核 群号 QQ 2001/31 11/12 0$</span>
<span class="line">$进群审核 群号 QQ 2001/31 11/12 0 Reqid$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>示例:</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">[系统]</span>
<span class="line">如果:%Value%==1</span>
<span class="line">$进群审核 %群号% %QQ% 2001 11 0$</span>
<span class="line">返回</span>
<span class="line">如果尾</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>撤回消息【使用QR进行群内消息撤回, 要授权】</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$撤回 群号 Msgbar$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>可以用%Msgbar%〖默认获取上一条信息，也就是机器人回复的上一条信息〗查看消息ID，进行精准撤回 <br>
撤回上一句</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$撤回 %群号% [%Msgbar%-1]$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>红包</p>
<ul>
<li>发红包【已失效】<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$红包 8/32/1024/65536 1/2 1/3/4 金额 数量 群号 标题/口令 指定红包分割|$</span>
<span class="line">#查红包【已失效】</span>
<span class="line">$查红包 群号 Skey Authkey Listid$</span>
<span class="line">$查红包 群号 Skey Authkey Listid A$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>抢红包【已失效】<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$抢红包 群号 Skey Authkey Listid Number$</span>
<span class="line">$抢红包 群号 Skey Authkey Listid Number A$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>示例:【已失效】<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">[红包]</span>
<span class="line">余:$读 %群号%/余额 %QQ% 0$</span>
<span class="line">$抢红包 %Groupid% %Skey% %Authkey% %Listid% %Number% Data$</span>
<span class="line">A:%Data%</span>
<span class="line">类:@A[send_object][channel]</span>
<span class="line">金:@A[recv_object][amount]</span>
<span class="line">题:@A[send_object][wishing]</span>
<span class="line">领:@A[send_object][grab_uin_list]</span>
<span class="line">如果:%类%==1024&amp;%领%==%Robot%</span>
<span class="line">谢谢老板发的专属红包</span>
<span class="line">返回</span>
<span class="line">如果尾</span>
<span class="line">如果:%类%==1024</span>
<span class="line">返回</span>
<span class="line">如果尾</span>
<span class="line">@%昵称%\n谢谢老板，发的红包!</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>申请群和退出群 要授权 <br>
&lt;机器人加群申请可能会被tx屏蔽，目前大多数情况下无法使用&gt;</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$申请群 群号 理由$</span>
<span class="line">$退出群 群号$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>示例:</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">申请加群 ?([0-9]+) (.*)</span>
<span class="line">$申请群 %括号1% %括号2%$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>示例: 要授权</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">退群 ?([0-9]+)</span>
<span class="line">$退出群 %括号1%$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>退群示例2: 要授权</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">退出本群</span>
<span class="line">$退出群 %群%$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>获取qr主程序，群列表回复开关</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$获取群状态 群号$</span>
<span class="line">#示例:</span>
<span class="line">获取群状态([0-9]+)</span>
<span class="line">$获取群状态 %括号1%$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>设置qr主程序，群列表回复开关</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$设置群状态 群号 开/关$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>示例:</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">(开|关)群([0-9]+)</span>
<span class="line">$设置群状态 %括号2% %括号1%$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>使用QR对触发者或指定账号点赞 <br>
[需登陆QR账号与被点赞账号处于好友关系或被点赞账号开启允许陌生人点赞功能]</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$点赞 QQ 数量$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>示例:</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">赞我</span>
<span class="line">$点赞 %QQ% 10$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>【若登陆QR账号拥有超级会员数量处可更改为20】 <br>
示例2:</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">点赞 ?([0-9]+)</span>
<span class="line">$点赞 %括号1% 10$【可点赞数量同上】</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>戳一戳(机器戳别人)</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$戳一戳 群 QQ$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>示例:</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">戳我</span>
<span class="line">我戳！</span>
<span class="line">$戳一戳 %群号% %QQ%$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>获取群列表</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$获取群列表$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>获取机器人所有的群，输出为json数组</p>
</li>
<li>
<p>获取群成员列表</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$获取群成员 群号$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>获取机器人在的群的群成员[当然要在，不然你不是耍流氓呢吗？]，输出为json</p>
</li>
<li>
<p>访问本机文件，获取文件内容</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$访问 file://路径$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>示例:</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">查看词库</span>
<span class="line">$访问 file:////sdcard/QR/QRDic/dic.txt$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="json" tabindex="-1"><a class="header-anchor" href="#json"><span>JSON</span></a></h2>
<ul>
<li>
<p>取JSON数组</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">@变量名[0][Name]</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>示例:</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">a:[&quot;1&quot;,&quot;2&quot;]</span>
<span class="line">@a[0]</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>JSON数组添加</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$JSON 添加 A Value$</span>
<span class="line">$JSON 添加 A Key Value$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>示例:</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">添加</span>
<span class="line">A:{}</span>
<span class="line">B:[]</span>
<span class="line">$JSON 添加 A 你 好$</span>
<span class="line">$JSON 添加 B 100$</span>
<span class="line">%A%\r%B%</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>JSON数组</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$JSON 包含 A Key/Value Value$</span>
<span class="line">$JSON 包含 A Value$</span>
<span class="line">【包含时返回原值（Value），不包含时返回空】【更改】</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>JSON获取</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$JSON 获取 A Value$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>示例:</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">获取</span>
<span class="line">A:{&quot;1&quot;:&quot;2&quot;}</span>
<span class="line">$JSON 获取 A 1$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>JSON删除</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$JSON 删除 A Value$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>示例：</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">删除</span>
<span class="line">A:{&quot;你&quot;:&quot;好&quot;}</span>
<span class="line">B:[&quot;1&quot;]</span>
<span class="line">$JSON 删除 A 你$</span>
<span class="line">$JSON 删除 B 0$</span>
<span class="line">%A%\r%B%</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>获取JSON长度</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$JSON 长度 A$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>示例:</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">A:[&quot;1&quot;,&quot;2&quot;,&quot;3&quot;]</span>
<span class="line">$JSON 长度 A$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>合并json数组【已失效，原因未知】【找到是写法错了，已在示例修正】</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$JSON 合并 A B$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>示例:</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">1:[&quot;abc&quot;]</span>
<span class="line">2:[&quot;def&quot;]</span>
<span class="line">$JSON 合并 1 %2%$</span>
<span class="line">%1%</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="判断语句" tabindex="-1"><a class="header-anchor" href="#判断语句"><span>判断语句</span></a></h2>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">如果:</span>
<span class="line">返回</span>
<span class="line">如果尾</span>
<span class="line">如果:1==%括号1%</span>
<span class="line">你好</span>
<span class="line">返回</span>
<span class="line">如果尾</span>
<span class="line">呜呜呜</span>
<span class="line"></span>
<span class="line">我是你的主人</span>
<span class="line">如果:%主人%==%QQ%</span>
<span class="line">返回</span>
<span class="line">如果尾</span>
<span class="line">不，你不是</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>&quot;==&quot;是等于的意思而不是一个等于号 <br>
&quot;&gt;&quot;,&quot;&lt;&quot;,&quot;&gt;=&quot;,&quot;&lt;=&quot;分别是大于，小于，大于或等于，小于或等于</p>
<p>示例:</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">测试 ?(.*)</span>
<span class="line">如果:%括号1%==哈哈</span>
<span class="line">成功</span>
<span class="line">返回</span>
<span class="line">如果尾</span>
<span class="line">失败</span>
<span class="line"></span>
<span class="line">正则:1==[0-9]+</span>
<span class="line">你好</span>
<span class="line">返回</span>
<span class="line">如果尾</span>
<span class="line">呜呜呜</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例:</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">测试 ?(.*)</span>
<span class="line">正则:%括号1%==.*测试.*</span>
<span class="line">成功</span>
<span class="line">返回</span>
<span class="line">如果尾</span>
<span class="line">失败</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="消息标签" tabindex="-1"><a class="header-anchor" href="#消息标签"><span>消息标签</span></a></h2>
<ul>
<li>
<p>群消息：[群] （使得消息只会在&quot;QQ群&quot;内触发）<br>
使用方法：</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">[群]你好</span>
<span class="line">你好</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>好友消息：[好友] （使得消息只会在&quot;好友&quot;聊天才会被触发）<br>
使用方法：</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">[好友]你好</span>
<span class="line">你好</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>临时会话消息：[临时] （使得触发词只会在（群聊-临时会话）触发）<br>
使用方法：</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">[临时]你好</span>
<span class="line">你好</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>系统消息：[系统] （检测系统消息状态，可搭配变量&quot;%Status%&quot;进行识别进群'退群'状态等。）</p>
</li>
<li>
<p>戳一戳消息：[戳一戳]（检测戳一戳消息，使用此标签请勿使用hd登陆）<br>
相关变量及函数：</p>
<ul>
<li>获取消息: $获取消息 uin_str1$</li>
<li>获取戳人QQ: $获取消息 uin_str2$</li>
<li>获取被戳人QQ: %Reqid%</li>
</ul>
<p>使用方法:</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">[戳一戳]</span>
<span class="line">如果:%CHOU%!=%Reqid%</span>
<span class="line">$获取消息 uin_str1$\n</span>
<span class="line">$获取消息 uin_str2$\n</span>
<span class="line">%Reqid%\n</span>
<span class="line">我只提示一次哦哦哦!!!</span>
<span class="line">$全局变量 CHOU %Reqid%$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>撤回消息：[撤回] （检测撤回消息，有消息撤回时触发）<br>
使用方法：</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">[撤回].*</span>
<span class="line">%昵称%尝试撤回一条消息:%参数-1%</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>退群消息：[退群] （检测退群消息）<br>
使用方法：</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">[退群]</span>
<span class="line">如果:%Adminuin%==0</span>
<span class="line">%QQ%退出了本群</span>
<span class="line">返回</span>
<span class="line">如果尾</span>
<span class="line">%QQ%被管理%Adminuin%踢出本群</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>管理上下变更：[上下管理] （检测管理员上下变更）<br>
使用方法：</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">[上下管理]</span>
<span class="line">如果:%Value%==1</span>
<span class="line">恭喜$回调 艾特$升级为管理员</span>
<span class="line">返回</span>
<span class="line">如果尾</span>
<span class="line">如果:%Value%==0</span>
<span class="line">$回调 艾特$的管理员被解除了</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>红包消息：[红包]</p>
</li>
<li>
<p>内部调用：[内部] （搭配调用&amp;回调使用。指令前加上不可被普通消息触发，仅能被调用或回调）</p>
</li>
<li>
<p>初始化：[初始化] （初始化所有信息。词库插件每次运行&amp;重连&amp;重启都会进行执行）</p>
</li>
<li>
<p>群初始化：[群初始化] （初始化所有群，并获取群号信息。词库插件每次运行&amp;重连&amp;重启都会进行执行）</p>
</li>
<li>
<p>总处理：[总处理] （所有消息都会经过这里进行处理）\</p>
<ul>
<li>放至词库文件初始位置既所有消息均会触发[总处理]进行处理(如放至词库文件初始位置可添加任意判断从而无需在所有指令下重复添加判断)</li>
<li>（用途示例:词库开关，权限判定等）</li>
<li>放至词库文件末尾既除指令外的所有消息均会触发[总处理]进行处理</li>
<li>约等于一个通配符【但是请不要把通配当总处理使用，会裂开的</li>
<li>[系统]标签的指令无法通过[总处理]所以请放在[总处理]指令上方（存疑）</li>
</ul>
<p>使用方法：</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">[总处理]</span>
<span class="line">如果:%QQ%!=%主人%</span>
<span class="line">爬</span>
<span class="line">返回</span>
<span class="line">如果尾</span>
<span class="line">$常调 500 %参数-1%$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="画布操作" tabindex="-1"><a class="header-anchor" href="#画布操作"><span>画布操作</span></a></h2>
<ul>
<li>
<p>声明画布：</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$画布 声明 A 600 600$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>设置画布的大小，即背景板，中间的A是画布名，可以自己定义，与下边的各函数对应即可（ABCD阿猫阿狗都可以，和变量赋值不冲突，比如下边的图片参数赋值给A并不影响画布的名字。一条命令可以同时设置多张画布）</p>
</li>
<li>
<p>设置画布颜色：</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$画布 颜色 A FFFFFFFF$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>设置画布颜色，此处FFFFFFFF十六进制前两位是透明度(FF为不透明，00为透明，具体可以百度)，后六位是颜色十六进制码(具体百度)，下皆同</p>
</li>
<li>
<p>添加文字：</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$画布 文字 A 你好 100 100 FFFF0000 100$</span>
<span class="line">$画布 文字 A 你好 100 100 FFFF0000 100 字体路径$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>这个生成文字可以放在合成图片下边使文字在图片上边，生成顺序是后来者居上</li>
<li>字体路径常见于QQ缓存【/storage/emulated/0/Android/data/com.tencent.mobileqq/Tencent/MobileQQ/.font_info/】文件夹下，后缀通常为【.ttf】，也可自行保存网络字体文件使用</li>
<li>设置文字颜色大小左右位置，从左第一个是左下角横坐标，第二个左下角纵坐标，最后一个大小，中间颜色</li>
</ul>
</li>
<li>
<p>添加换行文字：</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$画布 文字换行 A 你\n好 400 100 100 FFFF0000 100 字体路径(可不要)$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>需要换行时候使用，400那个是自动换行长度，100，100是第一行左上角【不换行的那个是左下角】坐标，其他与不换行一致</p>
</li>
<li>
<p>添加图片：</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$画布 图片 A /storage/emulated/0/t/t/2.jpg 0 0 %W% %H% 50 50 650 650$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">A:$图片参数 /storage/emulated/0/t/t/2.jpg$</span>
<span class="line">//获取这一个图片的长度宽度</span>
<span class="line">W:@A[Width]</span>
<span class="line">H:@A[Height]</span>
<span class="line">//数组获取</span>
<span class="line">//仅用于获取图片大小用在下边合成图片完整，意义上知道图片大小可以不要这个，下边的%W%和%H%可以自己填数字(即宽和高)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>$画布(固定) 图片(固定) (声明里的画布名) (插入的图片路径) (截取图左上角横坐标x1) (截取图左上角纵坐标y1) (截取图右下角横坐标x2) (截取图右下角纵坐标y2) (放在画布上的位置-左上角横坐标X1) (放在画布上的位置-左上角纵坐标Y1) (放在画布上的位置-右下角横坐标X2) (放在画布上的位置-右下角纵坐标Y2)$ \</li>
<li>注意，如果在画布上设置的位置和你加的图片大小不一时会自动对图片缩放，使图片铺满且只铺满你选择的范围</li>
</ul>
</li>
<li>
<p>图片圆角：</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$画布 图片圆角 A 路径 圆角度 0 0 0 0 0 0 0 0$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>与上边图片参数类似，加了个圆角度，圆角度取值0-360，0为无圆角，360为圆形图。需注意，此函数是先对你放入的图片进行处理，再进行裁剪和缩放</li>
<li>$画布(固定) 图片圆角(固定) (声明过的画布名) (图片绝对路径) (0-360角度) (图片裁剪位置左上角横坐标x1) (图片裁剪位置左上角纵坐标y1)  (截取图右下角横坐标x2) (截取图右下角纵坐标y2) (画布上的位置-左上角横坐标X1) (画布上的位置-左上角纵坐标Y1) (画布上的位置-右下角横坐标X2) (画布上的位置-右下角纵坐标Y2)$</li>
</ul>
</li>
<li>
<p>旋转画布：</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$画布 旋转 A 旋转角度$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>将整个画布以左上角为中心点顺时针旋转某个角度【继续处理】，不是旋转最终的画布的</li>
<li>打个抽象的比方，你在考试，一开始你把卷子转了一个角度，再写字，老师看到的就是正的卷子和歪的字。</li>
<li>如果你一开始没有转卷子，写完所有字后再转卷子，也不会影响你本来的内容，老师看到的就是正的卷子正的字</li>
<li>也就是说，不管你怎么转，转几次，只要发出来都是老师视角，就得把画布转回原角度发出来</li>
<li>比如设置90的话画面就会因为以左上角顺时针旋转90度而一整个消失，个人感觉蛮难用的诶……(谁会用啊)</li>
<li>$画布(固定) 旋转(固定) (声明的画布名) (旋转角度)$ <br>
↓↓↓↓这个转了<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$画布 旋转 A 30$</span>
<span class="line">$画布 图片 A xxxxxx$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div>和<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$画布 图片 A xxxxx$</span>
<span class="line">$画布 旋转 A 30$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div>↑↑↑↑这个没转
自行理解一下</li>
</ul>
<p>将画布以(x，y)点为基点旋转某个角度</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$画布 旋转 A 旋转角度 x y$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>$画布(固定) 旋转(固定) (声明的画布名) (旋转角度) (旋转基点x坐标) (旋转基点y坐标)$</li>
<li>理论同上，不过可以自己设置旋转中心点的位置，比如设置画布的中心点</li>
</ul>
</li>
<li>
<p>保存画布：</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">$画布 保存 A 绝对路径/文件名$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>如：$画布 保存 A /storage/emulated/0/图片/嘻嘻哈哈.jpg$</li>
<li>画布保存不能保存在不存在的文件夹【即无法新建文件夹】，只能保存在已经存在的文件夹目录下，不一定需要图片后缀名</li>
</ul>
</li>
<li>
<p>要发出来当然得配合±img等指令，自己尝试吧</p>
</li>
<li>
<p>因为画布名可以自己定，所以意义上只要对应关系弄好，也许可以一条指令画好几个不同的画布，我就不试了，交给你们自己开发</p>
</li>
<li>
<p>外置图文链接【腾讯文档】#QR词库pro画布用法详解(文档带图版) https://docs.qq.com/doc/DZHpsRkN3RU1lU3dj</p>
</li>
</ul>
<h2 id="群管理操作" tabindex="-1"><a class="header-anchor" href="#群管理操作"><span>群管理操作</span></a></h2>
<ul>
<li>禁言：$禁 群号 QQ 时间$</li>
<li>踢出群成员：$踢 群号 QQ$</li>
<li>改名片：$改 群号 QQ 新名片$</li>
<li>设置群头衔：$群头衔 群号 QQ 头衔内容$</li>
<li>获取群昵称：$群昵称 群号 QQ$</li>
<li>全体禁言/解禁：$全体禁言 开/关 群号$</li>
<li>进群审核：$进群审核 群号 QQ 2001/31 11/12 0$</li>
<li>撤回消息：$撤回 群号 Msgbar$</li>
</ul>
<h2 id="计算" tabindex="-1"><a class="header-anchor" href="#计算"><span>计算</span></a></h2>
<pre><code>【计算】
部分指令内容可参照取整函数，描述抽象请理解
##普通运算，经典向负无穷取整
[1+1-2*1/1]

##高级运算，保留小数点
十进制[可无视前缀](下同)
丨        保留小数点的位数【计算结果位数超出设置会向下取整】
丨        丨   (为0则为经典向负无穷取整)
丨        丨冒号开算(下同)
丨        丨丨  计算部分(下同)
↓        ↓↓  ↓
[decimal-16:1+1-2*1/1/3]

【下边的几个感觉一般都用不到】
【如果位数设置没有发生取舍则输出原结果】
        保留的小数点位数范围(下同)
        丨 丨 向正无穷方向取整(如最高保留两位时-1.333→-1.33，1.333→1.34)
        ↓ ↓   ↓
[decimal-0-16-CEILING:1+1-2*1/1/3]

舍去位数后向0取整(如最高保留两位时-1.333→-1.33，1.333→1.33)
[decimal-0-16-DOWN:1+1-2*1/1/3]

舍去位数后向负无穷舍入(如最高保留两位时-1.333→-1.34，1.333→1.33)
[decimal-0-16-FLOOR:1+1-2*1/1/3]

向距离最近(数轴)的一边取整，两边的距离相等向下取整
【五舍六入，五后有数则进位】
(如最高保留两位1.045→1.04，1.0451→1.05，1.046→1.05)
[decimal-0-16-HALF_DOWN:1+1-2*1/1/3]

四舍六入五取偶
【取偶指对五前一位是奇数则向上取偶，偶数则舍，若五后仍有数则进位】
(如最高保留两位1.045→1.04，1.0451→1.05，1.046→1.05，1.055→1.06等)
[decimal-0-16-HALF_EVEN:1+1-2*1/1/3]

向距离最近的一边取整，两边的距离相等向上取整
【四舍五入】
[decimal-0-16-HALF_UP: 1+1-2*1/1/3]

计算结果不舍入【位数上下限范围必须大于算出来的位数，不然弹码】
[decimal-0-16-UNNECESSARY:1+1-2*1/1/3]

向远离0的方向取整
[decimal-0-16-UP:1+1-2*1/1/3]

暂测跟DOWN一样
[decimal-0-16-DOWN-3:1+1-2*1/1/3]
</code></pre>
<h2 id="其他操作" tabindex="-1"><a class="header-anchor" href="#其他操作"><span>其他操作</span></a></h2>
<ul>
<li>申请加群：$申请群 群号 理由$</li>
<li>退群：$退出群 群号$</li>
<li>获取群状态：$获取群状态 群号$</li>
<li>设置群状态：$设置群状态 群号 开/关$</li>
<li>点赞：$点赞 QQ 数量$</li>
<li>戳一戳：$戳一戳 群 QQ$</li>
<li>获取群列表：$获取群列表$</li>
<li>获取群成员：$获取群成员 群号$</li>
</ul>
<h2 id="跳行标签-标签名" tabindex="-1"><a class="header-anchor" href="#跳行标签-标签名"><span>跳行标签 :标签名</span></a></h2>
<p>搭配下方函数&quot;Jump&quot;&quot;跳&quot;使用。<br>
例子
$Jump :标签$
$跳 :标签$
示例：</p>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">测试1</span>
<span class="line">:1</span>
<span class="line">这是1</span>
<span class="line">$跳 :2$</span>
<span class="line">返回</span>
<span class="line">如果尾</span>
<span class="line">:2</span>
<span class="line">跳到了2</span>
<span class="line">$jump :3$</span>
<span class="line">返回</span>
<span class="line">如果尾</span>
<span class="line">:3</span>
<span class="line">跳到了3</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="入群申请例子" tabindex="-1"><a class="header-anchor" href="#入群申请例子"><span>入群申请例子</span></a></h2>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">[内部]状态1</span>
<span class="line">如果:%Status%==1 </span>
<span class="line">有人申请进群啦%QQ% </span>
<span class="line">返回</span>
<span class="line">如果尾</span>
<span class="line">如果:%Status%==22</span>
<span class="line">%Code% 邀请 %QQ% 申请进群啦 </span>
<span class="line">返回</span>
<span class="line">如果尾</span>
<span class="line"></span>
<span class="line">[内部]状态2</span>
<span class="line">如果:%Status%==1</span>
<span class="line">%QQ% 申请进群 %Adminuin% 同意啦 </span>
<span class="line">返回</span>
<span class="line">如果尾</span>
<span class="line">如果:%Status%==22</span>
<span class="line">%Code% 邀请 %QQ% 申请进群 %Adminuin% 同意啦</span>
<span class="line">返回</span>
<span class="line">如果尾</span>
<span class="line"></span>
<span class="line">##状态5想触发得下一次[系统]触发，比如你把A踢了，此时有人申请进群触发了状态1，才会连着你的这个踢人一起发出，个人建议用[退群]那个</span>
<span class="line">[内部]状态5</span>
<span class="line">如果:%Status%==13</span>
<span class="line">%QQ% 一路顺风</span>
<span class="line">返回</span>
<span class="line">如果尾</span>
<span class="line">如果:%Status%==6</span>
<span class="line">管理员%Code%踢出%QQ%</span>
<span class="line">返回</span>
<span class="line">如果尾</span>
<span class="line"></span>
<span class="line">[系统]</span>
<span class="line">%Value%    %Status%\n </span>
<span class="line">如果:%Value%==1</span>
<span class="line">$回调 状态1$</span>
<span class="line">返回</span>
<span class="line">如果尾</span>
<span class="line">如果:%Value%==2</span>
<span class="line">$回调 状态2$</span>
<span class="line">返回</span>
<span class="line">如果尾</span>
<span class="line">如果:%Value%==5</span>
<span class="line">$回调 状态5$</span>
<span class="line">返回</span>
<span class="line">如果尾</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取pskey示例" tabindex="-1"><a class="header-anchor" href="#获取pskey示例"><span>获取pskey示例</span></a></h2>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">QQ支付</span>
<span class="line">A:%Json%</span>
<span class="line">A:@A[pskey]</span>
<span class="line">A:@A[tenpay.com]</span>
<span class="line">%A%</span>
<span class="line"></span>
<span class="line">群官网</span>
<span class="line">A:%Json%</span>
<span class="line">A:@A[pskey]</span>
<span class="line">@A[qun.qq.com]</span>
<span class="line"></span>
<span class="line">会员官网</span>
<span class="line">A:%Json%</span>
<span class="line">A:@A[pskey]</span>
<span class="line">@A[vip.qq.com]##以此类推</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bkn值获取" tabindex="-1"><a class="header-anchor" href="#bkn值获取"><span>BKN值获取</span></a></h2>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">测试</span>
<span class="line">$BKN %Skey%$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gkn值获取" tabindex="-1"><a class="header-anchor" href="#gkn值获取"><span>GKN值获取</span></a></h2>
<div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre v-pre><code><span class="line">测试</span>
<span class="line">$GKN %Skey%$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


