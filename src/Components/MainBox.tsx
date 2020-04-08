import React from "react";
import styled from "../Styles/typed-components";
import ProgressiveImage from "react-progressive-image";
import Wrapper from "./Wrapper";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  margin-bottom: 3px;
`;

const Bold = styled.div`
  font-size: 40px;
  font-weight: 600;
  line-height: 40px;
  margin-bottom: 30px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  text-align: center;
  padding-top: 50px;
`;

const Text = styled.p`
  line-height: 30px;
`;

const Screenshot = styled.img<IProps>`
  width: 100%;
  max-width: 900px;
  filter: ${(props) => (props.loading ? "blur(6px)" : "")};
`;

interface IProps {
  loading?: boolean;
}

const MainBox: React.FunctionComponent<any> = () => (
  <Container>
    <Wrapper>
      <TextBox>
        <Bold>
          Front-end Developer & Back-end Developer,
          <br />
          Architecture Designer
        </Bold>
        <Text>I design and build a building before.</Text>
        <Text>
          And now I design and build an application, and I love what I do.
        </Text>
      </TextBox>
      <TextBox>
        <ProgressiveImage
          src={require("../Images/Etc/MainImage.jpg")}
          placeholder={require("../Images/Etc/MainImage_tiny.jpg")}
        >
          {(src, loading) => <Screenshot loading={loading} src={src} />}
        </ProgressiveImage>
      </TextBox>
    </Wrapper>
  </Container>
);

export default MainBox;
