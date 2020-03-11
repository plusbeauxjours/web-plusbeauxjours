import React from "react";
import styled from "../Styles/typed-components";
import Wrapper from "./Wrapper";
import { keyframes } from "styled-components";

const Container = styled.div`
  background-color: ${props => props.theme.whiteColor};
  width: 80%;
  max-width: 1200px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  @media screen and (max-width: 1200px) {
    height: 100%;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, minmax(100px, auto));
  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Square = styled.div`
  border-radius: 20px;
  border: 1px solid ${props => props.theme.borderColor};
  width: 100%;
  height: 0;
  padding-bottom: 100%;
`;
const ImageAnimation = keyframes`
  from { transform:none;}
   50%   {  transform:scale(1.1); } 
   to     {transform:none; }
  `;
const Img = styled.img`
  &:hover {
    animation: ${ImageAnimation} 2s linear;
  }
  filter: ${props => (props.loading ? "blur(6px)" : "")};
  width: 100%;
  max-width: 800px;
`;
const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;
`;

const Bold = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-top: 30px;
  margin-bottom: 10px;
`;
const Text = styled.div`
  line-height: 22px;
`;

const SkillBox: React.FunctionComponent<any> = () => (
  <Container>
    <Wrapper>
      <GridContainer>
        <Square>
          <InnerBox>
            <Bold>Pinner-Web</Bold>
            <Text>Meet-up app with Django, React, Graphene, Typescript</Text>
          </InnerBox>
        </Square>
        <Square>
          <InnerBox>
            <Bold>Airbnp-Web</Bold>
            <Text>air-bnb clone with Django, Tailwind</Text>
          </InnerBox>
        </Square>
        <Square>
          <InnerBox>
            <Bold>Puber-Web</Bold>
            <Text>nuber clone with Node.js, React, Graphql, Typescript </Text>
          </InnerBox>
        </Square>
        <Square>
          <InnerBox>
            <Bold>Pinner-App</Bold>
            <Text>
              Meet-up app with Django, React-Native, Graphene, Typescript
            </Text>
          </InnerBox>
        </Square>
        <Square>
          <InnerBox>
            <Bold>Kawai To Do-App</Bold>
            <Text>To do app with React-Native</Text>
          </InnerBox>
        </Square>
        <Square>
          <InnerBox>
            <Bold>Fukin Weather-App</Bold>
            <Text>Weather app with React-Native</Text>
          </InnerBox>
        </Square>
      </GridContainer>
    </Wrapper>
  </Container>
);

export default SkillBox;
