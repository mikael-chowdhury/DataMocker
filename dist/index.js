"use strict";
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
exports.default = { firstName, lastName, email, phone, generate };
