---
title: 快速开始
createTime: 2024/12/23 01:10:55
permalink: /guide/getting-started/
---
在本章节，你可以快速建立一个简易的自动化机器人。

## 基本语法

你可以通过以下代码实现一个简单的回复功能。
```qr
你好
你好啊！我是QR机器人
```
多条回复
```qr
你是谁
我是QR机器人

你会什么
我会聊天

...
```

## 安装与配置

### 启用兼容模式

在词库文件中添加以下内容即可开启兼容模式：

```plaintext
&&<配置>兼容模式:是
```

### 禁用函数示例

```plaintext
&&<配置>禁用函数:MD5,随机数
```

> 注意：确保语法正确，去掉 `【】` 仅保留内容。


## 基础变量

以下是 QRDICPro 中常用的变量：

### 消息变量

| 变量名         | 描述                          |
|----------------|-------------------------------|
| `%QQ%`         | 获取发言者账号               |
| `%昵称%`       | 获取发言者昵称               |
| `%Type%`       | 消息类型：0为群，1为好友等   |
| `%群号%`       | 获取群号                     |
| `%Msgbar%`     | 消息编号（默认获取上一条消息）|

### 时间变量

| 变量名           | 描述                          |
|------------------|-------------------------------|
| `%NDTime%`       | 当前时间戳（毫秒级）          |
| `$时间 yyyyMMdd$`| 获取当前时间（格式化输出）    |

### 示例

#### 查询消息类型

```plaintext
查询消息类型
%Type%
```

返回结果：

```plaintext
0
```

表示消息类型为群消息


## 高级功能

### JSON 操作

QRDICPro 提供了丰富的 JSON 操作函数。

#### 添加 JSON 键值对

```plaintext
$JSON 添加 A Key Value$
```

#### 删除 JSON 键值对

```plaintext
$JSON 删除 A Key$
```

#### 获取 JSON 长度

```plaintext
$JSON 长度 A$
```

### 示例

#### 合并 JSON

```plaintext
1:["abc"]
2:["def"]
$JSON 合并 1 %2%$
%1%
```

返回结果：

```plaintext
["abc", "def"]
```

---

### 画布操作

#### 声明画布

```plaintext
$画布 声明 A 600 600$
```

> 创建一个大小为 600x600 的画布。

#### 设置画布背景颜色

```plaintext
$画布 颜色 A FFFFFFFF$
```

> 设置画布颜色为白色（不透明）。

#### 添加文字

```plaintext
$画布 文字 A 你好 100 100 FFFF0000 100$
```

> 在画布上绘制文字，位置为 (100, 100)，颜色为红色。

#### 保存画布

```plaintext
$画布 保存 A /storage/emulated/0/图片/生成图片.jpg$
```

> 保存画布至指定路径。

## 常见问题

### 如何获取机器人登录账号？

使用变量 `%Robot%` 获取。

示例：

```plaintext
bot账号查询
%Robot%
```

返回结果为机器人当前登录账号。

### JSON 合并为什么无效？

可能是语法错误，检查示例格式是否正确：

```plaintext
$JSON 合并 A B$
```

确保 A 和 B 是有效的 JSON 数据。

---

以上内容仅为文档初稿，如需更多内容或进一步优化，请随时提出需求。