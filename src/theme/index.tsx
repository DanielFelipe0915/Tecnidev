import { createTheme } from "@mui/material";

/* Create a theme instance.
 * DOCS: https://mui.com/material-ui/customization/default-theme/#main-content
 */
const theme = createTheme({
  palette: {
    primary: {
      main: "#3F5C6E",
    },
    secondary: {
      main: "rgba(63, 92, 110, 0.18)",
    },
    //Add your custom props...
    customColor: {
      700: "rgba(255, 255, 255, 0.8)",
    },
    custonButtonColor: {
      main: "#B008FF",
      contrastText: "#FFFFFF",
    },
  },
});

export default theme;
