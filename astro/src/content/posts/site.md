---
title: 建站历程
published: 2025-12-03
pinned: true
description: 记录个人建站的历程与经验分享。
tags: [创作]
category: 创作
licenseName: "署名 4.0 国际 (CC-BY-4.0)"
author: "落枫晨"  # 请根据需要替换为作者名字
sourceLink: "https://www.haoryou.com"   # 请根据需要替换为源链接
draft: false
cover: /img/adc9b3fe/cover.avif
comment: true
---


# 浅谈我的建站历程

## 2023年

### 2023年11月
2023年11月，第一次接触linux。对linux一无所知，也不懂什么叫发行版。
幸运的是，Windows自带了了个虚拟化平台**Hyper-V**，并且可以开启**WSL**，也就是适用于Linux的Windows子系统。
这大大降低了配置Linux环境的门槛。刚开始的时候，我选择了**Ubuntu**。
![](/img/adc9b3fe/mswsl.avif)
>
>注意：使用WLS需要开启Hyper-V，并开启 Hyper-V管理工具和 Hyper-V 平台
>     

刚刚接触命令行时，非常吃力，不过，恰好那时**CHATGPT**开始流行，他帮我解决很多难题。

国内可以选择**腾讯元宝**，也挺不错的。

---------

<div style="display: flex; justify-content: space-between;">
  <img src="/img/adc9b3fe/openaichatgpt.avif" alt="ChatGPT" style="max-width: 48%; height: auto;">
  <img src="/img/adc9b3fe/tecentyuanbao.avif" alt="腾讯元宝" style="max-width: 48%; height: auto;">
</div>

## 2024年

### 2024年1月

接下来，我接触了面板工具，最初使用的是**宝塔**。但它的很多好用功能无法使用，甚至登录面板时必须绑定手机号码，这让我有些不舒服，于是决定放弃。

在寻找替代品时，我发现了1Panel，界面更简洁、实用，基本能满足我的需求，我也用了很长时间。
> 作者写道：商业化的东西还是少用比较好，能用docker就用，除了方便点其他的也就一般般.....

![](/img/adc9b3fe/1panel.avif)


### 2024年2月

春节时，我手里有点压岁钱了，便购入了一些电脑配件。

| 组件                    | 描述                          |
|-------------------------|-------------------------------|
| 处理器 (CPU)         | E5 2667v3                     |
| 主板 X79               | JINGYUEx79                    |
| 内存 (RAM)           | DDR3 ECC 16GB x 4             |
| 电源                 | 500W 旧电源                   |
| 固态硬盘 (SSD)      | 512GB SSD                     |
| 机械硬盘 (HDD)       | 512GB 机械硬盘                |
| 显卡 (GPU) | 显卡启动 |

还申请了**公网IP**，并开始学习搭建Minecraft（MC）服务器，和朋友们一起联机。


> 后来，除了硬盘，其他配件便便宜转给了朋友，自己换了E5 2680v4

这是现在使用的服务器配置

| 配件           | 描述              |
| :------------- | :---------------- |
| 处理器 (CPU)   | E5 2680v4         |
| 主板           | 华南X3D4 X99      |
| 内存 (RAM)     | DDR4  16G 3200 X2 |
| 电源           | 全汉250W          |
| 固态硬盘 (SSD) | 512GB SSD         |
| 机械硬盘 (HDD) | 512GB HDD         |
| 显卡 (GPU)     | 无显卡启动        |

>E5 v4的功耗相比v2低了很多，虽然部分cpu挑内存，只能用ddr4的内存条，但总体而言性能和功耗好了很多。
>
>当然如果有条件，可以选用更加现代化的Cpu，如12100F。

### 2024年3月

有了服务器和公网IP之后，我开始了建站之旅。最开始我使用的是**WordPress**，但发现很多主题都是精简版的，功能不全。稍微一些高级功能就需要升级。

<div style="display: flex; justify-content: space-between;">
  <img src="/img/adc9b3fe/wordpress.avif" alt="Worodpress" style="max-width: 48%; height: auto;">
  <img src="/img/adc9b3fe/wordpressastro.avif" alt="Wordpress主题" style="max-width: 48%; height: auto;">
</div>
我还尝试过一些破解主题，比如**Astro**，但最终发现WordPress的区块编辑器让我感觉有些生硬，不太习惯。也担心这些破解主题可能会有后门，尽管我已经加了防火墙，但还是不太放心，于是用了一段时间后就放弃了。

之后，我找到了**Argon**主题，虽然配置完成后看起来很不错，但有些细节我仍不太满意。比如说，整体是块状设计，尤其是页脚部分，设计搭配有些不太协调，不过还是用了好一段时间。
![](/img/adc9b3fe/wordpressthemeargon.avif)
> 在此过程中，我也尝试过**Halo**，但由于Java性能问题、并发处理和Mysql查询等原因，最终还是放弃了。

