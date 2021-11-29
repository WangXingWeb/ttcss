---
title: vscode自定义代码块
---

熟练使用自定义代码块，可以提升我们的开发效率。这里向大家介绍如何在 vscode 中添加自定义代码块。

<!-- more -->

## 如何自定义代码块 snippet

-   打开 vscode>文件>首选项>用户代码片段，可以看到下面的界面

    <img class="custom" :src="$withBase('/assets/img/snippet.png')" />

-   或者按 ctrl +shift + p 输入 snippet 新建

-   如果你希望在 markdown 文件也能启动快捷提醒，需要在 vscode 的 setting.json 中加入

```javascript
"[markdown]":  {
	"editor.quickSuggestions": true
}
```

## snippet 包含的内容

snippet 其实就是一个特定格式的 json 文件，这个 json 对象中的每一个属性就是一个自定义的代码块。每个代码块必须包含`scope`,`prefix`,`body`,`description`四部分。 - scope 表示是代码块生效的语言范围，比如设置为 javascript，则只能在 js 中生效
在 css 中则没有效果

-   prefix 就代码块的关键字，在 vscode 输入 prefix 对应的字符 vscode 的只能提示就会出现我们设定的代码块，选中我们的代码块回车就可以插入我们预置的代码块了。
-   body 是代码块的主体，是一个字符串数组。数组中的每一项对应着生成代码的每一行。这个后面再重点说明。
-   description 就是我们对这个代码块的描述，可以理解为我们对代码块的注释。不是必须项。

## snippet 用法

### 制表位(Tabstops)

制表位在插入代码块后控制光标的位置，方便我们下一步编辑这段代码。使用$1,$2,$3...来指定光标的位置,按`Tab`键切换贯标位置。数字代表光标的移动的顺序，值得注意的时$0 代表光标的最后位置（当所有制表位走完光标会回到$0 的位置，记住$0 并不是光标的第一个位置）。如果有多个相同的制表位(Tabstops)会在编译器里同时出现多个光标。

```javascript
{
	"console.log": {
		"scope": "javascript,typescript",
		"prefix": "log",
		"body": [
			"console.log($1,'这是我自定义的console.log');",
			"$2"
		],
		"description": "这是我自定义的console.log"
	}
}
```

上面的代码在我们插入代码块后光标先到$1 的位置，在我们输入完需要 console.log 的内容后，按`Tab`就可以到$2 的位置继续编写下面的代码了。

### 占位符(Placeholders)

占位符(Placeholders) 是带默认值的制表位(Tabstops),占位符(Placeholders)的文本会被插入到制表位(Tabstops)所在位置并且全选以方便修改。

```javascript
{
"function":{
		"scope": "javascript,typescript",
		"prefix": "fun",
		"body": [
			"function ${1:functionName}(${2:param}){",
			"    $3",
			"}"
		],
		"description": "function"
	}
}
```

### 选择项(Choice)

占位符(Placeholders)可以有多选值，每个选项的值用 , 分隔，选项的开始和结束用管道符号(|)将选项包含，例如: ${1|one,two,three|}，当插入代码片段，选择制制表位(Tabstops)的时候，会列出选项供用户选择。

```javascript
{
"$ajax":{
		"scope": "javascript,typescript",
		"prefix": "$ajax",
		"body": [
			"$.${1|get,post|}(${2:url},${3:data},function(data){",
			"    $4",
			"})"
		],
		"description": "$ajax"
	}
}
```

上面的代码我们可以自由选择使用 get 还是 post 方法。

### 变量(Variables)

```javascript
"Add multi-line comments": {
  "scope": "javascript,typescript,vue",
  "prefix": "funz",
  "body": [
    "/**",
     " * @name ${1}",
    " * @desc $2",
    " * @author Falost",
    " * @time $CURRENT_YEAR年$CURRENT_MONTH月$CURRENT_DATE日 $CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND $CURRENT_DAY_NAME",
    " * @param {${4|Object,String,Number,Array,Function|}} {$5}",
    " * @return {${6|Object,String,Number,Array,Function|}} {$7}",
    " */$10"
  ],
  "description": "Add multi-line comments"
}
```

上面代码自定义了方法注释代码
下面是其他常用的参数

-   TM_SELECTED_TEXT 当前选中文本或者空字符串(The currently selected text or the empty string)
-   TM_CURRENT_LINE 当前行的内容(The contents of the current line)
-   TM_CURRENT_WORD 光标下的单词的内容或者是空字符串(The contents of the word under cursor or the empty string)
-   TM_LINE_INDEX 基于行号的 0-索引(The zero-index based line number)
-   TM_LINE_NUMBER 基于行号的 1-索引(The one-index based line number)
-   TM_FILENAME 当前文档的文件名(The filename of the current document)
-   TM_FILENAME_BASE 不带有文件扩展名的文件名(The filename of the current document without its extensions)
-   TM_DIRECTORY 当前文档对象的路径名(The directory of the current document)
-   TM_FILEPATH 当前文档对象的绝对路径(The full file path of the current document)
-   CLIPBOARD 粘贴板中的内容(The contents of your clipboard)
-   WORKSPACE_NAME 打开的工作区或者文件夹名(The name of the opened workspace or folder)
    插入当前日期和时间:
-   CURRENT_YEAR 当前年份(The current year)
-   CURRENT_YEAR_SHORT 当前年份的最后两位数字(The current year’s last two digits)
-   CURRENT_MONTH 用两位数表示的月份(The month as two digits (example ‘02’))
-   CURRENT_MONTH_NAME 月份的全称(The full name of the month (example ‘July’))
-   CURRENT_MONTH_NAME_SHORT 月份的简称(The short name of the month (example ‘Jul’))
-   CURRENT_DATE 当前月份中当前日期，例如 1/23，返回的值为 23(The day of the month)
-   CURRENT_DAY_NAME 当前日期的星期名(The name of day (example ‘Monday’))
-   CURRENT_DAY_NAME_SHORT 当前日期的星期名的简称(The short name of the day (example ‘Mon’))
-   CURRENT_HOUR 用 24 时表示的当前小时数(The current hour in 24-hour clock format)
-   CURRENT_MINUTE 当前分钟数(The current minute)
-   CURRENT_SECOND 当前秒钟数(The current second)

-   BLOCK_COMMENT_START (Example output: in PHP /\* or in HTML )
-   LINE_COMMENT (Example output: in PHP // or in HTML )

参考链接：https://blog.csdn.net/Enl0ve/article/details/93167202
