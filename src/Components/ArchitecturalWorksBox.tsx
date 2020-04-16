import React from "react";
import styled from "../Styles/typed-components";
import ProgressiveImage from "react-progressive-image";
import Wrapper from "./Wrapper";
import { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  margin-bottom: 300px;
`;

const Bold = styled.div`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 30px;
  line-height: 40px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
`;

const Text = styled.p`
  width: 80%;
  line-height: 30px;
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
  filter: ${(props) => (props.loading ? "blur(6px)" : "")};
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

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin-bottom: 30px;
`;

const ArchitectureImages = [
  {
    main: require("../Images/Thumbnails/Architectural_works_thumbnail_01.jpg"),
    thumbnail: require("../Images/Thumbnails/Architectural_works_thumbnail_01_tiny.jpg"),
  },
  {
    main: require("../Images/Thumbnails/Architectural_works_thumbnail_02.jpg"),
    thumbnail: require("../Images/Thumbnails/Architectural_works_thumbnail_02_tiny.jpg"),
  },
];

interface IProps {
  loading: any;
}

const ArchitecturalWorksBox: React.FunctionComponent<any> = () => (
  <Container>
    <Wrapper>
      <Box>
        <TextBox>
          <Bold>My Architectural Works</Bold>
          <Text>
            Architecture is simillar to programming. Observe and think about
            problems. Build a team, and tons of drawing, tons of meeting, tons
            of coffee were necessary to find a best way to solve it. They cannot
            work alone, construction team always ask drawings to design team who
            has tons of feedback from client. To have good communication and
            save a time, I learned design tools and how manage a construction
            team as a Full-stack Deeveloper.
          </Text>
        </TextBox>
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
