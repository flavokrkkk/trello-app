import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { AppBarStyles, GridWrapper } from "./styles";
import { Button, Typography } from "@mui/material";

const NavBar = () => {
  const isAuth = false;

  return (
    <Box>
      <AppBarStyles>
        <Toolbar variant="dense">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Trello
          </Typography>
          <GridWrapper container>
            {isAuth ? (
              <Button size="small" variant="outlined" color="inherit">
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
