const express = require('express');
const bookRouter = require('./routes/bookRouter');
const app = express();

app.use(express.json());
app.use('/books',bookRouter);

app.use((err,req,res,next)=>{
    res.status(500).json({ success: false, message: err.message });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});