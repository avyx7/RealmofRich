import { useState } from 'react';
import {Navigate, Link, useParams, Outlet } from 'react-router-dom';
import '../assets/home.css';
import EducationHome from "./educationHome";
import Pepper from './pepper';
import Realm from './realm';
import firebase from "firebase/app";
import 'firebase/auth';
import Frontpage from '../frontpage/frontpage';
import img from "../291105576.png";

function Home() {

    const [menuitem, setmenuitem] = useState("home");
    const c='';
    return (
      <>
        
        <div className ="home-container" id = {c=="home"? '':'homecontainermin'}>
        {/*<h3>ID: {c}</h3>*/}
            <div className="SideNav" id = {c=="home"? 'SideNavmin' : ''}>
              <div className='sidenavfixed'>
              <Link className="" to ="#">
                <img className = {c=="home"? '': "RORlogo"} src = {img} />
              </Link>
            
          

                <ul className = 'nav-menu-items'>

                  <li className = ''>
                    <Link to = "/home">
                      <div className = {"navicon friendship"+(menuitem == 'home' ? " menuitemactive":'')} onClick={()=>setmenuitem('home')} ></div>
                      <div className = "nav-text">Home</div>
                    </Link>
                  </li>
                  <li className = ''>
                    <Link to = "/realm">
                    <div className = {"navicon coin"+(menuitem == 'realm' ? " menuitemactive":'')} onClick={()=>setmenuitem('realm')} ></div>
                    <div className = "nav-text">Realm</div>
                    </Link>
                  </li>
                  <li className = ''>
                    <Link to = "/education">
                      <div className = {"navicon trophy"+(menuitem == 'education' ? " menuitemactive":'')} onClick={()=>setmenuitem('education')} ></div>
                      <div className = "nav-text">Education</div>
                    </Link>
                  </li>
                  <li className = ''>
                    <Link to = "/profile">
                      <div className = {"navicon shortlogo"+(menuitem == 'profile' ? " menuitemactive":'')} onClick={()=>setmenuitem('profile')} ></div>
                      <div className = "nav-text">Profile</div>
                    </Link>
                  </li>
                </ul>
            </div>
          </div>




          <div className='homegrid'>
            <Outlet />
            {/*{c=="home"? <Pepper/> : c=="realm"? <Realm/> : <EducationHome/> }
            
            <Routes>
              <Route exact path = "/home" element = {<Pepper/>}>
              </Route>
              <Route exact path = "/realm" element = {<h1>I am Realm</h1>}>
              </Route>
              <Route exact path = "/education" element = {<h1>I am Education</h1>}>
              </Route>
            </Routes>
            <Outlet/>
            */}
          </div>
          

          

        </div>
        <div className="mobile-menu">
            <nav className = "mobile-nav">
              <ul className = 'mobile-menu-items'>

                <li className = 'li-home' onClick={()=>setmenuitem('home')}>
                  <Link to = "/home">
                    <div className = {"navicon friendship"+(menuitem == 'home' ? " menuitemactive":'')} ></div>
 
                  </Link>
                </li>
                <li className = 'li-game-finances' onClick={()=>setmenuitem('realm')}>
                  <Link to = "/realm">
                  <div className = {"navicon coin"+(menuitem == 'realm' ? " menuitemactive":'')} ></div>

                  </Link>
                </li>
                <li className = 'li-education' onClick={()=>setmenuitem('education')}>
                  <Link to = "/education">
                    <div className = {"navicon trophy"+(menuitem == 'education' ? " menuitemactive":'')} ></div>

                  </Link>
                </li>
                <li className = 'li-profile' onClick={()=>setmenuitem('profile')}>
                  <Link to = "/profile">
                    <div className = {"navicon shortlogo"+(menuitem == 'profile' ? " menuitemactive":'')} ></div>

                  </Link>
                </li>
              </ul>
            </nav>
          </div>

        
      </>
    );


}

  export default Home;