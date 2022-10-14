---
title: 弹性布局
---

## 弹性布局方向

| class          | style                           |
| :------------- | :------------------------------ |
| flex-dir-col   | flex-direction: col;            |
| flex-dir-row   | flex-direction: row;            |
| flex-dir-rowRe | flex-direction: row-reverse;    |
| flex-dir-colRe | flex-direction: column-reverse; |

### 自定义

| 类型 | 参数             |
| :--- | :--------------- |
| 开关 | $flex-switch     |
| 类型 | $flex-dir        |
| 前缀 | $flex-dir-prefix |

## 弹性布局主轴方向对齐方式

| class      | style                           |
| :--------- | :------------------------------ |
| jc-start   | justify-content: flex-start;    |
| jc-end     | justify-content: flex-end;      |
| jc-center  | justify-content: center;        |
| jc-between | justify-content: space-between; |
| jc-around  | justify-content: space-around;  |

### 自定义

| 类型 | 参数            |
| :--- | :-------------- |
| 开关 | $flex-switch    |
| 类型 | $flex-jc        |
| 前缀 | $flex-jc-prefix |

## 弹性布局交叉轴方向对齐方式前缀

| class      | style                    |
| :--------- | :----------------------- |
| ai-start   | align-items: flex-start; |
| ai-end     | align-items: flex-end;   |
| ai-center  | align-items: center;     |
| ai-between | align-items: stretch;    |

### 自定义

| 类型 | 参数            |
| :--- | :-------------- |
| 开关 | $flex-switch    |
| 类型 | $flex-ai        |
| 前缀 | $flex-ai-prefix |

## 弹性布局折行方式

| class      | style                    |
| :--------- | :----------------------- |
| flex-w-n   | flex-wrap: nowrap;       |
| flex-w-w   | flex-wrap: wrap;         |
| flex-w-w-r | flex-wrap: wrap-reverse; |
| flex-w-int | flex-wrap: initial;      |
| flex-w-inh | flex-wrap: inherit;      |

### 自定义

| 类型     | 参数            |
| :------- | :-------------- |
| 开关     | $flex-switch    |
| 折行类型 | $flex-wrap-type |
| 前缀     | $flex-ai-prefix |

## flex-grow

| class    | style         |
| :------- | :------------ |
| flex-g-1 | flex-grow: 1; |
| flex-g-2 | flex-grow: 2; |
| flex-g-3 | flex-grow: 3; |
| flex-g-4 | flex-grow: 4; |
| flex-g-5 | flex-grow: 5; |

### 自定义

| 类型  | 参数             |
| :---- | :--------------- |
| 开关  | $flex-switch     |
| sizes | $flex-grow-sizes |
| 前缀  | $flex-g          |

## flex-shrink

| class    | style           |
| :------- | :-------------- |
| flex-s-1 | flex-shrink: 1; |
| flex-s-2 | flex-shrink: 2; |
| flex-s-3 | flex-shrink: 3; |
| flex-s-4 | flex-shrink: 4; |
| flex-s-5 | flex-shrink: 5; |

### 自定义

| 类型  | 参数               |
| :---- | :----------------- |
| 开关  | $flex-switch       |
| sizes | $flex-shrink-sizes |
| 前缀  | $flex-s            |
