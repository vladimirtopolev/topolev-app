"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var ObjectId = mongoose.Types.ObjectId;
var getDBConnection_1 = require("./utilities/getDBConnection");
var populateTable_1 = require("./utilities/modules/table/populateTable");
var TABLE = {
    _id: new ObjectId(),
    name: 'partners',
    title: 'Партнеры'
};
var HEADERS = [
    {
        _id: new ObjectId(),
        type: 'INPUT',
        internalName: 'title',
        name: 'Наименование',
        order: 1
    },
    {
        _id: new ObjectId(),
        type: 'INPUT',
        internalName: 'url',
        name: 'URL сайта',
        notLocalized: true,
        order: 1
    },
    {
        _id: new ObjectId(),
        type: 'IMAGE',
        internalName: 'logo',
        name: 'Логотип',
        notLocalized: true,
        order: 2
    }
];
var ROWS = [
    {
        _id: new ObjectId(),
        cells: [
            {
                _id: new ObjectId(),
                header: HEADERS[0]._id,
                value: {
                    ru: 'Экспофорум',
                    en: 'Expoforum'
                }
            },
            {
                _id: new ObjectId(),
                header: HEADERS[1]._id,
                value: 'https://expoforum.by/'
            },
            {
                _id: new ObjectId(),
                header: HEADERS[2]._id,
                value: ['https://res.cloudinary.com/dsee6uh8u/image/upload/v1563723500/expoforum_cotlci.png']
            }
        ]
    },
    {
        _id: new ObjectId(),
        cells: [
            {
                _id: new ObjectId(),
                header: HEADERS[0]._id,
                value: {
                    ru: 'Инфо-форум',
                    en: 'Info-forum'
                }
            },
            {
                _id: new ObjectId(),
                header: HEADERS[1]._id,
                value: 'https://infoforum.ru/'
            },
            {
                _id: new ObjectId(),
                header: HEADERS[2]._id,
                value: ['https://res.cloudinary.com/dsee6uh8u/image/upload/v1563723529/infoforum_q4jzym.png']
            }
        ]
    },
    {
        _id: new ObjectId(),
        cells: [
            {
                _id: new ObjectId(),
                header: HEADERS[0]._id,
                value: {
                    ru: 'STS- дизайн',
                    en: 'STS-дизайн'
                }
            },
            {
                _id: new ObjectId(),
                header: HEADERS[1]._id,
                value: 'https://www.stsdesignandprint.com/'
            },
            {
                _id: new ObjectId(),
                header: HEADERS[2]._id,
                value: ['https://res.cloudinary.com/dsee6uh8u/image/upload/v1563723538/sts-design_z58cff.png']
            }
        ]
    },
];
function up() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getDBConnection_1.getMongooseConnection()
                        .then(function (config) {
                        return populateTable_1.populateTable({ TABLE: TABLE, HEADERS: HEADERS, ROWS: ROWS }, function (e) {
                            if (e) {
                                console.log('ISSUE');
                            }
                            else {
                                console.log("Migration script connect to DB: " + config.host);
                            }
                        });
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.up = up;
function down() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/];
        });
    });
}
exports.down = down;
//# sourceMappingURL=20190721174010-tableModule-partnersTable.js.map