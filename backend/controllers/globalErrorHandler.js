const AppError = require('../utils/appError');

const handleDuplicateFieldsDB = (err) => {
    const value = Object.values(err.keyValue).join(', ');
    const message = `Duplicate field value(s): ${value}. Please use another value!`;
    return new AppError(message, 400);
};

const sendErrorResponse = (err, res) => {
    const statusCode = err.statusCode || 500;
    const status = err.status || 'error';

    if (process.env.NODE_ENV === 'development') {
        res.status(statusCode).json({
            status: status,
            error: err,
            message: err.message,
            stack: err.stack
        });
    } else if (process.env.NODE_ENV === 'production') {
        let error = { ...err };
        if (err.code === 11000) {
            error = handleDuplicateFieldsDB(err);
        }
        if (error.isOperational) {
            res.status(statusCode).json({
                status: status,
                message: error.message
            });
        } else {
            res.status(500).json({
                status: 'error',
                message: 'Something went wrong'
            });
        }
    }
};

module.exports = (err, req, res, next) => {
    sendErrorResponse(err, res);
};
