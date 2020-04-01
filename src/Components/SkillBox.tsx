import React from "react";
import styled from "../Styles/typed-components";
import Wrapper from "./Wrapper";

const Container = styled.div`
  background-color: ${props => props.theme.whiteColor};
  border: 1px solid ${props => props.theme.borderColor};
  width: 80%;
  max-width: 1200px;
  height: 900px;
  position: relative;
  bottom: 300px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  @media screen and (max-width: 1200px) {
    height: 100%;
  }
`;

const BoxContainer = styled.span`
  display: flex;
  flex-wrap: nowrap;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

const DevidedContainer = styled.div`
  width: 33.33%;
  display: flex;
  height: 900px;
  justify-content: center;
  padding: 50px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  &:not(:last-child) {
    border-right: 1px solid ${props => props.theme.borderColor};
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    &:not(:last-child) {
      border-right: none;
      border-bottom: 1px solid ${props => props.theme.borderColor};
    }
  }
`;

const Bold = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin: 20px 0;
`;

const CText = styled.p`
  margin: 20px 0;
  font-weight: 400;
  color: ${props => props.theme.blueColor};
`;

const Text = styled.p`
  margin-bottom: 40px;
`;

const ColumnContainer = styled.div`
  height: 500px;
  @media screen and (max-width: 1200px) {
    height: 100%;
  }
`;
const List = styled.p`
  margin: 0 0 10px 0;
`;

const FirstBox = styled.div`
  height: 300px;
`;
const SecondBox = styled.div`
  height: 120px;
`;
const ThirdBox = styled.div`
  line-height: 20px;
  height: 400px;
`;

const Img = styled.img`
  width: 90px;
  height: 90px;
`;

const FrontEndToolsList = [
  "VSCode",
  "Photoshop",
  "Typescript",
  "React",
  "React-Native",
  "Styled-Components",
  "Tailwind",
  "Apollo",
  "Sketch",
  "Github",
  "Terminal",
  "Pen & Paper"
];

const BackEndToolsList = [
  "VSCode",
  "Django",
  "Graphene",
  "Graphql",
  "NodeJS",
  "Typescript",
  "Express",
  "TypeORM",
  "Github",
  "ContextAPI",
  "Terminal"
];

const ArchitectureToolsList = [
  "AutoCad",
  "Photoshop",
  "Rhino",
  "React",
  "3dsMax",
  "SketchUp",
  "Pen & Paper"
];

const SkillBox: React.FunctionComponent<any> = () => (
  <Container>
    <Wrapper>
      <BoxContainer>
        <DevidedContainer>
          <FirstBox>
            <Img src={require("../Images/Icon/web.jpg")} />
            <Img src={require("../Images/Icon/mobile.jpg")} />
            <Bold>Front-end Developer</Bold>
            <Text>
              I like to code things from sketch, and enjoy bringing ideas to
              life in the browser or application.
            </Text>
          </FirstBox>
          <SecondBox>
            <CText>Languages I speak:</CText>
            <Text>HTML, CSS, Javascript, Image </Text>
          </SecondBox>
          <ThirdBox>
            <CText>Dev Tools:</CText>
            <ColumnContainer>
              {FrontEndToolsList.map((tool, index) => (
                <List key={index}>{tool}</List>
              ))}
            </ColumnContainer>
          </ThirdBox>
        </DevidedContainer>
        <DevidedContainer>
          <FirstBox>
            <Img src={require("../Images/Icon/server.jpg")} />
            <Bold>Back-end Developer</Bold>
            <Text>
              I am a huge fan of Django Framework flavor to ensure having robust
              website or application.
            </Text>
          </FirstBox>
          <SecondBox>
            <CText>Languages I speak:</CText>
            <Text>Python, Javascript, Graphql</Text>
          </SecondBox>
          <ThirdBox>
            <CText>Dev Tools:</CText>
            <ColumnContainer>
              {BackEndToolsList.map((tool, index) => (
                <List key={index}>{tool}</List>
              ))}
            </ColumnContainer>
          </ThirdBox>
        </DevidedContainer>
        <DevidedContainer>
          <FirstBox>
            <Img src={require("../Images/Icon/architecture.jpg")} />
            <Bold>Architectural Designer</Bold>
            <Text>
              I make images and manage a construction team. I enjoy making what
              I imagine into reality.
            </Text>
          </FirstBox>
          <SecondBox>
            <CText>Languages I speak:</CText>
            <Text>Korean, English, Number, Image</Text>
          </SecondBox>
          <ThirdBox>
            <CText>Design Tools:</CText>
            <ColumnContainer>
              {ArchitectureToolsList.map((tool, index) => (
                <List key={index}>{tool}</List>
              ))}
            </ColumnContainer>
          </ThirdBox>
        </DevidedContainer>
      </BoxContainer>
    </Wrapper>
  </Container>
);

export default SkillBox;
