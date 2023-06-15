import React from 'react'
import { Size, TextArea } from './Inputs'

function SizedInput() {
  return (
    <div className="sized-container">
        <div className='d-flex flex-wrap'>
            <Size code={"<Input size='sm' />"} className={"form-control-sm"} />
            <Size code={"<Input size='lg' />"} className={"form-control-lg"} />
        </div>
        <div className="w-100">
            <Size code={"<Input fullWidth />"} className={"w-100"} />
        </div>
        <div className="d-flex flex-wrap">
            <TextArea code={"<Input multiline rows='4' />"} rows={"5"} />
        </div>
    </div>
  )
}

export default SizedInput