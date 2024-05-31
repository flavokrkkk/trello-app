import { IRoute } from "../models/IRoute";
import AuthPage from "../pages/AuthPage/AuthPage";
import BoardPage from "../pages/BoardPage/BoardPage";
import { RoutesName } from "../utils/routesName";

export const publicRoutes = <IRoute[]>[
  {
    path: RoutesName.LOGIN_ROUTE,
    component: AuthPage,
  },
];

export const privateRoutes = <IRoute[]>[
  {
    path: RoutesName.BOARD_ROUTE,
    component: BoardPage,
  },
];
