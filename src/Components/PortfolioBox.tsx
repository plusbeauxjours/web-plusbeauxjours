import React from "react";
import styled from "../Styles/typed-components";
import Wrapper from "./Wrapper";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  margin-bottom: 300px;
  height: 100%;
  width: 100%;
  margin-bottom: 30px;
`;

const Bold = styled.div`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 30px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
`;

const Text = styled.p`
  width: 80%;
  line-height: 30px;
  margin-bottom: 30px;
`;

const PortfolioBox: React.FunctionComponent<any> = () => (
  <Container>
    <Wrapper>
      <TextBox>
        <Bold>My Projects</Bold>
        <Text>
          I'm a bit of a digital product junky. Over the years, I've used
          hundreds of web and mobile apps in different industries and verticals.
          I cloned few web to improve skills and get to know how it works.
          Eventually, I decided that it would be a fun challenge to try
          designing and building my own.
        </Text>
      </TextBox>
    </Wrapper>
  </Container>
);

export default PortfolioBox;
