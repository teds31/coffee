import React from "react"
import Opportunities from "./Features/Opportunities"
import Diversification from "./Features/Diversification"
import Costs from "./Features/Costs"
import Convenience from "./Features/Convenience"
import OpportunitiesMobile from "./Features/OpportunitiesMobile"
import CostsMobile from "./Features/CostsMobile"

export default function FeaturesSection() {
  return (
    <section className="py-5" id="features-section">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <h2 className="text-main-blue my-5">
              What Your Investments May Be Missing Out On
            </h2>
          </div>
        </div>
        <Opportunities />
        <OpportunitiesMobile />
        <Diversification />
        <Costs />
        <CostsMobile />
        <Convenience />
      </div>
    </section>
  )
}
