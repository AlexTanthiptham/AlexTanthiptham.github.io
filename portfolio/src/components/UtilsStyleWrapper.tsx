import { Box } from "@mui/material";

interface StyleWrapperProps {
  children: React.ReactNode;
}

// Wrapper for applying frequently used CSS styled classes to different components.
// Do not apply any styles to this component directly. Only use this to hold classes.

// Overhaul this system - it's far from ideal

const StyleWrapper: React.FC<StyleWrapperProps> = ({ children }) => {
  return (
    <Box
      id="sWrapper"
      sx={{
        ".textRegular": {
          fontWeight: 400,
        },
        ".textBold": {
          fontWeight: 600,
        },
        ".textItalic": {
          fontStyle: "italic",
        },
        ".textUnderline": {
          textDecoration: "underline",
        },
        ".fontPrimary": {
          color: "primary.contrastText",
          fontFamily: "EB Garamond",
        },
        ".fontSecondary": {
          color: "primary.contrastText",
          fontFamily: "Italiana",
        },
        ".sectionHeader": {
          fontFamily: "EB Garamond",
          color: "primary.contrastText",
          fontWeight: 400,
          paddingBottom: 1,
        },
        ".stackedText": {
          "& > *": {
            marginBottom: 2,
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
