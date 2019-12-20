import React from "react"
import Calculator from "./Calculator/Calculator"

export default function SavingsSection() {
  return (
    <section className="py-5" id="savings-section">
      <div className="container-xl">
        <div className="row justify-content-center text-center">
          <div className="col-lg-7">
            <h2 className="text-main-blue my-4">
              Visualize Your Potential Savings
            </h2>
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-lg-12 text-center">
            <Calculator />
          </div>
        </div>
      </div>
    </section>
  )
}
