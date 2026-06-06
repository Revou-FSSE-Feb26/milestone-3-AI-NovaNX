
const nextConfig = {

  images: {
    remotePatterns: [
    {
      protocol: "https",
      hostname: "api.escuelajs.co"
    },
    {
      protocol: "https",
      hostname: "i.imgur.com"
    },
    {
      protocol: "https",
      hostname: "picsum.photos"
    }],

    dangerouslyAllowSVG: true
  }
};

export default nextConfig;
