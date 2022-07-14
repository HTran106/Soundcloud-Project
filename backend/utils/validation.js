// backend/utils/validation.js
const { check, validationResult } = require('express-validator');



// middleware for formatting errors from express-validator middleware
// (to customize, see express-validator's documentation)
const handleValidationErrors = (req, _res, next) => {
  const validationErrors = validationResult(req);
  let errorObj = {}
  if (!validationErrors.isEmpty()) {
    const errors = validationErrors
    .array()
    // .map((error) => `${error.msg}`);
    .forEach((error) => {
      errorObj[error.param] = error.msg
    })


    const err = Error('Validation error');
    err.errors = errorObj;
    err.status = 400;
    err.title = 'Validation error';
    next(err);
  }
  next();
};

const validateSearchQuery = [
  check('page')
    .isInt({ min: 0})
    .optional({nullable: true})
    .withMessage('Page must be greater than or equal to 0'),
  check('size')
    .isInt({ min: 0})
    .optional({nullable: true})
    .withMessage('Size must be greater than or equal to 0'),
  check('createdAt')
    .isDate()
    .optional({nullable: true})
    .withMessage('CreatedAt is invalid'),
  check('updatedAt')
    .isDate()
    .optional({nullable: true})
    .withMessage('UpdatedAt is invalid'),
  handleValidationErrors
]

const validatePagination = [
  check('page')
    .isInt({ min: 0})
    .optional({nullable: true})
    .withMessage('Invalid page parameter, must be a number and greater than 0'),
  check('size')
    .isInt({min: 0})
    .optional({nullable: true})
    .withMessage('Invalid size parameter, must be a number and greater than 0'),
    handleValidationErrors
]

const songValidator = [
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

const commentValidator = [
    check('body')
      .exists({ checkFalsy: true })
      .withMessage('Comment body text is required'),
    handleValidationErrors
]

const playlistValidator = [
    check('name')
      .exists({ checkFalsy: true })
      .withMessage('Playlist name is required'),
      handleValidationErrors
]

const pagination = (page, size) => {
    let pagination = {}

    if (page > 0) {
      pagination.limit = size
      pagination.offset = size * (page - 1)
    } else {
      pagination.limit = size
    }
    return pagination
}


module.exports = {
  handleValidationErrors,
  songValidator,
  albumValidator,
  commentValidator,
  playlistValidator,
  validateSearchQuery,
  validatePagination,
  pagination,
};
