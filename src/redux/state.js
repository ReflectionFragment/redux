import React from "react";
import {renderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [{id: 0, message: 'hi. how are you?', likesCount: 3},
            {id: 1, message: 'hi. how are ?', likesCount: 3},
            {id: 2, message: 'hi. how ?', likesCount: 3},
            {id: 3, message: 'hi. ?', likesCount: 3},
            {id: 4, message: 'hi.?', likesCount: 3},
            {id: 5, message: '?', likesCount: 3},
            {id: 6, message: '', likesCount: 3}],
        dialogs: [{id: 0, name: 'dima'},
            {id: 2, name: "ф"},
            {id: 3, name: "b"},
            {id: 4, name: "v"},
            {id: 5, name: "cc"}]
    },
    messagesPage: {
        messages: [{id: 0, message: 'dyo'},
            {id: 1, message: "yo"},
            {id: 2, message: "y2"},
            {id: 3, message: "y3"},
            {id: 4, message: "y4"},
            {id: 5, message: "y5"}]
    },
    imgPage: {
        imeges: [
            {id: 1, img: <img scr='imghttps://i.pinimg.com/736x/a4/1d/da/a41ddae55fef329b4f74295ba758a424.jpg'/>},
            {id: 2, img: < img scr='https://i.pinimg.com/736x/86/95/54/8695540db1e9224367ed9d1a4884ccfc.jpg'/>},
            {id: 3, img: < img scr='imghttps://i.pinimg.com/736x/a4/1d/da/a41ddae55fef329b4f74295ba758a424.jpg'/>}
        ]
    }
}
export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likeCount: 0
    };
    state.profilePage.posts.push(newPost);
    renderEntireTree (state);

}

export default state;
