---
title: 从0~1之间任选3个数, 其能构成三角形的概率有多大?
# subtitle: Probability of triangle
author: Jing Ma
date: '2023-04-24'
slug: probability-of-triangle
categories:
  - blog
tags:
  - R Markdown
  - Statistics
  - Math
  - R
description: 一道概率题的不同解法。Probability of triangle.
keywords: R,Statistics,概率,可视化,数学
---

有一个有趣的问题：

> 从 0~1 之间任选3个数, 这三个数能构成三角形的概率有多大?

用 R 来实现一下。

```r
# R version
version$platform
## [1] "x86_64-apple-darwin17.0"
version$version.string
## [1] "R version 4.1.2 (2021-11-01)"
```

整体思路是利用**古典概率模型**，把算概率的问题转化为求解目标事件发生频率的问题，用多次试验得到的这个频率来近似概率值。

主函数是 `prob.tri()`，输入是总试验次数`n` (默认值为 10000)，只需要获得能构成三角形的次数 `total`，则频率 `f = total / n`.

对于每一次实验，进行如下步骤：

1. 先假设能成功，设置标识 `is_tri` 为1(表示能成功)
2. 随机生成3个数(`runif` 均匀分布)，用来作为三个边
3. 根据构成三角形的条件两边之和大于第三边，对 3 种情况都进行验证(a+b>c, b+c>a, c+a>b), 共循环3次
4. 如果验证失败，在改标志 `is_tri` 为0; 如果验证成功，则给 `total`加 1

最后，在得到 `total` 值后，即可计算频率值。


```r
# triangle problem
prob.tri <- function(n = 10000) {
  total <- 0 # total trial times
  j <- 0 # loop index

  while (j <= n) {
    # flag: `is.tri = 1` means it can be a triangle
    is.tri <- 1

    # select 3 random number from uniform-distribution
    vec <- runif(3)

    # to tell if it's possible to form a triangle
    # (a+b>c, b+c>a, c+a>b)
    for (i in 1:3) {
      if (vec[i] > sum(vec[-i])) {
        is.tri <- 0
      }
    }
    total <- total + is.tri
    j <- j + 1
  }
  # calculation of probability of successful triangles
  total / n
}

# 进行 10 轮试验，看看结果的分布情况
mult.result <- c()
for (i in 1:10) {
  mult.result <- rbind(mult.result, prob.tri())
}
print(mult.result)
```

```
##         [,1]
##  [1,] 0.5000
##  [2,] 0.4934
##  [3,] 0.5011
##  [4,] 0.4939
##  [5,] 0.4996
##  [6,] 0.4931
##  [7,] 0.5052
##  [8,] 0.4930
##  [9,] 0.4978
## [10,] 0.5088
```

可以看到，结果在逼近于 0.5。我们对结果数据进行拟合，并画图展示。


```r
data <- mult.result[, 1]
df <- data.frame(x = 1:length(data), y = data)

# fitting
fit <- lm(y ~ x, data = df)

# custom y_ticks
y_ticks <- seq(0, 1, by = 0.1)

# plot: do not use default y_ticks
plot(df$x, df$y, pch = 16, col = "black",
  xlab = "Index", ylab = "Value",
  ylim = c(0, 1), yaxt = "n"
)
# set y_ticks
axis(side = 2, at = y_ticks)
abline(fit, col = "red")
```

<img src="{{< blogdown/postref >}}index_files/figure-html/fit-1.png" width="672" />

根据上述 10 轮 10000 次试验的结果可知，最后能形成三角形的概率是 0.5.
