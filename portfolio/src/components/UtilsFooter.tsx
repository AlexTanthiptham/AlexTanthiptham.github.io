import { Container, Divider, Typography } from "@mui/material";

import StyleWrapper from "./StyleWrapper";

const UtilsFooter = () => {
  return (
    <StyleWrapper>
      <Container className="footer">
        <Divider />
        <Typography variant="body1" className="sectionHeader" align="center">
          Designed by Alex Tanthiptham © 2024
        </Typography>
      </Container>
    </StyleWrapper>
  );
};

export default UtilsFooter;
