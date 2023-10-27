---
title: Compute e in R
author: Jing Ma
date: '2023-10-27'
slug: compute-e-in-r
categories:
  - R
tags:
  - R
  - R Markdown
description: Use Taylor's formula to approximate the natural logarithmic base e
keywords: R,natural logarithmic base,e,Taylor's formula
toc: true
---

The **Taylor's formula** to approximate `e` - the natural logarithmic base:

`$e = 1 + \sum_{k=1}^\infty \frac{1}{k!}$`

that is:

`$e = \text{1} + \frac{1}{\text{1!}} + \frac{1}{\text{2!}} + \frac{1}{\text{3!}} + \ldots$`

We can deal with this problem using R language:


```r
s = 1.0             # initial part
x = 1               # the numerator 1
k = 0               # iterator

repeat {
  k <- k + 1        # current iterator
  x <- x / k        # the fractional part
  s <- s + x        # sum the two parts
  if (x < 1e-10) {  # control the accuracy
    break
  }
}

stringr::str_glue("After {k} iterations, the resuling e is: {s}")
```

```
## After 14 iterations, the resuling e is: 2.71828182845823
```
