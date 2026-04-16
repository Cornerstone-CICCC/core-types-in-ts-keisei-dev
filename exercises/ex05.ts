enum Day {
  Sunday = "Sunday",
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday"
}

interface Race {
  raceName: string;
  participants: number;
  first: string;
  second: string;
  third: string;
  day: Day;
}

const currentDay: Day = Day.Tuesday;

const raceResult: Race = {
  raceName: "Spring Dash",
  participants: 8,
  first: "Runner A",
  second: "Runner B",
  third: "Runner C",
  day: Day.Saturday
};

console.log("Exercise 5 - Enum:");
console.log(`Current day: ${currentDay}`);
console.log(raceResult);
