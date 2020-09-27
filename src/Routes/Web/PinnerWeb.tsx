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
  width: 200px;
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
  background-color: ${(props) => props.color};
  border: ${(props) =>
    props.color === "#FFFFFF" ? "1px solid #F23657" : "none"};
  &:not(:last-child) {
    margin-right: 30px;
  }
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
  margin-top: 200px;
`;

const Screenshot = styled.img<IProps>`
  width: 100%;
  max-width: 800px;
  filter: ${(props) => (props.loading ? "blur(6px)" : "")};
`;

const DiagramContainer = styled.div``;

const Diagram = styled.img<IProps>`
  width: 100%;
  max-width: 800px;
  filter: ${(props) => (props.loading ? "blur(6px)" : "")};
`;

const ColorText = styled.div<IProps>`
  position: absolute;
  text-align: center;
  font-weight: 400;
  color: ${(props) => {
    if (props.color === "#318CEE") {
      return "#EDEDED";
    } else {
      return "#318CEE";
    }
  }};
  @media screen and (max-width: 800px) {
    display: none;
  }
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
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  width: 300px;
  margin: 20px 0;
`;

const Inline = styled.div`
  flex-direction: row;
`;

const CodeBox = styled.div`
  display: flex;
  margin: 100px 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GitLinkBox = styled(LinkBox)`
  margin: 0 10px;
  svg {
    fill: #bbb;
  }
`;

const CodeImg = styled.img`
  margin-top: 100px;
  margin-bottom: 10px;
  max-width: 800px;
`;

interface IProps {
  loading?: boolean;
  color?: string;
}

const PinnerWebColors = ["#EDEDED", "#E2E2E2", "#318CEE", "#1E1E1E", "#161616"];

