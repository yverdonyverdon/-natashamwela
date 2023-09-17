import { css } from "styled-components";

export const breakpoint = {
  base: (base, ...interpolations) => css`
    ${css(base, ...interpolations)}
  `,
  sm: (sm, ...interpolations) => css`
    @media (min-width: 640px) {
      ${css(sm, ...interpolations)}
    }
  `,
  md: (md, ...interpolations) => css`
    @media (min-width: 768px) {
      ${css(md, ...interpolations)}
    }
  `,
  lg: (lg, ...interpolations) => css`
    @media (min-width: 1024px) {
      ${css(lg, ...interpolations)}
    }
  `,
  xl: (xl, ...interpolations) => css`
    @media (min-width: 1280px) {
      ${css(xl, ...interpolations)}
    }
  `,
};
