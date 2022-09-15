import React from "react";
import s from "./ava.module.css"
const Ava = (props) => {
    return (
        <p className={s.picture}>
            <div>
                <img src=
                  'https://storage.googleapis.com/cdn.thenewstack.io/media/2017/08/561a67f1-screen-shot-2017-08-10-at-10.23.25-am-1024x601.png'/>
            </div>
            <div>name={props.name}</div>
        </p>
    )
}


export default Ava;