const PinnerWeb: React.FunctionComponent<any> = () => {
  useEffect(() => window.scrollTo(0, 0));
  return (
    <Container>
      <Helmet>
        <title>Pinner-web | Plusbeauxjours</title>
      </Helmet>
      <Wrapper>
        <PortfolioMainContainer>
          <MainTitilBox>
            <MainTitle>Pinner - Web</MainTitle>
            <MainTitleTextContainer>
              <MainTitleText>24th Aug 2019 - 18th Dec 2019</MainTitleText>
              <MainTitleText>4 MONTHS</MainTitleText>
            </MainTitleTextContainer>
            <LinkContainer>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={"https://www.pinner.shop/"}
              >
                <LinkBox>
                  <WebIcon />
                  <LinkText>WEBSITE</LinkText>
                </LinkBox>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={"https://github.com/plusbeauxjours/pinner-app"}
              >
                <LinkBox>
                  <GithubIcon />
                  <LinkText>CLIENT</LinkText>
                </LinkBox>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={"https://github.com/plusbeauxjours/pinner-backend"}
              >
                <LinkBox>
                  <GithubIcon />
                  <LinkText>SERVER</LinkText>
                </LinkBox>
              </a>
            </LinkContainer>
          </MainTitilBox>
        </PortfolioMainContainer>
        <TextBox>
          <Text>
            <Bold>About this Project</Bold>
            <Inline>
              After finish&nbsp;
              <Link
                style={{ textDecoration: "underline" }}
                to={"/projects/web/puber-web"}
              >
                Puber
              </Link>
              , I decided to make my own application based on location. When I
              was a solo travler in Europe for few months. I wanted to meet
              someone to talk, to share trip tips or information. There was not
              too many options I can choose. Only dating application or Korean
              communities. So while traveling, I've learned programming to make
              my own location based meet-up application. This is my first Django
              with GraphQL (Graphene) and React project.
            </Inline>
          </Text>
        </TextBox>
        <TextBox>
          <GreyLine />
        </TextBox>
        <TextBox>
          <Text>
            <Bold>Technical Sheet</Bold>
            Technical Sheet Code technologies I got involved with while working
            on this project..
            <ul>
              <li>Django</li>
              <li>Graphene</li>
              <li>React</li>
              <li>Apollo</li>
              <li>TypeScript</li>
              <li>Styled-Components</li>
              <li>GoogleMapAPI</li>
              <li>Sentry</li>
              <li>Heroku</li>
            </ul>
          </Text>
        </TextBox>
        <TextBox>
          <GreyLine />
        </TextBox>
        <TextBox>
          <Text>
            <Bold>Alts</Bold>I compared with few different designs to find best
            UI and balance. I considered performance to reduce the time to
            complete a task and increase user satisfaction.
          </Text>
        </TextBox>
        <TextBox>
          <ProgressiveImage
            src={require("../../Images/Web/Pinner_web/Pinner_web_alts.jpg")}
            placeholder={require("../../Images/Web/Pinner_web/Pinner_web_alts_tiny.jpg")}
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
        <TextBox style={{ marginBottom: 20 }}>
          <Text>
            <Bold>Calculate Distance Between Near Cities</Bold>
            The application show a distance from near cities. Each cities have a
            near city list and the list will be made again when any city model
            is created.
          </Text>
        </TextBox>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={
            "https://github.com/plusbeauxjours/pinner-backend/blob/a0e95ddef6cb8be6ea107e40330b1f8d2f5c76ac/pinner/locations/mutations.py#L28"
          }
        >
          <GitLinkBox>
            <GithubIcon />
          </GitLinkBox>
        </a>
        <CodeBox>
          <ProgressiveImage
            src={require("../../Images/Web/Pinner_web/Pinner_web_Calculate_Distance.gif")}
            placeholder={require("../../Images/Web/Pinner_web/Pinner_web_Calculate_Distance_tiny.jpg")}
          >
            {(src, loading) => (
              <DiagramContainer>
                <Diagram loading={loading} src={src} />
              </DiagramContainer>
            )}
          </ProgressiveImage>
          <CodeImg
            src={require("../../Images/Web/Pinner_web/Pinner_web_Calculate_Distance_Code.jpg")}
            alt="an image"
          />
        </CodeBox>
        <TextBox>
          <GreyLine />
        </TextBox>
        <TextBox>
          <Text>
            <Bold>About Colors</Bold>
            User can choose a theme between darkmode and lightmode easily on
            setting screen and the theme of both has 2 tones. A color blue is
            used as a point in both themes.
          </Text>
        </TextBox>
        <ColorContainer>
          {PinnerWebColors.map((color, index) => (
            <ColorBox color={color} key={index}>
              <ColorText color={color}>{color}</ColorText>
            </ColorBox>
          ))}
        </ColorContainer>
        <TextBox>
          <GreyLine />
        </TextBox>
        <ScreenshotContainer>
          <ProgressiveImage
            src={require("../../Images/Web/Pinner_web/Pinner_web_screenshot.jpg")}
            placeholder={require("../../Images/Web/Pinner_web/Pinner_web_screenshot_tiny.jpg")}
          >
            {(src, loading) => (
              <ImageContainer>
                <Screenshot loading={loading} src={src} />
              </ImageContainer>
            )}
          </ProgressiveImage>
          <ProgressiveImage
            src={require("../../Images/Web/Pinner_web/Pinner_web_video.gif")}
            placeholder={require("../../Images/Web/Pinner_web/Pinner_web_video_tiny.jpg")}
          >
            {(src, loading) => (
              <ImageContainer style={{ marginTop: "20px" }}>
                <Screenshot loading={loading} src={src} />
              </ImageContainer>
            )}
          </ProgressiveImage>
        </ScreenshotContainer>

        <TextBox>
          <Text>
            <Bold>Long Term Gains</Bold>Things I did well in this project, is
            creating city profile. I considered about city profile. I could not
            put all cities in the world data in database. My best option was to
            create city profile when user search that city by Google
            Autocomplete Location Search API. Server create its own city profile
            with Google's location code.
          </Text>
        </TextBox>
      </Wrapper>
    </Container>
  );
};

export default PinnerWeb;
