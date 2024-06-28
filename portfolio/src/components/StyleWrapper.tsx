import { Box } from "@mui/material";

interface StyleWrapperProps {
  children: React.ReactNode;
}

const StyleWrapper: React.FC<StyleWrapperProps> = ({ children }) => {
  return (
    <Box
      id="landing"
      sx={{
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
      }}
    >
      {children}
    </Box>
  );
};

export default StyleWrapper;
