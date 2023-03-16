---
title: 弹性布局
---

## 弹性布局方向

| class | style                           |
| :---- | :------------------------------ |
| fd-c  | flex-direction: col;            |
| fd-r  | flex-direction: row;            |
| fd-rr | flex-direction: row-reverse;    |
| fd-cr | flex-direction: column-reverse; |

### 自定义

| 类型        | 参数             |
| :---------- | :--------------- |
| flex 总开关 | $flex-switch     |
| 开关        | $flex-dir-switch |
| 类型        | $flex-dir-types  |
| 前缀        | $flex-dir-prefix |

::: tip
注意 flex 所有相关的开关都默认继承了$flex-switch 的值

关闭$flex-switch 将关闭所有关于 flex 的 class
:::

## 弹性布局主轴方向对齐方式

| class | style                           |
| :---- | :------------------------------ |
| jc-fs | justify-content: flex-start;    |
| jc-fe | justify-content: flex-end;      |
| jc-c  | justify-content: center;        |
| jc-sb | justify-content: space-between; |
| jc-sa | justify-content: space-around;  |
| jc-se | justify-content: space-evenly;  |

### 自定义

| 类型 | 参数            |
| :--- | :-------------- |
| 开关 | $flex-jc-switch |
| 类型 | $flex-jc-types  |
| 前缀 | $flex-jc-prefix |

::: tip
注意$flex-jc-switch 及下文有关 flex 的 class 的开关默认跟随 flex-switch
:::

## 弹性布局交叉轴方向对齐方式前缀

| class | style                    |
| :---- | :----------------------- |
| ai-s  | align-items: flex-start; |
| ai-e  | align-items: flex-end;   |
| ai-c  | align-items: center;     |
| ai-st | align-items: stretch;    |
| ai-b  | align-items: baseline;   |

### 自定义

| 类型 | 参数            |
| :--- | :-------------- |
| 开关 | $flex-ai-switch |
| 类型 | $flex-ai-types  |
| 前缀 | $flex-ai-prefix |

## 弹性布局折行方式

| class     | style                    |
| :-------- | :----------------------- |
| flex-w-n  | flex-wrap: nowrap;       |
| flex-w-w  | flex-wrap: wrap;         |
| flex-w-wr | flex-wrap: wrap-reverse; |

::: tip
这里没有使用 fw 这个前缀时因为会和 font-weight 的 fw 冲突
:::

### 自定义

| 类型     | 参数              |
| :------- | :---------------- |
| 开关     | $flex-wrap-switch |
| 折行类型 | $flex-wrap-types  |
| 前缀     | $flex-wrap-prefix |

## flex-grow 弹性盒子的扩展比率

| class | style         |
| :---- | :------------ |
| fg-1  | flex-grow: 1; |
| fg-2  | flex-grow: 2; |
| fg-3  | flex-grow: 3; |
| fg-4  | flex-grow: 4; |
| fg-5  | flex-grow: 5; |

### 自定义

| 类型            | 参数              |
| :-------------- | :---------------- |
| 开关            | $flex-grow-switch |
| flex 默认 sizes | $flex-sizes       |
| sizes           | $flex-grow-sizes  |
| 前缀            | $flex-g           |

::: tip
$flex-grow-sizes和$flex-shrink-sizes 默认继承$flex-sizes 的值
:::

## flex-shrink 弹性盒子的收缩比率

| class    | style           |
| :------- | :-------------- |
| flex-s-1 | flex-shrink: 1; |
| flex-s-2 | flex-shrink: 2; |
| flex-s-3 | flex-shrink: 3; |
| flex-s-4 | flex-shrink: 4; |
| flex-s-5 | flex-shrink: 5; |

### 自定义

| 类型  | 参数                |
| :---- | :------------------ |
| 开关  | $flex-shrink-switch |
| sizes | $flex-shrink-sizes  |
| 前缀  | $flex-s             |

::: tip
这里没有使用 fs 这个前缀时因为会和 font-size 的 fs 冲突
:::
