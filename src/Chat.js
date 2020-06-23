import React from "react"
import { Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import "./chat.css"
import photoIcon from "./images/photo-icon.png"
import sendIcon from "./images/send-icon.png"

const useStyles = makeStyles({
  chat: {
    backgroundColor: "#f2f8fd",
    backgroundImage: "url(../images/white-scratone.png)",
  },
  messagesContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "10px",
  },
  messages: {
    marginTop: "30px",
    display: "flex",
    flexDirection: "column",
  },
  message: {
    borderRadius: "20px",
    padding: "8px 15px",
    marginTop: "5px",
    marginBottom: "5px",
    display: "inline-block",
  },
  mine: {
    alignItems: "flex-end",
  },
  // .mine .message ???
})

function Chat() {
  const classes = useStyles()
  return (
    <Container maxWidth="sm">
      <div class="chat">
        <div class="messages-containter">
          <div class="mine messages">
            <div class="message last">Конишуа! 🤡</div>
          </div>
          <div class="yours messages">
            <div class="message">Охайо! 👹</div>
            <div class="message last">
              CSS — формальный язык описания внешнего вида документа,
              написанного с использованием языка разметки. Преимущественно
              используется как средство описания, оформления внешнего вида
              веб-страниц, написанных с помощью языков разметки HTML и XHTML, но
              может также применяться к любым XML-документам, например, к SVG
              или XUL.
            </div>
          </div>
          <div class="mine messages">
            <div class="message">🤔</div>
            <div class="message last">
              HTML — стандартизированный язык разметки документов во Всемирной
              паутине. Большинство веб-страниц содержат описание разметки на
              языке HTML. Язык HTML интерпретируется браузерами; полученный в
              результате интерпретации форматированный текст отображается на
              экране монитора компьютера или мобильного устройства
            </div>
          </div>
        </div>
        <div class="chat-contollers">
          <button type="button" class="image-input">
            <img class="image-input-icon" src={photoIcon} />
          </button>
          <div class="message-input-container">
            <input type="text" class="message-text" placeholder="Message..." />
          </div>
          <div class="send-message-container">
            <button class="send-message-button" type="submit">
              <img class="send-message-button-img" src={sendIcon} />
            </button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Chat
