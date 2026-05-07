const formatErrMessage = (err: string | Error | Warning): string => {
  let prefix = "Error: ";
  if (typeof err === "string") {
    return `${prefix}${err}`;
  }

  if ("text" in err) {
    return `${prefix}${err.text}`;
  }

  return `${prefix}${err.message}`;
};

type Warning = {
  text: string;
};

console.log(formatErrMessage("Not Found"));
console.log(formatErrMessage(new Error("Kuch To hai")));
console.log(formatErrMessage({ text: "Bad Request" }));

// const isString = (value: any): boolean => {
//   return typeof value === "string";
// };

// better approch

const printValue = (value: string | number) => {
  if (isString(value)) {
    // TypeScript knows it's a string here
    console.log(value.toUpperCase());
  } else {
    // TypeScript knows it's a number here
    console.log(value.toFixed(2));
  }
};

const isString = (value: string | number): value is string => {
  return typeof value === "string";
};

printValue("mantu");
printValue(5);
