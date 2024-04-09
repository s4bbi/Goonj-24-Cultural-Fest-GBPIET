const jwt = require('jsonwebtoken');
const UserData = require('../model/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const util = require('util');


// to create JWT from signature
const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
};



// to send JWT to client
const createAndSendTokenResponse = async (userData, res) => {
    const token = signToken(userData._id);

    res.status(201).json({
        status: 'success',
        token,
        userCreated: userData
    });
};

// there can be two cases the user is first time sigining up or user is logging in again... We can use email as a unique field to handle that case...

// Condidion SP1 - user already exists... in that case we just log in them...

// then there is going to be a get and a post request...
// in first request we only send email to check if the user is logged in and if they don't then move to second case... 
// when user signup their googleOuath field then a get will be made to check if a user with that email already exists... 
// if it doesnt then only they move to login page....
// TODO if user exists -> send JWT and redirect to login page (frontend work);


const signup = catchAsync(async (req, res, next) => {
    const userData = {
        name: req.body.name,
        email: req.body.email,
        pNum: req.body.pNum,
        state: req.body.state,
        city: req.body.city,
        college: req.body.college,
        ca_id: req.body.ca_id || undefined
    };

    const newUser = await UserData.create(userData);
    await createAndSendTokenResponse(newUser, res);
});


// this will throw an error of user not existing... and we need to handle it 
const checkUser = catchAsync(async (req, res)=>{
    let user = await UserData.findOne({
        email: req.body.email
    })

    if (!req.body.email){
        return next(new AppError('Email is required', 400));
    }

    // user already exists send response token
    if (user){
        createAndSendTokenResponse(user, res);
        return;
    }

    res.status(401).json({
        errorCode: 'CU401',
        message: 'You have not signed up'
    })
})


// this is to authenticate JWT token
const validateToken = catchAsync(async (req, res, next)=>{
    // Step 1 : check if token exists in headers
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token){
        return next (new AppError('You are not logged in! Please sign up to continue', 401));
    }

    // verify token to check if the token is correct

    // if we are at this step it means that a token was provided and we need to check if token provided used our JWT_secret(Jsonwebtoken error) or used has not expired yet 
    //which will be then caught by catcyAsync function and passed to our globalErrorHandler by error handling middleware... @vky5
    const promisedToken = util.promisify(jwt.verify);
    const decoded = await promisedToken(token, process.env.JWT_SECRET);

    // to check if the uesr is not deleted 
    const user = UserData.findById(decoded.id);


    if (!user){
        return next (new AppError('The user no longer exists', 401));
    }

    req.user = user;

    next(); 
});


// restricting audience role user to access register routes
const restrictTo = (...roles) => {
    return (req, res, next)=>{
        if (!roles.includes(req.user.role)){
            return next(new AppError('You are not authorized to access this route', 403)) 
        }
        
        next();
    }
}

module.exports = { signup, validateToken, checkUser, restrictTo };
