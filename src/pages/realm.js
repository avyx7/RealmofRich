import React from 'react';
import style from "../components/realm/realm.module.css";
import might from "../components/realm/268804790.png";
import gem from "../components/realm/2702378245.png";
import star from "../components/realm/star.png";
import shieldIcon from "../components/realm/005-protection.png";import plus from "../components/realm/005-plus 1.png";
import hotballoon from "../components/realm/011-hot-air-balloon.png";
import guildcoins from "../components/realm/IMG_17875.png";import bank from "../components/realm/010-bank.png";
import guildchat from "../components/realm/013-bubble-speech.png";import shop from "../components/realm/shop.png";

import food from "../components/realm/food/016-wheat.png";import wood from "../components/realm/food/020-wood-2.png";
import elixir from "../components/realm/food/003-potion.png";import gold from "../components/realm/food/001-star.png";
import coins from "../components/realm/food/IMG_17875.png";

import flag from "../components/realm/bottom/011-flag.png";import email from "../components/realm/bottom/015-email.png";
import trophy from "../components/realm/bottom/014-holy-grail-1.png";import bag from "../components/realm/bottom/010-backpack.png";


import map from "../components/realm/014-africa.png";import timeline from "../components/realm/015-timeline.png";


export default function Realm() {
  return (
    <div className={style.RealmContainer}>
        <div className={style.playerStats}>
          <div className={style.might}>
            <div className={style.mightPlaceholder}>Might</div>
            <img className={style.mightIcon} src ={might} />
            <div className={style.mightValue}>155,000</div>
          </div>
          <div className={style.belowmightcontainer}>
            <div className={style.leader}>
              <div className={style.leaderRectangle}>
                Leader
                <div className={style.leaderLevel}>
                  60
                </div>
              </div>

            </div>
            <div className={style.extrastatscontainer}>
            <div className={style.gems}>
              <img className={style.gemIcon} src={gem}/>
              <div className={style.gemLevel}>
                155k
              </div>

            </div>
            <div className={style.exp}>
              <img className={style.expIcon} src={star}/>
              <div className={style.expLevel}>
                26/278
              </div>

            </div>
            <div className={style.vipLevel}>
              <div className={style.vipLevel1}>
                  VIP Level 15
                </div>

            </div>
            </div>
          </div>

        </div>
        <div className={style.searchBarrealm}>
          <input id={style.searchQueryInputrealm} type="text" name="searchQueryInputrealm" placeholder="Search for People, Group, Services" value="" />
          <button id={style.searchQuerySubmit} type="submit" name="searchQuerySubmit">
                        <svg className='searchicon' viewBox="0 0 24 24"><path fill="#666666" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                        </svg>
                        </button>
          
        </div>
        <div className={style.shield}>
          <div className={style.shieldRectangle}>
            <img className={style.protectionIcon} src = {shieldIcon} />
            <div className={style.shieldTime}>
              2 Days
            </div>
            
            <img className={style.addProtectionIcon} src = {plus} />
          </div>
          
        </div>
        <div className={style.status}>
          <img className='' src = {hotballoon} />
        </div>
        

      <div className={style.leftContainer}>
        <div className={style.guildCoins}>
          <img className='' src ={guildcoins} />
        </div>
        <div className={style.bank}>
          <img className='' src ={bank} />
        </div>
        <div className={style.guildChat}>
          <img className='' src ={guildchat} />
        </div>
        <div className={style.shop}>
          <img className='' src ={shop} />
        </div>
      </div>
      <div className={style.rightContainer}>
        <div className={style.resourcesLevel}>
          <div className={style.foodLevelContainer}>
            <div className={style.foodLevel}>
            </div>
              <img className={style.foodicon} src = {food} />
              <div className={style.foodLevelNumber}>
                13.1M
              </div>
          </div>
          <div className={style.woodLevelContainer}>
            <div className={style.woodLevel}>
            </div>
              <img className={style.woodicon} src = {wood} />
              <div className={style.woodLevelNumber}>
                8.73M
              </div>
          </div>
          <div className={style.elixirLevelContainer}>
            <div className={style.elixirLevel}>
            </div>
              <img className={style.elixiricon} src = {elixir} />
              <div className={style.elixirLevelNumber}>
                8.2M
              </div>
          </div>
          <div className={style.goldLevelContainer}>
            <div className={style.goldLevel}>
            </div>
              <img className={style.goldicon} src = {gold} />
              <div className={style.goldLevelNumber}>
                1.45M
              </div>
          </div>
          <div className={style.guildCoinsLevelContainer}>
            <div className={style.guildCoinsLevel}>
            </div>
              <img className={style.guildCoinsicon} src = {coins} />
              <div className={style.guildCoinsLevelNumber}>
                1.45M
              </div>
          </div>
        </div>
        <div className={style.iconsGroup}>
          <div className={style.map}>
            <img className='' src ={map} />
          </div>
          <div className={style.timeline}>
            <img className='' src ={timeline} />
          </div>
        </div>
      </div>
      <div className={style.bottomContainer}>
        <img className='' src={flag}/>
        <img className='' src={email} />
        <img className='' src={trophy} />
        <img className='' src={bag} />
      </div>
    </div>
  )
}
