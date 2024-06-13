import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
      contrastText: "#363B48",
    },
    secondary: {
      main: "#FF0000",
      contrastText: "#FFFFFF",
    },
    warning: {
      main: "#E3D026",
      light: "#E9DB5D",
      dark: "#A29415",
      contrastText: "#242105",
    },
  },
});

export default theme;

// TODO: Implement light/dark mode themes and context for swapping themes

// const themeLight = createTheme({
//   palette: {
//     mode: 'light',

//   },
// });

// const themeDark = createTheme({
//   palette: {
//     mode: 'dark',
//   },
// });
