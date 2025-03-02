---
title: 变量
createTime: 2024/12/23 01:10:55
permalink: /guide/variables/
---

## 变量赋值方式
### 单字符变量赋值
使用冒号（:）进行赋值，只能用于单字符变量。
例如：
```qr
A:123456
```
这将变量A赋值为123456。

### 多字符变量赋值
使用美元符号（$）和等号（=）进行赋值，支持多字变量。
例如：
```qr
$变量 金币 123456$
```
这将变量“金币”赋值为123456。

### 通过函数赋值
使用特定的函数进行赋值，如`$读`、`$写`等。
例如：
```qr
$读 教程/%群号%/金币 %QQ% 0$
```
这将从文件中读取金币值并赋给变量。

### 通过正则表达式捕获赋值
使用正则表达式捕获组进行赋值。
例如：
```qr
$取括号 内容 正则表达式$
```
这将捕获正则表达式匹配的内容并赋值给变量。

### 通过随机数或随机文本赋值
使用`$随机数`或`$随机文本`函数进行赋值。
例如：
```qr
$随机数 1-10$
```
这将生成一个1到10之间的随机数并赋值。

### 全局变量
- 使用`$全局变量` 进行静态全局赋值，重启词库或主程序后需要重新赋值。
- 静态全局，不会随着时间改变，且重启一次词库或主程序就要重新赋值一次，较为麻烦
例如：
```qr
你好
$全局变量 好 好$

全局变量
%好%
```
这将全局变量“好”赋值为“好”。任何一个指令都可使用。

