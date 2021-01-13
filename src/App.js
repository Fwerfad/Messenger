import React from "react"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import { firebase, uiConfig } from "./firebaseConfig"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import {connect} from "react-redux";
import * as authActions from "./store/actions/auth/auth"
import Chat from "./Components/chat/Chat";
import {ContactsList} from "./Components/сontactList/contacts";
import Layout from "./Components/layout/layoutContainer";
import Profile from "./Components/profile/profile";
import SearchForm from "./Components/search/contactSearch/search";


class App extends React.Component {
  // TODO move isSignedIn to redux
  state = {
    isLoggedOn: false,
    currentUser: null,
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
    if (!auth.currentUser) {
      this.state.isLoggedOn = true;
      return (
        <div>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
        </div>
      )
    }

    this.state.currentUser = auth.currentUser.providerData[0];
    console.log(this.state.currentUser)
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

const mapDispatchToProps = (dispatch) => {
  return {
    auth: (name, uid) => {
      dispatch(authActions.auth(name, uid))
    },
    logout : () => {
      dispatch(authActions.logout())
    }
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.authReducer.token,
    userId: state.authReducer.userId,
    loading: state.authReducer.loading,
    error: state.authReducer.error,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
