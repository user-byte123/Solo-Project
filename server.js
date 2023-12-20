const path = require('path');
const express = require('express');
const app = express();
const myRouter = require('./routes/myRouter.js')
const mongoose = require('mongoose');
const PORT = 3000;

const MONGO_URI = "mongodb+srv://ewong1217:8qogx2qu38W3Nasu@cluster0.vq8eez3.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Database connected..')
    })
// mongoose.connect(MONGO_URI, {
//   // options for the connect method to parse the URI
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   // sets the name of the DB that our collections are part of
//   dbName: 'Formulary'
// })
//   .then(() => console.log('Connected to Mongo DB.'))
//   .catch(err => console.error('Error connecting to MongoDB:', err))


app.use(express.json());
//I think i need to be able to parse the request body:
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.resolve(__dirname, './client')));

//define route handlers
app.use('/api', myRouter);

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));


app.use((err, req, res, next) => {
    console.error('Global error handler', err);
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });


app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;