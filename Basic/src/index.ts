/**
 * Data object representing a user's profile.
 *
 * @property {string} firstName - User first name.
 * @property {string} lastName - User last name.
 * @property {number} age - User age.
 */
type dataObject = {
  firstName: string;
  lastName: string;
  age: number;
};

/**
 * Formats user profile data into a printable string.
 *
 * @param {dataObject} userData - The user profile data.
 * @returns {string} Formatted profile text.
 */
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
