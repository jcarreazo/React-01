import React from 'react';
const logobur =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png';
export default function Header() {
  return (
    <header>
      <nav className="nav">
        <img src={logobur} width="50px" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
