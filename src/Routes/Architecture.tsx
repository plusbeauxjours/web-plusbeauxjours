import React, { useState, useEffect } from "react";
import styled from "../Styles/typed-components";
import Helmet from "react-helmet";
import Wrapper from "../Components/Wrapper";
import ProgressiveImage from "react-progressive-image";
import { keyframes } from "styled-components";

const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
  margin-bottom: 300px;
  height: 800px;
  width: 100%;
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
  overflow: hidden;
  background-color: ${props => props.theme.modalOverlayColor};
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

const Modal = styled.div`
  width: 2000px;
  @media screen and (max-width: 2000px) {
    width: 90%;
  }
  z-index: 10;
  position: absolute;
  animation: ${ModalAnimation} 0.1s linear;
`;

const ModalImage = styled.img`
  width: 100%;
  height: 100%;
`;

const ImageContainer = styled.div`
  margin-top: 50px;
  &:first-child {
    margin-top: 100px;
  }
  &:last-child {
    margin-bottom: 100px;
  }
  &:nth-child(4) {
    margin-bottom: 400px;
  }
`;

const Img = styled.img<IProps>`
  width: 100%;
  max-width: 1200px;
  filter: ${props => (props.loading ? "blur(6px)" : "")};
`;

const ArchitectureImages = [
  {
    main: require("../Images/ArchitecturalWorks/ArchitecturalWorks_01.png"),
    thumbnail: require("../Images/ArchitecturalWorks/ArchitecturalWorks_01_tiny.png")
  },
  {
    main: require("../Images/ArchitecturalWorks/ArchitecturalWorks_02.png"),
    thumbnail: require("../Images/ArchitecturalWorks/ArchitecturalWorks_02_tiny.png")
  },
  {
    main: require("../Images/ArchitecturalWorks/ArchitecturalWorks_03.png"),
    thumbnail: require("../Images/ArchitecturalWorks/ArchitecturalWorks_03_tiny.png")
  },
  {
    main: require("../Images/ArchitecturalWorks/ArchitecturalWorks_04.png"),
    thumbnail: require("../Images/ArchitecturalWorks/ArchitecturalWorks_04_tiny.png")
  },
  {
    main: require("../Images/ArchitecturalWorks/ArchitecturalWorks_11.png"),
    thumbnail: require("../Images/ArchitecturalWorks/ArchitecturalWorks_11_tiny.png")
  },
  {
    main: require("../Images/ArchitecturalWorks/ArchitecturalWorks_12.png"),
    thumbnail: require("../Images/ArchitecturalWorks/ArchitecturalWorks_12_tiny.png")
  },
  {
    main: require("../Images/ArchitecturalWorks/ArchitecturalWorks_13.png"),
    thumbnail: require("../Images/ArchitecturalWorks/ArchitecturalWorks_13_tiny.png")
  },
  {
    main: require("../Images/ArchitecturalWorks/ArchitecturalWorks_14.png"),
    thumbnail: require("../Images/ArchitecturalWorks/ArchitecturalWorks_14_tiny.png")
  },
  {
    main: require("../Images/ArchitecturalWorks/ArchitecturalWorks_15.png"),
    thumbnail: require("../Images/ArchitecturalWorks/ArchitecturalWorks_15_tiny.png")
  }
];

interface IProps {
  loading: any;
}

const Architecture: React.FunctionComponent<any> = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [key, setKey] = useState<number>(0);
  useEffect(() => window.scrollTo(0, 0));
  return (
    <>
      {modalOpen && (
        <ModalContainer>
          <ModalOverlay onClick={() => setModalOpen(false)} />
          <Modal>
            <ModalImage src={ArchitectureImages[key].main}></ModalImage>
          </Modal>
        </ModalContainer>
      )}
      <Container>
        <Helmet>
          <title>Architecture | Plusbeauxjours</title>
        </Helmet>
        <Wrapper>
          {ArchitectureImages.map((ArchitectureImages, index) => (
            <ImageContainer
              key={index}
              onClick={() => {
                setModalOpen(true);
                setKey(index);
              }}
            >
              <ProgressiveImage
                src={ArchitectureImages.main}
                placeholder={ArchitectureImages.thumbnail}
              >
                {(src, loading) => (
                  <Img
                    loading={loading}
                    style={{
                      maxWidth: "1200px",
                      width: "100%",
                      opacity: loading ? 0.5 : 1
                    }}
                    src={src}
                    alt="an image"
                  />
                )}
              </ProgressiveImage>
            </ImageContainer>
          ))}
        </Wrapper>
      </Container>
    </>
  );
};

export default Architecture;
