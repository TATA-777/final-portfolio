import { NavLink } from 'react-router-dom'

import { logo } from '../assets/images'

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <img
          src={logo}
          alt="logo"
          className="w-12 h-12 object-contain rounded-lg"
        />
      </NavLink>
    </header>
  )
}

export default Navbar
