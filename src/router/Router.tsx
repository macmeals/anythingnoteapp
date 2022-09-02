import { Route, Routes } from "react-router-dom";
import { TopPage } from "../component/pages/TopPage";
import { Error404page } from "../component/pages/Error404Page";
import { UserPageRoutes } from "../router/UserPageRouters";

export const Router = () => {
  return (
    <Routes>
      <Route path="" element={<TopPage />} />
      {/* メインページ（ユーザページ）の画面遍移のルーティング */}
      <Route path="todos">
        {UserPageRoutes.map((userRoute) => (
          <Route
            key={userRoute.path}
            path={`${userRoute.path}`}
            element={userRoute.chidren}
          />
        ))}
      </Route>

      <Route path="*" element={<Error404page />} />
    </Routes>
  );
};
