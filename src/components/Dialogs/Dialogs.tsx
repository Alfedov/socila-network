import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/MessageItem";
import {DialogType, MessageType} from "../../redux/state";


type dialogPropsType = {
    dialogs: DialogType[]
    messages: MessageType[]
}


function Dialogs(props: dialogPropsType) {
    let dialogElements = props.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>)
    let messageElements = props.messages.map((m) => <MessageItem message={m.message} id={m.id}/>)

    return (
        <>
            <div className={classes.dialogs}>
                <div className={classes.DialogItem}>
                    {dialogElements}
                </div>
                <div className={classes.messages}>
                    {messageElements}
                </div>
            </div>

        </>
    )

}

export default Dialogs;


