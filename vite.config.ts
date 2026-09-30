import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { handleConsultationRequest } from './server/emailService.js';

function consultationApiPlugin() {
  return {
    name: 'consultation-api',
    configureServer(server: any) {
      server.middlewares.use(async (req: any, res: any, next: any) => {
        if (req.url === '/api/consultation' && req.method === 'POST') {
          let body = '';
          req.on('data', (chunk: any) => {
            body += chunk;
          });
          req.on('end', async () => {
            try {
              const payload = JSON.parse(body || '{}');
              const clientIp = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || '127.0.0.1';
              const result = await handleConsultationRequest(payload, clientIp);

              res.statusCode = result.success ? 200 : result.status || 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify(result));
            } catch (err) {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: false, error: 'Invalid JSON request payload.' }));
            }
          });
          return;
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), consultationApiPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
          'motion-vendor': ['framer-motion', 'lenis', 'canvas-confetti'],
          'icons-vendor': ['lucide-react'],
        },
      },
    },
  },
  server: {
    port: 3000,
    open: false,
  },
});
