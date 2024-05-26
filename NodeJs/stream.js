// Stream is a way to handle reading/writing files, network communications,
// or any kind of end-to-end information exchange in an efficient way.

// Advantages
// Memory and Time efficiency

// The Node.js stream module provides the foundation upon which all streaming APIs are built.
// All streams are instances of EventEmitter

// fs.createReadStream => Readable (get)
// client => response
// server => request
// You can receive data, but not send data to it

// fs.createWriteStream => Writeable (post)
// client => request
// server => response
// You can send data, but not receive from it

// net.Socket => Duplex
// a combination readable and writeable stream
// both receive data and send data

// zlib.createGzip => Transform
const fs = require('fs');
const path = require('path');

// Stream will read the file in chunks
// if file size is bigger than the chunk then it will read a chunk and emit a 'data' e vent.
// Use encoding to convert data to String of hex
// Use highWaterMark to set the size of the chunk. Default is 64 kb

/****/
// const readable = fs.createReadStream(path.join(__dirname,'../tree.jpeg'),{ highWaterMark: 16 * 1024});
// const writeable = fs.createWriteStream(path.join(__dirname,'desFile.jpeg'));
// readable.on('data',function(chunk){
//     console.log(chunk.length);
//     writeable.write(chunk);
// });

// To connect two streams, Node provides a method called pipe() available on all readable streams.
// Pipes hide the complexity of listening to the stream events.
// src.pipe(dst);
// so src must be readable stream because pipe() is designed to transfer data from a readable stream to a writable stream.
const readable = fs.createReadStream(path.join(__dirname, 'tree2.jpeg'));
const writable = fs.createWriteStream(path.join(__dirname, '../desFile2.jpeg'));
readable.pipe(writable);