const Razorpay = require("razorpay")
const crypto = require('crypto');
const catchAsync = require("../utils/catchAsync");


const isPaid = (req, res, next)=>{
    next();
}


const createOrderId = catchAsync(async (req, res)=>{
    const instance = new Razorpay({
        key_id: `${process.env.RAZORPAY_API_KEY}`,
        key_secret: `${process.env.RAZORPAY_API_SECRET}`
    });


    const options = {
        amount: 50000,
        currency: 'INR',
        receipt: 'RCP12'
    }
    
    const order = await instance.orders.create(options);
    res.status(200).json({
        status: 'success',
        order
    })
})

const paymentVerification = async (req, res)=>{
    const {razorpay_payment_id, razorpay_order_id, razorpay_signature} = req.body
    let generatedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_API_SECRET)
                                .update(req.body.razorpay_order_id + '|' +req.body.razorpay_payment_id)
                                .digest('hex')


    if (generatedSignature===req.body.razorpay_signature){
        console.log('request is legit')
        res.json({
            status: 'ok'
        })
    }else{
        res.status(400).send('Invalid Signature')
    }
}


module.exports = {isPaid, createOrderId, paymentVerification};

