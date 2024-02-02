const mongoose = require('mongoose');

// const MONGO_URI = "mongodb+srv://ewong1217:8qogx2qu38W3Nasu@cluster0.vq8eez3.mongodb.net/?retryWrites=true&w=majority";

// mongoose.connect(MONGO_URI, {
//   // options for the connect method to parse the URI
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   // sets the name of the DB that our collections are part of
//   dbName: 'Formulary'
// })
//   .then(() => console.log('Connected to Mongo DB.'))
//   .catch(err => console.error('Error connecting to MongoDB:', err))


const Schema = mongoose.Schema;

const drugSchema = new Schema({
    name: {type:String, required: true},
    strength: {type: Number, required: true},
    measurement: {type: String, required: true},
    route: {type: String, required: true},
    tier: {type: String, required: true},
    alternatives: {type: String}
});

const Drug = mongoose.model('drug', drugSchema);


module.exports = Drug;