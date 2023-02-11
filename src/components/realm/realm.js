import React from 'react';
import "./realm.css";
import might from "./268804790.png";
import gem from "./2702378245.png";
import star from "./star.png";
import shieldIcon from "./005-protection.png";import plus from "./005-plus 1.png";
import hotballoon from "./011-hot-air-balloon.png";
import guildcoins from "./IMG_17875.png";import bank from "./010-bank.png";
import guildchat from "./013-bubble-speech.png";import shop from "./shop.png";

import food from "./food/016-wheat.png";import wood from "./food/020-wood-2.png";
import elixir from "./food/003-potion.png";import gold from "./food/001-star.png";
import coins from "./food/IMG_17875.png";

import flag from "./bottom/011-flag.png";import email from "./bottom/015-email.png";
import trophy from "./bottom/014-holy-grail-1.png";import bag from "./bottom/010-backpack.png";


import map from "./014-africa.png";import timeline from "./015-timeline.png";


export default function Realm() {
  return (
    <div className='RealmContainer'>
        <div className='playerStats'>
          <div className='might'>
            <div className='mightPlaceholder'>Might</div>
            <img className='mightIcon'src ={might} />
            <div className='mightValue'>155,000</div>
          </div>
          <div className='belowmightcontainer'>
            <div className='leader'>
              <div className='leaderRectangle'>
                Leader
                <div className='leaderLevel'>
                  60
                </div>
              </div>

            </div>
            <div className='extrastatscontainer'>
            <div className='gems'>
              <img className='gemIcon' src={gem}/>
              <div className='gemLevel'>
                155k
              </div>

            </div>
            <div className='exp'>
              <img className='expIcon' src={star}/>
              <div className='expLevel'>
                26/278
              </div>

            </div>
            <div className='vipLevel'>
              <div className='vipLevel1'>
                  VIP Level 15
                </div>

            </div>
            </div>
          </div>

        </div>
        <div className='searchBar'>
          <input id="searchQueryInput" type="text" name="searchQueryInput" placeholder="Search for People, Group, Services" value="" />
          <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit">
                        <svg className="searchicon" viewBox="0 0 24 24"><path fill="#666666" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                        </svg>
                        </button>
          
        </div>
        <div className='shield'>
          <div className='shieldRectangle'>
            <img className='protectionIcon' src = {shieldIcon} />
            <div className='shieldTime'>
              2 Days
            </div>
            
            <img className='addProtectionIcon' src = {plus} />
          </div>
          
        </div>
        <div className='status'>
          <img className='' src = {hotballoon} />
        </div>
        

      <div className='leftContainer'>
        <div className='guildCoins'>
          <img className='' src ={guildcoins} />
        </div>
        <div className='bank'>
          <img className='' src ={bank} />
        </div>
        <div className='guildChat'>
          <img className='' src ={guildchat} />
        </div>
        <div className='shop'>
          <img className='' src ={shop} />
        </div>
      </div>
      <div className='rightContainer'>
        <div className='resourcesLevel'>
          <div className='foodLevelContainer'>
            <div className='foodLevel'>
            </div>
              <img className='foodicon' src = {food} />
              <div className='foodLevelNumber'>
                13.1M
              </div>
          </div>
          <div className='woodLevelContainer'>
            <div className='woodLevel'>
            </div>
              <img className='woodicon' src = {wood} />
              <div className='woodLevelNumber'>
                8.73M
              </div>
          </div>
          <div className='elixirLevelContainer'>
            <div className='elixirLevel'>
            </div>
              <img className='elixiricon' src = {elixir} />
              <div className='elixirLevelNumber'>
                8.2M
              </div>
          </div>
          <div className='goldLevelContainer'>
            <div className='goldLevel'>
            </div>
              <img className='goldicon' src = {gold} />
              <div className='goldLevelNumber'>
                1.45M
              </div>
          </div>
          <div className='guildCoinsLevelContainer'>
            <div className='guildCoinsLevel'>
            </div>
              <img className='guildCoinsicon' src = {coins} />
              <div className='guildCoinsLevelNumber'>
                1.45M
              </div>
          </div>
        </div>
        <div className='iconsGroup'>
          <div className='map'>
            <img className='' src ={map} />
          </div>
          <div className='timeline'>
            <img className='' src ={timeline} />
          </div>
        </div>
      </div>
      <div className='bottomContainer'>
        <img className='' src={flag}/>
        <img className='' src={email} />
        <img className='' src={trophy} />
        <img className='' src={bag} />
      </div>
    </div>
  )
}
