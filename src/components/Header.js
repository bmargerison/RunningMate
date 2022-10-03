import React from 'react'

function Header() {
  return (
    <header className="d-flex flex-wrap justify-content-center py-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto">
          <img className="bi me-3" src={require('../img/logo.svg').default} alt="logo" width={40} height={40} />
          <span className="fs-2">Running Pace Calculator</span>
        </div>
      </div>
    </header>
  )
}

export default Header