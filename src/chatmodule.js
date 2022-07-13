import { ChatRoom } from './chatFunction';
import React from "react";

function ChatModule(props) {

    return (               
        <div>      
        {/* Added Chat container from here */}
        <div className="circularicon">
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
                </div>
        <div className={"downArrow"+(props.chatOpen ? "":' downArrow-maximize')} onClick = {props.onClick()}></div>
        <div className={"chatcontainer"+(props.chatOpen ? "":' chatcontainer-inactive')}>
            <header>

            
            <div className="chatheader push-to-side"></div>
            <div className={"chatheader minimize"+(props.chatOpen ? "":'-invert')} onClick = {props.onClick()}></div>


            </header>
        <div className={"chatgrid"+(props.chatOpen ? "":' chatgrid-inactive')} >
            <div className="leftchat">
                <div className="leadershipiconscontainer">
                    <div className="achievement icon-animate">
                    </div>

                    <div className="leaderboard icon-animate">
                    </div>

                    <div className="tournament icon-animate">
                    </div>
                </div>    

            </div>
        
        <div className="chatbone">
            <ChatRoom/>


        </div>
        <div className="chatright">
            <div className="groupiconscontainer">
                
                <div className="creategroup icon-animate">
                </div>

                <div className="searchgroup icon-animate">
                </div>

                <div className="mygroups icon-animate">
                </div>

                <div className="alerts icon-animate">
                </div>

                <div className="mail icon-animate">
                </div>

                <div className="giftbox icon-animate">
                </div>
            </div>
        </div>
        </div>
            </div>
            {/* End of Chat container -------- */}
        </div>  
    );
    

}

export default ChatModule;