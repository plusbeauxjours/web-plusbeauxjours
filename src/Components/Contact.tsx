import React, { useState } from "react";
import styled from "../Styles/typed-components";
import Wrapper from "./Wrapper";

const Container = styled.div`
  width: 1200px;
  height: 500px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Field = styled.div`
  margin-bottom: 30px;
`;
const Input = styled.input`
  background-color: ${props => props.theme.modalOverlayColor};
  position: relative;
  border: 1px solid ${props => props.theme.thumbShadowColor};
  border-radius: 10px;
  height: 50px;
  width: 390px;
  z-index: 5;
  font-size: 20px;
  font-weight: lighter;
  padding-left: 20px;
  &:focus {
    outline-style: none;
  }
`;

const InputWrapper = styled.div<IProps>`
  position: relative;
  background-color: transparent;
  &:after {
    position: absolute;
    transition: transform 0.15s linear, font-size 0.25s linear;
    top: 50%;
    z-index: 100;
    letter-spacing: 1px;
    font-weight: normal;
    left: 20px;
    color: ${props => props.theme.thumbShadowColor};
    font-size: ${({ focused }) => (focused ? "11px" : "18px")};
    transform: ${({ focused }) =>
      focused ? "translateY(-40px) translateX(-20px);" : "translateY(-40%);"};
  }
`;

const InputRow = styled.div`
  width: 80%;
  max-width: 800px;
  display: flex;
  justify-content: space-between;
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
  width: 800px;
  font-size: 20px;
  border-radius: 10px;
  line-height: 1;
  height: 300px;
  padding: 20px;
  font-size: 20px;
  font-weight: lighter;
  background: ${props => props.theme.modalOverlayColor};
  border: 1px solid ${props => props.theme.thumbShadowColor};
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
  return (
    <Container>
      <Wrapper>
        <Form action="" method="post">
          <InputRow>
            <Field>
              <NameInputWrapper focused={name || nameFocused ? true : false}>
                <Input
                  onFocus={() => setNameFocused(true)}
                  onBlur={() => setNameFocused(false)}
                  onChange={event => setName(event.target.value)}
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
                  onChange={event => setEmail(event.target.value)}
                  type="text"
                  value={email}
                  autoComplete={"off"}
                />
              </EmailInputWrapper>
            </Field>
          </InputRow>
          <InputRow>
            <Field>
              <TextInputWrapper focused={text || textFocused ? true : false}>
                <Textarea
                  name={"text"}
                  value={text}
                  required
                  onFocus={() => setTextFocused(true)}
                  onBlur={() => setTextFocused(false)}
                  onChange={event => setText(event.target.value)}
                  autoComplete={"off"}
                />
              </TextInputWrapper>
            </Field>
          </InputRow>
          <Btn>Submit</Btn>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Contact;
