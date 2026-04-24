type MakeAllKeyUpperCase<T extends string> = {
  [K in T as Uppercase<K>]: string;
};

// same as previous question but all key's should be in uppercase
type Events = "log_in" | "log_out" | "sign_up";

type AllEvents = MakeAllKeyUpperCase<Events>;
/**
{
    LOG_IN: string;
    LOG_OUT: string;
    SIGN_UP: string;
}
*/
