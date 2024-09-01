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

  // Enable it with pwa
  // shouldPrefetch: false,
});