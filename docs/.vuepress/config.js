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
        text: '文章',
        link: '/article/'
      },
      {
        text: '其他网站',
        link: '/website/'
      },
      {
        text: '友情链接',
        link: '/links/'
      },
      {
        text: '个人小站',
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