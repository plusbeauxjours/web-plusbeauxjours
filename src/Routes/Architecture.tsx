import React, { useState } from "react";
import styled from "../Styles/typed-components";
import Helmet from "react-helmet";
import Wrapper from "../Components/Wrapper";
import ProgressiveImage from "react-progressive-image";
import { keyframes } from "styled-components";

const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
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
  width: 1200px;
  filter: ${props => (props.loading ? "blur(6px)" : "")};
`;

const ArchitectureImages = [
  {
    main: "https://imgur.com/ErfydkQ.jpg",
    thumbnail: "https://imgur.com/47JrV0I.jpg"
  },
  {
    main: "https://imgur.com/ahccgMu.jpg",
    thumbnail: "https://imgur.com/XAkvb6T.jpg"
  },
  {
    main: "https://imgur.com/pIUMHxa.jpg",
    thumbnail: "https://imgur.com/e2aHNcm.jpg"
  },
  {
    main: "https://imgur.com/EFdeODg.jpg",
    thumbnail: "https://imgur.com/kBzmS0C.jpg"
  },
  {
    main: "https://imgur.com/PbhTGb7.jpg",
    thumbnail: "https://imgur.com/Dxc4Suh.jpg"
  },
  {
    main: "https://imgur.com/WFgjCYC.jpg",
    thumbnail: "https://imgur.com/TzF4MpN.jpg"
  },
  {
    main: "https://imgur.com/ZXiVZc3.jpg",
    thumbnail: "https://imgur.com/F3Gzi16.jpg"
  },
  {
    main: "https://imgur.com/rIzAgv7.jpg",
    thumbnail: "https://imgur.com/fIhlzma.jpg"
  }
];

interface IProps {
  loading: any;
}

const Architecture: React.FunctionComponent<any> = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [key, setKey] = useState<number>(0);
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
              onClick={() => {
                setModalOpen(true);
                setKey(index);
              }}
            >
              <ProgressiveImage
                delay={3000}
                key={index}
                src={ArchitectureImages.main}
                placeholder={ArchitectureImages.thumbnail}
              >
                {(src, loading) => (
                  <Img
                    loading={loading}
                    style={{ width: "1200px" }}
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
