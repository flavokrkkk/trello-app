import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../../routes/routes";
import BoardPage from "../../pages/BoardPage/BoardPage";
import AuthPage from "../../pages/AuthPage/AuthPage";

const AppRouter = () => {
  const isAuth = false;

  return isAuth ? (
    <Routes>
      {privateRoutes.map(({ path, component }) => (
        <Route key={path} path={path} Component={component} />
      ))}
      <Route path="*" Component={BoardPage} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, component }) => (
        <Route key={path} path={path} Component={component} />
      ))}
      <Route path="*" Component={AuthPage} />
    </Routes>
  );
};

export default AppRouter;
