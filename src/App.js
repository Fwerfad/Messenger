import React from "react"
import logo from "./logo.svg"
import "./App.css"
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

var firebaseConfig = {
  apiKey: "AIzaSyAIKF3LpD4fnzmcktXOOgNCtMcxD0qBzEY",
  authDomain: "messenger-3d1ca.firebaseapp.com",
  databaseURL: "https://messenger-3d1ca.firebaseio.com",
  projectId: "messenger-3d1ca",
  storageBucket: "messenger-3d1ca.appspot.com",
  messagingSenderId: "1097565193877",
  appId: "1:1097565193877:web:4655dd1413fdb994c87d9c",
}

firebase.initializeApp(firebaseConfig)

class App extends React.Component {
  // The component's Local state.
  state = {
    isSignedIn: false, // Local signed-in state.
  }

  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false,
    },
  }

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => this.setState({ isSignedIn: !!user }))
  }

  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver()
  }

  render() {
    const auth = firebase.auth()

    if (!this.state.isSignedIn) {
      return (
        <div>
          <h1>My App</h1>
          <p>Please sign-in:</p>
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={auth} />
        </div>
      )
    }

    return (
      <div className="App">
        <header className="App-header">
          <div>
            <h1>Messenger</h1>
            <p>Привет {auth.currentUser.displayName}!</p>
            <a onClick={() => auth.signOut()}>Sign-out</a>
          </div>
        </header>
      </div>
    )
  }
}

export default App
