import React, {ChangeEvent, useState} from 'react'
import {NavLink} from "react-router-dom";
import s from './Header.module.css'

function Header() {
    let [inp, setInp] = useState(false)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInp(e.currentTarget.checked)
    }


    return (
        <div className={s.content}>
            <div className={`${s.link} ${inp ? s.open : s.close}`}>
                <NavLink className={s.navlink} to={'/pre-junior'}>pre-junior</NavLink>
                <NavLink className={s.navlink} to={'/junior'}>junior</NavLink>
                <NavLink className={s.navlink} to={'/junior+'}>junior+</NavLink>
                <input type={"checkbox"} onChange={onChangeHandler}/></div>

        </div>
    )
}

export default Header
