type MakeKeyTypeString<T extends string> = {
  [K in T]: string;
};

// create a type where key is from AllKeys's type and value is string
type AllKeys = "userId" | "role" | "email" | "phone" | "dob";

type AllWithString = MakeKeyTypeString<AllKeys>;

/**
{
    userId: string;
    role: string;
    email: string;
    phone: string;
    dob: string;
}
*/
