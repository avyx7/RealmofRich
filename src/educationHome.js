import React, { useState} from 'react';
import EducationHomeHeader from "./educationHomeHeader";
import EducationCarousel from "./educationCarousel";
import './educationHome.css';
import './group.css';
import './chat.css';
import DogAnimated from "./dogAnimated";
import ChatModule from "./chatmodule";
import UpgradeVIP from "./upgradeVIP";


function EducationHome() {
    const [chatOpen, setchatOpen] = useState(true);
    const [profilemenu, setprofilemenu] = useState(false);
    const [upgradeVIP, setupgradeVIP] = useState(false);


    const togglechatOpen = ()=> {
        setchatOpen(!chatOpen);
    }
    const toggleprofilemenu = ()=> {
        setprofilemenu(!profilemenu);
    }
    const toggleupgradeVIP = ()=> {
        setupgradeVIP(!upgradeVIP);
    }
    



        /*if (this.state.upgradeVIP) {
            return (<UpgradeVIP
                setupgradeVIP = {()=>this.setupgradeVIP}
                 />)
        }else
        */
     return (
        <div>

            <EducationHomeHeader
            profilemenu = {profilemenu}
            setprofilemenu = {toggleprofilemenu}
            upgradeVIP = {upgradeVIP}
            setupgradeVIP = {toggleupgradeVIP}
            //setlogout = {setlogout}
            />
            <div id="main">
            <EducationCarousel/>
            
            <>

                <Chat 
                chatOpen= {chatOpen}
                setchatOpen = {togglechatOpen}
                />
            </>
            </div>

        </div>


    );

}

    function Chat(props) {

            return(
            <div className={"sticktobottom"+(props.chatOpen ? "":' sticktobottom-inactive')}>
            <DogAnimated/>
            
            <ChatModule 
            chatOpen ={props.chatOpen}
            onClick = {()=> props.setchatOpen}
            />
            </div>
            );
    }
    
export default EducationHome;