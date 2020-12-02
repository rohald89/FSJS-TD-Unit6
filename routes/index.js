const express = require("express");
const router = express.Router();
const { projects } = require("../data.json");

// Render index page, pass projects so information can be used to render the page
router.get('/', (req, res) => {
    res.render('index', { projects });
});

// Render project page based on their id, if there's a following project in the array then pass the next index to the template aswell to render the Next button 
// When a project id is not found create a 404 error
router.get('/project/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const project = projects[id];
    const nextProject = id + 1;
    if (project && projects[nextProject]) {
        res.render('project', { project, nextProject });
    } else if (project) {
        res.render('project', { project })
    } else {
        const err = new Error('This project can not be found :(');
        err.status = 404;
        next(err);
    }
});

// Render about page
router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;
