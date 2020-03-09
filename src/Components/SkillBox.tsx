import React from "react";
import styled from "../Styles/typed-components";
import Wrapper from "./Wrapper";

const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
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
`;

const BoxContainer = styled.span`
  display: flex;
  flex-wrap: nowrap;
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
`;

const Icon = styled.div`
  height: 150px;
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
`;
const List = styled.p`
  margin: 0 0 10px 0;
`;

const FirstBox = styled.div`
  height: 280px;
`;
const SecondBox = styled.div`
  height: 120px;
`;
const ThirdBox = styled.div`
  height: 400px;
`;

const FrontEndToolsList = [
  "VSCode",
  "Photoshop",
  "Typescript",
  "React",
  "React-Native",
  "Tailwind",
  "Apollo",
  "Redux",
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
  "Express",
  "TypeORM",
  "Github",
  "ContextAPI",
  "Terminal",
  "Typescript"
];

const ArchitectureToolsList = [
  "AutoCad",
  "Photoshop",
  "Rhino",
  "React",
  "3dsMax",
  "Graphql",
  "SketchUp",
  "Pen & Paper"
];

const SkillBox: React.FunctionComponent<any> = () => (
  <Container>
    <Wrapper>
      <BoxContainer>
        <DevidedContainer>
          <FirstBox>
            <Icon></Icon>
            <Bold>Front-end Developer</Bold>
            <Text>
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser.
            </Text>
          </FirstBox>
          <SecondBox>
            <CText>Languages I speak:</CText>
            <Text>HTML, CSS, Javascript </Text>
          </SecondBox>
          <ThirdBox>
            <CText>Dev Tools:</CText>
            <ColumnContainer>
              {FrontEndToolsList.map(tool => (
                <List>{tool}</List>
              ))}
            </ColumnContainer>
          </ThirdBox>
        </DevidedContainer>
        <DevidedContainer>
          <FirstBox>
            <Icon></Icon>
            <Bold>Back-end Developer</Bold>
            <Text>
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser.
            </Text>
          </FirstBox>
          <SecondBox>
            <CText>Languages I speak:</CText>
            <Text>Python, Javascript, Graphql, PostgresQL</Text>
          </SecondBox>
          <ThirdBox>
            <CText>Dev Tools:</CText>
            <ColumnContainer>
              {BackEndToolsList.map(tool => (
                <List>{tool}</List>
              ))}
            </ColumnContainer>
          </ThirdBox>
        </DevidedContainer>
        <DevidedContainer>
          <FirstBox>
            <Icon></Icon>
            <Bold>Architecture Designer</Bold>
            <Text>
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser.
            </Text>
          </FirstBox>
          <SecondBox>
            <CText>Languages I speak:</CText>
            <Text>Korean, English, Number,&nbsp;&nbsp;&nbsp; Image, Plan</Text>
          </SecondBox>
          <ThirdBox>
            <CText>Design Tools:</CText>
            <ColumnContainer>
              {ArchitectureToolsList.map(tool => (
                <List>{tool}</List>
              ))}
            </ColumnContainer>
          </ThirdBox>
        </DevidedContainer>
      </BoxContainer>
    </Wrapper>
  </Container>
);

export default SkillBox;
