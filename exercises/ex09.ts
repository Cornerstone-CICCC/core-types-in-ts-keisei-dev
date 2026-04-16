function throwError(message: string): never {
  throw new Error(message);
}

function throwErrorAsVoid(message: string): void {
  throw new Error(message);
}

function showVoidReturn(): void {
  console.log("This function has void return type.");
  return;
}

try {
  throwError("Exercise 9 - This is a never error.");
} catch (error) {
  console.log("Caught error from never function.");
  if (error instanceof Error) {
    console.log(error.message);
  }
}

try {
  throwErrorAsVoid("Exercise 9 - This is a void error.");
} catch (error) {
  console.log("Caught error from void function.");
  if (error instanceof Error) {
    console.log(error.message);
  }
}

const voidResult = showVoidReturn();
console.log("Result from void function:", voidResult);
