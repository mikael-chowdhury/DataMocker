import PhoneUtil from "google-libphonenumber";
import { IGenerator, PhoneNumber } from "../types";
import { generateRandomDigits, pickRandom } from "../util/util";

export class PhoneNumberGenerator implements IGenerator<PhoneNumber> {
  constructor() {}

  toType(obj: string): PhoneNumber {
    return obj as PhoneNumber;
  }

  async generate(): Promise<PhoneNumber> {
    return new Promise(async (res, rej) => {
      const phonenum: PhoneNumber = pickRandom(["+XXX XXXXXXXXXX"]).replace(
        /X/g,
        () => generateRandomDigits(1)
      );

      res(phonenum);
    });
  }

  validate(phoneNumber: PhoneNumber): boolean {
    const phoneUtil = new PhoneUtil.PhoneNumberUtil();
    try {
      return phoneUtil.isValidNumber(phoneUtil.parse(phoneNumber as string));
    } catch (e) {
      return false;
    }
  }
}
