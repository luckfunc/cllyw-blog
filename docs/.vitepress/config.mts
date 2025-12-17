import { defineConfig } from "vitepress";

export default defineConfig({
  title: "cllyw's blog",
  description: "学习心得记录",
  ignoreDeadLinks: true,
  base: "/cllyw-blog/",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "笔记", link: "/notes/" },
      { text: "案例", link: "/projects/" },
    ],

    sidebar: {
      // 笔记部分的侧边栏
      "/notes/": [
        {
          text: "学习笔记合集",
          link: "/notes/",
          items: [
            {
              text: "HTML 学习",
              link: "/notes/html/",
              items: [
                { text: "语义化标签", link: "/notes/html/semantic" },
                { text: "表单设计", link: "/notes/html/forms" },
                { text: "无障碍访问", link: "/notes/html/accessibility" },
              ],
            },
            {
              text: "CSS 学习",
              link: "/notes/css/",
              items: [
                { text: "Flex 布局", link: "/notes/css/flex" },
                { text: "Grid 布局", link: "/notes/css/grid" },
                { text: "CSS 动画", link: "/notes/css/css-animation" },
              ],
            },
            {
              text: "JavaScript 学习",
              link: "/notes/JavaScript/",
              items: [
                { text: "基础语法", link: "/notes/JavaScript/basic-syntax" },
                {
                  text: "DOM 操作",
                  link: "/notes/JavaScript/DOM-manipulation",
                },
                {
                  text: "异步编程",
                  link: "/notes/JavaScript/async-programming",
                },
              ],
            },
          ],
        },
      ],

      // 项目部分的侧边栏
      "/projects/": [
        {
          text: "实战项目案例",
          link: "/projects/",
          items: [
            {
              text: "项目一",
              link: "/projects/project1/",
              items: [{ text: "项目介绍", link: "/projects/project1/intro" }],
            },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/your-username" }, // 替换为实际链接
    ],
  },
});
