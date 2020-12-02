const express = require('express');
const { projects } = require('./data.json');

const app = express();

app.set('view engine', 'pug');
app.use('/static', express.static('public'));

app.get('/', (req, res) => {
    res.render('index', { projects });
});

app.get('/about', (req, res, next) => {
    res.render('about');
});

app.get('/project/:id', (req, res, next) => {
    const id = req.params.id;
    const project = projects[id];
    if (project) {
        res.render('project', { project });
    } else {
        const err = new Error('This project can not be found');
        err.status = 404;
        next(err);
    }
});

app.use((req, res, next) => {
    const err = new Error('This page can not be found');
    err.status = 404;
    next(err);
});

// General catch all error handler to catch any code related errors
app.use((err, req, res, next) => {
    if (err.status === 404) {
        res.render('page-not-found.pug', { err });
    } else {
        const err = new Error('Uh oh something went wrong!');
        err.status = 500;
        res.render('error.pug', { err });
    }

});

app.listen(3000, () => {
    console.log('Visit the page at localhost:3000');
});