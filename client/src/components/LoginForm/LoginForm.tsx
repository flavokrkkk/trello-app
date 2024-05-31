import { Button, TextField } from "@mui/material";
import {
  BoxForm,
  GridForm,
  GridWrapper,
  Span,
  TypographyFooterTitle,
  TypographySubTitle,
  TypographyTitle,
} from "./styles";
import { useLocation, useNavigate } from "react-router-dom";
import { RoutesName } from "../../utils/routesName";

const LoginForm = () => {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  const isPathName = pathname === RoutesName.LOGIN_ROUTE;

  const handleNavigation = () => {
    isPathName
      ? navigate(RoutesName.REGISTRATION_ROUTE)
      : navigate(RoutesName.LOGIN_ROUTE);
  };
  return (
    <GridWrapper container>
      <TypographyTitle variant="h3">Добрый день!</TypographyTitle>
      <TypographySubTitle variant="h6">
        Для продолжения необходимо авторизоваться
      </TypographySubTitle>
      <form>
        <GridForm container>
          <TextField size="small" fullWidth placeholder="E-mail" />
          <TextField size="small" fullWidth placeholder="Password" />
          <BoxForm>
            <span>
              {isPathName ? (
                <>
                  <Span>Нет Аккаунта? </Span>
                  <Span onClick={handleNavigation}>Зарегистрируйтесь</Span>
                </>
              ) : (
                <>
                  <Span>Есть аккаунт? </Span>
                  <Span onClick={handleNavigation}>Войдите</Span>
                </>
              )}
            </span>
            <Button variant="outlined">
              {isPathName ? "Войти" : " Зарегистрироваться"}
            </Button>
          </BoxForm>
        </GridForm>
        <TypographyFooterTitle>TRELLO.com</TypographyFooterTitle>
      </form>
    </GridWrapper>
  );
};

export default LoginForm;
