const paymentData = [ // this is for both CA and participant
    { type1: // complete cost
        {
            amount: 199900,
            currency: 'INR',
            receipt: 'PT1'
        }
    },{
        type2:{ // only ca discont
            amount: 189900,
            currency: 'INR',
            receipt: 'PT2'
        }
    },{
        type3: { // only college id
            amount: 159900,
            currency: 'INR',
            receipt: 'PT3'
        }
    },{
        type4 :{ // ca + college id
            amount: 149900,
            currency: 'INR',
            receipt: 'PT4'
        }
    },{
        type5: { // this is for participant
            amount: 30000,
            currency: 'INR',
            receipt: 'A1'
        }
    }
]


// light nhi hai aur battery 9 per cent my clue to wait for now

// TODO add a function to send particular type of amt based on user sent data
// I hardcoded amount values so that at any point it cant be changed externally
// also add roles for events and paymentController type. - DONE
// use pipeline to get ID's of CA or use it uniquely to add +1 to counter in DB

module.exports = paymentData;