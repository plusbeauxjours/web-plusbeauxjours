import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";

interface IThemeInterface {
  headerColor: string;
  bgColor: string;
  color: string;
  greyColor: string;
  blackColor: string;
  blueColor: string;
  whiteColor: string;
  boxBorder: string;
  darkBlueColor: string;
  modalOverlayColor: string;
  modalBgColor: string;
  borderColor: string;
  thumbShadowColor: string;
  hoverColor: string;
  shadowColor: string;
}

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<IThemeInterface>;

export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;
