const UserData = require("../model/userModel");
const catchAsync = require("../utils/catchAsync");

const getUserData = (req, res)=>{
    res.status(200).json({
        status: 'success',
        user: req.user
    })
}


// here if someone has already paid for the event and want to become ca then we need to update its role from pt to cpt and we need to not generate unique id for that 
// instead we need to replace CA with CPT in generate unique id in our code. 


const updateRole = catchAsync(async (req, res, next)=>{
    let updatingUser;
    if (!req.user.isPaid){ // this is to freshly generate CA IDs
        updatingUser = await UserData.findByIdAndUpdate(req.user._id, {role: 'CA'}, {
            new: true
        })

        if(!updatingUser.generated_id){
            await updatingUser.generateUniqueId();
        }

    }else{ // if a paid user updates to CA then we need to replace PT with CPT
        updatingUser = await UserData.findByIdAndUpdate(req.user._id, {role: 'CPT'}, {
            new:true
        })

        updatingUser.generated_id = updatingUser.generated_id.replace('PT', 'CPT');
        await updatingUser.save();
    }

    res.status(200).json({
        status: 'success',
        user: updatingUser
    })
})


module.exports = {getUserData, updateRole};