const Razorpay = require("razorpay")
const crypto = require('crypto');
const paymentData = require("../utils/paymentTypes");

const isPaid = (req, res, next)=>{
    next();
}

const createOrderId = async (req, res)=>{
    const instance = new Razorpay({
        key_id: `${process.env.RAZORPAY_API_KEY}`,
        key_secret: `${process.env.RAZORPAY_API_SECRET}`
    });

    let options;
    if (req.user.role==='PT'){ // this is only for participant and once paid we will generate ID and update it in their model
        options = paymentData['type5'];

    }else{
        options = {
            amount: 50000,
            currency: 'INR',
            receipt: 'RCP12'
        }
    }

    
    const order = await instance.orders.create(options);
    res.status(200).json({
        status: 'success',
        order
    })
}

const paymentVerification = async (req, res)=>{
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

