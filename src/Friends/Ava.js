import React from 'react';
import s from './Dialogs.module.css';
import NavLink from "react-router-dom/NavLink";
import Post from "../MyPosts/Post/Post";
import App from '../App.js'
import ReactDOM from "react-dom/client";
import Message from './Message';
import DialogsItem from './Friends';

const ava = (props) => {
    let messagesElement = props.messages.map((m) => <Message message={m.message}/>);
    let dialogElement = props.dialogs.map((d) => <DialogsItem name={d.name} id={d.id}/>);


    return (<div className={s.dialogs}>
            <div className={s.dialogsItems}>{dialogElement}</div>
            <div className={s.message}>{messagesElement}</div>
        </div>
    );
}
export default ava;

// const DialogItem = (props) => {
//     let path = '/dialogs/' + props.id
//
//     return (<div> <NavLink to = {path}> {props.name} </NavLink> </div>)
//
// }
// const Message = (props)=>{
//     return <div className={s.dialog}>{props.message}</div>
// }
//
//
// const Dialogs = (props) => {
//     const dialogsData =
//         [
//         {id:1, name: "dima"},
//         {id:2, name: "ф"},
//         {id:3, name: "b"},
//         {id:4, name: "v"},
//         {id:5, name: "cc"}
//     ];
//
//     let messagesData =
//         [
//         {id: 1, message: "yo"},
//         {id: 2, message: "y2"},
//         {id: 3, message: "y3"},
//         {id: 4, message: "y4"},
//         {id: 5, message: "y5"}
//     ]
//
//     let messagesElements = messagesData.map (m => <Message message={m.message} />);
//     let dialogsElements = dialogsData.map ((d)=> <DialogItem name={d.name}/>);
//       return (
//         <div className={s.dialogs}>
//             <div className={s.dialogsItems}>
//                 {dialogsElements}
//             </div>
//             <div className={s.messages}>
//                 {messagesElements}
//             </div>
//         </div>)
//
// }
// export default Dialogs;