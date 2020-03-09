import React from "react";
import styled from "../Styles/typed-components";
import Helmet from "react-helmet";

const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
`;

const Text = styled.text``;

const Architecture: React.FunctionComponent<any> = () => (
  <Container>
    <Helmet>
      <title>Architectural works | Plusbeauxjours</title>
    </Helmet>
    <Text>Architecture</Text>
  </Container>
);

export default Architecture;
