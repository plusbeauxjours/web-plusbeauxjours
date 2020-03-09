import React from "react";
import styled from "../../Styles/typed-components";
import Helmet from "react-helmet";

const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
`;

const Text = styled.p``;

const NoteWeb: React.FunctionComponent<any> = () => (
  <Container>
    <Helmet>
      <title>Note-web | Plusbeauxjours</title>
    </Helmet>
    <Text>Note-web</Text>
  </Container>
);

export default NoteWeb;
