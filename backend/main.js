const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const xss = require('xss-clean');
const hpp = require('hpp');
const mongoSanitize = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');

const globalErrorHandler = require('./controllers/globalErrorHandler');
const authRoute = require('./routes/authRoute');
const eventRoute = require('./routes/eventRoute');
const paymentRoute = require('./routes/paymentRoute');
const userRoute = require('./routes/userRoute');

const app = express();

app.use(helmet());


// app.use(cors({
//     origin: ["https://goonj24.vercel.app", "https://goonj.gbpiet.in"],
//     methods: 'GET,POST,PATCH,DELETE'
// }))

app.use(cors());

app.use(morgan('dev'));

const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000, // in millisecond
    message: 'Too many request from this IP, please try again in few hours'
})

app.use('/api', limiter);

app.use(express.json({
    limit: '10kb'
}));

app.use(mongoSanitize());
app.use(xss());

app.use(hpp()); 

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res)=>{
    res.send('Server is working properly');
})

app.use('/api/v1/auth', authRoute);
app.use('/api/v1/events', eventRoute);
app.use('/api/v1/checkout', paymentRoute);
app.use('/api/v1/users', userRoute);

app.use(globalErrorHandler);


module.exports = app;
