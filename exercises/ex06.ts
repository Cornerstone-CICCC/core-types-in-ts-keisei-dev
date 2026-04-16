function printId(id: number | string): number | string {
  if (typeof id === "number") {
    console.log(`Exercise 6 - ID is a number: ${id}`);
    return id;
  }

  console.log(`Exercise 6 - ID is a string: ${id}`);
  return id;
}

const numberId = printId(101);
const stringId = printId("A-202");

console.log(numberId);
console.log(stringId);
