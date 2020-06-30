/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react"
import { Container } from "@material-ui/core"
import PhotoIcon from "@material-ui/icons/Photo"
import SendIcon from "@material-ui/icons/Send"
import { chatStyles, messageStyles, messagesStyles } from "./chatStyles"

function Messages(props) {
  const classes = messagesStyles(props)
  return <div className={classes.messages}>{props.children}</div>
}

function Message(props) {
  const classes = messageStyles(props)
  return <div className={classes.message}>{props.children}</div>
}

function Chat() {
  const classes = chatStyles()
  return (
    <Container maxWidth="sm">
      <div className={classes.chat}>
        <Messages mine>
          <Message mine>Конишуа! 🤡</Message>
        </Messages>
        <Messages yours>
          <Message yours>Охайо! 👹</Message>
          <Message yours>
            CSS — формальный язык описания внешнего вида документа, написанного
            с использованием языка разметки. Преимущественно используется как
            средство описания, оформления внешнего вида веб-страниц, написанных
            с помощью языков разметки HTML и XHTML, но может также применяться к
            любым XML-документам, например, к SVG или XUL.
          </Message>
        </Messages>
        <Messages mine>
          <Message mine>🤔</Message>
          <Message mine>
            HTML — стандартизированный язык разметки документов во Всемирной
            паутине. Большинство веб-страниц содержат описание разметки на языке
            HTML. Язык HTML интерпретируется браузерами; полученный в результате
            интерпретации форматированный текст отображается на экране монитора
            компьютера или мобильного устройства
          </Message>
        </Messages>
      </div>
      <div className={classes.chatContollers}>
        <button type="button" className={classes.imageInput}>
          <PhotoIcon className={classes.imageInputIcon} />
        </button>
        <div className={classes.messageInputContainer}>
          <input
            type="text"
            className={classes.messageText}
            placeholder="Message..."
          />
        </div>
        <div className={classes.sendMessageContainer}>
          <button className={classes.sendMessageButton} type="submit">
            <SendIcon></SendIcon>
          </button>
        </div>
      </div>
    </Container>
  )
}

export default Chat
