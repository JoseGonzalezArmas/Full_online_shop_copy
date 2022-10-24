
/**
 * Adds a csrfToken to the res.locals object
 * 
 * 
 * @param {*} req The request object
 * @param {*} res The response object
 * @param {*} next The next function
 */
function addCsrfToken(req, res, next) {
    req.locals = req.csrfToken();
    next();
} // here ends the function

module.exports = addCsrfToken;