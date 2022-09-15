import React from 'react'
import {NavLink} from "react-router-dom";
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.anim}>

            <NavLink className={s.navlink} to={'/pre-junior'}>pre-junior</NavLink>
            <NavLink className={s.navlink} to={'/junior'} >junior</NavLink>
            <NavLink className={s.navlink} to={'/junior+'}>junior+</NavLink>
        </div>
    )
}

export default Header
