---
title: 函数
createTime: 2024/12/23 01:10:55
permalink: /guide/functions/
---

## 消息相关
- 发送好友信息
    ```qr
    $发送 好友$
    $发送 好友 QQ$
    ```
- 发送群信息
    ```qr
    $发送 群$
    $发送 群 群号$
    ```
- 发闪照
    ```qr
    ±fimg=图片链接±
    $发送 群 fimg %群号% -1 图片链接$
    ```

- 发秀图【已失效】
    ```qr
    ±ximgtype 图片±
    ±ximg 40000-40005±
    ```
- 发送表情
    ```qr
    ±face 表情id±
    ```
- 发送匿名消息
    ```qr
    ±anony 匿名±
    这是一条匿名消息
    ```
- 发送临时信息
    ```qr
    $发送 临时/私聊$
    $发送 临时/私聊 群号 QQ$
    ```
- 发送指定群信息
    ```qr
    $发送 群 msg/xml/json/img 群号 消息内容$
    ```
- 发送语音信息
    ```qr
    ±ptt=音频地址或本地路径±
    ```
- 发送语音【已失效↓】
    ```qr
    $发送 群 ptt %群号% -1 音频地址$
    ```
    【发送语音】支持音频格式mp3,acc,amr等,语音会格式自动识别，不过最多只能发1MB以内的音频。
    注意:需要授权！发xml和json要授权
- 发送好友/临时/私聊信息
    ```qr
    $发送 好友/临时 img 图片md5/链接$
    $发送 好友 msg/xml/json 消息内容$
    $发送 临时/私聊 msg/xml/json 群号 QQ 消息内容$
    ```
- 拆发信息
    ```qr
    $发送$
    ```
    示例:
    ```qr
    你
    $发送$
    好
    ```
- 新版QQ超级表情（表情id请自行获取）
    ```qr
    ±faceplus 表情id±
    ```
- 使用其他气泡发言，突破VIP限制，QR牛逼：这是设置气泡效果，需要授权
    ```qr
    气泡
    ±bub 1±
    ```
- 转义无法发送的卡片，可以用这个输出发送
    ```qr
    $输出为 内容$
    ```
- 戳一戳获取账号
    ```qr
    $获取消息 内容$
    ```
- 撤回消息【使用QR进行群内消息撤回, 要授权】
    ```qr
    $撤回 群号 Msgbar$
    ```
    可以用%Msgbar%〖默认获取上一条信息，也就是机器人回复的上一条信息〗查看消息ID，进行精准撤回 \
    撤回上一句
    ```qr
    $撤回 %群号% [%Msgbar%-1]$
    ```

## 群聊
- 戳一戳：`$戳一戳 群 QQ$`
    示例:
    ```qr
    戳我
    我戳！
    $戳一戳 %群号% %QQ%$
    ```
- 禁言：`$禁 群号 QQ 时间$`
- 全体禁言/解禁：`$全体禁言 开/关 群号$`
- 撤回消息：`$撤回 群号 Msgbar$`
- 改名片：`$改 群号 QQ 新名片$`
- 设置群头衔：`$群头衔 群号 QQ 头衔内容$`
- 获取群昵称：`$群昵称 群号 QQ$`
- 进群审核：`$进群审核 群号 QQ 2001/31 11/12 0$`
- 申请加群：`$申请群 群号 理由$`
- 退群：`$退出群 群号$`
- 踢出群成员：`$踢 群号 QQ$`
- 获取群状态：`$获取群状态 群号$`
- 设置群状态：`$设置群状态 群号 开/关$`
- 获取群列表：`$获取群列表$`
    - 获取机器人所有的群，输出为json数组
- 获取群成员：`$获取群成员 群号$`
    - 获取机器人在的群的群成员[当然要在，不然你不是耍流氓呢吗？]，输出为json

## 好友
- 点赞：`$点赞 QQ 数量$`

## QR主程序
- 获取qr主程序，群列表回复开关 `$获取群状态 群号$`
    示例:
    ```qr
    获取群状态([0-9]+)
    $获取群状态 %括号1%$
    ```

- 设置qr主程序，群列表回复开关 `$设置群状态 群号 开/关$`
    示例:
    ```qr
    (开|关)群([0-9]+)
    $设置群状态 %括号2% %括号1%$
    ```

- 使用QR对触发者或指定账号点赞 `$点赞 QQ 数量$`
    - 需登陆QR账号与被点赞账号处于好友关系或被点赞账号开启允许陌生人点赞功能
    - 若登陆QR账号拥有超级会员数量处可更改为20
    示例:
    ```qr
    赞我
    $点赞 %QQ% 10$
    ```
    示例2:
    ```qr
    点赞 ?([0-9]+)
    $点赞 %括号1% 10$【可点赞数量同上】
    ```

## 词库
- 添加/删除词库
    ```qr
    $词库操作 删除 词库文件名$
    $词库操作 添加 词库文件名$
    ```
    示例:
    ```qr
    (添加|删除)词库 ?(\w+)
    $词库操作 %括号1% %括号2%.txt$
    ok
    ```
- 查看词库列表
    ```qr
    a:$访问 file:////data/data/com.QR.Dic.Pro/shared_prefs/data.xml$
    b:$正则 @ %a%@[\s\S]*"DicNameArr">@$
    c:$正则 @ %b%@</string>[\s\S]*@$
    $正则 @ %c%@&#10;@\%0A$
    ```

- 判定是否是词库管理员 `$管理员 QQ$` \
    示例:【如发言账号为词库管理员将返回发言者账号，否则为0】
    ```qr
    权限判定
    $管理员 %QQ%$
    ```
- `$添加管理员 QQ$`
- `$删除管理员 QQ$` \
    示例:
    ```qr
    (添加|删除)管理员@.*
    如果:%QQ%==%主人%
    $%括号1%管理员 %AT0%$
    成功
    ```

## 调用
- 常调 `$常调 内容$` 不能调用带有内部标签的指令，一般配合总处理使用。
    示例:
    ```qr
    测试
    测试1
    $常调 测试1$

    测试1
    测试2
    ```
- 回调 `$回调 内容$` 能用所有指令，包括带有内部标签的指令。
    示例:
    ```qr
    测试
    成功
    $回调 测试2$

    [内部]测试2
    成功2
    ```

- 回调内部 `$回调内部 内容$` 回调获取返回的数值，可以当指令使用。
    示例:
    ```qr
    $回调内部 你好$
    哈喽

    [内部]你好
    这是指令
    ```
    这个词条意思就是，发送“这是指令”会触发回复“哈喽”，自己悟一下

- 调用 `$调用 1000 内容$` 有无内部标签均可调用，1000是时间延迟，1000=1s，内容为调用指令。
    示例:
    ```qr
    你好
    $调用 10000 哈喽$

    [内部]哈喽
    这是10s延迟回复
    ```

    在某一个时间戳达到时开始调用，时间戳为毫秒级
    `$调用 时间戳 1649842305965 内容$`
    示例:
    ```qr
    你好
    $调用 时间戳 1649842305965 哈喽$

    [内部]哈喽
    这是时间戳为1649842305965(2022-04-13 17:31:45)的延迟回复
    ```


## 取操作
- 取变量：`$取变量 Name$`
示例：
```qr
取
1:$随机数 1 10$
$取变量 1$
```
- 取括号：`$取括号 内容 正则表达式$`
示例:
```qr
取
$取括号 我是谁 我(.*)谁$
```
- 取中间：`$取中间 分割符 内容分割符左边内容分割符右边内容$`
示例:
```qr
测试
$取中间 @ 你好呀@你@呀$
##取中间 同上
$取中间 内容 左边内容 右边内容$
```

