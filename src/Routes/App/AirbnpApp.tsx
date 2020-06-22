import React, { useState, useEffect } from "react";
import styled from "../../Styles/typed-components";
import Helmet from "react-helmet";
import Wrapper from "../../Components/Wrapper";
import ProgressiveImage from "react-progressive-image";
import { AndroidIcon, AppleIcon, GithubIcon } from "../../Icons";
import { keyframes } from "styled-components";
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
`;

const MainTitilBox = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainTitle = styled.div`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 10px;
  line-height: 40px;
  padding: 10px;
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
  width: 250px;
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

const ScreenshotBox = styled(ImageContainer)`
  max-width: 300px;
  width: 100%;
  &:not(:last-child) {
    margin-right: 30px;
  }
`;
const Img = styled.img<IProps>`
  width: 100%;
  filter: ${(props) => (props.loading ? "blur(6px)" : "")};
`;

const ScreenshotContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 200px;
`;

const Screenshot = styled.img<IProps>`
  width: 100%;
  max-width: 300px;
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
    if (props.color === "#35b8b3") {
      return "#EDEDED";
    } else {
      return "#35b8b3";
    }
  }};
  @media screen and (max-width: 400px) {
    display: none;
  }
`;

const TextBox = styled.div`
  margin: 100px 0;
  display: flex;
  justify-content: center;
`;

const IconContainer = styled.div`
  cursor: pointer;
`;

const ModalAnimation = keyframes`
	  from{
	    opacity:0;
	    transform:scale(1.1);
	  }
	  to{
	    opacity:1;
	    transform:none;
	  }
  `;

const ModalContainer = styled.div`
  z-index: 8;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
`;

const ModalOverlay = styled.div`
  z-index: 5;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: ${(props) => props.theme.modalOverlayColor};
`;

const Modal = styled.div`
  z-index: 10;
  position: absolute;
  width: 100%;
  max-width: 800px;
  margin-top: 80px;
  animation: ${ModalAnimation} 0.1s linear;
  display: flex;
  flex-direction: column;
  align-items: center;
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

interface IProps {
  loading?: boolean;
  color?: string;
}

const AirbnpAppColors = ["#EDEDED", "#35b8b3"];

