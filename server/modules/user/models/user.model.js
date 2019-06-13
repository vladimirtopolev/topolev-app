"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');
var bcrypt = require('bcrypt-nodejs');
// TODO: eliminate and move into config file
var SALT = '$2a$10$vI8aWBnW3fID.ZQ4/zo1G.q1lRps.9cGLcZEiGDMVr5yUP1KUOYTa';
var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    firstName: {
        type: String,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    created: {
        type: Date,
        "default": Date.now
    },
    password: {
        type: String,
        required: true
    }
});
UserSchema.pre('save', function (next) {
    this.password = bcrypt.hashSync(this.password, SALT);
    next();
});
UserSchema.method('checkPassword', function (password) {
    return bcrypt.compareSync(password, this.password);
});
UserSchema.method('toJSON', function () {
    var obj = this.toObject();
    delete obj.password;
    return obj;
});
UserSchema.plugin(uniqueValidator, { message: 'Path `{PATH}` must be unique' });
exports.UserModel = mongoose.model('User', UserSchema);
//# sourceMappingURL=user.model.js.map