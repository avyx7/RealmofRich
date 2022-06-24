import React, { useRef, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Frontpage from "./frontpage";
import Loading from "./loading";


import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/analytics';

import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Home from './home';
import firebasekeys from './firebaselock';
import EducationHome from './educationHome';
import GameFinances from './game-finances';

firebasekeys();

export const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

// Initialize the FirebaseUI Widget using Firebase.
const ui = new firebaseui.auth.AuthUI(firebase.auth());

const uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById('loader').style.display = 'none';
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: "/crush",
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    {
      provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      recaptchaParameters: {
        type: 'image', // 'audio'
        size: 'normal', // 'invisible' or 'compact'
        badge: 'bottomleft' //' bottomright' or 'inline' applies to invisible.
      },
      defaultCountry: 'IN' // Set default country to the India (+91).
      // For prefilling the national number, set defaultNationNumber.
      // This will only be observed if only phone Auth provider is used since
      // for multiple providers, the NASCAR screen will always render first
      // with a 'sign in with phone number' button.
    },
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
      // Allow the user the ability to complete sign-in cross device,
      // including the mobile apps specified in the ActionCodeSettings
      // object below.
      forceSameDevice: false,
      // Used to define the optional firebase.auth.ActionCodeSettings if
      // additional state needs to be passed along request and whether to open
      // the link in a mobile app if it is installed.
      emailLinkSignIn: function() {
        return {
          // Additional state showPromo=1234 can be retrieved from URL on
          // sign-in completion in signInSuccess callback by checking
          // window.location.href.
          //url: 'https://www.example.com/completeSignIn?showPromo=1234',
          // Custom FDL domain.
          dynamicLinkDomain: 'https://realmofrich.com/#popup1',
          // Always true for email link sign-in.
          handleCodeInApp: true,
          // Whether to handle link in iOS app if installed.
          //iOS: {
          //  bundleId: 'com.example.ios'
          //},
          // Whether to handle link in Android app if opened in an Android
          // device.
          android: {
            packageName: 'com.realmofrich.realmofrich',
            installApp: true,
            minimumVersion: '23'
          }
        };
      }
    },
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID
    
  ],
  // Terms of service url.
  //tosUrl: '/termsofservice',
  // Privacy policy url.
  //privacyPolicyUrl: '/privacypolicy'
};

ui.start('#auth-options', uiConfig);

let user = {};

function App() {
  const user = useAuthState(auth);
  // Is there an email link sign-in?
if (ui.isPendingRedirect()) {
  ui.start('#auth-options', uiConfig);
}


  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path = "/crush">
            {user ? <Loading/> : <Frontpage/>}
            </Route>
            <Route exact path = "/">
            {/*{user ? <Loading /> : <Frontpage/>}*/}
            <Frontpage/>
            </Route>
            <Route exact path = "/Home">
            <Home/>
            </Route>

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export function Setlogout(){
  auth.signOut();
  
}
export function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      <p>Do not violate the community guidelines or you will be banned for life!</p>
    </>
  )

}

export function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}

export function ChatRoom(){
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt');

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');

  useEffect(() => {
    dummy.current.scrollIntoView({ behavior: 'smooth' });

  });


  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  {/*
    React.useEffect(() => {
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }, [error]);
*/}

function ChatMessage(props){
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
      <img className ="profilepic" src={photoURL || './1111.jpg'} />
      <p>{text}</p>
    </div>
  </>)
}

  return (
    <div className="chatbonegrid">
      <main>

        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={dummy}></span>

      </main>

      <div className="inputbox">
        <form className="chatform" onSubmit={sendMessage}>

          <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

          <button type="submit" disabled={!formValue}>🕊️</button>

        </form>
      </div>
    </div>
  )
}




/*



// Firebase App (the core Firebase SDK) is always required and must be listed first






















/*function Chatroom(){
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limited(50);

  const [messages] = useCollectionData(query, {idField: 'id'});
  return(
      <div>
          {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
      </div>
  );
}*/
/*
function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      <p>Do not violate the community guidelines or you will be banned for life!</p>
    </>
  )

}

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <main>

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>

    <form onSubmit={sendMessage}>

      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

      <button type="submit" disabled={!formValue}>🕊️</button>

    </form>
  </>)
}

/*function ChatMessage(props) {
  useEffect(() => {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';


  return (
  <>
    <div className={`message ${messageClass}`}>
      <img src={photoURL || './1111.jpg'} />
      <p>{text}</p>
    </div>
  </>
  );
});
}*/
/*
function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
      <img src={photoURL || './1111.jpg'} />
      <p>{text}</p>
    </div>
  </>)
}

/*
*/


export default App;
