import { IGenerator, PhoneNumber } from "../types";
export declare class PhoneNumberGenerator implements IGenerator<PhoneNumber> {
    constructor();
    toType(obj: string): PhoneNumber;
    generate(): Promise<PhoneNumber>;
    validate(phoneNumber: PhoneNumber): boolean;
}
