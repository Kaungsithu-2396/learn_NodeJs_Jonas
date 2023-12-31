const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, resp) => {
    // resp.end("ok");
    //solution 1
    // fs.readFile("./test-file.txt", "utf-8", (err, data) => {
    //     resp.end(data);
    // });

    //solution 2
    // const readable = fs.createReadStream("test-file.txt");
    // readable.on("data", (chunk) => resp.write(chunk));
    // readable.on("end", () => resp.end());
    // readable.on("error", (err) => {
    //     console.log(err);
    //     resp.statusCode = 500;
    //     resp.end("File not found");
    // });

    //solution 3
    const readable = fs.createReadStream("test-file.txt");
    readable.pipe(resp);
});
server.listen(4000, "localhost", () => {
    console.log("file read start");
});
