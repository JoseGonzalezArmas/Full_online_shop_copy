const express = require('express');

// import the path package
const path = require('path');
// import the csurf package
const csurf = require('csurf');
const expressSession = require('express-session');


// import the databse functions
const data = require('./data/database');
// the session config creator
const sessionConfigCreator = require('./config/session');
// import the csrfToken middleware
const csrfTokenMiddleware = require('./middlewares/add_csrfToken');

// import the routes
const baseRoutes = require('./routes/base_routes');

// now create the app constant
const app = express();

// now we want to activate the ejs engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// allow the CSS files to be public 
app.use(express.static('public'));

// before all the routes
// activate the csurf pakcage
// and the sessions
const sessionConfig = sessionConfigCreator();
app.use(expressSession(sessionConfig));
app.use(csurf());

// add the csrfToken to the request object
app.use(csrfTokenMiddleware);
// set the base routes
app.use(baseRoutes);

//listen on port 3000

data.connectToDataBase().then(() => {
    // if the promise is resolved, the listen on port 3000
    app.listen(3000);
}).catch((error) => {console.log(error.prototype.message)});

