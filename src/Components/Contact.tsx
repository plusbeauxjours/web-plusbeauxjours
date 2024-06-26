import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import styled from "../Styles/typed-components";

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 500px;
  padding: 0 10px;
`;

const Form = styled.form``;

const Field = styled.div`
  margin-bottom: 30px;
`;

const Input = styled.input`
  background-color: ${(props) => props.theme.modalBgColor};
  border: 1px solid ${(props) => props.theme.blackColor};
  position: relative;
  border-radius: 10px;
  height: 50px;
  min-width: 380px;
  max-width: 100%;
  z-index: 5;
  font-size: 20px;
  font-weight: lighter;
  padding-left: 20px;
  &:focus {
    outline-style: none;
  }
  @media screen and (max-width: 820px) {
    width: 820px;
  }
`;

const InputWrapper = styled.div<IProps>`
  position: relative;
  background-color: transparent;
  &:after {
    font-weight: lighter;
    position: absolute;
    transition: transform 0.15s linear, font-size 0.25s linear;
    top: 50%;
    z-index: 100;
    letter-spacing: 1px;
    left: 20px;
    font-size: ${({ focused }) => (focused ? "11px" : "20px")};
    transform: ${({ focused }) =>
      focused ? "translateY(-45px) translateX(-20px);" : "translateY(-60%);"};
  }
`;

const InputRow = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const NameInputWrapper = styled(InputWrapper)`
  &:after {
    content: "Name";
  }
`;

const EmailInputWrapper = styled(InputWrapper)`
  &:after {
    content: "Email";
  }
`;

const TextInputWrapper = styled(InputWrapper)`
  &:after {
    content: "Message";
    top: 22px;
  }
`;

const Textarea = styled.textarea`
  font-size: 20px;
  border-radius: 10px;
  line-height: 1;
  height: 300px;
  padding: 20px;
  font-size: 20px;
  width: 100%;
  resize: none;
  overflow-y: hidden;
  font-weight: lighter;
  background: ${(props) => props.theme.modalBgColor};
  border: 1px solid ${(props) => props.theme.blackColor};
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Btn = styled.button`
  width: 300px;
  height: 45px;
  margin-top: 30px;
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

interface IProps {
  focused: boolean;
}

const Contact: React.FunctionComponent<any> = () => {
  const [nameFocused, setNameFocused] = useState<boolean>(false);
  const [emailFocused, setEmailFocused] = useState<boolean>(false);
  const [textFocused, setTextFocused] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [text, setText] = useState<string>("");

  const templatedsParams = {
    from_name: name,
    to_name: "plusbeauxjours@gmail.com",
    subject: `${name} from WWW.PLUSBEAUXJOURS.COM`,
    message_html: text,
  };

  const sendEmail = () => {
    emailjs
      .send(
        "gmail",
        "template_5qToBuwo",
        templatedsParams,
        "user_8ytKsFL160TILx8KsgU0x"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email sent!!");
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
    setName("");
    setEmail("");
    setText("");
  };

  return (
    <Container>
      <Form action="" method="post">
        <InputRow>
          <Field>
            <NameInputWrapper focused={name || nameFocused ? true : false}>
              <Input
                onFocus={() => setNameFocused(true)}
                onBlur={() => setNameFocused(false)}
                onChange={(event) => setName(event.target.value)}
                type="text"
                value={name}
                autoComplete={"off"}
              />
            </NameInputWrapper>
          </Field>
          <Field>
            <EmailInputWrapper focused={email || emailFocused ? true : false}>
              <Input
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
                onChange={(event) => setEmail(event.target.value)}
                type="text"
                value={email}
                autoComplete={"off"}
              />
            </EmailInputWrapper>
          </Field>
        </InputRow>
        <TextInputWrapper focused={text || textFocused ? true : false}>
          <Textarea
            name={"text"}
            value={text}
            required
            onFocus={() => setTextFocused(true)}
            onBlur={() => setTextFocused(false)}
            onChange={(event) => setText(event.target.value)}
            autoComplete={"off"}
          />
        </TextInputWrapper>
        <BtnContainer onClick={() => sendEmail()}>
          <Btn>SUBMIT</Btn>
        </BtnContainer>
      </Form>
    </Container>
  );
};

export default Contact;