## 网络请求
- 访问网址
    ```qr
    $访问 链接$
    
    $访问 GET 链接$
    $访问 POST 链接 参数$
    $访问 SETGET JSON格式的Headers 链接$
    $访问 SETPOST JSON格式的Headers 链接 参数$
    $访问 SETGETFT JSON格式的Headers A 链接$
    $访问 SETPOSTFT JSON格式的Headers A 链接 参数$
    ```
- 下载
    ```qr
    $下载 路径 直连地址$
    ```
    【下载文件到手机】请勿使用非法用途。默认路径为根目录。可以用作下载图片

## 本地文件
- 下载文件 `$下载 根目录路径 链接$` 
    示例:
    ```qr
    下载词库
    $下载 /storage/emulated/0/QR/QRDic/dic.txt 链接$
    ```
- 下载文件，自定义头 `$下载 根目录路径 链接 JSON格式的Headers A$`
- 删除文件 `$删除 根目录路径$` 
    - 删除词库，执行将会删除dic.txt文件
    - 删除文件，现在也可以删除文件夹了
    示例:
    ```qr
    $删除 /storage/emulated/0/QR/QRDic/dic.txt$
    ```
- 清空文件
    ```qr
    $写文件 /storage/emulated/0/QR/QRDic/dic3.txt \%0A\%0A\%0A$
    已清空
    ```
    读写变量搭配多词库执行即可在群内进行更新词库内容（可覆盖原本文件或在原本文件后新增数据，具体请查看上方示例）
- 读写本地文件 `$写文件 根目录路径 内容$` `$读文件 根目录路径$`
    示例:
    ```qr
    写入 ?(.*) (.*)
    $写文件 //sdcard/QR/QRDic/%括号1% %括号2%$

    读取 ?(.*)
    $读文件 //sdcard/QR/QRDic/%括号1%$
    ```
    示例2:
    ```qr
    写入[\n\r]([\s\S]+)【此操作将会覆盖原文件"dic3.txt"内的数据】
    $写文件 /storage/emulated/0/QR/QRDic/dic3.txt %括号1%\%0A\%0A\%0A$
    写入成功。
    ```
    不覆盖写入`[\n\r]([\s\S]+)`【搭配读写即可实现在原文件内容后进行续写而非直接覆盖原有文件】
    ```qr
    a:$读文件 /storage/emulated/0/QR/QRDic/dic3.txt$
    $写文件 /storage/emulated/0/QR/QRDic/dic3.txt %a%\%0A%括号1%\%0A$
    写入成功。
    ```


- 文件(全字面意思)
    ```qr
    $文件 指定行数 根目录路径 行数$  读出指定文件某一行的内容
    $文件 总行数 根目录路径$  给出指定文件的总行数
    ```
    示例:
    ```qr
    看看词库
    $文件 指定行数 /storage/emulated/0/QR/QRDic/dic.txt 1$
    $文件 总行数 /storage/emulated/0/QR/QRDic/dic.txt$
    ```
- 例子：排行榜，通过读取文件键-值进行排序
    ```qr
    $排行榜 路径 正序/反序 排行数量 分割符号 [序号]:[值]-[键转昵称%群号%]$
    ```
    - 这个[序号]:[值]-[键转昵称%群号%]除了[]里的内容其他都是可以改的，比如[值]◎[序号]◎[键]◎[键转昵称%群号%]
    - 只能对一个文件内的内容进行排行，键一定也要是需要排序的基础【如QQ】才行，如果把例如金币的数据放在多个文件夹下是无法使用该函数的

## 本地配置读写
- `$读 文件路径 key value$`
- `$写 文件路径 Key 默认值$` 当文件为空的时候，默认值是什么就会读取什么
- 读写的路径都是从 `/storage/emulated/0/QR/QRDic/data` 开始
- 即 `$写 1 1 1$` 会在 `/storage/emulated/0/QR/QRDic/data` 下生成一个叫 `1` 的文件而不是在根目录 `/storage/emulated/0/` 下生成
- 读同理

示例:
```qr
金:$读 教程/%群号%/金币 %QQ% 0$【这是读取金币文件】
$写 教程/%群号%/金币 %QQ% [%金%+1]$ 【这是加金币，读取金币文件并进行+1】
#
金:$读 教程/%群号%/金币 %QQ% 0$【这是读取金币文件】
$写 教程/%群号%/金币 %QQ% [%金%-1]$-----------【这是减金币，读取金币文件并进行-1】
```

示例2:
```qr
$写 教程/%群号%/测试 m 0$
【写入文本到/教程/%群号%/测试里】
$读 教程/%群号%/测试 m 0$
【取文本：从/教程/%群号%/测试里取】【这里的最后一个0是数据的默认值，也就是说没有读取到时给这个值】
```


## 编码/加密
- 转码解码URL格式
    - 在访问url的时候，如果提交的参数是一个url，就需要考虑下是否需要进行url编码。
    ```qr
    $URLDecoder 内容$
    $URLEncoder 内容$
    ```
- 转码解码HEX格式
    ```qr
    $HexDecoder 内容$
    $HexEncoder 内容$
    ```
- 转码解码BASE64格式
    ```qr
    $Base64Decoder 内容$
    $Base64Encoder 内容$
    ```
-转码解码unicode格式
    ```qr
    $UnicodeDecoder 内容$
    $UnicodeEncoder 内容$
    ```
- 转md5格式，不可逆
    ```qr
    $MD5 内容$
    ```
- 转码CRC32格式，不可逆
    ```qr
    $CRC32 内容$
    ```

## 字符串
```qr
$字符串 length 内容$
$字符串 substring 取位置(第一个字符位置为0)$
$字符串 substring 内容 左位置(包含) 右位置(不包含)$
$字符串 indexOf 内容 查找内容$
$字符串 lastIndexOf 内容 查找内容$
$字符串 replace 内容 被替换内容 替换后内容$
$字符串 replaceAll 内容 正则表达式 替换后内容$
$字符串 replaceFirst 内容 正则表达式 替换后内容$
```
官方示例:
```qr
[总处理]
$回调 识别 %参数-1%$
$发送$
头:$字符串 substring %参数-1% 0 1$
如果:#==%头%
指:$字符串 substring %参数-1% 1$
a:$常调 %指%$
如果尾
$常调 %参数-1%$
```
- 字符/字节长度
    ```qr
    $字符长度 内容$
    $字节长度 内容$
    ```
    - ASCII码：一个英文字母（不分大小写）占一个字节的空间。一个二进制数字序列，在计算机中作为一个数字单元，一般为8位二进制数。换算为十进制，最小值-128，最大值127。如一个ASCII码就是一个字节。
    - UTF-8编码：一个英文字符等于一个字节，一个中文（含繁体）等于三个字节。中文标点占三个字节，英文标点占一个字节
    - Unicode编码：一个英文等于两个字节，一个中文（含繁体）等于两个字节。中文标点占两个字节，英文标点占两个字节
- 转大写/小写
    ```qr
    $转大写 内容$
    $转小写 内容$
    ```
    示例:
    ```qr
    $转大写 h$
    $转小写 H$
    ```
