import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
let newPostElement = React.createRef();
let addPost =()=> {
  let text = newPostElement.current.value;
  props.addPost (text);
}

        const postElement = props.xui.map((p)=><Post message={p.message} like={p.likesCount}/>);
    return (<div className={s.postsBlock}>
       <h3> My posts </h3>
        <p>
            <textarea ref= {newPostElement} />
        </p>

        <p>
            <button onClick={addPost}>add post</button>
        </p>

        <div className={s.posts}>
            <div>
                {postElement}
            </div>

        </div>
    </div>);
}
export default MyPosts;