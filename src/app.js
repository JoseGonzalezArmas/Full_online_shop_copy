const express = require('express');

// import the routes
const baseRoutes = require('./routes/base_routes');

// now create the app constant
const app = express();

// set the base routes
app.use(baseRoutes);

//listen on port 3000
app.listen(3000);
