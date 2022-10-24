const express = require('express');

// import the path package
const path = require('path');

// import the databse functions
const data = require('./data/database');

// import the routes
const baseRoutes = require('./routes/base_routes');

// now create the app constant
const app = express();

// now we want to activate the ejs engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// allow the CSS files to be public 
app.use(express.static('public'));



// set the base routes
app.use(baseRoutes);

//listen on port 3000

data.connectToDataBase().then(() => {
    // if the promise is resolved, the listen on port 3000
    app.listen(3000);
}).catch((error) => {console.log(error.prototype.message)});

