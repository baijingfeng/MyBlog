const utils = require('./utils')

module.exports = {
  title: "Bai Bookmarks",
  description: "个人收藏夹",
  base: '/bookmarks/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
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
        text: '常用库与工具',
        link: '/library/'
      },
      {
        text: '其他网站',
        link: '/website/'
      },
      {
        text: '友情链接',
        link: '/others/'
      },
      // {
      //   text: '最近阅读',
      //   link: '/diary/read'
      // },
      // {
      //   text: '文章',
      //   link: '/article/'
      // },
      // { text: '工具', link: 'https://google.com' },
      // {
      //   text: '面试',
      //   link: '/interview/'
      // },
      // {
      //   text: '内推',
      //   link: '/job/'
      // },
      // {
      //   text: 'Blog',
      //   link: '/blog/'
      // }
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