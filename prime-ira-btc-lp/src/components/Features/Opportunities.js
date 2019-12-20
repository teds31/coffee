import React from "react"
import OpportunitiesImg from "./OpportunitiesImg"

export default function Opportunities() {
  return (
    <>
      <div
        className="row justify-content-center align-items-center mb-5"
        id="opportunities"
      >
        <div className="col-lg-4">
          <h3 className="text-green">New Opportunities</h3>
          <p>
            Prior to regulated crowdfunding, finding investment opportunities in
            privately held ventures use to require having a vast network of
            business contacts. But with the surge of new crowdfunding investment
            platforms, regular investors now have direct access to these types
            of investments.
          </p>
        </div>
        <div className="col-lg-5">
          <OpportunitiesImg />
        </div>
      </div>
    </>
  )
}
