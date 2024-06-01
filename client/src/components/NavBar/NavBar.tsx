import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { AppBarStyles, GridWrapper } from "./styles";
import { Button, Typography } from "@mui/material";
import { FC } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { UserSelector } from "../../store/selectors";
import { useActions } from "../../hooks/useActions";
import { NavLink } from "react-router-dom";
import { RoutesName } from "../../utils/routesName";

interface NavBarProps {
  title: string;
}

const NavBar: FC<NavBarProps> = ({ title }) => {
  const { isAuth } = useAppSelector(UserSelector);

  const { logout } = useActions();

  return (
    <Box>
      <AppBarStyles>
        <Toolbar variant="dense">
          <Typography variant="h6" component="div">
            <NavLink to={RoutesName.BOARD_ROUTE}>{title}</NavLink>
          </Typography>
          <GridWrapper container>
            {isAuth ? (
              <Button
                size="small"
                variant="outlined"
                color="inherit"
                onClick={logout}
              >
                Log out
              </Button>
            ) : (
              <Button size="small" variant="outlined" color="inherit">
                Login
              </Button>
            )}
          </GridWrapper>
        </Toolbar>
      </AppBarStyles>
    </Box>
  );
};

export default NavBar;
