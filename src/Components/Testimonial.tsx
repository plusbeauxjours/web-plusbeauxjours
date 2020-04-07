import React from "react";
import styled from "../Styles/typed-components";
import Wrapper from "./Wrapper";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  margin-bottom: 300px;
  max-width: 700px;
  width: 100%;
  margin-top: 30px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  text-align: center;
`;

const TestimonialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  height: 100%;
  margin-bottom: 30px;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 30px;
  overflow: hidden;
`;

const NameBox = styled(TextBox)`
  line-height: 25px;
  margin-bottom: 0px;
`;

const Name = styled.div`
  font-weight: 600;
`;

const Company = styled.p`
  font-size: 14px;
  text-align: center;
`;

const Text = styled.p`
  width: 80%;
  line-height: 30px;
`;

const Testimonial: React.FunctionComponent<any> = () => (
  <Container>
    <Wrapper>
      <TestimonialContainer>
        <Img src={require("../Images/Etc/Nicolas_Serrano.jpeg")} />
        <TextBox>
          <Text>
            "Any team would be lucky to work with Minjae, apart from being a
            programmer that gets things done and shipped on time he is also a
            quick learner, he can accommodate to any stack for he is never
            afraid of taking risks and trying new technologies, his soft skills
            are at the same level with his programming ability which makes him a
            delight to work and communicate with."
          </Text>
        </TextBox>
        <NameBox>
          <Name>Nicolás Serrano Arévalo</Name>
          <Company>Co-founder, NOMADCODERS</Company>
        </NameBox>
      </TestimonialContainer>
    </Wrapper>
  </Container>
);

export default Testimonial;
