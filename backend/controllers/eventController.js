const UserData = require('../model/userModel');
const catchAsync = require('../utils/catchAsync');


const registerUser = catchAsync(async (req, res, next)=>{
    req.user.events.push(req.body.eventCode);

    const user = await UserData.findByIdAndUpdate(req.user._id, req.user);

    if (!user){
        return next('The user no longer exists', 404);
    }

    res.status(200).json({
        status: 'success',
        message: 'Event added to the list. All the Best!!'
    })
})


const getUserEvents = (req, res)=>{
    res.status(200).json({
        status: 'success',
        events: req.user.events
    })   
}

module.exports = {registerUser, getUserEvents};