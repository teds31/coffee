import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ConvenienceImg = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "convenience.png" }) {
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

export default ConvenienceImg
