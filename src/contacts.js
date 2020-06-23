import React from "react";
import List from "@material-ui/core/List";
import {makeStyles} from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: "'Roboto', 'Helvetica', 'Arial', 'sans-serif'",
        fontSize: '14px'
    },
    listItem: {
        backgroundColor: 'white',
        height: '95px',
        borderBottomColor: '#C4C4C4',
        borderBottomStyle: "solid",
        borderBottomWidth: '1px',
        '&:hover' : {
            backgroundColor: '#C4C4C4'
        }
    },
    listItemText: {
        margin: '0px 20px',
        width: '50%'
    },
    contactNameText: {
        color: 'rgba(0, 0, 0, 0.87)'
    },
    contactDescriptionText: {
        maxHeight: '45px',
        maxWidth: '70%',
        color: 'rgba(0, 0, 0, 0.54)',
        fontWeight: "lighter",
        overflow: "hidden",
        whiteSpace: "pre-wrap"
    },
    contactLastMessageText: {
        width: '50%',
        color: 'rgba(0, 0, 0, 0.54)',
        fontSize: '12px'
    },
    contactLastMessageHeader: {},
    contactLastMessageContent: {}
}));

const state = {
    users: [
        {
            avatar: "",
            name: "Contact 1",
            description: "A description for contact 1",
            lastMessage: "Contact1's last message"
        },
        {
            avatar: "",
            name: "Contact 2",
            description: "A long description for contact 2 A long description for contact 2 A long description for contact 2",
            lastMessage: "Contact2's last message"
        },
        {
            avatar: "",
            name: "Contact 3",
            description: "A description for contact 3",
            lastMessage: "Contact3's last message"
        },
        {
            avatar: "",
            name: "Contact 4",
            description: "A description for contact 4 A long description for contact 4",
            lastMessage: "Contact4's last message"
        },

        {
            avatar: "",
            name: "Contact 11",
            description: "A description for contact 1",
            lastMessage: "Contact1's last message"
        },
        {
            avatar: "",
            name: "Contact 12",
            description: "A long description for contact 2 A long description for contact 2 A long description for contact 2",
            lastMessage: "Contact2's last message"
        },
        {
            avatar: "",
            name: "Contact 13",
            description: "A description for contact 3",
            lastMessage: "Contact3's last message"
        },
        {
            avatar: "",
            name: "Contact 14",
            description: "A description for contact 4 A long description for contact 4",
            lastMessage: "Contact4's last message"
        },
        {
            avatar: "",
            name: "Contact 31",
            description: "A description for contact 1",
            lastMessage: "Contact1's last message"
        },
        {
            avatar: "",
            name: "Contact 32",
            description: "A long description for contact 2 A long description for contact 2 A long description for contact 2",
            lastMessage: "Contact2's last message"
        },
        {
            avatar: "",
            name: "Contact 33",
            description: "A description for contact 3",
            lastMessage: "Contact3's last message"
        },
        {
            avatar: "",
            name: "Contact 34",
            description: "A description for contact 4 A long description for contact 4",
            lastMessage: "Contact4's last message"
        },
        {
            avatar: "",
            name: "Contact 41",
            description: "A description for contact 1",
            lastMessage: "Contact1's last message"
        },
        {
            avatar: "",
            name: "Contact 42",
            description: "A long description for contact 2 A long description for contact 2 A long description for contact 2",
            lastMessage: "Contact2's last message"
        },
        {
            avatar: "",
            name: "Contact 43",
            description: "A description for contact 3",
            lastMessage: "Contact3's last message"
        },
        {
            avatar: "",
            name: "Contact 44",
            description: "A description for contact 4 A long description for contact 4",
            lastMessage: "Contact4's last message"
        }
    ]
}

export default function ContactsList(props) {
    const classes = useStyles()
    const users = state.users
    const listItems = users.map((user) =>
        <React.Fragment>
            <ListItem className={classes.listItem}
                      key={user.name}
                      alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar src={user.avatar} alt={'avatar'}/>
                </ListItemAvatar>
                <ListItemText className={classes.listItemText}
                              primary={
                                  <Typography className={classes.contactNameText}>
                                      {user.name}
                                  </Typography>
                              }
                              secondary={
                                  <Typography className={classes.contactDescriptionText}>
                                      {user.description}
                                  </Typography>
                              }>
                </ListItemText>
                <ListItemText className={classes.contactLastMessageText}>
                    <React.Fragment>
                        <Typography className={classes.contactLastMessageHeader}
                                    display="span">
                            Last message
                        </Typography>
                        <Typography className={classes.contactLastMessageContent}
                                    display="block">
                            {user.lastMessage}
                        </Typography>
                    </React.Fragment>
                </ListItemText>
            </ListItem>
        </React.Fragment>
    );
    return (
        <List>
            {listItems}
        </List>
    )
}
