import React from 'react';
import "../assets/profile.css";
import { auth } from '../App';

function Profile() {
  const {photoURL } = auth.currentUser;
  return (
    <div className='profilecontainer'>
      <div className='profileheader'>

      <input type="search" id="profilesearch" name="psearch" placeholder='Search for people, guilds, service'></input>
      </div>
      <div className='profilesecondheader'>
        <div className='jobscontainer'>
          <div className='jobs'><img className='jobicon' src = "../icons/profilepic-min.png" /></div>
        </div>
        <div className='leaderprofilepiccontainer'>
          <div className='leaderprofilepic' id = 'profile_leaderprofilepic'><img src = {photoURL || "../icons/profilepic-min.png"} /></div>
        </div>
        <div className='matrimonycontainer'>
          <div className='matrimony'><img className='matrimonyicon' src = "../icons/profilepic-min.png" /></div>
        </div>
        
      </div>
      <div className='profilethirdheader'>
        <div className='profilename'>Monkey</div>
        <div className='profileid'>@monkey1234</div>
      </div>
    </div>
  )
}

export default Profile