- 数字转中文
    ```qr
    $数字转中文 数字$
    ```
    ```qr
    $数字转中文 114.514$
    ```
    结果是→壹壹肆伍壹 \
    (小数点不报，保留两位小数四舍五入，就算是整数也会报零零如下)
    ```qr
    $数字转中文 114514$
    ```
    结果为→壹壹肆伍壹肆零零
    ```qr
    $数字转中文 单位 数字$
    ```
    单位不明，未实验出结果



## 替换
- 替换内容：`$替换 分割符 内容分割符被替换内容分割符要替换内容$`
示例:
```qr
测试
$替换 @ 你好呀@呀@吗$
分割符可替换任意符号，不可为函数符号
##替换，同上
$替换 内容 被替换内容 要替换内容$
```
- 正则替换：`$正则 分割符 内容分割符正则表达式分割符要替换内容$`
示例:
```qr
测试
$正则 @ 你好呀@好.*@吗$
##正则替换，同上
$正则 内容 正则表达式 要替换内容$
```

## 随机数
- 随机字符
    ```qr
    $随机字符 长度$
    $随机字符 内容 长度$
    ```
    内容为空则产生随机内容，长度为随机次数，每次取内容一个字符
    ```qr
    $随机字符 10$
    $随机字符 嘻哈123abc 10$
    ```
- 概率随机
    ```qr
    $概率随机 [概率1,概率2] [1,2]$【概率随机】
    ```
    数字可替换为随机数
    #示例:
    ```qr
    获取
    $概率随机 [1,2,3,4] [1,2,3,4]$
                ↑            ┗要随机的东西，数量和概率框内数量对应
        概率比，比如1,1,1就是1:1:1

    ※注:要随机的东西如果是数字或随机数┐用这种格式就行，但是如果随机文本则需要""框住如["一","二"]这种
                                        ↓
    获取2
    $概率随机 [20,30,50] [%随机数1-5%,%随机数10-15%,%随机数20-30%]$
    ```

- 随机数
    ```qr
    $随机数 1-2$
    $随机数 -1 2$
    ```
    示例:
    ```qr
    获取随机数
    $随机数 1-10$
    ```
    示例2:
    ```qr
    获取随机数
    $随机数 -10 10$
    ```
    将两个数字中间的"-"替换为空格就可随机正负数

- 随机文本使用方法
    ```qr
    随机文本使用方法
    1:你
    2:好
    3:呀
    a:$随机数 1-3$
    $取变量 %a%$

    &&兼容时
    你好
    1:你
    2:好
    %%随机数1-2%%
    ```

## 时间
- 毫秒级时间戳转时间格式
    ```qr
    $时间格式 %NDTime% yyyyMMddHHmmss$
    ```

- 获取当前年月日时分秒
    ```qr
    $时间 yyyyMMddHHmmss$
    ```
    可拆 `$时间 yyyy$$时间 MM$`等
    兼容普通词库写法为
    ```qr
    %时间yyyyMMdd%
    %时间yyyy%等
    ```

- 时间戳转时间格式
    ```qr
    $格式时间戳 2021-1-1 11:12:33$
    [未知]
    ```
    ```qr
    $格式时间戳 2021-1-1-11:12:33 yyyy-MM-dd-HH:mm:ss$
    ```
    [可用，转换出来的是毫秒级时间戳] \
    后边两个格式只要对应就行比如
    ```qr
    $格式时间戳 20210101111233 yyyyMMddHHmmss$和上边那个结果相同
    ```

- 时间戳计算，具体自测
    ```qr
    $时间操作 Time YEAR 1$
    $时间操作 Time MONTH 1$
    $时间操作 Time DAY_OF_MONTH 1$
    $时间操作 Time HOUR_OF_DAY 1$
    $时间操作 Time MINUTE 1$
    $时间操作 Time SECOND 1$
    $时间操作 Time WEEK_OF_YEAR 1$
    ```
- 计算两个时间戳的差
    ```qr
    $时间戳差 Time Time2$
    ```


## 申请群和退出群 <Badge type="danger" text="授权" />
机器人加群申请可能会被tx屏蔽，目前大多数情况下无法使用
```qr
$申请群 群号 理由$
$退出群 群号$
```
示例:
```qr
申请加群 ?([0-9]+) (.*)
$申请群 %括号1% %括号2%$
```
示例: 要授权
```qr
退群 ?([0-9]+)
$退出群 %括号1%$
```
退群示例2: 要授权
```qr
退出本群
$退出群 %群%$
```

## 线程
- 线程池
    ```qr
    $线程池 执行列表$
    $线程池 列队列表$
    ```

## 执行代码
- 执行
    ```qr
    $执行 内容$
    ```
    示例:
    ```qr
    执行[\n\r]([\s\S]*)
    如果:%QQ%==%主人%
    $执行 %括号1%$
    ```
- 延迟执行
    ```qr
    $延迟执行 1000 内容$
    1000为时间延迟，1000=1s
    ```
    示例:
    ```qr
    延迟执行([0-9]+) ?[\n\r]([\s\S]*)
    如果:%QQ%==%主人%
    $延迟执行 [%括号1%*1000] %括号2%$
    返回
    如果尾
    ```
- 执行JAVA代码
    ```qr
    $BSH BSH 函数名 参数 …$
    ```

## 图片操作
- 图片转链接
    ```qr
    $图片链接 内容$
    ```
    示例: 搭配获取图片MD5变量 `%IMG0%` 使用即可直接把图片转换为链接
    ```qr
    取图链接.*
    如果:%IMG0%!=
    $图片链接 %IMG0%$
    ```

## JSON
- 取JSON数组
    ```qr
    @变量名[0][Name]
    ```
    示例:
    ```qr
    a:["1","2"]
    @a[0]
    ```

- JSON数组添加
    ```qr
    $JSON 添加 A Value$
    $JSON 添加 A Key Value$
    ```
    示例:
    ```qr
    添加
    A:{}
    B:[]
    $JSON 添加 A 你 好$
    $JSON 添加 B 100$
    %A%\r%B%
    ```
- JSON数组
    ```qr
    $JSON 包含 A Key/Value Value$
    $JSON 包含 A Value$
    【包含时返回原值（Value），不包含时返回空】【更改】
    ```
- JSON获取
    ```qr
    $JSON 获取 A Value$
    ```
    示例:
    ```qr
    获取
    A:{"1":"2"}
    $JSON 获取 A 1$
    ```
- JSON删除
    ```qr
    $JSON 删除 A Value$
    ```
    示例：
    ```qr
    删除
    A:{"你":"好"}
    B:["1"]
    $JSON 删除 A 你$
    $JSON 删除 B 0$
    %A%\r%B%
    ```
- 获取JSON长度
    ```qr
    $JSON 长度 A$
    ```
    示例:
    ```qr
    A:["1","2","3"]
    $JSON 长度 A$
    ```
- 合并json数组【已失效，原因未知】【找到是写法错了，已在示例修正】
    ```qr
    $JSON 合并 A B$
    ```
- 示例:
    ```qr
    1:["abc"]
    2:["def"]
    $JSON 合并 1 %2%$
    %1%
    ```

## 画布
- 声明画布：
    ```qr
    $画布 声明 A 600 600$
    ```
    设置画布的大小，即背景板，中间的A是画布名，可以自己定义，与下边的各函数对应即可（ABCD阿猫阿狗都可以，和变量赋值不冲突，比如下边的图片参数赋值给A并不影响画布的名字。一条命令可以同时设置多张画布）
- 设置画布颜色：
    ```qr
    $画布 颜色 A FFFFFFFF$
    ```
    设置画布颜色，此处FFFFFFFF十六进制前两位是透明度(FF为不透明，00为透明，具体可以百度)，后六位是颜色十六进制码(具体百度)，下皆同
