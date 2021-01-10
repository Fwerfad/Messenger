import { firestore } from "../firebaseConfig"
import { messagesService } from "./MessagesService"
import {userService} from "./UserService";

class ChatsService {
  async getChat(chatId) {
    const docRef = await firestore.collection(`chats`).doc(chatId).get()
    return docRef.data()
  }

  chatsListener(myId, limit = 3, chatsCallback = () => {}) {
    return firestore
      .collection("chats")
      .where("users", "array-contains", `${myId}`)
      .orderBy("lastActivity", "desc")
      .limit(limit)
      .onSnapshot((docSnapshot) => {
        let chats = []
        docSnapshot.forEach((doc) => {
          let data = {
            ...doc.data(),
            id: doc.id,
          }
          chats.push(data)
        })
        chatsCallback(chats)
      })
  }

  async checkPersonalChats(myId, userId) {
    const docRef = await firestore.collection("users").doc(myId)
    const doc = await docRef.get()
    const userData = doc.data()
    console.log("HERE")
    console.log(userData.personal_chats[userId])
    return userData.personal_chats[userId]
  }

  async updatePersonalChats(userId1, userId2, chatId) {
    let personalChats = {}
    personalChats[`personal_chats.${userId1}`] = chatId
    await firestore.collection(`users`).doc(userId2).update(personalChats)
  }

  async createPersonalChatWithMessage(myId, otherUserId, text, myNickName, otherNickName) {
    if (await this.checkPersonalChats(myId, otherUserId) == null) {
      const docRef = await firestore.collection("chats").add({
        users: [myId, otherUserId, myNickName, otherNickName],
      })
      const chatId = docRef.id
      await this.updatePersonalChats(myId, otherUserId, chatId)
      await this.updatePersonalChats(otherUserId, myId, chatId)
      await messagesService.sendMessage(myId, chatId, text)
    }
  }
}

export let chatsService = new ChatsService()
