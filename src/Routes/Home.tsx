import React from "react";
import styled from "../Styles/typed-components";
import Helmet from "react-helmet";
import SkillBox from "../Components/SkillBox";
import ProfileBox from "../Components/ProfileBox";
import ArchitecturalWorksBox from "../Components/ArchitecturalWorksBox";
import PortfolioBox from "../Components/PortfolioBox";

import MainBox from "../Components/MainBox";

const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.p``;

const HomeHome: React.FunctionComponent<any> = () => (
  <Container>
    <Helmet>
      <title>Home | Plusbeauxjours</title>
    </Helmet>
    <MainBox />
    <ColumnContainer>
      <ProfileBox/>
      <SkillBox/>
    </ColumnContainer>
    <PortfolioBox />
    <ArchitecturalWorksBox />
  </Container>
);

export default HomeHome;
