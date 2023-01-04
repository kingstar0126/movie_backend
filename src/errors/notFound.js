function pathNotFound(req, res, next) {
    next({ status: 404, message: `Not found: ${req.originalUrl}` });
}

module.exports = pathNotFound;