/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The old site had /projects and /contact pages. This version is one
  // scrolling page, so send those URLs to the matching section.
  async redirects() {
    return [
      { source: "/projects", destination: "/#projects", permanent: false },
      { source: "/contact", destination: "/#contact", permanent: false },
    ];
  },
};

module.exports = nextConfig;
