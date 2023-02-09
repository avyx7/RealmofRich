import { ChatRoom } from './chatFunction';
import React from "react";

function ChatModule(props) {

    return (               
        <>      
        {/* Added Chat container from here */}
        <div className='circularicongroup'>
            <div className="circularicon" onClick = {props.toggleflowermenu}>
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
            <div className={"downArrow"+(props.chatOpen ? "":' downArrow-maximize')} onClick = {props.onClick()}></div>
        </div>
        <div className={"chatcontainer"+(props.chatOpen ? "":' chatcontainer-inactive')}>
            <header>

            
            <div className="chatheader push-to-side"></div>
            <div className={"chatheader minimize"+(props.chatOpen ? "":'-invert')} onClick = {props.onClick()}></div>


            </header>
        <div className={"chatgrid"+(props.chatOpen ? "":' chatgrid-inactive')} >
            <div className="leftchat">
                <div className="leadershipiconscontainer">
                    <div className="achievement icon-animate" onClick={()=> props.flowermenuOpen('achievement')}>
                        <div className={props.flowermenuAchievementAlert == 0? 'displaynone': 'alertnumber'}>
                            {props.flowermenuAchievementAlert}
                        </div>
                    </div>

                    <div className="leaderboard icon-animate" onClick={()=> props.flowermenuOpen('leaderboard')}>
                        <div className={props.flowermenuLeaderboardAlert == 0? 'displaynone': 'alertnumber'}>
                            {props.flowermenuLeaderboardAlert}
                        </div>
                    </div>

                    <div className="tournament icon-animate">
                        <div className='locked'></div>
                    </div>
                </div>    

            </div>
        
        <div className="chatbone">
            <ChatRoom
            /*addmargin = {props.addmargin}*/ />


        </div>
        <div className="chatright">
            <div className="groupiconscontainer">
                
                <div className="creategroup icon-animate" onClick={()=> props.flowermenuOpen('creategroup')}>
                </div>

                <div className="friends icon-animate" onClick={()=> props.flowermenuOpen('friends')}>
                    <div className={props.flowermenuFriendsAlert == 0? 'displaynone': 'alertnumber'}>
                        {props.flowermenuFriendsAlert}
                    </div>
                </div>

                <div className="mygroups icon-animate" onClick={()=> props.flowermenuOpen('mygroups')}>
                </div>

                <div className="alerts icon-animate" onClick={()=> props.flowermenuOpen('alerts')}>
                    <div className={props.flowermenuAlertsAlert == 0? 'displaynone': 'alertnumber'}>
                        {props.flowermenuAlertsAlert}
                    </div>
                </div>

                <div className="mail icon-animate" onClick={()=> props.flowermenuOpen('mail')}>
                    <div className={props.flowermenuMailAlert == 0? 'displaynone': 'alertnumber'}>
                        {props.flowermenuMailAlert}
                    </div>
                </div>

                <div className="giftbox icon-animate" onClick={()=> props.flowermenuOpen('giftbox')}>
                    <div className={props.flowermenuGiftboxAlert == 0? 'displaynone': 'alertnumber'}>
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