function displayValue(value: unknown): void {
  if (typeof value === "string") {
    console.log(`Exercise 8 - String value: ${value}`);
    return;
  }

  if (typeof value === "number") {
    console.log(`Exercise 8 - Number value: ${value}`);
    return;
  }

  console.log("Exercise 8 - Value is neither string nor number.");
}

function processUnknownValue(value: unknown): void {
  if (typeof value === "string") {
    console.log("Loop through each character:");
    for (const char of value) {
      console.log(char);
    }
  }
}

displayValue("TypeScript");
displayValue(42);
displayValue(true);

processUnknownValue("Hello");
