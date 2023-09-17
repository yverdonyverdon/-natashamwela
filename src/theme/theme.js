import { breakpoint } from "./setting/breakpoints";
import { colors, darkThemeColors, lightThemeColors } from "./setting/colors";
import { fonts } from "./setting/fonts";
import { zindex } from "./setting/zindex";

export const theme = {
  breakpoint,
  colors,
  fonts,
  zindex,
};

export const lightTheme = {
  ...theme,
  colors: lightThemeColors,
};

export const darkTheme = {
  ...theme,
  colors: darkThemeColors,
};
