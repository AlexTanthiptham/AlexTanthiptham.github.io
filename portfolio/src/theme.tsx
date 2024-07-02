import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ".textBold": {
          color: "primary.contrastText",
          margin: "0px 5px",
          fontWeight: 600,
          textDecoration: "none",
        },
        ".textRegular": {
          color: "primary.contrastText",
          margin: "0px 5px",
          fontWeight: 400,
          textDecoration: "none",
        },
        ".textInika": {
          fontFamily: "Inika",
        },
        ".textItaliana": {
          fontFamily: "Italiana",
        },
        ".sectionHeader": {
          fontFamily: "Inika",
          color: "primary.contrastText",
          margin: "0px 5px",
          fontWeight: 400,
          textDecoration: "none",
        },
        ".stackedText": {
          "& > *": {
            paddingBottom: 1,
          },
        },
      },
    },
  },

  palette: {
    primary: {
      main: "#FFFFFF",
      contrastText: "#363B48",
    },
    secondary: {
      main: "#363B48",
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
