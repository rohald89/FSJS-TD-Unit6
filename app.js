const express = require('express');
const routes = require('./routes');
const { notFound, error } = require('./errors');

// Initialize Express
const app = express();

// Set pug as the view engine
app.set('view engine', 'pug');

// Serve static files from public folder
app.use('/static', express.static('public'));

// Routes
app.use(routes);

// Handle errors
app.use(notFound);
app.use(error);

// App listening on port 3000
app.listen(3000, () => {
    console.log('Visit the page at localhost:3000');
});