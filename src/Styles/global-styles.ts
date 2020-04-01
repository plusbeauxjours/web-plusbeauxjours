import { createGlobalStyle } from "./typed-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
   * {
        box-sizing: border-box;
    }
    body{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, 'Qwigley';
        background-color: ${props => props.theme.bgColor};
        color: ${props => props.theme.color};
        font-size: 20px;
        font-weight: lighter;
        letter-spacing: 1px;
        line-height: 30px;
    }
    p{
        font-weight: lighter;
    }
    a{ 
        color:inherit;
        text-decoration:none;
    }
    input, textarea, button{
        background-color: ${props => props.theme.bgColor};
        &:active,
        &:focus{
            outline:none;
        }
    }
    svg{
        fill: ${props => props.theme.color};
    }
    h1,h2,h3,h4,h5,h6{
        font-family: 'Maven Pro', sans-serif;
    }
    li{
        font-size: 14px;
    }
`;

export default GlobalStyle;
