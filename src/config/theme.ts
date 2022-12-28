import { createTheme } from "@mui/material/styles";

const theme = createTheme();
export const headingFonts = ["'Alegreya'", "serif"].join(",");

export default createTheme({
  palette: {
    primary: {
      main: "#373A3C",
    },
    secondary: {
      main: "#D2D2D2",
    },
    info: {
      main: "#0275D8",
    },
    success: {
      main: "#5CB85C",
    },
    error: {
      main: "#D9534F",
    },
  },
  typography: {
    allVariants: {
      color: "#373A3C",
    },
    fontFamily: ["'Alegreya Sans'", "sans-serif"].join(","),
    h1: {
      fontFamily: headingFonts,
      fontSize: "2.5rem",
      [theme.breakpoints.up("md")]: {
        fontSize: "3rem",
      },
    },
    subtitle1: {
      fontFamily: headingFonts,
      fontSize: "1.5rem",
      lineHeight: 1,
      fontWeight: 700,
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          subtitle1: "p",
        },
      },
    },
  },
});
