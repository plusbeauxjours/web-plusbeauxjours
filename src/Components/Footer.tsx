import React, { useState } from "react";
import styled from "../Styles/typed-components";
import Wrapper from "./Wrapper";
import Contact from "./Contact";
import { keyframes } from "styled-components";
import { ContactMailIcon } from "../Icons";

const Container = styled.div`
  background-color: ${props => props.theme.blueColor};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${props => props.theme.whiteColor};
  text-align: center;
`;
const Bold = styled.div`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 30px;
  text-align: center;
  padding: 0 10px;
`;

const SText = styled.div`
  font-weight: 200;
  font-size: 14px;
  color: ${props => props.theme.whiteColor};
  margin-bottom: 50px;
  margin-top: 100px;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactBold = styled.div`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const ContactBoldTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px;
`;

const Text = styled.div``;

const FooterText = styled.div`
  font-weight: 200;
`;

const ContactContainer = styled.div`
  background-color: ${props => props.theme.darkBlueColor};
  width: 90%;
  max-width: 800px;
  border-radius: 20px;
  height: 200px;
  bottom: 100px;
  position: relative;
  color: ${props => props.theme.whiteColor};
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Btn = styled.button`
  width: 300px;
  height: 45px;
  margin-top: 20px;
  background-color: ${props => props.theme.blueColor};
  color: ${props => props.theme.whiteColor};
  border-radius: 15px;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
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

const ModalText = styled.div`
  margin-bottom: 50px;
  text-align: center;
  font-weight: lighter;
  font-size: 20px;
  padding: 0 10px;
`;

const Icon = styled.div`
  margin-top: 5px;
  margin-right: 5px;
  svg {
    fill: ${props => props.theme.whiteColor};
  }
`;

const Footer: React.FunctionComponent<any> = () => {
  const [modelOpen, setModalOpen] = useState<boolean>(false);
  return (
    <Container>
      {modelOpen && (
        <ModalContainer>
          <ModalOverlay onClick={() => setModalOpen(false)} />
          <Modal>
            <Bold>
              Thanks for taking the time to reach out. How can I help you today?
            </Bold>
            <ModalText>
              Interested in working together? We should queue up a chat. I’ll
              buy the coffee. I’m always open to discussing project or
              partnership opportunities.
            </ModalText>
            <Contact />
          </Modal>
        </ModalContainer>
      )}
      <Wrapper>
        <ColumnContainer>
          <ContactContainer>
            <ContactBoldTextBox>
              <ContactBold>THANKS!</ContactBold>
              <Text>Want to chat about something?</Text>
              <BtnContainer onClick={() => setModalOpen(true)}>
                <Btn>
                  <Icon>
                    <ContactMailIcon />
                  </Icon>
                  CONTACT ME
                </Btn>
              </BtnContainer>
            </ContactBoldTextBox>
          </ContactContainer>
          <Box>
            <FooterText>"Make hard, Learn hard, Live hard"</FooterText>
            <SText>Handcrafted by plusbeauxjours © twentytwenty</SText>
          </Box>
        </ColumnContainer>
      </Wrapper>
    </Container>
  );
};

export default Footer;
