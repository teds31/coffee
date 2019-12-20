import React, { useState, useEffect } from "react"
import AmountInput from "./AmountInput"
import YearsDropdown from "./YearsDropdown"
import Graphs from "./Graphs"

export default function Calculator() {
  const [years, setYears] = useState()
  const [amount, setAmount] = useState("")

  const onAmountChange = e => {
    setAmount(e.target.value) // might need to parse to int/float?
  }

  const [graphVals, setGraphVals] = useState(null)

  const calculateEarnings = () => {
    setGraphVals(current => {
      if (current && current.years === years && current.amount === amount) {
        return current
      }
      const amountVal = parseFloat(amount)

      return {
        amount,
        investment: amountVal,
        years,
      }
    })
  }

  useEffect(() => {
    if (graphVals !== null) {
      if (graphVals.amount !== amount || graphVals.years !== years) {
        setGraphVals(null)
      }
    }
  }, [graphVals, amount, years])

  return (
    <>
      <span className=" my-5 py-3">
        {/* Years Investing Dropdown */}
        <YearsDropdown onChange={setYears} value={years} />
        {/* Amount Invested Dropdown  */}
        <AmountInput onChange={onAmountChange} value={amount} />
        {/* Calculate Button  */}
        <button
          type="submit"
          className="btn btn-green d-inline ml-1"
          onClick={calculateEarnings}
        >
          calculate
        </button>
      </span>
      {graphVals !== null && <Graphs {...(graphVals || {})} />}
    </>
  )
}
