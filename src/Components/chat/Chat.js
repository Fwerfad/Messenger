/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react"
import { connect } from "react-redux"
import PhotoIcon from "@material-ui/icons/Photo"
import SendIcon from "@material-ui/icons/Send"
import { chatStyles, messageStyles, messagesStyles } from "./chatStyles"
import IconButton from "@material-ui/core/IconButton"
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
} from "@material-ui/core"

function MessagesContainer(props) {
  const classes = messagesStyles(props)
  return <Typography className={classes.messages}>{props.children}</Typography>
}

function Message(props) {
  const classes = messageStyles(props)
  return <Typography className={classes.message}>{props.children}</Typography>
}

function Chat(props) {
  const classes = chatStyles()

  const controllers = (
    <div className={classes.chatContollers}>
      <IconButton type="button" className={classes.imageInput}>
        <PhotoIcon className={classes.imageInputIcon} />
      </IconButton>
      <div className={classes.messageInputContainer}>
        <input
          type="text"
          className={classes.messageText}
          placeholder="Message..."
        />
      </div>
      <div className={classes.sendMessageContainer}>
        <IconButton className={classes.sendMessageButton} type="submit">
          <SendIcon></SendIcon>
        </IconButton>
      </div>
    </div>
  )

  return (
    <div className={classes.container}>
      <div className={classes.chat}>
        {[...props.messages].reverse().map((message) => {
          const yours = message.senderId !== "user1"
          return (
            <MessagesContainer key={message.date.nanoseconds} yours={yours}>
              <Message yours={yours}>{message.text}</Message>
            </MessagesContainer>
          )
        })}
        <div style={{ visibility: "hidden" }}>{controllers}</div>
      </div>
      <div className={classes.chatControllersPosition}>{controllers}</div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const mapStateToProps = (state) => {
  return {
    messages: state.chatsReducer.messages,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
