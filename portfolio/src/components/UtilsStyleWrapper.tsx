import { Box } from "@mui/material";

interface StyleWrapperProps {
  children: React.ReactNode;
}

// Wrapper for applying frequently used CSS styled classes to different components.
// Do not apply any styles to this component directly. Only use this to hold classes.

const StyleWrapper: React.FC<StyleWrapperProps> = ({ children }) => {
  return (
    <Box
      id="sWrapper"
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
        },
        ".textItaliana": {
          color: "primary.contrastText",
          fontFamily: "Italiana",
          textDecoration: "none",
        },
        ".sectionHeader": {
          fontFamily: "Inika",
          color: "primary.contrastText",
          fontWeight: 400,
          textDecoration: "none",
          paddingBottom: 1,
        },
        ".stackedText": {
          "& > *": {
            paddingBottom: 1,
          },
        },
        ".textPrimary": {
          color: "primary.contrastText",
        },
        ".textSecondary": {
          color: "secondary.contrastText",
        },
      }}
    >
      {children}
    </Box>
  );
};

export default StyleWrapper;
