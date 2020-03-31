import React, { useEffect } from "react";
import styled from "../../Styles/typed-components";
import Helmet from "react-helmet";
import Wrapper from "../../Components/Wrapper";
import ProgressiveImage from "react-progressive-image";
import { WebIcon, GithubIcon } from "../../Icons";

const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
`;

const PortfolioMainContainer = styled.div`
  background-color: ${props => props.theme.bgColor};
  display: flex;
  justify-content: space-around;
  height: 400px;
  border-bottom: 1px solid ${props => props.theme.borderColor};
  @media screen and (max-width: 830px) {
    flex-direction: column;
    align-items: center;
    height: 830px;
  }
`;

const MainTitilBox = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 830px) {
    margin-bottom: 30px;
  }
`;

const MainTitle = styled.div`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 10px;
  line-height: 40px;
`;

const MainTitleText = styled.div`
  margin-top: 5px;
  font-size: 15px;
`;

const MainTitleTextContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  border-top: 1px solid ${props => props.theme.borderColor};
`;

const LinkContainer = styled.div`
  display: flex;
  width: 150px;
  justify-content: space-between;
  margin-top: 30px;
`;

const LinkBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LinkText = styled.div`
  font-size: 6px;
  text-align: center;
  height: 8px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ScreenshotContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Screenshot = styled.img<IProps>`
  width: 100%;
  max-width: 800px;
  filter: ${props => (props.loading ? "blur(6px)" : "")};
`;

const DiagramContainer = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 20px;
`;

const Diagram = styled.img<IProps>`
  width: 100%;
  max-width: 800px;
  filter: ${props => (props.loading ? "blur(6px)" : "")};
`;

const TextBox = styled.div`
  margin: 100px 0;
  display: flex;
  justify-content: center;
`;

const Bold = styled.p`
  font-weight: 400;
  margin-bottom: 10px;
`;

const Text = styled.div`
  width: 80%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const GreyLine = styled.div`
  border-bottom: 1px solid ${props => props.theme.borderColor};
  width: 300px;
  margin: 20px 0;
`;

interface IProps {
  loading?: boolean;
  color?: string;
}

const AirbnpWeb: React.FunctionComponent<any> = () => {
  useEffect(() => window.scrollTo(0, 0));
  return (
    <Container>
      <Helmet>
        <title>Airbnp-web | Plusbeauxjours</title>
      </Helmet>
      <Wrapper>
        <PortfolioMainContainer>
          <MainTitilBox>
            <MainTitle>Airbnp - Web</MainTitle>
            <MainTitleTextContainer>
              <MainTitleText>5th Feb 2020 - 9th Mar 2020</MainTitleText>
              <MainTitleText>1 MONTH</MainTitleText>
            </MainTitleTextContainer>
            <LinkContainer>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={
                  "http://airbnp.eba-8dydnzzj.ap-northeast-2.elasticbeanstalk.com/"
                }
              >
                <LinkBox>
                  <WebIcon />
                  <LinkText>WEBSITE</LinkText>
                </LinkBox>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={"https://github.com/plusbeauxjours/airbnp"}
              >
                <LinkBox>
                  <GithubIcon />
                  <LinkText>GITHUB</LinkText>
                </LinkBox>
              </a>
            </LinkContainer>
          </MainTitilBox>
        </PortfolioMainContainer>
        <TextBox>
          <Text>
            <Bold>About this project</Bold>
            <br /> Since beginning my journey as a freelance designer nearly 8
            years ago, I've done remote work for agencies, consulted for
            startups, and collaborated with talented people to create digital
            products for both business and consumer use. I'm quietly confident,
            naturally curious, and perpetually working on improving my chops one
            design problem at a time.
          </Text>
        </TextBox>
        <TextBox>
          <ProgressiveImage
            src={require("../../Images/Web/Airbnp_web/Airbnp_web_sketch.jpg")}
            placeholder={require("../../Images/Web/Airbnp_web/Airbnp_web_sketch_tiny.jpg")}
          >
            {(src, loading) => (
              <DiagramContainer>
                <Diagram loading={loading} src={src} />
              </DiagramContainer>
            )}
          </ProgressiveImage>
        </TextBox>
        <TextBox>
          <Text>
            <Bold>Technical Sheet</Bold>
            Code technologies I got involved with while working on this
            project..
            <GreyLine />
            <ul>
              <li>Django</li>
              <li>Django-Templete</li>
              <li>Tailwind</li>
              <li>Styled-Components</li>
              <li>AWS</li>
            </ul>
          </Text>
        </TextBox>
        <ScreenshotContainer>
          <ProgressiveImage
            src={require("../../Images/Web/Airbnp_web/Airbnp_web_alt.jpg")}
            placeholder={require("../../Images/Web/Airbnp_web/Airbnp_web_alt_tiny.jpg")}
          >
            {(src, loading) => (
              <ImageContainer>
                <Screenshot loading={loading} src={src} />
              </ImageContainer>
            )}
          </ProgressiveImage>
        </ScreenshotContainer>
        <TextBox>
          <Text>
            <Bold>About design</Bold>
            Since beginning my journey as a freelance designer nearly 8 years
            ago, I've done remote work for agencies, consulted for design
            problem at a time.
          </Text>
        </TextBox>
        <ScreenshotContainer>
          <ProgressiveImage
            src={require("../../Images/Web/Airbnp_web/Airbnp_web_screenshot.jpg")}
            placeholder={require("../../Images/Web/Airbnp_web/Airbnp_web_screenshot_tiny.jpg")}
          >
            {(src, loading) => (
              <ImageContainer>
                <Screenshot loading={loading} src={src} />
              </ImageContainer>
            )}
          </ProgressiveImage>
          <ProgressiveImage
            src={require("../../Images/Web/Airbnp_web/Airbnp_web_video.gif")}
            placeholder={require("../../Images/Web/Airbnp_web/Airbnp_web_video_tiny.jpg")}
          >
            {(src, loading) => (
              <ImageContainer style={{ marginTop: "60px" }}>
                <Screenshot loading={loading} src={src} />
              </ImageContainer>
            )}
          </ProgressiveImage>
        </ScreenshotContainer>
        <TextBox>
          <Text>
            <Bold>Long term gains</Bold>
            Since beginning my journey as a freelance designer nearly 8 years
            ago, I've done remote work for agencies, consulted for startups, and
            collaborated with talented people to create digital products for
            both business and consumer use. I'm quietly confident, naturally
            curious, and perpetually working on improving my chops one design
            problem at a time.
          </Text>
        </TextBox>
      </Wrapper>
    </Container>
  );
};

export default AirbnpWeb;
