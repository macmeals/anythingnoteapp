import { Error404page } from "../component/pages/Error404Page";
import { UserPage } from "../component/pages/UserPage";

export const UserPageRoutes = [
  { path: "", chidren: <UserPage /> },
  { path: "*", chidren: <Error404page /> },
];
