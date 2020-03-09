import React from "react";
import styled from "../Styles/typed-components";
import Wrapper from "./Wrapper";

const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
  height: 800px;
`;

const Text = styled.text``;

const MainBox: React.FunctionComponent<any> = () => (
  <Container>
    <Wrapper>
      <Text>MainBox</Text>
    </Wrapper>
  </Container>
);

export default MainBox;
