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
exports.generateRandomDigits = exports.getRandomInt = exports.pickRandom = exports.fetchNames = exports.fetchData = void 0;
function fetchData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(url);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        }
        catch (error) {
            console.error("Unable to fetch data:", error);
        }
    });
}
exports.fetchData = fetchData;
function fetchNames(nameType) {
    return fetchData(`https://www.randomlists.com/data/names-${nameType}.json`);
}
exports.fetchNames = fetchNames;
function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
}
exports.pickRandom = pickRandom;
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
exports.getRandomInt = getRandomInt;
function generateRandomDigits(length) {
    let result = "";
    for (let i = 0; i < length; i++) {
        result += getRandomInt(0, 9);
    }
    return result;
}
exports.generateRandomDigits = generateRandomDigits;
