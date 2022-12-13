import React from 'react'
import './ErrorControl.css'

function ErrorControl(props) {
  const errorMessage = props.errorMessage;

  return (
    <span className="error-message pt-3" >{errorMessage}</span>
  )
}

export default ErrorControl