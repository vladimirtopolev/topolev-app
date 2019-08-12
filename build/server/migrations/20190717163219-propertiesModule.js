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
var property_model_1 = require("../src/modules/properties/models/property.model");
var db_1 = require("./utilities/db");
var PROPERTIES = [
    {
        _id: new ObjectId(),
        type: 'INPUT',
        name: 'Назание компании',
        internalName: 'company',
        order: 1,
        value: {
            ru: 'OOO "Экспосервис"',
            en: '220021, Belarus, Minsk'
        },
    },
    {
        _id: new ObjectId(),
        type: 'INPUT',
        name: 'Индекс, страна, город',
        internalName: 'country',
        group: 'address',
        titleGroup: 'Адрес',
        order: 1,
        value: {
            ru: '220021, Беларусь, Минск',
            en: '220021, Belarus, Minsk'
        },
    },
    {
        _id: new ObjectId(),
        type: 'INPUT',
        name: 'Улица, дом, офис',
        internalName: 'street',
        group: 'address',
        titleGroup: 'Адрес',
        order: 1,
        value: {
            ru: 'ул. Челюскинцев, 15-1',
            en: 'st. Cheluskincev, 15-1'
        },
    },
    {
        _id: new ObjectId(),
        type: 'INPUT',
        name: 'Широта',
        internalName: 'latitude',
        group: 'coordinate',
        titleGroup: 'Координаты',
        order: 1,
        notLocalized: true,
        value: 53.849535
    },
    {
        _id: new ObjectId(),
        type: 'INPUT',
        name: 'Долгота',
        internalName: 'longitude',
        group: 'coordinate',
        titleGroup: 'Координаты',
        order: 1,
        notLocalized: true,
        value: 27.471748
    },
    {
        _id: new ObjectId(),
        type: 'INPUT',
        name: 'Телефон 01',
        internalName: 'phone1',
        titleGroup: 'Телефонные номера',
        group: 'phone',
        order: 2,
        notLocalized: true,
        value: '+375 17 273 73 01',
    },
    {
        _id: new ObjectId(),
        type: 'INPUT',
        name: 'Телефон 02',
        internalName: 'phone2',
        titleGroup: 'Телефонные номера',
        group: 'phone',
        order: 2,
        notLocalized: true,
        value: '+375 17 273 73 02'
    },
    {
        _id: new ObjectId(),
        type: 'INPUT',
        name: 'Телефон 03',
        internalName: 'phone3',
        titleGroup: 'Телефонные номера',
        group: 'phone',
        order: 2,
        notLocalized: true,
        value: '+375 17 273 73 03'
    },
    {
        _id: new ObjectId(),
        type: 'INPUT',
        name: 'Instagram',
        internalName: 'link_instagram',
        titleGroup: 'Ссылки на социальные сети',
        group: 'social',
        order: 2,
        notLocalized: true,
        value: 'https://www.instagram.com/leonid_nyppeli/',
    },
    {
        _id: new ObjectId(),
        type: 'TEXTAREA',
        name: 'О нас',
        internalName: 'aboutUs',
        order: 2,
        value: {
            ru: "\n                <p>\n                \u041F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u0435 \"\u042D\u043A\u0441\u043F\u043E\u0441\u0435\u0440\u0432\u0438\u0441\" \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043D\u0430 \u0440\u044B\u043D\u043A\u0435 \u0432\u044B\u0441\u0442\u0430\u0432\u043E\u0447\u043D\u044B\u0445 \u0443\u0441\u043B\u0443\u0433 \n                \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0438 \u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C \u0431\u043E\u043B\u0435\u0435 28 \u043B\u0435\u0442, \u043D\u0430\u0447\u0438\u043D\u0430\u044F \u0441 1991 \u0433\u043E\u0434\u0430.\n                </p>\n                <p>\n                \u041C\u044B \u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u043C \u0443\u0441\u043B\u0443\u0433\u0438 \u043F\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044E, \u0434\u0438\u0437\u0430\u0439\u043D\u0443 \u0438 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0443 \u0432\u044B\u0441\u0442\u043E\u0432\u043E\u0447\u043D\u044B\u0445 \u0441\u0442\u0435\u043D\u0434\u043E\u0432.\n                </p>\n                <p>\n                \u0417\u0430\u043B\u043E\u0433\u043E\u043C \u0443\u0441\u043F\u0435\u0445\u0430 \u0440\u0430\u0431\u043E\u0442\u044B \u0433\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u043B\u0430\u0436\u0435\u043D\u043D\u044B\u0439 \u0442\u0440\u0443\u0434 \u043A\u043E\u043C\u0430\u043D\u0434\u044B \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u043E\u0432, \n                \u0443\u043C\u0435\u043D\u0438\u0435 \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u043E \u0438 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E \u0440\u0435\u0448\u0430\u0442\u044C \u0440\u0430\u0437\u043D\u043E\u043E\u0431\u0440\u0430\u0437\u043D\u044B\u0435 \u0437\u0430\u0434\u0430\u0447\u0438, \u0432\u043E\u0437\u043D\u0438\u043A\u0430\u044E\u0449\u0438\u0435 \u0432 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438 \n                \u0438 \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0438 \u0432\u044B\u0441\u0442\u0430\u0432\u043E\u043A.\n                </p>\n                <p>\n                \u041D\u0430\u0448\u0435 \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u0435 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0433\u0435\u043D\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u043C \u043F\u043E\u0434\u0440\u044F\u0434\u0447\u0438\u043A\u043E\u043C \u0423\u041F \"\u042D\u043A\u0441\u043F\u043E\u0444\u043E\u0440\u043C\u0443\", \u043E\u0434\u0438\u043D \u0438\u0437 \u043B\u0438\u0434\u0435\u0440\u043E\u0432\n                \u043D\u0430\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0432\u044B\u0441\u0442\u0430\u0432\u043E\u0447\u043D\u043E\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430.\n                </p>",
            en: "\n                <p>EXPOSERVICE, Ltd works on market of exhibition services of Republic of Belarus more then 28 years since 1991. \n                </p>\n                <p>\n                We offer such services as design and building exhibition stands\n                </p>\n                <p>\n                Our specialists have huge experience of designing and construction of differing complexity exhibition stands.\n                </p>\n                <p>\n                EXPOSERVICE, Ltd is general contractor of EXPOFORUM, Exhibition Company  one of national exhibition business leaders.\n                </p>\n            "
        },
    },
    {
        _id: new ObjectId(),
        type: 'INPUT',
        name: 'Кол-во лет на рынке',
        internalName: 'yearWork',
        order: 2,
        notLocalized: true,
        value: 28,
    },
    {
        _id: new ObjectId(),
        type: 'INPUT',
        name: 'Копирайт',
        internalName: 'copyright',
        order: 2,
        value: {
            ru: '2019, Удачный дом',
            en: '2019, English copyright'
        },
    },
    {
        _id: new ObjectId(),
        type: 'INPUT',
        name: 'Email',
        internalName: 'mail',
        order: 2,
        notLocalized: true,
        value: 'nyppeli@mail.ru',
    },
    {
        _id: new ObjectId(),
        type: 'INPUT',
        name: 'Facebook',
        internalName: 'link_fb',
        group: 'social',
        titleGroup: 'Ссылки на социальные сети',
        order: 2,
        notLocalized: true,
        value: 'https://www.facebook.com/profile.php?id=100034833429304',
    }
];
function up() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getDBConnection_1.getMongooseConnection()
                        .then(function (config) {
                        return db_1.saveItems(property_model_1.PropertyModel, PROPERTIES, function (e) {
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
            switch (_a.label) {
                case 0: return [4 /*yield*/, getDBConnection_1.getMongooseConnection()
                        .then(function (config) {
                        return db_1.dropTable(property_model_1.PropertyModel, function (e) {
                            if (e) {
                                console.log('ISSUE');
                            }
                            else {
                                console.log("Rollbacl migration script connect to DB: " + config.host);
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
exports.down = down;
//# sourceMappingURL=20190717163219-propertiesModule.js.map