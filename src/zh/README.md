---
home: true
icon: home
title: Home
heroImage: /assets/image/oneplayer-product.png
# heroImageStyle:
#   width: 200px
#   height: auto
#   max-width: 100%
#   border-radius: 50%
#   box-shadow: 0 5px 18px rgba(0,0,0,0.2)
# bgImage: /assets/image/oneplayer-product.png
# bgImageDark: https://theme-hope-assets.vuejs.press/bg/6-dark.svg
bgImageStyle:
  background-attachment: fixed
heroText: One Player
tagline: 一款功能强大、简洁好用的本地音乐播放器
actions:
  - text: App Store下载
    icon: lightbulb
    link: https://apps.apple.com/cn/app/id1614115295
    type: primary

  - text: 使用指南
    link: ./guide/

highlights:

  - header: 支持几乎所有音频格式
    description: MP3、AAC、 WAV、FLAC、 AIFF、M4R、m4a、ape、ogg、opus、wma、dsf、dsd等多种公开格式，支持 Hi-Res 音质
    image: /assets/image/music-format.png
  
  - header: 导入歌曲超方便
    # description: MP3、AAC、 WAV、FLAC、 AIFF、M4R、m4a、ape、ogg、opus、wma、dsf、dsd等多种公开格式，支持 Hi-Res 音质
    image: /assets/image/wifi-import.png
    # bgImage: https://theme-hope-assets.vuejs.press/bg/5-light.svg
    # bgImageDark: https://theme-hope-assets.vuejs.press/bg/5-dark.svg
    highlights:
      - title: Wi-Fi导入
        # icon: window-maximize
        details: 将手机和电脑连接同一个wifi网络，就可以很方便地导入歌曲
        link: https://theme-hope.vuejs.press/zh/guide/layout/navbar.html

      - title: 数据线导入
        # icon: fas fa-window-maximize fa-rotate-270
        details: 没有wifi，也可以使用数据线导入
        link: https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html

      - title: 从"文件"App导入
        # icon: fas fa-window-maximize fa-rotate-270
        details: 可以直接导入手机本地"文件"App中的音乐
        link: https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html

      - title: 导入手机本地iTunes/iPod音乐库的本地音乐
        # icon: person-chalkboard
        details: 支持导入手机本地iTunes/iPod音乐库的本地音乐
        link: https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html 

      - title: 通过AirDrop导入
        # icon: object-group
        details: 支持导入通过AirDrop分享的音乐
        link: https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html 

  - header: 管理你的曲库
    image: /assets/image/manager-music-library.png
    highlights:
      - title: 多种列表
        details: 支持按歌曲、专辑、播放列表、艺人，文件等类型展示管理播放你的所有本地音乐
      - title: 多种排序方式
        details: 可以按歌名、歌手名、专辑名、导入时间、播放次数、最近播放等进行排序
      - title: 支持编辑歌曲信息
        details: 支持编辑修改歌名、歌手、专辑、封面、歌词，以及其它更多歌曲标签信息
      - title: Ai匹配封面、自动匹配封面
        # details: 播放管理你的所有本地音乐，显示歌名、歌手、专辑名

  - header: 更多功能
    image: /assets/image/features.svg
    features:
      - title: 目录页面
        icon: network-wired
        details: 自动生成目录页以及开箱即用的目录组件
        link: https://theme-hope.vuejs.press/zh/guide/feature/catalog.html

      - title: 浏览量与评论
        icon: comment-dots
        details: 配合 4 个评论服务开启阅读量统计与评论支持
        link: https://theme-hope.vuejs.press/zh/guide/feature/comment.html

      - title: 文章信息
        icon: circle-info
        details: 为你的文章添加作者、写作日期、预计阅读时间、字数统计等信息
        link: https://theme-hope.vuejs.press/zh/guide/feature/page-info.html

      - title: 文章加密
        icon: lock
        details: 你可以为你的特定页面或特定目录进行加密，以便陌生人不能随意访问它们
        link: https://theme-hope.vuejs.press/zh/guide/feature/encrypt.html

      - title: 搜索支持
        icon: search
        details: 支持 docsearch 和基于客户端的搜索
        link: https://theme-hope.vuejs.press/zh/guide/feature/search.html

      - title: 代码块
        icon: code
        details: 自定义代码块主题、行号、行高亮、复制按钮等
        link: https://theme-hope.vuejs.press/zh/guide/feature/code-block.html

      - title: 图片预览
        icon: image
        details: 像相册一样允许你浏览、缩放并分享你的页面图片
        link: https://theme-hope.vuejs.press/zh/guide/feature/photo-swipe.html

