const mongoose = require('mongoose');



const userSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
 
});

const User = module.exports = mongoose.model('User', userSchema);



module.exports.addUser = (user, callback) => {

    const add = {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        phone: user.phone,
        username: user.username,
        password:user.password
    }
    User.create(add, callback);
}