const http = require('http')
const fs   = require('fs')

const hostname = '127.0.0.1'
const port     = 3000

fs.readFile('./index.html', (err, html) => {
  if(err) {
    throw err;
  }

  const server = http.createServer((req, res) => {
     res.statusCode = 200
     res.setHeader('Content-Type','text/html')
     res.write(html)
     res.end()
  });

  server.listen(port, hostname, () => {
     console.log(`Server running at ${hostname}:${port}/`)
  })

});


/*
-
- http.createServer ; create server to running
- req ; request
- res ; response
- setHeader ; set header response output
- end ; data to be output
- server.listen ; request data to server
-
*/
