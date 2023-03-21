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

| class | style                    |
| :---- | :----------------------- |
| fw-n  | flex-wrap: nowrap;       |
| fw-w  | flex-wrap: wrap;         |
| fw-wr | flex-wrap: wrap-reverse; |

::: tip
这里的 fw 这个前缀时和 font-weight 的 fw 一样但是并不会互相影响，因为他它们的值不一致，例如 fw-600 为 font-weight：600；fw-w 为 flex-wrap：wrap；
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

| class | style           |
| :---- | :-------------- |
| fs-1  | flex-shrink: 1; |
| fs-2  | flex-shrink: 2; |
| fs-3  | flex-shrink: 3; |
| fs-4  | flex-shrink: 4; |
| fs-5  | flex-shrink: 5; |

### 自定义

| 类型  | 参数                |
| :---- | :------------------ |
| 开关  | $flex-shrink-switch |
| sizes | $flex-shrink-sizes  |
| 前缀  | $flex-s             |

::: tip
与上面的 fs 一样，这里 fs 这个前缀和 font-size 的 fs 一样，但并不影响我们正常使用
:::
