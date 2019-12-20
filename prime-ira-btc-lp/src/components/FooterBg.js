import React from "react"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const FooterBg = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "footer-bg.png" }) {
          childImageSharp {
            fluid(quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      const footerImage = data.file.childImageSharp.fluid
      return (
        <BackgroundImage className="footer-bg" fluid={footerImage}>
          {children}
        </BackgroundImage>
      )
    }}
  />
)

export default FooterBg
