import React from "react";
import styled from "../Styles/typed-components";
import Wrapper from "./Wrapper";

const Container = styled.div`
  background-color: ${props => props.theme.blueColor};
  height: 800px;
  width: 100%;
  color: ${props => props.theme.whiteColor};
`;

const Bold = styled.div`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 30px;
  line-height: 40px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  position: relative;
  height: 500px;
  justify-content: center;
`;

const Text = styled.p`
  width: 80%;
`;

const ProfileBox: React.FunctionComponent<any> = () => (
  <Container>
    <Wrapper>
      <TextBox>
        <Bold>Hi, I’m Minjae Lee. Nice to meet you.</Bold>
        <Text>
          Since beginning my journey as a software developer nearly 2 years ago,
          I'm quietly confident, naturally curious, and enjoying adjust to
          different work environment.
        </Text>
      </TextBox>
    </Wrapper>
  </Container>
);

export default ProfileBox;
