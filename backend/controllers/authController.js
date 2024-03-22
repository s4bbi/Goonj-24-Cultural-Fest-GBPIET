const jwt = require('jsonwebtoken');
const UserData = require('../model/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

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

module.exports = { signup, casignup };
