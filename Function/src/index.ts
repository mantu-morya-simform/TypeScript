/**
 * Person details including address information.
 */
interface nameType {
  name: string;
  Age: number;
  Addres: {
    city: string;
    pin: number;
  };
}
/**
 * Builds a formatted detail string from person data.
 *
 * @param {nameType} nameType - The person details.
 * @returns {string} The formatted detail string.
 */
const returnFullDetail = (nameType: nameType): string => {
  return `${nameType.name} Age ${nameType.Age} Address: ${nameType.Addres.city}, ${nameType.Addres.pin}`;
};

const detail: string = returnFullDetail({
  name: "Mantu Kumar Morya",
  Age: 21,
  Addres: { city: "Jaipur", pin: 30001 },
});

console.log(detail);

//

/**
 * Processes an order string, returning null if empty.
 *
 * @param {string} order - The order string to process.
 * @returns {string | null} The order string or null if empty.
 */
function orderMake(order: string): string | null {
  if (!order) return null;
  return order;
}

/**
 * Processes an optional order string, returning null if not provided or empty.
 *
 * @param {string} [order] - The optional order string.
 * @returns {string | null} The order string or null.
 */
function orderMake1(order?: string): string | null {
  if (!order) return null;
  return order;
}

/**
 * Returns a fixed string message.
 *
 * @returns {string} A greeting message.
 */
function orderMake2(): string {
  return "I am Mantu Kumar";
}

/**
 * Logs a greeting message to the console.
 */
function orderMake3(): void {
  console.log("I am Mantu Kumar");
}
