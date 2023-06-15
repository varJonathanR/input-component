import React from 'react'

function Inputs({ code, className, inputValue, disabled, helpClass, helperText }) {
  return (
    <div className="mb-3 d-flex flex-column me-4">
        <p>{code}</p>
        <label className="form-label">Label</label>
        <input type="text" className={className} placeholder="Placeholder" value={inputValue} disabled={disabled} />
        <p className={helpClass}>{helperText}</p>
    </div>
  )
}

function Size({ code, className }) {
  return (
    <div className="mb-3 d-flex flex-column me-4">
      <p>{code}</p>
      <label className="form-label">Label</label>
      <input type="text" placeholder="Placeholder" className={className} />
    </div>
  )
}

function TextArea({ code, className, rows }) {
  return (
    <div className="mb-3 d-flex flex-column me-4">
      <p>{code}</p>
      <label className="form-label">Label</label>
      <textarea placeholder='Placeholder' className={className} rows={rows}></textarea>
    </div>
  )
}

function StartIcon({ code, iconClass }) {
  return (
    <div className="mb-3 d-flex flex-column me-4">
      <p>{code}</p>
      <label className="form-label">Label</label>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1"><i className={iconClass}></i></span>
        <input type="text" placeholder="Placeholder" />
      </div>
    </div>
  )
}

function EndIcon({ code, iconClass }) {
  return (
    <div className="mb-3 d-flex flex-column me-4">
      <p>{code}</p>
      <label className="form-label">Label</label>
      <div className="input-group mb-3">
        <input type="text" placeholder="Placeholder" />
        <span className="input-group-text" id="basic-addon1"><i className={iconClass}></i></span>
      </div>
    </div>
  )
}


export { Inputs, Size, TextArea, StartIcon, EndIcon }