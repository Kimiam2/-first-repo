//console.log("Hello Node.js");
/*const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Hello from my server!");
});
server.listen(3000); */

/*const http = require("http");

const server = http.createServer((req, res) => {

    console.log(req.method);

    res.end("Hello!");

});

server.listen(3000);*/
const http = require("http");

const server = http.createServer((req, res) => {
    console.log("Method:", req.method);
    console.log("URL:", req.url);

    res.end("Hello کیمی!");
});

server.listen(3000);