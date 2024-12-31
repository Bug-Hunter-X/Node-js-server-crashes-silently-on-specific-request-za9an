const http = require('http');

const server = http.createServer((req, res) => {
  try {
    // Logic to handle the request
    console.log(req.url);
    if (req.url === '/crash') {
      // Simulate a condition that could cause a crash. For example, accessing a non-existent property.
      throw new Error('Intentional crash');
    }
    res.end();
  } catch (error) {
    console.error('Error handling request:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});