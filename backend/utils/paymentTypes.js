const paymentData = [
  // this is for both CA and participant
  1750, 1030
];

// light nhi hai aur battery 9 per cent my clue to wait for now

// TODO add a function to send particular type of amt based on user sent data
// I hardcoded amount values so that at any point it cant be changed externally
// also add roles for events and paymentController type. - DONE
// use pipeline to get ID's of CA or use it uniquely to add +1 to counter in DB

module.exports = paymentData;
