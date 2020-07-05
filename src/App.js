import React from "react"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import { firebase, uiConfig } from "./firebaseConfig"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import ContactsList from "./Components/сontactList/contactsContainer"
import Chat from "./Components/chat/Chat"
import Profile from "./Components/profile/profileContainer"
import Layout from "./Components/layout/layoutContainer"

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
      <Router>
        <Layout>
          <Switch>
            <Route path="/Chat" component={ChatFunction} />
            <Route path="/Profiles" component={ProfileFunction} />
            <Route path="/Contacts" component={ContactFunction} />
            <Route path="/" render={() => <Redirect to={"/Chat"} />} />
          </Switch>
        </Layout>
      </Router>
    )
  }
}

function ChatFunction() {
  return <Chat />
}

function ProfileFunction() {
  return <Profile />
}

function ContactFunction() {
  return <ContactsList />
}

export default App
