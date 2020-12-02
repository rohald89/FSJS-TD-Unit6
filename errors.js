// create status 404 error when non existing path is requested
const notFound = ((req, res, next) => {
    const err = new Error('This page can not be found');
    err.status = 404;
    next(err);
});

// catch remaining (code based) errors.
const error = ((err, req, res, next) => {
    if (err.status === 404) {
        res.render('page-not-found.pug', { err });
    } else {
        const err = new Error('Uh oh something went wrong!');
        err.status = 500;
        res.render('error.pug', { err });
    }

});

// export both functions
module.exports = { notFound, error };