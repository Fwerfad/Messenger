var admin = require("firebase-admin")

var serviceAccount = require("./messenger-3d1ca-firebase-adminsdk-aid4b-09b2ffcccc.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://messenger-3d1ca.firebaseio.com",
})

const firestore = admin.firestore()
const { Timestamp } = admin.firestore

async function getUserData(userId) {
  const docRef = firestore.collection("users").doc(userId)
  const doc = await docRef.get()
  if (!doc.exists) {
    console.log(`user not exists: ${userId}`)
  } else {
    console.log(doc.data())
  }
}

async function getChat(chatId) {
  const docRef = await firestore.collection(`chats`).doc(chatId).get()
  return docRef.data()
}

async function sendMessage(myId, chatId, text) {
  const data = {
    senderId: myId,
    text: text,
    date: Timestamp.fromDate(new Date()),
  }

  await firestore
    .collection(`chats`)
    .doc(chatId)
    .collection("messages")
    .add(data)
}

function messagesListener(chatId, limit = 2) {
  firestore
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .orderBy("date", "desc")
    .limit(limit)
    .onSnapshot(
      (docSnapshot) => {
        docSnapshot.forEach((doc) => {
          console.log(doc.data())
        })
        console.log("----")
      },
      (err) => {
        console.log(`Encountered error: ${err}`)
      }
    )
}

function chatsListener(myId, limit = 3) {
  return firestore
    .collection("chats")
    .where("users", "array-contains", `${myId}`)
    .orderBy("lastActivity", "desc")
    .limit(limit)
    .onSnapshot((docSnapshot) => {
      docSnapshot.forEach((doc) => {
        let data = doc.data()
        console.log(data.users)
        console.log(data.lastMessage)
        console.log(data.lastActivity.toDate())
      })
      console.log("---")
    })
}

async function checkPersonalChats(myId, userId) {
  const docRef = await firestore.collection("users").doc(myId)
  const doc = await docRef.get()
  const userData = doc.data()
  return userData.personal_chats[userId]
}

async function updatePersonalChats(userId1, userId2, chatId) {
  let personalChats = {}
  personalChats[`personal_chats.${userId1}`] = chatId
  await firestore.collection(`users`).doc(userId2).update(personalChats)
}

async function createPersonalChatWithMessage(myId, otherUserId, text) {
  const docRef = await firestore.collection("chats").add({
    users: [myId, otherUserId],
  })
  const chatId = docRef.id
  await updatePersonalChats(myId, otherUserId, chatId)
  await updatePersonalChats(otherUserId, myId, chatId)
  await sendMessage(myId, chatId, text)
}

async function updateSetting(userId, settings) {
  const user = {}
  for (const key in settings) {
    user[`settings.${key}`] = settings[key]
  }
  await firestore.collection("users").doc(userId).update(user)
}

async function findUser(searchNickname) {
  const querySnapshot = await firestore
    .collection("users")
    .where("nickname", ">=", searchNickname)
    .where("nickname", "<=", searchNickname + "\uf8ff")
    .get()
  let nicknames = []
  querySnapshot.forEach((doc) => {
    nicknames.push(doc.data().nickname)
  })
  return nicknames
}

const initialState = {
  notifications: true,
}

// updateSetting("user1", initialState)

;(async () => {
  const nicknames = await findUser("di")
  console.log(nicknames)
})()

// createPersonalChatWithMessage("user2", "user3", "text")

// getUserData("test_user")
// getUserData("not_existed_user")
// sendMessage("user2", "MwalOtBAYQ5dUoOJEfjz", "new message")

// getChat("test_chat").then((data) => {
// console.log(data)
// })

// messagesListener("MwalOtBAYQ5dUoOJEfjz")
// chatsListener("user1")

// checkPersonalChats(123).then((kek) => {
//   console.log(kek.data().personal_chats["user_id1"])
// })

// ;(async () => {
//   console.log(await checkPersonalChats("test_user", "user_id2"))
// })()
