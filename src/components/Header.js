import React from 'react'

function Header() {
  return (
    <header className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <img src={require('../img/logo.svg').default} alt="logo" width={40} height={40} />
        </div>
      </div>
    </header>
  )
}

export default Header