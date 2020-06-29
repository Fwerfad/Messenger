import React from "react"
import "./App.css"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import { firebase, uiConfig } from "./firebaseConfig"

class App extends React.Component {
  // TODO move isSignedIn to redux
  state = {
    isSignedIn: false,
  }

  componentDidMount() {
    this.unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => this.setState({ isSignedIn: !!user }))
  }

  componentWillUnmount() {
    this.unregisterAuthObserver()
  }

  render() {
    const auth = firebase.auth()

    if (!this.state.isSignedIn) {
      return (
        <div>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
        </div>
      )
    }

    return (
      <div className="App">
        <header className="App-header">
          <div>
            <h1>Messenger</h1>
            <p>Привет {auth.currentUser.displayName}!</p>
            <button onClick={() => auth.signOut()}>Sign-out</button>
          </div>
        </header>
      </div>
    )
  }
}

export default App
