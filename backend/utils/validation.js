// backend/utils/validation.js
const { check, validationResult } = require('express-validator');



// middleware for formatting errors from express-validator middleware
// (to customize, see express-validator's documentation)
const handleValidationErrors = (req, _res, next) => {
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    const errors = validationErrors
    .array()
    .map((error) => `${error.msg}`);


    const err = Error('Validation error');
    err.errors = errors;
    err.status = 400;
    err.title = 'Validation error';
    next(err);
  }
  next();
};

const songValidator = [
    check('url')
      .exists({ checkFalsy: true })
      .withMessage('Audio is required'),
    check('title')
      .exists({ checkFalsy: true })
      .withMessage('Song title is required'),
    check('description')
      .exists({ checkFalsy: true })
      .withMessage('Description is required'),
    handleValidationErrors
]

const albumValidator = [
      check('title')
      .exists({ checkFalsy: true })
      .withMessage('Album title is required'),
    check('description')
      .exists({ checkFalsy: true })
      .withMessage('Description is required'),
    handleValidationErrors
]

module.exports = {
  handleValidationErrors,
  songValidator,
  albumValidator
};
