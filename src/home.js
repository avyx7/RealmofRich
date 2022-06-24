import { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import './home.css';
import EducationHome from "./educationHome";
import './educationHome.css';
import GameFinances from './game-finances';
import firebase from "firebase/app";
import 'firebase/auth';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state={
        sidebar: true
    };
  }

 showSidebar = ()=> this.setState({sidebar: !(this.state.sidebar)});



 


  render(){
    if (!user){
      return <div>auth.currentUser is null</div>;
  }
  else{

    return (
      <div>
        <div className ="home-container">

            <div className="SideNav">
              
              <Link className="" to ="#">
                <img src = "IMG_1019.jpg" onClick= {this.showSidebar} />
              </Link>
            
          
          <nav className = {this.state.sidebar? 'nav-menu active': 'nav-menu'}>
            <ul className = 'nav-menu-items'>
              <li className = 'navbar-toggle'>
                <Link className = "" to = "#">Close</Link>
              </li>
              <li className = ''>
                <Link to = "/Home">
                  <div className = "navicon friendship"></div>
                  <div className = "nav-text">Home</div>
                </Link>
              </li>
              <li className = ''>
                <Link to = "/GameFinances">
                <div className = "navicon coin"></div>
                <div className = "nav-text">Game & Finances</div>
                </Link>
              </li>
              <li className = ''>
                <Link to = "Education">
                  <div className = "navicon trophy"></div>
                  <div className = "nav-text">Education</div>
                </Link>
              </li>
            </ul>
          </nav>
          </div>
            <Router>
              <Switch>
                <Route exact path="/Home" component={EducationHome} />
                <Route exact path="/GameFinances" component={GameFinances} />
                <Route exact path="/Education" component={EducationHome} />

              </Switch>
            </Router>

          

          <div className="mobile-menu">
            <nav className = "mobile-nav">
              <ul className = 'mobile-menu-items'>

                <li className = 'li-home'>
                  <Link to = "/Home">
                    <div className = "navicon friendship"></div>
 
                  </Link>
                </li>
                <li className = 'li-game-finances'>
                  <Link to = "/GameFinances">
                  <div className = "navicon coin"></div>

                  </Link>
                </li>
                <li className = 'li-education'>
                  <Link to = "/Education">
                    <div className = "navicon trophy"></div>

                  </Link>
                </li>
              </ul>
            </nav>
          </div>

        </div>

        
      </div>
    );
  }
  }
}

()=>{
firebase.auth().onAuthStateChanged(function(user) {
  if (!user) {

    // No user is signed in.
    <Redirect false to='/' component = {Frontpage}/>
  }
  });
}
  export default Home;