<div style="display: flex; justify-content: space-between;">
  <img src="/img/adc9b3fe/halo.avif" alt="Halo" style="max-width: 48%; height: auto;">
  <img src="/img/adc9b3fe/halothemehao.webp" alt="Hao主题" style="max-width: 48%; height: auto;">
</div>

### 外网访问

配置好服务器后，我终于能通过公网访问了。然而，运营商封了宽带的80和443端口，而且分配给我的公网IP也是动态的。于是，我使用了**DDNS**工具，把分配的域名动态解析到我的域名上。虽然这样访问还是带有点小尾巴，但总算能勉强使用。

> 家庭服务器性能很强，但每月的电费多了好几十，考虑到一年下来费用也不小，我还是觉得有些吃力。

### 2024年5月

这时候，阿里云推出了99元建站计划，耐不住手痒，我也入手了一个。

![](/img/adc9b3fe/aliyun99.avif)

那时我还没有域名，就随便注册了**ourgot.top**。最开始，我是想注册**weget.top**，但已经被别人注册了，于是选择了这个。

> 其实，这个域名是有含义的，懂英语的人应该能理解。
> 至于为什么没选.com，主要是因为那时候对这些不太了解，不知道.com的SEO权重和友好性要比.top强很多。其实更大原因是囊中羞涩，99元的服务器一年，而com域名就要90多元，觉得有点贵。不过现在回头看，选择这个域名也挺好，嘻嘻。

---

### 2025年7月

我开始着手折腾**静态博客**，并选择了**Hexo**框架与**Butterfly**主题。

<div style="display: flex; justify-content: space-between;">
  <img src="/img/adc9b3fe/hexo01.avif" alt="Hexo框架" style="max-width: 48%; height: auto;">
  <img src="/img/adc9b3fe/butterfly01.avif" alt="Butterfly主题" style="max-width: 48%; height: auto;">
</div>

起初我完全没有基础，只能按部就班地跟着教程走。之前除了在Github上下载一些资源，几乎没接触过Github仓库。
从零开始学习**Git**和**VSCode**，逐步掌握了如何通过命令行初始化仓库、拉取代码和发布版本，虽然刚开始有些艰难，但至少能勉强使用。

<div style="display: flex; justify-content: space-between;">
  <img src="/img/adc9b3fe/git.avif" alt="Git" style="max-width: 48%; height: auto;">
  <img src="/img/adc9b3fe/vscode.avif" alt="Vscode" style="max-width: 48%; height: auto;">
</div>

后来，我接触了VSCode的**插件**和GitHub提供的**CodeSpace**，大大提高了我的开发效率，折腾起来也更加得心应手。

---

### 托管平台

最开始，我选择了**Cloudflare**作为托管平台。Cloudflare的**Pages**服务对于个人网站来说已经足够用了。

<div style="display: flex; justify-content: space-between;">
  <img src="/img/adc9b3fe/cloudflare.avif" alt="CloudFlare" style="max-width: 48%; height: auto;">
  <img src="/img/adc9b3fe/cloudflarepages.avif" alt="CloudFlare Pages" style="max-width: 48%; height: auto;">
</div>

然而，由于**Cloudflare**的CDN节点对大陆用户并不友好，访问速度较慢。为了改善这一点，我尝试了使用优选域名等方式，但依然未能得到满意的结果。

<div style="display: flex; justify-content: space-between;">
  <img src="/img/adc9b3fe/itdoghttp02.avif" alt="CloudFlare测速" style="max-width: 48%; height: auto;">
  <img src="/img/adc9b3fe/itdoghttp01.avif" alt="CloudFlare优选测速" style="max-width: 48%; height: auto;">
</div>

于是，我转向了另一个托管平台——**Vercel**。Vercel的节点分布在多个地区，包括香港和新加坡，其延迟相比Cloudflare有了明显改善，**Vercel的Ping值大约在60-120ms之间**。于是我将我的博客迁移到了Vercel，尽管默认的域名在大陆无法使用，但绑定自定义域后问题得以解决。

在Vercel上，我不断调整优化，尽管服务器位于香港，且使用者较多，导致高峰期的响应速度不理想。不过我自己也尝试了选择边缘节点，虽然这样做较为麻烦，自动化部署也有点复杂。

通过使用社区提供的优选CNAME域名，速度确实有了提升，但心里依然不太放心。最终，我开始萌生想要使用大陆服务器的想法。


