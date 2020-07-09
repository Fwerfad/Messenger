import React, { Fragment, useReducer, useEffect } from "react"
import { connect } from "react-redux"
import * as chatsActions from "../../store/actions/chats/chats"
import {
  Drawer,
  List,
  Tooltip,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import PersonIcon from "@material-ui/icons/Person"
import useStyles from "./sidePanelStyles"
import Grid from "@material-ui/core/Grid";



export const SidePanel = (props) => {
  const classes = useStyles()
  const [isOpen, toggleDrawer] = useReducer((state) => !state, false)

  const setChat = ((chatId) => {
  props.fetchMessages(chatId, 10)
  })

  useEffect(() => {
    if (props.chats.length === 0) {
      props.fetchCharts("user1", 10)
    }
    console.log(props)
  })

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
            <div style={{ minWidth: "57px" }}>
              {props.chats.map((chat) => (
                <ListItem
                  button
                  key={chat.id}
                  onClick={() => {
                    props.fetchMessages(chat.id, 20)
                  }}
                >
                  <ListItemIcon>
                    <PersonIcon fontSize="small" />
                  </ListItemIcon>
                  <Tooltip title={chat.users[1]}>
                    <ListItemText
                      className={classes.message}
                      primary={chat.users[1]}
                      secondary={chat.lastMessage}
                    />
                  </Tooltip>
                </ListItem>
              ))}
            </div>
          </List>
        </div>
      </Drawer>
    </Fragment>
  )
}

export const mapDispatchToProps = (dispatch) => {
  return {
    fetchCharts: (id, chatsNum) =>
        dispatch(chatsActions.fetchChats(id, chatsNum)),
    fetchMessages: (id, limit) =>
        dispatch(chatsActions.fetchMessages(id, limit))
  }
}
const mapStateToProps = (state) => {
  return {
    chats: state.chatsReducer.chats,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SidePanel)

// export default SidePanel
