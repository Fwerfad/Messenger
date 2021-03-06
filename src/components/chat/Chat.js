/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from "react"
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
import { messagesService } from "../../services/MessagesService"

function MessagesContainer(props) {
  const classes = messagesStyles(props)
  return <Typography className={classes.messages}>{props.children}</Typography>
}

function Message(props) {
  console.log("message", props)
  const classes = messageStyles(props)
  return <Typography className={classes.message}>{props.children}</Typography>
}
function Chat(props) {
  console.log("chats", props)
  const classes = chatStyles()
  const [text, setText] = useState("")

  const onChangeText = (e) => {
    setText(e.target.value)
  }

  const myId = "user1"

  const onSend = (e) => {
    messagesService.sendMessage(myId, props.chatID, text)
  }


  const controllers = (
    <div className={classes.chatContollers}>
      <IconButton type="button" className={classes.imageInput}>
        <PhotoIcon className={classes.imageInputIcon} />
      </IconButton>
      <div className={classes.messageInputContainer}>
        <input
          onChange={onChangeText}
          type="text"
          className={classes.messageText}
          placeholder="Message..."
        />
      </div>
      <div className={classes.sendMessageContainer} onClick={onSend}>
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
          const yours = message.senderId !== myId
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
    chatID: state.chatsReducer.chatID,
    messages: state.chatsReducer.messages,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
