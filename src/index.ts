import { EmailGenerator } from "./generators/EmailGenerator";
import { NameGenerator } from "./generators/NameGenerator";
import { PhoneNumberGenerator } from "./generators/PhoneNumberGenerator";

import { GenerationStructure } from "./types";

const firstName = () => {
  return new NameGenerator().generateFirstName;
};

function lastName() {
  return new NameGenerator().generateLastName;
}

function email() {
  return new EmailGenerator().generate;
}

function phone() {
  return new PhoneNumberGenerator().generate;
}

async function generate<T extends {}>(
  structure: GenerationStructure
): Promise<T[]> {
  return new Promise(async (res, rej) => {
    const results: T[] = [];

    for (let i = 0; i < structure.count; i++) {
      let resultObject: { [key: string]: any } = {};

      const templateFunctions = Object.values<() => Promise<any>>(
        (structure.template || {}) as {}
      );
      const keys = Object.keys(structure.template || {});

      await Promise.all(
        keys.map(async (key, index) => {
          resultObject[key as keyof typeof structure.template] =
            await templateFunctions[index]();

          if (index == keys.length - 1) {
            results.push(resultObject as unknown as T);
          }
        })
      );

      if (i == structure.count - 1) res(results);
    }
  });
}

export default { firstName, lastName, email, phone, generate };
