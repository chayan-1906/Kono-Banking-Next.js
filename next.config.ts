import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'bfsi.eletsonline.com',
            },
        ],
    },
};

export default nextConfig;
