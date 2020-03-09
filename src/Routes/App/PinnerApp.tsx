import React from "react";
import styled from "../../Styles/typed-components";
import Helmet from "react-helmet";

const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
`;

const Text = styled.p``;

const PinnerApp: React.FunctionComponent<any> = () => (
  <Container>
    <Helmet>
      <title>Pinner-app | Plusbeauxjours</title>
    </Helmet>
    <Text>Pinner-app</Text>
  </Container>
);

export default PinnerApp;
