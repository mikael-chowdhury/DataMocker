"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const EmailGenerator_1 = require("./generators/EmailGenerator");
const NameGenerator_1 = require("./generators/NameGenerator");
const PhoneNumberGenerator_1 = require("./generators/PhoneNumberGenerator");
const _util = __importStar(require("./util/util"));
const firstName = () => {
    return new NameGenerator_1.NameGenerator().generateFirstName;
};
function lastName() {
    return new NameGenerator_1.NameGenerator().generateLastName;
}
function email() {
    return new EmailGenerator_1.EmailGenerator().generate;
}
function phone() {
    return new PhoneNumberGenerator_1.PhoneNumberGenerator().generate;
}
function custom(callback) {
    return callback;
}
function generate(structure) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((res, rej) => __awaiter(this, void 0, void 0, function* () {
            const results = [];
            for (let i = 0; i < structure.count; i++) {
                let resultObject = {};
                const templateFunctions = Object.values((structure.template || {}));
                const keys = Object.keys(structure.template || {});
                yield Promise.all(keys.map((key, index) => __awaiter(this, void 0, void 0, function* () {
                    resultObject[key] =
                        yield templateFunctions[index]();
                    if (index == keys.length - 1) {
                        results.push(resultObject);
                    }
                })));
                if (i == structure.count - 1)
                    res(results);
            }
        }));
    });
}
const util = {
    pickRandom: _util.pickRandom,
    getRandomInt: _util.getRandomInt,
    generateRandomDigits: _util.generateRandomDigits,
};
exports.default = { firstName, lastName, email, phone, custom, generate, util };
