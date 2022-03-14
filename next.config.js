module.exports = {
  images: {
    domains: ["ik.imagekit.io", "images.unsplash.com", "static.ghost.org"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `default-src * ${
              process.env.NODE_ENV === "development" && "data: 'unsafe-eval'"
            }; script-src 'self' https://www.googletagmanager.com ${
              process.env.NODE_ENV === "development" && "data: 'unsafe-eval'"
            }; img-src * data: blob:; style-src * data: 'unsafe-inline'; font-src 'self' https://fonts.gstatic.com https://fonts.googleapis.com data: 'unsafe-inline'; object-src 'self' blob:`,
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
        ],
      },
    ];
  },
};
