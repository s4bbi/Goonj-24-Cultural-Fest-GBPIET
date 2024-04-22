const Razorpay = require("razorpay");
const crypto = require("crypto");
const paymentData = require("../utils/paymentTypes");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const UserModel = require('../model/userModel');

const isPaid = (req, res, next) => {
  if (!req.user.isPaid) {
    return next(new AppError("You have not paid yet", 402));
  }
  next();
};

const createOrderId = catchAsync(async (req, res, next) => {
  const instance = new Razorpay({
    key_id: `${process.env.RAZORPAY_API_KEY}`,
    key_secret: `${process.env.RAZORPAY_API_SECRET}`,
  });

  let options;

  if (!req.params.paymentId) {
    return next(new AppError("No Payment type specified"));
  } else if (req.params.paymentId === "1") {
    options = paymentData[0];
  } else if (req.params.paymentId === "2") {
    options = paymentData[1];
  } else {
    return next(new AppError("Invalid Payment type specified"));
  }

  try {
    const order = await instance.orders.create(options);
    res.status(200).json({
      status: "success",
      order,
    });
  } catch (error) {
    return next(new AppError("Error creating order", 500));
  }
});


// this is for verification of payment, updating user's isPaid field, generating unique id for the users and incrementing ca id
const paymentVerification = catchAsync(async (req, res) => {
  let generatedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
    .update(req.body.razorpay_order_id + "|" + req.body.razorpay_payment_id)
    .digest("hex");

  if (generatedSignature === req.body.razorpay_signature) {
    // this is to update isPaid field and generate unique id
    const user = await UserModel.findByIdAndUpdate(req.user._id, {
        isPaid: true
    })

    await user.generateUniqueId();

    // TODO IMPORTANT complete this ASAP
    // to increment ca id 
    const info = await UserModel.findOne({
      generated_id: req.params.caid
    });

    
    
    res.json({
      status: "success",
    });
  } else {
    res.status(400).send("Invalid Signature");
  }
});

module.exports = { isPaid, createOrderId, paymentVerification };
