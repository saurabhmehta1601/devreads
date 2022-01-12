const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  pageExtensions: ["js", "jsx", "md", "mdx"],
  webpack: function (config) {
    config.resolve.alias = {
      src: path.join(__dirname, "src"),
      ...config.resolve.alias,
    };
    return config;
  },
};

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [require("remark-prism")],
    rehypePlugins: [],
  },
});

module.exports = withMDX(nextConfig);
