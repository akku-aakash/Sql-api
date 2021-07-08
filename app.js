const express = require("express");
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const connectDb = require('./config/Mysqlconnection')
require('dotenv').config({
    path: './config/config.env'
});

const app = express();

connectDb()

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get("/", (req, res) => {
    return res.json({ message: 'Hello from node' });
});

app.use("", (req, res) => {
    return res.json({ message: 'Path Not found' });
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));