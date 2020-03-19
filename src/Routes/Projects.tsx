import React, { useEffect } from "react";
import styled from "../Styles/typed-components";
import Helmet from "react-helmet";
import Wrapper from "../Components/Wrapper";
import { Link } from "react-router-dom";
import ProgressiveImage from "react-progressive-image";
import { keyframes } from "styled-components";

const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
  height: 800px;
  margin-top: 50px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, minmax(100px, auto));
  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
  margin-bottom: 300px;
`;

const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
`;

const Square = styled.div`
  border-radius: 20px;
  border: 1px solid ${props => props.theme.borderColor};
  width: 100%;
  height: 0;
  padding-bottom: 100%;
`;
const ImageAnimation = keyframes`
  from { transform:none;}
   50%   {  transform:scale(1.1); } 
   to     {transform:none; }
  `;
const Img = styled.img`
  &:hover {
    animation: ${ImageAnimation} 2s linear;
  }
  filter: ${props =>
    props.loading ? "blur(6px) opacity(90%)" : "opacity(90%)"};
  width: 100%;
  max-width: 800px;
`;
const InnerBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;
  overflow: hidden;
`;

const Bold = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-top: 30px;
  margin-bottom: 10px;
`;
const Text = styled.div`
  line-height: 22px;
`;
const TextBox = styled.div`
  position: absolute;
`;

