"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_model_1 = require("../models/user.model");
var config = require("config");
var jwt = require("jsonwebtoken");
function createUserToken(user) {
    return jwt.sign({ user: user }, config.get('authentication.token.secret'));
}
exports.createUserToken = createUserToken;
var UsersController = /** @class */ (function () {
    function UsersController() {
        this.getAllUsers = function (req, res) {
            user_model_1.UserModel.find({})
                .exec()
                .then(function (users) { return res.json(users); })
                .catch(function (err) { return res.status(500).json({ error: 'Server DB error' }); });
        };
        this.signin = function (req, res) {
            var _a = req.body, identifier = _a.identifier, password = _a.password;
            user_model_1.UserModel.findOne({ $or: [{ username: identifier }, { email: identifier }] })
                .exec()
                .then(function (user) {
                if (!user) {
                    return res.status(401).json({ error: 'There is no user with such username' });
                }
                if (user.checkPassword(password)) {
                    return res.json({ token: createUserToken(user) });
                }
                return res.status(401).json({ error: 'Password is incorrect' });
            })
                .catch(function (err) { return res.status(401).json({ error: 'Problem with server' }); });
        };
    }
    return UsersController;
}());
exports.default = new UsersController();
//# sourceMappingURL=users.controller.js.map