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
    // send html as response 
    res.send(
        `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Express and Node JS</title>
            <style>
                *{
                    margin: 0;
                    padding: 0;
                    background-color: rgb(215, 178, 249);
                    box-sizing: border-box;
                }
                body{
                    font-family: Arial, Helvetica, sans-serif;
                    font-size: 16px;
                }
                .container{
                    width: 50%;
                    margin: 2rem auto;
                    padding: 2rem;
                    background-color: #dddeee;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Hello Node Js</h1>
                <p>This is an experimental project while learning Express JS.</p>
            </div>
        </body>
        </html>
        `
    )
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

//listen the application on a given port
app.listen(port, ()=>{
    console.log(`Our server is running on port ${port}...`);
})
