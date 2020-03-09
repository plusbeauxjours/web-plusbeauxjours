import React from "react";
import styled from "../../Styles/typed-components";
import Helmet from "react-helmet";

const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
`;

const Text = styled.p``;

const MovieWeb: React.FunctionComponent<any> = () => (
  <Container>
    <Helmet>
      <title>Movie-web | Plusbeauxjours</title>
    </Helmet>
    <Text>Movie-web</Text>
  </Container>
);

export default MovieWeb;
