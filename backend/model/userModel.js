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
    paidAmt: {
        type: Number
    },
    img: {
        type: String
    },
    googleSubjectId:{
        type: String,
        required: true,
        select: false
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
    isPaid: {
        type: Boolean,
        default: false
    },
    payment: {
        type: Number
    },
    events: {
        type: Array,
        default: []
    },
    ca_counter: {
        type: Number,
        default:0
    },
    role: {
        type: String,
        enum: ['CA', 'CPT', 'PT'],
        default: 'PT'
    },
    generated_id: {
        type: String,
        unique: true
    },
    date:{
        type: Date,
        default: Date.now
    }
})




// this is generated id to send back to client after payment

userSchema.methods.generateUniqueId = async function() {
    let id;
    do {
        id = 'GNJ-' + this.role + "-" + generateRandomNumber();
    } while (await UserData.exists({ generated_id: id })); // Corrected this line
    this.generated_id = id;
    await this.save();
    return id;
}


function generateRandomNumber(){
    return Math.floor(Math.random() * (69999 - 61111 + 1)) + 61111;   
}


const UserData = mongoose.model('UserData', userSchema);
module.exports = UserData;
// task 1 : ca_counter increment with each CA ID use 
// task 2 : Checking for valid CA ID 
