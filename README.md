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
})
</li>
<li>Whenever we made changes to server we have to restart our server: nodemon index.js (if our machine has installed nodemon)</li>
</ol>