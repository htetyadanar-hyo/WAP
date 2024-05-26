const express = require('express');
const path = require('path');
const router = require('./routes/test _router/router');

// Instantiations
const app = express();

//** if you use dir in front of express.static, must have '/'
app.use(express.urlencoded());
//app.use('/abc',express.static(path.join(__dirname,'public','my_styles')));
app.use(express.static(path.join(__dirname,'public','my_styles')));
app.use('/products',router);

//Error Handling (Must be in last order)
//To test the 404 error handling, simply navigate to a route that doesn't exist in your application.
app.use(function(req, res, next) {
    res.status(404).send("404 Not Found");
});

//To test the 500 error handling, you need to create a situation where an error is thrown within one of your routes.
app.use((err, req, res, next) => {
    res.status(500).send('500 Internal Server Error: ' + err.message);
});



app.listen(3000, () => {
    console.log('Listening on 3000...');
});
