const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    otp: {
        type: String,
        default: null,
         unique: true
    },
    otpExpiresAt: {
        type: Date,
        default: null
    }
}, { timestamps: true, versionKey: false });

const User = mongoose.model('user', userSchema);

module.exports = User;