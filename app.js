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

    const randomNumber = Math.floor(Math.random() * 1000);

    // Send the "randomNumber" variable to the view
    response.locals.theNumber = randomNumber;

    // Send the contents of the "views/home.ejs" file to the browser
    response.render('home.ejs');
});


const likes = [
    'Game of Thrones',
    'Biking',
    'Parallel Parking',
    'Tequila',
    'Smoking Shisha',
    'Lebanese People',
    'Beer',
    'Cheeseburgers'
];

// localhost:3000/about
app.get('/about', (request, response, next) => {
    // Send the "likes" variable to the view
    response.locals.listOfThings = likes;

    // Send the contents of the "views/about-page.ejs" file to the browser
    response.render('about-page.ejs');
});



const fakeAwards = [
    {
      award: 'Best Brazilian 21 or Under',
      recipient: 'Kevin'
    },
    {
      award: 'Most Likely To Eat Chicken Kitchen',
      recipient: 'Rachelle'
    },
    {
      award: 'Best UM Alumnus That Is Mexican',
      recipient: 'Arturo'
    }
];

app.get('/awards', (request, response, next) => {
    response.locals.listOfAwards = fakeAwards;
    response.render('dem-prices.ejs');
});


// Anatomy of a route
// app.VERB('/URL', CALLBACK);


// Tells Express that we want to start accepting connections
app.listen(3000);
