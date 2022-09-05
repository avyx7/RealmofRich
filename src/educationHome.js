import React, { useEffect, useState} from 'react';
import EducationHomeHeader from "./educationHomeHeader";
import EducationCarousel from "./educationCarousel";
import './educationHome.css';
import './group.css';
import './chat.css';
import DogAnimated from "./dogAnimated";
import ChatModule from "./chatmodule";
import UpgradeVIP from "./upgradeVIP";
import Modal from 'react-modal';
import close from "./icons/close.png";
import firebase from "firebase/app";
import 'firebase/firestore';
import EducationShop from './educationShop';

const educationShopStyles = {
    content: {
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        border: 'none',
        padding:'0',
        background: 'none',
    },
  };
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
  

function EducationHome() {
    const [chatOpen, setchatOpen] = useState(true);
    const [profilemenu, setprofilemenu] = useState(false);
    const [upgradeVIP, setupgradeVIP] = useState(false);
    const [educationShopIsOpen, seteducationShopIsOpen] = useState(false);
    const [FlowermodalIsOpen, setFlowermodalIsOpen] = useState(true);
    const [FlowermodalOption, setFlowermodalOption] = useState('');
    const [flowermenuAchievement, setflowermenuAchievement] = useState('');
    const [flowermenuAchievementAlert, setflowermenuAchievementAlert] = useState(0);
    const [flowermenuLeaderboard, setflowermenuLeaderboard] = useState('');
    const [flowermenuLeaderboardAlert, setflowermenuLeaderboardAlert] = useState(0);
    const [flowermenuCreateGroup, setflowermenuCreateGroup] = useState('');

    const [flowermenuFriends, setflowermenuFriends] = useState('');
    const [flowermenuFriendsAlert, setflowermenuFriendsAlert] = useState(0);
    const [flowermenuMygroups, setflowermenuMygroups] = useState('');

    const [flowermenuAlerts, setflowermenuAlerts] = useState('');
    const [flowermenuAlertsAlert, setflowermenuAlertsAlert] = useState(0);
    const [flowermenuMail, setflowermenuMail] = useState('');
    const [flowermenuMailAlert, setflowermenuMailAlert] = useState(0);
    const [flowermenuGiftbox, setflowermenuGiftbox] = useState('');
    const [flowermenuGiftboxAlert, setflowermenuGiftboxAlert] = useState(0);

    let unsubscribe;

    const togglechatOpen = ()=> {
        setchatOpen(!chatOpen);
    }
    const toggleprofilemenu = ()=> {
        setprofilemenu(!profilemenu);
    }
    const toggleupgradeVIP = ()=> {
        setupgradeVIP(!upgradeVIP);
    }
    
    function openeducationShop() {
        seteducationShopIsOpen(true);

    }

    function closeeducationShop() {
        seteducationShopIsOpen(false);
    }

    //<-----------------------------Flower Menu -------------------------------->
    function openFlowerModal(option) {

        setFlowermodalOption(option);
        setFlowermodalIsOpen(true);

    }
    /*
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }
    */
    function closeFlowerModal() {
        setFlowermodalIsOpen(false);
    }
    
    /*
    function readFlowermenu(){
        const dataref = firestore.collection('flowermenu/doc/achievement/');
        if (flowermenuAchievement == null){
            unsubscribe = dataref.onSnapshot((querySnapshot) => {
                // Respond to data
                console.log (querySnapshot);

              })
        }
    }
    */
    //<--------------------------End of Flower Menu ----------------------------->
    useEffect(()=>{
        // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
        Modal.setAppElement('#modalanchor');

        //attching Snapshot Listener
        const dataref = firebase.firestore().collection("flowermenu/doc/achievement/");
        if (flowermenuAchievement == ''){
            setflowermenuAchievement('false');
            console.log('flowermenuAchievement');
            unsubscribe = dataref.onSnapshot((querySnapshot) => {
                // Respond to data
                var cities = [];
                querySnapshot.forEach((doc) => {
                    cities.push(doc.data().heading);
                });
                console.log("Current cities in CA: ", cities.join(", "));
                setflowermenuAchievementAlert(flowermenuAchievementAlert+1);
            })
        }
        return function cleanup(){
            // Stop listening to changes
            unsubscribe();
        };
    },[])
        /*if (this.state.upgradeVIP) {
            return (<UpgradeVIP
                setupgradeVIP = {()=>this.setupgradeVIP}
                 />)
        }else
        */
     return (
        <div>
            <div id = 'modalanchor'></div>
                <div className={educationShopIsOpen? 'educationmodalcontainer' : 'not-active'}>
                    <div className='educationmodalhead'>
                        <div className='educationmodalheadcontainer'>
                            <div className='educationmodalheadtext'>
                            </div>
                            <div className='educationmodalclosebutton' >
                            <img src = {close} onClick={closeeducationShop}/>
                            </div>
                        </div>
                    </div>
                    <div className='educationmodalcontent' id = "educationmodalcontentid">
                        
                        <EducationShop/>
                    </div>
                </div>

            <Modal
                isOpen={FlowermodalIsOpen}
                //onAfterOpen={afterOpenModal}
                onRequestClose={closeFlowerModal}
                style={customStyles}
            >
                <div className='modalcontainer'>
                    <div className='modalhead'>
                        <div className='modalheadcontainer'>
                            <div className='modalheadtext'>
                            {FlowermodalOption == 'achievement'? 'Achievement': FlowermodalOption == 'leaderboard' ? 'Leaderboard' : 
                            FlowermodalOption == 'creategroup' ? 'Create group' : FlowermodalOption == 'friends' ? 'Friends' :
                            FlowermodalOption == 'mygroups' ? 'My groups' : FlowermodalOption == 'alerts' ? 'Alerts' :
                            FlowermodalOption == 'mail' ? 'Mail' : FlowermodalOption == 'giftbox' ? 'Giftbox' : "Else"
                            }
                            </div>
                            <div className='modalclosebutton' >
                            <img src = {close} onClick={closeFlowerModal}/>
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
            openeducationShop = {openeducationShop}
            //setlogout = {setlogout}
            />
            <div id="main">
            <EducationCarousel/>
            
            <>

                <Chat 
                chatOpen= {chatOpen}
                setchatOpen = {togglechatOpen}
                flowermenuOpen = {openFlowerModal}
                flowermenuAchievementAlert = {flowermenuAchievementAlert}
                flowermenuLeaderboardAlert = {flowermenuLeaderboardAlert}

                flowermenuFriendsAlert = {flowermenuFriendsAlert}
                flowermenuAlertsAlert = {flowermenuAlertsAlert}
                flowermenuMailAlert = {flowermenuMailAlert}
                flowermenuGiftboxAlert = {flowermenuGiftboxAlert}
                />
            </>
            </div>

        </div>


    );

}

    function Chat(props) {
        const [addmargin, setaddmargin] = useState(false);
        const toggleaddmargin = ()=>{
            setaddmargin(!addmargin);
        }

            return(
            <div className={"sticktobottom"+(props.chatOpen ? "":' sticktobottom-inactive')+(addmargin ? ' addmargintochat' :'')}>
            <DogAnimated/>
            
            <ChatModule 
            chatOpen ={props.chatOpen}
            onClick = {()=> props.setchatOpen}
            flowermenuOpen = {props.flowermenuOpen}
            flowermenuAchievementAlert = {props.flowermenuAchievementAlert}
            flowermenuLeaderboardAlert = {props.flowermenuLeaderboardAlert}

            flowermenuFriendsAlert = {props.flowermenuFriendsAlert}
            flowermenuAlertsAlert = {props.flowermenuAlertsAlert}
            flowermenuMailAlert = {props.flowermenuMailAlert}
            flowermenuGiftboxAlert = {props.flowermenuGiftboxAlert}
            addmargin = {toggleaddmargin}
            />
            </div>
            );
    }
    
export default EducationHome;