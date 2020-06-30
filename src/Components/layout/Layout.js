import React from 'react';
import {AppBar, Toolbar} from '@material-ui/core'

import Header from "../../Component/header";
import SidePanel from "../sidePanel/sidePanel";

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChatIcon from '@material-ui/icons/Chat';

import useStyles from "./classes";


const Layout = (props) => {
    const classes = useStyles();

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
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <ChatIcon color="action"/>
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                <SidePanel/>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    {props.children}
                </main>
            </div>
    );
}

export default Layout