import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {DialogType, MessageType, PostType} from "./redux/state";

type indexPropsType = {
    posts: PostType[]
    dialogs: DialogType[]
    messages: MessageType[]
}

function App(props: indexPropsType) {
    debugger
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={()=> <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                    <Route path="/profile" render={()=> <Profile posts={props.posts}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
