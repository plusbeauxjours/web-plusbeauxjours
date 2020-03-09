import React from "react";
import styled from "../Styles/typed-components";
import Wrapper from "./Wrapper";

const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
  height: 800px;
  border: 1px solid red;
`;

const Text = styled.p``;

const PortfolioBox: React.FunctionComponent<any> = () => (
  <Container>
    <Wrapper>
      <Text>PortfolioBox</Text>
    </Wrapper>
  </Container>
);

export default PortfolioBox;
