---
title: 弹性布局
---

## 弹性布局方向

| class     | style                           |
| :-------- | :------------------------------ |
| flex-d-c  | flex-direction: col;            |
| flex-d-r  | flex-direction: row;            |
| flex-d-rr | flex-direction: row-reverse;    |
| flex-d-cr | flex-direction: column-reverse; |

### 自定义

| 类型 | 参数             |
| :--- | :--------------- |
| 开关 | $flex-switch     |
| 类型 | $flex-dir        |
| 前缀 | $flex-dir-prefix |

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
| 类型 | $flex-jc        |
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
| 类型 | $flex-ai        |
| 前缀 | $flex-ai-prefix |

## 弹性布局折行方式

| class     | style                    |
| :-------- | :----------------------- |
| flex-w-n  | flex-wrap: nowrap;       |
| flex-w-w  | flex-wrap: wrap;         |
| flex-w-wr | flex-wrap: wrap-reverse; |

### 自定义

| 类型     | 参数              |
| :------- | :---------------- |
| 开关     | $flex-wrap-switch |
| 折行类型 | $flex-wrap-type   |
| 前缀     | $flex-wrap-prefix |

## flex-grow 弹性盒子的扩展比率

| class    | style         |
| :------- | :------------ |
| flex-g-1 | flex-grow: 1; |
| flex-g-2 | flex-grow: 2; |
| flex-g-3 | flex-grow: 3; |
| flex-g-4 | flex-grow: 4; |
| flex-g-5 | flex-grow: 5; |

### 自定义

| 类型  | 参数              |
| :---- | :---------------- |
| 开关  | $flex-grow-switch |
| sizes | $flex-grow-sizes  |
| 前缀  | $flex-g           |

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
