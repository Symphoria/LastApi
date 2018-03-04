const mongoose = require('mongoose');


const Schema = mongoose.Schema;

let UserSchema = new Schema({
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: Date,
    tabs: [String]
}, { collection: 'users' });

UserSchema.virtual('username').get(() => {
   return this.email.split("@")[0];
});


module.exports = mongoose.model('Users', UserSchema);