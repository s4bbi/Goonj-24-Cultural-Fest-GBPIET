const dotenv = require('dotenv');
const app = require('./main');
const mongoose = require('mongoose');

process.on('unhandledRejection', err=>{
    console.log(err.name, err.message);
    console.log('UNHANDLER REJECTION! 💣 Shutting down...')
})

dotenv.config({path: './config.env'});

const DB = process.env.DATABASE_URL.replace('<password>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB).then(con=>{
    console.log('DB connection successful');
}).catch(err=>{
    console.error(err);
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`)
})

process.on('unhandledRejection', err=>{
    console.log('UNHANDLER REJECTION! 💣 Shutting down...')
    console.log(err);

    server.close(()=>{
        process.exit(1);
    })
})