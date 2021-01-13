const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');  // helps us connect to MongoDB
require('dotenv').config();

// Creates our Express Server
const app = express();
const port = process.env.PORT || 5000;

// Connect to DB
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, createIndexes: true, useUnifiedTopology: true })
  .then((result) => app.listen(port))
  .catch((err) => console.log(err))

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// MiddleWare
app.use(cors());
app.use(express.json());


// Add Route Files
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
// Use Route Files
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);