const express = require('express');
const routes = require('./routes');
const { notFound, error } = require('./errors');

const app = express();


app.set('view engine', 'pug');
app.use('/static', express.static('public'));

// load the routes from routes folder
app.use(routes);

// error handling
app.use(notFound);
app.use(error);

//
app.listen(3000, () => {
    console.log('Visit the page at localhost:3000');
});