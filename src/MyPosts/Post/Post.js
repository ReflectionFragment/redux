import React from "react";
import s from './Post.module.css'

const Post = (props) => {

return (
    <div className={s.content}>

        <div className={s.goga}>

            <img
                src='https://imgproxy.sbermarket.ru/imgproxy/size-1646-1646/aHR0cHM6Ly9zYmVybWFya2V0LnJ1L3NwcmVlL3Byb2R1Y3RzLzExMzUyMS9vcmlnaW5hbC8xMjE2OTkuanBnPzE1ODc0MDE2MTY.png/'/>
            {props.message}

        </div>

        <span>likes {props.like}</span>
    </div>
);
}
export default Post;


