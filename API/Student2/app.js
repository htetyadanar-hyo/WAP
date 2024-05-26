const express = require('express');
const studentController = require('./routes/studentRouter');
const app = express();

app.use(express.json());
app.use('/students',studentController);

app.use((err,req,res,next) => {
    if(err.message.includes('Not Found')){
        res.status(404).json({error:err.message});
    }
    else{
        res.status(500).json({error:err.message});
    }
})

app.listen(3000, () => {
    console.log("Listening on 3000");
});