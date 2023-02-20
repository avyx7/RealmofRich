import React, { useState, useEffect } from 'react';
import {Routes, Route, Navigate, } from "react-router-dom";
import './assets/app.css';
import Frontpage from "./frontpage/frontpage";
import Loading from "./loading";import NotLoading from "./notLoading";


import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/analytics';

import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

import Home from './pages/home';
import {firebaseConfig} from './firebaselock';
import Pepper from './pages/pepper';
import Realm from './pages/realm';
import EducationHome from './pages/educationHome';
import Profile from './pages/profile';

import Privacy from "./frontpage/privacypolicy";
import CompanyInformation from "./frontpage/companyinfo";
import Jobs from "./frontpage/jobs";
import Account from "./frontpage/account";
import Termsofservice from "./frontpage/termsofservice";
import Cookie from "./frontpage/cookie";
import Faq from "./frontpage/faq";
import userEvent from '@testing-library/user-event';
import LandingEducation from './frontpage/landingEducationPage';

import { useCookies } from 'react-cookie';
import Peeps from './components/pepper/Peeps';
import ViewPepper from './components/pepper/ViewPepper';

export const realm = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const database = firebase.database();
export const analytics = firebase.analytics();

// Initialize the FirebaseUI Widget using Firebase.
export const ui = new firebaseui.auth.AuthUI(firebase.auth());

export const uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return false;
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById('loader').style.display = 'none';
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: "/home",
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
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      scopes: [
        'https://www.googleapis.com/auth/contacts.readonly'
      ],
      customParameters: {
        // Forces account selection even when one account
        // is available.
        prompt: 'select_account'
      }
    },
    {
      provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      scopes: [
        'public_profile',
        'email',
        'user_likes',
        'user_friends'
      ]
    },
    firebase.auth.TwitterAuthProvider.PROVIDER_ID
    
  ],
  // Terms of service url.
  //tosUrl: '/termsofservice',
  // Privacy policy url.
  //privacyPolicyUrl: '/privacypolicy'
};



function App() {

  const [uservar, setuservar] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(['']);

  useEffect(() => {

    // Is there an email link sign-in?
    if (ui.isPendingRedirect()) {
      ui.start('#auth-options', uiConfig);
    }

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        setuservar(user);
        setCookie('repeatUser', true, {secure: true});

      } else {
        // No user is signed in.
        setuservar("");
      }
      });
  });


  return (
    <div className="App">
      <Routes>
          <Route element = {cookies.repeatUser && (!uservar ? <Loading/> : <NotLoading/>)}>
            {/*<Route element = {cookies.repeatUser && (!uservar && <Loading/> )}>*/}
            {/*<Route element = {true && (true && <Loading/> )}>*/}
              <Route exact path = "/" element = {uservar ? <Navigate to="/home" /> : <Frontpage/>}>
                </Route>
              <Route element = {uservar ? <Home uservar = {uservar}/> : <Navigate to="/" />}>
                <Route path = "/home" element = {<Pepper/>}>
                  {/*<Route path = "/user" element = {<Realm/>} />*/}
                  <Route index element = {<Peeps/>} />
                  <Route path = "post">
                    <Route index element = {<Peeps/>} />
                    <Route path = ":postId" element = {<ViewPepper/>} />
                  </Route>
                </Route>

                

                <Route path = "/realm" element = {<Realm/>}>
                  {/*<Route path = "/user" element = {<Realm/>} />*/}
                </Route>

                <Route path = "/education" element = {<EducationHome/>}>
                </Route>

                <Route path = "/profile" element = {<Profile/>}>
                </Route>
              </Route>
            </Route>
            {/*<Route path = "*" element = {<NotFound/>} /> */}
            <Route path = "/privacypolicy" element = {<Privacy/>}>
            </Route>
            <Route path = "/companyinfo" element = {<CompanyInformation/>}>
            </Route>
            <Route path = "/jobs" element = {<Jobs/>}>
            </Route>
            <Route path = "/account" element = {<Account/>}>
            </Route>
            <Route path = "/termsofservice" element = {<Termsofservice/>}>
            </Route>
            <Route path = "/cookie" element = {<Cookie/>}>
            </Route>
            <Route path = "/faq" element = {<Faq/>}>
            </Route>
            <Route path = "/landingpage" element = {<LandingEducation/>}>
            </Route>


      </Routes>
    </div>
  );
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
