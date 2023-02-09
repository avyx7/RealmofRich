import './assets/home.css';
{/*}
import { Navigate } from "react-router-dom";

import firebase from "firebase/app";
import Home from "./pages/home";
import Frontpage from "./frontpage/frontpage";
*/}


function Loading() {


  {/*firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      <Navigate false to='/Home' component = {Home}/>
    } else {
      // No user is signed in.
      <Navigate false to='/' component = {Frontpage}/>
    }
    });*/}
    
    return(
      <div className="LoadingScreengrid">
        <div className='title'>
            REALM OF RICH
        </div>

    </div>
    );

}


  export default Loading;