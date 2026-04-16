function printDirection(direction: "left" | "right"): void {
  if (direction === "left") {
    console.log("Exercise 7 - Moving left.");
    return;
  }

  console.log("Exercise 7 - Moving right.");
}

printDirection("left");
printDirection("right");
