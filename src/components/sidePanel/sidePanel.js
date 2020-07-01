import React, { Fragment, useReducer } from "react";
import {
    Drawer,
    List,
    Tooltip,
    Divider,
    IconButton,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import PersonIcon from "@material-ui/icons/Person";
import useStyles from "./classes";

const SidePanel = (props) => {
    const classes = useStyles();
    const [isOpen, toggleDrawer] = useReducer((state) => !state, false);

    return (
        <Fragment>
            <Drawer
                variant="permanent"
                className={classes.drawer}
                classes={{
                    paper: isOpen ? classes.drawerOpen : classes.drawerClose,
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={toggleDrawer}>
                        {isOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <div className={classes.hiddenScroll}>
                    <List className={classes.scrollContainer}>
                        <div style={{minWidth: "57px"}}>
                        {["very", "long", "name", "which", "does", "not", "fit", "Jon", "Sally", "very", "long", "name", "which", "does", "not", "fit", "Jon", "Sally"].map(
                            (text, index) => (
                                <ListItem button key={index}>
                                    <ListItemIcon>
                                        <PersonIcon fontSize="medium" />
                                    </ListItemIcon>
                                    <Tooltip title={text}>
                                        <ListItemText
                                            className={classes.message}
                                            primary={text}
                                            secondary={"01.02.2020"}
                                        />
                                    </Tooltip>
                                </ListItem>
                            )
                        )}
                        </div>
                    </List>
                </div>
            </Drawer>
        </Fragment>
    );
};

export default SidePanel