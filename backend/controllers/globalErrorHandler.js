const AppError = require('../utils/appError');

// Mongoose related errors
const handleDuplicateFieldsDB = (err) => { // to check for duplicate fields in the schema
    const value = Object.keys(err.keyValue).map(key=> `${key} : ${err.keyValue[key]}`);
    const message = `Duplicate field value {${value}}. Please use another value!`;
    return new AppError(message, 400);
};

const handleCastErrorDB = (err)=>{ // to check if the field that type of field that we defined in our model is correct
    const message = `Invalid ${err.path}: ${err.value}`
    return new AppError(message, 400);
}


// JWT related errors
const handleJWTError = ()=> new AppError('Invalid token. Please log in again!', 401);

const handleJWTexpired = err => new AppError('Your token has expired. Please log in again', 401);


// Validation errors
const handleValidationError = err=>{
    const errName = Object.values(err.errors).map(ele=> ele.message);
    const message = `Invalid input data. ${errName.join('. ')}`;
    return new AppError(message, 400);
}

// # Global error response handlers
// for development
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
// for production
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

// Main globalErrorHandler function 
module.exports = (err, req, res, next) => {
    if (process.env.NODE_ENV === 'development') {
        console.error(err.errors.email);
        sendDev(err, res);
        console.log(err.name)

    } else if (process.env.NODE_ENV === 'production') {
        let error = {...err}; // destructing 
        // DB errors
        if (err.code === 11000) error = handleDuplicateFieldsDB(err);
        if (err.name==='CastError') error = handleCastErrorDB(error);
        
        // JWT errors
        if (err.name==='JsonWebTokenError') error = handleJWTError();
        if (err.name==='TokenExpiredError') error = handleJWTexpired();
        
        // Validation errors 
        if (err.name==='ValidationError') error = handleValidationError(error);

        sendProd(error, res);
    }

    next(); // this is important otherwise you will be stuck 
};

