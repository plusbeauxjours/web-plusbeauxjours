import React, { useState, useEffect } from "react";
import styled from "../../Styles/typed-components";
import Helmet from "react-helmet";
import Wrapper from "../../Components/Wrapper";
import ProgressiveImage from "react-progressive-image";
import { AndroidIcon, AppleIcon, GithubIcon } from "../../Icons";
import { keyframes } from "styled-components";

const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
`;

const PortfolioMainContainer = styled.div`
  background-color: ${props => props.theme.bgColor};
  display: flex;
  justify-content: space-around;
  height: 400px;
  border-bottom: 1px solid ${props => props.theme.borderColor};
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
  background-color: ${props => props.color};
  border: ${props =>
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
  height: 100%;
  &:not(:last-child) {
    margin-right: 30px;
  }
`;

const ScreenshotContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Screenshot = styled.img<IProps>`
  width: 100%;
  max-width: 300px;

  filter: ${props => (props.loading ? "blur(6px)" : "")};
`;

const DiagramContainer = styled.div``;

const Diagram = styled.img<IProps>`
  width: 100%;
  max-width: 800px;
  filter: ${props => (props.loading ? "blur(6px)" : "")};
`;
const ColorText = styled.div<IProps>`
  position: absolute;
  text-align: center;
  font-weight: 400;
  color: ${props => {
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

const Text = styled.div`
  width: 80%;
  text-align: center;
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
  background-color: ${props => props.theme.modalOverlayColor};
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

const QR = styled.div`
  width: 300px;
  height: 300px;
  background-color: red;
`;

interface IProps {
  loading?: boolean;
  color?: string;
}

const PinnerAppColors = ["#EDEDED", "#E2E2E2", "#318CEE", "#1E1E1E", "#161616"];

const PinnerApp: React.FunctionComponent<any> = () => {
  const [androidModalOpen, setAndroidModalOpen] = useState<boolean>(false);
  const [appleModalOpen, setAppleModalOpen] = useState<boolean>(false);
  useEffect(() => window.scrollTo(0, 0));
  return (
    <Container>
      <Helmet>
        <title>Pinner-app | Plusbeauxjours</title>
      </Helmet>
      {androidModalOpen && (
        <ModalContainer>
          <ModalOverlay onClick={() => setAndroidModalOpen(false)} />
          <Modal>
            <QR />
          </Modal>
        </ModalContainer>
      )}
      {appleModalOpen && (
        <ModalContainer>
          <ModalOverlay onClick={() => setAppleModalOpen(false)} />
          <Modal>
            <QR />
          </Modal>
        </ModalContainer>
      )}
      <Wrapper>
        <PortfolioMainContainer>
          <MainTitilBox>
            <MainTitle>Pinner - App</MainTitle>
            <MainTitleTextContainer>
              <MainTitleText>6th Sep 2019 - 14th Dec 2019</MainTitleText>
              <MainTitleText>3 MONTHS</MainTitleText>
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
            INTRO
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
            src={"https://i.imgur.com/PMSvtWX.jpg"}
            placeholder={"https://imgur.com/rwkmgCR.jpg"}
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
            STACK
            <br /> Rapport is a close and harmonious relationship in which the
            people or groups concerned are “in sync” with each other, understand
            each other's feelings or ideas, and communicate smoothly.
          </Text>
        </TextBox>
        <TextBox>
          <ProgressiveImage
            src={"https://i.imgur.com/ujyikM7.jpg"}
            placeholder={"https://imgur.com/rwkmgCR.jpg"}
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
            ABOUT ALTS
            <br /> Since beginning my journey as a freelance designer nearly 8
            years ago, I've done remote work for agencies, consulted for design
            problem at a time.
          </Text>
        </TextBox>
        <TextBox>
          <ProgressiveImage
            src={"https://i.imgur.com/hmxmvUq.jpg"}
            placeholder={"https://imgur.com/rwkmgCR.jpg"}
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
            ABOUT COLORS
            <br /> Since beginning my journey as a freelance designer nearly 8
            years ago, I've done remote work for agencies, consulted for design
            problem at a time.
          </Text>
        </TextBox>
        <ColorContainer>
          {PinnerAppColors.map((color, index) => (
            <ColorBox color={color} key={index}>
              <ColorText color={color}>{color}</ColorText>
            </ColorBox>
          ))}
        </ColorContainer>
        <TextBox>
          <Text>
            ABOUT DESIGN
            <br /> Since beginning my journey as a freelance designer nearly 8
            years ago, I've done remote work for agencies, consulted for design
            problem at a time.
          </Text>
        </TextBox>
        <ScreenshotContainer>
          <ProgressiveImage
            src={"https://i.imgur.com/WV3Pxkv.gif"}
            placeholder={"https://imgur.com/rwkmgCR.jpg"}
          >
            {(src, loading) => (
              <ScreenshotBox>
                <Screenshot loading={loading} src={src} />
              </ScreenshotBox>
            )}
          </ProgressiveImage>
          <ProgressiveImage
            src={"https://i.imgur.com/eicc8fR.png"}
            placeholder={"https://imgur.com/rwkmgCR.jpg"}
          >
            {(src, loading) => (
              <ScreenshotBox>
                <Screenshot loading={loading} src={src} />
              </ScreenshotBox>
            )}
          </ProgressiveImage>
          <ProgressiveImage
            src={"https://i.imgur.com/oWz4IVj.png"}
            placeholder={"https://imgur.com/iFkI2wR.jpg"}
          >
            {(src, loading) => (
              <ScreenshotBox>
                <Screenshot loading={loading} src={src} />
              </ScreenshotBox>
            )}
          </ProgressiveImage>
          <ProgressiveImage
            src={"https://i.imgur.com/wZbSeDk.png"}
            placeholder={"https://imgur.com/TRheCeq.jpg"}
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
            LONG TERM GAINS
            <br /> Since beginning my journey as a freelance designer nearly 8
            years ago, I've done remote work for agencies, consulted for
            startups, and collaborated with talented people to create digital
            products for both business and consumer use. I'm quietly confident,
            naturally curious, and perpetually working on improving my chops one
            design problem at a time.
          </Text>
        </TextBox>
      </Wrapper>
    </Container>
  );
};

export default PinnerApp;
