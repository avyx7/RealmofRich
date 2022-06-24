import EducationHomeHeader from "./educationHomeHeader";
import EducationCarousel from "./educationCarousel";
import './educationHome.css';
import './group.css';
import './chat.css';
import DogAnimated from "./dogAnimated";
import ChatModule from "./chatmodule";
import UpgradeVIP from "./upgradeVIP";
import React from "react";


class EducationHome extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            chatOpen: true,
            profilemenu: false,
            upgradeVIP:false
        };
        this.setchatOpen = this.setchatOpen.bind(this);
        this.setprofilemenu = this.setprofilemenu.bind(this);
        this.setupgradeVIP = this.setupgradeVIP.bind(this);

    }

    setchatOpen() {
        this.setState({
            chatOpen: !(this.state.chatOpen)
        });

    }
    setprofilemenu() {
        this.setState({
            profilemenu: !(this.state.profilemenu)
        });

    }
    setupgradeVIP() {
        this.setState({
            upgradeVIP: !(this.state.upgradeVIP)
        });

    }
    

    render(){
        if (this.state.upgradeVIP) {
            return (<UpgradeVIP
                setupgradeVIP = {()=>this.setupgradeVIP}
                 />)
        }else
     return (
        <div>

            <EducationHomeHeader
            profilemenu = {this.state.profilemenu}
            setprofilemenu = {this.setprofilemenu}
            upgradeVIP = {this.state.upgradeVIP}
            setupgradeVIP = {this.setupgradeVIP}
            setlogout = {this.setlogout}
            />
            <div id="main">
            <EducationCarousel/>
            
            <section>

                <Chat 
                chatOpen= {this.state.chatOpen}
                setchatOpen = {this.setchatOpen}
                />
            </section>
            </div>

        </div>


        );
    }
}

    class Chat extends React.Component {
        constructor(props){
            super(props);
            this.state={
            };
        }
        render(){
            return(
            <div className={"sticktobottom"+(this.props.chatOpen ? "":' sticktobottom-inactive')}>
            <DogAnimated/>
            
            <ChatModule 
            chatOpen ={this.props.chatOpen}
            onClick = {()=> this.props.setchatOpen}
            />
            </div>
            );
        }
    }
    
export default EducationHome;