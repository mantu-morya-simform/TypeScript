type dataObject = {
  firstName: string;
  lastName: string;
  age: number;
};

const printData = (userData: dataObject): string => {
  const fullData: string = `Name: ${userData.firstName} ${userData.lastName}, Age: ${userData.age} `;
  return fullData;
};

const data: dataObject = {
  firstName: "Mantu",
  lastName: "Morya",
  age: 21,
};

console.log(printData(data));
