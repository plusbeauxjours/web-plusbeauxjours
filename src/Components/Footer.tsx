import React, { useState } from "react";
import styled from "../Styles/typed-components";
import Wrapper from "./Wrapper";
import Contact from "./Contact";
import { keyframes } from "styled-components";
import { ContactMailIcon } from "../Icons";

const Container = styled.div`
  background-color: ${(props) => props.theme.blueColor};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${(props) => props.theme.whiteColor};
  text-align: center;
`;
const Bold = styled.div`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 30px;
  text-align: center;
  padding: 0 10px;
  line-height: 40px;
`;

const SText = styled.div`
  font-weight: 200;
  font-size: 14px;
  color: ${(props) => props.theme.whiteColor};
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 200px;
  svg {
    fill: #fff;
  }
`;

const ContactContainer = styled.div`
  background-color: ${(props) => props.theme.darkBlueColor};
  width: 90%;
  max-width: 800px;
  border-radius: 20px;
  height: 200px;
  bottom: 100px;
  position: relative;
  color: ${(props) => props.theme.whiteColor};
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Btn = styled.button`
  width: 300px;
  height: 45px;
  margin-top: 20px;
  background-color: ${(props) => props.theme.blueColor};
  color: ${(props) => props.theme.whiteColor};
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
  background-color: ${(props) => props.theme.modalOverlayColor};
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
    fill: ${(props) => props.theme.whiteColor};
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

          <FooterText>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={"https://www.linkedin.com/in/minjae-lee-08391a101/"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={"https://www.github.com/plusbeauxjours/"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
              </svg>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={"https://instagram.com/plusbeauxjours/"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
              >
                <path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z" />
              </svg>
            </a>
            {/* <FooterText>"Make hard, Learn hard, Live hard"</FooterText> */}
          </FooterText>
          <Box>
            <SText>Handcrafted by plusbeauxjours © twentytwenty</SText>
          </Box>
        </ColumnContainer>
      </Wrapper>
    </Container>
  );
};

export default Footer;
