const express = require ('express');
const app = express();


const dotenv = require('dotenv');
//Setting up congif.env file variables
dotenv.config({path : './config/config.env'})


//Importing all routes
const jobs = require('./routes/jobs')

app.use('/api/v1', jobs);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server started on port ${process.env.PORT} in ${process.env.NODE_env} mode.`);
})