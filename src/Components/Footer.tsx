import React from "react";
import styled from "../Styles/typed-components";
import Wrapper from "./Wrapper";

const Container = styled.div`
  background-color: ${props => props.theme.blueColor};
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${props => props.theme.whiteColor};
  text-align: center;
`;

const Bold = styled.div`
  font-size: 22px;
  font-weight: 200;
  margin-bottom: 150px;
`;

const SText = styled.div`
  font-weight: 200;
  font-size: 14px;
  color: ${props => props.theme.whiteColor};
`;

const Footer: React.FunctionComponent<any> = () => (
  <Container>
    <Wrapper>
      <Box>
        <Bold>Making & Learning and Traveling</Bold>
        <SText>Handcrafted by plusbeauxjours © twentytwenty</SText>
      </Box>
    </Wrapper>
  </Container>
);

export default Footer;
