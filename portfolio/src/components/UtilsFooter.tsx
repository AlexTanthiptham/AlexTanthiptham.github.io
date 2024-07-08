import { Container, Divider, Typography } from "@mui/material";

import StyleWrapper from "./UtilsStyleWrapper";

const UtilsFooter = () => {
  return (
    <Container className="footer">
      <StyleWrapper>
        <Divider />
        <Typography variant="body1" className="sectionHeader" align="center">
          Designed by Alex Tanthiptham © 2024
        </Typography>
      </StyleWrapper>
    </Container>
  );
};

export default UtilsFooter;
