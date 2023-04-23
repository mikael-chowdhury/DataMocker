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
exports.EmailGenerator = void 0;
const util_1 = require("../util/util");
const NameGenerator_1 = require("./NameGenerator");
class EmailGenerator {
    constructor() { }
    toType(obj) {
        return obj;
    }
    generate() {
        return __awaiter(this, void 0, void 0, function* () {
            const nameGen = new NameGenerator_1.NameGenerator();
            const name = yield nameGen.generate();
            return (name.split(/ /g).join("") +
                "@" +
                (0, util_1.pickRandom)(["gmail", "outlook", "hotmail", "yahoo"]) +
                ".com");
        });
    }
    validate(email) {
        const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        return regexp.test(email);
    }
}
exports.EmailGenerator = EmailGenerator;
