module.exports = {
  title: "绪山真寻Bot",
  description: "这是个绪山真寻Bot的部署教程",
  base: "/zhenxun_bot/",
  dest: "public",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  theme: "reco",
  themeConfig: {
    mode: "light",
    subSidebar: "auto",
    nav: [
      {
        text: "首页",
        link: "/",
        icon: "reco-home",
      },
      {
        text: "安装文档",
        link: "/docs/installation_doc/",
        icon: "reco-document",
      },
      {
        text: "使用文档",
        link: "/docs/help_doc/",
        icon: "reco-document",
      },
      {
        text: "开发文档",
        link: "/docs/development_doc/plugins",
        icon: "reco-document",
      },
      {
        text: "接口文档",
        link: "/docs/api_doc/plugins",
        icon: "reco-document",
      },
      {
        text: "更新日志",
        link: "/docs/update_log/",
        icon: "reco-suggestion",
      },
      {
        text: "FAQ",
        link: "/docs/faq/",
        icon: "reco-faq",
      },
      {
        text: "关于",
        link: "/blogs/about",
        icon: "reco-faq",
      },
      {
        text: "GitHub",
        link: "https://github.com/HibiKier/zhenxun_bot",
        icon: "reco-github",
      },
    ],
    sidebar: {
      "/docs/development_doc/": [
        ["plugins", "插件标准"],
        ["shop_handle", "商店操作"],
        ["task_control", "被动控制"],
        ["utils", "便捷工具/方法"],
      ],
      "/docs/installation_doc/": [
        ["", "准备工作"],
        {
          title: "安装Postgresql数据库",
          children: [
            ["psql_win.md", "Windows"],
            ["psql_ubuntu.md", "Ubuntu"],
          ],
        },
        ["zhenxun", "安装绪山真寻Bot"],
        ["qq", "安装无头qq"],
        ["screen", "Linux下持久化运行"],
        ["webui", "安装使用WebUi"],
      ],
      "/docs/help_doc/": [
        ["", "前言"],
        ["configs", "配置文件"],
        {
          title: "内置插件",
          children: [
            ["basic_plugins/superuser_plugins.md", "超级用户插件"],
            ["basic_plugins/admin_plugins.md", "管理员插件"],
            ["basic_plugins/common_plugins.md", "常规插件"],
            ["basic_plugins/other_plugins.md", "被动插件"],
            ["basic_plugins/shop_plugins.md", "商店"],
          ],
        },
        {
          title: "公开插件",
          children: [
            ["plugins_index.md", "插件索引"],
            ["public_plugins/superuser_plugins.md", "超级用户插件"],
            ["public_plugins/admin_plugins.md", "管理员插件"],
            ["public_plugins/common_plugins/common_plugins.md", "常规插件"],
            ["public_plugins/utils_plugins/utils_plugins.md", "一些工具"],
            ["public_plugins/genshin_plugins/genshin_plugins.md", "原神相关"],
            [
              "public_plugins/draw_card_plugins/draw_card_plugins.md",
              "抽卡相关",
            ],
            ["public_plugins/pic_plugins/pic_plugins.md", "来点好康的"],
            ["public_plugins/game_plugins/game_plugins.md", "群内小游戏"],
            ["public_plugins/other_plugins/other_plugins.md", "其他插件"],
          ],
        },
      ],
      "/docs/api_doc/": [
        ["plugins", "插件接口"],
        ["group", "群组接口"],
        ["request", "请求接口"],
        ["system", "系统接口"],
      ],
    },
    type: "blog",
    logo: "/logo.png",
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated",
    author: "hibikier",
    authorAvatar:
      "https://s.gravatar.com/avatar/27d0f38d5b14cf1ae60da1522a9a246e?s=80",
    record: "...",
    startYear: "2021",
  },
  markdown: {
    lineNumbers: true,
  },
  plugins: [
    [
      //鼠标点击特效 先安装在配置， npm install vuepress-plugin-cursor-effects --save
      "cursor-effects",
      {
        size: 3, // size of the particle, default: 2
        shape: ["circle"], // shape of the particle, default: 'star'
        zIndex: 999999999, // z-index property of the canvas, default: 999999999
      },
    ],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true, //vuepress插件PWA 先安装在配置 npm install @vuepress/pwa --save
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新",
        },
      },
    ],
    ["vuepress-plugin-code-copy", true], //复制代码块的插件 npm i vuepress-plugin-code-copy
    [
      "vuepress-plugin-nuggets-style-copy",
      {
        copyText: "复制代码",
        tip: {
          content: "复制成功",
        },
      },
    ],
    ["flexsearch-pro"],
    [
      "typing",
      {
        // 对应的标签选择器
        selector: ".hero p",
        // 打字内容
        strings: [
          "那只可爱的小小只bot是谁呢",
          "原来是可爱的绪山真寻呀",
          "为什么她会出现在这里呢",
          "因为这里是她的文档呀！",
        ],
        typeSpeed: 80, // 打字速度
        backSpeed: 50, // 回退速度
        showCursor: false, //关闭光标
        loop: true,
        loopCount: Infinity,
        showCursor: true,
        cursorChar: "|",
        autoInsertCss: true,
      },
    ],
  ],
}
