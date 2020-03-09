import React from "react";
import styled from "../../Styles/typed-components";
import Helmet from "react-helmet";

const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
`;

const Text = styled.p``;

const PinnerWeb: React.FunctionComponent<any> = () => (
  <Container>
    <Helmet>
      <title>Pinner-web | Plusbeauxjours</title>
    </Helmet>
    <Text>Pinner-web</Text>
  </Container>
);

export default PinnerWeb;
