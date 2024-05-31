import { Grid, Typography, styled } from "@mui/material";

export const GridWrapper = styled(Grid)({
  border: "1px solid #1976d2",
  padding: "50px",
  borderRadius: 20,
  alignItems: "center",
  maxWidth: 500,
  flexDirection: "column",
});

export const TypographyTitle = styled(Typography)({
  fontWeight: 300,
});

export const TypographySubTitle = styled(Typography)({
  textAlign: "center",
  fontSize: 15,
  margin: "10px 0px 30px 0px",
  fontWeight: 300,
});
