const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.mp4': 'video/mp4'
};

const server = http.createServer((req, res) => {
  // Parse URL and strip query strings
  const cleanUrl = decodeURIComponent(req.url.split('?')[0]);
  let filePath = path.join(ROOT, cleanUrl);

  // Default to index.html for root path
  if (cleanUrl === '/' || cleanUrl === '') {
    filePath = path.join(ROOT, 'index.html');
  }

  // Safety check against directory traversal
  const resolvedPath = path.resolve(filePath);
  if (!resolvedPath.startsWith(path.resolve(ROOT))) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    return res.end('403 Forbidden');
  }

  fs.stat(resolvedPath, (err, stats) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        return res.end('404 Not Found');
      }
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      return res.end('500 Internal Server Error');
    }

    if (stats.isDirectory()) {
      const indexFile = path.join(resolvedPath, 'index.html');
      if (fs.existsSync(indexFile)) {
        serveFile(indexFile, res);
      } else {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        res.end('403 Forbidden');
      }
      return;
    }

    serveFile(resolvedPath, res);
  });
});

function serveFile(file, res) {
  const ext = path.extname(file).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  const headers = {
    'Content-Type': contentType,
    'Access-Control-Allow-Origin': '*'
  };

  // Cache static assets (images, fonts) for high scroll performance
  if (ext === '.webp' || ext === '.png' || ext === '.jpg' || ext === '.woff2') {
    headers['Cache-Control'] = 'public, max-age=86400, immutable';
  } else {
    headers['Cache-Control'] = 'no-cache';
  }

  res.writeHead(200, headers);
  fs.createReadStream(file).pipe(res);
}

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log(`Serving directory: ${ROOT}`);
});
