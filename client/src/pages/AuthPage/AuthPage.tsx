import { CircularProgress, Container } from "@mui/material";
import LoginForm from "../../components/LoginForm/LoginForm";
import { GridWrapper } from "./styles";
import { useActions } from "../../hooks/useActions";
import { useLocation } from "react-router-dom";
import { RoutesName } from "../../utils/routesName";
import { useAppSelector } from "../../hooks/useAppSelector";
import { UserSelector } from "../../store/selectors";

const AuthPage = () => {
  const { authorizeUserAsync, loginUserAsync } = useActions();

  const { isLoading, error } = useAppSelector(UserSelector);

  const { pathname } = useLocation();

  const isPathName = pathname === RoutesName.LOGIN_ROUTE;

  const handleAuthorizeUserAsync = (email: string, password: string) => {
    isPathName
      ? loginUserAsync({ email, password })
      : authorizeUserAsync({ email, password });
  };

  if (isLoading) {
    return (
      <GridWrapper container>
        <CircularProgress disableShrink />
      </GridWrapper>
    );
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <Container>
      <GridWrapper container>
        <LoginForm
          isPathName={isPathName}
          handleAuthorizeUserAsync={handleAuthorizeUserAsync}
        />
      </GridWrapper>
    </Container>
  );
};

export default AuthPage;
