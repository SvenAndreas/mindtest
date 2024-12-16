/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: async () => {
        return [
          {
            source: '/about',
            destination: '/About/screens',
          },
        ];
      },
};

export default nextConfig;
