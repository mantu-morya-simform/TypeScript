type FindKeys<T extends string> = {
  [K in T]: string;
};

// create a type where key is from AllKeys's type and value is string
type AllKeys = "userId" | "role" | "email" | "phone" | "dob";

type AllWithString = FindKeys<AllKeys>;
type AllWithString2 = Record<AllKeys, string>;

/**
{
    userId: string;
    role: string;
    email: string;
    phone: string;
    dob: string;
}
*/
