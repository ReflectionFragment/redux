import React from 'react';
import s from "./Bar.module.css";
import {NavLink} from "react-router-dom";

const Bar = () => {
    return (

        <nav className={s.bar}>
            <div className={s.item}>
                <NavLink to='/home'activeClassName={s.active}>home</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/content'activeClassName={s.active}> content </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs'activeClassName={s.active}> Dialogs </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/en'activeClassName={s.active}>en</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/ava'activeClassName={s.active}>ava</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/fr'activeClassName={s.active}>Fr</NavLink>
            </div>
        </nav>
    );
}
export default Bar;