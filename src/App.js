import React from "react"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import { firebase, uiConfig } from "./firebaseConfig"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import ContactsList from "./components/сontactList/contactsContainer";
import Chat from "./components/chat/chatContainer";
import Profile from "./components/profile/profileContainer";
import Layout from "./components/layout/layoutContainer";
import SearchForm from "./components/search/contactSearch/searchContainer";

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
            <Route path="/Chat" component={ChatFunction}/>
            <Route path="/Profiles" component={ProfileComponent}/>
            <Route path="/Contacts" component={ContactComponent}/>
            <Route path="/" render={() => (<Redirect to={'/Chat'}/>)}/>
          </Switch>
        </Layout>
      </Router>
    )
  }
}

function ChatFunction() {
  return <Chat />
}

function ProfileComponent() {
  return <Profile/>;
}

function ContactComponent() {
  return (
      <div>
        <SearchForm/>
        <ContactsList/>
      </div>
  )
}

export default App
