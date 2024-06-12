/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.bentogridgenerator.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/admin/*'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/admin' },
    ],
  },
};
