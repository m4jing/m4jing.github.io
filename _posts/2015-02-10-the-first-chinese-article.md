---
layout: post
title: 中文博客内容测试
categories: chinese
tags: data program
excerpt: 这是整个站点的第一篇中文博客。看看效果如何。
blog_class: active
---

{{ page.title }}
================

<p class="meta">2015-02-10T17:48:23+08:00 - 北京</p>

这是整个站点的第一篇中文博客。看看效果[如何]({{ page.url }})。

第14章 [我只给自己一个假期]({{ site.url }})

<!-- <div class="container"> -->
  <div style="position:relative; color:white;">
    <img src="/images/13-14-km.jpg" alt="13.14-km.jpg">
    <!-- <span style="position:absolute; bottom:-5px; left:0; line-height:1.5; width:260px; background-color:rgba(0,0,0,0.5);">文字文字文字文字</span> -->
    <span style="position:absolute; bottom:30px; left:20%; line-height:1.5; width:130px; background-color:rgba(0,0,0,0.5);">Just keep running.</span>

  </div>
<!-- </div> -->
<br />
![13.14 Kilometers](/images/13-14-km.jpg)

<img src="/images/13-14-km.jpg" alt="13.14 Kilometers" />

<img src="/images/13-14-km.jpg" class="img-responsive" alt="13.14 Kilometers" />
<img src="/images/13-14-km.jpg" class="img-responsive img-thumbnail" alt="13.14 Kilometers" />
<img src="/images/13-14-km.jpg" class="img-responsive img-circle img-thumbnail" alt="13.14 Kilometers" />

2006 年，我 25 岁，那时的我认为：

如果让你用一种动物来形容自己，你觉得什么比较合适，为什么？狗。很贱很贱的狗，怎么弄都死不了，整天乐呵呵的。保持良好的贱狗心态有助 于正视自己。

{% highlight ruby linenos %}
def show
    @widget = Widget(params[:id])
    respond_to do |format|
        format.html # show.html.erb
        format.json { render json: @widget }
    end
end
{% endhighlight %}

我曾经就答应过你，我会坚强起来，不依靠你不依靠妈妈，完全开始靠自己。 现在我更能体会到朋友的意义：帮你弥补缺失生命缺失记忆的亲人。 今天永远对明天充满幻想，才有坚定的信念活到后天。 现在我们越走越远，越孤单越害怕，偶尔对称的笑容也会幸福很久。 我们都说要做有追求的人，最后往往发现周围只剩下了自己。 能鼓励你的人也只有自己。

{% highlight python linenos %}
# cProfile example
# python -m cProfile filename.py
# %run -m cProfile filename.py

import numpy as np
from numpy.linalg import eigvals

def run_experiment(niter=100):
    K = 100
    results = []
    for _ in xrange(niter):
        mat = np.random.randn(K, K)
        max_eigenvalue = np.abs(eigvals(mat)).max()
        results.append(max_eigenvalue)
    return results

some_results = run_experiment()
print 'Largest one we saw: %s' % np.max(some_results)

{% endhighlight %}

25岁了。人生漫漫，渐渐就涨过了25格。爸爸曾经在我18岁的时候对我说，从今天起，你就是一个大人，请不要再指望我的任何帮助。

好的，好的。我曾经就答应过你，我会坚强起来，不依靠你不依靠妈妈，完全开始靠自己。

上一周，陆续发生了很多很多事情。所有的人，亲人也好，朋友也好，同事也好，一面之缘也好，纷纷在问我，关心我。在这里，对所有的人表示感谢。
