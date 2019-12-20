import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HeaderBannerImg = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "pt-se-graphic.png" }) {
        childImageSharp {
          fluid(pngQuality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      fluid={data.file.childImageSharp.fluid}
      className="mb-5"
      alt="Prime Trust & StartEngine Logos"
    />
  )
}

export default HeaderBannerImg
