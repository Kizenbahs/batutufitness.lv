/// <reference types="vite/client" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import viteCompression from 'vite-plugin-compression';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
    visualizer({
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.svg',
        'favicon-16x16.png',
        'favicon-32x32.png',
        'apple-touch-icon.png',
        'batutu-fitness-icon.png',
        'image.webp'
      ],
      manifest: {
        name: 'Batutu Fitness',
        short_name: 'Batutu Fitness',
        description: 'Batutu fitness grupu nodarbības Rīgā un Piņķos',
        theme_color: '#FBA518',
        background_color: '#000000',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'favicon-16x16.png',
            sizes: '16x16',
            type: 'image/png'
          },
          {
            src: 'favicon-32x32.png',
            sizes: '32x32',
            type: 'image/png'
          },
          {
            src: 'apple-touch-icon.png',
            sizes: '180x180',
            type: 'image/png'
          },
          {
            src: 'batutu-fitness-icon.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'batutu-fitness-icon.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: 'batutu-fitness-icon.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          }
        ],
        categories: ['fitness', 'health', 'lifestyle'],
        shortcuts: [
          {
            name: 'Nodarbības',
            url: '/sessions',
            icons: [{ src: 'favicon-32x32.png', sizes: '32x32' }]
          },
          {
            name: 'Maratons',
            url: '/marathon',
            icons: [{ src: 'favicon-32x32.png', sizes: '32x32' }]
          }
        ]
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /^https:\/\/batutufitness\.lv\/.*/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'api-cache',
              networkTimeoutSeconds: 5,
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 // 24 hours
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ],
        skipWaiting: true,
        clientsClaim: true,
        cleanupOutdatedCaches: true,
        navigationPreload: false,
        navigateFallback: 'index.html'
      },
      devOptions: {
        enabled: true,
        type: 'module',
        navigateFallback: 'index.html'
      }
    })
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'framer-motion': ['framer-motion'],
          'utils': ['@emailjs/browser', 'react-icons'],
        },
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.').at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(extType)) {
            extType = 'img';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log'],
      },
      format: {
        comments: false,
      },
    },
    reportCompressedSize: true,
    target: 'esnext',
  },
  server: {
    port: 3000,
    strictPort: true,
    host: 'localhost',
    open: false,
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: 3000,
      timeout: 120000,
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  preview: {
    port: 3000,
    strictPort: true,
    host: 'localhost',
    open: false
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
  },
}); 