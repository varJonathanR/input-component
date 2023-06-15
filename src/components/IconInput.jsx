import React from 'react'
import { StartIcon, EndIcon } from './Inputs'

export default function IconInput() {
  return (
    <div className='d-flex flex-wrap'>
        <StartIcon code={"<Input startIcon />"} iconClass={"bi bi-telephone-fill"} />
        <EndIcon code={"<Input endIcon"} iconClass={"bi bi-lock-fill"} />
    </div>
  )
}