type APIRoutesVersion<
  Route,
  Version extends string,
> = Route extends `/api${infer Path}` ? `/api/${Version}${Path}` : never;

type Admin = APIRoutesVersion<"/api/admin/api/", "1.0">; //"/api/1.0/admin/api/1.0/"
type Users = APIRoutesVersion<"/api/users/", "2.0">; // "/api/2.0/users/"
type SuperAdmins = APIRoutesVersion<"/api/super-admins/", "3.0">; // "/api/3.0/super-admins/"
