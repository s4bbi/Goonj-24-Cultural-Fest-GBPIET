const jwt = require('jsonwebtoken');
const UserData = require('../model/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const util = require('util');
const validid = require('../utils/collegeId')

// to create JWT from signature
const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
};



// to send JWT to client
const createAndSendTokenResponse = async (userData, res) => {
    const token = signToken(userData._id);

    // Check if JWT_COOKIE_EXPIRES_IN is defined and a valid number
    const expiresInDays = process.env.JWT_COOKIE_EXPIRES_IN ? parseInt(process.env.JWT_COOKIE_EXPIRES_IN) : 180;

    // Calculate expiration time
    const expirationDate = new Date(Date.now() + expiresInDays * 24 * 60 * 60 * 1000);

    const responseCookie = {
        expires: expirationDate,
        httpOnly: true
    };

    if (process.env.NODE_ENV === 'production') {
        responseCookie.secure = true;
    }

    res.cookie('jwt', token, responseCookie);

    res.status(201).json({
        status: 'success',
        token,
        userCreated: userData
    });
};


const signup = catchAsync(async (req, res, next) => {
    const userData = {
        name: req.body.name,
        email: req.body.email,
        googleSubjectId: req.body.googleSubjectId,
        img: req.body.img,
        pNum: req.body.pNum,
        state: req.body.state,
        city: req.body.city,
        college: req.body.college,
        role: req.body.role || 'PT'
    };

    const newUser = await UserData.create(userData);
    if (newUser.role==='CA'){
        await newUser.generateUniqueId();
    };

    await createAndSendTokenResponse(newUser, res);
});


// this will throw an error of user not existing... and we need to handle it 
const checkUser = catchAsync(async (req, res, next)=>{
    
    if (!req.body.email){
        return next(new AppError('Email is required', 400));
    }
    
    
    if (!req.body.googleSubjectId){
        return next(new AppError('Google subject id is required', 400));
    }
    
    let user = await UserData.findOne({
        email: req.body.email,
        googleSubjectId: req.body.googleSubjectId
    })
    // user already exists send response token
    if (user){
        createAndSendTokenResponse(user, res);
        return;
    }

    res.status(401).json({
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
    const user = await UserData.findById(decoded.id);



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
const checkCaId = catchAsync( async (req,res,next)=>{
    
    let user = await UserData.findOne({
       generated_id : req.body.ca_id
    })
    if(user){
    if(user.role == 'CA' ){
        user.ca_counter++ ;
        res.status(200).json({status:"success"});
    }
    else{
        return next(new AppError('Invalid CA id',400))
    }
}
else{
    return next(new AppError('Invalid CA id',400))
   
}
})


const checkClgId = catchAsync( async (req,res,next)=>{
    const exist = validid.includes(req.body.college_id * 1);
    if(exist){
        res.status(200).json({status:"success"})
    }
    else{
        return next(new AppError('Invalid College id',400)) 
    }
})

module.exports = { signup, validateToken, checkUser, restrictTo, checkCaId , checkClgId };

