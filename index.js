require("dotenv").config(); 
const http = require("http");
const url = require("url");


const server = http.createServer();

const port = process.env.SERVER_PORT || 4000;
server.listen(port);

const calculator = require("./calculator");

const html = (result) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Calculator Web Service </title>
    </head>
    <body>
      <h1>This is a Calculator Web Service</h1>     
        ${result}
    </body>
  </html>
`;
}

server.on("request", (request, response) => {

  var parts = url.parse(request.url, true);
  var query = parts.query;
  
  const a = query.a;
  const b = query.b;

  response.setHeader("Content-type", "text/html")
  if (a === undefined || b === undefined) {
      response.write(html(`<h2> Warning </h2> <p> Missing a or b parameter. </p>`));
  } else {
      response.write(html(calculator(a,b)));    
  }
  
  response.end();
}); 