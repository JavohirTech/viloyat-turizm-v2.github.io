/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://namangan-turizm.uz', // Replace with your site's URL
  generateRobotsTxt: true, // Generates robots.txt file along with the sitemap
  changefreq: 'daily', // Optional: Specify how often your pages are likely to change
  priority: 0.7,       // Optional: Default priority of URLs
  sitemapSize: 5000,    // Optional: Split into multiple sitemaps if too large
  exclude: ['/admin/**', '/api/**'], // Optional: Exclude specific routes
};
