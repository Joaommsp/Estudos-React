import React, { Children } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/"> Frontend Journey </Link>
      <ul>
        <CustomLink to="/about">Sobre</CustomLink>
        <CustomLink to="/profile">Perfil</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  // const path = window.location.pathname;

  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({path: resolvedPath.pathname, end: true})

  console.log(resolvedPath)

  return (
    <li>
      <Link to={to} {...props} className={ isActive ? "active" : ""}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
