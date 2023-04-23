import { GenerationStructure } from "./types";
declare function lastName(): () => Promise<string>;
declare function email(): () => Promise<String>;
declare function phone(): () => Promise<String>;
declare function generate<T extends {}>(structure: GenerationStructure): Promise<T[]>;
declare const _default: {
    firstName: () => () => Promise<string>;
    lastName: typeof lastName;
    email: typeof email;
    phone: typeof phone;
    generate: typeof generate;
};
export default _default;
