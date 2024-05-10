const { Cashfree } = require("cashfree-pg");
const paymentData = require("../utils/paymentTypes");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const UserModel = require("../model/userModel");

const isPaid = (req, res, next) => {
  if (!req.user.isPaid) {
    return next(new AppError("You have not paid yet", 402));
  }

  next();
};

const createOrderId = catchAsync(async (req, res, next) => {
  Cashfree.XClientId = process.env.CASHFREE_API_KEY;
  Cashfree.XClientSecret = process.env.CASHFREE_API_SECRET;
  Cashfree.XEnvironment = Cashfree.Environment.PRODUCTION;

  // if (process.env.NODE_ENV === "production") {
  //   Cashfree.XEnvironment = Cashfree.Environment.PRODUCTION;
  // }

  let amount;

  if (req.params.paymentid === "1") {
    amount = paymentData[0];
  } else if (req.params.paymentid === "2") {
    amount = paymentData[1];
  } else {
    return next(new AppError("Payment Id is not defined", 404));
  }

  const request = {
    order_amount: amount,
    order_currency: "INR",
    order_id: "order_" + Date.now(),
    customer_details: {
      customer_id: "customer" + req.user.pNum,
      customer_phone: req.user.pNum,
      customer_email: req.user.email,
    },

    merchant_name: "Goonj 24",
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
  Cashfree.XEnvironment = Cashfree.Environment.PRODUCTION;

  // if (process.env.NODE_ENV === "production") {
  //   Cashfree.XEnvironment = Cashfree.Environment.PRODUCTION;
  // }

  const response = await Cashfree.PGFetchOrder("2022-09-01", req.body.orderid);

  if (response.data.order_status === "PAID") {
    const user = await UserModel.findByIdAndUpdate(req.user._id, { // the user which has paid his data is stored in 'user' variable
      isPaid: true,
      paidAmt: response.data.order_amount,
    });

    if (user.role === "CA") {
      const updatingUser = await UserData.findByIdAndUpdate(
        user._id,
        { role: "CPT" },
        {
          new: true,
        }
      );
    }

    let caUser = await UserModel.findOneAndUpdate( // this is the ca id which the user has passed
      { generated_id: "GNJ-CA-" + req.params.caid },
      { $inc: { ca_counter: 1 } },
      { new: true }
    );

    if (!caUser){
      caUser = await UserModel.findOneAndUpdate(
        { generated_id: "GNJ-CPT-" + req.params.caid },
        { $inc: { ca_counter: 1 } },
        { new: true }
      );
    }

    if (!user.generated_id) { // did this if the user is ca then its role should remain default that is PT 
      await user.generateUniqueId();

    }else{// this means paid user was already a CA
      const updateUserRole = await UserModel.findByIdAndUpdate(user._id, {
        role: 'CPT'
      });

      updateUserRole.generated_id = updateUserRole.generated_id.replace('CA', 'CPT');
      await updateUserRole.save();


    }

    return res.status(200).json({
      status: "success",
    });
  }

  return next(new AppError("Something went wrong", 500));
});


const webhook = catchAsync(async (req, res, next) => { // this isnt complete but I don't think we will have enough registration to implement it we can manually check fields
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
