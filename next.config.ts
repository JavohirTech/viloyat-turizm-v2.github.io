import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['picsum.photos', 'g5wnssm9-8000.euw.devtunnels.ms'],
  },
};

export default withNextIntl(nextConfig);
