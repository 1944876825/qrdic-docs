import{_ as n,c as e,a as i,o as a}from"./app-Cq220FYL.js";const l={};function d(c,s){return a(),e("div",null,s[0]||(s[0]=[i(`<h1 id="语句" tabindex="-1"><a class="header-anchor" href="#语句"><span>语句</span></a></h1><h2 id="判断语句" tabindex="-1"><a class="header-anchor" href="#判断语句"><span>判断语句</span></a></h2><div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre><code><span class="line">如果:</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>&quot;==&quot;是等于的意思而不是一个等于号 <br> &quot;&gt;&quot;,&quot;&lt;&quot;,&quot;&gt;=&quot;,&quot;&lt;=&quot;分别是大于，小于，大于或等于，小于或等于</p><p>示例:</p><div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre><code><span class="line">测试 ?(.*)</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例:</p><div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre><code><span class="line">测试 ?(.*)</span>
<span class="line">正则:%括号1%==.*测试.*</span>
<span class="line">成功</span>
<span class="line">返回</span>
<span class="line">如果尾</span>
<span class="line">失败</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="跳行标签-标签名" tabindex="-1"><a class="header-anchor" href="#跳行标签-标签名"><span>跳行标签 <code>:标签名</code></span></a></h2><p>搭配下方函数&quot;Jump&quot;&quot;跳&quot;使用。<br> 例子 $Jump :标签$ $跳 :标签$ 示例：</p><div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre><code><span class="line">测试1</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="消息标签" tabindex="-1"><a class="header-anchor" href="#消息标签"><span>消息标签</span></a></h2><ul><li><p>群消息：<code>[群]</code> （使得消息只会在&quot;QQ群&quot;内触发） 使用方法：</p><div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre><code><span class="line">[群]你好</span>
<span class="line">你好</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>好友消息：<code>[好友]</code> （使得消息只会在&quot;好友&quot;聊天才会被触发） 使用方法：</p><div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre><code><span class="line">[好友]你好</span>
<span class="line">你好</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>临时会话消息：<code>[临时]</code> （使得触发词只会在（群聊-临时会话）触发）<br> 使用方法：</p><div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre><code><span class="line">[临时]你好</span>
<span class="line">你好</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>系统消息：<code>[系统]</code> （检测系统消息状态，可搭配变量&quot;%Status%&quot;进行识别进群&#39;退群&#39;状态等。）</p></li><li><p>戳一戳消息：<code>[戳一戳]</code>（检测戳一戳消息，使用此标签请勿使用hd登陆）<br> 相关变量及函数：</p><ul><li>获取消息: <code>$获取消息 uin_str1$</code></li><li>获取戳人QQ: <code>$获取消息 uin_str2$</code></li><li>获取被戳人QQ: <code>%Reqid%</code></li></ul><p>使用方法:</p><div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre><code><span class="line">[戳一戳]</span>
<span class="line">如果:%CHOU%!=%Reqid%</span>
<span class="line">$获取消息 uin_str1$\\n</span>
<span class="line">$获取消息 uin_str2$\\n</span>
<span class="line">%Reqid%\\n</span>
<span class="line">我只提示一次哦哦哦!!!</span>
<span class="line">$全局变量 CHOU %Reqid%$</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>撤回消息：<code>[撤回]</code> （检测撤回消息，有消息撤回时触发） 使用方法：</p><div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre><code><span class="line">[撤回].*</span>
<span class="line">%昵称%尝试撤回一条消息:%参数-1%</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>退群消息：<code>[退群]</code> （检测退群消息） 使用方法：</p><div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre><code><span class="line">[退群]</span>
<span class="line">如果:%Adminuin%==0</span>
<span class="line">%QQ%退出了本群</span>
<span class="line">返回</span>
<span class="line">如果尾</span>
<span class="line">%QQ%被管理%Adminuin%踢出本群</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>管理上下变更：<code>[上下管理]</code> （检测管理员上下变更） 使用方法：</p><div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre><code><span class="line">[上下管理]</span>
<span class="line">如果:%Value%==1</span>
<span class="line">恭喜$回调 艾特$升级为管理员</span>
<span class="line">返回</span>
<span class="line">如果尾</span>
<span class="line">如果:%Value%==0</span>
<span class="line">$回调 艾特$的管理员被解除了</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>红包消息：<code>[红包]</code></p></li><li><p>内部调用：<code>[内部]</code> （搭配调用&amp;回调使用。指令前加上不可被普通消息触发，仅能被调用或回调）</p></li><li><p>初始化：<code>[初始化]</code> （初始化所有信息。词库插件每次运行&amp;重连&amp;重启都会进行执行）</p></li><li><p>群初始化：<code>[群初始化]</code> （初始化所有群，并获取群号信息。词库插件每次运行&amp;重连&amp;重启都会进行执行）</p></li><li><p>总处理：<code>[总处理]</code> （所有消息都会经过这里进行处理）</p><ul><li>放至词库文件初始位置既所有消息均会触发<code>[总处理]</code>进行处理(如放至词库文件初始位置可添加任意判断从而无需在所有指令下重复添加判断)</li><li>（用途示例:词库开关，权限判定等）</li><li>放至词库文件末尾既除指令外的所有消息均会触发<code>[总处理]</code>进行处理</li><li>约等于一个通配符【但是请不要把通配当总处理使用，会裂开的</li><li><code>[系统]</code>标签的指令无法通过<code>[总处理]</code>所以请放在<code>[总处理]</code>指令上方（存疑）</li></ul><p>使用方法：</p><div class="language-qr line-numbers-mode" data-highlighter="prismjs" data-ext="qr" data-title="qr"><pre><code><span class="line">[总处理]</span>
<span class="line">如果:%QQ%!=%主人%</span>
<span class="line">爬</span>
<span class="line">返回</span>
<span class="line">如果尾</span>
<span class="line">$常调 500 %参数-1%$</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,13)]))}const p=n(l,[["render",d],["__file","sentence.html.vue"]]),v=JSON.parse('{"path":"/guide/sentence.html","title":"语句","lang":"zh","frontmatter":{},"headers":[{"level":2,"title":"判断语句","slug":"判断语句","link":"#判断语句","children":[]},{"level":2,"title":"跳行标签 :标签名","slug":"跳行标签-标签名","link":"#跳行标签-标签名","children":[]},{"level":2,"title":"消息标签","slug":"消息标签","link":"#消息标签","children":[]}],"git":{"updatedTime":1734685445000,"contributors":[{"name":"BY易仝","username":"BY易仝","email":"jmwl1229@52ig.cn","commits":1,"url":"https://github.com/BY易仝"}]},"filePathRelative":"guide/sentence.md"}');export{p as comp,v as data};
