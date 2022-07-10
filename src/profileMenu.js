import React, { Component } from 'react';
import { Link } from 'react-router-dom';


function ProfileMenu(props) {

        return (
            <div>
                <nav className={!props.profilemenu ? "not-active": "profilemenu"} onClick = {props.onClick()}>
                    <ul className="profile-menu">
                        <li className="profile-menu-items" onClick={props.setupgradeVIP()}>
 
                            <img className="vip" src = "../icons/vipcircle-min.png" alt = "vip icon"></img> Upgrade VIP

                        </li>
                        <li className="profile-menu-items">
                            <Link to = "#">
                                View Profile
                            </Link>
                        </li>
                        <li className="profile-menu-items">
                            <Link to = "#">
                                Help & Support
                            </Link>
                        </li>
                        <li className="profile-menu-items" >
                            <Link to = "#">
                                Log Out
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )

}

export default ProfileMenu;