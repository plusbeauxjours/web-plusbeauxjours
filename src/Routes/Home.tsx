import React, { useEffect } from "react";
import styled from "../Styles/typed-components";
import Helmet from "react-helmet";
import SkillBox from "../Components/SkillBox";
import ProfileBox from "../Components/ProfileBox";
import ArchitecturalWorksBox from "../Components/ArchitecturalWorksBox";
import PortfolioBox from "../Components/PortfolioBox";
import TestimonialBox from "../Components/TestimonialBox";
import PortfolioThumbnail from "../Components/PortfolioThumbnail";
import Footer from "../Components/Footer";
import MainBox from "../Components/MainBox";

const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
  margin-bottom: 300px;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 300px;
`;

const HomeHome: React.FunctionComponent<any> = () => {
  useEffect(() => window.scrollTo(0, 0));
  return (
    <Container>
      <Helmet>
        <title>Home | Plusbeauxjours</title>
      </Helmet>
      <MainBox />
      <ColumnContainer>
        <ProfileBox />
        <SkillBox />
      </ColumnContainer>
      <PortfolioContainer>
        <PortfolioBox />
        <PortfolioThumbnail />
      </PortfolioContainer>
      <ArchitecturalWorksBox />
      <TestimonialBox />
      <Footer />
    </Container>
  );
};

export default HomeHome;
