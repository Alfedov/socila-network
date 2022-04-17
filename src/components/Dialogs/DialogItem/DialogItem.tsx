import React from "react";
import {NavLink} from "react-router-dom";
import classes from './../Dialogs.module.css'



type dialogItemPropsType = {
    id: string
    name: string
}

function DialogItem(props: dialogItemPropsType) {
    let path = "/dialog/" + props.id
    return (
        <div className={classes.item + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;


