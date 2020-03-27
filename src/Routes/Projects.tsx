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
            <Link to={"/projects/app/pinner-app"}>
              <Square>
                <InnerBox>
                  <Img
                    src={require("../Images/Thumbnails/Pinner_app_thumbnail.jpg")}
                    style={{ maxWidth: "800px", width: "100%" }}
                    alt="an image"
                  />
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
            <Link to={"/projects/web/pinner-web"}>
              <Square>
                <InnerBox>
                  <Img
                    src={require("../Images/Thumbnails/Pinner_web_thumbnail.jpg")}
                    style={{ maxWidth: "800px", width: "100%" }}
                    alt="an image"
                  />
                  <TextBox>
                    <Bold>Pinner-Web</Bold>
                    <Text>
                      Meet-up app with Django, React, Graphene, Typescript
                    </Text>
                  </TextBox>
                </InnerBox>
              </Square>
            </Link>
            <Link to={"/projects/web/puber-web"}>
              <Square>
                <InnerBox>
                  <Img
                    src={require("../Images/Thumbnails/Puber_web_thumbnail.jpg")}
                    style={{ maxWidth: "800px", width: "100%" }}
                    alt="an image"
                  />
                  <TextBox>
                    <Bold>Puber-Web</Bold>
                    <Text>
                      Uber clone with Node.js, React, Graphql, Typescript{" "}
                    </Text>
                  </TextBox>
                </InnerBox>
              </Square>
            </Link>
            <Link to={"/projects/web/airbnp-web"}>
              <Square>
                <InnerBox>
                  <Img
                    src={require("../Images/Thumbnails/Airbnp_web_thumbnail.jpg")}
                    style={{ maxWidth: "800px", width: "100%" }}
                    alt="an image"
                  />
                  <TextBox>
                    <Bold>Airbnp-Web</Bold>
                    <Text>Air-bnb clone with Django, Tailwind</Text>
                  </TextBox>
                </InnerBox>
              </Square>
            </Link>
            <Link to={"/projects/web/movie-web"}>
              <Square>
                <InnerBox>
                  <Img
                    src={require("../Images/Thumbnails/Movie_web_thumbnail.jpg")}
                    style={{ maxWidth: "800px", width: "100%" }}
                    alt="an image"
                  />
                  <TextBox>
                    <Bold>Movie-Web</Bold>
                    <Text>
                      Movie application with React, Graphql, Typescript
                    </Text>
                  </TextBox>
                </InnerBox>
              </Square>
            </Link>
            <Link to={"/projects/app/movie-app"}>
              <Square>
                <InnerBox>
                  <Img
                    src={require("../Images/Thumbnails/Movie_app_thumbnail.jpg")}
                    style={{ maxWidth: "800px", width: "100%" }}
                    alt="an image"
                  />
                  <TextBox>
                    <Bold>Movie-App</Bold>
                    <Text>Movie app with React-Native</Text>
                  </TextBox>
                </InnerBox>
              </Square>
            </Link>
            <Link to={"/projects/app/kitty-todo-app"}>
              <Square>
                <InnerBox>
                  <Img
                    src={require("../Images/Thumbnails/Kitty_app_thumbnail.jpg")}
                    style={{ maxWidth: "800px", width: "100%" }}
                    alt="an image"
                  />
                  <TextBox>
                    <Bold>Kitty To Do-App</Bold>
                    <Text>To do app with React-Native</Text>
                  </TextBox>
                </InnerBox>
              </Square>
            </Link>
            <Link to={"/projects/app/awesome-weather-app"}>
              <Square>
                <InnerBox>
                  <Img
                    src={require("../Images/Thumbnails/Awesome_app_thumbnail.jpg")}
                    style={{ maxWidth: "800px", width: "100%" }}
                    alt="an image"
                  />
                  <TextBox>
                    <Bold>Awesome Weather-App</Bold>
                    <Text>Weather app with React-Native</Text>
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
