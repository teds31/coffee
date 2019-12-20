import React from "react"
import RocketIcon from "../images/rocket-icon.svg"
import NoFeeIcon from "../images/no-fee-icon.svg"
import DiversifyIcon from "../images/diversify-icon.svg"
import CapitalGainsIcon from "../images/capital-gains-icon.png"

export default function HeaderValueProp() {
  return (
    <>
      <h1 className="text-uppercase r">
        <span className="text-white">
          does your crowdfunding platform help you
          <br />
        </span>
        <span className="text-green">maximize your investment</span>
        <span className="text-white">?</span>
      </h1>

      <p className="lead mt-5">Opening an IRA from Prime Trust allows:</p>
      <ul className="list-unstyled text-white">
        <li className="my-4">
          {" "}
          <img
            src={RocketIcon}
            alt="Prime Trust Prime IRA Investing in Startups & Alternative Assets"
            className="mr-3"
          />
          Investing in Startups & Alternative Assets
        </li>
        <li className="my-4">
          {" "}
          <img
            src={NoFeeIcon}
            alt="Prime Trust Prime IRA Investing in Startups & Alternative Assets"
            className="mr-3"
          />
          No Account Opening Fee
        </li>
        <li className="my-4">
          <img
            src={DiversifyIcon}
            alt="Prime Trust Prime IRA Investing in Startups & Alternative Assets"
            className="mr-3"
          />
          Diversify Your Portfolio
        </li>
        <li className="my-4">
          <img
            src={CapitalGainsIcon}
            alt="Prime Trust Prime IRA Investing in Startups & Alternative Assets"
            className="mr-3"
          />
          Potential Capital Gains Savings of Up to 37%
        </li>
      </ul>
    </>
  )
}
