import React from 'react';
import star from "../../assets/education/stargrey.png";import expstar from "../../assets/education/expstar.png";
import coin from "../../assets/education/IMG_17875.png"
import { auth } from '../../App';
import flag from "../../assets/icons/001-flag.png";import bonus from "../../assets/icons/002-bonus.png";
import trophy from "../../assets/icons/004-trophy.png";
import style from '../../assets/educationHome.module.css';

function Achievementmodal() {
    const styles = {
        completionlevelindicatorfill: {
          width: '1vw',
        }
      };
  return (
    <div className={style.achievementModalgrid}>
        <div className={style.achiementTasks}>
            <div className={style.stars}>
                <img className={style.star} id ={style.star1} src={star} />
                <img className={style.star} id ={style.star2} src={star} />
                <img className={style.star} id ={style.star3} src={star} />
            </div>
            <div className={style.tasks}>
                <div className={style.tasksheading}>
                    Get an Exp at local Bakery
                </div>
                <div className={style.tasksdescription}>
                    Work your hand at a local bakery
                </div>
                
            </div>
            <div className={style.completionlevel}>
                <div className={style.completionlevelindicator}>
                    <div className={style.completionlevelindicatorfill} style={styles.completionlevelindicatorfill}></div>
                </div>
                <div className={style.rewards}>
                    <span className={style.rewardtext}> Rewards:</span>
                    <div className={style.exprewards}>1000 x <img src = {expstar}/></div>
                    <div className={style.guildcoinsrewards}>20 x <img src = {coin}/></div>
                </div>
            </div>

        </div>

        <div className={style.achiementTasks}>
            <div className={style.stars}>
                <img className={style.star} id ={style.star1} src={star} />
                <img className={style.star} id ={style.star2} src={star} />
                <img className={style.star} id ={style.star3} src={star} />
            </div>
            <div className={style.tasks}>
                <div className={style.tasksheading}>
                    Get an Exp at local Bakery
                </div>
                <div className={style.tasksdescription}>
                    Work your hand at a local bakery
                </div>
                
            </div>
            <div className={style.completionlevel}>
                <div className={style.completionlevelindicator}>
                    <div className={style.completionlevelindicatorfill} style={styles.completionlevelindicatorfill}></div>
                </div>
                <div className={style.rewards}>
                    <span className={style.rewardtext}> Rewards:</span>
                    <div className={style.exprewards}>1000 x <img src = {expstar}/></div>
                    <div className={style.guildcoinsrewards}>20 x <img src = {coin}/></div>
                </div>
            </div>

        </div>

        <div className={style.achiementTasks}>
            <div className={style.stars}>
                <img className={style.star} id ={style.star1} src={star} />
                <img className={style.star} id ={style.star2} src={star} />
                <img className={style.star} id ={style.star3} src={star} />
            </div>
            <div className={style.tasks}>
                <div className={style.tasksheading}>
                    Get an Exp at local Bakery
                </div>
                <div className={style.tasksdescription}>
                    Work your hand at a local bakery
                </div>
                
            </div>
            <div className={style.completionlevel}>
                <div className={style.completionlevelindicator}>
                    <div className={style.completionlevelindicatorfill} style={styles.completionlevelindicatorfill}></div>
                </div>
                <div className={style.rewards}>
                    <span className={style.rewardtext}> Rewards:</span>
                    <div className={style.exprewards}>1000 x <img src = {expstar}/></div>
                    <div className={style.guildcoinsrewards}>20 x <img src = {coin}/></div>
                </div>
            </div>

        </div>

        <div className={style.achiementTasks}>
            <div className={style.stars}>
                <img className={style.star} id ={style.star1} src={star} />
                <img className={style.star} id ={style.star2} src={star} />
                <img className={style.star} id ={style.star3} src={star} />
            </div>
            <div className={style.tasks}>
                <div className={style.tasksheading}>
                    Get an Exp at local Bakery
                </div>
                <div className={style.tasksdescription}>
                    Work your hand at a local bakery
                </div>
                
            </div>
            <div className={style.completionlevel}>
                <div className={style.completionlevelindicator}>
                    <div className={style.completionlevelindicatorfill} style={styles.completionlevelindicatorfill}></div>
                </div>
                <div className={style.rewards}>
                    <span className={style.rewardtext}> Rewards:</span>
                    <div className={style.exprewards}>1000 x <img src = {expstar}/></div>
                    <div className={style.guildcoinsrewards}>20 x <img src = {coin}/></div>
                </div>
            </div>

        </div>

        <div className={style.achiementTasks}>
            <div className={style.stars}>
                <img className={style.star} id ={style.star1} src={star} />
                <img className={style.star} id ={style.star2} src={star} />
                <img className={style.star} id ={style.star3} src={star} />
            </div>
            <div className={style.tasks}>
                <div className={style.tasksheading}>
                    Get an Exp at local Bakery
                </div>
                <div className={style.tasksdescription}>
                    Work your hand at a local bakery
                </div>
                
            </div>
            <div className={style.completionlevel}>
                <div className={style.completionlevelindicator}>
                    <div className={style.completionlevelindicatorfill} style={styles.completionlevelindicatorfill}></div>
                </div>
                <div className={style.rewards}>
                    <span className={style.rewardtext}> Rewards:</span>
                    <div className={style.exprewards}>1000 x <img src = {expstar}/></div>
                    <div className={style.guildcoinsrewards}>20 x <img src = {coin}/></div>
                </div>
            </div>

        </div>

        <div className={style.achiementTasks}>
            <div className={style.stars}>
                <img className={style.star} id ={style.star1} src={star} />
                <img className={style.star} id ={style.star2} src={star} />
                <img className={style.star} id ={style.star3} src={star} />
            </div>
            <div className={style.tasks}>
                <div className={style.tasksheading}>
                    Get an Exp at local Bakery
                </div>
                <div className={style.tasksdescription}>
                    Work your hand at a local bakery
                </div>
                
            </div>
            <div className={style.completionlevel}>
                <div className={style.completionlevelindicator}>
                    <div className={style.completionlevelindicatorfill} style={styles.completionlevelindicatorfill}></div>
                </div>
                <div className={style.rewards}>
                    <span className={style.rewardtext}> Rewards:</span>
                    <div className={style.exprewards}>1000 x <img src = {expstar}/></div>
                    <div className={style.guildcoinsrewards}>20 x <img src = {coin}/></div>
                </div>
            </div>

        </div>

        <div className={style.achiementTasks}>
            <div className={style.stars}>
                <img className={style.star} id ={style.star1} src={star} />
                <img className={style.star} id ={style.star2} src={star} />
                <img className={style.star} id ={style.star3} src={star} />
            </div>
            <div className={style.tasks}>
                <div className={style.tasksheading}>
                    Get an Exp at local Bakery
                </div>
                <div className={style.tasksdescription}>
                    Work your hand at a local bakery
                </div>
                
            </div>
            <div className={style.completionlevel}>
                <div className={style.completionlevelindicator}>
                    <div className={style.completionlevelindicatorfill} style={styles.completionlevelindicatorfill}></div>
                </div>
                <div className={style.rewards}>
                    <span className={style.rewardtext}> Rewards:</span>
                    <div className={style.exprewards}>1000 x <img src = {expstar}/></div>
                    <div className={style.guildcoinsrewards}>20 x <img src = {coin}/></div>
                </div>
            </div>

        </div>

        <div className={style.achiementTasks}>
            <div className={style.stars}>
                <img className={style.star} id ={style.star1} src={star} />
                <img className={style.star} id ={style.star2} src={star} />
                <img className={style.star} id ={style.star3} src={star} />
            </div>
            <div className={style.tasks}>
                <div className={style.tasksheading}>
                    Get an Exp at local Bakery
                </div>
                <div className={style.tasksdescription}>
                    Work your hand at a local bakery
                </div>
                
            </div>
            <div className={style.completionlevel}>
                <div className={style.completionlevelindicator}>
                    <div className={style.completionlevelindicatorfill} style={styles.completionlevelindicatorfill}></div>
                </div>
                <div className={style.rewards}>
                    <span className={style.rewardtext}> Rewards:</span>
                    <div className={style.exprewards}>1000 x <img src = {expstar}/></div>
                    <div className={style.guildcoinsrewards}>20 x <img src = {coin}/></div>
                </div>
            </div>

        </div>

        <div className={style.achiementTasks}>
            <div className={style.stars}>
                <img className={style.star} id ={style.star1} src={star} />
                <img className={style.star} id ={style.star2} src={star} />
                <img className={style.star} id ={style.star3} src={star} />
            </div>
            <div className={style.tasks}>
                <div className={style.tasksheading}>
                    Get an Exp at local Bakery
                </div>
                <div className={style.tasksdescription}>
                    Work your hand at a local bakery
                </div>
                
            </div>
            <div className={style.completionlevel}>
                <div className={style.completionlevelindicator}>
                    <div className={style.completionlevelindicatorfill} style={styles.completionlevelindicatorfill}></div>
                </div>
                <div className={style.rewards}>
                    <span className={style.rewardtext}> Rewards:</span>
                    <div className={style.exprewards}>1000 x <img src = {expstar}/></div>
                    <div className={style.guildcoinsrewards}>20 x <img src = {coin}/></div>
                </div>
            </div>

        </div>
    </div>
  )
}


