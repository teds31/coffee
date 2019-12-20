import React from "react"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const HeaderBg = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "header-bg-layered.png" }) {
          childImageSharp {
            fluid(quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      const bgImage = data.file.childImageSharp.fluid
      return (
        <BackgroundImage className="header-bg" fluid={bgImage}>
          {children}
        </BackgroundImage>
      )
    }}
  />
)

export default HeaderBg
