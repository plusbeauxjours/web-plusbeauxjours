import React from "react";
import styled from "../Styles/typed-components";
import Wrapper from "./Wrapper";

const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
  border: 0.5px solid ${props => props.theme.borderColor};
  width: 80%;
  max-width: 1200px;
  height: 900px;
  position: relative;
  bottom: 400px;
  border-radius: 20px;
`;

const Text = styled.text``;

const SkillBox: React.FunctionComponent<any> = () => (
  <Container>
    <Wrapper>
      <Text>SkillBox</Text>
    </Wrapper>
  </Container>
);

export default SkillBox;
