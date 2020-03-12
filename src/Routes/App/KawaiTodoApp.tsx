import React from "react";
import styled from "../../Styles/typed-components";
import Helmet from "react-helmet";
import Wrapper from "../../Components/Wrapper";

const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
`;

const MiddleContainer = styled.div``;

const PortfolioMainContainer = styled.div`
  background-color: ${props => props.theme.bgColor};
  display: flex;
  height: 400px;
  border-bottom: 1px solid ${props => props.theme.borderColor};
`;

const ColorContainer = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ColorBox = styled.div<IProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background-color: ${props => props.color};
  border: ${props =>
    props.color === "#FFFFFF" ? "1px solid #F23657" : "none"};
  &:not(:last-child) {
    margin-right: 30px;
  }
`;

const ColorText = styled.div<IProps>`
  position: absolute;
  text-align: center;
  font-weight: 400;
  color: ${props => (props.color === "#FFFFFF" ? "#F23657" : "#FFFFFF")};
`;

const TextBox = styled.div`
  margin: 100px 0;
  display: flex;
  justify-content: center;
`;

const Text = styled.div`
  width: 80%;
  text-align: center;
`;

interface IProps {
  color: string;
}

const KawaiTodoColors = ["#F23657", "#FFFFFF"];

const KawaiTodoApp: React.FunctionComponent<any> = () => (
  <Container>
    <Helmet>
      <title>Kawai Todo-app | Plusbeauxjours</title>
    </Helmet>
    <Wrapper>
      <MiddleContainer>
        <PortfolioMainContainer />
        <TextBox>
          <Text>
            INTRO
            <br /> Since beginning my journey as a freelance designer nearly 8
            years ago, I've done remote work for agencies, consulted for
            startups, and collaborated with talented people to create digital
            products for both business and consumer use. I'm quietly confident,
            naturally curious, and perpetually working on improving my chops one
            design problem at a time.
          </Text>
        </TextBox>
        <TextBox>
          <Text>FRONTEND SKETCH | BACKEND SKETCH</Text>
        </TextBox>
        <TextBox>
          <Text>
            ABOUT BACKEND
            <br /> Since beginning my journey as a freelance designer nearly 8
            years ago, I've done remote work for agencies, consulted for
            startups, and collaborated with talented people to create digital
            products for both business and consumer use. I'm quietly confident,
            naturally curious, and perpetually working on improving my chops one
            design problem at a time.
          </Text>
        </TextBox>
        <TextBox>
          <Text>BACKEND DIAGRAM</Text>
        </TextBox>
        <ColorContainer>
          {KawaiTodoColors.map((color, index) => (
            <ColorBox color={color} key={index}>
              <ColorText color={color}>
                {color === "#FFFFFF" ? "#F23657" : "#FFFFFF"}
              </ColorText>
            </ColorBox>
          ))}
        </ColorContainer>
        <TextBox>
          <Text>VIDEO | SCREENSHOT 1 | SCREENSHOT 2 | SCREENSHOT 3</Text>
        </TextBox>
        <TextBox>
          <Text>
            ABOUT BACKEND
            <br /> Since beginning my journey as a freelance designer nearly 8
            years ago, I've done remote work for agencies, consulted for
            startups, and collaborated with talented people to create digital
            products for both business and consumer use. I'm quietly confident,
            naturally curious, and perpetually working on improving my chops one
            design problem at a time.
          </Text>
        </TextBox>
      </MiddleContainer>
    </Wrapper>
  </Container>
);

export default KawaiTodoApp;
