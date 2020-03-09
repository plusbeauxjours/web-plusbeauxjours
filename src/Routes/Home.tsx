import React from "react";
import styled from "../Styles/typed-components";
import Helmet from "react-helmet";
import SkillBox from "../Components/SkillBox";
import ProfileBox from "../Components/ProfileBox";
import ArchitecturalWorksBox from "../Components/ArchitecturalWorksBox";
import PortfolioBox from "../Components/PortfolioBox";
import Footer from "../Components/Footer";
import MainBox from "../Components/MainBox";

const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
`;
const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.text``;

const HomeHome: React.FunctionComponent<any> = () => (
  <Container>
    <Helmet>
      <title>Home | Plusbeauxjours</title>
    </Helmet>
    <MainBox>MainBox</MainBox>
    <ProfileContainer>
      <ProfileBox>ProfileBox</ProfileBox>
      <SkillBox>SkillBox</SkillBox>
    </ProfileContainer>
    <PortfolioBox>PortfolioBox</PortfolioBox>
    <ArchitecturalWorksBox>ArchitecturalWorksBox</ArchitecturalWorksBox>
    <Footer />
  </Container>
);

export default HomeHome;
