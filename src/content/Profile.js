import React from 'react';
import s from './Content.module.css';
import MyPosts from "../MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo";


const Profile = (pro) => {
   
    return (
        <div className={s.content}>

            <ProfileInfo />
            <MyPosts xui={pro.post.profilePage.posts}
                     addPost={pro.addPost}/>
    </div>);
}
export default Profile;