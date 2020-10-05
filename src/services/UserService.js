import { firestore } from "../firebaseConfig"

class UserService {
  async getUserData(userId) {
    const docRef = firestore.collection("users").doc(userId)
    const doc = await docRef.get()
    if (!doc.exists) {
      return null
    } else {
      return doc.data()
    }
  }

  async findUser(searchNickname) {
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

  async updateSettings(userId, settings) {
    const user = {}
    for (const key in settings) {
      user[`settings.${key}`] = settings[key]
    }
    await firestore.collection("users").doc(userId).update(user)
  }
}

export let userService = new UserService()
