import { Email, IGenerator } from "../types";
export declare class EmailGenerator implements IGenerator<Email> {
    constructor();
    toType(obj: string): Email;
    generate(): Promise<Email>;
    validate(email: String): boolean;
}
