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
import { useNavigate } from "react-router-dom";
import { RoutesName } from "../../utils/routesName";
import { ChangeEventHandler, FC, useState } from "react";

interface LoginFormProps {
  isPathName: boolean;
  handleAuthorizeUserAsync: (email: string, password: string) => void;
}

const LoginForm: FC<LoginFormProps> = ({
  isPathName,
  handleAuthorizeUserAsync,
}) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNavigation = () => {
    isPathName
      ? navigate(RoutesName.REGISTRATION_ROUTE)
      : navigate(RoutesName.LOGIN_ROUTE);
  };

  const handleChangeEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setPassword(event.target.value);
  };

  const handleAuthorizeUser = () => {
    handleAuthorizeUserAsync(email, password);
  };

  return (
    <GridWrapper container>
      <TypographyTitle variant="h3">Добрый день!</TypographyTitle>
      <TypographySubTitle variant="h6">
        Для продолжения необходимо авторизоваться
      </TypographySubTitle>
      <form>
        <GridForm container>
          <TextField
            value={email}
            size="small"
            fullWidth
            placeholder="E-mail"
            onChange={handleChangeEmail}
          />
          <TextField
            value={password}
            size="small"
            fullWidth
            placeholder="Password"
            onChange={handleChangePassword}
          />
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
            <Button variant="outlined" onClick={handleAuthorizeUser}>
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
