import React from "react";
import styled from "../../Styles/typed-components";
import Helmet from "react-helmet";
import Wrapper from "../../Components/Wrapper";
import ProgressiveImage from "react-progressive-image";

const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
`;

const MiddleContainer = styled.div``;

const PortfolioMainContainer = styled.div`
  background-color: ${props => props.theme.bgColor};
  display: flex;
  height: 400px;
  border-bottom: 1px solid ${props => props.theme.borderColor};
`;

const ColorContainer = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 200px;
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

const SketchContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Img = styled.img<IProps>`
  width: 100%;
  filter: ${props => (props.loading ? "blur(6px)" : "")};
`;

const ScreenshotContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px;
`;

const Screenshot = styled.img<IProps>`
  width: 100%;
  max-width: 400px;
  filter: ${props => (props.loading ? "blur(6px)" : "")};
`;
const ColorText = styled.div<IProps>`
  position: absolute;
  text-align: center;
  font-weight: 400;
  color: ${props => (props.color === "#FFFFFF" ? "#F23657" : "#FFFFFF")};
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

interface IProps {
  loading?: boolean;
  color?: string;
}

const KawaiTodoColors = ["#F23657", "#FFFFFF"];

const KawaiTodoApp: React.FunctionComponent<any> = () => (
  <Container>
    <Helmet>
      <title>Kawai Todo-app | Plusbeauxjours</title>
    </Helmet>
    <Wrapper>
      <MiddleContainer>
        <PortfolioMainContainer />
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
        <SketchContainer>
          <ProgressiveImage
            src={"https://imgur.com/8ZE2kiH.jpg"}
            placeholder={"https://imgur.com/AWMJDgz.jpg"}
          >
            {(src, loading) => (
              <ImageContainer>
                <Img
                  style={{ maxWidth: "200px", marginRight: "30px" }}
                  loading={loading}
                  src={src}
                />
              </ImageContainer>
            )}
          </ProgressiveImage>
          <ProgressiveImage
            src={"https://imgur.com/yErTt0I.jpg"}
            placeholder={"https://imgur.com/KsThdJ5.jpg"}
          >
            {(src, loading) => (
              <ImageContainer>
                <Img
                  style={{ maxWidth: "400px" }}
                  loading={loading}
                  src={src}
                />
              </ImageContainer>
            )}
          </ProgressiveImage>
        </SketchContainer>
        <TextBox>
          <Text>
            ABOUT BACKEND
            <br /> Since beginning my journey as a freelance designer nearly 8
            years ago, I've done remote work for agencies, consulted for
            startups, and collaborated with talented people to create digital
            products for both business and consumer use. I'm quietly confident,
            naturally curious, and perpetually working on improving my chops one
            design problem at a time.
          </Text>
        </TextBox>
        <ColorContainer>
          {KawaiTodoColors.map((color, index) => (
            <ColorBox color={color} key={index}>
              <ColorText color={color}>
                {color === "#FFFFFF" ? "#F23657" : "#FFFFFF"}
              </ColorText>
            </ColorBox>
          ))}
        </ColorContainer>
        <ScreenshotContainer>
          <ProgressiveImage
            src={"https://imgur.com/Blzz3uR.jpg"}
            placeholder={"https://imgur.com/rwkmgCR.jpg"}
          >
            {(src, loading) => (
              <ImageContainer>
                <Screenshot loading={loading} src={src} />
              </ImageContainer>
            )}
          </ProgressiveImage>
          <ProgressiveImage
            src={"https://imgur.com/Blzz3uR.jpg"}
            placeholder={"https://imgur.com/rwkmgCR.jpg"}
          >
            {(src, loading) => (
              <ImageContainer>
                <Screenshot loading={loading} src={src} />
              </ImageContainer>
            )}
          </ProgressiveImage>
          <ProgressiveImage
            src={"https://imgur.com/QD1XQPy.jpg"}
            placeholder={"https://imgur.com/iFkI2wR.jpg"}
          >
            {(src, loading) => (
              <ImageContainer>
                <Screenshot loading={loading} src={src} />
              </ImageContainer>
            )}
          </ProgressiveImage>
          <ProgressiveImage
            src={"https://imgur.com/scPZA9d.jpg"}
            placeholder={"https://imgur.com/TRheCeq.jpg"}
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
            LONG TERM GAINS
            <br /> Since beginning my journey as a freelance designer nearly 8
            years ago, I've done remote work for agencies, consulted for
            startups, and collaborated with talented people to create digital
            products for both business and consumer use. I'm quietly confident,
            naturally curious, and perpetually working on improving my chops one
            design problem at a time.
          </Text>
        </TextBox>
      </MiddleContainer>
    </Wrapper>
  </Container>
);

export default KawaiTodoApp;
