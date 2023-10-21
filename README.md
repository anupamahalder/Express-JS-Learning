## Express JS is used to make server for game,web,app development

# To make a NODE JS project steps we have to follow--
<ol>
<h2>Setup Node JS project--</h2>
<li>On Terminal/Command Prompt: npm init -y (To make a package.json file)</li>
<li>create an index.js file where package.json file is there</li>
<li>In package.json file there in scripts section add <i>"start":"node index.js"</i></li>
<li>To run the project, write on terminal: npm start / npm run start (any of them)</li>
</ol>
<ol>
<h2>Setup Express Application--</h2>
<li>On Terminal: npm install express/ npm i express (To get node_modules directory where all third party code is there)</li>
<li>In package.json file, write the version of node js, "engines":{"node":"19.9.0"} (By doing this later we can get to know using which version of node we made this project)</li>
</ol>

<ol>
<h2>Now Build an Express Application</h2>
<li>To create express application, in index.js file import express using require function and this function will return actual library so to store this we need a variable: </br>
    const express = require('express');
</li>
<li>Create an express application: const app = express()</li>
<li>Only creating application will do nothing so application listen is needed </br>
    listen means we have to create a http server and the server will be created by node js and express, we need just to create a configuration in which port server will be running and a callback function to print our server is running and install nodemon for auto server running</br>
    const port = process.env.PORT || 5000; <br>
    app.listen(5000,()=>{</br>
        console.log('our server is running..');
    })
</li>
<li>Run the application on terminal: npm start</li>
<li>We can see the server data on browser: localhost/5000 or 127.0.0.1/5000</li>
<li>User can get different data at different route on server so we have to handle each route</br>
app.get('/',(req, res)=>{</br>
    res.send('Server is active and running on root route');</br>
}) </br>
<i>get means users want to get resources from server</i>
</li>
<li>Whenever we made changes to server we have to restart our server: nodemon index.js (if our machine has installed nodemon then we don't handle manually so nodemon has done this for us (npm i -D nodemon))</li>
</ol>

### NOTE: 
    0. For each route need to be handled separately with same signature 
        <p>
            <h5>function handler(req, res, next){</h5>
            <h5>//read request object</h5>
            <h5>process request</h5>
            <h5>response back the result</h5>
            }
        <p>
    1. Server can provide any kind of response like html, json, normal text, xml, image,</br> pdf, video, etc. Any file that can possible to send via internet can server </br>provide as response to the user using res.send().
    2. If server want to send pdf as response using res.attachment() and user can download a pdf in this route.
    3. Server can send json object as response using res.json({message: "Hello World"})
    4. Using template string we can send html as response using res.send(`<h1>Hello</h1>`) 

<h3>Send HTML file to server as response</h3>
<ol>
<li>A default module is given by node.js so inport fs module: const fs = require('fs')</li>
<li>in fs module there is readFile() function and provide the path name of html in first parameter and after reading send a callback method (using this either data or error)
</br>if error occur then error object will be send else data</br>
 fs.readFile('pathname', (err, data)=>{</br>
 if(err){</br> 
    console.log('Error occured!);</br>
    res.send('Something went wrong!);</br>
    }</br>
    else{</br>
        res.write(data);</br>
        res.end();</br>
    }<br>
 })
 </li>
</ol>