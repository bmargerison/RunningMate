import React from 'react'
import './ErrorControl.css'

function ErrorControl(props) {
  const errorMessage = props.errorMessage;

  return (
    <h1>{errorMessage}</h1>
  )
}

export default ErrorControl