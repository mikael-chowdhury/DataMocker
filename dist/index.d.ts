import * as _util from "./util/util";
import { GenerationStructure } from "./types";
declare function lastName(): () => Promise<string>;
declare function email(): () => Promise<String>;
declare function phone(): () => Promise<String>;
declare function custom<T>(callback: () => T): () => T;
declare function generate<T extends {}>(structure: GenerationStructure): Promise<T[]>;
declare const _default: {
    firstName: () => () => Promise<string>;
    lastName: typeof lastName;
    email: typeof email;
    phone: typeof phone;
    custom: typeof custom;
    generate: typeof generate;
    util: {
        pickRandom: typeof _util.pickRandom;
        getRandomInt: typeof _util.getRandomInt;
        generateRandomDigits: typeof _util.generateRandomDigits;
    };
};
export default _default;
