import { Error404page } from "../component/pages/Error404Page";
import { TopPage } from "../component/pages/TopPage";

export const UserPageRoutes = [
  { path: "", chidren: <TopPage /> },
  { path: "*", chidren: <Error404page /> },
];
