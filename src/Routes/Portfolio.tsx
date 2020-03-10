import React from "react";
import styled from "../Styles/typed-components";
import Helmet from "react-helmet";
import Wrapper from "../Components/Wrapper";

const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
  height: 800px;
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
  min-width: 500px;
  position: relative;
  height: 500px;
  justify-content: center;
`;

const Text = styled.p`
  width: 80%;
`;
const Portfolio: React.FunctionComponent<any> = () => (
  <Container>
    <Helmet>
      <title>Portfolio | Plusbeauxjours</title>
    </Helmet>
    <Wrapper>
      <TextBox>
        <Bold>My Portfolio</Bold>
        <Text>My Portfolio</Text>
      </TextBox>
    </Wrapper>
  </Container>
);

export default Portfolio;
