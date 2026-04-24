console.log(
  "Third-Party Function return type---------------------------------------------------------------",
);

function thirdPartFn(): { role: string; type: string } {
  return {
    role: "admim",
    type: "superadmin",
  };
}
const value = thirdPartFn();
type valueType = ReturnType<typeof thirdPartFn>;
function sendRole(role: valueType) {
  // some logic
  console.log("Role:", role.role + " Type:", role.type);
}
sendRole(value);
