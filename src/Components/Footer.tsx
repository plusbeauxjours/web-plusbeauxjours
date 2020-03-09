import React from "react";
import styled from "../Styles/typed-components";
import Wrapper from "./Wrapper";

const Container = styled.div`
  background-color: ${props => props.theme.blueColor};
  height: 500px;
`;

const Footer: React.FunctionComponent<any> = () => (
  <Container>
    <Wrapper>Footer</Wrapper>
  </Container>
);

export default Footer;
