// Series of npm packages

const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

// EXPRESS CONFIGURATION
// This sets up express server

// creating an "express" server
const app = express();

const PORT = process.env.PORT || 8080;

// handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static assets directly
app.use(express.static('public'));


app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });



// END server.js HERE