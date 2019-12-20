import React from "react"
import ConvenienceImg from "./ConvenienceImg"

export default function Convenience() {
  return (
    <div className="row justify-content-center align-items-center my-5">
      <div className="col-lg-5 mobile-padding">
        <ConvenienceImg />
      </div>
      <div className="col-lg-4 mobile-padding">
        <h3 className="text-tang">Convenience</h3>
        <p>
          Self-directed IRAs allow investors to invest in equity crowdfunding
          and marketplace lending opportunities on a tax-advantaged basis. Prime
          Trust will act as the custodian on your behalf, making it easy to not
          only set up accounts, but also direct your investments into a
          crowdfunding opportunity that you believe in.
        </p>
      </div>
    </div>
  )
}
