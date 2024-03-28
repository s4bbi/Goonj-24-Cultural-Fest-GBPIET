const UserData = require('../model/userModel');
const catchAsync = require('../utils/catchAsync');

// adding users to the event
const registerUser = catchAsync(async (req, res, next)=>{
    const isPresent = req.user.events.includes(req.body.eventCode);
    if (isPresent) {
        return res.status(409).json({
            status: 'error',
            message: 'You are already registered for this event.'
        }); 
    }


    req.user.events.push(req.body.eventCode);
    const eventsToUpdate = {
        events: req.user.events
    }

    const user = await UserData.findByIdAndUpdate(req.user._id, eventsToUpdate);

    if (!user){
        return next('The user no longer exists', 404);
    }

    res.status(200).json({
        status: 'success',
        message: 'Event added to the list. All the Best!!'
    })
})



// getting all user events
const getUserEvents = (req, res)=>{
    res.status(200).json({
        status: 'success',
        events: req.user.events
    })   
}

//deleting event from user
const unRegisterUser = catchAsync(async (req, res, next)=>{
    const isPresent = req.user.events.includes(req.body.eventCode);
    if (!isPresent){
        return res.status(400).json({
            status: 'error',
            message: 'You have not signed up for this event'
        }); 
    }

    req.user.events = req.user.events.filter(ele => ele !== req.body.eventCode);

    const eventsToUpdate = {
        events: req.user.events
    }

    const user = await UserData.findByIdAndUpdate(
        req.user._id, 
        eventsToUpdate, 
        {new: true}
    );

    if (!user){
        return next('The user no longer exists', 404);
    }

    res.status(200).json({
        status: 'success',
        data: user.events,
        message: 'You have unregistered'
    })
})

module.exports = {registerUser, getUserEvents, unRegisterUser};
