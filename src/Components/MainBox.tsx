import React from "react";
import styled from "../Styles/typed-components";
import Wrapper from "./Wrapper";

const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
  height: 800px;
`;

const Bold = styled.div`
  font-size: 40px;
  font-weight: 600;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  text-align: center;
  padding-top: 50px;
`;

const Text = styled.p``;

const MainBox: React.FunctionComponent<any> = () => (
  <Container>
    <Wrapper>
      <TextBox>
        <Bold>Architecture Designer,</Bold>
        <Bold style={{ marginBottom: "30px" }}>
          Front-end Developer & Back-end Developer
        </Bold>
        <Text>I design and build a building before.</Text>
        <Text>
          And now I design and build an application, and I love what I do.
        </Text>
      </TextBox>
    </Wrapper>
  </Container>
);

export default MainBox;
