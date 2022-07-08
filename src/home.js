import { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
import './home.css';
import EducationHome from "./educationHome";
import './educationHome.css';
import Pepper from './pepper';
import Realm from './realm';
import firebase from "firebase/app";
import 'firebase/auth';

function Home() {



    let c = useParams();

    return (
      <>
        
        <div className ="home-container">

            <div className="SideNav">
              
              <Link className="" to ="#">
                <img src = "IMG_1019.jpg" />
              </Link>
            
          
          <nav className = {true? 'nav-menu active': 'nav-menu'}>
            <ul className = 'nav-menu-items'>

              <li className = ''>
                <Link to = "/home">
                  <div className = "navicon friendship"></div>
                  <div className = "nav-text">Home</div>
                </Link>
              </li>
              <li className = ''>
                <Link to = "/realm">
                <div className = "navicon coin"></div>
                <div className = "nav-text">Realm</div>
                </Link>
              </li>
              <li className = ''>
                <Link to = "education">
                  <div className = "navicon trophy"></div>
                  <div className = "nav-text">Education</div>
                </Link>
              </li>
            </ul>
          </nav>
          </div>
          {
            /*
            <Router>
              <Switch>
              <Route exact path="/education" component={EducationHome} />
                <Route exact path="/home" component={Pepper} />
                <Route exact path="/realm" component={Realm} />

              </Switch>
            </Router>
            */
          }
            
          {c=="home"? <Pepper/> : c=="realm"? <Realm/> : <EducationHome/> }
          

          <div className="mobile-menu">
            <nav className = "mobile-nav">
              <ul className = 'mobile-menu-items'>

                <li className = 'li-home'>
                  <Link to = "/home">
                    <div className = "navicon friendship"></div>
 
                  </Link>
                </li>
                <li className = 'li-game-finances'>
                  <Link to = "/realm">
                  <div className = "navicon coin"></div>

                  </Link>
                </li>
                <li className = 'li-education'>
                  <Link to = "/education">
                    <div className = "navicon trophy"></div>

                  </Link>
                </li>
              </ul>
            </nav>
          </div>

        </div>

        
      </>
    );


}

  export default Home;