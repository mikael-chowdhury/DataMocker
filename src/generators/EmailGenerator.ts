import { Email, IGenerator } from "../types";
import { pickRandom } from "../util/util";
import { NameGenerator } from "./NameGenerator";

export class EmailGenerator implements IGenerator<Email> {
  constructor() {}

  toType(obj: string): Email {
    return obj as Email;
  }

  async generate(): Promise<Email> {
    const nameGen = new NameGenerator();
    const name = await nameGen.generate();
    return (name.split(/ /g).join("") +
      "@" +
      pickRandom(["gmail", "outlook", "hotmail", "yahoo"]) +
      ".com") as Email;
  }

  validate(email: String): boolean {
    const regexp = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    return regexp.test(email as string);
  }
}
