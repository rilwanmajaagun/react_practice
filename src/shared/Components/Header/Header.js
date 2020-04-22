import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <NavLink to='/home' activeClassName='header_nav'>Home</NavLink>
            <NavLink to='/prop_types' activeClassName='header_nav'>prop_types</NavLink>
            <NavLink to='/other' activeClassName='header_nav'> Otherpages</NavLink>
            <NavLink to='/thing/1' activeClassName='header_nav'> thing1</NavLink>
            <NavLink to='/thing/2' activeClassName='header_nav'> thing2</NavLink>
            <NavLink to='/thing/3' activeClassName='header_nav'> thing3</NavLink>
            
              <NavLink to='/message' activeClassName='header_nav'>Messages</NavLink>
              <NavLink to='/kids' exact activeClassName='header_nav'>KIDS</NavLink>
              {/* <NavLink to='/kids/JOHN' activeClassName='header_nav'>JOHN</NavLink>
              <NavLink to='/kids/SAM' activeClassName='header_nav'>SAM</NavLink>
              <NavLink to='/kids/DAVID' activeClassName='header_nav'>DAVID</NavLink> */}
               <NavLink to='/conditional' activeClassName='header_nav'>conditional</NavLink>
              
        </div>
    )
}

export default Header