<div style="display: flex; justify-content: space-between;">
  <img src="/img/adc9b3fe/vercel-cons.avif" alt="Vercel服务" style="max-width: 48%; height: auto;">
  <img src="/img/adc9b3fe/itdoghttp00.avif" alt="Vercel测速" style="max-width: 48%; height: auto;">
</div>

> 我个人有些“洁癖”，不太喜欢使用那些不开源的、个人搭建的或商业化程度过高的服务。

---

### 2025年10月

在10月末，我购买了一个名为**天庭网络**的服务器，配置是4h4g20m，年费300元。最初使用时感觉还不错，但几天后，服务器出现丢包现象，响应速度大幅下降。

客服是QQ客服，最初的沟通也是拖延不决。最后，我通过提交工单申请了退款，退款过程中还需要注销账号，并注明停止合作等手续。整个过程等了大约20多天，但最终顺利退款。

> 尽管这家公司已经运营了10多年，但它可能更适合做对接工作，对于个人用户来说，还是不太推荐尝试。


<div style="display: flex; justify-content: space-between;">
  <img src="/img/adc9b3fe/ttweb02.avif" alt="图片1" style="max-width: 48%; height: auto;">
  <img src="/img/adc9b3fe/ttweb01.avif" alt="图片2" style="max-width: 48%; height: auto;">
</div>
---

### 2025年11月

今年双十一，腾讯云推出了优惠活动。**.com**域名2年仅85元，**2h4g6m轻量应用服务器3年仅528元**，我果断入手了。
购买了域名并配置了环境，至今已是过去一个月的事情。既然已经拥有了服务器，我决定不再使用**静态博客**，于是安装了**Halo**并开始使用，配置了几天后，效果还算令人满意，基本达到了我的使用需求。

<div style="display: flex; justify-content: space-between;">
  <img src="/img/adc9b3fe/qcloudser01.avif" alt="3年528" style="max-width: 48%; height: auto;">
  <img src="/img/adc9b3fe/qcloudser02.avif" alt="腾讯服务器" style="max-width: 48%; height: auto;">
</div>

### Edgeone
这段时间，**Edgeone**成为了不少人讨论的焦点。我在某鱼购买了一个兑换码并开始使用。
第一次配置时有些不太适应，但熟悉后就觉得还不错。毕竟，谁不喜欢站点有免费的CDN加速呢？

<div style="display: flex; justify-content: space-between;">
  <img src="/img/adc9b3fe/eo02.avif" alt="EdgeOne" style="max-width: 48%; height: auto;">
  <img src="/img/adc9b3fe/itdoghttp03.avif" alt="EdgeOne测速" style="max-width: 48%; height: auto;">
</div>

---

# 回退静态博客

有一天，我无聊时用HTTP测试了站点的速度，发现结果是浅绿色的。虽然打开速度没多大变化，但我还是有点不舒服，便想尝试换回**WordPress**。
然而，**WordPress**的问题也很多：可用的主题不好看，自己开发的难度也太大；而且，**PHP**的资源占用让人很难忍受，所以我放弃了。

<div style="display: flex; justify-content: space-between;">
  <img src="/img/adc9b3fe/itdoghttp04.avif" alt="Wordpress测速" style="max-width: 48%; height: auto;">
  <img src="/img/adc9b3fe/serstatus.avif" alt="服务器占用" style="max-width: 48%; height: auto;">
</div>

另一方面，测试HTTP时发现服务器的CPU几乎满负荷运行，达到了接近100%。这让我更加不能接受。后来想了想，可能是因为缺乏缓存机制，果然，当我配置了缓存之后，性能得到了明显提升。

> 尽管如此，我还是下定决心回到静态博客的道路上。**Halo**的商业化做得有点过度，这让我不太喜欢。
>
现在使用腾讯云提供的**EdgeOnePages**提供静态页面托管服务
<div style="display: flex; justify-content: space-between;">
  <img src="/img/adc9b3fe/edgeonepages.avif" alt="页面测速" style="max-width: 48%; height: auto;">
  <img src="/img/adc9b3fe/eopagesd.avif" alt="EdgeOne部署" style="max-width: 48%; height: auto;">
</div>

>现在回想，可能是因为**Edgeone**对免费版用户进行了下载速度限制，但对于静态博客来说也足够了。

这次我进行了域名备案，成功使用**Edgeone**的Pages，访问速度自然得到了显著提升。

![](/img/adc9b3fe/itdoghttp03.avif)


---

可能每个人的经历都不同，但对我来说，最重要的就是折腾的过程，和其中带来的乐趣。

---

所以才有了这篇文章。**我想，如果我能够坚持下去，这对我来说将是非常宝贵的财富。**


# 每日一图

![](/img/adc9b3fe/linedog.avif)