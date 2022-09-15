import React from 'react';
import s from './Content.module.css';
import MyPosts from "../MyPosts/MyPosts";
import Ava from "./ava";

const FR = (pro) => {
   
    return (
        <div className={s.fr}>

            <Ava />
            {/*<MyPosts xui={pro.post.profilePage.posts} />*/}
    </div>);
}
export default FR;