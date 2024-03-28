const dotenv = require('dotenv');

const app = require('./main');
const mongoose = require('mongoose');

dotenv.config({path: './config.env'});

const DB = process.env.DATABASE_URL.replace('<password>', process.env.DATABASE_PASSWORD);
console.log(process.env.RAZORPAY_API_KEY)

mongoose.connect(DB).then(con=>{
    console.log('DB connection successful');
}).catch(err=>{
    console.error(err);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`)
})