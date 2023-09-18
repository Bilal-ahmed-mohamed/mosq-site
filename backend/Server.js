require('dotenv').config()
const express = require("express");
const database = require("./config/config");
const darsaTurfs = require("./routes/darsa");
const cors = require("cors");


const app = express();

const PORT = process.env.PORT || 4000;


app.use(express.json());
app.use(cors());


// routes
app.use('/api/Darsa' , darsaTurfs)

// to autehnticate databse
try {
    database.authenticate();
    console.log('you are connected to the database');
} catch (error) {
    console.log('connection error :' , error);
}

// middleware
app.use((req,res,next)=> {
    console.log(req.path , req.method);
    next();
})

app.listen(4000 , () => {
    console.log('its litsenning on port 4000');
})