"use strict";
exports.__esModule = true;
var dbConnection_1 = require("./dbConnection");
var server_1 = require("./server");
var PORT = process.env.PORT || 4000;
dbConnection_1.open()
    .then(function () {
    server_1.Server.bootstrap().getApp()
        .listen(PORT, function () { return console.log("Listening on " + PORT); });
})["catch"](function (e) { return console.log(e); });
//# sourceMappingURL=index.js.map