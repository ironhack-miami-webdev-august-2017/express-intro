const express = require('express');


// Create an Express app object
const app = express();

// Tell Express that our HTML files are located in the "htmls/" folder
app.set('views', 'htmls');

// Tell Express that our HTML files are in the EJS format
app.set('view engine', 'ejs');

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

    // Send the contents of the "views/home.ejs" file to the browser
    response.render('home.ejs');
});


// localhost:3000/about
app.get('/about', (request, response, next) => {
    // Send the contents of the "views/about-page.ejs" file to the browser
    response.render('about-page.ejs');
});


// Anatomy of a route
// app.VERB('/URL', CALLBACK);


// Tells Express that we want to start accepting connections
app.listen(3000);
