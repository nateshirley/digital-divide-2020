import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"
import StAnnes from "typography-theme-st-annes"

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  }
}

StAnnes.overrideThemeStyles = () => ({
  a: { color: "navy" },
})

delete Wordpress2016.googleFonts

const typography = new Typography(StAnnes)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
