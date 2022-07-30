import React, { useState} from 'react';
import EducationHomeHeader from "./educationHomeHeader";
import EducationCarousel from "./educationCarousel";
import './educationHome.css';
import './group.css';
import './chat.css';
import DogAnimated from "./dogAnimated";
import ChatModule from "./chatmodule";
import UpgradeVIP from "./upgradeVIP";
import Modal from 'react-modal';
import AchievementModal from "./components/achievementModal";
import close from "./icons/close.png"

const customStyles = {
    content: {
        top: '10vh',
        right: '23vw',
        bottom: '10vh',
        left: '23vw',
        border: 'none',
        padding:'0',
        background: 'none',
    },
  };
  

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function EducationHome() {
    const [chatOpen, setchatOpen] = useState(true);
    const [profilemenu, setprofilemenu] = useState(false);
    const [upgradeVIP, setupgradeVIP] = useState(false);
    const [FlowermodalIsOpen, setFlowermodalIsOpen] = useState(true);


    const togglechatOpen = ()=> {
        setchatOpen(!chatOpen);
    }
    const toggleprofilemenu = ()=> {
        setprofilemenu(!profilemenu);
    }
    const toggleupgradeVIP = ()=> {
        setupgradeVIP(!upgradeVIP);
    }
    

    function openModal() {
        setFlowermodalIsOpen(true);
    }
    /*
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }
    */
    function closeModal() {
        setFlowermodalIsOpen(false);
    }
    

        /*if (this.state.upgradeVIP) {
            return (<UpgradeVIP
                setupgradeVIP = {()=>this.setupgradeVIP}
                 />)
        }else
        */
     return (
        <div>
            <button onClick={openModal}>Open Modal</button>
            <Modal
                isOpen={FlowermodalIsOpen}
                //onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <div className='modalcontainer'>
                    <div className='modalhead'>
                        <div className='modalheadcontainer'>
                            <div className='modalheadtext'>
                                Achievementssssssssssss
                            </div>
                            <div className='modalclosebutton' >
                            <img src = {close} onClick={closeModal}/>
                            </div>
                        </div>
                    </div>
                    <div className='modalcontent'>

                    </div>
                </div>
            </Modal>
            
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