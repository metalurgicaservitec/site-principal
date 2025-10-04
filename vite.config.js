import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react({
      // Otimizações do React
      babel: {
        plugins: [
          // Plugin para otimizar imports
          ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
        ],
      },
    }),
  ],
  
  // Configurações de build
  build: {
    // Otimizações de build
    target: 'es2015',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'],
      },
      mangle: {
        safari10: true,
      },
    },
    
    // Configurações de chunk
    rollupOptions: {
      output: {
        manualChunks: {
          // Separar vendor libraries
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['framer-motion', 'lucide-react'],
          utils: ['react-hook-form', 'yup'],
        },
        // Otimizar nomes de chunks
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
    
    // Configurações de assets
    assetsInlineLimit: 4096, // 4kb
    cssCodeSplit: true,
    sourcemap: false,
    
    // Configurações de chunk size
    chunkSizeWarningLimit: 1000,
  },
  
  // Configurações de servidor de desenvolvimento
  server: {
    port: 3000,
    open: true,
    cors: true,
  },
  
  // Configurações de preview
  preview: {
    port: 4173,
    open: true,
  },
  
  // Resolver aliases
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@lib': resolve(__dirname, 'src/lib'),
    },
  },
  
  // Configurações de CSS
  css: {
    devSourcemap: false,
    postcss: {
      plugins: [
        require('autoprefixer'),
        require('cssnano')({
          preset: 'default',
        }),
      ],
    },
  },
  
  // Configurações de otimização
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'lucide-react',
      'react-hook-form',
      'yup',
    ],
    exclude: ['@vite/client', '@vite/env'],
  },
  
  // Configurações de define
  define: {
    __VUE_OPTIONS_API__: true,
    __VUE_PROD_DEVTOOLS__: false,
  },
  
  // Configurações de esbuild
  esbuild: {
    drop: ['console', 'debugger'],
    pure: ['console.log', 'console.info'],
  },
});
