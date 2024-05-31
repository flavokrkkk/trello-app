import { Box, Button } from "@mui/material";
import { GridWrapper, TypographySubTitle, TypographyTitle } from "./styles";

const LoginForm = () => {
  return (
    <GridWrapper container direction={"column"}>
      <TypographyTitle variant="h3">Добрый день!</TypographyTitle>
      <TypographySubTitle variant="h6">
        Для продолжения необходимо авторизоваться
      </TypographySubTitle>
      <Box>
        <Button variant="outlined">Войти с помощью Google</Button>
      </Box>
    </GridWrapper>
  );
};

export default LoginForm;
