import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      text: "案例",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "文档",
      icon: "book",
      prefix: "guide/",
      link: "guide/",
      children: "structure",
    },
    "faq",
    {
      text: "音频百科",
      icon: "music",
      prefix: "audio-encyclopedia/",
      link: "audio-encyclopedia/",
      children: "structure",
    },
  ],
});
