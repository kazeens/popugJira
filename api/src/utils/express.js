
let HTTPStatus = require('http-status');

module.exports = {
  extendResponseMethods,
};

function extendResponseMethods(req, res, next) {
  let error = code => validationResult => res.status(code).json({ errors: validationResult.validationErrors });

  res.validationFailed = error(HTTPStatus.BAD_REQUEST);
  res.authFailed = error(HTTPStatus.UNAUTHORIZED);
  res.permissionDenied = () => res.status(HTTPStatus.FORBIDDEN).end();
  res.success = data => res.status(HTTPStatus.OK).json(data);
  res.notFound = () => res.status(HTTPStatus.NOT_FOUND).end();
  res.successIfFound = data => (data ? res.success(data) : res.notFound());

  next();
}