import React from "react"
import ComplexDonut from "react-svg-donuts/dist/complex"

class CustomComplexDonut extends ComplexDonut {
  sortValues = values => values

  componentWillUnmount() {
    clearTimeout(this.loadTimeout)
  }
}

function toCurrency(value) {
  return value.toLocaleString(undefined, {
    style: "currency",
    currency: "USD",
  })
}

const DonutInner = ({ profit, gain, taxes = 0, taxesExtra }) => (
  <div
    style={{
      position: "absolute",
      top: "50%",
      right: 0,
      left: 0,
      textAlign: "center",
      transform: "translateY(-50%)",
    }}
  >
    <div className="donut-text text-green">
      <div>Gain</div>
      <h3>{toCurrency(gain)}</h3>
    </div>
    <div className="donut-text text-tang">
      <div>Taxes{taxesExtra && ` ${taxesExtra}`}</div>
      <h3>{toCurrency(-1 * taxes)}</h3>
    </div>
    <div className="donut-text text-main-blue">
      <div>Total</div>
      <h3>{toCurrency(profit)}</h3>
    </div>
  </div>
)

const roi = 0.12
const tax = 0.245

export default function Graphs({ investment, years }) {
  // Non Taxed = Profit=((Investment Amount) + (Investment Amount * Yearly ROI * Years))

  // Taxed = Profit = (Profit) - (Profit*Tax Percent)
  const totalGain = investment * roi * years
  const taxesPaid = totalGain * tax
  const taxedGain = totalGain - taxesPaid

  return (
    <>
      <div className="row justify-content-center text-center py-5 my-5 ">
        <div className="col-lg-6">
          <h3 className="text-gray mb-4">Without Prime IRA from Prime Trust</h3>
          <div
            style={{
              position: "relative",
            }}
          >
            <CustomComplexDonut
              size={350}
              radius={150}
              segments={[
                {
                  color: "#13ce67",
                  value: taxedGain,
                },
                {
                  color: "#fb592f",
                  value: taxesPaid,
                },
                {
                  color: "#00367a",
                  //   value: potentialProfit - taxedGain - taxesPaid,
                  value: investment,
                },
              ]}
              thickness={40}
              startAngle={-90}
            />

            <DonutInner
              profit={investment + taxedGain}
              gain={taxedGain}
              taxes={taxesPaid}
              taxesExtra="(avg. 24.5%)"
            />
          </div>
        </div>
        <div className="col-lg-6">
          <h3 className="text-gray mb-4">With Prime IRA from Prime Trust</h3>
          <div
            style={{
              position: "relative",
            }}
          >
            <CustomComplexDonut
              size={350}
              radius={150}
              segments={[
                {
                  color: "#13ce67",
                  value: totalGain,
                },
                {
                  color: "#fb592f",
                  value: 0,
                },
                {
                  color: "#00367a",
                  value: investment,
                },
              ]}
              thickness={40}
              startAngle={-90}
            />
            <DonutInner
              profit={investment + totalGain}
              investment={investment}
              gain={totalGain}
              taxes={0}
            />
          </div>
        </div>
      </div>
    </>
  )
}