## 内置变量一览表
| 变量                       | 介绍                 | 可用  | 备注     |
| ------------------------- | -------------------- | :---: | -------- |
| `%主人%`        | 获取软件中的主人QQ         |   ✅   |          |
| `%管理员%`           | 获取软件管理员           |   ✅   |          |
| `%Robot%`                | 获取登录QR机器人账号             |   ✅   |          |
| `%RobotAuth%`              | 检测QR授权状态             |   ✅   |          |
| `%RobotRunTime%`                 | 获取软件启动时间戳毫秒级             |   ✅   |          |
| `%NDTime%`                 | 获取当前时间戳毫秒级             |   ✅   |          |
| `%Type%`                 | 消息类型             |   ✅   |     [查看详情](#消息类型-type)    |
| `%Status%`                 | 系统消息状态码             |   ✅   |    [查看详情](#系统消息状态码-status)      |
| `%Value%`                 | 进群申请状态             |   ✅   |   [查看详情](#进群申请状态-value)   |
| `%Number%`                 | 红包判断             |   ✅   |          |
| `%Groupid%`                 | 获取群号             |   ✅   |          |
| `%Code%`                 | 操作QQ号             |   ✅   |          |
| `%Uin%`                   | 发言者账号                                       |   ✅   |              |
| `%Adminuin%`              | 进群审核同意的管理QQ (需要搭配标签`系统`使用)     |   ✅   |              |
| `%Time%`                  | 获取当前时间戳                                   |   ✅   |              |
| `%Msgbar%`                | 获取消息编号                                     |   ✅   | 默认获取上一条消息的编号 |
| `%Reqid%`                 | 获取QQ特殊消息ID                                 |   ✅   |              |
| `%Json%`                  | 获取机器人"Pskey"json格式                         |   ✅   |              |
| `%Skey%`                  | 获取机器人账号的skey                             |   ✅   |              |
| `%GroupName%`             | 获取群名称                                       |   ✅   |              |
| `%UinName%`               | 获取发言者昵称                                   |   ✅   |              |
| `%Adminname%`             | 获取群操作管理昵称                               |   ✅   |              |
| `%Inviteename%`           | 获取退群者昵称                                   |   ✅   |              |
| `%Title%`                 | 获取发言者头衔                                   |   ✅   |              |
| `%Msgbar0%`               | 获取被回复消息的ID                               |   ✅   |              |
| `%Msgbarqq0%`             | 获取被回复QQ号                                   |   ✅   |              |
| `%Msgbartime0%`           | 获取被回复消息的发送时间戳                       |   ✅   |              |
| `%代码运行时间%`          | 获取代码运行时间                                 |   ✅   |              |
| `%Strmsg%`                | 本指令仅供参考，%Strmsg%可能有其他用处自行摸索  |   ✅   |              |
| `%Listid%`                | 获取红包id（配合抢红包，查红包使用）              |   ✅   |              |
| `%Authkey%`               | tx红包授权密钥                                   |   ✅   |              |
| `%Tftext%`                | 转账文本                                         |   ✅   |              |
| `%Tftitle%`               | 转账标题                                         |   ✅   |              |
| `%Tftip%`                 | `[转账]`你收到一笔转账                          |   ✅   |              |
| `%Tfurl%`                 | 获取订单链接                                  |   ✅   |              |
| `%TfAmounts%`             | 获取转账金额                                  |   ✅   |              |
| `%Tfuin%`                 | 获取转账者账号                                |   ✅   |              |
| `%群%`                    | 获取群号                                         |   ✅   |              |
| `%群号%`                  | 同上获取群号                                     |   ✅   |              |
| `%QQ%`                    | 获取发言者账号                                   |   ✅   |              |
| `%昵称%`                  | 获取发言者昵称                                   |   ✅   |              |
| `%参数-1%`                | 获取发言所有字，不带换行                         |   ✅   |              |
| `%参数0%`                 | 获取第一个空格之前的消息                         |   ✅   |              |
| `%括号0%`                 | 类%参数-1%获取包括括号外消息在内的发言，不带换行  |   ✅   |              |
| `%括号1%`                 | 获取发言括号1，括号里的内容可以使用变量/正则等  |   ✅   |              |
| `%AT0%`                   | 获取第一个被艾特的账号（0替换为1即获取第二个被艾特的账号） |   ✅   |  |
| `%ATNUM%`                 | 获取被艾特账号数量                               |   ✅   |              |
| `%IMG0%`                  | 获取图片MD5                                       |   ✅   |  |
| `%FIMG0%`                 | 获取闪照MD5                                       |   ✅   |              |
| `%FACE0%`                 | 获取表情ID                                       |   ✅   |              |
| `%BUB0%`                  | 获取发言者气泡ID                                 |   ✅   |              |
| `%撤回%`                  | 检测撤回消息需要搭配标签`[总处理]`或`[撤回]`使用  |   ✅   |              |


## 详细介绍
### 获取软件管理员、主人等，其他用法一致，不再介绍
示例：
```qr
查看管理员
%管理员%

查看主人
%主人%
```

### 消息类型：`%Type%`
- `0` 群
- `1` 好友
- `2` 讨论组
- `3` 系统
- `4` 临时会话
- `19` 群撤回
- 如在群内进行触发将会获得反馈"0"以此类推，更多消息类型请自测 

示例:
```qr
查询消息类型
%Type%
```

### 系统消息状态码：`%Status%`
- `%Status%`【系统消息的状态码，进群、退群、状态等等】配合%Value%使用
- `%Status%==1` 有人申请进群(自己申请)/入群申请被同意
- `%Status%==22` 有人申请进群(有人邀请)/入群申请被同意
- `%Status%==3`  我不道啊
- `%Status%==6` 管理员踢出(需要下一次[系统]触发，不推荐)
- `%Status%==13` 有人自己退群(需要下一次[系统]触发，不推荐)

### 进群申请状态：`%Value%`
- 情况1 `%Value%` 在进群申请时，搭配标签`[系统]`使用
    - `%Value%==1` 有人申请入群
    - `%Value%==2` 有人进群
    - `%Value%==5` 有人退群(需要下一次`[系统]`触发，不推荐)

- 情况2 `%Value%` 在管理变动时，为1时则上管理,为0时到下管理，需搭配标签`[上下管理]`使用 \
    示例:
    ```qr
    [上下管理]
    如果:%Value%==1
    恭喜%QQ%升级为管理员
    返回
    如果尾
    如果:%QQ%==0
    $回调 艾特$的管理员被解除了
    ```

### 红包判断：`%Number%`
例子：
```qr
[红包]
如果:%Number%!=
%Number%
```

### 操作QQ号：`%Code%` 
情况比较多，不同情况的code所指QQ不同，大部分情况下`%QQ%`和`%Code%`获取到的为同一QQ值，但是特殊情况是用在进群检测中，`%Code%`获取进群邀请人QQ，`%QQ%`获取进群人QQ。如：`%Code%邀请%QQ%进群`。


### `%Strmsg%` 
本指令仅供参考，%Strmsg%可能有其他用处自行摸索 `±rep %Msgbar%±` `±strmsg %参数-1%±` \
示例:【仅供参考】
```qr
回复我 ?(.*)
±rep %Msgbar%±±strmsg %参数-1%±
%括号1%
```
回复触发词并发送'括号1'其中%参数-1%为回复界面消息框显示消息，具体可更改后自行查看返回消息

### 消息组 `±msg 内容±`
直接输出内容……意义不明


### 获取转账者账号 `%Tfuin%`
示例：
```qr
\[转账\]([\S\s]+)
如果:%Tfuin%!=
%Tfuin%\n
%Tfurl%\n
%Tftip%\n
%Tftitle%\n
%Tftext%\n
%TfAmounts%\n
如果尾
返回
```

### 获取图片MD5：`%IMG0%` `%IMGNUM%`
示例:
```qr
.*
如果:%IMG0%!=
a:$替换 € %IMG0%€.jpg€$
%a%
```
示例2:
```qr
.*
a:$正则 @ %IMG0%@/.*-|[^\dA-Z]@$
%a%
```

### 图片前后缀
- ±img=图片链接/本地路径/MD5±
- ±img=图片链接/本地路径/MD5
- ±img 图片链接/本地路径/MD5

- 获取群头像：±img=http://p.qlogo.cn/gh/群号/群号/±
- 获取发言人头像：±img=http://q2.qlogo.cn/headimg_dl?dst_uin=%QQ%&spec=5±
- 获取被艾特人头像：±img=http://q2.qlogo.cn/headimg_dl?dst_uin=%AT0%&spec=5±

### 获取闪照MD5：`%FIMG0%` `%FIMGNUM%`
可搭配其他变量达到检测闪照后自动发送原图
示例:
```qr
.*
如果:%FIMG0%!=
a:$替换 @ %FIMG0%@.jpg@$
±img=%a%±
```

### 获取表情ID
- %FACE0%
- %FACENUM%
- %FACEPRO0%
- %FACEPRONUM%
- %FACENEW0%
- %FACENEWNUM%

### 获取发言者气泡ID
- %BUB0%
- %BUBNUM%

### 检测撤回消息
需要搭配标签`[总处理]`或`[撤回]`使用，<Badge type="danger" text="要授权" vertical="bottom" />
- %撤回% 
- %撤回 NUM%