/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['loremflickr.com', 'picsum.photos'],
      },
      output: 'export',
      distDir: '_static',
      images: {
        unoptimized: true
      }
    
}

module.exports = nextConfig
