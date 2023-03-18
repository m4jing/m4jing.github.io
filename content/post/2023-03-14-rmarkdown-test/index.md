---
title: RMarkdown-test
author: Jing Ma
date: '2023-03-14'
slug: rmarkdown-test
categories:
  - R
tags:
  - R Markdown
description: A test of R Markdown document usage.
toc: true
# output:
#   blogdown::html_page:
#     toc: true
# #     fig_width: 6
# #     # dev: "svg"
draft: true
---

> 当我们行走，要努力与世界相处
>
>> 当我们***盛放***，要努力与自己相处

# To test Rmd rendering :smile: :rabbit2:

This is a summary:


```r
summary(Orange)
```

```
##  Tree       age         circumference  
##  3:7   Min.   : 118.0   Min.   : 30.0  
##  1:7   1st Qu.: 484.0   1st Qu.: 65.5  
##  5:7   Median :1004.0   Median :115.0  
##  2:7   Mean   : 922.1   Mean   :115.9  
##  4:7   3rd Qu.:1372.0   3rd Qu.:161.5  
##        Max.   :1582.0   Max.   :214.0
```

add a plot by `ggplot2`:

<img src="{{< blogdown/postref >}}index_files/figure-html/line-1.png" width="672" />

include inline math expressions in a pair of backticks `$math$`, e.g., `$S_n = \sum_{i=1}^n X_i$`. Similarly, math expressions of the display style have to be written in `$$math$$`

For .Rmd posts to be rendered to .html,you can use `\(math\)` for inline math expressions, and `\(S_n = \sum_{i=1}^n X_i\)` `$$math$$` for display-style expressions.[^1]

[^1]: This is a footnote

`math`, `S_n = \sum_{i=1}^n X_i`, `$math$`

## Embedding Hugo shortcode in R Markdown



R Markdown 中怎么显示注释？[^2]

[^2]: Another footnote

## List page

<http://localhost:4321/post/>


## Terms: tag & category

- <http://localhost:4321/tags/>
- <http://localhost:4321/categories/>
- <http://localhost:4321/tags/running/>
- <http://localhost:4321/tags/r-markdown/>
- <http://localhost:4321/categories/blog/>
- <http://localhost:4321/categories/r/>

## Fetch data

http://localhost:4321/data/marathons.json

## A blockquote

> Serving the directory . at http://localhost:4321. Launched the hugo server in the background (process ID: 6646). To stop it, call blogdown::stop_server() or restart the R session.
Rendering content/post/2023-03-14-rmarkdown-test/index.Rmd... Done.

> Serving the directory . at http://localhost:4321.
> Launched the hugo server in the background (process ID: 6646). To stop it, call blogdown::stop_server() or restart the R session.
> Rendering content/post/2023-03-14-rmarkdown-test/index.Rmd... Done.

>   Serving the directory . at http://localhost:4321.
>   Launched the hugo server in the background (process ID: 6646). To stop it, call blogdown::stop_server() or restart the R session.
>   Rendering content/post/2023-03-14-rmarkdown-test/index.Rmd... Done.

> Serving the directory . at http://localhost:4321.
>
> Launched the hugo server in the background (process ID: 6646). To stop it, call blogdown::stop_server() or restart the R session.
>
> Rendering content/post/2023-03-14-rmarkdown-test/index.Rmd... Done.

[<img src="https://simpleicons.org/icons/github.svg" style="max-width:15%;min-width:40px;float:right;" alt="Github repo" />](https://github.com/yihui/hugo-xmin)

# Ch01

This is a "hello world" example website for the [**blogdown**](https://github.com/rstudio/blogdown) package. The theme was forked from [jrutheiser/hugo-lithium-theme](https://github.com/jrutheiser/hugo-lithium-theme) and modified by [Yihui Xie](https://github.com/yihui/hugo-lithium).

```r
summary(Orange)
```

# Ch02