export function Leaderboard() {
    const {photoURL } = auth.currentUser;
  return (
    <div className={style.achievementModalgrid}>
        <div className={style.leaderboardslot}>
            <div className={style.numberedList}>
                <div className={style.number}>1</div>
                <div className={style.leaderprofilepic}><img src = {photoURL || "../icons/profilepic-min.png"} /></div>
            </div>
            <div className={style.milestone}>
                <img className='' src={flag} />
            </div>
            <div className={style.bonus}>
                <img className='' src={bonus} />
            </div>
            <div className={style.trophies}>
                <div className={style.trophyicon}>
                    <img className='' src={trophy} />
                </div>
                <div className={style.trophynumber}>
                    2256
                </div>
            </div>
        </div>

        <div className={style.leaderboardslot}>
            <div className={style.numberedList}>
                <div className={style.number}>1</div>
                <div className={style.leaderprofilepic}><img src = {photoURL || "../icons/profilepic-min.png"} /></div>
            </div>
            <div className={style.milestone}>
                <img className='' src={flag} />
            </div>
            <div className={style.bonus}>
                <img className='' src={bonus} />
            </div>
            <div className={style.trophies}>
                <div className={style.trophyicon}>
                    <img className='' src={trophy} />
                </div>
                <div className={style.trophynumber}>
                    2256
                </div>
            </div>
        </div>

        <div className={style.leaderboardslot}>
            <div className={style.numberedList}>
                <div className={style.number}>1</div>
                <div className={style.leaderprofilepic}><img src = {photoURL || "../icons/profilepic-min.png"} /></div>
            </div>
            <div className={style.milestone}>
                <img className='' src={flag} />
            </div>
            <div className={style.bonus}>
                <img className='' src={bonus} />
            </div>
            <div className={style.trophies}>
                <div className={style.trophyicon}>
                    <img className='' src={trophy} />
                </div>
                <div className={style.trophynumber}>
                    2256
                </div>
            </div>
        </div>

        <div className={style.leaderboardslot}>
            <div className={style.numberedList}>
                <div className={style.number}>1</div>
                <div className={style.leaderprofilepic}><img src = {photoURL || "../icons/profilepic-min.png"} /></div>
            </div>
            <div className={style.milestone}>
                <img className='' src={flag} />
            </div>
            <div className={style.bonus}>
                <img className='' src={bonus} />
            </div>
            <div className={style.trophies}>
                <div className={style.trophyicon}>
                    <img className='' src={trophy} />
                </div>
                <div className={style.trophynumber}>
                    2256
                </div>
            </div>
        </div>

        <div className={style.leaderboardslot}>
            <div className={style.numberedList}>
                <div className={style.number}>1</div>
                <div className={style.leaderprofilepic}><img src = {photoURL || "../icons/profilepic-min.png"} /></div>
            </div>
            <div className={style.milestone}>
                <img className='' src={flag} />
            </div>
            <div className={style.bonus}>
                <img className='' src={bonus} />
            </div>
            <div className={style.trophies}>
                <div className={style.trophyicon}>
                    <img className='' src={trophy} />
                </div>
                <div className={style.trophynumber}>
                    2256
                </div>
            </div>
        </div>

        <div className={style.leaderboardslot}>
            <div className={style.numberedList}>
                <div className={style.number}>1</div>
                <div className={style.leaderprofilepic}><img src = {photoURL || "../icons/profilepic-min.png"} /></div>
            </div>
            <div className={style.milestone}>
                <img className='' src={flag} />
            </div>
            <div className={style.bonus}>
                <img className='' src={bonus} />
            </div>
            <div className={style.trophies}>
                <div className={style.trophyicon}>
                    <img className='' src={trophy} />
                </div>
                <div className={style.trophynumber}>
                    2256
                </div>
            </div>
        </div>

        <div className={style.leaderboardslot}>
            <div className={style.numberedList}>
                <div className={style.number}>1</div>
                <div className={style.leaderprofilepic}><img src = {photoURL || "../icons/profilepic-min.png"} /></div>
            </div>
            <div className={style.milestone}>
                <img className='' src={flag} />
            </div>
            <div className={style.bonus}>
                <img className='' src={bonus} />
            </div>
            <div className={style.trophies}>
                <div className={style.trophyicon}>
                    <img className='' src={trophy} />
                </div>
                <div className={style.trophynumber}>
                    2256
                </div>
            </div>
        </div>

        <div className={style.leaderboardslot}>
            <div className={style.numberedList}>
                <div className={style.number}>1</div>
                <div className={style.leaderprofilepic}><img src = {photoURL || "../icons/profilepic-min.png"} /></div>
            </div>
            <div className={style.milestone}>
                <img className='' src={flag} />
            </div>
            <div className={style.bonus}>
                <img className='' src={bonus} />
            </div>
            <div className={style.trophies}>
                <div className={style.trophyicon}>
                    <img className='' src={trophy} />
                </div>
                <div className={style.trophynumber}>
                    2256
                </div>
            </div>
        </div>

        
    </div>
  )
}


