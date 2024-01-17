const express = require('express');
const app = express();


function logging(req, res, next){
    console.log('Logging');
    next();
}

app.use((req, res, next)=>{
    console.log('Authentication');
    next();
});

app.use(logging);

app.get('/', logging, (req, res, next)=>{
    return res.status(200).send('2 middleware function');
});



app.listen(5000, ()=>{
    console.log('Server is listening on port 5000');
})