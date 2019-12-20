import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HeaderImage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "prime-trust-prime-ira-graphics.png" }) {
        childImageSharp {
          fluid(pngQuality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img fluid={data.file.childImageSharp.fluid} className="header-image" />
  )
}

export default HeaderImage
