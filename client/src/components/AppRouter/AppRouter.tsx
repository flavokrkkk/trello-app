import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../../routes/routes";
import BoardPage from "../../pages/BoardPage/BoardPage";
import AuthPage from "../../pages/AuthPage/AuthPage";
import { useAppSelector } from "../../hooks/useAppSelector";
import { UserSelector } from "../../store/selectors";

const AppRouter = () => {
  const { isAuth } = useAppSelector(UserSelector);

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
