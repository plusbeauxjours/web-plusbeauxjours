import React, { useState } from "react";
import styled from "../../Styles/typed-components";
import Helmet from "react-helmet";
import Wrapper from "../../Components/Wrapper";
import ProgressiveImage from "react-progressive-image";
import { WebIcon, GithubIcon } from "../../Icons";
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

const DiagramContainer = styled.div``;

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

const Text = styled.div`
  width: 80%;
  text-align: center;
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

const AirbnpWeb: React.FunctionComponent<any> = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  return (
    <Container>
      <Helmet>
        <title>Airbnp-web | Plusbeauxjours</title>
      </Helmet>
      {modalOpen && (
        <ModalContainer>
          <ModalOverlay onClick={() => setModalOpen(false)} />
          <Modal>
            <QR />
          </Modal>
        </ModalContainer>
      )}
      <Wrapper>
        <PortfolioMainContainer>
          <MainTitilBox>
            <MainTitle>Airbnp - Web</MainTitle>
            <MainTitleTextContainer>
              <MainTitleText>5th Feb 2020 - 9th Mar 2019</MainTitleText>
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
        <ScreenshotContainer>
          <ProgressiveImage
            src={"https://i.imgur.com/iNStgwN.jpg"}
            placeholder={"https://imgur.com/rwkmgCR.jpg"}
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
            ABOUT DESIGN
            <br /> Since beginning my journey as a freelance designer nearly 8
            years ago, I've done remote work for agencies, consulted for design
            problem at a time.
          </Text>
        </TextBox>
        <ScreenshotContainer>
          <ProgressiveImage
            src={"https://i.imgur.com/xBjFzfB.jpg"}
            placeholder={"https://imgur.com/rwkmgCR.jpg"}
          >
            {(src, loading) => (
              <ImageContainer>
                <Screenshot loading={loading} src={src} />
              </ImageContainer>
            )}
          </ProgressiveImage>
          <ProgressiveImage
            src={"https://i.imgur.com/ou89UvI.gif"}
            placeholder={"https://imgur.com/rwkmgCR.jpg"}
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

export default AirbnpWeb;
