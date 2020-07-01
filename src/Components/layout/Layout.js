import React, {useReducer} from 'react';
import {AppBar, Toolbar} from '@material-ui/core'

import Header from "../../Component/header";
import SidePanel from "../sidePanel/sidePanel";
import ModalUI from "../modal/modal";
import contacts from "../ContactList/contacts";

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChatIcon from '@material-ui/icons/Chat';

import useStyles from "./classes";
import ContactsList from "../ContactList/contacts";


const Layout = (props) => {
    const [isOpen, toggleModal] = useReducer((state) => !state, false);
    const classes = useStyles();

    const createNewChat = (userID) => {

    }

    const editProfile = () => {
        //TODO
    }

    const addContact = () => {
        //TODO
    }

    return (
            <div className={classes.root}>
                <AppBar
                    position="fixed"
                    className={classes.appBar}
                >
                    <Toolbar className={classes.toolBar}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Header/>
                        <div>
                            <IconButton
                                onClick={toggleModal}
                                color="inherit"
                            >
                                <ChatIcon color="action"/>
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                <SidePanel/>
                <main className={classes.content}>
                    <div className={classes.contentContainer}>
                        <div className={classes.toolbar} />
                        {props.children}
                    </div>
                    <ModalUI isOpen={isOpen} close={toggleModal}>
                        <ContactsList users={[{name: "john"}, {name: "john"}, {name: "john"}, {name: "john"},{name: "john"},{name: "john"},{name: "john"},{name: "john"},{name: "john"},{name: "john"},{name: "john"},{name: "john"},{name: "john"},]}/>
                    </ModalUI>
                </main>
            </div>
    );
}

export default Layout