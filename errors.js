// Create status 404 error when non existing path is requested
const notFound = ((req, res, next) => {
    const err = new Error('This page can not be found :(');
    err.status = 404;
    next(err);
});

// Catch errors other than the 404 and render page depending on the error status.
const error = ((err, req, res, next) => {
    if (err.status === 404) {
        res.render('page-not-found.pug', { err });
        console.log(`The page you're looking for can't be found, please try again`)
    } else {
        const err = new Error('Uh oh something went wrong!');
        err.status = 500;
        res.render('error.pug', { err });
    }

});

// Export both functions
module.exports = { notFound, error };