const AirbnpApp: React.FunctionComponent<any> = () => {
  const [androidModalOpen, setAndroidModalOpen] = useState<boolean>(false);
  const [appleModalOpen, setAppleModalOpen] = useState<boolean>(false);
  useEffect(() => window.scrollTo(0, 0));
  return (
    <Container>
      <Helmet>
        <title>AirbnpApp-app | Plusbeauxjours</title>
      </Helmet>
      {androidModalOpen && (
        <ModalContainer>
          <ModalOverlay onClick={() => setAndroidModalOpen(false)} />
          <Modal>
            <Img
              style={{ maxWidth: "300px" }}
              src={require("../../Images/App/Pinner_app/PinnerApp_Android.jpg")}
            />
          </Modal>
        </ModalContainer>
      )}
      {appleModalOpen && (
        <ModalContainer>
          <ModalOverlay onClick={() => setAppleModalOpen(false)} />
          <Modal>
            <Img
              style={{ maxWidth: "300px" }}
              src={require("../../Images/App/Pinner_app/PinnerApp_IOS.jpg")}
            />
          </Modal>
        </ModalContainer>
      )}
      <Wrapper>
        <PortfolioMainContainer>
          <MainTitilBox>
            <MainTitle>Airbnp - App</MainTitle>
            <MainTitleTextContainer>
              <MainTitleText>1st Jun 2020 - 28th Jun 2020</MainTitleText>
              <MainTitleText>4 WEEKS</MainTitleText>
            </MainTitleTextContainer>
            <LinkContainer>
              <IconContainer onClick={() => setAndroidModalOpen(true)}>
                <LinkBox>
                  <AndroidIcon />
                  <LinkText>ANDROID</LinkText>
                </LinkBox>
              </IconContainer>
              <IconContainer onClick={() => setAppleModalOpen(true)}>
                <LinkBox>
                  <AppleIcon />
                  <LinkText>IOS</LinkText>
                </LinkBox>
              </IconContainer>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={"https://github.com/plusbeauxjours/airbnp-app"}
              >
                <LinkBox>
                  <GithubIcon />
                  <LinkText>CLIENT</LinkText>
                </LinkBox>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={"https://github.com/plusbeauxjours/airbnp-api"}
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
              This projects is extended from&nbsp;
              <Link to={"/projects/web/pinner-web"}>Pinner-Web</Link>, because I
              think only few travelers want to visit Pinner by laptop to find
              someone and mobile application has better performance. I used
              React-Native for rendering either Android or iOS components,
              Django (obviously), Graphene and Firebase for live chat.
              Pinner-App records user's location and recommand user who has been
              same city before.
            </Inline>
          </Text>
        </TextBox>
        <TextBox>
          <ProgressiveImage
            src={require("../../Images/App/Pinner_app/Pinner_app_sketch.jpg")}
            placeholder={require("../../Images/App/Pinner_app/Pinner_app_sketch_tiny.jpg")}
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
            Technical Sheet Code technologies I got involved with while working
            on this project..
            <ul>
              <li>Django</li>
              <li>REST-Api</li>
              <li>Sentry</li>
              <li>React-Native</li>
              <li>Redux</li>
              <li>TypeScript</li>
              <li>Styled-Components</li>
              <li>GoogleMapAPI</li>
              <li>Heroku</li>
            </ul>
          </Text>
        </TextBox>
        <TextBox>
          <ProgressiveImage
            src={require("../../Images/App/Pinner_app/Pinner_app_diagram.jpg")}
            placeholder={require("../../Images/App/Pinner_app/Pinner_app_diagram_tiny.jpg")}
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
            <Bold>Alts</Bold>I compared with few different designs to find best
            UI and balance. I considered performance to reduce the time to
            complete a task and increase user satisfaction.
          </Text>
        </TextBox>
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
          {AirbnpAppColors.map((color, index) => (
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
            src={require("../../Images/App/Pinner_app/Pinner_app_video.gif")}
            placeholder={require("../../Images/App/Pinner_app/Pinner_app_video_tiny.jpg")}
          >
            {(src, loading) => (
              <ScreenshotBox>
                <Screenshot loading={loading} src={src} />
              </ScreenshotBox>
            )}
          </ProgressiveImage>
          <ProgressiveImage
            src={require("../../Images/App/Airbnp_app/Airbnp_app_screenshot_s1.jpg")}
            placeholder={require("../../Images/App/Airbnp_app/Airbnp_app_screenshot_s1_tiny.jpg")}
          >
            {(src, loading) => (
              <ScreenshotBox>
                <Screenshot loading={loading} src={src} />
              </ScreenshotBox>
            )}
          </ProgressiveImage>
          <ProgressiveImage
            src={require("../../Images/App/Airbnp_app/Airbnp_app_screenshot_s2.jpg")}
            placeholder={require("../../Images/App/Airbnp_app/Airbnp_app_screenshot_s2_tiny.jpg")}
          >
            {(src, loading) => (
              <ScreenshotBox>
                <Screenshot loading={loading} src={src} />
              </ScreenshotBox>
            )}
          </ProgressiveImage>
          <ProgressiveImage
            src={require("../../Images/App/Airbnp_app/Airbnp_app_screenshot_s3.jpg")}
            placeholder={require("../../Images/App/Airbnp_app/Airbnp_app_screenshot_s3_tiny.jpg")}
          >
            {(src, loading) => (
              <ScreenshotBox>
                <Screenshot loading={loading} src={src} />
              </ScreenshotBox>
            )}
          </ProgressiveImage>
        </ScreenshotContainer>
        <TextBox>
          <Text>
            <Bold>Long Term Gains</Bold>I tried to write a code in a functional
            style with React-Hooks. Most of queries were same as Pinner-Web, so
            it was not difficult. I compared between functional style and class
            style ( You can't use Hooks inside a class component ). I need to
            practice more about Push-Notification in React-Native. I should
            finish a project in less than 3 months.
          </Text>
        </TextBox>
      </Wrapper>
    </Container>
  );
};

export default AirbnpApp;
