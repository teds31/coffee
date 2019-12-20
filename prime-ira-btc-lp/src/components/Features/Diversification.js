import React from "react"
import DiversificationImg from "./DiversificationImg"

export default function Diversification() {
  return (
    <div
      className="row justify-content-center align-items-center my-5"
      id="diversification"
    >
      <div className="col-lg-5 mobile-padding">
        <DiversificationImg />
      </div>
      <div className="col-lg-4 mobile-padding">
        <h3>Diversification</h3>
        <p>
          Crowdfunding platforms have given investors access to many different
          asset types. The ability to invest in these alternative asset types
          such as real estate, consumer and corporate debt, limited
          partnerships, limited liability companies, private stock, convertible
          notes, promissory via crowdfunding, gives investors a level of
          protection against assets directly correlated to the stock market
          alone.
        </p>
      </div>
    </div>
  )
}
