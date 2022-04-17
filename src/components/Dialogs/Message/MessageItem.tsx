import React from "react";
import classes from './../Dialogs.module.css';

type messageItemPropsType = {
    message: string
    id: string
}


function MessageItem(props: messageItemPropsType) {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

export default MessageItem;


