import React from 'react'
import { Link } from 'react-router-dom';



const Navbar = (props) => {
    return (
        <>
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="TextForm">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="About">{props.about}</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/">Contact-us</Link>

        </li>
    
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form>
      {/* <div class="form-check form-switch m-3">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked/>
  <label class="form-check-label" for="flexSwitchCheckChecked">darkmode</label>
</div> */}
<div className={`form-check form-switch m-3 text-${props.mode==="light"?"dark":"light"}`}>
  <input className="form-check-input"onClick={props.togglemode} type="checkbox"  id="flexSwitchCheckDefault"/>
  <label className="form-check-label" for="flexSwitchCheckDefault">DarkMode</label>
</div>
    </div>
  </div>
</nav>
        </>
    )
}

export default Navbar;
