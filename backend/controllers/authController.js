const jwt = require('jsonwebtoken');
const UserData = require('../model/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const util = require('util');

// this returns JWT token after taking user document id as payload
const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
};

// this returns a promise which will be then awaited in the controller. I did it this way to use async in signup and caregister function and with that use catchAsync to use globalErrorMiddleware
const createUser =  (userData) => {
    return UserData.create(userData);
};


// this will take userData and generate JWT and send response to user
const createAndSendTokenResponse =  (userData, res) => {
    const token =  signToken(userData._id);

    res.status(201).json({
        status: 'success',
        token,
        userCreated: userData
    });
};

// this is the function to sign up the user
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

    const newUser = await createUser(userData); // we are awaiting the promise we get from createUser here
    createAndSendTokenResponse(newUser, res);
});


// this is the function to sign up CA // TODO modify CA sign up function 
const casignup = catchAsync(async (req, res, next) => {
    const userData = {
        name: req.body.name,
        email: req.body.email,
        pNum: req.body.pNum,
        state: req.body.state,
        city: req.body.city,
        college: req.body.college,
        role: 'ambassador'
    };

    const newUser = await createUser(userData);
    createAndSendTokenResponse(newUser, res);
});


// this is to check if the useer already exists and if they don't we will get error 400 if no email provided and error 401 if user with that email has not signed up
const checkUser = catchAsync(async (req, res, next)=>{
    let user = await UserData.findOne({
        email: req.body.email
    })

    if (!req.body.email){ // to check if body has email or not
        return next(new AppError('Email is required', 400));
    }

    // user does not exists and they need to sign up
    if (!user){
        return next(new AppError('Please Sign up!', 401))
    }

    // if user exist send JWT 
    createAndSendTokenResponse(user, res);

})

// this is to authorize for protected register route. If JWT is correct user will get access to other middlewares in stack else they will get error 401 
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
    const user = await UserData.findById(decoded.id);

    if (!user){
        return next (new AppError('The user no longer exists', 401));
    }

    req.user = user;
    next(); 
})

module.exports = { signup, casignup, validateToken, checkUser };
