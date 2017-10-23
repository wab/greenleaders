import React from "react";
import { Page, Row, Column } from "hedron";
import styled, { ThemeProvider } from "styled-components";

const StyledColumn = styled(Column)`
  position: relative;
`;

const PageContainer = props => (
  <ThemeProvider theme={{ rubrique: "none" }}>
    <Page fluid>
      <Row divisions={12}>
        <StyledColumn lg={8} lgShift={2} md={10} mdShift={1}>
          {props.children}
        </StyledColumn>
      </Row>
    </Page>
  </ThemeProvider>
);

export default PageContainer;
