import firebase from "firebase"

export let firebaseConfig = {
  apiKey: "AIzaSyAIKF3LpD4fnzmcktXOOgNCtMcxD0qBzEY",
  authDomain: "messenger-3d1ca.firebaseapp.com",
  databaseURL: "https://messenger-3d1ca.firebaseio.com",
  projectId: "messenger-3d1ca",
  storageBucket: "messenger-3d1ca.appspot.com",
  messagingSenderId: "1097565193877",
  appId: "1:1097565193877:web:4655dd1413fdb994c87d9c",
}

firebase.initializeApp(firebaseConfig)
export { firebase }

export let uiConfig = {
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
}
