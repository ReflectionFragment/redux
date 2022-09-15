import NavLink from "react-router-dom/NavLink";
import React from "react";

const DialogsItem = (props) => {
    let path = '/dialog/' + props.id;
    return (<div>
        <NavLink to={path}>{props.name}</NavLink>
    </div>)
}
export default DialogsItem;