import faker from "faker";

export let generateDummyGrocery = () => {
  const numberOfData = 200;
  const grocery = [];

  for (let index = 0; index < numberOfData; index++) {
    const item = {
      name: faker.commerce.product(),
      isSelected: false
    };
    grocery.push(item);
  }

  return grocery;
};
