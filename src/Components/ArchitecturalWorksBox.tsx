import React from "react";
import styled from "../Styles/typed-components";
import ProgressiveImage from "react-progressive-image";
import Wrapper from "./Wrapper";
import { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
`;

const Bold = styled.div`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 30px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  margin-bottom: 150px;
`;

const Text = styled.p`
  width: 80%;
`;

const ImageAnimation = keyframes`
  from { transform:none;}
   50%   {  transform:scale(1.1); } 
   to     {transform:none; }
  `;

const Img = styled.img`
  &:hover {
    animation: ${ImageAnimation} 2s linear;
  }
  filter: ${props => (props.loading ? "blur(6px)" : "")};
  width: 100%;
  max-width: 800px;
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 250px;
  overflow: hidden;
  margin-top: 30px;
`;

const ArchitectureImages = [
  {
    main: "https://imgur.com/XVuDk5d.jpg",
    thumbnail: "https://imgur.com/QyvJLxQ.jpg"
  },
  {
    main: "https://imgur.com/DihdyYN.jpg",
    thumbnail: "https://imgur.com/x2ZRmeC.jpg"
  }
];

interface IProps {
  loading: any;
}

const ArchitecturalWorksBox: React.FunctionComponent<any> = () => (
  <Container>
    <Wrapper>
      <Box>
        <Bold>My Architectural Works</Bold>
        <Text>
          I'm a bit of a digital product junky. Over the years, I've used
          hundreds of web and mobile apps in different industries and verticals.
          Eventually, I decided that it would be a fun challenge to try
          designing and building my own.
        </Text>
        {ArchitectureImages.map((ArchitectureImages, index) => (
          <Link to={"/architecture"} key={index}>
            <ImgContainer>
              <ProgressiveImage
                key={index}
                src={ArchitectureImages.main}
                placeholder={ArchitectureImages.thumbnail}
              >
                {(src, loading) => (
                  <Img
                    loading={loading}
                    style={{ maxWidth: "800px", width: "100%" }}
                    src={src}
                    alt="an image"
                  />
                )}
              </ProgressiveImage>
            </ImgContainer>
          </Link>
        ))}
      </Box>
    </Wrapper>
  </Container>
);

export default ArchitecturalWorksBox;
