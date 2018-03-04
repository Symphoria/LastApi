const mongoose = require('mongoose');


const Schema = mongoose.Schema;

let UserSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    lastLoggedIn: { type: Date },
    tabs: [String]
});


module.exports = mongoose.model('Users', UserSchema);