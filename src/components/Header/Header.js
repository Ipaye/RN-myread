import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <nav className="navigation">
      <span className="navigation__brand">
        <Link to="/">MyRead.ND</Link>
      </span>
      <ul className="navigation__links">
        <li className="navigation__links-item">
          <Link to="/search">Genre</Link>
        </li>
        <li className="navigation__links-item">
          <Link to="/search">Search</Link>
        </li>
      </ul>
    </nav>
  )
}
