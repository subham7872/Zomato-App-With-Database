const mongoose = require("mongoose");



const UserSchema = mongoose.Schema({
    first_name: {type: String},
    last_name: {type: String},
    email: {type: String},
    mobile: {type: Number},
    password: {type: String},
});


const UserModel = mongoose.model("user", UserSchema, "users");

module.exports = UserModel;