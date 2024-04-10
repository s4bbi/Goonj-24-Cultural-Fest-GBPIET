const AppError = require('../utils/appError');

const handleDuplicateFieldsDB = (err) => {
    const value = Object.values(err.keyValue).join(', ');
    const message = `Duplicate field value(s): ${value}. Please use another value!`;
    return new AppError(message, 400);
};

const handleJWTError = ()=> new AppError('Invalid token. Please log in again!', 401);

const handleJWTexpired = err => new AppError('Your token has expired. Please log in again', 401);

const sendDev = (err, res)=>{
    const statusCode = err.statusCode || 500;
    const status = err.status || 'error';

    res.status(statusCode).json({
        status: status,
        error: err,
        message: err.message,
        stack: err.stack
    })
}

const sendProd = (err, res)=>{
    const statusCode = err.statusCode || 500;
    const status = err.status || 'error';


    if (err.isOperational){
        res.status(statusCode).json({
            status: status,
            message: err.message
        });

    } else {
        res.status(500).json({
            status: 'error',
            message: 'Something went wrong'
        });
    }
}


module.exports = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const status = err.status || 'error';

    if (process.env.NODE_ENV === 'development') {
        sendDev(err, res);

    } else if (process.env.NODE_ENV === 'production') {
        let error = {...err};
        if (err.code === 11000) error = handleDuplicateFieldsDB(err);
        if (err.name==='JsonWebTokenError') error = handleJWTError();
        if (err.name==='TokenExpiredError') error = handleJWTexpired();

        sendProd(error, res);
    }

    next(); // this is important otherwise you will be stuck 
};


// this code will work too but it is less redable 
// module.exports = (err, req, res, next) => {
//     sendErrorResponse(err, res);
// };
