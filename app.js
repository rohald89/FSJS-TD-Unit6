const express = require('express');
const { projects } = require('./data.json');

const app = express();

app.set('view engine', 'pug');
app.use('/static', express.static('public'));

app.get('/', (req, res) => {
    res.render('index', { projects });
});

app.get('/project/:id', (req, res) => {
    const id = req.params.id;
    const project = projects[id];
    if (project) {
        res.render('project', { project });
    }
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(3000, () => {
    console.log('Visit the page at localhost:3000');
});