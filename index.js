require("dotenv").config(); 
const http = require("http");
const url = require("url");


const command  = require('commander');

command.option("--port <port>");
command.parse(process.argv);

let port;
if (command.opts().port) {
  port = command.opts().port;
} else {
  port = process.env.SERVER_PORT || 4000;
}


const server = http.createServer();
 
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
  let parsedUrl = url.parse(request.url, true);

  if (parsedUrl.pathname !== "/calculator") {
     response.statusCode = 404;
     response.end('404: Not Found');
     return;
  }

  const {a,b} = parsedUrl.query;

  response.setHeader("Content-type", "text/html")
  if (a === undefined || b === undefined) {
      response.write(html(`<h2> Warning </h2> <p> Missing a or b parameter. </p>`));
  } else if (isNaN(parseInt(a)) || isNaN(parseInt(b)) ) {
      response.write(html(`<h2> Warning </h2> <p> Either a or b is not a number. </p>`));
  } else {
      response.write(html(calculator(a,b)));    
  }
  
  response.end();
}); 



