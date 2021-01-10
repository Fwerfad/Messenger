import React from "react"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import { firebase, uiConfig } from "./firebaseConfig"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import ContactsList from "./components/сontactList/contacts";
import Chat from "./components/chat/Chat";
import Profile from "./components/profile/profileContainer";
import Layout from "./components/layout/layoutContainer";
import SearchForm from "./components/search/contactSearch/searchContainer";
import {connect} from "react-redux";
import * as authActions from "./store/actions/auth/auth"


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
    console.log(this.state.currentUser)
    const auth = firebase.auth()
    if (!this.state.isLoggedOn) {
      this.state.isLoggedOn = true;
      return (
        <div>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
        </div>
      )
    }
    this.state.currentUser = auth.currentUser.providerData[0];
    console.log(this.state.currentUser)
      //this.props.auth(auth.currentUser.providerData[0].displayName, auth.currentUser.providerData[0].uid);
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