- 添加文字：
    ```qr
    $画布 文字 A 你好 100 100 FFFF0000 100$
    $画布 文字 A 你好 100 100 FFFF0000 100 字体路径$
    ```
    - 这个生成文字可以放在合成图片下边使文字在图片上边，生成顺序是后来者居上
    - 字体路径常见于QQ缓存【/storage/emulated/0/Android/data/com.tencent.mobileqq/Tencent/MobileQQ/.font_info/】文件夹下，后缀通常为【.ttf】，也可自行保存网络字体文件使用
    - 设置文字颜色大小左右位置，从左第一个是左下角横坐标，第二个左下角纵坐标，最后一个大小，中间颜色
- 添加换行文字：
    ```qr
    $画布 文字换行 A 你\n好 400 100 100 FFFF0000 100 字体路径(可不要)$
    ```
    需要换行时候使用，400那个是自动换行长度，100，100是第一行左上角【不换行的那个是左下角】坐标，其他与不换行一致
- 添加图片：
    ```qr
    $画布 图片 A /storage/emulated/0/t/t/2.jpg 0 0 %W% %H% 50 50 650 650$
    ```
    ```qr
    A:$图片参数 /storage/emulated/0/t/t/2.jpg$
    //获取这一个图片的长度宽度
    W:@A[Width]
    H:@A[Height]
    //数组获取
    //仅用于获取图片大小用在下边合成图片完整，意义上知道图片大小可以不要这个，下边的%W%和%H%可以自己填数字(即宽和高)
    ```
    - `$画布(固定) 图片(固定) (声明里的画布名) (插入的图片路径) (截取图左上角横坐标x1) (截取图左上角纵坐标y1) (截取图右下角横坐标x2) (截取图右下角纵坐标y2) (放在画布上的位置-左上角横坐标X1) (放在画布上的位置-左上角纵坐标Y1) (放在画布上的位置-右下角横坐标X2) (放在画布上的位置-右下角纵坐标Y2)$`
    - 注意，如果在画布上设置的位置和你加的图片大小不一时会自动对图片缩放，使图片铺满且只铺满你选择的范围
- 图片圆角：
    ```qr
    $画布 图片圆角 A 路径 圆角度 0 0 0 0 0 0 0 0$
    ```
    - 与上边图片参数类似，加了个圆角度，圆角度取值0-360，0为无圆角，360为圆形图。需注意，此函数是先对你放入的图片进行处理，再进行裁剪和缩放
    - \$画布(固定) 图片圆角(固定) (声明过的画布名) (图片绝对路径) (0-360角度) (图片裁剪位置左上角横坐标x1) (图片裁剪位置左上角纵坐标y1)  (截取图右下角横坐标x2) (截取图右下角纵坐标y2) (画布上的位置-左上角横坐标X1) (画布上的位置-左上角纵坐标Y1) (画布上的位置-右下角横坐标X2) (画布上的位置-右下角纵坐标Y2)$
- 旋转画布：
    ```qr
    $画布 旋转 A 旋转角度$
    ```
    - 将整个画布以左上角为中心点顺时针旋转某个角度【继续处理】，不是旋转最终的画布的
    - 打个抽象的比方，你在考试，一开始你把卷子转了一个角度，再写字，老师看到的就是正的卷子和歪的字。
    - 如果你一开始没有转卷子，写完所有字后再转卷子，也不会影响你本来的内容，老师看到的就是正的卷子正的字
    - 也就是说，不管你怎么转，转几次，只要发出来都是老师视角，就得把画布转回原角度发出来
    - 比如设置90的话画面就会因为以左上角顺时针旋转90度而一整个消失，个人感觉蛮难用的诶……(谁会用啊)
    - \$画布(固定) 旋转(固定) (声明的画布名) (旋转角度)$ \
        ↓↓↓↓这个转了
        ```qr
        $画布 旋转 A 30$
        $画布 图片 A xxxxxx$
        ```
        和
        ```qr
        $画布 图片 A xxxxx$
        $画布 旋转 A 30$
        ```
        ↑↑↑↑这个没转
        自行理解一下

    将画布以(x，y)点为基点旋转某个角度
    ```qr
    $画布 旋转 A 旋转角度 x y$
    ```
    - \$画布(固定) 旋转(固定) (声明的画布名) (旋转角度) (旋转基点x坐标) (旋转基点y坐标)$
    - 理论同上，不过可以自己设置旋转中心点的位置，比如设置画布的中心点
- 保存画布：
    ```qr
    $画布 保存 A 绝对路径/文件名$
    ```
    - 如：\$画布 保存 A /storage/emulated/0/图片/嘻嘻哈哈.jpg$
    - 画布保存不能保存在不存在的文件夹【即无法新建文件夹】，只能保存在已经存在的文件夹目录下，不一定需要图片后缀名
- 要发出来当然得配合±img等指令，自己尝试吧
- 因为画布名可以自己定，所以意义上只要对应关系弄好，也许可以一条指令画好几个不同的画布，我就不试了，交给你们自己开发
- 外置图文链接【腾讯文档】#QR词库pro画布用法详解(文档带图版) https://docs.qq.com/doc/DZHpsRkN3RU1lU3dj

