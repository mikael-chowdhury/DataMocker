import { IGenerator, Name } from "../types";
export declare class NameGenerator implements IGenerator<Name> {
    constructor();
    toType(obj: string): Name;
    generate(): Promise<Name>;
    generateFirstName(): Promise<string>;
    generateLastName(): Promise<string>;
    validate(name: String): boolean;
}
