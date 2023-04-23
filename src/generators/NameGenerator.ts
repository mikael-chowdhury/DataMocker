import { IGenerator, Name } from "../types";
import { fetchNames, pickRandom } from "../util/util";

export class NameGenerator implements IGenerator<Name> {
  constructor() {}

  toType(obj: string): Name {
    return obj as Name;
  }

  generate(): Promise<Name> {
    return new Promise(async (res, rej) => {
      try {
        // Fetch both name lists in parallel
        const response = await Promise.all([
          fetchNames(pickRandom(["male", "female"])),
          fetchNames("surnames"),
        ]);

        // Promise.all returns an array of responses
        // to our two requests, so select them
        const [firstNames, lastNames] = response;

        // Pick a random name from each list
        const firstName = pickRandom(firstNames.data);
        const lastName = pickRandom(lastNames.data);

        // Use a template literal to format the full name
        res(`${firstName} ${lastName}`);
      } catch (error) {
        console.error("Unable to generate name:", error);
      }
    });
  }

  generateFirstName(): Promise<string> {
    return new Promise(async (res, rej) => {
      const name = await fetchNames(pickRandom(["male", "female"]));
      res(pickRandom(name.data));
    });
  }

  async generateLastName(): Promise<string> {
    return new Promise(async (res, rej) => {
      const surnames = await fetchNames("surnames");
      res(pickRandom(surnames.data));
    });
  }

  validate(name: String): boolean {
    return name.split(/ /g).length >= 2;
  }
}
