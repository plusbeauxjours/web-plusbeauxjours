import React from "react";
import styled from "../Styles/typed-components";
import Helmet from "react-helmet";

const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
`;

const Text = styled.text``;

const Portfolio: React.FunctionComponent<any> = () => (
  <Container>
    <Helmet>
      <title>Portfolio | Plusbeauxjours</title>
    </Helmet>
    <Text>Portfolio</Text>
  </Container>
);

export default Portfolio;
