import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const OpportunitiesImg = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "megaphone.png" }) {
        childImageSharp {
          fluid(pngQuality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.file.childImageSharp.fluid} className="img-fluid" />
}

export default OpportunitiesImg
