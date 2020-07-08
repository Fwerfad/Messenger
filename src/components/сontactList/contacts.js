import React, {Fragment} from "react";
import {
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Avatar,
    Typography
} from "@material-ui/core";

import {useStyles} from "./contactsStyles"
import {state} from "./tempLocalStore"

export function ContactsList(props) {
    const classes = useStyles()
    const users = state.users
    const listItems = users.map((user) =>
        <Fragment key={user.name}>
            <ListItem className={classes.listItem}
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
                                    display="inline">
                            Last message
                        </Typography>
                        <Typography className={classes.contactLastMessageContent}
                                    display="block">
                            {user.lastMessage}
                        </Typography>
                    </React.Fragment>
                </ListItemText>
            </ListItem>
        </Fragment>
    );
    return (
        <List className={classes.container}>
            {listItems}
        </List>
    )
}

export default ContactsList;
