import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { handleConsultationRequest } from './server/emailService.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.join(__dirname, 'dist');
const PORT = process.env.PORT || 3000;

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
};

const server = http.createServer(async (req, res) => {
  // CORS & Security Headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-XSS-Protection', '1; mode=block');

  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  const pathname = parsedUrl.pathname;

  // Handle API: POST /api/consultation
  if (req.method === 'POST' && pathname === '/api/consultation') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
      // Safeguard against massive payloads (max 1MB)
      if (body.length > 1e6) {
        req.socket.destroy();
      }
    });

    req.on('end', async () => {
      try {
        const payload = JSON.parse(body || '{}');
        const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '127.0.0.1';

        const result = await handleConsultationRequest(payload, clientIp);

        res.writeHead(result.success ? 200 : result.status || 400, {
          'Content-Type': 'application/json',
        });
        res.end(JSON.stringify(result));
      } catch (err) {
        console.error('[API Server Error]:', err);
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: 'Invalid consultation request payload.' }));
      }
    });
    return;
  }

  // Handle Static Files from dist/
  if (req.method === 'GET' || req.method === 'HEAD') {
    let safePath = path.normalize(pathname).replace(/^(\.\.[\/\\])+/, '');
    let filePath = path.join(DIST_DIR, safePath);

    fs.stat(filePath, (err, stats) => {
      if (!err && stats.isDirectory()) {
        filePath = path.join(filePath, 'index.html');
      }

      fs.readFile(filePath, (readErr, content) => {
        if (readErr) {
          // SPA Fallback: serve index.html for client routes (like /about)
          const fallbackPath = path.join(DIST_DIR, 'index.html');
          fs.readFile(fallbackPath, (fallbackErr, indexContent) => {
            if (fallbackErr) {
              res.writeHead(404, { 'Content-Type': 'text/plain' });
              res.end('AVORA: Please run "npm run build" first to build the client application.');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
            res.end(indexContent);
          });
          return;
        }

        const ext = path.extname(filePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';
        res.writeHead(200, {
          'Content-Type': contentType,
          'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=31536000, immutable',
        });
        res.end(content);
      });
    });
    return;
  }

  // Method not allowed
  res.writeHead(405, { 'Content-Type': 'text/plain' });
  res.end('Method Not Allowed');
});

server.listen(PORT, () => {
  console.log(`\n✦ AVORA Studio Production Server running at http://localhost:${PORT}`);
  console.log(`✦ Consultation API live at POST http://localhost:${PORT}/api/consultation\n`);
});
