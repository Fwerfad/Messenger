import { firestore, firebase } from "../firebaseConfig"

const { Timestamp } = firebase.firestore

class AuthService {
    async login(name, uid) {
        const data = {
            name: name
        }
        await firestore
            .collection(`users`)
            .doc(uid)
            .get(uid)
    }
    async register(name, uid, image) {
        const data = {

        }
        await firestore
            .collection('users')
            .doc()
    }
}
