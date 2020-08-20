const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const { createSecureHeaders } = require('next-secure-headers');

const nextConfig = {
  trailingSlash: false,
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  crossOrigin: 'anonymous',
  target: 'serverless',
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    register: true,
    dest: 'public',
    runtimeCaching,
  },
  env: {
    // Will be available on both server and client
    INTERNAL_SERVICE: process.env.INTERNAL_SERVICE,
    INTERNAL_SERVICE_NAME: process.env.INTERNAL_SERVICE_NAME,
    GA_TRACKING_ID: process.env.GA_TRACKING_ID,
    RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY,
    API_URL: process.env.API_URL,
    BASE_URL: process.env.BASE_URL,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: createSecureHeaders({
          contentSecurityPolicy: {
            directives: {
              defaultSrc: "'self'",
              styleSrc: ["'self'", "'unsafe-inline'", '*.googleapis.com', '*.jsdelivr.net'],
              scriptSrc: [
                "'self'",
                "'unsafe-inline'",
                "'unsafe-eval'",
                '*.google.com',
                '*.google-analytics.com',
                '*.googletagmanager.com',
                '*.gstatic.com',
                '*.zalo.me',
                '*.zdn.vn',
                '*.zaloapp.com',
                '*.facebook.net',
                '*.facebook.com',
                '*.googleapis.com',
                '*.jsdelivr.net',
              ],
              fontSrc: ["'self'", '*.gstatic.com'],
              mediaSrc: ['*'],
              imgSrc: ['*', 'data:', '*.jsdelivr.net'],
              scriptSrcElem: [
                "'self'",
                "'unsafe-inline'",
                '*.google.com',
                '*.google-analytics.com',
                '*.googletagmanager.com',
                '*.gstatic.com',
                '*.zalo.me',
                '*.zdn.vn',
                '*.zaloapp.com',
                '*.facebook.net',
                '*.facebook.com',
                '*.googleapis.com',
                '*.jsdelivr.net',
              ],
              frameSrc: ["'self'", '*.facebook.com', '*.zalo.me', '*.google.com'],
              connectSrc: ['*'],
            },
          },
          forceHTTPSRedirect: [true, { maxAge: 60 * 60 * 24 * 4, includeSubDomains: true }],
          referrerPolicy: 'same-origin',
        }),
      },
    ];
  },
  webpack(config, { isServer }) {
    config.module.rules.push(
      {
        test: /\.svg$/,
        issuer: {
          test: /\.(js|ts)x?$/,
        },
        use: [
          '@svgr/webpack',
          {
            loader: require.resolve('url-loader'),
            options: {
              limit: false,
              fallback: require.resolve('file-loader'),
              publicPath: `${nextConfig.assetPrefix || ''}/_next/static/images/`,
              outputPath: `${isServer ? '../' : ''}static/images/`,
              name: '[name]-[hash].[ext]',
              esModule: nextConfig.esModule || false,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        issuer: {
          test: /\.(js|ts)x?$/,
        },
        use: [
          {
            loader: require.resolve('url-loader'),
            options: {
              limit: false,
              fallback: require.resolve('file-loader'),
              publicPath: `${nextConfig.assetPrefix || ''}/_next/static/images/`,
              outputPath: `${isServer ? '../' : ''}static/images/`,
              name: '[name]-[hash].[ext]',
              esModule: nextConfig.esModule || false,
            },
          },
        ],
      },
    );

    return config;
  },
};

module.exports = withPWA(nextConfig);
