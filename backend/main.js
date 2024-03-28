const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const globalErrorHandler = require('./controllers/globalErrorHandler');
const authRoute = require('./routes/authRoute');

const app = express();

app.use(morgan('dev'));

app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET,POST,PATCH,DELETE'
}))


app.use(express.json());

app.use('/api/v1/auth', authRoute);

app.use(globalErrorHandler);

app.get('/', function (req, res) {
    res.send('Server Run Check');
})

module.exports = app;
