import React from "react";
import styled from "../../Styles/typed-components";
import Helmet from "react-helmet";

const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
`;

const Text = styled.text``;

const FukinWeatherApp: React.FunctionComponent<any> = () => (
  <Container>
    <Helmet>
      <title>Fukin Weather-app | Plusbeauxjours</title>
    </Helmet>
    <Text>Fukin Weather-app</Text>
  </Container>
);

export default FukinWeatherApp;