export function CreateGuild() {
    
  return (
    <>
    <div className={style.createguildhead}>Create your own guild</div>

    {/*<label for="guildsearch">Search for Guild</label>*/}
    <input type="search" id={style.guildsearch} name="gsearch" placeholder='Search for Guild'></input>
    <div className={style.createguildinternal}>

    </div>
    </>
  )
}

export function MyGuilds() {
  return (
    <div className={style.achievementModalgrid}>
        <div className={style.guildsList}>
            <div className={style.castleicon}></div>
            <div className={style.guildname}>DrSoumya's Guild</div>
            <div className={style.members}>
                <div className={style.membersprop}>Members:</div>
                26/30
            </div>
            <div className={style.publicprivate}>Public</div>
        </div>
        <div className={style.guildsList}>
            <div className={style.castleicon}></div>
            <div className={style.guildname}>DrSoumya's Guild</div>
            <div className={style.members}>
                <div className={style.membersprop}>Members:</div>
                26/30
            </div>
            <div className={style.publicprivate}>Public</div>
        </div>
        <div className={style.guildsList}>
            <div className={style.castleicon}></div>
            <div className={style.guildname}>DrSoumya's Guild</div>
            <div className={style.members}>
                <div className={style.membersprop}>Members:</div>
                26/30
            </div>
            <div className={style.publicprivate}>Public</div>
        </div>
        <div className={style.guildsList}>
            <div className={style.castleicon}></div>
            <div className={style.guildname}>DrSoumya's Guild</div>
            <div className={style.members}>
                <div className={style.membersprop}>Members:</div>
                26/30
            </div>
            <div className={style.publicprivate}>Public</div>
        </div>
        <div className={style.guildsList}>
            <div className={style.castleicon}></div>
            <div className={style.guildname}>DrSoumya's Guild</div>
            <div className={style.members}>
                <div className={style.membersprop}>Members:</div>
                26/30
            </div>
            <div className={style.publicprivate}>Public</div>
        </div>
        <div className={style.guildsList}>
            <div className={style.castleicon}></div>
            <div className={style.guildname}>DrSoumya's Guild</div>
            <div className={style.members}>
                <div className={style.membersprop}>Members:</div>
                26/30
            </div>
            <div className={style.publicprivate}>Public</div>
        </div>
        <div className={style.guildsList}>
            <div className={style.castleicon}></div>
            <div className={style.guildname}>DrSoumya's Guild</div>
            <div className={style.members}>
                <div className={style.membersprop}>Members:</div>
                26/30
            </div>
            <div className={style.publicprivate}>Public</div>
        </div>

        
    </div>
  )
}

