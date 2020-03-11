import React from "react";
import styled from "../Styles/typed-components";
import Wrapper from "./Wrapper";

const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
  width: 700px;
  margin: 50px 0;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 50px;
`;

const Text = styled.p`
  text-align: center;
  font-weight: 200;
  line-height: 35px;
`;

const TestimonialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 50px;
  overflow: hidden;
`;
const Name = styled.div`
  font-weight: 600;
  margin-bottom: 10px;
`;
const Company = styled.p`
  width: 80%;
  text-align: center;
`;

const Testimonial: React.FunctionComponent<any> = () => (
  <Container>
    <Wrapper>
      <TestimonialContainer>
        <Img src="https://imgur.com/QyvJLxQ.jpg" />
        <TextBox>
          <Text>
            "Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.""
          </Text>
        </TextBox>
        <TextBox>
          <Name>Pascal Tremblay</Name>
          <Company>Creative Lead, Good Kind</Company>
        </TextBox>
      </TestimonialContainer>
    </Wrapper>
  </Container>
);

export default Testimonial;
