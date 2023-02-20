import React from "react";
import { ChatRoom } from './chatFunction';
import style from '../../assets/chat.module.css';
import style1 from '../../assets/group.module.css';


function ChatModule(props) {

    return (               
        <>      
        {/* Added Chat container from here */}
        <div className={style1.circularicongroup}>
            <div className={style1.circularicon} onClick = {props.toggleflowermenu}>
                        {/* 
                        <nav class="menu">
                            <input type="checkbox" href="#" class="menu-open" name="menu-open" id="menu-open" />
                            <label class="menu-open-button" for="menu-open">
                                        
                            </label>

                            <a href="#" class="menu-item blue"> <i class="fa fa-anchor"></i> </a>
                            <a href="#" class="menu-item green"> <i class="fa fa-coffee"></i> </a>
                            <a href="#" class="menu-item red"> <i class="fa fa-heart"></i> </a>
                            <a href="#" class="menu-item purple"> <i class="fa fa-microphone"></i> </a>
                            <a href="#" class="menu-item orange"> <i class="fa fa-star"></i> </a>
                            <a href="#" class="menu-item red"> <i class="fa fa-diamond"></i> </a>
                        </nav>
                        */}
            </div>
            <div className={`${style.downArrow}`+(props.chatOpen ? "":' '+ `${style.downArrowmaximize}`)} onClick = {props.onClick()}></div>
        </div>
        <div className={`${style.chatcontainer}`+(props.chatOpen ? "":' '+`${style.chatcontainerinactive}`)}>
            <header>

            
            <div className={`${style1.chatheader}`+' '+`${style1.pushtoside}`}></div>
            <div className={`${style1.chatheader}`+' '+(props.chatOpen ? `${style1.minimize}`:`${style1.minimizeinvert}`)} onClick = {props.onClick()}></div>


            </header>
        <div className={`${style.chatgrid}`+(props.chatOpen ? "":' '+`${style.chatgridinactive}`)} >
            <div className={style.leftchat}>
                <div className={style1.leadershipiconscontainer}>
                    <div className={`${style1.achievement}`+' '+`${style1.iconanimate}`} onClick={()=> props.flowermenuOpen('achievement')}>
                        <div className={props.flowermenuAchievementAlert == 0? `${style1.displaynone}`: `${style1.alertnumber}`}>
                            {props.flowermenuAchievementAlert}
                        </div>
                    </div>

                    <div className={`${style1.leaderboard}`+' '+`${style1.iconanimate}`} onClick={()=> props.flowermenuOpen('leaderboard')}>
                        <div className={props.flowermenuLeaderboardAlert == 0? `${style1.displaynone}`: `${style1.alertnumber}`}>
                            {props.flowermenuLeaderboardAlert}
                        </div>
                    </div>

                    <div className={`${style1.tournament}`+' '+`${style1.iconanimate}`}>
                        <div className={style1.locked}></div>
                    </div>
                </div>    

            </div>
        
        <div className={style.chatbone}>
            <ChatRoom
            /*addmargin = {props.addmargin}*/ />


        </div>
        <div className={style.chatright}>
            <div className={style1.groupiconscontainer}>
                
                <div className={`${style1.creategroup}`+' '+`${style1.iconanimate}`} onClick={()=> props.flowermenuOpen('creategroup')}>
                </div>

                <div className={`${style1.friends}`+' '+`${style1.iconanimate}`} onClick={()=> props.flowermenuOpen('friends')}>
                    <div className={props.flowermenuFriendsAlert == 0? `${style1.displaynone}`: `${style1.alertnumber}`}>
                        {props.flowermenuFriendsAlert}
                    </div>
                </div>

                <div className={`${style1.mygroups}`+' '+`${style1.iconanimate}`} onClick={()=> props.flowermenuOpen('mygroups')}>
                </div>

                <div className={`${style1.alerts}`+' '+`${style.iconanimate}`} onClick={()=> props.flowermenuOpen('alerts')}>
                    <div className={props.flowermenuAlertsAlert == 0? `${style1.displaynone}`: `${style1.alertnumber}`}>
                        {props.flowermenuAlertsAlert}
                    </div>
                </div>

                <div className={`${style1.mail}`+' '+`${style.iconanimate}`} onClick={()=> props.flowermenuOpen('mail')}>
                    <div className={props.flowermenuMailAlert == 0? `${style1.displaynone}`: `${style1.alertnumber}`}>
                        {props.flowermenuMailAlert}
                    </div>
                </div>

                <div className={`${style1.giftbox}`+' '+`${style.iconanimate}`} onClick={()=> props.flowermenuOpen('giftbox')}>
                    <div className={props.flowermenuGiftboxAlert == 0? `${style1.displaynone}`: `${style1.alertnumber}`}>
                        {props.flowermenuGiftboxAlert}
                    </div>
                </div>
            </div>
        </div>
        </div>
            </div>
            {/* End of Chat container -------- */}
        </>  
    );
    

}

export default ChatModule;