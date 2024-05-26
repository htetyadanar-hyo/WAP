// const express = require('express');
// const app = express();
// app.get('/users', (req, res, next) => {
//     console.log(1);
//     next();
// }, (req, res, next) => {
//     console.log(2);
//     next('route');
// }, (req, res, next) => {
//     console.log(3);
//     next('something');
// });
// app.get('/users',(req, res, next) => {
//     console.log(4);
//     res.status(200).send('Success!'); });
// app.use((err, req, res, next) => {
//     console.log(5);
//     res.status(500).send('Try later');
// });
// app.listen(3000, () => {
//     console.log("Express server listening on port 3000");
// })

// 1 , 2 , 4

/*****/
// const express = require('express');
// const app = express();
// app.get('/users', (req, res, next) => {
//     console.log(1);
//     next();
// }, (req, res, next) => {
//     console.log(2);
//     next('route');
// }, (req, res, next) => {
//     console.log(3);
//     next('something');
// });
// app.get('/',(req, res, next) => {
//     console.log(4);
//     res.status(200).send('Success!'); });
// app.use((err, req, res, next) => {
//     console.log(5);
//     res.status(500).send('Try later');
// });
// app.listen(3000, () => {
//     console.log("Express server listening on port 3000");
// });
//
// //1,2

/****/
// const express = require('express');
// const app = express();
// app.get('/users', (req, res, next) => {
//     console.log(1);
//     next();
// }, (req, res, next) => {
//     console.log(2);
//     next('route');
// }, (req, res, next) => {
//     console.log(3);
//     next('something');
// });
// app.get((req, res, next) => {
//     console.log(4);
//     res.status(200).send('Success!'); });
// app.use((err, req, res, next) => {
//     console.log(5);
//     res.status(500).send('Try later');
// });
// app.listen(3000, () => {
//     console.log("Express server listening on port 3000");
// });

//1,2


// const express = require('express');
// const app = express();
// app.get('/users', (req, res, next) => {
//     console.log(1);
//     next();
// }, (req, res, next) => {
//     console.log(2);
//     next('something');
// }, (req, res, next) => {
//     console.log(3);
//     next('route');
// });
// app.get((req, res, next) => {
//     console.log(4);
//     res.status(200).send('Success!'); });
// app.use((err, req, res, next) => {
//     console.log(5);
//     res.status(500).send('Try later');
// });
// app.listen(3000, () => {
//     console.log("Express server listening on port 3000");
// });

//1,2,5


// const express = require('express');
// const app = express();
// app.get('/users',(req,res,next) => {
//         console.log('1');
//         next();
//         console.log('1 1..');
//     },
//     (req,res,next) => {
//         console.log('2');
//         next();
//         console.log('2 2..');
//     },
//     (req,res,next) => {
//         console.log('3');
//         res.end("Hi....");
//         console.log('3 3..');
//     }
// );
// app.listen(3000, () => {
//     console.log("Express server listening on port 3000");
// });

//Console => 1, 2, 3, 3 3..., 2 2.., 1 1....
//Browser => Hi....

/*****/
// const express = require('express');
// const app = express();
// app.use((req, res, next) => {
//     console.log('1');
//     next();
//     console.log('1 1...');
// });
// app.use((req, res, next) => {
//     console.log('2');
//     next('dfadsfadfafs');
//     console.log('2 2...');
// });
// app.use('/add', (req, res, next) => {
//     console.log('3');
//     res.send('Hi!');
//     console.log('3 3...');
// });
// app.use((err,req, res, next) => {
//     console.log('4');
//     res.send(err);
// });
// app.use((req,res,next) => {
//     res.sendFile(path.join(__dirname,'views','404.html'));
// });
// app.listen(3000, () => {
//     console.log("Express server listening on port 3000");
// });

//Console => 1, 2, 4, 2 2.., 1 1....
//Browser => dfadsfadfafs


// const express = require('express');
// const app = express();
// app.get('/user',(req,res,next) => {
//         console.log('1');
//         next();
//         console.log('1 1..');
//     },
//     (req,res,next) => {
//         console.log('2');
//         next('route');
//         console.log('2 2..');
//     },
//     (req,res,next) => {
//         console.log('3');
//         res.end("Hi....");
//         console.log('3 3..');
//     }
// );
// app.listen(3000, () => {
//     console.log("Express server listening on port 3000");
// });

//Console => 1, 2, 2 2.., 1 1....
//Browser => Error