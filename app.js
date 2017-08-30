const express = require('express');


// Create an Express app object
const app = express();


// Tell Express that we have static files in our "public/" folder
app.use(express.static('public'));


// Our first Express "route"
// A route defines a URL/page on our Website

// mysite.com/
// localhost:3000/
app.get('/', (request, response, next) => {
    // The code that will run EVERY TIME
    // a user visits the page.

    // Decides what content to respond with.

    // Send the string "<h1> Hello, Express! </h1>" to the browser
    response.send(`
      <link rel="stylesheet" href="/css/style.css">

      <h1> Hello, Express! </h1>
      <a href="/about"> About Us </a>
      <img src="/images/pineapple.gif">

      <script src="/js/frontend.js"></script>
    `);
});


// localhost:3000/about
app.get('/about', (request, response, next) => {
    response.send(`
      <link rel="stylesheet" href="/css/style.css">

      <h1> About Page </h1>
      <a href="/"> Home </a>
      <img src="/images/cat.gif">

      <script src="/js/frontend.js"></script>
    `);
});


// Anatomy of a route
// app.VERB('/URL', CALLBACK);


// Tells Express that we want to start accepting connections
app.listen(3000);
