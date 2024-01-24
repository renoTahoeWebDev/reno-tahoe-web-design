import { NavLink } from "@remix-run/react"
import primaryFD from "../images/logos/primary-full-dark.svg"

export default function MainNavigation() {
  return (
    <header id="main-header">
      <div>
        <img src={primaryFD} />
      </div>
      <div id="main-navigation">
        <nav>
          <ul>
            <li className="nav-item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/services">Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
