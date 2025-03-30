const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    })

    req.on("end", () => {
      console.log(body), body;
      res.end("Data received successfully")
    })
  } else if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Home Page");
  } else if (req.url === '/api/customer') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ name: 'Adesh', age: 22 }))
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end("404 Not Found")
  }
})


server.listen(5000, () => {
  console.log(`Server ius listening on port 5000`)
})