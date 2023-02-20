import React from 'react';
import style from "../assets/profile.module.css";
import { auth } from '../App';
import weddingicon from "../assets/icons/001-wedding-ring.png";import jobicon from "../assets/icons/002-notebook.png";

function Profile() {
  const {photoURL } = auth.currentUser;
  return (
    <div className={style.profilecontainer}>
      <div className={style.profileheader}>

      <input type="search" id={style.profilesearch} name="psearch" placeholder='Search for people, guilds, service'></input>
      </div>
      <div className={style.profilesecondheader}>
        <div className={style.matrimonycontainer}>
          <div className={style.matrimony}><img className={style.matrimonyicon} src = {weddingicon} /></div>
        </div>
        <div className={style.leaderprofilepiccontainer}>
          <div className={style.leaderprofilepic} id = {style.profile_leaderprofilepic}><img src = {photoURL || "../icons/profilepic-min.png"} /></div>
        </div>
        <div className={style.jobscontainer}>
          <div className={style.jobs}><img className={style.jobicon} src = {jobicon}/></div>
        </div>
        
      </div>
      <div className={style.profilethirdheader}>
        <div className={style.profilename}>Monkey</div>
        <div className={style.profileid}>@monkey1234</div>
      </div>

      <div className={style.recentvisitors}>
        Recent visitors
      </div>

      <div className={style.devices}>
        Devices running your account
      </div>

      <div>
        <div className={style.title}>
        You must never lose access to your RealmofRich account
          <div className={style.secondtitle}>Connect to all the ways of logging in </div>
        </div>

        <div class={style.petalholder}>
          <div className={`${style.petal} ${style.petal1}`}></div>
          <div className={`${style.petal} ${style.petal2}`}></div>
          <div className={`${style.petal} ${style.petal3}`}></div>
          <div className={`${style.petal} ${style.petal4}`}></div>
          <div className={`${style.petal} ${style.petal5}`}></div>
          <div className={`${style.petal} ${style.petal6}`}></div>
          <div className={`${style.petal} ${style.petal7}`}></div>
          <div className={`${style.petal} ${style.petal8}`}></div>
        </div>
      </div>

      <div className={style.manageguilds}>
        Manage Guilds

      </div>

    </div>
  )
}

export default Profile