const jwt = require('jsonwebtoken');
const UserData = require('../model/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const util = require('util');


const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
};

const createUser = async (userData) => {
    return await UserData.create(userData);
};

const createAndSendTokenResponse = async (userData, res) => {
    const token = signToken(userData._id);

    res.status(201).json({
        status: 'success',
        token,
        userCreated: userData
    });
};

const signup = catchAsync(async (req, res, next) => {
    const userData = {
        googleId: req.body.googleId,
        name: req.body.name,
        email: req.body.email,
        pNum: req.body.pNum,
        state: req.body.state,
        city: req.body.city,
        college: req.body.college,
        ca_id: req.body.ca_id || undefined
    };

    const newUser = await createUser(userData);
    await createAndSendTokenResponse(newUser, res);
});

const casignup = catchAsync(async (req, res, next) => {
    const userData = {
        googleId: req.body.googleId,
        name: req.body.name,
        email: req.body.email,
        pNum: req.body.pNum,
        state: req.body.state,
        city: req.body.city,
        college: req.body.college,
        role: 'ambassador'
    };

    const newUser = await createUser(userData);
    await createAndSendTokenResponse(newUser, res);
});

const validateToken = catchAsync(async (req, res, next)=>{
    // Step 1 : check if token exists in headers
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token){
        return next (new AppError('You are not logged in! Please log in to continue', 401));
    }

    // verify token to check if the token is correct

    // if we are at this step it means that a token was provided and we need to check if token provided used our JWT_secret(Jsonwebtoken error) or used has not expired yet 
    //which will be thenn caught by catcyAsync function and passed to our globalErrorHandler by error handling middleware... @vky5
    const promisedToken = util.promisify(jwt.verify);
    const decoded = await promisedToken(token, process.env.JWT_SECRET);

    // to check if the uesr is not deleted 
    const user = UserData.findById(decoded.id);


    if (!user){
        return next (new AppError('The user no longer exists', 401));
    }

    req.user = user;

    


    next();
})

module.exports = { signup, casignup, validateToken };
