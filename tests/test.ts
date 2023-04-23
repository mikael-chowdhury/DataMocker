import { EmailGenerator } from "../src/generators/EmailGenerator";
import { NameGenerator } from "../src/generators/NameGenerator";
import { PhoneNumberGenerator } from "../src/generators/PhoneNumberGenerator";

describe("email mocks", () => {
  const generator = new EmailGenerator();

  it("can generate a valid email", async () => {
    const email = await generator.generate();
    expect(email).toContain("@");
  });

  it("can validate emails successfully", async () => {
    expect(generator.validate("mikaelchowdhury61@gmail.com")).toBeTruthy();
    expect(generator.validate("mikaelchowdhury61gmail.com")).toBeFalsy();
  });
});

describe("name mocks", () => {
  const generator = new NameGenerator();

  it("can generate a valid name", async () => {
    const name = await generator.generate();
    expect(name.split(/ /g).length > 0).toBeTruthy();
  });

  it("can validate names successfully", async () => {
    expect(generator.validate("Mikael Chowdhury")).toBeTruthy();
    expect(generator.validate("Mikaelchowdhury")).toBeFalsy();
  });
});

describe("phone number mocks", () => {
  const generator = new PhoneNumberGenerator();

  it("can generate a valid phone number", async () => {
    const phonenumber = await generator.generate();
    expect(phonenumber).toContain("+");
  });

  it("can validate phone numbers successfully", async () => {
    expect(generator.validate("+44 7508991072")).toBeTruthy();
    expect(generator.validate("+100204 2095230593259235")).toBeFalsy();
  });
});
