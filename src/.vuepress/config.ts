import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "OnePlayer",
      description: "A better offline music player",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "OnePlayer",
      description: "一款功能强大、简洁好用的本地音乐播放器",
    },
  },

  theme,

  // 添加自动语言检测
  head: [
    [
      'script',
      {},
      `
      (function() {
        var userLang = navigator.language || navigator.userLanguage;
        if (userLang.indexOf('zh') === 0 && location.pathname === '/') {
          location.pathname = '/zh/';
        }
      })();
      `
    ]
  ],

  markdown: {
    links: {
      externalAttrs: {
        target: '_blank',
        rel: 'noopener noreferrer'
      }
    }
  }
  // Enable it with pwa
  // shouldPrefetch: false,
});