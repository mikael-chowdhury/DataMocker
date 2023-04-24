# DataMocker

DataMocker is a lightweight, flexible, and easy-to-use TypeScript library for generating realistic mock data for testing and development purposes. It comes with a variety of predefined templates for common data types, such as names, addresses, emails, and phone numbers, and also supports custom templates for more specialized use cases.

<br>

# Features

- Predefined templates for common data types
- Customizable templates for specific needs
- Flexible and easy-to-use API

<br>

## Installation

### Install with npm

```
npm install @rexysaur/datamocker --save-dev
```

<br>

# Documentation

## Generating User Information (typescript)

### Getting a random first name

```typescript
import dm from "@rexysaur/datamocker";

(async () => {
  const randomFirstName = await dm.firstName()(); // dm.firstName() returns a function that needs to be executed
  console.log(randomFirstName); // e.g Hayden
})();
```

### Getting a random last name name

```typescript
import dm from "@rexysaur/datamocker";

(async () => {
  const randomLastName = await dm.lastName()(); // dm.lastName() returns a function that needs to be executed
  console.log(randomLastName); // e.g Stein
})();
```

### Getting a random email

```typescript
import dm from "@rexysaur/datamocker";

(async () => {
  const randomEmail = await dm.email()(); // dm.email() returns a function that needs to be executed
  console.log(randomEmail); // e.g CassandraKeller@hotmail.com
})();
```

### Generating bulk users

```typescript
import dm from "@rexysaur/datamocker";

type UserStructure = {
  firstName: string;
  email: string;
};

(async () => {
  const users = await dm.generate<UserStructure>({
    count: 2, // Number of users to generate
    template: {
      // the format of the user. This should relate to the Generic passed into the function

      // Properties of each user
      firstName: dm.firstName(),
      email: dm.email(),
    },
  });

  console.log(users);
  //
  // [
  //    { firstName: 'Keira', email: 'RayanRice@gmail.com' },
  //    { firstName: 'Izabella', email: 'LeonardCox@outlook.com' }
  // ]
  //
})();
```

### Creating your own generator

```typescript
import dm from "@rexysaur/datamocker";

type UserStructure = {
  firstName: string;
  email: string;
  favouriteColour: string;
};

(async () => {
  const users = await dm.generate<UserStructure>({
    count: 2, // Number of users to generate
    template: {
      // the format of the user. This should relate to the Generic passed into the function

      // Properties of each user
      firstName: dm.firstName(),
      email: dm.email(),
      favouriteColour: dm.custom(() =>
        dm.util.pickRandom(["red", "green", "blue", "yellow"])
      ), // Custom generator function
      // Picks a random element from the array
    },
  });

  console.log(users);
})();
```

## Utilities

DataMocker provides a few utility functions that could be helpful where creating generator templates

### pickRandom

pickRandom chooses and returns a random element of an array

```typescript
pickRandom(["blue", "yellow", "red", "green"]); // e.g yellow
pickRandom(["blue", "yellow", "red", "green"]); // e.g red
```

### getRandomInt

getRandomInt is just an extension of the Math.random function that allows a minimum, and a maximum value to be provided. The maximum value is **non-inclusive**.

```typescript
getRandomInt(10, 20); // Any number between 10 and 19
```

### generateRandomDigits

generates random digits with a certain final length

```typescript
generateRandomDigits(1); // 6
generateRandomDigits(5); // 49525
generateRandomDigits(10); // 2059284363
```
