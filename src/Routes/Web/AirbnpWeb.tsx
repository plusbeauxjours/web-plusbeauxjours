import React from "react";
import styled from "../../Styles/typed-components";
import Helmet from "react-helmet";

const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
`;

const Text = styled.p``;

const AirbnpWeb: React.FunctionComponent<any> = () => (
  <Container>
    <Helmet>
      <title>Airbnp-web | Plusbeauxjours</title>
    </Helmet>
    <Text>Airbnp-web</Text>
  </Container>
);

export default AirbnpWeb;