## 渲染
待补充，可先查看 [渲染例子](#渲染例子)

## 计算
（本人表示看不懂，直接照搬了）
```
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
```

## 红包(失效)
- 发红包【已失效】
    ```qr
    $红包 8/32/1024/65536 1/2 1/3/4 金额 数量 群号 标题/口令 指定红包分割|$
    #查红包【已失效】
    $查红包 群号 Skey Authkey Listid$
    $查红包 群号 Skey Authkey Listid A$
    ```
- 抢红包【已失效】
    ```qr
    $抢红包 群号 Skey Authkey Listid Number$
    $抢红包 群号 Skey Authkey Listid Number A$
    ```
- 示例:【已失效】
    ```qr
    [红包]
    余:$读 %群号%/余额 %QQ% 0$
    $抢红包 %Groupid% %Skey% %Authkey% %Listid% %Number% Data$
    A:%Data%
    类:@A[send_object][channel]
    金:@A[recv_object][amount]
    题:@A[send_object][wishing]
    领:@A[send_object][grab_uin_list]
    如果:%类%==1024&%领%==%Robot%
    谢谢老板发的专属红包
    返回
    如果尾
    如果:%类%==1024
    返回
    如果尾
    @%昵称%\n谢谢老板，发的红包!
    ```

## 访问本机文件，获取文件内容
```qr
$访问 file://路径$
```
示例:
```qr
查看词库
$访问 file:////sdcard/QR/QRDic/dic.txt$
```

## 一些QQ官方接口需要的
- BKN值获取
```qr
测试
$BKN %Skey%$
```
- 获取pskey示例
```qr
QQ支付
A:%Json%
A:@A[pskey]
A:@A[tenpay.com]
%A%

群官网
A:%Json%
A:@A[pskey]
@A[qun.qq.com]

会员官网
A:%Json%
A:@A[pskey]
@A[vip.qq.com]##以此类推
```
- GKN值获取
```qr
测试
$GKN %Skey%$
```
- `$SIG 内容$`
- `$GKB 内容路径$`


## 入群申请例子
```qr
[内部]状态1
如果:%Status%==1 
有人申请进群啦%QQ% 
返回
如果尾
如果:%Status%==22
%Code% 邀请 %QQ% 申请进群啦 
返回
如果尾

[内部]状态2
如果:%Status%==1
%QQ% 申请进群 %Adminuin% 同意啦 
返回
如果尾
如果:%Status%==22
%Code% 邀请 %QQ% 申请进群 %Adminuin% 同意啦
返回
如果尾

##状态5想触发得下一次[系统]触发，比如你把A踢了，此时有人申请进群触发了状态1，才会连着你的这个踢人一起发出，个人建议用[退群]那个
[内部]状态5
如果:%Status%==13
%QQ% 一路顺风
返回
如果尾
如果:%Status%==6
管理员%Code%踢出%QQ%
返回
如果尾

[系统]
%Value%    %Status%\n 
如果:%Value%==1
$回调 状态1$
返回
如果尾
如果:%Value%==2
$回调 状态2$
返回
如果尾
如果:%Value%==5
$回调 状态5$
返回
如果尾
```

## QQ群管例子
- 使用QR机器人执行群内禁言操作
    ```qr
    $禁 群号 QQ 时间，单位/秒$
    ```
    示例:
    ```qr
    禁言(@.*) (.*)
    $禁 %群% %AT0% [%括号2%*60]$
    ```
    - 时间单位为秒所以需要进行*60操作
    - 艾特带不带括号都可以用，如果去掉括号只需要把禁言时间中的"%括号2%"改为"%括号1%"即可
    - 艾特带括号为个人习惯，如有需要请自行修改
- 使用QR机器人执行群内踢出群成员操作
    ```qr
    $踢 群号 QQ$
    ```
    示例:
    ```qr
    踢(@.*)
    $踢 %群% %AT0%$
    ```
- 使用QR机器人执行群内名片更改操作
    示例:
    ```qr
    $改 群号 QQ 新名片$
    改名(@.*) (.*)
    $改 %群% %AT0% %括号2%$
    ```
- 使用QR进行专属头衔设置 需要授权
    ```qr
    $群头衔 群号 QQ 头衔内容$
    ```
    示例:
    ```qr
    我要 ?(.*)头衔
    $群头衔 %群号% %QQ% %括号1%$
    ```
- 使用QR获取发言者群昵称或指定账号群昵称
    ```qr
    $群昵称 群号 QQ$
    ```
    示例:
    ```qr
    我的昵称
    $群昵称 %群% %QQ%$
    ```
    示例2:
    ```qr
    查看昵称(@.*)
    $群昵称 %群% %AT0%$
    ```
- 使用QR进行群内全体禁言/全体解禁操作
    ```qr
    $全体禁言 开/关 群号$
    ```
    示例:
    ```qr
    (开|关)全体禁言
    $全体禁言 %括号1% %群%$
    ```
- 进群审核
    - pro的进群审核确认犯病，挂时间久就不触发，需要重新启动
    - 进群审核需搭配标签"[系统]"使用
    ```qr
    $进群审核 群号 QQ 2001/31 11/12 0$
    $进群审核 群号 QQ 2001/31 11/12 0 Reqid$
    ```
    示例:
    ```qr
    [系统]
    如果:%Value%==1
    $进群审核 %群号% %QQ% 2001 11 0$
    返回
    如果尾
    ```



## 渲染例子
```qr
&&名称:渲染使用🌰词库
&&作者:Doums
&&<配置>版本Code:1
&&<配置>版本名称:1.0
&&<配置>包名:com.doumsg.example.rendering
&&渲染使用🌰词库


你好
你好我是词库》》》渲染使用🌰词库《《《

工作目录
%工作目录%

路径拼接
path:$路径拼接 /dic/123 eidudh 3161.txt$

测试
C:\%3C\%68\%31\%3E\%E4\%BD\%A0\%E5\%A5\%BD\%3C\%2F\%68\%31\%3E
P:/img/img%Time%.jpg
$Html渲染 代码 %C% 480 1080 %P%$
渲染结果
J:$路径拼接 %工作目录% %P%$
±img %J%±

渲染MD ?([\s\S]*)
P:/img/img%Time%.jpg
$Markdown渲染 代码 %括号1% 480 1080 %P%$
OK
J:$路径拼接 %工作目录% %P%$
±img %J%±

渲染URL参数 ?([\s\S]*)
P:/img/img%Time%.jpg
$Html渲染 代码URL参数 %括号1% 1080 1080 %P% qq=%QQ%$
OK
J:$路径拼接 %工作目录% %P%$
±img %J%±


渲染URL ?([\s\S]*)
P:/img/img%Time%.jpg
$Html渲染 URL %括号1% 480 1080 %P%$
OK
J:$路径拼接 %工作目录% %P%$
±img %J%±


渲染 ?([\s\S]*)
P:/img/img%Time%.jpg
$Html渲染 代码 %括号1% 1080 1080 %P%$
OK
J:$路径拼接 %工作目录% %P%$
±img %J%±



主页
C:\%3C\%21\%44\%4F\%43\%54\%59\%50\%45\%20\%68\%74\%6D\%6C\%3E\%0A\%3C\%68\%74\%6D\%6C\%20\%6C\%61\%6E\%67\%3D\%22\%65\%6E\%22\%3E\%0A\%3C\%68\%65\%61\%64\%3E\%0A\%20\%20\%20\%20\%3C\%6D\%65\%74\%61\%20\%63\%68\%61\%72\%73\%65\%74\%3D\%22\%55\%54\%46\%2D\%38\%22\%3E\%0A\%20\%20\%20\%20\%3C\%6D\%65\%74\%61\%20\%6E\%61\%6D\%65\%3D\%22\%76\%69\%65\%77\%70\%6F\%72\%74\%22\%20\%63\%6F\%6E\%74\%65\%6E\%74\%3D\%22\%77\%69\%64\%74\%68\%3D\%64\%65\%76\%69\%63\%65\%2D\%77\%69\%64\%74\%68\%2C\%20\%69\%6E\%69\%74\%69\%61\%6C\%2D\%73\%63\%61\%6C\%65\%3D\%31\%2E\%30\%22\%3E\%0A\%20\%20\%20\%20\%3C\%74\%69\%74\%6C\%65\%3E\%E4\%B8\%AA\%E4\%BA\%BA\%E4\%B8\%BB\%E9\%A1\%B5\%3C\%2F\%74\%69\%74\%6C\%65\%3E\%0A\%20\%20\%20\%20\%3C\%73\%74\%79\%6C\%65\%3E\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%3A\%72\%6F\%6F\%74\%20\%7B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%2D\%2D\%73\%63\%61\%6C\%65\%2D\%66\%61\%63\%74\%6F\%72\%3A\%20\%31\%2E\%30\%3B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%2D\%2D\%70\%61\%64\%64\%69\%6E\%67\%3A\%20\%32\%30\%70\%78\%3B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%2D\%2D\%70\%72\%6F\%66\%69\%6C\%65\%2D\%63\%61\%72\%64\%2D\%77\%69\%64\%74\%68\%3A\%20\%63\%61\%6C\%63\%28\%33\%32\%30\%70\%78\%20\%2A\%20\%76\%61\%72\%28\%2D\%2D\%73\%63\%61\%6C\%65\%2D\%66\%61\%63\%74\%6F\%72\%29\%29\%3B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%7D\%0A\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%62\%6F\%64\%79\%20\%7B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%64\%69\%73\%70\%6C\%61\%79\%3A\%20\%66\%6C\%65\%78\%3B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%66\%6C\%65\%78\%2D\%64\%69\%72\%65\%63\%74\%69\%6F\%6E\%3A\%20\%63\%6F\%6C\%75\%6D\%6E\%3B\%20\%2F\%2A\%20\%E5\%9E\%82\%E7\%9B\%B4\%E5\%B8\%83\%E5\%B1\%80\%20\%2A\%2F\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%61\%6C\%69\%67\%6E\%2D\%69\%74\%65\%6D\%73\%3A\%20\%63\%65\%6E\%74\%65\%72\%3B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%6A\%75\%73\%74\%69\%66\%79\%2D\%63\%6F\%6E\%74\%65\%6E\%74\%3A\%20\%63\%65\%6E\%74\%65\%72\%3B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%6D\%69\%6E\%2D\%68\%65\%69\%67\%68\%74\%3A\%20\%31\%30\%30\%76\%68\%3B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%6D\%61\%72\%67\%69\%6E\%3A\%20\%30\%3B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%66\%6F\%6E\%74\%2D\%66\%61\%6D\%69\%6C\%79\%3A\%20\%41\%72\%69\%61\%6C\%2C\%20\%73\%61\%6E\%73\%2D\%73\%65\%72\%69\%66\%3B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%62\%61\%63\%6B\%67\%72\%6F\%75\%6E\%64\%3A\%20\%6C\%69\%6E\%65\%61\%72\%2D\%67\%72\%61\%64\%69\%65\%6E\%74\%28\%31\%33\%35\%64\%65\%67\%2C\%20\%23\%65\%30\%66\%37\%66\%61\%2C\%20\%23\%66\%66\%65\%62\%65\%65\%29\%3B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%6F\%76\%65\%72\%66\%6C\%6F\%77\%3A\%20\%68\%69\%64\%64\%65\%6E\%3B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%70\%61\%64\%64\%69\%6E\%67\%3A\%20\%76\%61\%72\%28\%2D\%2D\%70\%61\%64\%64\%69\%6E\%67\%29\%3B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%7D\%0A\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%2E\%62\%6C\%75\%72\%2D\%62\%61\%63\%6B\%67\%72\%6F\%75\%6E\%64\%20\%7B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%70\%6F\%73\%69\%74\%69\%6F\%6E\%3A\%20\%66\%69\%78\%65\%64\%3B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%74\%6F\%70\%3A\%20\%30\%3B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%6C\%65\%66\%74\%3A\%20\%30\%3B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%77\%69\%64\%74\%68\%3A\%20\%31\%30\%30\%25\%3B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%68\%65\%69\%67\%68\%74\%3A\%20\%31\%30\%30\%25\%3B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%62\%61\%63\%6B\%67\%72\%6F\%75\%6E\%64\%3A\%20\%6C\%69\%6E\%65\%61\%72\%2D\%67\%72\%61\%64\%69\%65\%6E\%74\%28\%31\%33\%35\%64\%65\%67\%2C\%20\%72\%67\%62\%61\%28\%31\%37\%33\%2C\%20\%32\%31\%36\%2C\%20\%32\%33\%30\%2C\%20\%30\%2E\%38\%29\%2C\%20\%72\%67\%62\%61\%28\%32\%35\%35\%2C\%20\%31\%38\%32\%2C\%20\%31\%39\%33\%2C\%20\%30\%2E\%38\%29\%29\%3B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%66\%69\%6C\%74\%65\%72\%3A\%20\%62\%6C\%75\%72\%28\%31\%30\%70\%78\%29\%3B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%7A\%2D\%69\%6E\%64\%65\%78\%3A\%20\%2D\%31\%3B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%7D\%0A\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%2E\%70\%72\%6F\%66\%69\%6C\%65\%2D\%63\%61\%72\%64\%20\%7B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%62\%61\%63\%6B\%67\%72\%6F\%75\%6E\%64\%3A\%20\%72\%67\%62\%61\%28\%32\%35\%35\%2C\%20\%32\%35\%35\%2C\%20\%32\%35\%35\%2C\%20\%30\%2E\%33\%29\%3B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%62\%6F\%72\%64\%65\%72\%2D\%72\%61\%64\%69\%75\%73\%3A\%20\%31\%35\%70\%78\%3B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%62\%6F\%78\%2D\%73\%68\%61\%64\%6F\%77\%3A\%20\%30\%20\%34\%70\%78\%20\%38\%70\%78\%20\%72\%67\%62\%61\%28\%30\%2C\%20\%30\%2C\%20\%30\%2C\%20\%30\%2E\%32\%29\%3B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%77\%69\%64\%74\%68\%3A\%20\%76\%61\%72\%28\%2D\%2D\%70\%72\%6F\%66\%69\%6C\%65\%2D\%63\%61\%72\%64\%2D\%77\%69\%64\%74\%68\%29\%3B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%74\%65\%78\%74\%2D\%61\%6C\%69\%67\%6E\%3A\%20\%63\%65\%6E\%74\%65\%72\%3B\%20\%2F\%2A\%20\%E7\%A1\%AE\%E4\%BF\%9D\%E6\%96\%87\%E6\%9C\%AC\%E5\%B1\%85\%E4\%B8\%AD\%20\%2A\%2F\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%70\%61\%64\%64\%69\%6E\%67\%3A\%20\%76\%61\%72\%28\%2D\%2D\%70\%61\%64\%64\%69\%6E\%67\%29\%3B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%74\%72\%61\%6E\%73\%69\%74\%69\%6F\%6E\%3A\%20\%74\%72\%61\%6E\%73\%66\%6F\%72\%6D\%20\%30\%2E\%33\%73\%3B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%62\%61\%63\%6B\%64\%72\%6F\%70\%2D\%66\%69\%6C\%74\%65\%72\%3A\%20\%62\%6C\%75\%72\%28\%31\%30\%70\%78\%29\%3B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%6D\%61\%72\%67\%69\%6E\%2D\%62\%6F\%74\%74\%6F\%6D\%3A\%20\%32\%30\%70\%78\%3B\%20\%2F\%2A\%20\%E4\%B8\%BA\%E5\%8F\%82\%E6\%95\%B0\%E6\%98\%BE\%E7\%A4\%BA\%E5\%8C\%BA\%E5\%9F\%9F\%E7\%95\%99\%E5\%87\%BA\%E7\%A9\%BA\%E9\%97\%B4\%20\%2A\%2F\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%7D\%0A\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%2E\%70\%72\%6F\%66\%69\%6C\%65\%2D\%63\%61\%72\%64\%3A\%68\%6F\%76\%65\%72\%20\%7B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%74\%72\%61\%6E\%73\%66\%6F\%72\%6D\%3A\%20\%73\%63\%61\%6C\%65\%28\%31\%2E\%30\%35\%29\%3B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%7D\%0A\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%2E\%61\%76\%61\%74\%61\%72\%20\%7B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%77\%69\%64\%74\%68\%3A\%20\%63\%61\%6C\%63\%28\%31\%32\%30\%70\%78\%20\%2A\%20\%76\%61\%72\%28\%2D\%2D\%73\%63\%61\%6C\%65\%2D\%66\%61\%63\%74\%6F\%72\%29\%29\%3B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%68\%65\%69\%67\%68\%74\%3A\%20\%63\%61\%6C\%63\%28\%31\%32\%30\%70\%78\%20\%2A\%20\%76\%61\%72\%28\%2D\%2D\%73\%63\%61\%6C\%65\%2D\%66\%61\%63\%74\%6F\%72\%29\%29\%3B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%62\%6F\%72\%64\%65\%72\%2D\%72\%61\%64\%69\%75\%73\%3A\%20\%35\%30\%25\%3B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%6D\%61\%72\%67\%69\%6E\%2D\%74\%6F\%70\%3A\%20\%31\%30\%70\%78\%3B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%62\%61\%63\%6B\%67\%72\%6F\%75\%6E\%64\%2D\%73\%69\%7A\%65\%3A\%20\%63\%6F\%76\%65\%72\%3B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%62\%6F\%78\%2D\%73\%68\%61\%64\%6F\%77\%3A\%20\%30\%70\%78\%20\%30\%70\%78\%20\%31\%30\%70\%78\%20\%72\%67\%62\%61\%28\%30\%2C\%20\%30\%2C\%20\%30\%2C\%20\%30\%2E\%33\%29\%3B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%64\%69\%73\%70\%6C\%61\%79\%3A\%20\%66\%6C\%65\%78\%3B\%20\%2F\%2A\%20\%E6\%B7\%BB\%E5\%8A\%A0\%66\%6C\%65\%78\%E5\%B8\%83\%E5\%B1\%80\%20\%2A\%2F\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%61\%6C\%69\%67\%6E\%2D\%69\%74\%65\%6D\%73\%3A\%20\%63\%65\%6E\%74\%65\%72\%3B\%20\%2F\%2A\%20\%E5\%9E\%82\%E7\%9B\%B4\%E5\%B1\%85\%E4\%B8\%AD\%20\%2A\%2F\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%6A\%75\%73\%74\%69\%66\%79\%2D\%63\%6F\%6E\%74\%65\%6E\%74\%3A\%20\%63\%65\%6E\%74\%65\%72\%3B\%20\%2F\%2A\%20\%E6\%B0\%B4\%E5\%B9\%B3\%E5\%B1\%85\%E4\%B8\%AD\%20\%2A\%2F\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%6D\%61\%72\%67\%69\%6E\%2D\%6C\%65\%66\%74\%3A\%20\%61\%75\%74\%6F\%3B\%20\%2F\%2A\%20\%E4\%BD\%BF\%E5\%A4\%B4\%E5\%83\%8F\%E5\%B1\%85\%E4\%B8\%AD\%20\%2A\%2F\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%6D\%61\%72\%67\%69\%6E\%2D\%72\%69\%67\%68\%74\%3A\%20\%61\%75\%74\%6F\%3B\%20\%2F\%2A\%20\%E4\%BD\%BF\%E5\%A4\%B4\%E5\%83\%8F\%E5\%B1\%85\%E4\%B8\%AD\%20\%2A\%2F\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%7D\%0A\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%2E\%70\%72\%6F\%66\%69\%6C\%65\%2D\%63\%61\%72\%64\%20\%68\%32\%20\%7B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%6D\%61\%72\%67\%69\%6E\%3A\%20\%63\%61\%6C\%63\%28\%31\%35\%70\%78\%20\%2A\%20\%76\%61\%72\%28\%2D\%2D\%73\%63\%61\%6C\%65\%2D\%66\%61\%63\%74\%6F\%72\%29\%29\%20\%30\%20\%63\%61\%6C\%63\%28\%35\%70\%78\%20\%2A\%20\%76\%61\%72\%28\%2D\%2D\%73\%63\%61\%6C\%65\%2D\%66\%61\%63\%74\%6F\%72\%29\%29\%3B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%66\%6F\%6E\%74\%2D\%73\%69\%7A\%65\%3A\%20\%63\%61\%6C\%63\%28\%31\%2E\%35\%65\%6D\%20\%2A\%20\%76\%61\%72\%28\%2D\%2D\%73\%63\%61\%6C\%65\%2D\%66\%61\%63\%74\%6F\%72\%29\%29\%3B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%63\%6F\%6C\%6F\%72\%3A\%20\%23\%33\%33\%33\%3B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%7D\%0A\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%2E\%70\%72\%6F\%66\%69\%6C\%65\%2D\%63\%61\%72\%64\%20\%70\%20\%7B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%6D\%61\%72\%67\%69\%6E\%3A\%20\%63\%61\%6C\%63\%28\%35\%70\%78\%20\%2A\%20\%76\%61\%72\%28\%2D\%2D\%73\%63\%61\%6C\%65\%2D\%66\%61\%63\%74\%6F\%72\%29\%29\%20\%30\%20\%63\%61\%6C\%63\%28\%31\%35\%70\%78\%20\%2A\%20\%76\%61\%72\%28\%2D\%2D\%73\%63\%61\%6C\%65\%2D\%66\%61\%63\%74\%6F\%72\%29\%29\%3B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%63\%6F\%6C\%6F\%72\%3A\%20\%23\%35\%35\%35\%3B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%66\%6F\%6E\%74\%2D\%73\%69\%7A\%65\%3A\%20\%63\%61\%6C\%63\%28\%31\%65\%6D\%20\%2A\%20\%76\%61\%72\%28\%2D\%2D\%73\%63\%61\%6C\%65\%2D\%66\%61\%63\%74\%6F\%72\%29\%29\%3B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%7D\%0A\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%2E\%73\%6F\%63\%69\%61\%6C\%2D\%6C\%69\%6E\%6B\%73\%20\%61\%20\%7B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%74\%65\%78\%74\%2D\%64\%65\%63\%6F\%72\%61\%74\%69\%6F\%6E\%3A\%20\%6E\%6F\%6E\%65\%3B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%63\%6F\%6C\%6F\%72\%3A\%20\%23\%34\%66\%63\%33\%66\%37\%3B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%66\%6F\%6E\%74\%2D\%73\%69\%7A\%65\%3A\%20\%63\%61\%6C\%63\%28\%31\%2E\%35\%65\%6D\%20\%2A\%20\%76\%61\%72\%28\%2D\%2D\%73\%63\%61\%6C\%65\%2D\%66\%61\%63\%74\%6F\%72\%29\%29\%3B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%6D\%61\%72\%67\%69\%6E\%3A\%20\%30\%20\%31\%30\%70\%78\%3B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%74\%72\%61\%6E\%73\%69\%74\%69\%6F\%6E\%3A\%20\%63\%6F\%6C\%6F\%72\%20\%30\%2E\%33\%73\%3B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%7D\%0A\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%2E\%73\%6F\%63\%69\%61\%6C\%2D\%6C\%69\%6E\%6B\%73\%20\%61\%3A\%68\%6F\%76\%65\%72\%20\%7B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%63\%6F\%6C\%6F\%72\%3A\%20\%23\%33\%33\%33\%3B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%7D\%0A\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%2F\%2A\%20\%E5\%8F\%82\%E6\%95\%B0\%E6\%98\%BE\%E7\%A4\%BA\%E6\%A0\%B7\%E5\%BC\%8F\%20\%2A\%2F\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%2E\%70\%61\%72\%61\%6D\%73\%2D\%64\%69\%73\%70\%6C\%61\%79\%20\%7B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%62\%61\%63\%6B\%67\%72\%6F\%75\%6E\%64\%3A\%20\%72\%67\%62\%61\%28\%32\%35\%35\%2C\%20\%32\%35\%35\%2C\%20\%32\%35\%35\%2C\%20\%30\%2E\%35\%29\%3B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%62\%6F\%72\%64\%65\%72\%2D\%72\%61\%64\%69\%75\%73\%3A\%20\%31\%30\%70\%78\%3B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%70\%61\%64\%64\%69\%6E\%67\%3A\%20\%31\%35\%70\%78\%3B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%62\%6F\%78\%2D\%73\%68\%61\%64\%6F\%77\%3A\%20\%30\%20\%32\%70\%78\%20\%35\%70\%78\%20\%72\%67\%62\%61\%28\%30\%2C\%20\%30\%2C\%20\%30\%2C\%20\%30\%2E\%32\%29\%3B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%77\%69\%64\%74\%68\%3A\%20\%38\%30\%25\%3B\%20\%2F\%2A\%20\%E5\%AE\%BD\%E5\%BA\%A6\%E5\%8F\%AF\%E8\%B0\%83\%20\%2A\%2F\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%6D\%61\%78\%2D\%77\%69\%64\%74\%68\%3A\%20\%34\%30\%30\%70\%78\%3B\%20\%2F\%2A\%20\%E6\%9C\%80\%E5\%A4\%A7\%E5\%AE\%BD\%E5\%BA\%A6\%E9\%99\%90\%E5\%88\%B6\%20\%2A\%2F\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%74\%65\%78\%74\%2D\%61\%6C\%69\%67\%6E\%3A\%20\%6C\%65\%66\%74\%3B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%6D\%61\%72\%67\%69\%6E\%2D\%74\%6F\%70\%3A\%20\%32\%30\%70\%78\%3B\%20\%2F\%2A\%20\%E4\%B8\%8A\%E8\%BE\%B9\%E8\%B7\%9D\%20\%2A\%2F\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%7D\%0A\%0A\%20\%20\%20\%20\%3C\%2F\%73\%74\%79\%6C\%65\%3E\%0A\%3C\%2F\%68\%65\%61\%64\%3E\%0A\%3C\%62\%6F\%64\%79\%3E\%0A\%20\%20\%20\%20\%3C\%64\%69\%76\%20\%63\%6C\%61\%73\%73\%3D\%22\%62\%6C\%75\%72\%2D\%62\%61\%63\%6B\%67\%72\%6F\%75\%6E\%64\%22\%3E\%3C\%2F\%64\%69\%76\%3E\%0A\%0A\%20\%20\%20\%20\%3C\%64\%69\%76\%20\%63\%6C\%61\%73\%73\%3D\%22\%70\%72\%6F\%66\%69\%6C\%65\%2D\%63\%61\%72\%64\%22\%3E\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%3C\%64\%69\%76\%20\%63\%6C\%61\%73\%73\%3D\%22\%61\%76\%61\%74\%61\%72\%22\%20\%69\%64\%3D\%22\%61\%76\%61\%74\%61\%72\%22\%3E\%3C\%2F\%64\%69\%76\%3E\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%3C\%68\%32\%3E\%44\%6F\%75\%6D\%73\%67\%3C\%2F\%68\%32\%3E\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%3C\%70\%3E\%E7\%83\%AD\%E7\%88\%B1\%E7\%A7\%91\%E6\%8A\%80\%E4\%B8\%8E\%E7\%BC\%96\%E7\%A8\%8B\%E7\%9A\%84\%E6\%8E\%A2\%E7\%B4\%A2\%E8\%80\%85\%3C\%2F\%70\%3E\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%3C\%64\%69\%76\%20\%63\%6C\%61\%73\%73\%3D\%22\%73\%6F\%63\%69\%61\%6C\%2D\%6C\%69\%6E\%6B\%73\%22\%3E\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%3C\%61\%20\%68\%72\%65\%66\%3D\%22\%23\%22\%20\%74\%69\%74\%6C\%65\%3D\%22\%47\%69\%74\%48\%75\%62\%22\%3E\%F0\%9F\%90\%99\%3C\%2F\%61\%3E\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%3C\%61\%20\%68\%72\%65\%66\%3D\%22\%23\%22\%20\%74\%69\%74\%6C\%65\%3D\%22\%4C\%69\%6E\%6B\%65\%64\%49\%6E\%22\%3E\%F0\%9F\%94\%97\%3C\%2F\%61\%3E\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%20\%3C\%61\%20\%68\%72\%65\%66\%3D\%22\%23\%22\%20\%74\%69\%74\%6C\%65\%3D\%22\%54\%77\%69\%74\%74\%65\%72\%22\%3E\%F0\%9F\%90\%A6\%3C\%2F\%61\%3E\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%3C\%2F\%64\%69\%76\%3E\%0A\%20\%20\%20\%20\%3C\%2F\%64\%69\%76\%3E\%0A\%20\%20\%20\%20\%3C\%73\%63\%72\%69\%70\%74\%3E\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%2F\%2F\%20\%E4\%BB\%8E\%20\%55\%52\%4C\%20\%E4\%B8\%AD\%E8\%A7\%A3\%E6\%9E\%90\%E6\%89\%80\%E6\%9C\%89\%E6\%9F\%A5\%E8\%AF\%A2\%E5\%8F\%82\%E6\%95\%B0\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%63\%6F\%6E\%73\%74\%20\%70\%61\%72\%61\%6D\%73\%20\%3D\%20\%6E\%65\%77\%20\%55\%52\%4C\%53\%65\%61\%72\%63\%68\%50\%61\%72\%61\%6D\%73\%28\%77\%69\%6E\%64\%6F\%77\%2E\%6C\%6F\%63\%61\%74\%69\%6F\%6E\%2E\%73\%65\%61\%72\%63\%68\%29\%3B\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%63\%6F\%6E\%73\%74\%20\%71\%71\%4E\%75\%6D\%62\%65\%72\%20\%3D\%20\%70\%61\%72\%61\%6D\%73\%2E\%67\%65\%74\%28\%27\%71\%71\%27\%29\%3B\%0A\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%2F\%2F\%20\%E5\%8A\%A8\%E6\%80\%81\%E8\%AE\%BE\%E7\%BD\%AE\%E5\%A4\%B4\%E5\%83\%8F\%55\%52\%4C\%0A\%20\%20\%20\%20\%20\%20\%20\%20\%64\%6F\%63\%75\%6D\%65\%6E\%74\%2E\%67\%65\%74\%45\%6C\%65\%6D\%65\%6E\%74\%42\%79\%49\%64\%28\%27\%61\%76\%61\%74\%61\%72\%27\%29\%2E\%73\%74\%79\%6C\%65\%2E\%62\%61\%63\%6B\%67\%72\%6F\%75\%6E\%64\%49\%6D\%61\%67\%65\%20\%3D\%20\%60\%75\%72\%6C\%28\%27\%68\%74\%74\%70\%73\%3A\%2F\%2F\%71\%32\%2E\%71\%6C\%6F\%67\%6F\%2E\%63\%6E\%2F\%68\%65\%61\%64\%69\%6D\%67\%5F\%64\%6C\%3F\%64\%73\%74\%5F\%75\%69\%6E\%3D\%24\%7B\%71\%71\%4E\%75\%6D\%62\%65\%72\%7D\%26\%73\%70\%65\%63\%3D\%31\%30\%30\%27\%29\%60\%3B\%0A\%0A\%20\%20\%20\%20\%3C\%2F\%73\%63\%72\%69\%70\%74\%3E\%0A\%3C\%2F\%62\%6F\%64\%79\%3E\%0A\%3C\%2F\%68\%74\%6D\%6C\%3E
P:/img/img%Time%.jpg
S:\%71\%71\%3D\%31\%39\%31\%31\%30\%38\%35\%31\%30\%32
$Html渲染 代码 %C% 480 1080 %P% %S%$
渲染结果
J:$路径拼接 %工作目录% %P%$
±img %J%±
```
