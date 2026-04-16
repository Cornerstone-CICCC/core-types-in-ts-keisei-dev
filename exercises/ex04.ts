type Coordinate = [number, number];

interface PlaceLocation {
  description: string;
  coordinate: Coordinate;
}

const coordinate: Coordinate = [10, 25];

const myLocation: PlaceLocation = {
  description: "Tokyo Station",
  coordinate
};

console.log("Exercise 4 - Location:");
console.log(myLocation);
console.log(`X: ${coordinate[0]}, Y: ${coordinate[1]}`);
