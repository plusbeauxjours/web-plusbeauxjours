import React, { useEffect } from "react";
import styled from "../../Styles/typed-components";
import Helmet from "react-helmet";
import Wrapper from "../../Components/Wrapper";
import ProgressiveImage from "react-progressive-image";
import { WebIcon, GithubIcon } from "../../Icons";

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
  border: ${(props) => props.color === "#F3F3F3" && "1px solid #c2c2c2"};
  &:not(:last-child) {
    margin-right: 30px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const SketchContainer = styled.div``;

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
  max-width: 660px;
  filter: ${(props) => (props.loading ? "blur(6px)" : "")};
`;

const ColorText = styled.div<IProps>`
  position: absolute;
  text-align: center;
  font-weight: 400;
  color: ${(props) => {
    if (props.color === "#000000") {
      return "#F3F3F3";
    } else {
      return "#000000";
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

interface IProps {
  loading?: boolean;
  color?: string;
}

const PuberWebColors = ["#C2C2C2", "#F3F3F3", "#000000"];

const PuberWeb: React.FunctionComponent<any> = () => {
  useEffect(() => window.scrollTo(0, 0));
  return (
    <Container>
      <Helmet>
        <title>Puber-web | Plusbeauxjours</title>
      </Helmet>
      <Wrapper>
        <PortfolioMainContainer>
          <MainTitilBox>
            <MainTitle>Puber - Web</MainTitle>
            <MainTitleTextContainer>
              <MainTitleText>5th Nov 2018 - 12th Jan 2019</MainTitleText>
              <MainTitleText>2 MONTHS</MainTitleText>
            </MainTitleTextContainer>
            <LinkContainer>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={"https://wonderful-visvesvaraya-af346f.netlify.com"}
              >
                <LinkBox>
                  <WebIcon />
                  <LinkText>WEBSITE</LinkText>
                </LinkBox>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={"https://github.com/plusbeauxjours/puber-client"}
              >
                <LinkBox>
                  <GithubIcon />
                  <LinkText>CLIENT</LinkText>
                </LinkBox>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={"https://github.com/plusbeauxjours/puber-server"}
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
            Puber is my first clone project. The reason why I decide to clone
            Uber is because I was interested in two players market project and
            location based project. To better understand about Django and
            Python, I wanted to compare with other languege like Express and
            NodeJS. I write and read more than 7 times to get a better
            understanding of how two players market project works and what
            GraphQL is.
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
              <li>NodeJS</li>
              <li>Express</li>
              <li>GraphQL</li>
              <li>TypeORM</li>
              <li>React</li>
              <li>Apollo</li>
              <li>TypeScript</li>
              <li>Styled-Components</li>
              <li>GoogleMapAPI</li>
              <li>Heroku</li>
            </ul>
          </Text>
        </TextBox>
        <TextBox>
          <GreyLine />
        </TextBox>
        <ColorContainer>
          {PuberWebColors.map((color, index) => (
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
            src={require("../../Images/Web/Puber_web/Puber_web_screenshot.jpg")}
            placeholder={require("../../Images/Web/Puber_web/Puber_web_screenshot_tiny.jpg")}
          >
            {(src, loading) => (
              <ImageContainer>
                <Screenshot loading={loading} src={src} />
              </ImageContainer>
            )}
          </ProgressiveImage>
          <ProgressiveImage
            src={require("../../Images/Web/Puber_web/Puber_web_video.gif")}
            placeholder={require("../../Images/Web/Puber_web/Puber_web_video_tiny.jpg")}
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
            <Bold>Long Term Gains</Bold> I've felt in love with GraphQL. GraphQL
            is awesome. It's easy, simple and powerful. And also I love to
            practice with Google Map API and Subscriptions in GraphQL. I
            realized when I should use Django and when I should use NodeJS from
            this project. The only thing I miss from it is I couldn't think
            enough about design.
          </Text>
        </TextBox>
      </Wrapper>
    </Container>
  );
};

export default PuberWeb;
