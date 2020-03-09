import React from "react";
import styled from "../Styles/typed-components";
import Wrapper from "./Wrapper";

const Container = styled.div`
  background-color: ${props => props.theme.blueColor};
  height: 800px;
  width: 100%;
`;

const Bold = styled.div`
  font-size: 20px;
  font-weight: 400;
`;

const Text = styled.text``;

const ProfileBox: React.FunctionComponent<any> = () => (
  <Container>
    <Wrapper>
      <Text>
        <Bold>Hi, I’m Minjae Lee. Nice to meet you.</Bold> Since beginning my
        journey as a freelance designer nearly 8 years ago, I've done remote
        work for agencies, consulted for startups, and collaborated with
        talented people to create digital products for both business and
        consumer use. I'm quietly confident, naturally curious, and perpetually
        working on improving my chops one design problem at a time.
      </Text>
    </Wrapper>
  </Container>
);

export default ProfileBox;
