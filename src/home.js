import { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
import './home.css';
import EducationHome from "./educationHome";
import './educationHome.css';
import Pepper from './components/pepper/pepper';
import Realm from './components/realm/realm';
import firebase from "firebase/app";
import 'firebase/auth';

function Home() {



    let {c} = useParams();

    return (
      <>
        
        <div className ="home-container" id = {c=="home"? '':'homecontainermin'}>
        {/*<h3>ID: {c}</h3>*/}
            <div className="SideNav" id = {c=="home"? 'SideNavmin' : ''}>
              
              <Link className="" to ="#">
                <img className = {c=="home"? '': "RORlogo"} src = {c=="home"? "IMG_1019.JPG": "291105576.png"} />
              </Link>
            
          

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
                    <Link to = "/education">
                      <div className = "navicon trophy"></div>
                      <div className = "nav-text">Education</div>
                    </Link>
                  </li>
                </ul>

          </div>


           {/* <Router>
              <Switch>
              <Route exact path="/education"  />
                <Route exact path="/home}" />
                <Route exact path="/realm" />

              </Switch>
            </Router>*/}

          <div className='homegrid'>
            {c=="home"? <Pepper/> : c=="realm"? <Realm/> : <EducationHome/> }
          </div>
          

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