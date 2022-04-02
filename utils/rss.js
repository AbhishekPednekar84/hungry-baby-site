import { Feed } from "feed";
import fs from "fs";

const baseUrl = "https://hungrybabyblog.com";
const currentYear = new Date().getFullYear();

export const generateRSSFeed = (articles) => {
  const feed = new Feed({
    title: "The Hungry Baby Blog",
    description:
      "Meal ideas for toddlers and beyond. Make mealtime fun with our easy, healthy and delicious recipes. Explore breakfast, lunch, dinner, snack or dessert ideas for your child. While a lot of the posts focus on Indian recipes for toddlers, you will also find a whole bunch of easy and fun meal ideas that you can try no matter where you are.",
    id: baseUrl,
    link: baseUrl,
    language: "en-IN",
    image:
      "https://ik.imagekit.io/ykidmzssaww/Hungry-Baby/site-images/thubb-icon_zoCbYRVTO.png",
    favicon: "/favicon.ico",
    copyright: `${currentYear} - All rights reserved`,
    feedLinks: {
      json: `${baseUrl}/json`,
      atom: `${baseUrl}/atom`,
    },
    author: {
      name: "Team HuBB",
      email: "hungrybaby.blog@gmail.com",
      link: `${baseUrl}/about`,
    },
  });

  articles.map((article) => {
    feed.addItem({
      title: article.title,
      id: `${baseUrl}/recipe/${article.slug}`,
      link: `${baseUrl}/recipe/${article.slug}`,
      description: article.excerpt,
    });
  });

  feed.addCategory("Food");

  fs.writeFileSync("public/rss.xml", feed.rss2());
};
