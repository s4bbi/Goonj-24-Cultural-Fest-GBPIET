const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide your name']
    },
    email:{
        type: String,
        required: [true, 'Please provide an email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Invalid Email']
    },

    role:{
        type: String,
        default: 'audience',
        enum: {
            values: ['participant', 'audience', 'ambassador'],
            message: 'Not a valid role'
        }
    },
    pNum:{
        type: String,
        required: [true, 'Please provide a phone number'],
        validate: {
            validator: function(doc){
                return validator.isMobilePhone(doc, 'en-IN', {strictMode: false});
            },
            message: props=>  `${props.value} is not a valid phone number`
        }
    },
    state: {
        type: String, 
        required: [true, 'Please enter a state']
    },
    city: {
        type: String, 
        required: [true, 'Please enter a city']
    },
    college: {
        type: String, 
        required: [true, 'Please enter a college name']
    },
    payment: {
        type: Number
    },
    events: {
        type: Array,
        default: []
    },
    generated_id: {
        type: String
    },
    date:{
        type: Date,
        default: Date.now
    }
})


const UserData = mongoose.model('UserData', userSchema);

module.exports = UserData;

// TODO no need to save ca_id. Create a separate auth for ca and create their IDs but will these coupon be valid indefinitely or for once.
// TODO if a person pays participant fees then change role from audience to participant
// TODO add +91 b4 pnum to make validator work