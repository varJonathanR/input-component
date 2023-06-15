import React from 'react'
import { Inputs } from '../components/Inputs'
import IconInput from '../components/IconInput'
import SizedInput from '../components/SizedInput'

function All() {
  return (
    <div className='All'>
      <h1>All</h1>
      <div className="d-flex flex-wrap">
        <Inputs code={"<Input />"} />
        <Inputs code={"&:hover"} className={"hover"} />
        <Inputs code={"&:focus"} className={"focus"} />
      </div>
      <div className="d-flex flex-wrap">
        <Inputs code={"<Input error />"} className={"error"} />
        <Inputs code={"&:hover"} className={"error-hover"} />
        <Inputs code={"&:focus"} className={"error-focus"} />
      </div>
      <div className="d-flex flex-wrap">
        <Inputs code={"<Input disabled />"} className={"disabled"} disabled={true} />
      </div>
      <div className="d-flex flex-wrap">
        <Inputs code={"<Input helperText='Some Interesting Text' />"} helperText={"Some Interesting Text"} />
        <Inputs code={"<Input helperText='Some Interesting Text' error />"} className={"error"} helpClass={"error-text"} helperText={"Some Interesting Text"} />
      </div>
      <IconInput />
      <SizedInput />
    </div>
  )
}

export default All