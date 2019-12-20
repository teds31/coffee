import React from "react"
import Dropdown from "react-bootstrap/Dropdown"

const YearsDropdown = ({ value, onChange }) => {
  const onSelect = val => {
    onChange(val)
  }

  return (
    <Dropdown className="d-inline my-5 mx-1" onSelect={onSelect}>
      <Dropdown.Toggle
        variant="btn btn-outline-gray"
        id="amountInvested"
        className=""
        placeholder="years investing"
      >
        {!value ? "YEARS INVESTED" : `${value} years`}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="2">2 Years</Dropdown.Item>
        <Dropdown.Item eventKey="5">5 Years</Dropdown.Item>
        <Dropdown.Item eventKey="10">10 Years</Dropdown.Item>
        <Dropdown.Item eventKey="25">25 Years</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default YearsDropdown