export function Friends() {
  return (
    <div className={style.achievementModalgrid}>
        <div className={style.FriendsList}>
            <div className={style.leaderprofilepic}><img src = {"../icons/profilepic-min.png"} /></div>
            <div className={style.personname}>
                Soumya Dutta
            </div>
            <div className={style.mighte}>
                <div className={style.mightprop}>might:</div>
                80k
            </div>
            <div className={style.trophies}>
                <div className={style.trophyicon}>
                    <img className='' src={trophy} />
                </div>
                <div className={style.trophynumber}>
                    2256
                </div>
            </div>
        </div>
        <div className={style.FriendsList}>
            <div className={style.leaderprofilepic}><img src = {"../icons/profilepic-min.png"} /></div>
            <div className={style.personname}>
                Soumya Dutta
            </div>
            <div className={style.mighte}>
                <div className={style.mightprop}>might:</div>
                80k
            </div>
            <div className={style.trophies}>
                <div className={style.trophyicon}>
                    <img className='' src={trophy} />
                </div>
                <div className={style.trophynumber}>
                    2256
                </div>
            </div>
        </div><div className={style.FriendsList}>
            <div className={style.leaderprofilepic}><img src = {"../icons/profilepic-min.png"} /></div>
            <div className={style.personname}>
                Soumya Dutta
            </div>
            <div className={style.mighte}>
                <div className={style.mightprop}>might:</div>
                80k
            </div>
            <div className={style.trophies}>
                <div className={style.trophyicon}>
                    <img className='' src={trophy} />
                </div>
                <div className={style.trophynumber}>
                    2256
                </div>
            </div>
        </div><div className={style.FriendsList}>
            <div className={style.leaderprofilepic}><img src = {"../icons/profilepic-min.png"} /></div>
            <div className={style.personname}>
                Soumya Dutta
            </div>
            <div className={style.mighte}>
                <div className={style.mightprop}>might:</div>
                80k
            </div>
            <div className={style.trophies}>
                <div className={style.trophyicon}>
                    <img className='' src={trophy} />
                </div>
                <div className={style.trophynumber}>
                    2256
                </div>
            </div>
        </div><div className={style.FriendsList}>
            <div className={style.leaderprofilepic}><img src = {"../icons/profilepic-min.png"} /></div>
            <div className={style.personname}>
                Soumya Dutta
            </div>
            <div className={style.mighte}>
                <div className={style.mightprop}>might:</div>
                80k
            </div>
            <div className={style.trophies}>
                <div className={style.trophyicon}>
                    <img className='' src={trophy} />
                </div>
                <div className={style.trophynumber}>
                    2256
                </div>
            </div>
        </div><div className={style.FriendsList}>
            <div className={style.leaderprofilepic}><img src = {"../icons/profilepic-min.png"} /></div>
            <div className={style.personname}>
                Soumya Dutta
            </div>
            <div className={style.mighte}>
                <div className={style.mightprop}>might:</div>
                80k
            </div>
            <div className={style.trophies}>
                <div className={style.trophyicon}>
                    <img className='' src={trophy} />
                </div>
                <div className={style.trophynumber}>
                    2256
                </div>
            </div>
        </div><div className={style.FriendsList}>
            <div className={style.leaderprofilepic}><img src = {"../icons/profilepic-min.png"} /></div>
            <div className={style.personname}>
                Soumya Dutta
            </div>
            <div className={style.mighte}>
                <div className={style.mightprop}>might:</div>
                80k
            </div>
            <div className={style.trophies}>
                <div className={style.trophyicon}>
                    <img className='' src={trophy} />
                </div>
                <div className={style.trophynumber}>
                    2256
                </div>
            </div>
        </div><div className={style.FriendsList}>
            <div className={style.leaderprofilepic}><img src = {"../icons/profilepic-min.png"} /></div>
            <div className={style.personname}>
                Soumya Dutta
            </div>
            <div className={style.mighte}>
                <div className={style.mightprop}>might:</div>
                80k
            </div>
            <div className={style.trophies}>
                <div className={style.trophyicon}>
                    <img className='' src={trophy} />
                </div>
                <div className={style.trophynumber}>
                    2256
                </div>
            </div>
        </div>
    </div>
  )
}

