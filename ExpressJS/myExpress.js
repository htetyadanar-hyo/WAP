// Express.js is a web framework based on the core Node.js http module.
// Those components are called middleware.

// It is Order Matters
// Workflow
// 1) Dependencies
// 2) Instantiations
// 3) Configurations
// 4) Middleware
// 5) Routes
// 6) Error Handling
// 7) Bootup

//Middleware is a useful pattern that allows developers to reuse code
//within their applications and even share it with others in the form of NPM modules.

//Middleware is a function with Three arguments
//function (req,res,next){}

//Error-handling middleware - Four arguments
//function (err,req,res,next){}

//request.body
//request.params
//request.query

//response.redirect(url)
//response.json(data)
//response.status(status)
//response.status().json({})

// To use middleware
// app.use
// One optional string path
// One mandatory callback function

// No path => */* (can be any)
// app.use((req,res,next) => {
// console.log('The middle 1');
// next();
// });

// With path => /add-product/*/*
// app.use('/add-product', (req, res, next) => {
//     console.log('In the middleware!');
//     res.send('<h1>The "Add Product" Page</h1>');
// });

// With path => /*/*
// app.use('/', (req, res, next) => {
//     console.log('In another middleware!');
//     res.send('<h1>Hello from Express</h1>');
// });

// app.use, /search => /search/*/*
// app.all, /search => /search, must have path

// app.get and app.post is for specific url

const express = require('express');

//2. instantiation
const myExpress = express();

// 3. configuration
// app.enable('case sensitive routing');
myExpress.set('case sensitive routing', true);
// app.set('env', 'development');
// console.log('port: ', process.env.PORT, process.env.NODE_ENV);

// 4. middleware
myExpress.get('/test',(req,res)=>{
    res.send("Hello World");
});

myExpress.use('/search', (req,res,next) => {
    console.log(req.query);
    res.send('200', "Result is ****");
});

myExpress.use('/user/:uid/posts/:pid/comments',(req,res,next) => {
    console.log(req.params);
    res.end('Here are the comments: ');
});

myExpress.use('/posts',(req,res,next)=>{
    let data = [
        {
            "userId": 1,
            "id": 1,
            "title": "sunt aut 1"
        },
        {
            "userId": 2,
            "id": 2,
            "title": "sunt aut 2"
        },
        {
            "userId": 3,
            "id": 2,
            "title": "sunt aut 3"
        }
    ];
    //res.status(200).json(data);
    res.status(200).send("Welcome");
});

//The Middleware 1, The Middleware 2, The....
myExpress.use((req,res,next) => {
    console.log("The Middleware 1");
    next(); //delegate to next available middleware
    // if add return on next, no call "The..."
    console.log("The...."); //After calling Middleware 3, call to this one
});

myExpress.use((req,res,next) => {
    console.log('The Middleware 2....');
    //next();
    res.end("Hello World again");
});

myExpress.use((req,res,next) => {
    console.log('3...');
    //next(); //delegate to next available middleware
})

myExpress.use('/add-user',(req,res,next) => {
    const html = `
    <!DOCTYPE html>
    <html>
    <body>
    <form action="/users" method="post">
            <div>Username: <input name="username"></div>
            <div>Password: <input type="password" name="password" ></div>
            <div>Age: <input name="age" ></div>
            <button>Submit</button>
        </form>
    </body>
    </html>`;
    res.send(html);
});

myExpress.use('/users', express.urlencoded(),(req, res, next) => {
    console.log('inside user....', req.body);
    // JSON.stringify(obj);
    req.body.id = Math.random();
    res.status(201).json(req.body); //200
});

myExpress.use('/user', express.json(),(req, res, next) => {
    console.log('inside user....', req.body);
    // JSON.stringify(obj);
    req.body.id = Math.random();
    res.status(201).json(req.body); //200

});

myExpress.listen(3000, ()=>{
    console.log("Listening on port 3000");
});