const UserData = require("../model/userModel");
const catchAsync = require("../utils/catchAsync");

const getUserData = (req, res)=>{
    res.status(200).json({
        status: 'success',
        user: req.user
    })
}

const updateRole = catchAsync(async (req, res, next)=>{
    const updatingUser = await UserData.findByIdAndUpdate(req.user._id, {role: 'CA'}, {
        new: true
    })

    if (!updatingUser.generated_id || updatingUser.generated_id[4]==='P'){
        await updatingUser.generateUniqueId();
    }


    res.status(200).json({
        status: 'success',
        user: updatingUser
    })
})


module.exports = {getUserData, updateRole};