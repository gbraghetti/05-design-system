import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from '@gustavobraghetti-ignite-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const { styled, css, globalCss, keyframes, theme, createTheme, config } =
  createStitches({
    themeMap: {
      ...defaultThemeMap,
      height: 'space',
      width: 'space',
    },
    theme: {
      colors,
      fontSizes,
      fontWeights,
      fonts,
      lineHeights,
      radii,
      space,
    },
  })
