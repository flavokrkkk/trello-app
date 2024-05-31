import { Box, Button, Grid, Typography } from "@mui/material";

const LoginForm = () => {
  return (
    <Grid
      container
      alignItems={"center"}
      direction={"column"}
      gap={7}
      sx={{
        maxWidth: 500,
        border: "1px solid #1976d2",
        padding: "50px",
        borderRadius: 5,
      }}
    >
      <Typography variant="h3" fontWeight={300}>
        Добрый день!
      </Typography>
      <Box>
        <Button variant="outlined">Войти с помощью Google</Button>
      </Box>
    </Grid>
  );
};

export default LoginForm;
