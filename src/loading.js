import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import firebase from "firebase/app";
import Home from "./home";
import Frontpage from "./frontpage";


function Loading() {


  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      <Redirect false to='/Home' component = {Home}/>
    } else {
      // No user is signed in.
      <Redirect false to='/' component = {Frontpage}/>
    }
    });
    
    return(
      <div>
      <Redirect false to='/Home' component = {Home}/>

    </div>
    );

}


  export default Loading;