import React from "react";
import styled from "../../Styles/typed-components";
import Helmet from "react-helmet";

const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
`;

const Text = styled.p``;

const PuberWeb: React.FunctionComponent<any> = () => (
  <Container>
    <Helmet>
      <title>Puber-web | Plusbeauxjours</title>
    </Helmet>
    <Text>Puber-web</Text>
  </Container>
);

export default PuberWeb;
