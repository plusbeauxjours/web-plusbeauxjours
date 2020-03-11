import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";

interface IThemeInterface {
  bgColor: string;
  darkBlueColor: string;
  color: string;
  greyColor: string;
  blueColor: string;
  whiteColor: string;
  modalOverlayColor: string;
  modalBgColor: string;
  borderColor: string;
  blackColor: string;
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
