import React from 'react'

function Header1() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">
    Navbar
  </a>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNavAltMarkup"
    aria-controls="navbarNavAltMarkup"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="#">
        Home <span className="sr-only">(current)</span>
      </a>
      <a className="nav-item nav-link" href="#">
        Features
      </a>
      <a className="nav-item nav-link" href="#">
        Pricing
      </a>
      <a className="nav-item nav-link disabled" href="#">
        Disabled
      </a>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Header1