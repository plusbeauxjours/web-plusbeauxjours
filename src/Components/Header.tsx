import React, { useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import { RouteComponentProps, withRouter } from "react-router";
import { keyframes } from "styled-components";

const Container = styled.header`
  background-color: ${props => props.theme.bgColor};
  height: 45px;
  width: 100%;
  border-top: none;
  position: fixed;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid ${props => props.theme.greyColor};
`;

const SWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 935px;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
`;

const Icon = styled.span`
  svg {
    fill: ${props => props.theme.color};
  }
  &:not(:first-child) {
    margin-left: 10px;
  }
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
  background-color: rgba(230, 230, 230, 0.95);
`;

const Modal = styled.div`
  top: 30%;
  width: 400px;
  @media screen and (max-width: 965px) {
    width: 90%;
  }
  z-index: 10;
  position: absolute;
  margin-top: 80px;
  animation: ${ModalAnimation} 0.1s linear;
`;

const Text = styled.div`
  font-size: 15px;
`;

const CText = styled.div`
  font-size: 30px;
`;

const TextContainer = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
`;
interface IProps extends RouteComponentProps<any> {}

const Header: React.FunctionComponent<IProps> = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  return (
    <Container>
      {modalOpen && (
        <ModalContainer>
          <ModalOverlay onClick={() => setModalOpen(false)} />
          <Modal>Contact Mail</Modal>
        </ModalContainer>
      )}
      <SWrapper>
        <CText onClick={() => setModalOpen(true)}>PLUSBEAUXJOURS</CText>
        <TextContainer>
          <Link to={"/portfolio"}>
            <Text>Portfolio</Text>
          </Link>
          <Link to={"/architecture"}>
            <Text>Architectural Works</Text>
          </Link>
          <Text onClick={() => setModalOpen(true)}>Contact</Text>
        </TextContainer>
      </SWrapper>
    </Container>
  );
};

export default withRouter(Header);
