import React from "react"
import CostImg from "./CostsImg"

export default function Costs() {
  return (
    <div
      className="row justify-content-center align-items-center my-5"
      id="costs"
    >
      <div className="col-lg-4">
        <h3 className="text-azure-blue">Lower Costs</h3>
        <p>
          Prior to regulated crowdfunding, investors looking to invest in
          private deals had only three options: find the investment on their
          own, join a group that will source deals for them, or invest through a
          professional venture firm. Each of these options however can be
          costly. Regulated crowdfunding has allowed the process to become more
          efficient and accessible to the masses, thus lowering the costs all
          around.
        </p>
      </div>
      <div className="col-lg-5">
        <CostImg />
      </div>
    </div>
  )
}
