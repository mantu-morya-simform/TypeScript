type EmailUser = {
  name: string;
  age: number;
  email: { domain: string; length: number };
};

type Users = EmailUser[];
type IWantEmailData = Users[0]["email"];
