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
| 前缀 | $flex-ai-prefix |
