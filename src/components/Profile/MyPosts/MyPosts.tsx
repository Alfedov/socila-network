import React from 'react';
import Post from '../Post';
import classes from "./MyPosts.module.css";
import {PostType} from "../../../redux/state";

type MyPostPropsType = {
    posts: PostType[]
}

function MyPosts(props: MyPostPropsType) {
    let mapedItemPost = props.posts.map( (p) => <Post message={p.message} likesCount={p.likesCount}/>)


    return (
        <div className={classes.postsBox}>
            My posts
            <div>
                <textarea>drd</textarea>
                <button>Add post</button>
            </div>
            <div>
                {mapedItemPost}
            </div>


        </div>
    )
}

export default MyPosts;