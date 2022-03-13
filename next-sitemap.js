module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://hungrybabyblog.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
      },
    ],
  },
  sitemapSize: 1000,
};
