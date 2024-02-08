import React from 'react'
import { Link } from "react-router-dom";

import "./styles.css"

function MenuBtn({path, title}) {
  return (
    <Link to={path} className='menu-link'>{title}</Link>
  )
}

export default MenuBtn
