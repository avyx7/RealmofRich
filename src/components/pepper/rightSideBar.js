import React from 'react';
import style from './pepper.module.css';
import weddingicon from "../../assets/icons/001-wedding-ring.png";import jobicon from "../../assets/icons/002-notebook.png";

function RightSideBar() {
  return (
    <div className={style.pepperSideBar}>
      <div className={style.changelayout}>
          <div className={style.layoutcontainer}>
            <div className={style.matrimony}><img className={style.matrimonyicon} src = {weddingicon} /></div>
          
            <div className={style.jobs}><img className={style.jobicon} src = {jobicon}/></div>

            </div>
        </div>
      <div className={style.pepperSideBarContainer}>
        <div className={style.firstSideBar}>
          <div className={style.searchBarpepper}>
            <input id={style.searchQueryInputpepper} type="text" name="searchQueryInputrealm" placeholder="Search for People, Group, Services" value="" />
            <button id={style.searchQuerySubmit} type="submit" name="searchQuerySubmit">
                          <svg className='searchicon' viewBox="0 0 24 24"><path fill="#666666" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                          </svg>
            </button>
          </div>
          <div className={style.firstSideBarcontent}>
            <div className={style.whatshappening}>
              Whats's happening
            </div>

          </div>
          
        </div>
        <div className={style.secondSideBar}>
          <div className={style.secondSideBarcontent}>
            <div className={style.whatshappening}>
              Who to follow
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default RightSideBar;