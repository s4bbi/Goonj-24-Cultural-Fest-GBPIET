const catchAsync = require("../utils/catchAsync");

const getUserData = catchAsync(async (req, res, next)=>{
    res.status(200).json({
        status: 'success',
        user: req.user
    })
})

module.exports = {getUserData};