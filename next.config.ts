import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['picsum.photos', 'namturapi.fazo-software.uz'],
  },
};

export default withNextIntl(nextConfig);
