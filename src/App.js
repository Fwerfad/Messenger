import React from "react"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import { firebase, uiConfig } from "./firebaseConfig"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./components/header/header"
import ContactsList from "./components/сontactList/contacts";
import Chat from "./components/chat/chat";
import Profile from "./components/profile/profile";
import SidePanel from "./components/sidePanel/sidePanel";

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
            <body>
            <Router>
              <Header/>
              <div>
                <Switch>
                  <Route path="/Chat">
                    <ChatFunction />
                  </Route>
                  <Route path="/Profiles">
                    <ProfileFunction />
                  </Route>
                  <Route path="/Contacts">
                    <ContactFunction />
                  </Route>
                </Switch>
              </div>
            </Router>
            </body>
          </div>
    )
  }
}

function ChatFunction() {
  return <div><Chat/><SidePanel/></div>;
}

function ProfileFunction() {
  return <Profile/>;
}

function ContactFunction() {
  return <ContactsList/>
}

export default App
