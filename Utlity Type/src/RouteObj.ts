type BuildRoute<T> = {
  [R in T as R extends { route: infer Path extends string }
    ? Path
    : never]: R extends { search: infer S } ? S : never;
};

type Route =
  | { route: "/"; search: { page: number; perPage: number } }
  | { route: "/about"; search: {} }
  | { route: "/admin"; search: {} };

type RouteObj = BuildRoute<Route>;

/*
{
    "/": {
        page: number;
        perPage: number;
    };
    "/about": {};
    "/admin": {};
}
*/
