import { Container } from "@mui/material";
import LoginForm from "../../components/LoginForm/LoginForm";
import { GridWrapper } from "./styles";

const AuthPage = () => {
  return (
    <Container>
      <GridWrapper container>
        <LoginForm />
      </GridWrapper>
    </Container>
  );
};

export default AuthPage;
