import { auth } from 'firebaseui';
import React from "react";
import ProfileMenu from './profileMenu';

class EducationHomeHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            pulse:true
        }
        this.setpulse = this.setpulse.bind(this);
    }
    setpulse(){
        this.setState({
        pulse: !this.state.pulse
        });
    }
render () {
    return (
        <div>
            <div class="educationhomeheader"
                            onMouseEnter={() => this.setpulse}
                            onMouseLeave={() => this.setpulse}
            >
                <div className = "elogo">
                    
                </div>

                <div class="wrapper">
                    <div class="searchBar">
                        <input id="searchQueryInput" type="text" name="searchQueryInput" placeholder="Search for People, Group, Services" value="" />
                        <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit">
                        <svg className="searchicon" viewBox="0 0 24 24"><path fill="#666666" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                        </svg>
                        </button>
                    </div>
                </div>
                <div className="profilecontainer">
                <img className="vip" src = "../icons/002-coin.png" alt = "vip icon"></img>
                <img className = {"profilepic "+(this.state.pulse ? "pulse-button":'')}
                src = "../icons/profilepic-min.png" alt = "profile pic"
                onClick = {()=>this.props.setprofilemenu()}
                ></img>
                <ProfileMenu
                profilemenu = {this.props.profilemenu}
                onClick = {()=> this.props.setprofilemenu}

                upgradeVIP = {this.props.upgradeVIP}
                setupgradeVIP = {()=> this.props.setupgradeVIP}

                setlogout = {()=> this.props.setlogout }
                />
                </div>
                
            </div>

            <div className="educationsubheader">
                

            </div>
        </div>
    );
}
}

function SignOut() {
    
        if (auth.currentUser = null){
            return null;
        }
        else{
            return (<button className="headerbutton sign-out" id ="loginbutton" onClick={() => auth.signOut()}>Sign Out</button>);
        }
      

  }


export default EducationHomeHeader;