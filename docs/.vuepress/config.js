const utils = require('./utils')

module.exports = {
  title: "Bai Bookmarks",
  description: "生有涯而知无涯，懂得取舍才是学习之道",
  base: '/bookmarks/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ],
    [
      'script',
      {},
      `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?c2f8fd7487a1a0a4b7d3a928394ba615";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
      `
    ]
  ],
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: 'API网站',
        link: '/apiWebsite/'
      },
      {
        text: '实用网站',
        link: '/website/'
      },
      {
        text: '常用库与插件',
        link: '/library/'
      },
      {
        text: '常用工具',
        link: '/tools/'
      },
      {
        text: '教程与书籍',
        link: '/teachbooks/'
      },
      {
        text: '文章收集',
        link: '/article/'
      }, 
      {
        text: '资源网站',
        link: '/assets/'
      },
      {
        text: '友情链接',
        link: '/links/'
      },
      {
        text: '个人相关',
        link: '/personal/'
      },
    ],
    sidebar: utils.inferSiderbars(),
    lastUpdated: '上次更新',
    repo: 'baijingfeng/bookmarks',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    sidebarDepth: 4
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public'
      }
    }
  },
}