const Projects: React.FunctionComponent<any> = () => {
  useEffect(() => window.scrollTo(0, 0));
  return (
    <Container>
      <Helmet>
        <title>Project | Plusbeauxjours</title>
      </Helmet>
      <Wrapper>
        <MiddleContainer>
          <GridContainer>
            <Link to={"/projects/web/pinner-web"}>
              <Square>
                <InnerBox>
                  <ProgressiveImage
                    src={"https://imgur.com/8wafbNQ.jpg"}
                    placeholder={"https://imgur.com/hShIsmd.jpg"}
                  >
                    {(src, loading) => (
                      <Img
                        loading={loading}
                        style={{ maxWidth: "800px", width: "100%" }}
                        src={src}
                        alt="an image"
                      />
                    )}
                  </ProgressiveImage>
                  <TextBox>
                    <Bold>Pinner-Web</Bold>
                    <Text>
                      Meet-up app with Django, React, Graphene, Typescript
                    </Text>
                  </TextBox>
                </InnerBox>
              </Square>
            </Link>
            <Link to={"/projects/web/airbnp-web"}>
              <Square>
                <InnerBox>
                  <ProgressiveImage
                    src={"https://imgur.com/3WnX9SX.jpg"}
                    placeholder={"https://imgur.com/HDNvJwg.jpg"}
                  >
                    {(src, loading) => (
                      <Img
                        loading={loading}
                        style={{ maxWidth: "800px", width: "100%" }}
                        src={src}
                        alt="an image"
                      />
                    )}
                  </ProgressiveImage>
                  <TextBox>
                    <Bold>Airbnp-Web</Bold>
                    <Text>Air-bnb clone with Django, Tailwind</Text>
                  </TextBox>
                </InnerBox>
              </Square>
            </Link>
            <Link to={"/projects/web/puber-web"}>
              <Square>
                <InnerBox>
                  <ProgressiveImage
                    src={"https://imgur.com/ScrdaJd.jpg"}
                    placeholder={"https://imgur.com/V5lxAcw.jpg"}
                  >
                    {(src, loading) => (
                      <Img
                        loading={loading}
                        style={{ maxWidth: "800px", width: "100%" }}
                        src={src}
                        alt="an image"
                      />
                    )}
                  </ProgressiveImage>
                  <TextBox>
                    <Bold>Puber-Web</Bold>
                    <Text>
                      Uber clone with Node.js, React, Graphql, Typescript{" "}
                    </Text>
                  </TextBox>
                </InnerBox>
              </Square>
            </Link>
            <Link to={"/projects/web/note-web"}>
              <Square>
                <InnerBox>
                  <ProgressiveImage
                    src={"https://imgur.com/ScrdaJd.jpg"}
                    placeholder={"https://imgur.com/V5lxAcw.jpg"}
                  >
                    {(src, loading) => (
                      <Img
                        loading={loading}
                        style={{ maxWidth: "800px", width: "100%" }}
                        src={src}
                        alt="an image"
                      />
                    )}
                  </ProgressiveImage>
                  <TextBox>
                    <Bold>Note-Web</Bold>
                    <Text>
                      Note application with React, Graphql, Typescript
                    </Text>
                  </TextBox>
                </InnerBox>
              </Square>
            </Link>
            <Link to={"/projects/web/movie-web"}>
              <Square>
                <InnerBox>
                  <ProgressiveImage
                    src={"https://i.imgur.com/kI67Xtw.jpg"}
                    placeholder={"https://imgur.com/faN3wWl.jpg"}
                  >
                    {(src, loading) => (
                      <Img
                        loading={loading}
                        style={{ maxWidth: "800px", width: "100%" }}
                        src={src}
                        alt="an image"
                      />
                    )}
                  </ProgressiveImage>
                  <TextBox>
                    <Bold>Movie-Web</Bold>
                    <Text>
                      Movie application with React, Graphql, Typescript
                    </Text>
                  </TextBox>
                </InnerBox>
              </Square>
            </Link>
          </GridContainer>
          <GridContainer>
            <Link to={"/projects/app/pinner-app"}>
              <Square>
                <InnerBox>
                  <ProgressiveImage
                    src={"https://imgur.com/3IH6AoJ.jpg"}
                    placeholder={"https://imgur.com/6NqUvhu.jpg"}
                  >
                    {(src, loading) => (
                      <Img
                        loading={loading}
                        style={{ maxWidth: "800px", width: "100%" }}
                        src={src}
                        alt="an image"
                      />
                    )}
                  </ProgressiveImage>
                  <TextBox>
                    <Bold>Pinner-App</Bold>
                    <Text>
                      Meet-up app with Django, React-Native, Graphene,
                      Typescript
                    </Text>
                  </TextBox>
                </InnerBox>
              </Square>
            </Link>
            <Link to={"/projects/app/kawai-todo-app"}>
              <Square>
                <InnerBox>
                  <ProgressiveImage
                    src={"https://imgur.com/feJqEXf.jpg"}
                    placeholder={"https://imgur.com/ZPm0kbD.jpg"}
                  >
                    {(src, loading) => (
                      <Img
                        loading={loading}
                        style={{ maxWidth: "800px", width: "100%" }}
                        src={src}
                        alt="an image"
                      />
                    )}
                  </ProgressiveImage>
                  <TextBox>
                    <Bold>Kawai To Do-App</Bold>
                    <Text>To do app with React-Native</Text>
                  </TextBox>
                </InnerBox>
              </Square>
            </Link>
            <Link to={"/projects/app/fukin-weather-app"}>
              <Square>
                <InnerBox>
                  <ProgressiveImage
                    src={"https://imgur.com/6sPSn1q.jpg"}
                    placeholder={"https://imgur.com/Cup2zqI.jpg"}
                  >
                    {(src, loading) => (
                      <Img
                        loading={loading}
                        style={{ maxWidth: "800px", width: "100%" }}
                        src={src}
                        alt="an image"
                      />
                    )}
                  </ProgressiveImage>
                  <TextBox>
                    <Bold>Fukin Weather-App</Bold>
                    <Text>Weather app with React-Native</Text>
                  </TextBox>
                </InnerBox>
              </Square>
            </Link>
            <Link to={"/projects/app/movie-app"}>
              <Square>
                <InnerBox>
                  <ProgressiveImage
                    src={"https://i.imgur.com/cwOUEmC.jpg"}
                    placeholder={"https://imgur.com/Cup2zqI.jpg"}
                  >
                    {(src, loading) => (
                      <Img
                        loading={loading}
                        style={{ maxWidth: "800px", width: "100%" }}
                        src={src}
                        alt="an image"
                      />
                    )}
                  </ProgressiveImage>
                  <TextBox>
                    <Bold>Movie-App</Bold>
                    <Text>Movie app with React-Native</Text>
                  </TextBox>
                </InnerBox>
              </Square>
            </Link>
          </GridContainer>
        </MiddleContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
