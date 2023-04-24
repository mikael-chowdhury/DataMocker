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
exports.NameGenerator = void 0;
const util_1 = require("../util/util");
class NameGenerator {
    constructor() { }
    toType(obj) {
        return obj;
    }
    generate() {
        return new Promise((res, rej) => __awaiter(this, void 0, void 0, function* () {
            try {
                // Fetch both name lists in parallel
                const response = yield Promise.all([
                    (0, util_1.fetchNames)((0, util_1.pickRandom)(["male", "female"])),
                    (0, util_1.fetchNames)("surnames"),
                ]);
                // Promise.all returns an array of responses
                // to our two requests, so select them
                const [firstNames, lastNames] = response;
                // Pick a random name from each list
                const firstName = (0, util_1.pickRandom)(firstNames.data);
                const lastName = (0, util_1.pickRandom)(lastNames.data);
                // Use a template literal to format the full name
                res(`${firstName} ${lastName}`);
            }
            catch (error) {
                console.error("Unable to generate name:", error);
            }
        }));
    }
    generateFirstName() {
        return new Promise((res, rej) => __awaiter(this, void 0, void 0, function* () {
            const name = yield (0, util_1.fetchNames)((0, util_1.pickRandom)(["male", "female"]));
            res((0, util_1.pickRandom)(name.data));
        }));
    }
    generateLastName() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((res, rej) => __awaiter(this, void 0, void 0, function* () {
                const surnames = yield (0, util_1.fetchNames)("surnames");
                res((0, util_1.pickRandom)(surnames));
            }));
        });
    }
    validate(name) {
        return name.split(/ /g).length >= 2;
    }
}
exports.NameGenerator = NameGenerator;
