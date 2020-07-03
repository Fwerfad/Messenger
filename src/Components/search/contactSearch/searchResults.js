import React from "react";
import {
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Avatar,
    Typography
} from "@material-ui/core";

import {useStyles} from "./searchResultsStyles"
import {state} from "./tempLocalStore"
import TextField from "@material-ui/core/TextField/TextField";

export function ContactsList(props) {
    const classes = useStyles()
    const users = state.users
    const listItems = users.map((user) =>
        <React.Fragment key={user.name}>
            <ListItem className={classes.listItem}
                      alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar src={user.avatar} alt={'avatar'}/>
                </ListItemAvatar>
                <ListItemText
                    className={classes.listItemText}
                    primary={
                        <Typography className={classes.contactNameText}>
                            {user.name}
                        </Typography>
                    }
                    secondary={
                        <Typography className={classes.contactDescriptionText}>
                            {user.description}
                        </Typography>
                    }
                >
                </ListItemText>
                <ListItemText className={classes.contactLastMessageText}>
                    <React.Fragment>
                        <Typography
                            className={classes.contactLastMessageHeader}
                            display="inline"
                        >Last message
                        </Typography>
                        <Typography
                            className={classes.contactLastMessageContent}
                            display="block"
                        >
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

export default ContactsList;