copyright: false
footer:  版权所有 © 2019-2024 OnePlayer

---


<div style="display: flex; flex-direction: column; align-items: center; text-align: center; padding: 20px; border-radius: 8px;">

  <h1 style="font-size: 2em; margin-bottom: 0.5em;">自由聆听音乐，从此刻开始</h1>
  <!-- <p style="font-size: 1.2em; margin-bottom: 1em;">在这里，我们只关注能否帮你记录更多想法，打造知识川流。<br>flomo = flow + memo</p> -->
  <a href="https://apps.apple.com/cn/app/id1614115295" style="display: inline-block; padding: 0.5em 1.5rem; background-color: var(--theme-color); color: var(--white); text-decoration: none; border-radius: 2rem; font-size: 1.2em; margin-top: 2em; margin-bottom: 5em;">下载体验</a>
</div>

<!-- 添加底部元素 -->
<div class="footer">
  <div class="footer-logo">
    <img src="/logo.png" alt="Logo" style="width: 50px;">
    <span class="footer-logo-text">OnePlayer</span>
  </div>

  <div>
    <h3>产品</h3>
    <ul style="list-style: none; padding: 0;">
      <li><a href="https://apps.apple.com/cn/app/id1614115295" style="color: var(--text-color);">手机端</a></li>
      <li><a href="#privacy" style="color: var(--text-color);">隐私协议</a></li>
      <li><a href="#terms" style="color: var(--text-color);">用户协议</a></li>
    </ul>
  </div>

  <div>
    <h3>资源</h3>
    <ul style="list-style: none; padding: 0;">
      <li><a href="./guide/" style="color: var(--text-color);">使用指南</a></li>
      <li><a href="#quickstart" style="color: var(--text-color);">快速上手</a></li>
      <li><a href="#usage" style="color: var(--text-color);">常见用法</a></li>
      <li><a href="#mindset" style="color: var(--text-color);">思维方式</a></li>
      <li><a href="#api" style="color: var(--text-color);">API 文档</a></li>
    </ul>
  </div>

  <div>
    <h3>联系我们</h3>
    <ul style="list-style: none; padding: 0;">
      <li><a href="mailto:support@example.com" style="color: var(--text-color);">Email</a></li>
      <li><a href="#support" style="color: var(--text-color);">在线支持</a></li>
      <li><a href="#weibo" style="color: var(--text-color);">微博</a></li>
      <li><a href="#jike" style="color: var(--text-color);">即刻</a></li>
      <li><a href="#xiaohongshu" style="color: var(--text-color);">小红书</a></li>
    </ul>
  </div>

  <div>
    <h3>团队</h3>
    <ul style="list-style: none; padding: 0;">
      <li><a href="#about" style="color: var(--text-color);">关于我们</a></li>
      <!-- <li><a href="#company" style="color: var(--text-color);">上海仙带网络科技有限公司</a></li> -->
      <!-- <li><a href="#icp" style="color: var(--text-color);">沪ICP备17043019号-3</a></li> -->
      <!-- <li><a href="#public-security" style="color: var(--text-color);">沪公网安备31010102007209</a></li> -->
    </ul>
  </div>

</div>

<style>
  :root {
    --text-color: black;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --text-color: white;
    }
  }

  /* 根据网站设置判断暗黑模式 */
  :root {
    --text-color: {{ $isDarkMode ? 'white' : 'black' }};
  }

  .footer {
    display: flex;
    justify-content: space-around;
    padding: 20px 0;
    color: var(--text-color);
    flex-wrap: wrap;
    align-items: flex-start; /* 顶对齐 */
  }

  .footer-logo {
    width: 100%;
    text-align: left;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  }

  .footer-logo-text {
    margin-left: 10px;
    font-size: 1.2em;
    font-weight: bold;
  }

  @media (min-width: 600px) {
    .footer-logo {
      width: auto;
      text-align: left;
      margin-bottom: 0;
    }
  }
</style>

<style>
  :root {
    --button-color: white;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --button-color: black;
    }
  }

  /* 根据网站设置判断暗黑模式 */
  :root {
    --button-color: {{ $isDarkMode ? 'black' : 'white' }};
  }

</style>