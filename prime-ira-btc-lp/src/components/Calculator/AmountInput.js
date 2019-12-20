import React from "react"

export default function AmountInput(props) {
  return (
    <input
      type="text"
      placeholder="amount invested"
      className="d-inline my-5 mx-1 savings-input"
      {...props}
    />
  )
}
