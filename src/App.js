import React from 'react';
import './App.css';
import Header from './header/Header.js';
import Bar from './bar/Bar.js';
import Profile from './content/Profile.js';
import Dialogs from "./Dialogs/Dialogs";
import ava from "./Friends/Ava";
import FR from "./fr/FR";

import {BrowserRouter, Route} from 'react-router-dom';



const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Bar/>
                <div class='app-wrapper-router'>
                    <Route path='/content' render ={ ()=><Profile post={props.indeks}
                                                                  addPost={props.addPost}/>}/>
                    <Route path='/dialogs' render ={ ()=><Dialogs messages={props.indeks.messagesPage.messages}
                    dialogs={props.indeks.profilePage.dialogs}/>}/>
                    <Route path='/ava' render ={ ()=><ava messages={props.indeks}/>}/>

                </div>
<><Route path='/fr' render ={ ()=><FR post={props.indeks}/>}/></>
            </div>

        </BrowserRouter>)

}
export default App;