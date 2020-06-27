import React, { useState } from "react";
import { Link } from "react-router-dom";

import styled from "../Styles/typed-components";

import { RouteComponentProps, withRouter } from "react-router";
import { keyframes } from "styled-components";
import Contact from "./Contact";

const Container = styled.header`
  background-color: ${(props) => props.theme.bgColor};
  height: 45px;
  width: 100%;
  border-top: none;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid ${(props) => props.theme.greyColor};
`;

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  align-items: baseline;
  padding: 8px;
  height: 100%;
  justify-content: space-between;
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
  animation: ${ModalAnimation} 0.1s linear;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SText = styled.div`
  margin-bottom: 50px;
  text-align: center;
  font-weight: lighter;
  font-size: 20px;
  padding: 0 10px;
`;

const Text = styled.div`
  cursor: pointer;
  font-size: 15px;
`;

const CText = styled.div`
  font-size: 30px;
`;

const Bold = styled.div`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 30px;
  text-align: center;
  padding: 0 10px;
  line-height: 40px;
`;

const TextContainer = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
interface IProps extends RouteComponentProps<any> {}

const Header: React.FunctionComponent<IProps> = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  return (
    <Container>
      {modalOpen && (
        <ModalContainer>
          <ModalOverlay onClick={() => setModalOpen(false)} />
          <Modal>
            <Bold>
              Thanks for taking the time to reach out. How can I help you today?
            </Bold>
            <SText>
              Interested in working together? We should queue up a chat. I’ll
              buy the coffee. I’m always open to discussing project or
              partnership opportunities.
            </SText>
            <Contact />
          </Modal>
        </ModalContainer>
      )}
      <Wrapper>
        <Link to={"/"}>
          <CText>PLUSBEAUXJOURS</CText>
        </Link>
        <TextContainer>
          <Link to={"/projects"}>
            <Text>Portfolio</Text>
          </Link>
          <Link to={"/architecture"}>
            <Text>Architectural Works</Text>
          </Link>
          <Text onClick={() => setModalOpen(true)}>Contact</Text>
        </TextContainer>
      </Wrapper>
    </Container>
  );
};

export default withRouter(Header);
