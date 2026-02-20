// 🐱 uncomment line 2, comment-out line 3 to load our data
import breeds from '$lib/data/breeds.json';
// let breeds = [];
let countries = [];

export function load() {
  // Create a map to count occurrences of "origin" values
  const originCount = breeds.reduce((acc, breed) => {
    const origin = breed.origin;
    if (origin) {
      acc[origin] = (acc[origin] || 0) + 1;
    }
    return acc;
  }, {});

  // Filter out countries that occur more than twice
  countries = Object.keys(originCount).filter(origin => originCount[origin] > 2);

  return { breeds, countries };
}
