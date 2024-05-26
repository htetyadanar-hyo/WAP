const express = require('express');
const path = require('path');
const router = express.Router();

//.. means parent
//. means current directory
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname,'..','..','views','test_html','add-product.html'));
});

router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/products/add-product');
});

router.get('/error', (req, res, next) => {
    next(new Error('Deliberate 500 error for testing purposes'));
});

module.exports = router;