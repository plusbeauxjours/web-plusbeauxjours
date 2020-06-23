import React, { useEffect } from "react";
import styled from "../../Styles/typed-components";
import Helmet from "react-helmet";
import Wrapper from "../../Components/Wrapper";
import ProgressiveImage from "react-progressive-image";
import { WebIcon, GithubIcon } from "../../Icons";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  margin-bottom: 300px;
`;

const PortfolioMainContainer = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  display: flex;
  justify-content: space-around;
  height: 400px;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
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
  border-top: 1px solid ${(props) => props.theme.borderColor};
`;

const LinkContainer = styled.div`
  display: flex;
  width: 150px;
  justify-content: space-between;
  margin-top: 70px;
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
  filter: ${(props) => (props.loading ? "blur(6px)" : "")};
`;

const DiagramContainer = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 20px;
`;

const Diagram = styled.img<IProps>`
  width: 100%;
  max-width: 800px;
  filter: ${(props) => (props.loading ? "blur(6px)" : "")};
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

const Inline = styled.div`
  flex-direction: row;
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
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
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
                href={"https://www.airbnp-django.shop"}
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
            <Bold>About this Project</Bold>
            <Inline>
              I decided to clone one more two player market project with Django
              when I've finished&nbsp;
              <Link to={"/projects/web/puber-web"}>Puber</Link> which is two
              player market project built with NodeJs. This project took only 1
              month because of Django Template. I used Django Template instead
              of any front-end framework to save time. I didn't need to think
              about class-name while I'm using Tailwind.
            </Inline>
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
          <GreyLine />
        </TextBox>
        <TextBox>
          <Text>
            <Bold>Technical Sheet</Bold>
            Code technologies I got involved with while working on this
            project..
            <ul>
              <li>Django</li>
              <li>Django-Templete</li>
              <li>Tailwind</li>
              <li>AWS</li>
            </ul>
          </Text>
        </TextBox>
        <TextBox>
          <GreyLine />
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
          <GreyLine />
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
            <Bold>Long Term Gains</Bold>
            I've considered about front-end between React and Django Template. I
            didn't want a many dynamic things or many interactive things on this
            projects. It was going to be mostly about content. So Django
            Template was a best option and also I made my own custom manage.py
            commands to create fake data instead of click on Django Admin panel
            to create date. I delighted to learn more about Django from this
            project. This project will be on mobile application with REST API
            with React-Native on May 2020.
          </Text>
        </TextBox>
      </Wrapper>
    </Container>
  );
};

export default AirbnpWeb;
