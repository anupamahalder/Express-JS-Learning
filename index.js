// using this express we will create an express application 
const express = require('express');
// and express is a function so we can call it and will return an object Express and this is an express application and we can put it into a variable
const app = express();
//app is our Express application
const fs = require('fs');

//our application will use this port then no other appliaction can run on this port
const port = process.env.PORT||4545;

// handle root route if user has requested then corresponding response to user and to generate response we have to make a function and signature of this function will be having two arguments req, res
app.get('/',(req, res)=>{
    // generate response
    // send html as response 
    fs.readFile('./pages/index.html',(err,data)=>{
        if(err){
            console.log('Error', err);
            // send response to user 
            res.send('Something went wrong!');
        }
        else{
            // write from buffer 
            res.write(data);
            // if we end response it will back and send that response 
            res.end();
        }
    })
    // to send jon object 
    // res.json({
    //     message: "Hello User!"
    // })
    // to send pdf 
    // res.attachment()
    // res.send('Hello user! our server is active and running...');
})

//handle about route
app.get('/about',(req, res)=>{
    res.send('Know me, I am a developer!');
})
//handle help route
app.get('/help',(req, res)=>{
    res.send('I am here to help you dear!');
})
//listen the application on a given port
app.listen(port, ()=>{
    console.log(`Our server is running on port ${port}...`);
})
