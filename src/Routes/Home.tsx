import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

const Container = styled.div``;

const Text = styled.text``;

const HomeHome: React.FunctionComponent<any> = () => (
  <Container>
    <Helmet>
      <title>Plusbeauxjours</title>
    </Helmet>
    <Text>우리 각시 사랑해</Text>
  </Container>
);

export default HomeHome;
