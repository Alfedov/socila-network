import React from 'react';
import classes from "./Content.module.css";
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../redux/state";


type profilePropsType = {
    posts: PostType[]
}

function Profile(props: profilePropsType) {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}

export default Profile;