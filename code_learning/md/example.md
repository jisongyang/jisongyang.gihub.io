<div id="navifation" class='headbar'>
    <iframe id='head' align="center" width="100%" height="160" src="md_show.html"  frameborder="no" border="0" marginwidth="0" marginheight="px" scrolling="no" ></iframe>
</div>
<style>
    .headbar{text-align:center}
    .iframe{margin:0 auto;}
</style>
<script>
    var oDiv = document.getElementById('head');
    oDiv.style.position = 'fixed'; oDiv.style.top = '0px'; oDiv.style.left = '0px';
    document.title="markdown/example";
</script>
<br><br>
<!-- ___________________________________________ -->
<!-- ___________________________________________ -->

# markdown


---





#### 学习内容

<!-- 我展示的是一级标题
=================

我展示的是二级标题
----------------- -->

<!-- # 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题 -->

*斜体文本*
_斜体文本_
**粗体文本**
__粗体文本__
***粗斜体文本***
___粗斜体文本___

***

* * *

*****

- - -

----------

RUNOOB.COM
GOOGLE.COM
~~BAIDU.COM~~
<u>带下划线文本</u>

创建脚注格式类似这样 [^RUNOOB]。

[^RUNOOB]: 菜鸟教程 -- 学的不仅是技术，更是梦想！！！


<!-- 无序列表 -->
* 第一项
* 第二项
* 第三项

+ 第一项
+ 第二项
+ 第三项


- 第一项
- 第二项
- 第三项

<!-- 有序列表 -->
1. 第一项
2. 第二项
3. 第三项

<!-- 列表嵌套只需在子列表中的选项前面添加四个空格即可 -->
1. 第一项：
    - 第一项嵌套的第一个元素
    - 第一项嵌套的第二个元素
2. 第二项：
    - 第二项嵌套的第一个元素
    - 第二项嵌套的第二个元素

<!-- Markdown 区块引用是在段落开头使用 > 符号 ，然后后面紧跟一个空格符号 -->
> 区块引用
> 菜鸟教程
> 学的不仅是技术更是梦想

> 最外层
> > 第一层嵌套
> > > 第二层嵌套

> 区块中使用列表
> 1. 第一项
> 2. 第二项
> + 第一项
> + 第二项
> + 第三项

<!-- 如果要在列表项目内放进区块，那么就需要在 > 前添加四个空格的缩进 -->
* 第一项
    > 菜鸟教程
    > 学的不仅是技术更是梦想
* 第二项

<!-- 如果是段落上的一个函数或片段的代码可以用反引号把它包起来（`） -->
`printf()` 函数

<!-- 你也可以用 ``` 包裹一段代码，并指定一种语言（也可以不指定）： -->
```javascript
$(document).ready(function () {
    alert('RUNOOB');
});
```


<!-- [链接名称](链接地址)  或者   <链接地址>-->
这是一个链接 [菜鸟教程](https://www.runoob.com)
<https://www.runoob.com>

<!-- 我们可以通过变量来设置一个链接，变量赋值在文档末尾进行： -->
这个链接用 1 作为网址变量 [Google][1]
这个链接用 runoob 作为网址变量 [Runoob][runoob]
然后在文档的结尾为变量赋值（网址）

[1]: http://www.google.com/
[runoob]: http://www.baidu.com/


<!-- ![alt 属性文本](图片地址 "可选标题") -->
![RUNOOB 图标](http://static.runoob.com/images/runoob-logo.png "RUNOOB")
<img src="http://static.runoob.com/images/runoob-logo.png" width="20%">


<!-- Markdown 制作表格使用 | 来分隔不同的单元格，使用 - 来分隔表头和其他行 -->
|  表头   | 表头  |
|  ----  | ----  |
| 单元格  | 单元格 |
| 单元格  | 单元格 |

| 左对齐 | 右对齐 | 居中对齐 |
| :-----| ----: | :----: |
| 单元格 | 单元格 | 单元格 |
| 单元格咯咯咯 | 单元格单元格咯咯咯 | 单元格单元格咯咯咯 |



使用 <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd> 重启电脑
**文本加粗** 
\*\* 正常显示星号 \*\*

<font face="黑体">我是黑体字</font>
<font face="微软雅黑">我是微软雅黑</font>
<font face="STCAIYUN">我是华文彩云</font>
<font color=red>我是红色</font>
<font color=#008000>我是绿色</font>
<font color=Blue>我是蓝色</font>
<font size=5>我是尺寸</font>
<font face="黑体" color=green size=5>我是黑体，绿色，尺寸为5</font>


```mermaid
graph LR;
    A(开始)-->B(手机安装VMOS)
    B-->C(安装32位QQ或微信)
    C-->D("备份恢复聊天记录(特别耗时)")
    D-->E["[特别耗时]"]
```
如果文本里有括号，则需要整体加上引号，比如上面的"备份恢复聊天记录(特别耗时)"