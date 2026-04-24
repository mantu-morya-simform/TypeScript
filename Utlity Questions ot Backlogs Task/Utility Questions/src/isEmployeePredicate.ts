console.log("isEmployee Predicate Question");

type User = {
  name: string;
  email: string;
  phone: string;
};
type Employee = User & { code: string };
function isEmployee(value: any): value is Employee {
  return (
    value !== null &&
    typeof value === "object" &&
    typeof value.name === "string" &&
    typeof value.email === "string" &&
    typeof value.phone === "string" &&
    typeof value.code === "string"
  );
}

const obj: any = {
  name: "abc",
  email: "abc@gmail.com",
  phone: "234567",
  code: "2222",
};

if (isEmployee(obj)) {
  console.log("obj is of employee");
}
