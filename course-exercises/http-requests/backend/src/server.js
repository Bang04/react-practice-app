import http from 'node:http';

const port = Number(process.env.PORT || 5001);

const server = http.createServer((_, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify({ message: 'http-requests backend skeleton is running.' }));
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