export function Alerts() {
    return (
      <div className={style.achievementModalgrid}>
          <div className={style.AlertList}>
            <div className={style.alert}>
                someone accepted your friendship request
            </div>
            <div className={style.alerttime}>
                59 seconds ago
            </div>
          </div>
          <div className={style.AlertList}>
            <div className={style.alert}>
                someone accepted your friendship request
            </div>
            <div className={style.alerttime}>
                59 seconds ago
            </div>
          </div><div className={style.AlertList}>
            <div className={style.alert}>
                someone accepted your friendship request
            </div>
            <div className={style.alerttime}>
                59 seconds ago
            </div>
          </div><div className={style.AlertList}>
            <div className={style.alert}>
                someone accepted your friendship request
            </div>
            <div className={style.alerttime}>
                59 seconds ago
            </div>
          </div><div className={style.AlertList}>
            <div className={style.alert}>
                someone accepted your friendship request
            </div>
            <div className={style.alerttime}>
                59 seconds ago
            </div>
          </div><div className={style.AlertList}>
            <div className={style.alert}>
                someone accepted your friendship request
            </div>
            <div className={style.alerttime}>
                59 seconds ago
            </div>
          </div><div className={style.AlertList}>
            <div className={style.alert}>
                someone accepted your friendship request
            </div>
            <div className={style.alerttime}>
                59 seconds ago
            </div>
          </div><div className={style.AlertList}>
            <div className={style.alert}>
                someone accepted your friendship request
            </div>
            <div className={style.alerttime}>
                59 seconds ago
            </div>
          </div>
        </div>
    )
}
export function Mail() {
    const {photoURL } = auth.currentUser;
    return (
      <div className={style.achievementModalgrid}>
          <div className={style.MailList}>
            <div className={style.leaderprofilepic}><img src = {photoURL || "../icons/profilepic-min.png"} /></div>
            <div className={style.subjectLine}>
                someone accepted your friendship request
            </div>
            <div className={style.mailtime}>
                59 seconds ago
            </div>
          </div>
          <div className={style.MailList}>
            <div className={style.leaderprofilepic}><img src = {photoURL || "../icons/profilepic-min.png"} /></div>
            <div className={style.subjectLine}>
                someone accepted your friendship request
            </div>
            <div className={style.mailtime}>
                59 seconds ago
            </div>
          </div><div className={style.MailList}>
            <div className={style.leaderprofilepic}><img src = {photoURL || "../icons/profilepic-min.png"} /></div>
            <div className={style.subjectLine}>
                someone accepted your friendship request
            </div>
            <div className={style.mailtime}>
                59 seconds ago
            </div>
          </div><div className={style.MailList}>
            <div className={style.leaderprofilepic}><img src = {photoURL || "../icons/profilepic-min.png"} /></div>
            <div className={style.subjectLine}>
                someone accepted your friendship request
            </div>
            <div className={style.mailtime}>
                59 seconds ago
            </div>
          </div><div className={style.MailList}>
            <div className={style.leaderprofilepic}><img src = {photoURL || "../icons/profilepic-min.png"} /></div>
            <div className={style.subjectLine}>
                someone accepted your friendship request
            </div>
            <div className={style.mailtime}>
                59 seconds ago
            </div>
          </div><div className={style.MailList}>
            <div className={style.leaderprofilepic}><img src = {photoURL || "../icons/profilepic-min.png"} /></div>
            <div className={style.subjectLine}>
                someone accepted your friendship request
            </div>
            <div className={style.mailtime}>
                59 seconds ago
            </div>
          </div><div className={style.MailList}>
            <div className={style.leaderprofilepic}><img src = {photoURL || "../icons/profilepic-min.png"} /></div>
            <div className={style.subjectLine}>
                someone accepted your friendship request
            </div>
            <div className={style.mailtime}>
                59 seconds ago
            </div>
          </div><div className={style.MailList}>
            <div className={style.leaderprofilepic}><img src = {photoURL || "../icons/profilepic-min.png"} /></div>
            <div className={style.subjectLine}>
                someone accepted your friendship request
            </div>
            <div className={style.mailtime}>
                59 seconds ago
            </div>
          </div><div className={style.MailList}>
            <div className={style.leaderprofilepic}><img src = {photoURL || "../icons/profilepic-min.png"} /></div>
            <div className={style.subjectLine}>
                someone accepted your friendship request
            </div>
            <div className={style.mailtime}>
                59 seconds ago
            </div>
          </div>
        </div>
    )
}
export default Achievementmodal