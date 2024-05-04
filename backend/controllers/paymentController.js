const { Cashfree } = require("cashfree-pg");
const paymentData = require("../utils/paymentTypes");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const UserModel = require("../model/userModel");
const util = require("util");

const isPaid = (req, res, next) => {
  if (!req.user.isPaid) {
    return next(new AppError("You have not paid yet", 402));
  }
  next();
};

const createOrderId = catchAsync(async (req, res, next) => {
  Cashfree.XClientId = process.env.CASHFREE_API_KEY;
  Cashfree.XClientSecret = process.env.CASHFREE_API_SECRET;
  Cashfree.XEnvironment = Cashfree.Environment.SANDBOX;

  if (process.env.NODE_ENV === "production") {
    Cashfree.XEnvironment = Cashfree.Environment.PRODUCTION;
  }

  var request = {
    order_amount: 1999,
    order_currency: "INR",
    order_id: "order_34571221" + Date.now(),
    customer_details: {
      customer_id: "walterwNrcMi",
      customer_phone: "9999999999",
    },
  };

  const orderid = await Cashfree.PGCreateOrder("2022-09-01", request);
  res.status(200).json({
    status: "success",
    message: orderid.data,
  });
});

const paymentVerification = catchAsync(async (req, res, next) => {
  Cashfree.XClientId = process.env.CASHFREE_API_KEY;
  Cashfree.XClientSecret = process.env.CASHFREE_API_SECRET;
  Cashfree.XEnvironment = Cashfree.Environment.SANDBOX;

  if (process.env.NODE_ENV === "production") {
    Cashfree.XEnvironment = Cashfree.Environment.PRODUCTION;
  }

  console.log(req.body.orderid);

  const response = await Cashfree.PGFetchOrder("2022-09-01", req.body.orderid);

  if (response.data.order_status === "PAID") {
    const user = await UserModel.findByIdAndUpdate(req.user._id, {
      isPaid: true,
    });

    if (!user.generated_id){
      await user.generateUniqueId();
    }

    return res.status(200).json({
      status: "success",
    });
  }

  return next(new AppError("Something went wrong", 500));
});

const webhook = catchAsync(async (req, res, next) => {
  try {
    Cashfree.PGVerifyWebhookSignature(
      req.headers["x-webhook-signature"],
      req.rawBody,
      req.headers["x-webhook-timestamp"]
    );
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = { isPaid, createOrderId, webhook, paymentVerification };
