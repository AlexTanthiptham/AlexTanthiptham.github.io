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
          fontWeight: 600,
        },
        ".textRegular": {
          fontWeight: 400,
        },
        ".textInika": {
          color: "primary.contrastText",
          fontFamily: "Inika",
          textDecoration: "none",
          margin: "0px 5px",
        },
        ".textItaliana": {
          color: "primary.contrastText",
          fontFamily: "Italiana",
          textDecoration: "none",
          margin: "0px 5px",
        },
        ".sectionHeader": {
          fontFamily: "Inika",
          color: "primary.contrastText",
          margin: "0px 5px",
          fontWeight: 400,
          textDecoration: "none",
          paddingBottom: 1,
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
