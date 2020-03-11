import React from "react";
import styled from "../Styles/typed-components";
import Wrapper from "./Wrapper";
import Testimonial from "./Testimonial";

const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
  height: 900px;
  width: 100%;
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
  margin: 80px 0;
`;

const Text = styled.p`
  width: 80%;
`;

const Line = styled.div`
  border-bottom: 1px solid ${props => props.theme.borderColor};
`;

const TestimonialBox: React.FunctionComponent<any> = () => (
  <Container>
    <Wrapper>
      <Line />
      <TextBox>
        <Bold>Testimonial</Bold>
        <Text>People I've met with have said some nice things...</Text>
        <Testimonial />
      </TextBox>
    </Wrapper>
  </Container>
);

export default TestimonialBox;
