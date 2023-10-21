// using this express we will create an express application 
const express = require('express');
// and express is a function so we can call it and will return an object Express and this is an express application and we can put it into a variable
const app = express();
//app is our Express application

//our application will use this port then no other appliaction can run on this port
const port = process.env.PORT||4545;

// handle root route if user has requested then corresponding response to user and to generate response we have to make a function and signature of this function will be having two arguments req, res
app.get('/',(req, res)=>{
    // generate response
    res.send('Hello user! our server is active and running...');
})

//listen the application on a given port
app.listen(port, ()=>{
    console.log(`Our server is running on port ${port}...`);
})
