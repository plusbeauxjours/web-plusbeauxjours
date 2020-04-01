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
  line-height: 30px;
`;

const ProfileBox: React.FunctionComponent<any> = () => (
  <Container>
    <Wrapper>
      <TextBox>
        <Bold>Hello, I am Minjae.</Bold>
        <Text>
          More than 2 years of experience in both Front-end and Back-end
          development of applications, my mixed background of both technical and
          creative studies, helps me approach each phase of a project in a
          proactive way. I'm quietly confident, naturally curious, and enjoying
          adjust to different work environment. Outside of work I have a
          beautiful wife and cat (obviously). I'd love to get coffee and get to
          know you, so don’t hesitate to get in touch.
        </Text>
      </TextBox>
    </Wrapper>
  </Container>
);

export default ProfileBox;
