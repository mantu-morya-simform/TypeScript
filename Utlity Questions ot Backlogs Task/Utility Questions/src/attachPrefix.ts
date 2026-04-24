type AddPrefix<T extends string> = `${T}/`;

// create a generic type that only accepts string and attach "/" prefix to given string
type Addd3 = AddPrefix<"about">; // output will be: "/about"
type Addd4 = AddPrefix<2>; // ts error
