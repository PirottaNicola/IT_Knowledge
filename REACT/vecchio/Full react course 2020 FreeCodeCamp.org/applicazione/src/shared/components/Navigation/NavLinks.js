import React from 'react'
import { Link } from 'react-router-dom'

import './NavLinks.css'


const NavLinks = (props) => {

    return <ul className='nav-links'>
        <li>
            <Link to='/' exact>All Users</Link>
        </li>
        <li>
            <Link to='/u1/places'>My Places</Link>
        </li>
        <li>
            <Link to='/places/new'>Add Place</Link>
        </li>
        <li>
            <Link to='/auth'>Authenticate</Link>
        </li>
    </ul>
}
export default NavLinks;