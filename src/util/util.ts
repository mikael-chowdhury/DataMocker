import axios from "axios";

export async function fetchData(url: string) {
  try {
    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    console.error("Unable to fetch data:", error);
  }
}

export function fetchNames(nameType: string) {
  return fetchData(`https://www.randomlists.com/data/names-${nameType}.json`);
}

export function pickRandom(list: Array<any>) {
  return list[Math.floor(Math.random() * list.length)];
}

export function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function generateRandomDigits(length: number): string {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += getRandomInt(0, 9);
  }
  return result;
}
